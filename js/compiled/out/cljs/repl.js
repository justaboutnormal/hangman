// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28292){
var map__28317 = p__28292;
var map__28317__$1 = ((((!((map__28317 == null)))?((((map__28317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);
var m = map__28317__$1;
var n = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28319_28341 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28320_28342 = null;
var count__28321_28343 = (0);
var i__28322_28344 = (0);
while(true){
if((i__28322_28344 < count__28321_28343)){
var f_28345 = cljs.core._nth.call(null,chunk__28320_28342,i__28322_28344);
cljs.core.println.call(null,"  ",f_28345);

var G__28346 = seq__28319_28341;
var G__28347 = chunk__28320_28342;
var G__28348 = count__28321_28343;
var G__28349 = (i__28322_28344 + (1));
seq__28319_28341 = G__28346;
chunk__28320_28342 = G__28347;
count__28321_28343 = G__28348;
i__28322_28344 = G__28349;
continue;
} else {
var temp__4657__auto___28350 = cljs.core.seq.call(null,seq__28319_28341);
if(temp__4657__auto___28350){
var seq__28319_28351__$1 = temp__4657__auto___28350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28319_28351__$1)){
var c__19962__auto___28352 = cljs.core.chunk_first.call(null,seq__28319_28351__$1);
var G__28353 = cljs.core.chunk_rest.call(null,seq__28319_28351__$1);
var G__28354 = c__19962__auto___28352;
var G__28355 = cljs.core.count.call(null,c__19962__auto___28352);
var G__28356 = (0);
seq__28319_28341 = G__28353;
chunk__28320_28342 = G__28354;
count__28321_28343 = G__28355;
i__28322_28344 = G__28356;
continue;
} else {
var f_28357 = cljs.core.first.call(null,seq__28319_28351__$1);
cljs.core.println.call(null,"  ",f_28357);

var G__28358 = cljs.core.next.call(null,seq__28319_28351__$1);
var G__28359 = null;
var G__28360 = (0);
var G__28361 = (0);
seq__28319_28341 = G__28358;
chunk__28320_28342 = G__28359;
count__28321_28343 = G__28360;
i__28322_28344 = G__28361;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28362 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19143__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28362);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28362)))?cljs.core.second.call(null,arglists_28362):arglists_28362));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28323_28363 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28324_28364 = null;
var count__28325_28365 = (0);
var i__28326_28366 = (0);
while(true){
if((i__28326_28366 < count__28325_28365)){
var vec__28327_28367 = cljs.core._nth.call(null,chunk__28324_28364,i__28326_28366);
var name_28368 = cljs.core.nth.call(null,vec__28327_28367,(0),null);
var map__28330_28369 = cljs.core.nth.call(null,vec__28327_28367,(1),null);
var map__28330_28370__$1 = ((((!((map__28330_28369 == null)))?((((map__28330_28369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28330_28369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28330_28369):map__28330_28369);
var doc_28371 = cljs.core.get.call(null,map__28330_28370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28372 = cljs.core.get.call(null,map__28330_28370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28368);

cljs.core.println.call(null," ",arglists_28372);

if(cljs.core.truth_(doc_28371)){
cljs.core.println.call(null," ",doc_28371);
} else {
}

var G__28373 = seq__28323_28363;
var G__28374 = chunk__28324_28364;
var G__28375 = count__28325_28365;
var G__28376 = (i__28326_28366 + (1));
seq__28323_28363 = G__28373;
chunk__28324_28364 = G__28374;
count__28325_28365 = G__28375;
i__28326_28366 = G__28376;
continue;
} else {
var temp__4657__auto___28377 = cljs.core.seq.call(null,seq__28323_28363);
if(temp__4657__auto___28377){
var seq__28323_28378__$1 = temp__4657__auto___28377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28323_28378__$1)){
var c__19962__auto___28379 = cljs.core.chunk_first.call(null,seq__28323_28378__$1);
var G__28380 = cljs.core.chunk_rest.call(null,seq__28323_28378__$1);
var G__28381 = c__19962__auto___28379;
var G__28382 = cljs.core.count.call(null,c__19962__auto___28379);
var G__28383 = (0);
seq__28323_28363 = G__28380;
chunk__28324_28364 = G__28381;
count__28325_28365 = G__28382;
i__28326_28366 = G__28383;
continue;
} else {
var vec__28332_28384 = cljs.core.first.call(null,seq__28323_28378__$1);
var name_28385 = cljs.core.nth.call(null,vec__28332_28384,(0),null);
var map__28335_28386 = cljs.core.nth.call(null,vec__28332_28384,(1),null);
var map__28335_28387__$1 = ((((!((map__28335_28386 == null)))?((((map__28335_28386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28335_28386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335_28386):map__28335_28386);
var doc_28388 = cljs.core.get.call(null,map__28335_28387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28389 = cljs.core.get.call(null,map__28335_28387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28385);

cljs.core.println.call(null," ",arglists_28389);

if(cljs.core.truth_(doc_28388)){
cljs.core.println.call(null," ",doc_28388);
} else {
}

var G__28390 = cljs.core.next.call(null,seq__28323_28378__$1);
var G__28391 = null;
var G__28392 = (0);
var G__28393 = (0);
seq__28323_28363 = G__28390;
chunk__28324_28364 = G__28391;
count__28325_28365 = G__28392;
i__28326_28366 = G__28393;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28337 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28338 = null;
var count__28339 = (0);
var i__28340 = (0);
while(true){
if((i__28340 < count__28339)){
var role = cljs.core._nth.call(null,chunk__28338,i__28340);
var temp__4657__auto___28394__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28394__$1)){
var spec_28395 = temp__4657__auto___28394__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_28395));
} else {
}

var G__28396 = seq__28337;
var G__28397 = chunk__28338;
var G__28398 = count__28339;
var G__28399 = (i__28340 + (1));
seq__28337 = G__28396;
chunk__28338 = G__28397;
count__28339 = G__28398;
i__28340 = G__28399;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28337);
if(temp__4657__auto____$1){
var seq__28337__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28337__$1)){
var c__19962__auto__ = cljs.core.chunk_first.call(null,seq__28337__$1);
var G__28400 = cljs.core.chunk_rest.call(null,seq__28337__$1);
var G__28401 = c__19962__auto__;
var G__28402 = cljs.core.count.call(null,c__19962__auto__);
var G__28403 = (0);
seq__28337 = G__28400;
chunk__28338 = G__28401;
count__28339 = G__28402;
i__28340 = G__28403;
continue;
} else {
var role = cljs.core.first.call(null,seq__28337__$1);
var temp__4657__auto___28404__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28404__$2)){
var spec_28405 = temp__4657__auto___28404__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_28405));
} else {
}

var G__28406 = cljs.core.next.call(null,seq__28337__$1);
var G__28407 = null;
var G__28408 = (0);
var G__28409 = (0);
seq__28337 = G__28406;
chunk__28338 = G__28407;
count__28339 = G__28408;
i__28340 = G__28409;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1494348452187