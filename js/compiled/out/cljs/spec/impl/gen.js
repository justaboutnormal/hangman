// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20361 = arguments.length;
var i__20257__auto___20362 = (0);
while(true){
if((i__20257__auto___20362 < len__20256__auto___20361)){
args__20263__auto__.push((arguments[i__20257__auto___20362]));

var G__20363 = (i__20257__auto___20362 + (1));
i__20257__auto___20362 = G__20363;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20360){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20360));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20365 = arguments.length;
var i__20257__auto___20366 = (0);
while(true){
if((i__20257__auto___20366 < len__20256__auto___20365)){
args__20263__auto__.push((arguments[i__20257__auto___20366]));

var G__20367 = (i__20257__auto___20366 + (1));
i__20257__auto___20366 = G__20367;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20364){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20364));
});

var g_QMARK__20368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_20369 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20368){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__20368))
,null));
var mkg_20370 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20368,g_20369){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__20368,g_20369))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20368,g_20369,mkg_20370){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20368).call(null,x);
});})(g_QMARK__20368,g_20369,mkg_20370))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20368,g_20369,mkg_20370){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20370).call(null,gfn);
});})(g_QMARK__20368,g_20369,mkg_20370))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20368,g_20369,mkg_20370){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20369).call(null,generator);
});})(g_QMARK__20368,g_20369,mkg_20370))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__20332__auto___20390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__20332__auto___20390){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20391 = arguments.length;
var i__20257__auto___20392 = (0);
while(true){
if((i__20257__auto___20392 < len__20256__auto___20391)){
args__20263__auto__.push((arguments[i__20257__auto___20392]));

var G__20393 = (i__20257__auto___20392 + (1));
i__20257__auto___20392 = G__20393;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20390))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20390),args);
});})(g__20332__auto___20390))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__20332__auto___20390){
return (function (seq20371){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20371));
});})(g__20332__auto___20390))
;


var g__20332__auto___20394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__20332__auto___20394){
return (function cljs$spec$impl$gen$list(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20395 = arguments.length;
var i__20257__auto___20396 = (0);
while(true){
if((i__20257__auto___20396 < len__20256__auto___20395)){
args__20263__auto__.push((arguments[i__20257__auto___20396]));

var G__20397 = (i__20257__auto___20396 + (1));
i__20257__auto___20396 = G__20397;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20394))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20394),args);
});})(g__20332__auto___20394))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__20332__auto___20394){
return (function (seq20372){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20372));
});})(g__20332__auto___20394))
;


var g__20332__auto___20398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__20332__auto___20398){
return (function cljs$spec$impl$gen$map(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20399 = arguments.length;
var i__20257__auto___20400 = (0);
while(true){
if((i__20257__auto___20400 < len__20256__auto___20399)){
args__20263__auto__.push((arguments[i__20257__auto___20400]));

var G__20401 = (i__20257__auto___20400 + (1));
i__20257__auto___20400 = G__20401;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20398))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20398),args);
});})(g__20332__auto___20398))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__20332__auto___20398){
return (function (seq20373){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20373));
});})(g__20332__auto___20398))
;


var g__20332__auto___20402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__20332__auto___20402){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20403 = arguments.length;
var i__20257__auto___20404 = (0);
while(true){
if((i__20257__auto___20404 < len__20256__auto___20403)){
args__20263__auto__.push((arguments[i__20257__auto___20404]));

var G__20405 = (i__20257__auto___20404 + (1));
i__20257__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20402))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20402),args);
});})(g__20332__auto___20402))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__20332__auto___20402){
return (function (seq20374){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20374));
});})(g__20332__auto___20402))
;


var g__20332__auto___20406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__20332__auto___20406){
return (function cljs$spec$impl$gen$set(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20407 = arguments.length;
var i__20257__auto___20408 = (0);
while(true){
if((i__20257__auto___20408 < len__20256__auto___20407)){
args__20263__auto__.push((arguments[i__20257__auto___20408]));

var G__20409 = (i__20257__auto___20408 + (1));
i__20257__auto___20408 = G__20409;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20406))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20406),args);
});})(g__20332__auto___20406))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__20332__auto___20406){
return (function (seq20375){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20375));
});})(g__20332__auto___20406))
;


