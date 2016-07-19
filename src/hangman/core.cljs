(ns hangman.core
  (:require [reagent.core :as r]
            [clojure.browser.event :as event]))

(enable-console-print!)

;state
(defonce all-words-coll ["EQUIVOCATION" "MAXIM"])
(defonce all-letters-coll (map char (range 65 91)));(int \A) doens't seem to work in clojurescript :( 65 = (int \A) 91 = (+ 1 (int \Z))
;mutable-state
(defonce word (r/atom (rand-nth all-words-coll)))
(defonce guessed-letters (r/atom #{}))


(defn set-new-game! []
  (reset! word (rand-nth all-words-coll))
  (reset! guessed-letters #{}))

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






(defn body-cmpt [part]
  [:div {:key part :class part}])

(defn gallows [word letters]
  [:div {:class-name (str "gallows " (when (game-over? word letters) "gameOver") (when (win-game? word letters) "youWin"))}
   (take (get-mistakes-count word letters) [[body-cmpt "head"] [body-cmpt "body"] [body-cmpt "larm"] [body-cmpt "rarm"] [body-cmpt "lleg"] [body-cmpt "rleg"]])])

(defn displayed-word [word letters]
  [:div.word (present-word (.toUpperCase word) (reduce str letters))])

(defn guess-letter-component [key-map letter guessed-letters game-over]
  (let [letter-guessed (when (some (set letter) guessed-letters) true)]
    [:span
     (if (or letter-guessed game-over)
       (assoc key-map :class "guessed")
       (assoc key-map :on-click #(guess-letter! letter)))
     letter]))

(defn all-letters [guessed-letters game-over]
  [:div (for [l all-letters-coll]
          ;not using #(guess-letter-component %) because that doesn't update the classes in the sub-components
          [guess-letter-component {:key (str "guess-" l)} l guessed-letters game-over])])

(defn controls []
  [:div [:button {:onClick set-new-game!} "New Game"]])

(defn app-comp []
  [:div
   [:h1 "Hangman!"]
   [gallows @word @guessed-letters]
   [displayed-word @word @guessed-letters]
   [all-letters @guessed-letters (or (win-game? @word @guessed-letters) (game-over? @word @guessed-letters))]
   [controls]])

(r/render-component [app-comp]
                    (. js/document (getElementById "app")))

(event/listen js/document.body :keypress
  (fn [e]
    (let [char (.toUpperCase (.fromCharCode js/String (.-charCode e)))
          game-over (or (win-game? @word @guessed-letters) (game-over? @word @guessed-letters))]
      (when (not game-over)
        (guess-letter! char)))))


;(defn on-js-reload [])
