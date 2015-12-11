(ns hangman.core-test
  (:require [clojure.test :refer :all]
            [hangman.core :refer :all]))

(deftest present-word-test
         (testing "Test whether displaying word works"
                  (are [x y] (= x y)
                       "" (present-word "" "")
                       "a__" (present-word "aei" "abc")
                       "___" (present-word "abc" "")
                       "abc" (present-word "abc" "abc")
                       "aaa" (present-word "aaa" "abc")
                       "He__o Wor_d" (present-word "Hello World" "edhorw"))))