var g__20332__auto___20410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__20332__auto___20410){
return (function cljs$spec$impl$gen$vector(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20411 = arguments.length;
var i__20257__auto___20412 = (0);
while(true){
if((i__20257__auto___20412 < len__20256__auto___20411)){
args__20263__auto__.push((arguments[i__20257__auto___20412]));

var G__20413 = (i__20257__auto___20412 + (1));
i__20257__auto___20412 = G__20413;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20410))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20410){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20410),args);
});})(g__20332__auto___20410))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__20332__auto___20410){
return (function (seq20376){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20376));
});})(g__20332__auto___20410))
;


var g__20332__auto___20414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__20332__auto___20414){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20415 = arguments.length;
var i__20257__auto___20416 = (0);
while(true){
if((i__20257__auto___20416 < len__20256__auto___20415)){
args__20263__auto__.push((arguments[i__20257__auto___20416]));

var G__20417 = (i__20257__auto___20416 + (1));
i__20257__auto___20416 = G__20417;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20414))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20414){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20414),args);
});})(g__20332__auto___20414))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__20332__auto___20414){
return (function (seq20377){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20377));
});})(g__20332__auto___20414))
;


var g__20332__auto___20418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__20332__auto___20418){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20419 = arguments.length;
var i__20257__auto___20420 = (0);
while(true){
if((i__20257__auto___20420 < len__20256__auto___20419)){
args__20263__auto__.push((arguments[i__20257__auto___20420]));

var G__20421 = (i__20257__auto___20420 + (1));
i__20257__auto___20420 = G__20421;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20418))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20418){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20418),args);
});})(g__20332__auto___20418))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__20332__auto___20418){
return (function (seq20378){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20378));
});})(g__20332__auto___20418))
;


var g__20332__auto___20422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__20332__auto___20422){
return (function cljs$spec$impl$gen$elements(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20423 = arguments.length;
var i__20257__auto___20424 = (0);
while(true){
if((i__20257__auto___20424 < len__20256__auto___20423)){
args__20263__auto__.push((arguments[i__20257__auto___20424]));

var G__20425 = (i__20257__auto___20424 + (1));
i__20257__auto___20424 = G__20425;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20422))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20422){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20422),args);
});})(g__20332__auto___20422))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__20332__auto___20422){
return (function (seq20379){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20379));
});})(g__20332__auto___20422))
;


var g__20332__auto___20426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__20332__auto___20426){
return (function cljs$spec$impl$gen$bind(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20427 = arguments.length;
var i__20257__auto___20428 = (0);
while(true){
if((i__20257__auto___20428 < len__20256__auto___20427)){
args__20263__auto__.push((arguments[i__20257__auto___20428]));

var G__20429 = (i__20257__auto___20428 + (1));
i__20257__auto___20428 = G__20429;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20426))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20426){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20426),args);
});})(g__20332__auto___20426))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__20332__auto___20426){
return (function (seq20380){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20380));
});})(g__20332__auto___20426))
;


var g__20332__auto___20430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__20332__auto___20430){
return (function cljs$spec$impl$gen$choose(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20431 = arguments.length;
var i__20257__auto___20432 = (0);
while(true){
if((i__20257__auto___20432 < len__20256__auto___20431)){
args__20263__auto__.push((arguments[i__20257__auto___20432]));

var G__20433 = (i__20257__auto___20432 + (1));
i__20257__auto___20432 = G__20433;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20430))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20430){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20430),args);
});})(g__20332__auto___20430))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__20332__auto___20430){
return (function (seq20381){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20381));
});})(g__20332__auto___20430))
;


var g__20332__auto___20434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__20332__auto___20434){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20435 = arguments.length;
var i__20257__auto___20436 = (0);
while(true){
if((i__20257__auto___20436 < len__20256__auto___20435)){
args__20263__auto__.push((arguments[i__20257__auto___20436]));

var G__20437 = (i__20257__auto___20436 + (1));
i__20257__auto___20436 = G__20437;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20434))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20434){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20434),args);
});})(g__20332__auto___20434))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__20332__auto___20434){
return (function (seq20382){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20382));
});})(g__20332__auto___20434))
;


