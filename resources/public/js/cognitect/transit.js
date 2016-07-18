// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25029_25033 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25030_25034 = null;
var count__25031_25035 = (0);
var i__25032_25036 = (0);
while(true){
if((i__25032_25036 < count__25031_25035)){
var k_25037 = cljs.core._nth.call(null,chunk__25030_25034,i__25032_25036);
var v_25038 = (b[k_25037]);
(a[k_25037] = v_25038);

var G__25039 = seq__25029_25033;
var G__25040 = chunk__25030_25034;
var G__25041 = count__25031_25035;
var G__25042 = (i__25032_25036 + (1));
seq__25029_25033 = G__25039;
chunk__25030_25034 = G__25040;
count__25031_25035 = G__25041;
i__25032_25036 = G__25042;
continue;
} else {
var temp__4657__auto___25043 = cljs.core.seq.call(null,seq__25029_25033);
if(temp__4657__auto___25043){
var seq__25029_25044__$1 = temp__4657__auto___25043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25029_25044__$1)){
var c__19125__auto___25045 = cljs.core.chunk_first.call(null,seq__25029_25044__$1);
var G__25046 = cljs.core.chunk_rest.call(null,seq__25029_25044__$1);
var G__25047 = c__19125__auto___25045;
var G__25048 = cljs.core.count.call(null,c__19125__auto___25045);
var G__25049 = (0);
seq__25029_25033 = G__25046;
chunk__25030_25034 = G__25047;
count__25031_25035 = G__25048;
i__25032_25036 = G__25049;
continue;
} else {
var k_25050 = cljs.core.first.call(null,seq__25029_25044__$1);
var v_25051 = (b[k_25050]);
(a[k_25050] = v_25051);

var G__25052 = cljs.core.next.call(null,seq__25029_25044__$1);
var G__25053 = null;
var G__25054 = (0);
var G__25055 = (0);
seq__25029_25033 = G__25052;
chunk__25030_25034 = G__25053;
count__25031_25035 = G__25054;
i__25032_25036 = G__25055;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args25056 = [];
var len__19380__auto___25059 = arguments.length;
var i__19381__auto___25060 = (0);
while(true){
if((i__19381__auto___25060 < len__19380__auto___25059)){
args25056.push((arguments[i__19381__auto___25060]));

var G__25061 = (i__19381__auto___25060 + (1));
i__19381__auto___25060 = G__25061;
continue;
} else {
}
break;
}

var G__25058 = args25056.length;
switch (G__25058) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25056.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25063 = (i + (2));
var G__25064 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25063;
ret = G__25064;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25065_25069 = cljs.core.seq.call(null,v);
var chunk__25066_25070 = null;
var count__25067_25071 = (0);
var i__25068_25072 = (0);
while(true){
if((i__25068_25072 < count__25067_25071)){
var x_25073 = cljs.core._nth.call(null,chunk__25066_25070,i__25068_25072);
ret.push(x_25073);

var G__25074 = seq__25065_25069;
var G__25075 = chunk__25066_25070;
var G__25076 = count__25067_25071;
var G__25077 = (i__25068_25072 + (1));
seq__25065_25069 = G__25074;
chunk__25066_25070 = G__25075;
count__25067_25071 = G__25076;
i__25068_25072 = G__25077;
continue;
} else {
var temp__4657__auto___25078 = cljs.core.seq.call(null,seq__25065_25069);
if(temp__4657__auto___25078){
var seq__25065_25079__$1 = temp__4657__auto___25078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25065_25079__$1)){
var c__19125__auto___25080 = cljs.core.chunk_first.call(null,seq__25065_25079__$1);
var G__25081 = cljs.core.chunk_rest.call(null,seq__25065_25079__$1);
var G__25082 = c__19125__auto___25080;
var G__25083 = cljs.core.count.call(null,c__19125__auto___25080);
var G__25084 = (0);
seq__25065_25069 = G__25081;
chunk__25066_25070 = G__25082;
count__25067_25071 = G__25083;
i__25068_25072 = G__25084;
continue;
} else {
var x_25085 = cljs.core.first.call(null,seq__25065_25079__$1);
ret.push(x_25085);

var G__25086 = cljs.core.next.call(null,seq__25065_25079__$1);
var G__25087 = null;
var G__25088 = (0);
var G__25089 = (0);
seq__25065_25069 = G__25086;
chunk__25066_25070 = G__25087;
count__25067_25071 = G__25088;
i__25068_25072 = G__25089;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25090_25094 = cljs.core.seq.call(null,v);
var chunk__25091_25095 = null;
var count__25092_25096 = (0);
var i__25093_25097 = (0);
while(true){
if((i__25093_25097 < count__25092_25096)){
var x_25098 = cljs.core._nth.call(null,chunk__25091_25095,i__25093_25097);
ret.push(x_25098);

var G__25099 = seq__25090_25094;
var G__25100 = chunk__25091_25095;
var G__25101 = count__25092_25096;
var G__25102 = (i__25093_25097 + (1));
seq__25090_25094 = G__25099;
chunk__25091_25095 = G__25100;
count__25092_25096 = G__25101;
i__25093_25097 = G__25102;
continue;
} else {
var temp__4657__auto___25103 = cljs.core.seq.call(null,seq__25090_25094);
if(temp__4657__auto___25103){
var seq__25090_25104__$1 = temp__4657__auto___25103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25090_25104__$1)){
var c__19125__auto___25105 = cljs.core.chunk_first.call(null,seq__25090_25104__$1);
var G__25106 = cljs.core.chunk_rest.call(null,seq__25090_25104__$1);
var G__25107 = c__19125__auto___25105;
var G__25108 = cljs.core.count.call(null,c__19125__auto___25105);
var G__25109 = (0);
seq__25090_25094 = G__25106;
chunk__25091_25095 = G__25107;
count__25092_25096 = G__25108;
i__25093_25097 = G__25109;
continue;
} else {
var x_25110 = cljs.core.first.call(null,seq__25090_25104__$1);
ret.push(x_25110);

var G__25111 = cljs.core.next.call(null,seq__25090_25104__$1);
var G__25112 = null;
var G__25113 = (0);
var G__25114 = (0);
seq__25090_25094 = G__25111;
chunk__25091_25095 = G__25112;
count__25092_25096 = G__25113;
i__25093_25097 = G__25114;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25115_25119 = cljs.core.seq.call(null,v);
var chunk__25116_25120 = null;
var count__25117_25121 = (0);
var i__25118_25122 = (0);
while(true){
if((i__25118_25122 < count__25117_25121)){
var x_25123 = cljs.core._nth.call(null,chunk__25116_25120,i__25118_25122);
ret.push(x_25123);

var G__25124 = seq__25115_25119;
var G__25125 = chunk__25116_25120;
var G__25126 = count__25117_25121;
var G__25127 = (i__25118_25122 + (1));
seq__25115_25119 = G__25124;
chunk__25116_25120 = G__25125;
count__25117_25121 = G__25126;
i__25118_25122 = G__25127;
continue;
} else {
var temp__4657__auto___25128 = cljs.core.seq.call(null,seq__25115_25119);
if(temp__4657__auto___25128){
var seq__25115_25129__$1 = temp__4657__auto___25128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25115_25129__$1)){
var c__19125__auto___25130 = cljs.core.chunk_first.call(null,seq__25115_25129__$1);
var G__25131 = cljs.core.chunk_rest.call(null,seq__25115_25129__$1);
var G__25132 = c__19125__auto___25130;
var G__25133 = cljs.core.count.call(null,c__19125__auto___25130);
var G__25134 = (0);
seq__25115_25119 = G__25131;
chunk__25116_25120 = G__25132;
count__25117_25121 = G__25133;
i__25118_25122 = G__25134;
continue;
} else {
var x_25135 = cljs.core.first.call(null,seq__25115_25129__$1);
ret.push(x_25135);

var G__25136 = cljs.core.next.call(null,seq__25115_25129__$1);
var G__25137 = null;
var G__25138 = (0);
var G__25139 = (0);
seq__25115_25119 = G__25136;
chunk__25116_25120 = G__25137;
count__25117_25121 = G__25138;
i__25118_25122 = G__25139;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args25140 = [];
var len__19380__auto___25151 = arguments.length;
var i__19381__auto___25152 = (0);
while(true){
if((i__19381__auto___25152 < len__19380__auto___25151)){
args25140.push((arguments[i__19381__auto___25152]));

var G__25153 = (i__19381__auto___25152 + (1));
i__19381__auto___25152 = G__25153;
continue;
} else {
}
break;
}

var G__25142 = args25140.length;
switch (G__25142) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25140.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__25143 = obj;
G__25143.push(kfn.call(null,k),vfn.call(null,v));

return G__25143;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25144 = cljs.core.clone.call(null,handlers);
x25144.forEach = ((function (x25144,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25145 = cljs.core.seq.call(null,coll);
var chunk__25146 = null;
var count__25147 = (0);
var i__25148 = (0);
while(true){
if((i__25148 < count__25147)){
var vec__25149 = cljs.core._nth.call(null,chunk__25146,i__25148);
var k = cljs.core.nth.call(null,vec__25149,(0),null);
var v = cljs.core.nth.call(null,vec__25149,(1),null);
f.call(null,v,k);

var G__25155 = seq__25145;
var G__25156 = chunk__25146;
var G__25157 = count__25147;
var G__25158 = (i__25148 + (1));
seq__25145 = G__25155;
chunk__25146 = G__25156;
count__25147 = G__25157;
i__25148 = G__25158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25145);
if(temp__4657__auto__){
var seq__25145__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25145__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__25145__$1);
var G__25159 = cljs.core.chunk_rest.call(null,seq__25145__$1);
var G__25160 = c__19125__auto__;
var G__25161 = cljs.core.count.call(null,c__19125__auto__);
var G__25162 = (0);
seq__25145 = G__25159;
chunk__25146 = G__25160;
count__25147 = G__25161;
i__25148 = G__25162;
continue;
} else {
var vec__25150 = cljs.core.first.call(null,seq__25145__$1);
var k = cljs.core.nth.call(null,vec__25150,(0),null);
var v = cljs.core.nth.call(null,vec__25150,(1),null);
f.call(null,v,k);

var G__25163 = cljs.core.next.call(null,seq__25145__$1);
var G__25164 = null;
var G__25165 = (0);
var G__25166 = (0);
seq__25145 = G__25163;
chunk__25146 = G__25164;
count__25147 = G__25165;
i__25148 = G__25166;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25144,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25144;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args25167 = [];
var len__19380__auto___25173 = arguments.length;
var i__19381__auto___25174 = (0);
while(true){
if((i__19381__auto___25174 < len__19380__auto___25173)){
args25167.push((arguments[i__19381__auto___25174]));

var G__25175 = (i__19381__auto___25174 + (1));
i__19381__auto___25174 = G__25175;
continue;
} else {
}
break;
}

var G__25169 = args25167.length;
switch (G__25169) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25167.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit25170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit25170 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25171){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25171 = meta25171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit25170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25172,meta25171__$1){
var self__ = this;
var _25172__$1 = this;
return (new cognitect.transit.t_cognitect$transit25170(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25171__$1));
});

cognitect.transit.t_cognitect$transit25170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25172){
var self__ = this;
var _25172__$1 = this;
return self__.meta25171;
});

cognitect.transit.t_cognitect$transit25170.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25170.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25170.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25170.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta25171","meta25171",170629271,null)], null);
});

cognitect.transit.t_cognitect$transit25170.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit25170.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit25170";

cognitect.transit.t_cognitect$transit25170.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cognitect.transit/t_cognitect$transit25170");
});

cognitect.transit.__GT_t_cognitect$transit25170 = (function cognitect$transit$__GT_t_cognitect$transit25170(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25171){
return (new cognitect.transit.t_cognitect$transit25170(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25171));
});

}

return (new cognitect.transit.t_cognitect$transit25170(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18322__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map