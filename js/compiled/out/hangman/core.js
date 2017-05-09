// Compiled by ClojureScript 1.9.521 {}
goog.provide('hangman.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('clojure.browser.event');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof hangman.core.all_words !== 'undefined'){
} else {
hangman.core.all_words = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["EQUIVOCATION","MAXIM","ZENITH","TENACIOUS","QUIXOTIC","MYOCARDIAL INFARCTION","REHETORICAL","PARADIGM","OXYMORON","MISANTHROPE","LUCID","IRONY","HYPERBOLE"], null);
}
if(typeof hangman.core.all_letters_coll !== 'undefined'){
} else {
hangman.core.all_letters_coll = cljs.core.map.call(null,cljs.core.char$,cljs.core.range.call(null,(65),(91)));
}
if(typeof hangman.core.word !== 'undefined'){
} else {
hangman.core.word = cljs.core.atom.call(null,cljs.core.rand_nth.call(null,hangman.core.all_words));
}
if(typeof hangman.core.guessed_letters !== 'undefined'){
} else {
hangman.core.guessed_letters = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
}
hangman.core.rand_words = (function hangman$core$rand_words(n,words){
while(true){
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,words))){
return cljs.core.shuffle.call(null,cljs.core.vec.call(null,words));
} else {
var G__33128 = n;
var G__33129 = cljs.core.conj.call(null,(function (){var or__19143__auto__ = words;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.rand_nth.call(null,hangman.core.all_words));
n = G__33128;
words = G__33129;
continue;
}
break;
}
});
if(typeof hangman.core.possible !== 'undefined'){
} else {
hangman.core.possible = cljs.core.atom.call(null,hangman.core.rand_words.call(null,(7),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.deref.call(null,hangman.core.word)], true)));
}
if(typeof hangman.core.show_possible !== 'undefined'){
} else {
hangman.core.show_possible = cljs.core.atom.call(null,false);
}
hangman.core.set_new_game_BANG_ = (function hangman$core$set_new_game_BANG_(){
cljs.core.reset_BANG_.call(null,hangman.core.word,cljs.core.rand_nth.call(null,hangman.core.all_words));

cljs.core.reset_BANG_.call(null,hangman.core.guessed_letters,cljs.core.PersistentHashSet.EMPTY);

cljs.core.reset_BANG_.call(null,hangman.core.possible,hangman.core.rand_words.call(null,(7),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.deref.call(null,hangman.core.word)], true)));