var g__20332__auto___20438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__20332__auto___20438){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20439 = arguments.length;
var i__20257__auto___20440 = (0);
while(true){
if((i__20257__auto___20440 < len__20256__auto___20439)){
args__20263__auto__.push((arguments[i__20257__auto___20440]));

var G__20441 = (i__20257__auto___20440 + (1));
i__20257__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20438))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20438){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20438),args);
});})(g__20332__auto___20438))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__20332__auto___20438){
return (function (seq20383){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20383));
});})(g__20332__auto___20438))
;


var g__20332__auto___20442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__20332__auto___20442){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20443 = arguments.length;
var i__20257__auto___20444 = (0);
while(true){
if((i__20257__auto___20444 < len__20256__auto___20443)){
args__20263__auto__.push((arguments[i__20257__auto___20444]));

var G__20445 = (i__20257__auto___20444 + (1));
i__20257__auto___20444 = G__20445;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20442))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20442){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20442),args);
});})(g__20332__auto___20442))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__20332__auto___20442){
return (function (seq20384){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20384));
});})(g__20332__auto___20442))
;


var g__20332__auto___20446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__20332__auto___20446){
return (function cljs$spec$impl$gen$sample(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20447 = arguments.length;
var i__20257__auto___20448 = (0);
while(true){
if((i__20257__auto___20448 < len__20256__auto___20447)){
args__20263__auto__.push((arguments[i__20257__auto___20448]));

var G__20449 = (i__20257__auto___20448 + (1));
i__20257__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20446))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20446){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20446),args);
});})(g__20332__auto___20446))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__20332__auto___20446){
return (function (seq20385){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20385));
});})(g__20332__auto___20446))
;


var g__20332__auto___20450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__20332__auto___20450){
return (function cljs$spec$impl$gen$return(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20451 = arguments.length;
var i__20257__auto___20452 = (0);
while(true){
if((i__20257__auto___20452 < len__20256__auto___20451)){
args__20263__auto__.push((arguments[i__20257__auto___20452]));

var G__20453 = (i__20257__auto___20452 + (1));
i__20257__auto___20452 = G__20453;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20450))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20450){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20450),args);
});})(g__20332__auto___20450))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__20332__auto___20450){
return (function (seq20386){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20386));
});})(g__20332__auto___20450))
;


var g__20332__auto___20454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__20332__auto___20454){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20455 = arguments.length;
var i__20257__auto___20456 = (0);
while(true){
if((i__20257__auto___20456 < len__20256__auto___20455)){
args__20263__auto__.push((arguments[i__20257__auto___20456]));

var G__20457 = (i__20257__auto___20456 + (1));
i__20257__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20454))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20454){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20454),args);
});})(g__20332__auto___20454))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__20332__auto___20454){
return (function (seq20387){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20387));
});})(g__20332__auto___20454))
;


var g__20332__auto___20458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__20332__auto___20458){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20459 = arguments.length;
var i__20257__auto___20460 = (0);
while(true){
if((i__20257__auto___20460 < len__20256__auto___20459)){
args__20263__auto__.push((arguments[i__20257__auto___20460]));

var G__20461 = (i__20257__auto___20460 + (1));
i__20257__auto___20460 = G__20461;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20458))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20458){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20458),args);
});})(g__20332__auto___20458))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__20332__auto___20458){
return (function (seq20388){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20388));
});})(g__20332__auto___20458))
;


var g__20332__auto___20462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__20332__auto___20462){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20463 = arguments.length;
var i__20257__auto___20464 = (0);
while(true){
if((i__20257__auto___20464 < len__20256__auto___20463)){
args__20263__auto__.push((arguments[i__20257__auto___20464]));

var G__20465 = (i__20257__auto___20464 + (1));
i__20257__auto___20464 = G__20465;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20332__auto___20462))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20332__auto___20462){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20332__auto___20462),args);
});})(g__20332__auto___20462))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__20332__auto___20462){
return (function (seq20389){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20389));
});})(g__20332__auto___20462))
;

