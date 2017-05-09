// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('hangman.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33153__delegate = function (x){
if(cljs.core.truth_(hangman.core.on_js_reload)){
return cljs.core.apply.call(null,hangman.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hangman.core/on-js-reload' is missing");
}
};
var G__33153 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33154__i = 0, G__33154__a = new Array(arguments.length -  0);
while (G__33154__i < G__33154__a.length) {G__33154__a[G__33154__i] = arguments[G__33154__i + 0]; ++G__33154__i;}
  x = new cljs.core.IndexedSeq(G__33154__a,0);
} 
return G__33153__delegate.call(this,x);};
G__33153.cljs$lang$maxFixedArity = 0;
G__33153.cljs$lang$applyTo = (function (arglist__33155){
var x = cljs.core.seq(arglist__33155);
return G__33153__delegate(x);
});
G__33153.cljs$core$IFn$_invoke$arity$variadic = G__33153__delegate;
return G__33153;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1494351265953