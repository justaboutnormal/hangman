(ns hangman.core
  (:require [rum.core :as rum :refer-macros [defc]]
            [clojure.browser.event :as event]))

(enable-console-print!)

;state
(defonce all-words ["EQUIVOCATION" "MAXIM" "ZENITH" "TENACIOUS" "QUIXOTIC" "MYOCARDIAL INFARCTION" "REHETORICAL" "PARADIGM" "OXYMORON" "MISANTHROPE" "LUCID" "IRONY" "HYPERBOLE"])
(defonce all-letters-coll (map char (range 65 91)));(int \A) doens't seem to work in clojurescript :( 65 = (int \A) 91 = (+ 1 (int \Z))
;mutable-state
(defonce word (atom (rand-nth all-words)))
(defonce guessed-letters (atom #{}))


(defn rand-words [n words]
  (if (= n (count words))
    (shuffle (vec words))
    (recur n (conj (or words #{}) (rand-nth all-words)))))

(defonce possible (atom (rand-words 7 #{@word})))
(defonce show-possible (atom false))


(defn set-new-game! []
  (reset! word (rand-nth all-words))
  (reset! guessed-letters #{})
  (reset! possible (rand-words 7 #{@word}))
  (reset! show-possible false))

(defn toggle-show-possible! []
  (reset! show-possible (not @show-possible)))

(defn present-word [word letters]
  (clojure.string/replace word (re-pattern (str "(?i)[^" letters "\\s]")) "_"))

(defn get-mistakes-count [word letters]
  (count (filter (fn [l] (= -1 (.indexOf word l))) letters)))

(defn guess-letter! [letter]
  (swap! guessed-letters conj letter))

(defn win-game? [word letters]
  (= -1 (.indexOf (present-word word letters) "_")))

(defn game-over? [word letters]
  (< 5 (get-mistakes-count word letters)))







(defc gallows [word letters]
  [:div {:class-name (str "gallows " (when (game-over? word letters) "gameOver") (when (win-game? word letters) "youWin"))}
   (take (get-mistakes-count word letters) (for [p ["head" "body" "larm" "rarm" "lleg" "rleg"]]
                                             [:div {:key p :class p}]))])

(defc displayed-word [word letters]
  [:div.word (present-word (.toUpperCase word) (reduce str letters))])


(defc all-letters [guessed-letters game-over]
  [:div (for [l all-letters-coll]
          (let [guessed (when (some (set l) guessed-letters) true)
                meta {:key (str "guess-" l)}
                meta (if (or guessed game-over)
                       (assoc meta :class "guessed")
                       (assoc meta :on-click #(guess-letter! l)))]
            [:span meta l]))])

(defc controls []
  [:div [:button {:onClick set-new-game!} "New Game"] [:span.tooltip [:span.tooltiptext "See list of potential words"] [:button {:onClick toggle-show-possible!} "Display Hint"]]])

(defc possible-words []
  [:div "The word is one of the following"
   [:ul
    (for [p @possible]
      [:li {:key (str "possible-" p)} p])]])

(defc app < rum/reactive []
  (let [w (rum/react word)
        gl (rum/react guessed-letters)
        sp (rum/react show-possible)]
    [:div
     [:h1 "Hangman!"]
     (gallows w gl)
     (displayed-word w gl)
     (all-letters gl (or (win-game? w gl) (game-over? w gl)))
     (controls)
     (and sp (possible-words))]))


(rum/mount (app) (.getElementById js/document "app"))

(event/listen js/document.body :keypress
  (fn [e]
    (let [char (.toUpperCase (.fromCharCode js/String (.-charCode e)))
          game-over (or (win-game? @word @guessed-letters) (game-over? @word @guessed-letters))]
      (when (not game-over)
        (guess-letter! char)))))


;(defn on-js-reload [])