var g__20345__auto___20487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__20345__auto___20487){
return (function cljs$spec$impl$gen$any(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20488 = arguments.length;
var i__20257__auto___20489 = (0);
while(true){
if((i__20257__auto___20489 < len__20256__auto___20488)){
args__20263__auto__.push((arguments[i__20257__auto___20489]));

var G__20490 = (i__20257__auto___20489 + (1));
i__20257__auto___20489 = G__20490;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20487))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20487){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20487);
});})(g__20345__auto___20487))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__20345__auto___20487){
return (function (seq20466){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20466));
});})(g__20345__auto___20487))
;


var g__20345__auto___20491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__20345__auto___20491){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20492 = arguments.length;
var i__20257__auto___20493 = (0);
while(true){
if((i__20257__auto___20493 < len__20256__auto___20492)){
args__20263__auto__.push((arguments[i__20257__auto___20493]));

var G__20494 = (i__20257__auto___20493 + (1));
i__20257__auto___20493 = G__20494;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20491))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20491){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20491);
});})(g__20345__auto___20491))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__20345__auto___20491){
return (function (seq20467){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20467));
});})(g__20345__auto___20491))
;


var g__20345__auto___20495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__20345__auto___20495){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20496 = arguments.length;
var i__20257__auto___20497 = (0);
while(true){
if((i__20257__auto___20497 < len__20256__auto___20496)){
args__20263__auto__.push((arguments[i__20257__auto___20497]));

var G__20498 = (i__20257__auto___20497 + (1));
i__20257__auto___20497 = G__20498;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20495))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20495){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20495);
});})(g__20345__auto___20495))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__20345__auto___20495){
return (function (seq20468){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20468));
});})(g__20345__auto___20495))
;


var g__20345__auto___20499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__20345__auto___20499){
return (function cljs$spec$impl$gen$char(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20500 = arguments.length;
var i__20257__auto___20501 = (0);
while(true){
if((i__20257__auto___20501 < len__20256__auto___20500)){
args__20263__auto__.push((arguments[i__20257__auto___20501]));

var G__20502 = (i__20257__auto___20501 + (1));
i__20257__auto___20501 = G__20502;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20499))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20499){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20499);
});})(g__20345__auto___20499))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__20345__auto___20499){
return (function (seq20469){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20469));
});})(g__20345__auto___20499))
;


var g__20345__auto___20503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__20345__auto___20503){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20504 = arguments.length;
var i__20257__auto___20505 = (0);
while(true){
if((i__20257__auto___20505 < len__20256__auto___20504)){
args__20263__auto__.push((arguments[i__20257__auto___20505]));

var G__20506 = (i__20257__auto___20505 + (1));
i__20257__auto___20505 = G__20506;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20503))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20503){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20503);
});})(g__20345__auto___20503))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__20345__auto___20503){
return (function (seq20470){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20470));
});})(g__20345__auto___20503))
;


var g__20345__auto___20507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__20345__auto___20507){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20508 = arguments.length;
var i__20257__auto___20509 = (0);
while(true){
if((i__20257__auto___20509 < len__20256__auto___20508)){
args__20263__auto__.push((arguments[i__20257__auto___20509]));

var G__20510 = (i__20257__auto___20509 + (1));
i__20257__auto___20509 = G__20510;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20507))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20507){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20507);
});})(g__20345__auto___20507))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__20345__auto___20507){
return (function (seq20471){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20471));
});})(g__20345__auto___20507))
;


var g__20345__auto___20511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__20345__auto___20511){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20512 = arguments.length;
var i__20257__auto___20513 = (0);
while(true){
if((i__20257__auto___20513 < len__20256__auto___20512)){
args__20263__auto__.push((arguments[i__20257__auto___20513]));

var G__20514 = (i__20257__auto___20513 + (1));
i__20257__auto___20513 = G__20514;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20511))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20511){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20511);
});})(g__20345__auto___20511))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__20345__auto___20511){
return (function (seq20472){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20472));
});})(g__20345__auto___20511))
;