return cljs.core.reset_BANG_.call(null,hangman.core.show_possible,false);
});
hangman.core.toggle_show_possible_BANG_ = (function hangman$core$toggle_show_possible_BANG_(){
return cljs.core.reset_BANG_.call(null,hangman.core.show_possible,cljs.core.not.call(null,cljs.core.deref.call(null,hangman.core.show_possible)));
});
hangman.core.present_word = (function hangman$core$present_word(word,letters){
return clojure.string.replace.call(null,word,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)[^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(letters),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\s]")].join('')),"_");
});
hangman.core.get_mistakes_count = (function hangman$core$get_mistakes_count(word,letters){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (l){
return cljs.core._EQ_.call(null,(-1),word.indexOf(l));
}),letters));
});
hangman.core.guess_letter_BANG_ = (function hangman$core$guess_letter_BANG_(letter){
return cljs.core.swap_BANG_.call(null,hangman.core.guessed_letters,cljs.core.conj,letter);
});
hangman.core.win_game_QMARK_ = (function hangman$core$win_game_QMARK_(word,letters){
return cljs.core._EQ_.call(null,(-1),hangman.core.present_word.call(null,word,letters).indexOf("_"));
});
hangman.core.game_over_QMARK_ = (function hangman$core$game_over_QMARK_(word,letters){
return ((5) < hangman.core.get_mistakes_count.call(null,word,letters));
});
hangman.core.gallows = rum.core.build_defc.call(null,(function (word,letters){
return React.createElement("div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("gallows "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(hangman.core.game_over_QMARK_.call(null,word,letters))?"gameOver":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(hangman.core.win_game_QMARK_.call(null,word,letters))?"youWin":null))].join('')}),sablono.interpreter.interpret.call(null,cljs.core.take.call(null,hangman.core.get_mistakes_count.call(null,word,letters),(function (){var iter__19931__auto__ = (function hangman$core$iter__33130(s__33131){
return (new cljs.core.LazySeq(null,(function (){
var s__33131__$1 = s__33131;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33131__$1);
if(temp__4657__auto__){
var s__33131__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33131__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__33131__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__33133 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__33132 = (0);
while(true){
if((i__33132 < size__19930__auto__)){
var p = cljs.core._nth.call(null,c__19929__auto__,i__33132);
cljs.core.chunk_append.call(null,b__33133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),p,new cljs.core.Keyword(null,"class","class",-2030961996),p], null)], null));

var G__33134 = (i__33132 + (1));
i__33132 = G__33134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33133),hangman$core$iter__33130.call(null,cljs.core.chunk_rest.call(null,s__33131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33133),null);
}
} else {
var p = cljs.core.first.call(null,s__33131__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),p,new cljs.core.Keyword(null,"class","class",-2030961996),p], null)], null),hangman$core$iter__33130.call(null,cljs.core.rest.call(null,s__33131__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["head","body","larm","rarm","lleg","rleg"], null));
})())));
}),null,"gallows");
hangman.core.displayed_word = rum.core.build_defc.call(null,(function (word,letters){
var attrs33135 = hangman.core.present_word.call(null,word.toUpperCase(),cljs.core.reduce.call(null,cljs.core.str,letters));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33135))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["word"], null)], null),attrs33135)):({"className": "word"})),((cljs.core.map_QMARK_.call(null,attrs33135))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33135)], null)));
}),null,"displayed-word");
hangman.core.all_letters = rum.core.build_defc.call(null,(function (guessed_letters,game_over){
return React.createElement("div",null,cljs.core.into_array.call(null,(function (){var iter__19931__auto__ = (function hangman$core$iter__33137(s__33138){
return (new cljs.core.LazySeq(null,(function (){
var s__33138__$1 = s__33138;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33138__$1);
if(temp__4657__auto__){
var s__33138__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33138__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__33138__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__33140 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__33139 = (0);
while(true){
if((i__33139 < size__19930__auto__)){
var l = cljs.core._nth.call(null,c__19929__auto__,i__33139);
cljs.core.chunk_append.call(null,b__33140,(function (){var guessed = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.set.call(null,l),guessed_letters))?true:null);
var meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("guess-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)].join('')], null);
var meta__$1 = (cljs.core.truth_((function (){var or__19143__auto__ = guessed;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return game_over;
}
})())?cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"class","class",-2030961996),"guessed"):cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33139,guessed,meta,l,c__19929__auto__,size__19930__auto__,b__33140,s__33138__$2,temp__4657__auto__){
return (function (){
return hangman.core.guess_letter_BANG_.call(null,l);
});})(i__33139,guessed,meta,l,c__19929__auto__,size__19930__auto__,b__33140,s__33138__$2,temp__4657__auto__))
));
var attrs33136 = meta__$1;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33136))?sablono.interpreter.attributes.call(null,attrs33136):null),((cljs.core.map_QMARK_.call(null,attrs33136))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,l)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33136),sablono.interpreter.interpret.call(null,l)], null)));
})());

