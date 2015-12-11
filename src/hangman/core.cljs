(ns hangman.core
  (:require [reagent.core :as r]))

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








(defn body-cmpt [part]
  [:div {:key part :class part}])

(defn gallows [word letters]
  [:div.gallows
   (take (get-mistakes-count word letters) [[body-cmpt "head"] [body-cmpt "body"] [body-cmpt "larm"] [body-cmpt "rarm"] [body-cmpt "lleg"] [body-cmpt "rleg"]])])

(defn displayed-word [word letters]
  [:div.word (present-word (.toUpperCase word) (reduce str letters))])

(defn guess-letter-component [letter guessed-letters]
  (let [letter-guessed (when (some (set letter) guessed-letters) true)
        key-map {:key (str "guess-" letter)}]
    [:span
     (if letter-guessed
       (assoc key-map :class "guessed")
       (assoc key-map :on-click #(guess-letter! letter)))
     letter]))

(defn all-letters [guessed-letters]
  [:div (map
          ;not using #(guess-letter-component %) because that doesn't update the classes in the sub-components
          (fn [l] [guess-letter-component l guessed-letters])
          all-letters-coll)])

(defn controls []
  [:div [:button {:onClick set-new-game!} "New Game"]])

(defn app-comp []
  [:div
   [:h1 "Hangman!"]
   [gallows @word @guessed-letters]
   [displayed-word @word @guessed-letters]
   [all-letters @guessed-letters]
   [controls]])

(r/render-component [app-comp]
                    (. js/document (getElementById "app")))


(defn on-js-reload [])