var g__20345__auto___20515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__20345__auto___20515){
return (function cljs$spec$impl$gen$double(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20516 = arguments.length;
var i__20257__auto___20517 = (0);
while(true){
if((i__20257__auto___20517 < len__20256__auto___20516)){
args__20263__auto__.push((arguments[i__20257__auto___20517]));

var G__20518 = (i__20257__auto___20517 + (1));
i__20257__auto___20517 = G__20518;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20515))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20515){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20515);
});})(g__20345__auto___20515))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__20345__auto___20515){
return (function (seq20473){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20473));
});})(g__20345__auto___20515))
;


var g__20345__auto___20519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__20345__auto___20519){
return (function cljs$spec$impl$gen$int(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20520 = arguments.length;
var i__20257__auto___20521 = (0);
while(true){
if((i__20257__auto___20521 < len__20256__auto___20520)){
args__20263__auto__.push((arguments[i__20257__auto___20521]));

var G__20522 = (i__20257__auto___20521 + (1));
i__20257__auto___20521 = G__20522;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20519))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20519){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20519);
});})(g__20345__auto___20519))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__20345__auto___20519){
return (function (seq20474){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20474));
});})(g__20345__auto___20519))
;


var g__20345__auto___20523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__20345__auto___20523){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20524 = arguments.length;
var i__20257__auto___20525 = (0);
while(true){
if((i__20257__auto___20525 < len__20256__auto___20524)){
args__20263__auto__.push((arguments[i__20257__auto___20525]));

var G__20526 = (i__20257__auto___20525 + (1));
i__20257__auto___20525 = G__20526;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20523))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20523){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20523);
});})(g__20345__auto___20523))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__20345__auto___20523){
return (function (seq20475){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20475));
});})(g__20345__auto___20523))
;


var g__20345__auto___20527 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__20345__auto___20527){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20528 = arguments.length;
var i__20257__auto___20529 = (0);
while(true){
if((i__20257__auto___20529 < len__20256__auto___20528)){
args__20263__auto__.push((arguments[i__20257__auto___20529]));

var G__20530 = (i__20257__auto___20529 + (1));
i__20257__auto___20529 = G__20530;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20527))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20527){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20527);
});})(g__20345__auto___20527))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__20345__auto___20527){
return (function (seq20476){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20476));
});})(g__20345__auto___20527))
;


var g__20345__auto___20531 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__20345__auto___20531){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20532 = arguments.length;
var i__20257__auto___20533 = (0);
while(true){
if((i__20257__auto___20533 < len__20256__auto___20532)){
args__20263__auto__.push((arguments[i__20257__auto___20533]));

var G__20534 = (i__20257__auto___20533 + (1));
i__20257__auto___20533 = G__20534;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20531))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20531){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20531);
});})(g__20345__auto___20531))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__20345__auto___20531){
return (function (seq20477){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20477));
});})(g__20345__auto___20531))
;


var g__20345__auto___20535 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__20345__auto___20535){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20536 = arguments.length;
var i__20257__auto___20537 = (0);
while(true){
if((i__20257__auto___20537 < len__20256__auto___20536)){
args__20263__auto__.push((arguments[i__20257__auto___20537]));

var G__20538 = (i__20257__auto___20537 + (1));
i__20257__auto___20537 = G__20538;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20535))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20535){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20535);
});})(g__20345__auto___20535))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__20345__auto___20535){
return (function (seq20478){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20478));
});})(g__20345__auto___20535))
;


var g__20345__auto___20539 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__20345__auto___20539){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20540 = arguments.length;
var i__20257__auto___20541 = (0);
while(true){
if((i__20257__auto___20541 < len__20256__auto___20540)){
args__20263__auto__.push((arguments[i__20257__auto___20541]));

var G__20542 = (i__20257__auto___20541 + (1));
i__20257__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20539))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20539){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20539);
});})(g__20345__auto___20539))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__20345__auto___20539){
return (function (seq20479){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20479));
});})(g__20345__auto___20539))
;


var g__20345__auto___20543 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__20345__auto___20543){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20544 = arguments.length;
var i__20257__auto___20545 = (0);
while(true){
if((i__20257__auto___20545 < len__20256__auto___20544)){
args__20263__auto__.push((arguments[i__20257__auto___20545]));

var G__20546 = (i__20257__auto___20545 + (1));
i__20257__auto___20545 = G__20546;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20543))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20543){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20543);
});})(g__20345__auto___20543))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__20345__auto___20543){
return (function (seq20480){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20480));
});})(g__20345__auto___20543))
;