var G__33141 = (i__33139 + (1));
i__33139 = G__33141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33140),hangman$core$iter__33137.call(null,cljs.core.chunk_rest.call(null,s__33138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33140),null);
}
} else {
var l = cljs.core.first.call(null,s__33138__$2);
return cljs.core.cons.call(null,(function (){var guessed = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.set.call(null,l),guessed_letters))?true:null);
var meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("guess-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)].join('')], null);
var meta__$1 = (cljs.core.truth_((function (){var or__19143__auto__ = guessed;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return game_over;
}
})())?cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"class","class",-2030961996),"guessed"):cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (guessed,meta,l,s__33138__$2,temp__4657__auto__){
return (function (){
return hangman.core.guess_letter_BANG_.call(null,l);
});})(guessed,meta,l,s__33138__$2,temp__4657__auto__))
));
var attrs33136 = meta__$1;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33136))?sablono.interpreter.attributes.call(null,attrs33136):null),((cljs.core.map_QMARK_.call(null,attrs33136))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,l)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33136),sablono.interpreter.interpret.call(null,l)], null)));
})(),hangman$core$iter__33137.call(null,cljs.core.rest.call(null,s__33138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,hangman.core.all_letters_coll);
})()));
}),null,"all-letters");
hangman.core.controls = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,React.createElement("button",({"onClick": hangman.core.set_new_game_BANG_}),"New Game"),React.createElement("span",({"className": "tooltip"}),React.createElement("span",({"className": "tooltiptext"}),"See list of potential words"),React.createElement("button",({"onClick": hangman.core.toggle_show_possible_BANG_}),"Display Hint")));
}),null,"controls");
hangman.core.possible_words = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,"The word is one of the following",React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__19931__auto__ = (function hangman$core$iter__33144(s__33145){
return (new cljs.core.LazySeq(null,(function (){
var s__33145__$1 = s__33145;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33145__$1);
if(temp__4657__auto__){
var s__33145__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33145__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__33145__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__33147 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__33146 = (0);
while(true){
if((i__33146 < size__19930__auto__)){
var p = cljs.core._nth.call(null,c__19929__auto__,i__33146);
cljs.core.chunk_append.call(null,b__33147,React.createElement("li",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("possible-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')}),sablono.interpreter.interpret.call(null,p)));

var G__33148 = (i__33146 + (1));
i__33146 = G__33148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33147),hangman$core$iter__33144.call(null,cljs.core.chunk_rest.call(null,s__33145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33147),null);
}
} else {
var p = cljs.core.first.call(null,s__33145__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("possible-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')}),sablono.interpreter.interpret.call(null,p)),hangman$core$iter__33144.call(null,cljs.core.rest.call(null,s__33145__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,cljs.core.deref.call(null,hangman.core.possible));
})())));
}),null,"possible-words");
hangman.core.app = rum.core.build_defc.call(null,(function (){
var w = rum.core.react.call(null,hangman.core.word);
var gl = rum.core.react.call(null,hangman.core.guessed_letters);
var sp = rum.core.react.call(null,hangman.core.show_possible);
return React.createElement("div",null,React.createElement("h1",null,"Hangman!"),sablono.interpreter.interpret.call(null,hangman.core.gallows.call(null,w,gl)),sablono.interpreter.interpret.call(null,hangman.core.displayed_word.call(null,w,gl)),sablono.interpreter.interpret.call(null,hangman.core.all_letters.call(null,gl,(function (){var or__19143__auto__ = hangman.core.win_game_QMARK_.call(null,w,gl);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return hangman.core.game_over_QMARK_.call(null,w,gl);
}
})())),sablono.interpreter.interpret.call(null,hangman.core.controls.call(null)),sablono.interpreter.interpret.call(null,(function (){var and__19131__auto__ = sp;
if(cljs.core.truth_(and__19131__auto__)){
return hangman.core.possible_words.call(null);
} else {
return and__19131__auto__;
}
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app");
rum.core.mount.call(null,hangman.core.app.call(null),document.getElementById("app"));
clojure.browser.event.listen.call(null,document.body,new cljs.core.Keyword(null,"keypress","keypress",1625181642),(function (e){
var char$ = String.fromCharCode(e.charCode).toUpperCase();
var game_over = (function (){var or__19143__auto__ = hangman.core.win_game_QMARK_.call(null,cljs.core.deref.call(null,hangman.core.word),cljs.core.deref.call(null,hangman.core.guessed_letters));
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return hangman.core.game_over_QMARK_.call(null,cljs.core.deref.call(null,hangman.core.word),cljs.core.deref.call(null,hangman.core.guessed_letters));
}
})();
if(cljs.core.not.call(null,game_over)){
return hangman.core.guess_letter_BANG_.call(null,char$);
} else {
return null;
}
}));

//# sourceMappingURL=core.js.map?rel=1494351265941