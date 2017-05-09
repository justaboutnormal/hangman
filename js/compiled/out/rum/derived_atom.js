// Compiled by ClojureScript 1.9.521 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args21918 = [];
var len__20256__auto___21938 = arguments.length;
var i__20257__auto___21939 = (0);
while(true){
if((i__20257__auto___21939 < len__20256__auto___21938)){
args21918.push((arguments[i__20257__auto___21939]));

var G__21940 = (i__20257__auto___21939 + (1));
i__20257__auto___21939 = G__21940;
continue;
} else {
}
break;
}

var G__21920 = args21918.length;
switch (G__21920) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21918.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21921 = opts;
var map__21921__$1 = ((((!((map__21921 == null)))?((((map__21921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21921):map__21921);
var ref = cljs.core.get.call(null,map__21921__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21921__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21923 = cljs.core.count.call(null,refs);
switch (G__21923) {
case (1):
var vec__21924 = refs;
var a = cljs.core.nth.call(null,vec__21924,(0),null);
return ((function (vec__21924,a,G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21924,a,G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21927 = refs;
var a = cljs.core.nth.call(null,vec__21927,(0),null);
var b = cljs.core.nth.call(null,vec__21927,(1),null);
return ((function (vec__21927,a,b,G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21927,a,b,G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21930 = refs;
var a = cljs.core.nth.call(null,vec__21930,(0),null);
var b = cljs.core.nth.call(null,vec__21930,(1),null);
var c = cljs.core.nth.call(null,vec__21930,(2),null);
return ((function (vec__21930,a,b,c,G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21930,a,b,c,G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21923,map__21921,map__21921__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21933 = ref;
cljs.core.reset_BANG_.call(null,G__21933,recalc.call(null));

return G__21933;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21921,map__21921__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21921,map__21921__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21921,map__21921__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21921,map__21921__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21934_21943 = cljs.core.seq.call(null,refs);
var chunk__21935_21944 = null;
var count__21936_21945 = (0);
var i__21937_21946 = (0);
while(true){
if((i__21937_21946 < count__21936_21945)){
var ref_21947__$1 = cljs.core._nth.call(null,chunk__21935_21944,i__21937_21946);
cljs.core.add_watch.call(null,ref_21947__$1,key,watch);

var G__21948 = seq__21934_21943;
var G__21949 = chunk__21935_21944;
var G__21950 = count__21936_21945;
var G__21951 = (i__21937_21946 + (1));
seq__21934_21943 = G__21948;
chunk__21935_21944 = G__21949;
count__21936_21945 = G__21950;
i__21937_21946 = G__21951;
continue;
} else {
var temp__4657__auto___21952 = cljs.core.seq.call(null,seq__21934_21943);
if(temp__4657__auto___21952){
var seq__21934_21953__$1 = temp__4657__auto___21952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21934_21953__$1)){
var c__19962__auto___21954 = cljs.core.chunk_first.call(null,seq__21934_21953__$1);
var G__21955 = cljs.core.chunk_rest.call(null,seq__21934_21953__$1);
var G__21956 = c__19962__auto___21954;
var G__21957 = cljs.core.count.call(null,c__19962__auto___21954);
var G__21958 = (0);
seq__21934_21943 = G__21955;
chunk__21935_21944 = G__21956;
count__21936_21945 = G__21957;
i__21937_21946 = G__21958;
continue;
} else {
var ref_21959__$1 = cljs.core.first.call(null,seq__21934_21953__$1);
cljs.core.add_watch.call(null,ref_21959__$1,key,watch);

var G__21960 = cljs.core.next.call(null,seq__21934_21953__$1);
var G__21961 = null;
var G__21962 = (0);
var G__21963 = (0);
seq__21934_21943 = G__21960;
chunk__21935_21944 = G__21961;
count__21936_21945 = G__21962;
i__21937_21946 = G__21963;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1494348448633