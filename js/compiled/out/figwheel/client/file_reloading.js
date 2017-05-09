// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19143__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19143__auto__){
return or__19143__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19143__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27240_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27240_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27245 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27246 = null;
var count__27247 = (0);
var i__27248 = (0);
while(true){
if((i__27248 < count__27247)){
var n = cljs.core._nth.call(null,chunk__27246,i__27248);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27249 = seq__27245;
var G__27250 = chunk__27246;
var G__27251 = count__27247;
var G__27252 = (i__27248 + (1));
seq__27245 = G__27249;
chunk__27246 = G__27250;
count__27247 = G__27251;
i__27248 = G__27252;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27245);
if(temp__4657__auto__){
var seq__27245__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245__$1)){
var c__19962__auto__ = cljs.core.chunk_first.call(null,seq__27245__$1);
var G__27253 = cljs.core.chunk_rest.call(null,seq__27245__$1);
var G__27254 = c__19962__auto__;
var G__27255 = cljs.core.count.call(null,c__19962__auto__);
var G__27256 = (0);
seq__27245 = G__27253;
chunk__27246 = G__27254;
count__27247 = G__27255;
i__27248 = G__27256;
continue;
} else {
var n = cljs.core.first.call(null,seq__27245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27257 = cljs.core.next.call(null,seq__27245__$1);
var G__27258 = null;
var G__27259 = (0);
var G__27260 = (0);
seq__27245 = G__27257;
chunk__27246 = G__27258;
count__27247 = G__27259;
i__27248 = G__27260;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27311_27322 = cljs.core.seq.call(null,deps);
var chunk__27312_27323 = null;
var count__27313_27324 = (0);
var i__27314_27325 = (0);
while(true){
if((i__27314_27325 < count__27313_27324)){
var dep_27326 = cljs.core._nth.call(null,chunk__27312_27323,i__27314_27325);
topo_sort_helper_STAR_.call(null,dep_27326,(depth + (1)),state);

var G__27327 = seq__27311_27322;
var G__27328 = chunk__27312_27323;
var G__27329 = count__27313_27324;
var G__27330 = (i__27314_27325 + (1));
seq__27311_27322 = G__27327;
chunk__27312_27323 = G__27328;
count__27313_27324 = G__27329;
i__27314_27325 = G__27330;
continue;
} else {
var temp__4657__auto___27331 = cljs.core.seq.call(null,seq__27311_27322);
if(temp__4657__auto___27331){
var seq__27311_27332__$1 = temp__4657__auto___27331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27311_27332__$1)){
var c__19962__auto___27333 = cljs.core.chunk_first.call(null,seq__27311_27332__$1);
var G__27334 = cljs.core.chunk_rest.call(null,seq__27311_27332__$1);
var G__27335 = c__19962__auto___27333;
var G__27336 = cljs.core.count.call(null,c__19962__auto___27333);
var G__27337 = (0);
seq__27311_27322 = G__27334;
chunk__27312_27323 = G__27335;
count__27313_27324 = G__27336;
i__27314_27325 = G__27337;
continue;
} else {
var dep_27338 = cljs.core.first.call(null,seq__27311_27332__$1);
topo_sort_helper_STAR_.call(null,dep_27338,(depth + (1)),state);

var G__27339 = cljs.core.next.call(null,seq__27311_27332__$1);
var G__27340 = null;
var G__27341 = (0);
var G__27342 = (0);
seq__27311_27322 = G__27339;
chunk__27312_27323 = G__27340;
count__27313_27324 = G__27341;
i__27314_27325 = G__27342;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27315){
var vec__27319 = p__27315;
var seq__27320 = cljs.core.seq.call(null,vec__27319);
var first__27321 = cljs.core.first.call(null,seq__27320);
var seq__27320__$1 = cljs.core.next.call(null,seq__27320);
var x = first__27321;
var xs = seq__27320__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27319,seq__27320,first__27321,seq__27320__$1,x,xs,get_deps__$1){
return (function (p1__27261_SHARP_){
return clojure.set.difference.call(null,p1__27261_SHARP_,x);
});})(vec__27319,seq__27320,first__27321,seq__27320__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27355 = cljs.core.seq.call(null,provides);
var chunk__27356 = null;
var count__27357 = (0);
var i__27358 = (0);
while(true){
if((i__27358 < count__27357)){
var prov = cljs.core._nth.call(null,chunk__27356,i__27358);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27359_27367 = cljs.core.seq.call(null,requires);
var chunk__27360_27368 = null;
var count__27361_27369 = (0);
var i__27362_27370 = (0);
while(true){
if((i__27362_27370 < count__27361_27369)){
var req_27371 = cljs.core._nth.call(null,chunk__27360_27368,i__27362_27370);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27371,prov);

var G__27372 = seq__27359_27367;
var G__27373 = chunk__27360_27368;
var G__27374 = count__27361_27369;
var G__27375 = (i__27362_27370 + (1));
seq__27359_27367 = G__27372;
chunk__27360_27368 = G__27373;
count__27361_27369 = G__27374;
i__27362_27370 = G__27375;
continue;
} else {
var temp__4657__auto___27376 = cljs.core.seq.call(null,seq__27359_27367);
if(temp__4657__auto___27376){
var seq__27359_27377__$1 = temp__4657__auto___27376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27359_27377__$1)){
var c__19962__auto___27378 = cljs.core.chunk_first.call(null,seq__27359_27377__$1);
var G__27379 = cljs.core.chunk_rest.call(null,seq__27359_27377__$1);
var G__27380 = c__19962__auto___27378;
var G__27381 = cljs.core.count.call(null,c__19962__auto___27378);
var G__27382 = (0);
seq__27359_27367 = G__27379;
chunk__27360_27368 = G__27380;
count__27361_27369 = G__27381;
i__27362_27370 = G__27382;
continue;
} else {
var req_27383 = cljs.core.first.call(null,seq__27359_27377__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27383,prov);

var G__27384 = cljs.core.next.call(null,seq__27359_27377__$1);
var G__27385 = null;
var G__27386 = (0);
var G__27387 = (0);
seq__27359_27367 = G__27384;
chunk__27360_27368 = G__27385;
count__27361_27369 = G__27386;
i__27362_27370 = G__27387;
continue;
}
} else {
}
}
break;
}

var G__27388 = seq__27355;
var G__27389 = chunk__27356;
var G__27390 = count__27357;
var G__27391 = (i__27358 + (1));
seq__27355 = G__27388;
chunk__27356 = G__27389;
count__27357 = G__27390;
i__27358 = G__27391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27355);
if(temp__4657__auto__){
var seq__27355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27355__$1)){
var c__19962__auto__ = cljs.core.chunk_first.call(null,seq__27355__$1);
var G__27392 = cljs.core.chunk_rest.call(null,seq__27355__$1);
var G__27393 = c__19962__auto__;
var G__27394 = cljs.core.count.call(null,c__19962__auto__);
var G__27395 = (0);
seq__27355 = G__27392;
chunk__27356 = G__27393;
count__27357 = G__27394;
i__27358 = G__27395;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27355__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27363_27396 = cljs.core.seq.call(null,requires);
var chunk__27364_27397 = null;
var count__27365_27398 = (0);
var i__27366_27399 = (0);
while(true){
if((i__27366_27399 < count__27365_27398)){
var req_27400 = cljs.core._nth.call(null,chunk__27364_27397,i__27366_27399);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27400,prov);

var G__27401 = seq__27363_27396;
var G__27402 = chunk__27364_27397;
var G__27403 = count__27365_27398;
var G__27404 = (i__27366_27399 + (1));
seq__27363_27396 = G__27401;
chunk__27364_27397 = G__27402;
count__27365_27398 = G__27403;
i__27366_27399 = G__27404;
continue;
} else {
var temp__4657__auto___27405__$1 = cljs.core.seq.call(null,seq__27363_27396);
if(temp__4657__auto___27405__$1){
var seq__27363_27406__$1 = temp__4657__auto___27405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27363_27406__$1)){
var c__19962__auto___27407 = cljs.core.chunk_first.call(null,seq__27363_27406__$1);
var G__27408 = cljs.core.chunk_rest.call(null,seq__27363_27406__$1);
var G__27409 = c__19962__auto___27407;
var G__27410 = cljs.core.count.call(null,c__19962__auto___27407);
var G__27411 = (0);
seq__27363_27396 = G__27408;
chunk__27364_27397 = G__27409;
count__27365_27398 = G__27410;
i__27366_27399 = G__27411;
continue;
} else {
var req_27412 = cljs.core.first.call(null,seq__27363_27406__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27412,prov);

var G__27413 = cljs.core.next.call(null,seq__27363_27406__$1);
var G__27414 = null;
var G__27415 = (0);
var G__27416 = (0);
seq__27363_27396 = G__27413;
chunk__27364_27397 = G__27414;
count__27365_27398 = G__27415;
i__27366_27399 = G__27416;
continue;
}
} else {
}
}
break;
}

