// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27068_27082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27069_27083 = null;
var count__27070_27084 = (0);
var i__27071_27085 = (0);
while(true){
if((i__27071_27085 < count__27070_27084)){
var f_27086 = cljs.core._nth.call(null,chunk__27069_27083,i__27071_27085);
cljs.core.println.call(null,"  ",f_27086);

var G__27087 = seq__27068_27082;
var G__27088 = chunk__27069_27083;
var G__27089 = count__27070_27084;
var G__27090 = (i__27071_27085 + (1));
seq__27068_27082 = G__27087;
chunk__27069_27083 = G__27088;
count__27070_27084 = G__27089;
i__27071_27085 = G__27090;
continue;
} else {
var temp__4657__auto___27091 = cljs.core.seq.call(null,seq__27068_27082);
if(temp__4657__auto___27091){
var seq__27068_27092__$1 = temp__4657__auto___27091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27068_27092__$1)){
var c__19125__auto___27093 = cljs.core.chunk_first.call(null,seq__27068_27092__$1);
var G__27094 = cljs.core.chunk_rest.call(null,seq__27068_27092__$1);
var G__27095 = c__19125__auto___27093;
var G__27096 = cljs.core.count.call(null,c__19125__auto___27093);
var G__27097 = (0);
seq__27068_27082 = G__27094;
chunk__27069_27083 = G__27095;
count__27070_27084 = G__27096;
i__27071_27085 = G__27097;
continue;
} else {
var f_27098 = cljs.core.first.call(null,seq__27068_27092__$1);
cljs.core.println.call(null,"  ",f_27098);

var G__27099 = cljs.core.next.call(null,seq__27068_27092__$1);
var G__27100 = null;
var G__27101 = (0);
var G__27102 = (0);
seq__27068_27082 = G__27099;
chunk__27069_27083 = G__27100;
count__27070_27084 = G__27101;
i__27071_27085 = G__27102;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27103 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18322__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27103);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27103)))?cljs.core.second.call(null,arglists_27103):arglists_27103));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__27072 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27073 = null;
var count__27074 = (0);
var i__27075 = (0);
while(true){
if((i__27075 < count__27074)){
var vec__27076 = cljs.core._nth.call(null,chunk__27073,i__27075);
var name = cljs.core.nth.call(null,vec__27076,(0),null);
var map__27077 = cljs.core.nth.call(null,vec__27076,(1),null);
var map__27077__$1 = ((((!((map__27077 == null)))?((((map__27077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27077):map__27077);
var doc = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27104 = seq__27072;
var G__27105 = chunk__27073;
var G__27106 = count__27074;
var G__27107 = (i__27075 + (1));
seq__27072 = G__27104;
chunk__27073 = G__27105;
count__27074 = G__27106;
i__27075 = G__27107;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27072);
if(temp__4657__auto__){
var seq__27072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27072__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__27072__$1);
var G__27108 = cljs.core.chunk_rest.call(null,seq__27072__$1);
var G__27109 = c__19125__auto__;
var G__27110 = cljs.core.count.call(null,c__19125__auto__);
var G__27111 = (0);
seq__27072 = G__27108;
chunk__27073 = G__27109;
count__27074 = G__27110;
i__27075 = G__27111;
continue;
} else {
var vec__27079 = cljs.core.first.call(null,seq__27072__$1);
var name = cljs.core.nth.call(null,vec__27079,(0),null);
var map__27080 = cljs.core.nth.call(null,vec__27079,(1),null);
var map__27080__$1 = ((((!((map__27080 == null)))?((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27080):map__27080);
var doc = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27112 = cljs.core.next.call(null,seq__27072__$1);
var G__27113 = null;
var G__27114 = (0);
var G__27115 = (0);
seq__27072 = G__27112;
chunk__27073 = G__27113;
count__27074 = G__27114;
i__27075 = G__27115;
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
}
});

//# sourceMappingURL=repl.js.map