// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
var or__18322__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18322__auto__){
return or__18322__auto__;
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
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18322__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26044_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26044_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__26049 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26050 = null;
var count__26051 = (0);
var i__26052 = (0);
while(true){
if((i__26052 < count__26051)){
var n = cljs.core._nth.call(null,chunk__26050,i__26052);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26053 = seq__26049;
var G__26054 = chunk__26050;
var G__26055 = count__26051;
var G__26056 = (i__26052 + (1));
seq__26049 = G__26053;
chunk__26050 = G__26054;
count__26051 = G__26055;
i__26052 = G__26056;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26049);
if(temp__4657__auto__){
var seq__26049__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26049__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__26049__$1);
var G__26057 = cljs.core.chunk_rest.call(null,seq__26049__$1);
var G__26058 = c__19125__auto__;
var G__26059 = cljs.core.count.call(null,c__19125__auto__);
var G__26060 = (0);
seq__26049 = G__26057;
chunk__26050 = G__26058;
count__26051 = G__26059;
i__26052 = G__26060;
continue;
} else {
var n = cljs.core.first.call(null,seq__26049__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26061 = cljs.core.next.call(null,seq__26049__$1);
var G__26062 = null;
var G__26063 = (0);
var G__26064 = (0);
seq__26049 = G__26061;
chunk__26050 = G__26062;
count__26051 = G__26063;
i__26052 = G__26064;
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

var seq__26103_26110 = cljs.core.seq.call(null,deps);
var chunk__26104_26111 = null;
var count__26105_26112 = (0);
var i__26106_26113 = (0);
while(true){
if((i__26106_26113 < count__26105_26112)){
var dep_26114 = cljs.core._nth.call(null,chunk__26104_26111,i__26106_26113);
topo_sort_helper_STAR_.call(null,dep_26114,(depth + (1)),state);

var G__26115 = seq__26103_26110;
var G__26116 = chunk__26104_26111;
var G__26117 = count__26105_26112;
var G__26118 = (i__26106_26113 + (1));
seq__26103_26110 = G__26115;
chunk__26104_26111 = G__26116;
count__26105_26112 = G__26117;
i__26106_26113 = G__26118;
continue;
} else {
var temp__4657__auto___26119 = cljs.core.seq.call(null,seq__26103_26110);
if(temp__4657__auto___26119){
var seq__26103_26120__$1 = temp__4657__auto___26119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26103_26120__$1)){
var c__19125__auto___26121 = cljs.core.chunk_first.call(null,seq__26103_26120__$1);
var G__26122 = cljs.core.chunk_rest.call(null,seq__26103_26120__$1);
var G__26123 = c__19125__auto___26121;
var G__26124 = cljs.core.count.call(null,c__19125__auto___26121);
var G__26125 = (0);
seq__26103_26110 = G__26122;
chunk__26104_26111 = G__26123;
count__26105_26112 = G__26124;
i__26106_26113 = G__26125;
continue;
} else {
var dep_26126 = cljs.core.first.call(null,seq__26103_26120__$1);
topo_sort_helper_STAR_.call(null,dep_26126,(depth + (1)),state);

var G__26127 = cljs.core.next.call(null,seq__26103_26120__$1);
var G__26128 = null;
var G__26129 = (0);
var G__26130 = (0);
seq__26103_26110 = G__26127;
chunk__26104_26111 = G__26128;
count__26105_26112 = G__26129;
i__26106_26113 = G__26130;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26107){
var vec__26109 = p__26107;
var x = cljs.core.nth.call(null,vec__26109,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26109,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26109,x,xs,get_deps__$1){
return (function (p1__26065_SHARP_){
return clojure.set.difference.call(null,p1__26065_SHARP_,x);
});})(vec__26109,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26143 = cljs.core.seq.call(null,provides);
var chunk__26144 = null;
var count__26145 = (0);
var i__26146 = (0);
while(true){
if((i__26146 < count__26145)){
var prov = cljs.core._nth.call(null,chunk__26144,i__26146);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26147_26155 = cljs.core.seq.call(null,requires);
var chunk__26148_26156 = null;
var count__26149_26157 = (0);
var i__26150_26158 = (0);
while(true){
if((i__26150_26158 < count__26149_26157)){
var req_26159 = cljs.core._nth.call(null,chunk__26148_26156,i__26150_26158);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26159,prov);

var G__26160 = seq__26147_26155;
var G__26161 = chunk__26148_26156;
var G__26162 = count__26149_26157;
var G__26163 = (i__26150_26158 + (1));
seq__26147_26155 = G__26160;
chunk__26148_26156 = G__26161;
count__26149_26157 = G__26162;
i__26150_26158 = G__26163;
continue;
} else {
var temp__4657__auto___26164 = cljs.core.seq.call(null,seq__26147_26155);
if(temp__4657__auto___26164){
var seq__26147_26165__$1 = temp__4657__auto___26164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26147_26165__$1)){
var c__19125__auto___26166 = cljs.core.chunk_first.call(null,seq__26147_26165__$1);
var G__26167 = cljs.core.chunk_rest.call(null,seq__26147_26165__$1);
var G__26168 = c__19125__auto___26166;
var G__26169 = cljs.core.count.call(null,c__19125__auto___26166);
var G__26170 = (0);
seq__26147_26155 = G__26167;
chunk__26148_26156 = G__26168;
count__26149_26157 = G__26169;
i__26150_26158 = G__26170;
continue;
} else {
var req_26171 = cljs.core.first.call(null,seq__26147_26165__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26171,prov);

var G__26172 = cljs.core.next.call(null,seq__26147_26165__$1);
var G__26173 = null;
var G__26174 = (0);
var G__26175 = (0);
seq__26147_26155 = G__26172;
chunk__26148_26156 = G__26173;
count__26149_26157 = G__26174;
i__26150_26158 = G__26175;
continue;
}
} else {
}
}
break;
}

var G__26176 = seq__26143;
var G__26177 = chunk__26144;
var G__26178 = count__26145;
var G__26179 = (i__26146 + (1));
seq__26143 = G__26176;
chunk__26144 = G__26177;
count__26145 = G__26178;
i__26146 = G__26179;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26143);
if(temp__4657__auto__){
var seq__26143__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26143__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__26143__$1);
var G__26180 = cljs.core.chunk_rest.call(null,seq__26143__$1);
var G__26181 = c__19125__auto__;
var G__26182 = cljs.core.count.call(null,c__19125__auto__);
var G__26183 = (0);
seq__26143 = G__26180;
chunk__26144 = G__26181;
count__26145 = G__26182;
i__26146 = G__26183;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26143__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26151_26184 = cljs.core.seq.call(null,requires);
var chunk__26152_26185 = null;
var count__26153_26186 = (0);
var i__26154_26187 = (0);
while(true){
if((i__26154_26187 < count__26153_26186)){
var req_26188 = cljs.core._nth.call(null,chunk__26152_26185,i__26154_26187);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26188,prov);

var G__26189 = seq__26151_26184;
var G__26190 = chunk__26152_26185;
var G__26191 = count__26153_26186;
var G__26192 = (i__26154_26187 + (1));
seq__26151_26184 = G__26189;
chunk__26152_26185 = G__26190;
count__26153_26186 = G__26191;
i__26154_26187 = G__26192;
continue;
} else {
var temp__4657__auto___26193__$1 = cljs.core.seq.call(null,seq__26151_26184);
if(temp__4657__auto___26193__$1){
var seq__26151_26194__$1 = temp__4657__auto___26193__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26151_26194__$1)){
var c__19125__auto___26195 = cljs.core.chunk_first.call(null,seq__26151_26194__$1);
var G__26196 = cljs.core.chunk_rest.call(null,seq__26151_26194__$1);
var G__26197 = c__19125__auto___26195;
var G__26198 = cljs.core.count.call(null,c__19125__auto___26195);
var G__26199 = (0);
seq__26151_26184 = G__26196;
chunk__26152_26185 = G__26197;
count__26153_26186 = G__26198;
i__26154_26187 = G__26199;
continue;
} else {
var req_26200 = cljs.core.first.call(null,seq__26151_26194__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26200,prov);

var G__26201 = cljs.core.next.call(null,seq__26151_26194__$1);
var G__26202 = null;
var G__26203 = (0);
var G__26204 = (0);
seq__26151_26184 = G__26201;
chunk__26152_26185 = G__26202;
count__26153_26186 = G__26203;
i__26154_26187 = G__26204;
continue;
}
} else {
}
}
break;
}