var G__27417 = cljs.core.next.call(null,seq__27355__$1);
var G__27418 = null;
var G__27419 = (0);
var G__27420 = (0);
seq__27355 = G__27417;
chunk__27356 = G__27418;
count__27357 = G__27419;
i__27358 = G__27420;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27425_27429 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27426_27430 = null;
var count__27427_27431 = (0);
var i__27428_27432 = (0);
while(true){
if((i__27428_27432 < count__27427_27431)){
var ns_27433 = cljs.core._nth.call(null,chunk__27426_27430,i__27428_27432);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27433);

var G__27434 = seq__27425_27429;
var G__27435 = chunk__27426_27430;
var G__27436 = count__27427_27431;
var G__27437 = (i__27428_27432 + (1));
seq__27425_27429 = G__27434;
chunk__27426_27430 = G__27435;
count__27427_27431 = G__27436;
i__27428_27432 = G__27437;
continue;
} else {
var temp__4657__auto___27438 = cljs.core.seq.call(null,seq__27425_27429);
if(temp__4657__auto___27438){
var seq__27425_27439__$1 = temp__4657__auto___27438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27425_27439__$1)){
var c__19962__auto___27440 = cljs.core.chunk_first.call(null,seq__27425_27439__$1);
var G__27441 = cljs.core.chunk_rest.call(null,seq__27425_27439__$1);
var G__27442 = c__19962__auto___27440;
var G__27443 = cljs.core.count.call(null,c__19962__auto___27440);
var G__27444 = (0);
seq__27425_27429 = G__27441;
chunk__27426_27430 = G__27442;
count__27427_27431 = G__27443;
i__27428_27432 = G__27444;
continue;
} else {
var ns_27445 = cljs.core.first.call(null,seq__27425_27439__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27445);

var G__27446 = cljs.core.next.call(null,seq__27425_27439__$1);
var G__27447 = null;
var G__27448 = (0);
var G__27449 = (0);
seq__27425_27429 = G__27446;
chunk__27426_27430 = G__27447;
count__27427_27431 = G__27448;
i__27428_27432 = G__27449;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19143__auto__ = goog.require__;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27450__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27451__i = 0, G__27451__a = new Array(arguments.length -  0);
while (G__27451__i < G__27451__a.length) {G__27451__a[G__27451__i] = arguments[G__27451__i + 0]; ++G__27451__i;}
  args = new cljs.core.IndexedSeq(G__27451__a,0);
} 
return G__27450__delegate.call(this,args);};
G__27450.cljs$lang$maxFixedArity = 0;
G__27450.cljs$lang$applyTo = (function (arglist__27452){
var args = cljs.core.seq(arglist__27452);
return G__27450__delegate(args);
});
G__27450.cljs$core$IFn$_invoke$arity$variadic = G__27450__delegate;
return G__27450;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27454 = cljs.core._EQ_;
var expr__27455 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27454.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27455))){
var path_parts = ((function (pred__27454,expr__27455){
return (function (p1__27453_SHARP_){
return clojure.string.split.call(null,p1__27453_SHARP_,/[\/\\]/);
});})(pred__27454,expr__27455))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27454,expr__27455){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27457){if((e27457 instanceof Error)){
var e = e27457;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27457;

}
}})());
});
;})(path_parts,sep,root,pred__27454,expr__27455))
} else {
if(cljs.core.truth_(pred__27454.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27455))){
return ((function (pred__27454,expr__27455){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__27454,expr__27455){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27454,expr__27455))
);

return deferred.addErrback(((function (deferred,pred__27454,expr__27455){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27454,expr__27455))
);
});
;})(pred__27454,expr__27455))
} else {
return ((function (pred__27454,expr__27455){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27454,expr__27455))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27458,callback){
var map__27461 = p__27458;
var map__27461__$1 = ((((!((map__27461 == null)))?((((map__27461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27461):map__27461);
var file_msg = map__27461__$1;
var request_url = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27461,map__27461__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27461,map__27461__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_27485){
var state_val_27486 = (state_27485[(1)]);
if((state_val_27486 === (7))){
var inst_27481 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27487_27507 = state_27485__$1;
(statearr_27487_27507[(2)] = inst_27481);

(statearr_27487_27507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (1))){
var state_27485__$1 = state_27485;
var statearr_27488_27508 = state_27485__$1;
(statearr_27488_27508[(2)] = null);

(statearr_27488_27508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (4))){
var inst_27465 = (state_27485[(7)]);
var inst_27465__$1 = (state_27485[(2)]);
var state_27485__$1 = (function (){var statearr_27489 = state_27485;
(statearr_27489[(7)] = inst_27465__$1);

return statearr_27489;
})();
if(cljs.core.truth_(inst_27465__$1)){
var statearr_27490_27509 = state_27485__$1;
(statearr_27490_27509[(1)] = (5));

} else {
var statearr_27491_27510 = state_27485__$1;
(statearr_27491_27510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (6))){
var state_27485__$1 = state_27485;
var statearr_27492_27511 = state_27485__$1;
(statearr_27492_27511[(2)] = null);

(statearr_27492_27511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (3))){
var inst_27483 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27485__$1,inst_27483);
} else {
if((state_val_27486 === (2))){
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27485__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27486 === (11))){
var inst_27477 = (state_27485[(2)]);
var state_27485__$1 = (function (){var statearr_27493 = state_27485;
(statearr_27493[(8)] = inst_27477);

return statearr_27493;
})();
var statearr_27494_27512 = state_27485__$1;
(statearr_27494_27512[(2)] = null);

(statearr_27494_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (9))){
var inst_27471 = (state_27485[(9)]);
var inst_27469 = (state_27485[(10)]);
var inst_27473 = inst_27471.call(null,inst_27469);
var state_27485__$1 = state_27485;
var statearr_27495_27513 = state_27485__$1;
(statearr_27495_27513[(2)] = inst_27473);

(statearr_27495_27513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (5))){
var inst_27465 = (state_27485[(7)]);
var inst_27467 = figwheel.client.file_reloading.blocking_load.call(null,inst_27465);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27485__$1,(8),inst_27467);
} else {
if((state_val_27486 === (10))){
var inst_27469 = (state_27485[(10)]);
var inst_27475 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27469);
var state_27485__$1 = state_27485;
var statearr_27496_27514 = state_27485__$1;
(statearr_27496_27514[(2)] = inst_27475);

(statearr_27496_27514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (8))){
var inst_27471 = (state_27485[(9)]);
var inst_27465 = (state_27485[(7)]);
var inst_27469 = (state_27485[(2)]);
var inst_27470 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27471__$1 = cljs.core.get.call(null,inst_27470,inst_27465);
var state_27485__$1 = (function (){var statearr_27497 = state_27485;
(statearr_27497[(9)] = inst_27471__$1);

(statearr_27497[(10)] = inst_27469);

return statearr_27497;
})();
if(cljs.core.truth_(inst_27471__$1)){
var statearr_27498_27515 = state_27485__$1;
(statearr_27498_27515[(1)] = (9));

} else {
var statearr_27499_27516 = state_27485__$1;
(statearr_27499_27516[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24227__auto__ = null;
var figwheel$client$file_reloading$state_machine__24227__auto____0 = (function (){
var statearr_27503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27503[(0)] = figwheel$client$file_reloading$state_machine__24227__auto__);

(statearr_27503[(1)] = (1));

return statearr_27503;
});
var figwheel$client$file_reloading$state_machine__24227__auto____1 = (function (state_27485){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_27485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e27504){if((e27504 instanceof Object)){
var ex__24230__auto__ = e27504;
var statearr_27505_27517 = state_27485;
(statearr_27505_27517[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27518 = state_27485;
state_27485 = G__27518;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24227__auto__ = function(state_27485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24227__auto____1.call(this,state_27485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24227__auto____0;
figwheel$client$file_reloading$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24227__auto____1;
return figwheel$client$file_reloading$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_27506 = f__24339__auto__.call(null);
(statearr_27506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_27506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27519,callback){
var map__27522 = p__27519;
var map__27522__$1 = ((((!((map__27522 == null)))?((((map__27522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27522):map__27522);
var file_msg = map__27522__$1;
var namespace = cljs.core.get.call(null,map__27522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27522,map__27522__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27522,map__27522__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27524){
var map__27527 = p__27524;
var map__27527__$1 = ((((!((map__27527 == null)))?((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527):map__27527);
var file_msg = map__27527__$1;
var namespace = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19131__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19131__auto__){
var or__19143__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
var or__19143__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19143__auto____$1)){
return or__19143__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19131__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27529,callback){
var map__27532 = p__27529;
var map__27532__$1 = ((((!((map__27532 == null)))?((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var file_msg = map__27532__$1;
var request_url = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24338__auto___27636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___27636,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___27636,out){
return (function (state_27618){
var state_val_27619 = (state_27618[(1)]);
if((state_val_27619 === (1))){
var inst_27592 = cljs.core.seq.call(null,files);
var inst_27593 = cljs.core.first.call(null,inst_27592);
var inst_27594 = cljs.core.next.call(null,inst_27592);
var inst_27595 = files;
var state_27618__$1 = (function (){var statearr_27620 = state_27618;
(statearr_27620[(7)] = inst_27593);

(statearr_27620[(8)] = inst_27594);

(statearr_27620[(9)] = inst_27595);

return statearr_27620;
})();
var statearr_27621_27637 = state_27618__$1;
(statearr_27621_27637[(2)] = null);

(statearr_27621_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27619 === (2))){
var inst_27601 = (state_27618[(10)]);
var inst_27595 = (state_27618[(9)]);
var inst_27600 = cljs.core.seq.call(null,inst_27595);
var inst_27601__$1 = cljs.core.first.call(null,inst_27600);
var inst_27602 = cljs.core.next.call(null,inst_27600);
var inst_27603 = (inst_27601__$1 == null);
var inst_27604 = cljs.core.not.call(null,inst_27603);
var state_27618__$1 = (function (){var statearr_27622 = state_27618;
(statearr_27622[(10)] = inst_27601__$1);

(statearr_27622[(11)] = inst_27602);

return statearr_27622;
})();
if(inst_27604){
var statearr_27623_27638 = state_27618__$1;
(statearr_27623_27638[(1)] = (4));

} else {
var statearr_27624_27639 = state_27618__$1;
(statearr_27624_27639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27619 === (3))){
var inst_27616 = (state_27618[(2)]);
var state_27618__$1 = state_27618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27618__$1,inst_27616);
} else {
if((state_val_27619 === (4))){
var inst_27601 = (state_27618[(10)]);
var inst_27606 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27601);
var state_27618__$1 = state_27618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27618__$1,(7),inst_27606);
} else {
if((state_val_27619 === (5))){
var inst_27612 = cljs.core.async.close_BANG_.call(null,out);
var state_27618__$1 = state_27618;
var statearr_27625_27640 = state_27618__$1;
(statearr_27625_27640[(2)] = inst_27612);

(statearr_27625_27640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27619 === (6))){
var inst_27614 = (state_27618[(2)]);
var state_27618__$1 = state_27618;
var statearr_27626_27641 = state_27618__$1;
(statearr_27626_27641[(2)] = inst_27614);

(statearr_27626_27641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27619 === (7))){
var inst_27602 = (state_27618[(11)]);
var inst_27608 = (state_27618[(2)]);
var inst_27609 = cljs.core.async.put_BANG_.call(null,out,inst_27608);
var inst_27595 = inst_27602;
var state_27618__$1 = (function (){var statearr_27627 = state_27618;
(statearr_27627[(12)] = inst_27609);

(statearr_27627[(9)] = inst_27595);

return statearr_27627;
})();
var statearr_27628_27642 = state_27618__$1;
(statearr_27628_27642[(2)] = null);

(statearr_27628_27642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24338__auto___27636,out))
;
return ((function (switch__24226__auto__,c__24338__auto___27636,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto____0 = (function (){
var statearr_27632 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27632[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto__);

(statearr_27632[(1)] = (1));

return statearr_27632;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto____1 = (function (state_27618){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_27618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object)){
var ex__24230__auto__ = e27633;
var statearr_27634_27643 = state_27618;
(statearr_27634_27643[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27644 = state_27618;
state_27618 = G__27644;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto__ = function(state_27618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto____1.call(this,state_27618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___27636,out))
})();
var state__24340__auto__ = (function (){var statearr_27635 = f__24339__auto__.call(null);
(statearr_27635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___27636);

return statearr_27635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___27636,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27645,opts){
var map__27649 = p__27645;
var map__27649__$1 = ((((!((map__27649 == null)))?((((map__27649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27649):map__27649);
var eval_body = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19131__auto__ = eval_body;
if(cljs.core.truth_(and__19131__auto__)){
return typeof eval_body === 'string';
} else {
return and__19131__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27651){var e = e27651;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27652_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27652_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27661){
var vec__27662 = p__27661;
var k = cljs.core.nth.call(null,vec__27662,(0),null);
var v = cljs.core.nth.call(null,vec__27662,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27665){
var vec__27666 = p__27665;
var k = cljs.core.nth.call(null,vec__27666,(0),null);
var v = cljs.core.nth.call(null,vec__27666,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27672,p__27673){
var map__27921 = p__27672;
var map__27921__$1 = ((((!((map__27921 == null)))?((((map__27921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27921):map__27921);
var opts = map__27921__$1;
var before_jsload = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27922 = p__27673;
var map__27922__$1 = ((((!((map__27922 == null)))?((((map__27922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27922):map__27922);
var msg = map__27922__$1;
var files = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28076){
var state_val_28077 = (state_28076[(1)]);
if((state_val_28077 === (7))){
var inst_27939 = (state_28076[(7)]);
var inst_27937 = (state_28076[(8)]);
var inst_27936 = (state_28076[(9)]);
var inst_27938 = (state_28076[(10)]);
var inst_27944 = cljs.core._nth.call(null,inst_27937,inst_27939);
var inst_27945 = figwheel.client.file_reloading.eval_body.call(null,inst_27944,opts);
var inst_27946 = (inst_27939 + (1));
var tmp28078 = inst_27937;
var tmp28079 = inst_27936;
var tmp28080 = inst_27938;
var inst_27936__$1 = tmp28079;
var inst_27937__$1 = tmp28078;
var inst_27938__$1 = tmp28080;
var inst_27939__$1 = inst_27946;
var state_28076__$1 = (function (){var statearr_28081 = state_28076;
(statearr_28081[(7)] = inst_27939__$1);

(statearr_28081[(8)] = inst_27937__$1);

(statearr_28081[(9)] = inst_27936__$1);

(statearr_28081[(10)] = inst_27938__$1);

(statearr_28081[(11)] = inst_27945);

return statearr_28081;
})();
var statearr_28082_28168 = state_28076__$1;
(statearr_28082_28168[(2)] = null);

(statearr_28082_28168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (20))){
var inst_27979 = (state_28076[(12)]);
var inst_27987 = figwheel.client.file_reloading.sort_files.call(null,inst_27979);
var state_28076__$1 = state_28076;
var statearr_28083_28169 = state_28076__$1;
(statearr_28083_28169[(2)] = inst_27987);

(statearr_28083_28169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (27))){
var state_28076__$1 = state_28076;
var statearr_28084_28170 = state_28076__$1;
(statearr_28084_28170[(2)] = null);

(statearr_28084_28170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (1))){
var inst_27928 = (state_28076[(13)]);
var inst_27925 = before_jsload.call(null,files);
var inst_27926 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27927 = (function (){return ((function (inst_27928,inst_27925,inst_27926,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27669_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27669_SHARP_);
});
;})(inst_27928,inst_27925,inst_27926,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27928__$1 = cljs.core.filter.call(null,inst_27927,files);
var inst_27929 = cljs.core.not_empty.call(null,inst_27928__$1);
var state_28076__$1 = (function (){var statearr_28085 = state_28076;
(statearr_28085[(13)] = inst_27928__$1);

(statearr_28085[(14)] = inst_27925);

(statearr_28085[(15)] = inst_27926);

return statearr_28085;
})();
if(cljs.core.truth_(inst_27929)){
var statearr_28086_28171 = state_28076__$1;
(statearr_28086_28171[(1)] = (2));

} else {
var statearr_28087_28172 = state_28076__$1;
(statearr_28087_28172[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (24))){
var state_28076__$1 = state_28076;
var statearr_28088_28173 = state_28076__$1;
(statearr_28088_28173[(2)] = null);

(statearr_28088_28173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (39))){
var inst_28029 = (state_28076[(16)]);
var state_28076__$1 = state_28076;
var statearr_28089_28174 = state_28076__$1;
(statearr_28089_28174[(2)] = inst_28029);

(statearr_28089_28174[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (46))){
var inst_28071 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28090_28175 = state_28076__$1;
(statearr_28090_28175[(2)] = inst_28071);

(statearr_28090_28175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (4))){
var inst_27973 = (state_28076[(2)]);
var inst_27974 = cljs.core.List.EMPTY;
var inst_27975 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27974);
var inst_27976 = (function (){return ((function (inst_27973,inst_27974,inst_27975,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27670_SHARP_){
var and__19131__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27670_SHARP_);
if(cljs.core.truth_(and__19131__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27670_SHARP_));
} else {
return and__19131__auto__;
}
});
;})(inst_27973,inst_27974,inst_27975,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27977 = cljs.core.filter.call(null,inst_27976,files);
var inst_27978 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27979 = cljs.core.concat.call(null,inst_27977,inst_27978);
var state_28076__$1 = (function (){var statearr_28091 = state_28076;
(statearr_28091[(17)] = inst_27973);

(statearr_28091[(12)] = inst_27979);

(statearr_28091[(18)] = inst_27975);

return statearr_28091;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28092_28176 = state_28076__$1;
(statearr_28092_28176[(1)] = (16));

} else {
var statearr_28093_28177 = state_28076__$1;
(statearr_28093_28177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (15))){
var inst_27963 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28094_28178 = state_28076__$1;
(statearr_28094_28178[(2)] = inst_27963);

(statearr_28094_28178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (21))){
var inst_27989 = (state_28076[(19)]);
var inst_27989__$1 = (state_28076[(2)]);
var inst_27990 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27989__$1);
var state_28076__$1 = (function (){var statearr_28095 = state_28076;
(statearr_28095[(19)] = inst_27989__$1);

return statearr_28095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28076__$1,(22),inst_27990);
} else {
if((state_val_28077 === (31))){
var inst_28074 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28076__$1,inst_28074);
} else {
if((state_val_28077 === (32))){
var inst_28029 = (state_28076[(16)]);
var inst_28034 = inst_28029.cljs$lang$protocol_mask$partition0$;
var inst_28035 = (inst_28034 & (64));
var inst_28036 = inst_28029.cljs$core$ISeq$;
var inst_28037 = (cljs.core.PROTOCOL_SENTINEL === inst_28036);
var inst_28038 = (inst_28035) || (inst_28037);
var state_28076__$1 = state_28076;
if(cljs.core.truth_(inst_28038)){
var statearr_28096_28179 = state_28076__$1;
(statearr_28096_28179[(1)] = (35));

} else {
var statearr_28097_28180 = state_28076__$1;
(statearr_28097_28180[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (40))){
var inst_28051 = (state_28076[(20)]);
var inst_28050 = (state_28076[(2)]);
var inst_28051__$1 = cljs.core.get.call(null,inst_28050,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28052 = cljs.core.get.call(null,inst_28050,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28053 = cljs.core.not_empty.call(null,inst_28051__$1);
var state_28076__$1 = (function (){var statearr_28098 = state_28076;
(statearr_28098[(21)] = inst_28052);

(statearr_28098[(20)] = inst_28051__$1);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28053)){
var statearr_28099_28181 = state_28076__$1;
(statearr_28099_28181[(1)] = (41));

} else {
var statearr_28100_28182 = state_28076__$1;
(statearr_28100_28182[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (33))){
var state_28076__$1 = state_28076;
var statearr_28101_28183 = state_28076__$1;
(statearr_28101_28183[(2)] = false);

(statearr_28101_28183[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (13))){
var inst_27949 = (state_28076[(22)]);
var inst_27953 = cljs.core.chunk_first.call(null,inst_27949);
var inst_27954 = cljs.core.chunk_rest.call(null,inst_27949);
var inst_27955 = cljs.core.count.call(null,inst_27953);
var inst_27936 = inst_27954;
var inst_27937 = inst_27953;
var inst_27938 = inst_27955;
var inst_27939 = (0);
var state_28076__$1 = (function (){var statearr_28102 = state_28076;
(statearr_28102[(7)] = inst_27939);

(statearr_28102[(8)] = inst_27937);

(statearr_28102[(9)] = inst_27936);

(statearr_28102[(10)] = inst_27938);

return statearr_28102;
})();
var statearr_28103_28184 = state_28076__$1;
(statearr_28103_28184[(2)] = null);

(statearr_28103_28184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (22))){
var inst_27989 = (state_28076[(19)]);
var inst_27997 = (state_28076[(23)]);
var inst_27993 = (state_28076[(24)]);
var inst_27992 = (state_28076[(25)]);
var inst_27992__$1 = (state_28076[(2)]);
var inst_27993__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27992__$1);
var inst_27994 = (function (){var all_files = inst_27989;
var res_SINGLEQUOTE_ = inst_27992__$1;
var res = inst_27993__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27989,inst_27997,inst_27993,inst_27992,inst_27992__$1,inst_27993__$1,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27671_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27671_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27989,inst_27997,inst_27993,inst_27992,inst_27992__$1,inst_27993__$1,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27995 = cljs.core.filter.call(null,inst_27994,inst_27992__$1);
var inst_27996 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27997__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27996);
var inst_27998 = cljs.core.not_empty.call(null,inst_27997__$1);
var state_28076__$1 = (function (){var statearr_28104 = state_28076;
(statearr_28104[(23)] = inst_27997__$1);

(statearr_28104[(26)] = inst_27995);

(statearr_28104[(24)] = inst_27993__$1);

(statearr_28104[(25)] = inst_27992__$1);

return statearr_28104;
})();
if(cljs.core.truth_(inst_27998)){
var statearr_28105_28185 = state_28076__$1;
(statearr_28105_28185[(1)] = (23));

} else {
var statearr_28106_28186 = state_28076__$1;
(statearr_28106_28186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (36))){
var state_28076__$1 = state_28076;
var statearr_28107_28187 = state_28076__$1;
(statearr_28107_28187[(2)] = false);

(statearr_28107_28187[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (41))){
var inst_28051 = (state_28076[(20)]);
var inst_28055 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28056 = cljs.core.map.call(null,inst_28055,inst_28051);
var inst_28057 = cljs.core.pr_str.call(null,inst_28056);
var inst_28058 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28057)].join('');
var inst_28059 = figwheel.client.utils.log.call(null,inst_28058);
var state_28076__$1 = state_28076;
var statearr_28108_28188 = state_28076__$1;
(statearr_28108_28188[(2)] = inst_28059);

(statearr_28108_28188[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (43))){
var inst_28052 = (state_28076[(21)]);
var inst_28062 = (state_28076[(2)]);
var inst_28063 = cljs.core.not_empty.call(null,inst_28052);
var state_28076__$1 = (function (){var statearr_28109 = state_28076;
(statearr_28109[(27)] = inst_28062);

return statearr_28109;
})();
if(cljs.core.truth_(inst_28063)){
var statearr_28110_28189 = state_28076__$1;
(statearr_28110_28189[(1)] = (44));

} else {
var statearr_28111_28190 = state_28076__$1;
(statearr_28111_28190[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (29))){
var inst_27989 = (state_28076[(19)]);
var inst_27997 = (state_28076[(23)]);
var inst_27995 = (state_28076[(26)]);
var inst_27993 = (state_28076[(24)]);
var inst_27992 = (state_28076[(25)]);
var inst_28029 = (state_28076[(16)]);
var inst_28025 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28028 = (function (){var all_files = inst_27989;
var res_SINGLEQUOTE_ = inst_27992;
var res = inst_27993;
var files_not_loaded = inst_27995;
var dependencies_that_loaded = inst_27997;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28029,inst_28025,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28027){
var map__28112 = p__28027;
var map__28112__$1 = ((((!((map__28112 == null)))?((((map__28112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28112):map__28112);
var namespace = cljs.core.get.call(null,map__28112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28029,inst_28025,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28029__$1 = cljs.core.group_by.call(null,inst_28028,inst_27995);
var inst_28031 = (inst_28029__$1 == null);
var inst_28032 = cljs.core.not.call(null,inst_28031);
var state_28076__$1 = (function (){var statearr_28114 = state_28076;
(statearr_28114[(28)] = inst_28025);

(statearr_28114[(16)] = inst_28029__$1);

return statearr_28114;
})();
if(inst_28032){
var statearr_28115_28191 = state_28076__$1;
(statearr_28115_28191[(1)] = (32));

} else {
var statearr_28116_28192 = state_28076__$1;
(statearr_28116_28192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (44))){
var inst_28052 = (state_28076[(21)]);
var inst_28065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28052);
var inst_28066 = cljs.core.pr_str.call(null,inst_28065);
var inst_28067 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28066)].join('');
var inst_28068 = figwheel.client.utils.log.call(null,inst_28067);
var state_28076__$1 = state_28076;
var statearr_28117_28193 = state_28076__$1;
(statearr_28117_28193[(2)] = inst_28068);

(statearr_28117_28193[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (6))){
var inst_27970 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28118_28194 = state_28076__$1;
(statearr_28118_28194[(2)] = inst_27970);

(statearr_28118_28194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (28))){
var inst_27995 = (state_28076[(26)]);
var inst_28022 = (state_28076[(2)]);
var inst_28023 = cljs.core.not_empty.call(null,inst_27995);
var state_28076__$1 = (function (){var statearr_28119 = state_28076;
(statearr_28119[(29)] = inst_28022);

return statearr_28119;
})();
if(cljs.core.truth_(inst_28023)){
var statearr_28120_28195 = state_28076__$1;
(statearr_28120_28195[(1)] = (29));

} else {
var statearr_28121_28196 = state_28076__$1;
(statearr_28121_28196[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (25))){
var inst_27993 = (state_28076[(24)]);
var inst_28009 = (state_28076[(2)]);
var inst_28010 = cljs.core.not_empty.call(null,inst_27993);
var state_28076__$1 = (function (){var statearr_28122 = state_28076;
(statearr_28122[(30)] = inst_28009);

return statearr_28122;
})();
if(cljs.core.truth_(inst_28010)){
var statearr_28123_28197 = state_28076__$1;
(statearr_28123_28197[(1)] = (26));

} else {
var statearr_28124_28198 = state_28076__$1;
(statearr_28124_28198[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (34))){
var inst_28045 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
if(cljs.core.truth_(inst_28045)){
var statearr_28125_28199 = state_28076__$1;
(statearr_28125_28199[(1)] = (38));

} else {
var statearr_28126_28200 = state_28076__$1;
(statearr_28126_28200[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (17))){
var state_28076__$1 = state_28076;
var statearr_28127_28201 = state_28076__$1;
(statearr_28127_28201[(2)] = recompile_dependents);

(statearr_28127_28201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (3))){
var state_28076__$1 = state_28076;
var statearr_28128_28202 = state_28076__$1;
(statearr_28128_28202[(2)] = null);

(statearr_28128_28202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (12))){
var inst_27966 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28129_28203 = state_28076__$1;
(statearr_28129_28203[(2)] = inst_27966);

(statearr_28129_28203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (2))){
var inst_27928 = (state_28076[(13)]);
var inst_27935 = cljs.core.seq.call(null,inst_27928);
var inst_27936 = inst_27935;
var inst_27937 = null;
var inst_27938 = (0);
var inst_27939 = (0);
var state_28076__$1 = (function (){var statearr_28130 = state_28076;
(statearr_28130[(7)] = inst_27939);

(statearr_28130[(8)] = inst_27937);

(statearr_28130[(9)] = inst_27936);

(statearr_28130[(10)] = inst_27938);

return statearr_28130;
})();
var statearr_28131_28204 = state_28076__$1;
(statearr_28131_28204[(2)] = null);

(statearr_28131_28204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (23))){
var inst_27989 = (state_28076[(19)]);
var inst_27997 = (state_28076[(23)]);
var inst_27995 = (state_28076[(26)]);
var inst_27993 = (state_28076[(24)]);
var inst_27992 = (state_28076[(25)]);
var inst_28000 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28002 = (function (){var all_files = inst_27989;
var res_SINGLEQUOTE_ = inst_27992;
var res = inst_27993;
var files_not_loaded = inst_27995;
var dependencies_that_loaded = inst_27997;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28000,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28001){
var map__28132 = p__28001;
var map__28132__$1 = ((((!((map__28132 == null)))?((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var request_url = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28000,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28003 = cljs.core.reverse.call(null,inst_27997);
var inst_28004 = cljs.core.map.call(null,inst_28002,inst_28003);
var inst_28005 = cljs.core.pr_str.call(null,inst_28004);
var inst_28006 = figwheel.client.utils.log.call(null,inst_28005);
var state_28076__$1 = (function (){var statearr_28134 = state_28076;
(statearr_28134[(31)] = inst_28000);

return statearr_28134;
})();
var statearr_28135_28205 = state_28076__$1;
(statearr_28135_28205[(2)] = inst_28006);

(statearr_28135_28205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (35))){
var state_28076__$1 = state_28076;
var statearr_28136_28206 = state_28076__$1;
(statearr_28136_28206[(2)] = true);

(statearr_28136_28206[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (19))){
var inst_27979 = (state_28076[(12)]);
var inst_27985 = figwheel.client.file_reloading.expand_files.call(null,inst_27979);
var state_28076__$1 = state_28076;
var statearr_28137_28207 = state_28076__$1;
(statearr_28137_28207[(2)] = inst_27985);

(statearr_28137_28207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (11))){
var state_28076__$1 = state_28076;
var statearr_28138_28208 = state_28076__$1;
(statearr_28138_28208[(2)] = null);

(statearr_28138_28208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (9))){
var inst_27968 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28139_28209 = state_28076__$1;
(statearr_28139_28209[(2)] = inst_27968);

(statearr_28139_28209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (5))){
var inst_27939 = (state_28076[(7)]);
var inst_27938 = (state_28076[(10)]);
var inst_27941 = (inst_27939 < inst_27938);
var inst_27942 = inst_27941;
var state_28076__$1 = state_28076;
if(cljs.core.truth_(inst_27942)){
var statearr_28140_28210 = state_28076__$1;
(statearr_28140_28210[(1)] = (7));

} else {
var statearr_28141_28211 = state_28076__$1;
(statearr_28141_28211[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (14))){
var inst_27949 = (state_28076[(22)]);
var inst_27958 = cljs.core.first.call(null,inst_27949);
var inst_27959 = figwheel.client.file_reloading.eval_body.call(null,inst_27958,opts);
var inst_27960 = cljs.core.next.call(null,inst_27949);
var inst_27936 = inst_27960;
var inst_27937 = null;
var inst_27938 = (0);
var inst_27939 = (0);
var state_28076__$1 = (function (){var statearr_28142 = state_28076;
(statearr_28142[(7)] = inst_27939);

(statearr_28142[(8)] = inst_27937);

(statearr_28142[(32)] = inst_27959);

(statearr_28142[(9)] = inst_27936);

(statearr_28142[(10)] = inst_27938);

return statearr_28142;
})();
var statearr_28143_28212 = state_28076__$1;
(statearr_28143_28212[(2)] = null);

(statearr_28143_28212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (45))){
var state_28076__$1 = state_28076;
var statearr_28144_28213 = state_28076__$1;
(statearr_28144_28213[(2)] = null);

(statearr_28144_28213[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (26))){
var inst_27989 = (state_28076[(19)]);
var inst_27997 = (state_28076[(23)]);
var inst_27995 = (state_28076[(26)]);
var inst_27993 = (state_28076[(24)]);
var inst_27992 = (state_28076[(25)]);
var inst_28012 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28014 = (function (){var all_files = inst_27989;
var res_SINGLEQUOTE_ = inst_27992;
var res = inst_27993;
var files_not_loaded = inst_27995;
var dependencies_that_loaded = inst_27997;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28012,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28013){
var map__28145 = p__28013;
var map__28145__$1 = ((((!((map__28145 == null)))?((((map__28145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28145):map__28145);
var namespace = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28012,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28015 = cljs.core.map.call(null,inst_28014,inst_27993);
var inst_28016 = cljs.core.pr_str.call(null,inst_28015);
var inst_28017 = figwheel.client.utils.log.call(null,inst_28016);
var inst_28018 = (function (){var all_files = inst_27989;
var res_SINGLEQUOTE_ = inst_27992;
var res = inst_27993;
var files_not_loaded = inst_27995;
var dependencies_that_loaded = inst_27997;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28012,inst_28014,inst_28015,inst_28016,inst_28017,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27989,inst_27997,inst_27995,inst_27993,inst_27992,inst_28012,inst_28014,inst_28015,inst_28016,inst_28017,state_val_28077,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28019 = setTimeout(inst_28018,(10));
var state_28076__$1 = (function (){var statearr_28147 = state_28076;
(statearr_28147[(33)] = inst_28017);

(statearr_28147[(34)] = inst_28012);

return statearr_28147;
})();
var statearr_28148_28214 = state_28076__$1;
(statearr_28148_28214[(2)] = inst_28019);

(statearr_28148_28214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (16))){
var state_28076__$1 = state_28076;
var statearr_28149_28215 = state_28076__$1;
(statearr_28149_28215[(2)] = reload_dependents);

(statearr_28149_28215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (38))){
var inst_28029 = (state_28076[(16)]);
var inst_28047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28029);
var state_28076__$1 = state_28076;
var statearr_28150_28216 = state_28076__$1;
(statearr_28150_28216[(2)] = inst_28047);

(statearr_28150_28216[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (30))){
var state_28076__$1 = state_28076;
var statearr_28151_28217 = state_28076__$1;
(statearr_28151_28217[(2)] = null);

(statearr_28151_28217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (10))){
var inst_27949 = (state_28076[(22)]);
var inst_27951 = cljs.core.chunked_seq_QMARK_.call(null,inst_27949);
var state_28076__$1 = state_28076;
if(inst_27951){
var statearr_28152_28218 = state_28076__$1;
(statearr_28152_28218[(1)] = (13));

} else {
var statearr_28153_28219 = state_28076__$1;
(statearr_28153_28219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (18))){
var inst_27983 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
if(cljs.core.truth_(inst_27983)){
var statearr_28154_28220 = state_28076__$1;
(statearr_28154_28220[(1)] = (19));

} else {
var statearr_28155_28221 = state_28076__$1;
(statearr_28155_28221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (42))){
var state_28076__$1 = state_28076;
var statearr_28156_28222 = state_28076__$1;
(statearr_28156_28222[(2)] = null);

(statearr_28156_28222[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (37))){
var inst_28042 = (state_28076[(2)]);
var state_28076__$1 = state_28076;
var statearr_28157_28223 = state_28076__$1;
(statearr_28157_28223[(2)] = inst_28042);

(statearr_28157_28223[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28077 === (8))){
var inst_27949 = (state_28076[(22)]);
var inst_27936 = (state_28076[(9)]);
var inst_27949__$1 = cljs.core.seq.call(null,inst_27936);
var state_28076__$1 = (function (){var statearr_28158 = state_28076;
(statearr_28158[(22)] = inst_27949__$1);

return statearr_28158;
})();
if(inst_27949__$1){
var statearr_28159_28224 = state_28076__$1;
(statearr_28159_28224[(1)] = (10));

} else {
var statearr_28160_28225 = state_28076__$1;
(statearr_28160_28225[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24226__auto__,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto____0 = (function (){
var statearr_28164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28164[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto__);

(statearr_28164[(1)] = (1));

return statearr_28164;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto____1 = (function (state_28076){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_28076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e28165){if((e28165 instanceof Object)){
var ex__24230__auto__ = e28165;
var statearr_28166_28226 = state_28076;
(statearr_28166_28226[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28227 = state_28076;
state_28076 = G__28227;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto__ = function(state_28076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto____1.call(this,state_28076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24340__auto__ = (function (){var statearr_28167 = f__24339__auto__.call(null);
(statearr_28167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_28167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__,map__27921,map__27921__$1,opts,before_jsload,on_jsload,reload_dependents,map__27922,map__27922__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24338__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28230,link){
var map__28233 = p__28230;
var map__28233__$1 = ((((!((map__28233 == null)))?((((map__28233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28233):map__28233);
var file = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28233,map__28233__$1,file){
return (function (p1__28228_SHARP_,p2__28229_SHARP_){
if(cljs.core._EQ_.call(null,p1__28228_SHARP_,p2__28229_SHARP_)){
return p1__28228_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28233,map__28233__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28239){
var map__28240 = p__28239;
var map__28240__$1 = ((((!((map__28240 == null)))?((((map__28240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28240):map__28240);
var match_length = cljs.core.get.call(null,map__28240__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28240__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28235_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28235_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28242 = [];
var len__20256__auto___28245 = arguments.length;
var i__20257__auto___28246 = (0);
while(true){
if((i__20257__auto___28246 < len__20256__auto___28245)){
args28242.push((arguments[i__20257__auto___28246]));

var G__28247 = (i__20257__auto___28246 + (1));
i__20257__auto___28246 = G__28247;
continue;
} else {
}
break;
}

var G__28244 = args28242.length;
switch (G__28244) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28242.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28249_SHARP_,p2__28250_SHARP_){
return cljs.core.assoc.call(null,p1__28249_SHARP_,cljs.core.get.call(null,p2__28250_SHARP_,key),p2__28250_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28251){
var map__28254 = p__28251;
var map__28254__$1 = ((((!((map__28254 == null)))?((((map__28254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28254):map__28254);
var f_data = map__28254__$1;
var file = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28256,files_msg){
var map__28263 = p__28256;
var map__28263__$1 = ((((!((map__28263 == null)))?((((map__28263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263):map__28263);
var opts = map__28263__$1;
var on_cssload = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28265_28269 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28266_28270 = null;
var count__28267_28271 = (0);
var i__28268_28272 = (0);
while(true){
if((i__28268_28272 < count__28267_28271)){
var f_28273 = cljs.core._nth.call(null,chunk__28266_28270,i__28268_28272);
figwheel.client.file_reloading.reload_css_file.call(null,f_28273);

var G__28274 = seq__28265_28269;
var G__28275 = chunk__28266_28270;
var G__28276 = count__28267_28271;
var G__28277 = (i__28268_28272 + (1));
seq__28265_28269 = G__28274;
chunk__28266_28270 = G__28275;
count__28267_28271 = G__28276;
i__28268_28272 = G__28277;
continue;
} else {
var temp__4657__auto___28278 = cljs.core.seq.call(null,seq__28265_28269);
if(temp__4657__auto___28278){
var seq__28265_28279__$1 = temp__4657__auto___28278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28265_28279__$1)){
var c__19962__auto___28280 = cljs.core.chunk_first.call(null,seq__28265_28279__$1);
var G__28281 = cljs.core.chunk_rest.call(null,seq__28265_28279__$1);
var G__28282 = c__19962__auto___28280;
var G__28283 = cljs.core.count.call(null,c__19962__auto___28280);
var G__28284 = (0);
seq__28265_28269 = G__28281;
chunk__28266_28270 = G__28282;
count__28267_28271 = G__28283;
i__28268_28272 = G__28284;
continue;
} else {
var f_28285 = cljs.core.first.call(null,seq__28265_28279__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28285);

var G__28286 = cljs.core.next.call(null,seq__28265_28279__$1);
var G__28287 = null;
var G__28288 = (0);
var G__28289 = (0);
seq__28265_28269 = G__28286;
chunk__28266_28270 = G__28287;
count__28267_28271 = G__28288;
i__28268_28272 = G__28289;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28263,map__28263__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28263,map__28263__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1494348452081