var g__20345__auto___20547 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__20345__auto___20547){
return (function cljs$spec$impl$gen$string(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20548 = arguments.length;
var i__20257__auto___20549 = (0);
while(true){
if((i__20257__auto___20549 < len__20256__auto___20548)){
args__20263__auto__.push((arguments[i__20257__auto___20549]));

var G__20550 = (i__20257__auto___20549 + (1));
i__20257__auto___20549 = G__20550;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20547))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20547){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20547);
});})(g__20345__auto___20547))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__20345__auto___20547){
return (function (seq20481){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20481));
});})(g__20345__auto___20547))
;


var g__20345__auto___20551 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__20345__auto___20551){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20552 = arguments.length;
var i__20257__auto___20553 = (0);
while(true){
if((i__20257__auto___20553 < len__20256__auto___20552)){
args__20263__auto__.push((arguments[i__20257__auto___20553]));

var G__20554 = (i__20257__auto___20553 + (1));
i__20257__auto___20553 = G__20554;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20551))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20551){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20551);
});})(g__20345__auto___20551))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__20345__auto___20551){
return (function (seq20482){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20482));
});})(g__20345__auto___20551))
;


var g__20345__auto___20555 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__20345__auto___20555){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20556 = arguments.length;
var i__20257__auto___20557 = (0);
while(true){
if((i__20257__auto___20557 < len__20256__auto___20556)){
args__20263__auto__.push((arguments[i__20257__auto___20557]));

var G__20558 = (i__20257__auto___20557 + (1));
i__20257__auto___20557 = G__20558;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20555))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20555){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20555);
});})(g__20345__auto___20555))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__20345__auto___20555){
return (function (seq20483){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20483));
});})(g__20345__auto___20555))
;


var g__20345__auto___20559 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__20345__auto___20559){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20560 = arguments.length;
var i__20257__auto___20561 = (0);
while(true){
if((i__20257__auto___20561 < len__20256__auto___20560)){
args__20263__auto__.push((arguments[i__20257__auto___20561]));

var G__20562 = (i__20257__auto___20561 + (1));
i__20257__auto___20561 = G__20562;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20559))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20559){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20559);
});})(g__20345__auto___20559))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__20345__auto___20559){
return (function (seq20484){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20484));
});})(g__20345__auto___20559))
;


var g__20345__auto___20563 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__20345__auto___20563){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20564 = arguments.length;
var i__20257__auto___20565 = (0);
while(true){
if((i__20257__auto___20565 < len__20256__auto___20564)){
args__20263__auto__.push((arguments[i__20257__auto___20565]));

var G__20566 = (i__20257__auto___20565 + (1));
i__20257__auto___20565 = G__20566;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20563))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20563){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20563);
});})(g__20345__auto___20563))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__20345__auto___20563){
return (function (seq20485){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20485));
});})(g__20345__auto___20563))
;


var g__20345__auto___20567 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__20345__auto___20567){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20568 = arguments.length;
var i__20257__auto___20569 = (0);
while(true){
if((i__20257__auto___20569 < len__20256__auto___20568)){
args__20263__auto__.push((arguments[i__20257__auto___20569]));

var G__20570 = (i__20257__auto___20569 + (1));
i__20257__auto___20569 = G__20570;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});})(g__20345__auto___20567))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20345__auto___20567){
return (function (args){
return cljs.core.deref.call(null,g__20345__auto___20567);
});})(g__20345__auto___20567))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__20345__auto___20567){
return (function (seq20486){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20486));
});})(g__20345__auto___20567))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__20263__auto__ = [];
var len__20256__auto___20573 = arguments.length;
var i__20257__auto___20574 = (0);
while(true){
if((i__20257__auto___20574 < len__20256__auto___20573)){
args__20263__auto__.push((arguments[i__20257__auto___20574]));

var G__20575 = (i__20257__auto___20574 + (1));
i__20257__auto___20574 = G__20575;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20571_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20571_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20572){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20572));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20576_SHARP_){
return (new Date(p1__20576_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1494348446692