var G__26205 = cljs.core.next.call(null,seq__26143__$1);
var G__26206 = null;
var G__26207 = (0);
var G__26208 = (0);
seq__26143 = G__26205;
chunk__26144 = G__26206;
count__26145 = G__26207;
i__26146 = G__26208;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26213_26217 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26214_26218 = null;
var count__26215_26219 = (0);
var i__26216_26220 = (0);
while(true){
if((i__26216_26220 < count__26215_26219)){
var ns_26221 = cljs.core._nth.call(null,chunk__26214_26218,i__26216_26220);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26221);

var G__26222 = seq__26213_26217;
var G__26223 = chunk__26214_26218;
var G__26224 = count__26215_26219;
var G__26225 = (i__26216_26220 + (1));
seq__26213_26217 = G__26222;
chunk__26214_26218 = G__26223;
count__26215_26219 = G__26224;
i__26216_26220 = G__26225;
continue;
} else {
var temp__4657__auto___26226 = cljs.core.seq.call(null,seq__26213_26217);
if(temp__4657__auto___26226){
var seq__26213_26227__$1 = temp__4657__auto___26226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26213_26227__$1)){
var c__19125__auto___26228 = cljs.core.chunk_first.call(null,seq__26213_26227__$1);
var G__26229 = cljs.core.chunk_rest.call(null,seq__26213_26227__$1);
var G__26230 = c__19125__auto___26228;
var G__26231 = cljs.core.count.call(null,c__19125__auto___26228);
var G__26232 = (0);
seq__26213_26217 = G__26229;
chunk__26214_26218 = G__26230;
count__26215_26219 = G__26231;
i__26216_26220 = G__26232;
continue;
} else {
var ns_26233 = cljs.core.first.call(null,seq__26213_26227__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26233);

var G__26234 = cljs.core.next.call(null,seq__26213_26227__$1);
var G__26235 = null;
var G__26236 = (0);
var G__26237 = (0);
seq__26213_26217 = G__26234;
chunk__26214_26218 = G__26235;
count__26215_26219 = G__26236;
i__26216_26220 = G__26237;
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
goog.require_figwheel_backup_ = (function (){var or__18322__auto__ = goog.require__;
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
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
var G__26238__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26239__i = 0, G__26239__a = new Array(arguments.length -  0);
while (G__26239__i < G__26239__a.length) {G__26239__a[G__26239__i] = arguments[G__26239__i + 0]; ++G__26239__i;}
  args = new cljs.core.IndexedSeq(G__26239__a,0);
} 
return G__26238__delegate.call(this,args);};
G__26238.cljs$lang$maxFixedArity = 0;
G__26238.cljs$lang$applyTo = (function (arglist__26240){
var args = cljs.core.seq(arglist__26240);
return G__26238__delegate(args);
});
G__26238.cljs$core$IFn$_invoke$arity$variadic = G__26238__delegate;
return G__26238;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26242 = cljs.core._EQ_;
var expr__26243 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26242.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26243))){
var path_parts = ((function (pred__26242,expr__26243){
return (function (p1__26241_SHARP_){
return clojure.string.split.call(null,p1__26241_SHARP_,/[\/\\]/);
});})(pred__26242,expr__26243))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26242,expr__26243){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26245){if((e26245 instanceof Error)){
var e = e26245;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26245;

}
}})());
});
;})(path_parts,sep,root,pred__26242,expr__26243))
} else {
if(cljs.core.truth_(pred__26242.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26243))){
return ((function (pred__26242,expr__26243){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26242,expr__26243){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26242,expr__26243))
);

return deferred.addErrback(((function (deferred,pred__26242,expr__26243){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26242,expr__26243))
);
});
;})(pred__26242,expr__26243))
} else {
return ((function (pred__26242,expr__26243){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26242,expr__26243))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26246,callback){
var map__26249 = p__26246;
var map__26249__$1 = ((((!((map__26249 == null)))?((((map__26249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26249):map__26249);
var file_msg = map__26249__$1;
var request_url = cljs.core.get.call(null,map__26249__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26249,map__26249__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26249,map__26249__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_26273){
var state_val_26274 = (state_26273[(1)]);
if((state_val_26274 === (7))){
var inst_26269 = (state_26273[(2)]);
var state_26273__$1 = state_26273;
var statearr_26275_26295 = state_26273__$1;
(statearr_26275_26295[(2)] = inst_26269);

(statearr_26275_26295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (1))){
var state_26273__$1 = state_26273;
var statearr_26276_26296 = state_26273__$1;
(statearr_26276_26296[(2)] = null);

(statearr_26276_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (4))){
var inst_26253 = (state_26273[(7)]);
var inst_26253__$1 = (state_26273[(2)]);
var state_26273__$1 = (function (){var statearr_26277 = state_26273;
(statearr_26277[(7)] = inst_26253__$1);

return statearr_26277;
})();
if(cljs.core.truth_(inst_26253__$1)){
var statearr_26278_26297 = state_26273__$1;
(statearr_26278_26297[(1)] = (5));

} else {
var statearr_26279_26298 = state_26273__$1;
(statearr_26279_26298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (6))){
var state_26273__$1 = state_26273;
var statearr_26280_26299 = state_26273__$1;
(statearr_26280_26299[(2)] = null);

(statearr_26280_26299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (3))){
var inst_26271 = (state_26273[(2)]);
var state_26273__$1 = state_26273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26273__$1,inst_26271);
} else {
if((state_val_26274 === (2))){
var state_26273__$1 = state_26273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26273__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26274 === (11))){
var inst_26265 = (state_26273[(2)]);
var state_26273__$1 = (function (){var statearr_26281 = state_26273;
(statearr_26281[(8)] = inst_26265);

return statearr_26281;
})();
var statearr_26282_26300 = state_26273__$1;
(statearr_26282_26300[(2)] = null);

(statearr_26282_26300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (9))){
var inst_26257 = (state_26273[(9)]);
var inst_26259 = (state_26273[(10)]);
var inst_26261 = inst_26259.call(null,inst_26257);
var state_26273__$1 = state_26273;
var statearr_26283_26301 = state_26273__$1;
(statearr_26283_26301[(2)] = inst_26261);

(statearr_26283_26301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (5))){
var inst_26253 = (state_26273[(7)]);
var inst_26255 = figwheel.client.file_reloading.blocking_load.call(null,inst_26253);
var state_26273__$1 = state_26273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26273__$1,(8),inst_26255);
} else {
if((state_val_26274 === (10))){
var inst_26257 = (state_26273[(9)]);
var inst_26263 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26257);
var state_26273__$1 = state_26273;
var statearr_26284_26302 = state_26273__$1;
(statearr_26284_26302[(2)] = inst_26263);

(statearr_26284_26302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26274 === (8))){
var inst_26253 = (state_26273[(7)]);
var inst_26259 = (state_26273[(10)]);
var inst_26257 = (state_26273[(2)]);
var inst_26258 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26259__$1 = cljs.core.get.call(null,inst_26258,inst_26253);
var state_26273__$1 = (function (){var statearr_26285 = state_26273;
(statearr_26285[(9)] = inst_26257);

(statearr_26285[(10)] = inst_26259__$1);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26259__$1)){
var statearr_26286_26303 = state_26273__$1;
(statearr_26286_26303[(1)] = (9));

} else {
var statearr_26287_26304 = state_26273__$1;
(statearr_26287_26304[(1)] = (10));

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
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22119__auto__ = null;
var figwheel$client$file_reloading$state_machine__22119__auto____0 = (function (){
var statearr_26291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26291[(0)] = figwheel$client$file_reloading$state_machine__22119__auto__);

(statearr_26291[(1)] = (1));

return statearr_26291;
});
var figwheel$client$file_reloading$state_machine__22119__auto____1 = (function (state_26273){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_26273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e26292){if((e26292 instanceof Object)){
var ex__22122__auto__ = e26292;
var statearr_26293_26305 = state_26273;
(statearr_26293_26305[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26306 = state_26273;
state_26273 = G__26306;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22119__auto__ = function(state_26273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22119__auto____1.call(this,state_26273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22119__auto____0;
figwheel$client$file_reloading$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22119__auto____1;
return figwheel$client$file_reloading$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_26294 = f__22231__auto__.call(null);
(statearr_26294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26307,callback){
var map__26310 = p__26307;
var map__26310__$1 = ((((!((map__26310 == null)))?((((map__26310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26310):map__26310);
var file_msg = map__26310__$1;
var namespace = cljs.core.get.call(null,map__26310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26310,map__26310__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26310,map__26310__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26312){
var map__26315 = p__26312;
var map__26315__$1 = ((((!((map__26315 == null)))?((((map__26315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26315):map__26315);
var file_msg = map__26315__$1;
var namespace = cljs.core.get.call(null,map__26315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18310__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18310__auto__){
var or__18322__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
var or__18322__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18322__auto____$1)){
return or__18322__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18310__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26317,callback){
var map__26320 = p__26317;
var map__26320__$1 = ((((!((map__26320 == null)))?((((map__26320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26320):map__26320);
var file_msg = map__26320__$1;
var request_url = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__22230__auto___26408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___26408,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___26408,out){
return (function (state_26390){
var state_val_26391 = (state_26390[(1)]);
if((state_val_26391 === (1))){
var inst_26368 = cljs.core.nth.call(null,files,(0),null);
var inst_26369 = cljs.core.nthnext.call(null,files,(1));
var inst_26370 = files;
var state_26390__$1 = (function (){var statearr_26392 = state_26390;
(statearr_26392[(7)] = inst_26368);

(statearr_26392[(8)] = inst_26370);

(statearr_26392[(9)] = inst_26369);

return statearr_26392;
})();
var statearr_26393_26409 = state_26390__$1;
(statearr_26393_26409[(2)] = null);

(statearr_26393_26409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (2))){
var inst_26373 = (state_26390[(10)]);
var inst_26370 = (state_26390[(8)]);
var inst_26373__$1 = cljs.core.nth.call(null,inst_26370,(0),null);
var inst_26374 = cljs.core.nthnext.call(null,inst_26370,(1));
var inst_26375 = (inst_26373__$1 == null);
var inst_26376 = cljs.core.not.call(null,inst_26375);
var state_26390__$1 = (function (){var statearr_26394 = state_26390;
(statearr_26394[(10)] = inst_26373__$1);

(statearr_26394[(11)] = inst_26374);

return statearr_26394;
})();
if(inst_26376){
var statearr_26395_26410 = state_26390__$1;
(statearr_26395_26410[(1)] = (4));

} else {
var statearr_26396_26411 = state_26390__$1;
(statearr_26396_26411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (3))){
var inst_26388 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26390__$1,inst_26388);
} else {
if((state_val_26391 === (4))){
var inst_26373 = (state_26390[(10)]);
var inst_26378 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26373);
var state_26390__$1 = state_26390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26390__$1,(7),inst_26378);
} else {
if((state_val_26391 === (5))){
var inst_26384 = cljs.core.async.close_BANG_.call(null,out);
var state_26390__$1 = state_26390;
var statearr_26397_26412 = state_26390__$1;
(statearr_26397_26412[(2)] = inst_26384);

(statearr_26397_26412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (6))){
var inst_26386 = (state_26390[(2)]);
var state_26390__$1 = state_26390;
var statearr_26398_26413 = state_26390__$1;
(statearr_26398_26413[(2)] = inst_26386);

(statearr_26398_26413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26391 === (7))){
var inst_26374 = (state_26390[(11)]);
var inst_26380 = (state_26390[(2)]);
var inst_26381 = cljs.core.async.put_BANG_.call(null,out,inst_26380);
var inst_26370 = inst_26374;
var state_26390__$1 = (function (){var statearr_26399 = state_26390;
(statearr_26399[(8)] = inst_26370);

(statearr_26399[(12)] = inst_26381);

return statearr_26399;
})();
var statearr_26400_26414 = state_26390__$1;
(statearr_26400_26414[(2)] = null);

(statearr_26400_26414[(1)] = (2));


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
});})(c__22230__auto___26408,out))
;
return ((function (switch__22118__auto__,c__22230__auto___26408,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto____0 = (function (){
var statearr_26404 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26404[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto__);

(statearr_26404[(1)] = (1));

return statearr_26404;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto____1 = (function (state_26390){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_26390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e26405){if((e26405 instanceof Object)){
var ex__22122__auto__ = e26405;
var statearr_26406_26415 = state_26390;
(statearr_26406_26415[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26416 = state_26390;
state_26390 = G__26416;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto__ = function(state_26390){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto____1.call(this,state_26390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___26408,out))
})();
var state__22232__auto__ = (function (){var statearr_26407 = f__22231__auto__.call(null);
(statearr_26407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___26408);

return statearr_26407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___26408,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26417,opts){
var map__26421 = p__26417;
var map__26421__$1 = ((((!((map__26421 == null)))?((((map__26421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26421):map__26421);
var eval_body__$1 = cljs.core.get.call(null,map__26421__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18310__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18310__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18310__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26423){var e = e26423;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26424_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26424_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26429){
var vec__26430 = p__26429;
var k = cljs.core.nth.call(null,vec__26430,(0),null);
var v = cljs.core.nth.call(null,vec__26430,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26431){
var vec__26432 = p__26431;
var k = cljs.core.nth.call(null,vec__26432,(0),null);
var v = cljs.core.nth.call(null,vec__26432,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26436,p__26437){
var map__26684 = p__26436;
var map__26684__$1 = ((((!((map__26684 == null)))?((((map__26684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684):map__26684);
var opts = map__26684__$1;
var before_jsload = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26685 = p__26437;
var map__26685__$1 = ((((!((map__26685 == null)))?((((map__26685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26685):map__26685);
var msg = map__26685__$1;
var files = cljs.core.get.call(null,map__26685__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26685__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26685__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26838){
var state_val_26839 = (state_26838[(1)]);
if((state_val_26839 === (7))){
var inst_26701 = (state_26838[(7)]);
var inst_26702 = (state_26838[(8)]);
var inst_26700 = (state_26838[(9)]);
var inst_26699 = (state_26838[(10)]);
var inst_26707 = cljs.core._nth.call(null,inst_26700,inst_26702);
var inst_26708 = figwheel.client.file_reloading.eval_body.call(null,inst_26707,opts);
var inst_26709 = (inst_26702 + (1));
var tmp26840 = inst_26701;
var tmp26841 = inst_26700;
var tmp26842 = inst_26699;
var inst_26699__$1 = tmp26842;
var inst_26700__$1 = tmp26841;
var inst_26701__$1 = tmp26840;
var inst_26702__$1 = inst_26709;
var state_26838__$1 = (function (){var statearr_26843 = state_26838;
(statearr_26843[(11)] = inst_26708);

(statearr_26843[(7)] = inst_26701__$1);

(statearr_26843[(8)] = inst_26702__$1);

(statearr_26843[(9)] = inst_26700__$1);

(statearr_26843[(10)] = inst_26699__$1);

return statearr_26843;
})();
var statearr_26844_26930 = state_26838__$1;
(statearr_26844_26930[(2)] = null);

(statearr_26844_26930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (20))){
var inst_26742 = (state_26838[(12)]);
var inst_26750 = figwheel.client.file_reloading.sort_files.call(null,inst_26742);
var state_26838__$1 = state_26838;
var statearr_26845_26931 = state_26838__$1;
(statearr_26845_26931[(2)] = inst_26750);

(statearr_26845_26931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (27))){
var state_26838__$1 = state_26838;
var statearr_26846_26932 = state_26838__$1;
(statearr_26846_26932[(2)] = null);

(statearr_26846_26932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (1))){
var inst_26691 = (state_26838[(13)]);
var inst_26688 = before_jsload.call(null,files);
var inst_26689 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26690 = (function (){return ((function (inst_26691,inst_26688,inst_26689,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26433_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26433_SHARP_);
});
;})(inst_26691,inst_26688,inst_26689,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26691__$1 = cljs.core.filter.call(null,inst_26690,files);
var inst_26692 = cljs.core.not_empty.call(null,inst_26691__$1);
var state_26838__$1 = (function (){var statearr_26847 = state_26838;
(statearr_26847[(13)] = inst_26691__$1);

(statearr_26847[(14)] = inst_26689);

(statearr_26847[(15)] = inst_26688);

return statearr_26847;
})();
if(cljs.core.truth_(inst_26692)){
var statearr_26848_26933 = state_26838__$1;
(statearr_26848_26933[(1)] = (2));

} else {
var statearr_26849_26934 = state_26838__$1;
(statearr_26849_26934[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (24))){
var state_26838__$1 = state_26838;
var statearr_26850_26935 = state_26838__$1;
(statearr_26850_26935[(2)] = null);

(statearr_26850_26935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (39))){
var inst_26792 = (state_26838[(16)]);
var state_26838__$1 = state_26838;
var statearr_26851_26936 = state_26838__$1;
(statearr_26851_26936[(2)] = inst_26792);

(statearr_26851_26936[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (46))){
var inst_26833 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26852_26937 = state_26838__$1;
(statearr_26852_26937[(2)] = inst_26833);

(statearr_26852_26937[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (4))){
var inst_26736 = (state_26838[(2)]);
var inst_26737 = cljs.core.List.EMPTY;
var inst_26738 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26737);
var inst_26739 = (function (){return ((function (inst_26736,inst_26737,inst_26738,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26434_SHARP_){
var and__18310__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26434_SHARP_);
if(cljs.core.truth_(and__18310__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26434_SHARP_));
} else {
return and__18310__auto__;
}
});
;})(inst_26736,inst_26737,inst_26738,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26740 = cljs.core.filter.call(null,inst_26739,files);
var inst_26741 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26742 = cljs.core.concat.call(null,inst_26740,inst_26741);
var state_26838__$1 = (function (){var statearr_26853 = state_26838;
(statearr_26853[(17)] = inst_26738);

(statearr_26853[(12)] = inst_26742);

(statearr_26853[(18)] = inst_26736);

return statearr_26853;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26854_26938 = state_26838__$1;
(statearr_26854_26938[(1)] = (16));

} else {
var statearr_26855_26939 = state_26838__$1;
(statearr_26855_26939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (15))){
var inst_26726 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26856_26940 = state_26838__$1;
(statearr_26856_26940[(2)] = inst_26726);

(statearr_26856_26940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (21))){
var inst_26752 = (state_26838[(19)]);
var inst_26752__$1 = (state_26838[(2)]);
var inst_26753 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26752__$1);
var state_26838__$1 = (function (){var statearr_26857 = state_26838;
(statearr_26857[(19)] = inst_26752__$1);

return statearr_26857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26838__$1,(22),inst_26753);
} else {
if((state_val_26839 === (31))){
var inst_26836 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26838__$1,inst_26836);
} else {
if((state_val_26839 === (32))){
var inst_26792 = (state_26838[(16)]);
var inst_26797 = inst_26792.cljs$lang$protocol_mask$partition0$;
var inst_26798 = (inst_26797 & (64));
var inst_26799 = inst_26792.cljs$core$ISeq$;
var inst_26800 = (inst_26798) || (inst_26799);
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26800)){
var statearr_26858_26941 = state_26838__$1;
(statearr_26858_26941[(1)] = (35));

} else {
var statearr_26859_26942 = state_26838__$1;
(statearr_26859_26942[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (40))){
var inst_26813 = (state_26838[(20)]);
var inst_26812 = (state_26838[(2)]);
var inst_26813__$1 = cljs.core.get.call(null,inst_26812,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26814 = cljs.core.get.call(null,inst_26812,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26815 = cljs.core.not_empty.call(null,inst_26813__$1);
var state_26838__$1 = (function (){var statearr_26860 = state_26838;
(statearr_26860[(21)] = inst_26814);

(statearr_26860[(20)] = inst_26813__$1);

return statearr_26860;
})();
if(cljs.core.truth_(inst_26815)){
var statearr_26861_26943 = state_26838__$1;
(statearr_26861_26943[(1)] = (41));

} else {
var statearr_26862_26944 = state_26838__$1;
(statearr_26862_26944[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (33))){
var state_26838__$1 = state_26838;
var statearr_26863_26945 = state_26838__$1;
(statearr_26863_26945[(2)] = false);

(statearr_26863_26945[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (13))){
var inst_26712 = (state_26838[(22)]);
var inst_26716 = cljs.core.chunk_first.call(null,inst_26712);
var inst_26717 = cljs.core.chunk_rest.call(null,inst_26712);
var inst_26718 = cljs.core.count.call(null,inst_26716);
var inst_26699 = inst_26717;
var inst_26700 = inst_26716;
var inst_26701 = inst_26718;
var inst_26702 = (0);
var state_26838__$1 = (function (){var statearr_26864 = state_26838;
(statearr_26864[(7)] = inst_26701);

(statearr_26864[(8)] = inst_26702);

(statearr_26864[(9)] = inst_26700);

(statearr_26864[(10)] = inst_26699);

return statearr_26864;
})();
var statearr_26865_26946 = state_26838__$1;
(statearr_26865_26946[(2)] = null);

(statearr_26865_26946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (22))){
var inst_26760 = (state_26838[(23)]);
var inst_26752 = (state_26838[(19)]);
var inst_26755 = (state_26838[(24)]);
var inst_26756 = (state_26838[(25)]);
var inst_26755__$1 = (state_26838[(2)]);
var inst_26756__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26755__$1);
var inst_26757 = (function (){var all_files = inst_26752;
var res_SINGLEQUOTE_ = inst_26755__$1;
var res = inst_26756__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26760,inst_26752,inst_26755,inst_26756,inst_26755__$1,inst_26756__$1,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26435_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26435_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26760,inst_26752,inst_26755,inst_26756,inst_26755__$1,inst_26756__$1,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26758 = cljs.core.filter.call(null,inst_26757,inst_26755__$1);
var inst_26759 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26760__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26759);
var inst_26761 = cljs.core.not_empty.call(null,inst_26760__$1);
var state_26838__$1 = (function (){var statearr_26866 = state_26838;
(statearr_26866[(23)] = inst_26760__$1);

(statearr_26866[(24)] = inst_26755__$1);

(statearr_26866[(25)] = inst_26756__$1);

(statearr_26866[(26)] = inst_26758);

return statearr_26866;
})();
if(cljs.core.truth_(inst_26761)){
var statearr_26867_26947 = state_26838__$1;
(statearr_26867_26947[(1)] = (23));

} else {
var statearr_26868_26948 = state_26838__$1;
(statearr_26868_26948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (36))){
var state_26838__$1 = state_26838;
var statearr_26869_26949 = state_26838__$1;
(statearr_26869_26949[(2)] = false);

(statearr_26869_26949[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (41))){
var inst_26813 = (state_26838[(20)]);
var inst_26817 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26818 = cljs.core.map.call(null,inst_26817,inst_26813);
var inst_26819 = cljs.core.pr_str.call(null,inst_26818);
var inst_26820 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26819)].join('');
var inst_26821 = figwheel.client.utils.log.call(null,inst_26820);
var state_26838__$1 = state_26838;
var statearr_26870_26950 = state_26838__$1;
(statearr_26870_26950[(2)] = inst_26821);

(statearr_26870_26950[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (43))){
var inst_26814 = (state_26838[(21)]);
var inst_26824 = (state_26838[(2)]);
var inst_26825 = cljs.core.not_empty.call(null,inst_26814);
var state_26838__$1 = (function (){var statearr_26871 = state_26838;
(statearr_26871[(27)] = inst_26824);

return statearr_26871;
})();
if(cljs.core.truth_(inst_26825)){
var statearr_26872_26951 = state_26838__$1;
(statearr_26872_26951[(1)] = (44));

} else {
var statearr_26873_26952 = state_26838__$1;
(statearr_26873_26952[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (29))){
var inst_26760 = (state_26838[(23)]);
var inst_26752 = (state_26838[(19)]);
var inst_26792 = (state_26838[(16)]);
var inst_26755 = (state_26838[(24)]);
var inst_26756 = (state_26838[(25)]);
var inst_26758 = (state_26838[(26)]);
var inst_26788 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26791 = (function (){var all_files = inst_26752;
var res_SINGLEQUOTE_ = inst_26755;
var res = inst_26756;
var files_not_loaded = inst_26758;
var dependencies_that_loaded = inst_26760;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26792,inst_26755,inst_26756,inst_26758,inst_26788,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26790){
var map__26874 = p__26790;
var map__26874__$1 = ((((!((map__26874 == null)))?((((map__26874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26874):map__26874);
var namespace = cljs.core.get.call(null,map__26874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26792,inst_26755,inst_26756,inst_26758,inst_26788,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26792__$1 = cljs.core.group_by.call(null,inst_26791,inst_26758);
var inst_26794 = (inst_26792__$1 == null);
var inst_26795 = cljs.core.not.call(null,inst_26794);
var state_26838__$1 = (function (){var statearr_26876 = state_26838;
(statearr_26876[(16)] = inst_26792__$1);

(statearr_26876[(28)] = inst_26788);

return statearr_26876;
})();
if(inst_26795){
var statearr_26877_26953 = state_26838__$1;
(statearr_26877_26953[(1)] = (32));

} else {
var statearr_26878_26954 = state_26838__$1;
(statearr_26878_26954[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (44))){
var inst_26814 = (state_26838[(21)]);
var inst_26827 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26814);
var inst_26828 = cljs.core.pr_str.call(null,inst_26827);
var inst_26829 = [cljs.core.str("not required: "),cljs.core.str(inst_26828)].join('');
var inst_26830 = figwheel.client.utils.log.call(null,inst_26829);
var state_26838__$1 = state_26838;
var statearr_26879_26955 = state_26838__$1;
(statearr_26879_26955[(2)] = inst_26830);

(statearr_26879_26955[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (6))){
var inst_26733 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26880_26956 = state_26838__$1;
(statearr_26880_26956[(2)] = inst_26733);

(statearr_26880_26956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (28))){
var inst_26758 = (state_26838[(26)]);
var inst_26785 = (state_26838[(2)]);
var inst_26786 = cljs.core.not_empty.call(null,inst_26758);
var state_26838__$1 = (function (){var statearr_26881 = state_26838;
(statearr_26881[(29)] = inst_26785);

return statearr_26881;
})();
if(cljs.core.truth_(inst_26786)){
var statearr_26882_26957 = state_26838__$1;
(statearr_26882_26957[(1)] = (29));

} else {
var statearr_26883_26958 = state_26838__$1;
(statearr_26883_26958[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (25))){
var inst_26756 = (state_26838[(25)]);
var inst_26772 = (state_26838[(2)]);
var inst_26773 = cljs.core.not_empty.call(null,inst_26756);
var state_26838__$1 = (function (){var statearr_26884 = state_26838;
(statearr_26884[(30)] = inst_26772);

return statearr_26884;
})();
if(cljs.core.truth_(inst_26773)){
var statearr_26885_26959 = state_26838__$1;
(statearr_26885_26959[(1)] = (26));

} else {
var statearr_26886_26960 = state_26838__$1;
(statearr_26886_26960[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (34))){
var inst_26807 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26807)){
var statearr_26887_26961 = state_26838__$1;
(statearr_26887_26961[(1)] = (38));

} else {
var statearr_26888_26962 = state_26838__$1;
(statearr_26888_26962[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (17))){
var state_26838__$1 = state_26838;
var statearr_26889_26963 = state_26838__$1;
(statearr_26889_26963[(2)] = recompile_dependents);

(statearr_26889_26963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (3))){
var state_26838__$1 = state_26838;
var statearr_26890_26964 = state_26838__$1;
(statearr_26890_26964[(2)] = null);

(statearr_26890_26964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (12))){
var inst_26729 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26891_26965 = state_26838__$1;
(statearr_26891_26965[(2)] = inst_26729);

(statearr_26891_26965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (2))){
var inst_26691 = (state_26838[(13)]);
var inst_26698 = cljs.core.seq.call(null,inst_26691);
var inst_26699 = inst_26698;
var inst_26700 = null;
var inst_26701 = (0);
var inst_26702 = (0);
var state_26838__$1 = (function (){var statearr_26892 = state_26838;
(statearr_26892[(7)] = inst_26701);

(statearr_26892[(8)] = inst_26702);

(statearr_26892[(9)] = inst_26700);

(statearr_26892[(10)] = inst_26699);

return statearr_26892;
})();
var statearr_26893_26966 = state_26838__$1;
(statearr_26893_26966[(2)] = null);

(statearr_26893_26966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (23))){
var inst_26760 = (state_26838[(23)]);
var inst_26752 = (state_26838[(19)]);
var inst_26755 = (state_26838[(24)]);
var inst_26756 = (state_26838[(25)]);
var inst_26758 = (state_26838[(26)]);
var inst_26763 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26765 = (function (){var all_files = inst_26752;
var res_SINGLEQUOTE_ = inst_26755;
var res = inst_26756;
var files_not_loaded = inst_26758;
var dependencies_that_loaded = inst_26760;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26755,inst_26756,inst_26758,inst_26763,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26764){
var map__26894 = p__26764;
var map__26894__$1 = ((((!((map__26894 == null)))?((((map__26894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26894):map__26894);
var request_url = cljs.core.get.call(null,map__26894__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26755,inst_26756,inst_26758,inst_26763,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26766 = cljs.core.reverse.call(null,inst_26760);
var inst_26767 = cljs.core.map.call(null,inst_26765,inst_26766);
var inst_26768 = cljs.core.pr_str.call(null,inst_26767);
var inst_26769 = figwheel.client.utils.log.call(null,inst_26768);
var state_26838__$1 = (function (){var statearr_26896 = state_26838;
(statearr_26896[(31)] = inst_26763);

return statearr_26896;
})();
var statearr_26897_26967 = state_26838__$1;
(statearr_26897_26967[(2)] = inst_26769);

(statearr_26897_26967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (35))){
var state_26838__$1 = state_26838;
var statearr_26898_26968 = state_26838__$1;
(statearr_26898_26968[(2)] = true);

(statearr_26898_26968[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (19))){
var inst_26742 = (state_26838[(12)]);
var inst_26748 = figwheel.client.file_reloading.expand_files.call(null,inst_26742);
var state_26838__$1 = state_26838;
var statearr_26899_26969 = state_26838__$1;
(statearr_26899_26969[(2)] = inst_26748);

(statearr_26899_26969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (11))){
var state_26838__$1 = state_26838;
var statearr_26900_26970 = state_26838__$1;
(statearr_26900_26970[(2)] = null);

(statearr_26900_26970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (9))){
var inst_26731 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26901_26971 = state_26838__$1;
(statearr_26901_26971[(2)] = inst_26731);

(statearr_26901_26971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (5))){
var inst_26701 = (state_26838[(7)]);
var inst_26702 = (state_26838[(8)]);
var inst_26704 = (inst_26702 < inst_26701);
var inst_26705 = inst_26704;
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26705)){
var statearr_26902_26972 = state_26838__$1;
(statearr_26902_26972[(1)] = (7));

} else {
var statearr_26903_26973 = state_26838__$1;
(statearr_26903_26973[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (14))){
var inst_26712 = (state_26838[(22)]);
var inst_26721 = cljs.core.first.call(null,inst_26712);
var inst_26722 = figwheel.client.file_reloading.eval_body.call(null,inst_26721,opts);
var inst_26723 = cljs.core.next.call(null,inst_26712);
var inst_26699 = inst_26723;
var inst_26700 = null;
var inst_26701 = (0);
var inst_26702 = (0);
var state_26838__$1 = (function (){var statearr_26904 = state_26838;
(statearr_26904[(32)] = inst_26722);

(statearr_26904[(7)] = inst_26701);

(statearr_26904[(8)] = inst_26702);

(statearr_26904[(9)] = inst_26700);

(statearr_26904[(10)] = inst_26699);

return statearr_26904;
})();
var statearr_26905_26974 = state_26838__$1;
(statearr_26905_26974[(2)] = null);

(statearr_26905_26974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (45))){
var state_26838__$1 = state_26838;
var statearr_26906_26975 = state_26838__$1;
(statearr_26906_26975[(2)] = null);

(statearr_26906_26975[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (26))){
var inst_26760 = (state_26838[(23)]);
var inst_26752 = (state_26838[(19)]);
var inst_26755 = (state_26838[(24)]);
var inst_26756 = (state_26838[(25)]);
var inst_26758 = (state_26838[(26)]);
var inst_26775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26777 = (function (){var all_files = inst_26752;
var res_SINGLEQUOTE_ = inst_26755;
var res = inst_26756;
var files_not_loaded = inst_26758;
var dependencies_that_loaded = inst_26760;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26755,inst_26756,inst_26758,inst_26775,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26776){
var map__26907 = p__26776;
var map__26907__$1 = ((((!((map__26907 == null)))?((((map__26907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26907):map__26907);
var namespace = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26755,inst_26756,inst_26758,inst_26775,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26778 = cljs.core.map.call(null,inst_26777,inst_26756);
var inst_26779 = cljs.core.pr_str.call(null,inst_26778);
var inst_26780 = figwheel.client.utils.log.call(null,inst_26779);
var inst_26781 = (function (){var all_files = inst_26752;
var res_SINGLEQUOTE_ = inst_26755;
var res = inst_26756;
var files_not_loaded = inst_26758;
var dependencies_that_loaded = inst_26760;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26755,inst_26756,inst_26758,inst_26775,inst_26777,inst_26778,inst_26779,inst_26780,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26760,inst_26752,inst_26755,inst_26756,inst_26758,inst_26775,inst_26777,inst_26778,inst_26779,inst_26780,state_val_26839,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26782 = setTimeout(inst_26781,(10));
var state_26838__$1 = (function (){var statearr_26909 = state_26838;
(statearr_26909[(33)] = inst_26780);

(statearr_26909[(34)] = inst_26775);

return statearr_26909;
})();
var statearr_26910_26976 = state_26838__$1;
(statearr_26910_26976[(2)] = inst_26782);

(statearr_26910_26976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (16))){
var state_26838__$1 = state_26838;
var statearr_26911_26977 = state_26838__$1;
(statearr_26911_26977[(2)] = reload_dependents);

(statearr_26911_26977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (38))){
var inst_26792 = (state_26838[(16)]);
var inst_26809 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26792);
var state_26838__$1 = state_26838;
var statearr_26912_26978 = state_26838__$1;
(statearr_26912_26978[(2)] = inst_26809);

(statearr_26912_26978[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (30))){
var state_26838__$1 = state_26838;
var statearr_26913_26979 = state_26838__$1;
(statearr_26913_26979[(2)] = null);

(statearr_26913_26979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (10))){
var inst_26712 = (state_26838[(22)]);
var inst_26714 = cljs.core.chunked_seq_QMARK_.call(null,inst_26712);
var state_26838__$1 = state_26838;
if(inst_26714){
var statearr_26914_26980 = state_26838__$1;
(statearr_26914_26980[(1)] = (13));

} else {
var statearr_26915_26981 = state_26838__$1;
(statearr_26915_26981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (18))){
var inst_26746 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26746)){
var statearr_26916_26982 = state_26838__$1;
(statearr_26916_26982[(1)] = (19));

} else {
var statearr_26917_26983 = state_26838__$1;
(statearr_26917_26983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (42))){
var state_26838__$1 = state_26838;
var statearr_26918_26984 = state_26838__$1;
(statearr_26918_26984[(2)] = null);

(statearr_26918_26984[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (37))){
var inst_26804 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26919_26985 = state_26838__$1;
(statearr_26919_26985[(2)] = inst_26804);

(statearr_26919_26985[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (8))){
var inst_26712 = (state_26838[(22)]);
var inst_26699 = (state_26838[(10)]);
var inst_26712__$1 = cljs.core.seq.call(null,inst_26699);
var state_26838__$1 = (function (){var statearr_26920 = state_26838;
(statearr_26920[(22)] = inst_26712__$1);

return statearr_26920;
})();
if(inst_26712__$1){
var statearr_26921_26986 = state_26838__$1;
(statearr_26921_26986[(1)] = (10));

} else {
var statearr_26922_26987 = state_26838__$1;
(statearr_26922_26987[(1)] = (11));

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
});})(c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22118__auto__,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto____0 = (function (){
var statearr_26926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26926[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto__);

(statearr_26926[(1)] = (1));

return statearr_26926;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto____1 = (function (state_26838){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_26838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e26927){if((e26927 instanceof Object)){
var ex__22122__auto__ = e26927;
var statearr_26928_26988 = state_26838;
(statearr_26928_26988[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26989 = state_26838;
state_26838 = G__26989;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22232__auto__ = (function (){var statearr_26929 = f__22231__auto__.call(null);
(statearr_26929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_26929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__,map__26684,map__26684__$1,opts,before_jsload,on_jsload,reload_dependents,map__26685,map__26685__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22230__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26992,link){
var map__26995 = p__26992;
var map__26995__$1 = ((((!((map__26995 == null)))?((((map__26995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26995):map__26995);
var file = cljs.core.get.call(null,map__26995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26995,map__26995__$1,file){
return (function (p1__26990_SHARP_,p2__26991_SHARP_){
if(cljs.core._EQ_.call(null,p1__26990_SHARP_,p2__26991_SHARP_)){
return p1__26990_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26995,map__26995__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27001){
var map__27002 = p__27001;
var map__27002__$1 = ((((!((map__27002 == null)))?((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var match_length = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26997_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26997_SHARP_);
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
var args27004 = [];
var len__19380__auto___27007 = arguments.length;
var i__19381__auto___27008 = (0);
while(true){
if((i__19381__auto___27008 < len__19380__auto___27007)){
args27004.push((arguments[i__19381__auto___27008]));

var G__27009 = (i__19381__auto___27008 + (1));
i__19381__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var G__27006 = args27004.length;
switch (G__27006) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27004.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27011_SHARP_,p2__27012_SHARP_){
return cljs.core.assoc.call(null,p1__27011_SHARP_,cljs.core.get.call(null,p2__27012_SHARP_,key),p2__27012_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27013){
var map__27016 = p__27013;
var map__27016__$1 = ((((!((map__27016 == null)))?((((map__27016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27016):map__27016);
var f_data = map__27016__$1;
var file = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27018,files_msg){
var map__27025 = p__27018;
var map__27025__$1 = ((((!((map__27025 == null)))?((((map__27025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27025):map__27025);
var opts = map__27025__$1;
var on_cssload = cljs.core.get.call(null,map__27025__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27027_27031 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27028_27032 = null;
var count__27029_27033 = (0);
var i__27030_27034 = (0);
while(true){
if((i__27030_27034 < count__27029_27033)){
var f_27035 = cljs.core._nth.call(null,chunk__27028_27032,i__27030_27034);
figwheel.client.file_reloading.reload_css_file.call(null,f_27035);

var G__27036 = seq__27027_27031;
var G__27037 = chunk__27028_27032;
var G__27038 = count__27029_27033;
var G__27039 = (i__27030_27034 + (1));
seq__27027_27031 = G__27036;
chunk__27028_27032 = G__27037;
count__27029_27033 = G__27038;
i__27030_27034 = G__27039;
continue;
} else {
var temp__4657__auto___27040 = cljs.core.seq.call(null,seq__27027_27031);
if(temp__4657__auto___27040){
var seq__27027_27041__$1 = temp__4657__auto___27040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27027_27041__$1)){
var c__19125__auto___27042 = cljs.core.chunk_first.call(null,seq__27027_27041__$1);
var G__27043 = cljs.core.chunk_rest.call(null,seq__27027_27041__$1);
var G__27044 = c__19125__auto___27042;
var G__27045 = cljs.core.count.call(null,c__19125__auto___27042);
var G__27046 = (0);
seq__27027_27031 = G__27043;
chunk__27028_27032 = G__27044;
count__27029_27033 = G__27045;
i__27030_27034 = G__27046;
continue;
} else {
var f_27047 = cljs.core.first.call(null,seq__27027_27041__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27047);

var G__27048 = cljs.core.next.call(null,seq__27027_27041__$1);
var G__27049 = null;
var G__27050 = (0);
var G__27051 = (0);
seq__27027_27031 = G__27048;
chunk__27028_27032 = G__27049;
count__27029_27033 = G__27050;
i__27030_27034 = G__27051;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27025,map__27025__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27025,map__27025__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map