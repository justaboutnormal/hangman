(ns hangman.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def app-state
  (atom
    {:app/title "Animals"
     :animals/list
                ["Ant" "Antelope" "Lion" "Mouse" "Monkey" "Snake" "Zebra" "Bird" "Cat" "Dog"]}))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :animals/list
  [{:keys [state] :as env} key {:keys [start end]}]
  {:value (subvec (:animals/list @state) start end)})

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'add-animal key)
    {:value {:keys [:animals/list]}
     :action #(swap! state update-in [:animals/list] conj "a")}
    {:value :not-found}))

(defui AnimalsList
  static om/IQueryParams
  (params [this]
    {:start 0 :end 10})
  static om/IQuery
  (query [this]
    '[:app/title (:animals/list {:start ?start :end ?end})])
  Object
  (render [this]
    (let [{:keys [app/title animals/list]} (om/props this)]
      (dom/div nil
               (dom/h2 nil title)
               (apply dom/ol nil
                      (map
                        (fn [name]
                          (dom/li nil name))
                        (sort list)))
               (dom/input nil)
               (dom/button #js {:onClick (fn [e] (om/transact! this '[(add-animal)]))} "Add Animal")))))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read})}))

(om/add-root! reconciler
              AnimalsList (gdom/getElement "app"))