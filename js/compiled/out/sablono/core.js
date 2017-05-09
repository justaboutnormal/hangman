// Compiled by ClojureScript 1.9.521 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22517__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22514 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__22515 = cljs.core.seq.call(null,vec__22514);
var first__22516 = cljs.core.first.call(null,seq__22515);
var seq__22515__$1 = cljs.core.next.call(null,seq__22515);
var tag = first__22516;
var body = seq__22515__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22518__i = 0, G__22518__a = new Array(arguments.length -  0);
while (G__22518__i < G__22518__a.length) {G__22518__a[G__22518__i] = arguments[G__22518__i + 0]; ++G__22518__i;}
  args = new cljs.core.IndexedSeq(G__22518__a,0);
} 
return G__22517__delegate.call(this,args);};
G__22517.cljs$lang$maxFixedArity = 0;
G__22517.cljs$lang$applyTo = (function (arglist__22519){
var args = cljs.core.seq(arglist__22519);
return G__22517__delegate(args);
});
G__22517.cljs$core$IFn$_invoke$arity$variadic = G__22517__delegate;
return G__22517;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19931__auto__ = (function sablono$core$update_arglists_$_iter__22524(s__22525){
return (new cljs.core.LazySeq(null,(function (){
var s__22525__$1 = s__22525;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22525__$1);
if(temp__4657__auto__){
var s__22525__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22525__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__22525__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__22527 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__22526 = (0);
while(true){
if((i__22526 < size__19930__auto__)){
var args = cljs.core._nth.call(null,c__19929__auto__,i__22526);
cljs.core.chunk_append.call(null,b__22527,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22528 = (i__22526 + (1));
i__22526 = G__22528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22527),sablono$core$update_arglists_$_iter__22524.call(null,cljs.core.chunk_rest.call(null,s__22525__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22527),null);
}
} else {
var args = cljs.core.first.call(null,s__22525__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22524.call(null,cljs.core.rest.call(null,s__22525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__20263__auto__ = [];
var len__20256__auto___22534 = arguments.length;
var i__20257__auto___22535 = (0);
while(true){
if((i__20257__auto___22535 < len__20256__auto___22534)){
args__20263__auto__.push((arguments[i__20257__auto___22535]));

var G__22536 = (i__20257__auto___22535 + (1));
i__20257__auto___22535 = G__22536;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19931__auto__ = (function sablono$core$iter__22530(s__22531){
return (new cljs.core.LazySeq(null,(function (){
var s__22531__$1 = s__22531;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22531__$1);
if(temp__4657__auto__){
var s__22531__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22531__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__22531__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__22533 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__22532 = (0);
while(true){
if((i__22532 < size__19930__auto__)){
var style = cljs.core._nth.call(null,c__19929__auto__,i__22532);
cljs.core.chunk_append.call(null,b__22533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22537 = (i__22532 + (1));
i__22532 = G__22537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22533),sablono$core$iter__22530.call(null,cljs.core.chunk_rest.call(null,s__22531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22533),null);
}
} else {
var style = cljs.core.first.call(null,s__22531__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22530.call(null,cljs.core.rest.call(null,s__22531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq22529){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22529));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22538 = (function sablono$core$link_to22538(var_args){
var args__20263__auto__ = [];
var len__20256__auto___22541 = arguments.length;
var i__20257__auto___22542 = (0);
while(true){
if((i__20257__auto___22542 < len__20256__auto___22541)){
args__20263__auto__.push((arguments[i__20257__auto___22542]));

var G__22543 = (i__20257__auto___22542 + (1));
i__20257__auto___22542 = G__22543;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((1) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to22538.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20264__auto__);
});

sablono.core.link_to22538.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22538.cljs$lang$maxFixedArity = (1);

sablono.core.link_to22538.cljs$lang$applyTo = (function (seq22539){
var G__22540 = cljs.core.first.call(null,seq22539);
var seq22539__$1 = cljs.core.next.call(null,seq22539);
return sablono.core.link_to22538.cljs$core$IFn$_invoke$arity$variadic(G__22540,seq22539__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22538);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22544 = (function sablono$core$mail_to22544(var_args){
var args__20263__auto__ = [];
var len__20256__auto___22551 = arguments.length;
var i__20257__auto___22552 = (0);
while(true){
if((i__20257__auto___22552 < len__20256__auto___22551)){
args__20263__auto__.push((arguments[i__20257__auto___22552]));

var G__22553 = (i__20257__auto___22552 + (1));
i__20257__auto___22552 = G__22553;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((1) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to22544.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20264__auto__);
});

sablono.core.mail_to22544.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22547){
var vec__22548 = p__22547;
var content = cljs.core.nth.call(null,vec__22548,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__19143__auto__ = content;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22544.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to22544.cljs$lang$applyTo = (function (seq22545){
var G__22546 = cljs.core.first.call(null,seq22545);
var seq22545__$1 = cljs.core.next.call(null,seq22545);
return sablono.core.mail_to22544.cljs$core$IFn$_invoke$arity$variadic(G__22546,seq22545__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22544);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22554 = (function sablono$core$unordered_list22554(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19931__auto__ = (function sablono$core$unordered_list22554_$_iter__22559(s__22560){
return (new cljs.core.LazySeq(null,(function (){
var s__22560__$1 = s__22560;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22560__$1);
if(temp__4657__auto__){
var s__22560__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22560__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__22560__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__22562 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__22561 = (0);
while(true){
if((i__22561 < size__19930__auto__)){
var x = cljs.core._nth.call(null,c__19929__auto__,i__22561);
cljs.core.chunk_append.call(null,b__22562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22563 = (i__22561 + (1));
i__22561 = G__22563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22562),sablono$core$unordered_list22554_$_iter__22559.call(null,cljs.core.chunk_rest.call(null,s__22560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22562),null);
}
} else {
var x = cljs.core.first.call(null,s__22560__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22554_$_iter__22559.call(null,cljs.core.rest.call(null,s__22560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22554);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22564 = (function sablono$core$ordered_list22564(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19931__auto__ = (function sablono$core$ordered_list22564_$_iter__22569(s__22570){
return (new cljs.core.LazySeq(null,(function (){
var s__22570__$1 = s__22570;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22570__$1);
if(temp__4657__auto__){
var s__22570__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22570__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__22570__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__22572 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__22571 = (0);
while(true){
if((i__22571 < size__19930__auto__)){
var x = cljs.core._nth.call(null,c__19929__auto__,i__22571);
cljs.core.chunk_append.call(null,b__22572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22573 = (i__22571 + (1));
i__22571 = G__22573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22572),sablono$core$ordered_list22564_$_iter__22569.call(null,cljs.core.chunk_rest.call(null,s__22570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22572),null);
}
} else {
var x = cljs.core.first.call(null,s__22570__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22564_$_iter__22569.call(null,cljs.core.rest.call(null,s__22570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22564);
/**
 * Create an image element.
 */
sablono.core.image22574 = (function sablono$core$image22574(var_args){
var args22575 = [];
var len__20256__auto___22578 = arguments.length;
var i__20257__auto___22579 = (0);
while(true){
if((i__20257__auto___22579 < len__20256__auto___22578)){
args22575.push((arguments[i__20257__auto___22579]));

var G__22580 = (i__20257__auto___22579 + (1));
i__20257__auto___22579 = G__22580;
continue;
} else {
}
break;
}

var G__22577 = args22575.length;
switch (G__22577) {
case 1:
return sablono.core.image22574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22575.length)].join('')));

}
});

sablono.core.image22574.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22574.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22574.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22574);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22582_SHARP_,p2__22583_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22582_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22583_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22584_SHARP_,p2__22585_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22584_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22585_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19143__auto__ = value;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field22586 = (function sablono$core$color_field22586(var_args){
var args22587 = [];
var len__20256__auto___22654 = arguments.length;
var i__20257__auto___22655 = (0);
while(true){
if((i__20257__auto___22655 < len__20256__auto___22654)){
args22587.push((arguments[i__20257__auto___22655]));

var G__22656 = (i__20257__auto___22655 + (1));
i__20257__auto___22655 = G__22656;
continue;
} else {
}
break;
}

var G__22589 = args22587.length;
switch (G__22589) {
case 1:
return sablono.core.color_field22586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22587.length)].join('')));

}
});

sablono.core.color_field22586.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.color_field22586.call(null,name__22501__auto__,null);
});

sablono.core.color_field22586.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.color_field22586.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22586);

/**
 * Creates a date input field.
 */
sablono.core.date_field22590 = (function sablono$core$date_field22590(var_args){
var args22591 = [];
var len__20256__auto___22658 = arguments.length;
var i__20257__auto___22659 = (0);
while(true){
if((i__20257__auto___22659 < len__20256__auto___22658)){
args22591.push((arguments[i__20257__auto___22659]));

var G__22660 = (i__20257__auto___22659 + (1));
i__20257__auto___22659 = G__22660;
continue;
} else {
}
break;
}

var G__22593 = args22591.length;
switch (G__22593) {
case 1:
return sablono.core.date_field22590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22591.length)].join('')));

}
});

sablono.core.date_field22590.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.date_field22590.call(null,name__22501__auto__,null);
});

sablono.core.date_field22590.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.date_field22590.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22590);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22594 = (function sablono$core$datetime_field22594(var_args){
var args22595 = [];
var len__20256__auto___22662 = arguments.length;
var i__20257__auto___22663 = (0);
while(true){
if((i__20257__auto___22663 < len__20256__auto___22662)){
args22595.push((arguments[i__20257__auto___22663]));

var G__22664 = (i__20257__auto___22663 + (1));
i__20257__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var G__22597 = args22595.length;
switch (G__22597) {
case 1:
return sablono.core.datetime_field22594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22595.length)].join('')));

}
});

sablono.core.datetime_field22594.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.datetime_field22594.call(null,name__22501__auto__,null);
});

sablono.core.datetime_field22594.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.datetime_field22594.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22594);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22598 = (function sablono$core$datetime_local_field22598(var_args){
var args22599 = [];
var len__20256__auto___22666 = arguments.length;
var i__20257__auto___22667 = (0);
while(true){
if((i__20257__auto___22667 < len__20256__auto___22666)){
args22599.push((arguments[i__20257__auto___22667]));

var G__22668 = (i__20257__auto___22667 + (1));
i__20257__auto___22667 = G__22668;
continue;
} else {
}
break;
}

var G__22601 = args22599.length;
switch (G__22601) {
case 1:
return sablono.core.datetime_local_field22598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22599.length)].join('')));

}
});

sablono.core.datetime_local_field22598.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.datetime_local_field22598.call(null,name__22501__auto__,null);
});

sablono.core.datetime_local_field22598.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.datetime_local_field22598.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22598);

/**
 * Creates a email input field.
 */
sablono.core.email_field22602 = (function sablono$core$email_field22602(var_args){
var args22603 = [];
var len__20256__auto___22670 = arguments.length;
var i__20257__auto___22671 = (0);
while(true){
if((i__20257__auto___22671 < len__20256__auto___22670)){
args22603.push((arguments[i__20257__auto___22671]));

var G__22672 = (i__20257__auto___22671 + (1));
i__20257__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22605 = args22603.length;
switch (G__22605) {
case 1:
return sablono.core.email_field22602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22603.length)].join('')));

}
});

sablono.core.email_field22602.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.email_field22602.call(null,name__22501__auto__,null);
});

sablono.core.email_field22602.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.email_field22602.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22602);

/**
 * Creates a file input field.
 */
sablono.core.file_field22606 = (function sablono$core$file_field22606(var_args){
var args22607 = [];
var len__20256__auto___22674 = arguments.length;
var i__20257__auto___22675 = (0);
while(true){
if((i__20257__auto___22675 < len__20256__auto___22674)){
args22607.push((arguments[i__20257__auto___22675]));

var G__22676 = (i__20257__auto___22675 + (1));
i__20257__auto___22675 = G__22676;
continue;
} else {
}
break;
}

var G__22609 = args22607.length;
switch (G__22609) {
case 1:
return sablono.core.file_field22606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22607.length)].join('')));

}
});

sablono.core.file_field22606.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.file_field22606.call(null,name__22501__auto__,null);
});

sablono.core.file_field22606.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.file_field22606.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22606);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22610 = (function sablono$core$hidden_field22610(var_args){
var args22611 = [];
var len__20256__auto___22678 = arguments.length;
var i__20257__auto___22679 = (0);
while(true){
if((i__20257__auto___22679 < len__20256__auto___22678)){
args22611.push((arguments[i__20257__auto___22679]));

var G__22680 = (i__20257__auto___22679 + (1));
i__20257__auto___22679 = G__22680;
continue;
} else {
}
break;
}

var G__22613 = args22611.length;
switch (G__22613) {
case 1:
return sablono.core.hidden_field22610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22611.length)].join('')));

}
});

sablono.core.hidden_field22610.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.hidden_field22610.call(null,name__22501__auto__,null);
});

sablono.core.hidden_field22610.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.hidden_field22610.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22610);

/**
 * Creates a month input field.
 */
sablono.core.month_field22614 = (function sablono$core$month_field22614(var_args){
var args22615 = [];
var len__20256__auto___22682 = arguments.length;
var i__20257__auto___22683 = (0);
while(true){
if((i__20257__auto___22683 < len__20256__auto___22682)){
args22615.push((arguments[i__20257__auto___22683]));

var G__22684 = (i__20257__auto___22683 + (1));
i__20257__auto___22683 = G__22684;
continue;
} else {
}
break;
}

var G__22617 = args22615.length;
switch (G__22617) {
case 1:
return sablono.core.month_field22614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22615.length)].join('')));

}
});

sablono.core.month_field22614.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.month_field22614.call(null,name__22501__auto__,null);
});

sablono.core.month_field22614.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.month_field22614.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22614);

/**
 * Creates a number input field.
 */
sablono.core.number_field22618 = (function sablono$core$number_field22618(var_args){
var args22619 = [];
var len__20256__auto___22686 = arguments.length;
var i__20257__auto___22687 = (0);
while(true){
if((i__20257__auto___22687 < len__20256__auto___22686)){
args22619.push((arguments[i__20257__auto___22687]));

var G__22688 = (i__20257__auto___22687 + (1));
i__20257__auto___22687 = G__22688;
continue;
} else {
}
break;
}

var G__22621 = args22619.length;
switch (G__22621) {
case 1:
return sablono.core.number_field22618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22619.length)].join('')));

}
});

sablono.core.number_field22618.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.number_field22618.call(null,name__22501__auto__,null);
});

sablono.core.number_field22618.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.number_field22618.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22618);

/**
 * Creates a password input field.
 */
sablono.core.password_field22622 = (function sablono$core$password_field22622(var_args){
var args22623 = [];
var len__20256__auto___22690 = arguments.length;
var i__20257__auto___22691 = (0);
while(true){
if((i__20257__auto___22691 < len__20256__auto___22690)){
args22623.push((arguments[i__20257__auto___22691]));

var G__22692 = (i__20257__auto___22691 + (1));
i__20257__auto___22691 = G__22692;
continue;
} else {
}
break;
}

var G__22625 = args22623.length;
switch (G__22625) {
case 1:
return sablono.core.password_field22622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22623.length)].join('')));

}
});

sablono.core.password_field22622.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.password_field22622.call(null,name__22501__auto__,null);
});

sablono.core.password_field22622.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.password_field22622.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22622);

/**
 * Creates a range input field.
 */
sablono.core.range_field22626 = (function sablono$core$range_field22626(var_args){
var args22627 = [];
var len__20256__auto___22694 = arguments.length;
var i__20257__auto___22695 = (0);
while(true){
if((i__20257__auto___22695 < len__20256__auto___22694)){
args22627.push((arguments[i__20257__auto___22695]));

var G__22696 = (i__20257__auto___22695 + (1));
i__20257__auto___22695 = G__22696;
continue;
} else {
}
break;
}

var G__22629 = args22627.length;
switch (G__22629) {
case 1:
return sablono.core.range_field22626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22627.length)].join('')));

}
});

sablono.core.range_field22626.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.range_field22626.call(null,name__22501__auto__,null);
});

sablono.core.range_field22626.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.range_field22626.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22626);

/**
 * Creates a search input field.
 */
sablono.core.search_field22630 = (function sablono$core$search_field22630(var_args){
var args22631 = [];
var len__20256__auto___22698 = arguments.length;
var i__20257__auto___22699 = (0);
while(true){
if((i__20257__auto___22699 < len__20256__auto___22698)){
args22631.push((arguments[i__20257__auto___22699]));

var G__22700 = (i__20257__auto___22699 + (1));
i__20257__auto___22699 = G__22700;
continue;
} else {
}
break;
}

var G__22633 = args22631.length;
switch (G__22633) {
case 1:
return sablono.core.search_field22630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22631.length)].join('')));

}
});

sablono.core.search_field22630.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.search_field22630.call(null,name__22501__auto__,null);
});

sablono.core.search_field22630.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.search_field22630.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22630);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22634 = (function sablono$core$tel_field22634(var_args){
var args22635 = [];
var len__20256__auto___22702 = arguments.length;
var i__20257__auto___22703 = (0);
while(true){
if((i__20257__auto___22703 < len__20256__auto___22702)){
args22635.push((arguments[i__20257__auto___22703]));

var G__22704 = (i__20257__auto___22703 + (1));
i__20257__auto___22703 = G__22704;
continue;
} else {
}
break;
}

var G__22637 = args22635.length;
switch (G__22637) {
case 1:
return sablono.core.tel_field22634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22635.length)].join('')));

}
});

sablono.core.tel_field22634.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.tel_field22634.call(null,name__22501__auto__,null);
});

sablono.core.tel_field22634.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.tel_field22634.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22634);

/**
 * Creates a text input field.
 */
sablono.core.text_field22638 = (function sablono$core$text_field22638(var_args){
var args22639 = [];
var len__20256__auto___22706 = arguments.length;
var i__20257__auto___22707 = (0);
while(true){
if((i__20257__auto___22707 < len__20256__auto___22706)){
args22639.push((arguments[i__20257__auto___22707]));

var G__22708 = (i__20257__auto___22707 + (1));
i__20257__auto___22707 = G__22708;
continue;
} else {
}
break;
}

var G__22641 = args22639.length;
switch (G__22641) {
case 1:
return sablono.core.text_field22638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22639.length)].join('')));

}
});

sablono.core.text_field22638.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.text_field22638.call(null,name__22501__auto__,null);
});

sablono.core.text_field22638.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.text_field22638.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22638);

/**
 * Creates a time input field.
 */
sablono.core.time_field22642 = (function sablono$core$time_field22642(var_args){
var args22643 = [];
var len__20256__auto___22710 = arguments.length;
var i__20257__auto___22711 = (0);
while(true){
if((i__20257__auto___22711 < len__20256__auto___22710)){
args22643.push((arguments[i__20257__auto___22711]));

var G__22712 = (i__20257__auto___22711 + (1));
i__20257__auto___22711 = G__22712;
continue;
} else {
}
break;
}

var G__22645 = args22643.length;
switch (G__22645) {
case 1:
return sablono.core.time_field22642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22643.length)].join('')));

}
});

sablono.core.time_field22642.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.time_field22642.call(null,name__22501__auto__,null);
});

sablono.core.time_field22642.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.time_field22642.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22642);

/**
 * Creates a url input field.
 */
sablono.core.url_field22646 = (function sablono$core$url_field22646(var_args){
var args22647 = [];
var len__20256__auto___22714 = arguments.length;
var i__20257__auto___22715 = (0);
while(true){
if((i__20257__auto___22715 < len__20256__auto___22714)){
args22647.push((arguments[i__20257__auto___22715]));

var G__22716 = (i__20257__auto___22715 + (1));
i__20257__auto___22715 = G__22716;
continue;
} else {
}
break;
}

var G__22649 = args22647.length;
switch (G__22649) {
case 1:
return sablono.core.url_field22646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22647.length)].join('')));

}
});

sablono.core.url_field22646.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.url_field22646.call(null,name__22501__auto__,null);
});

sablono.core.url_field22646.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.url_field22646.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22646);

/**
 * Creates a week input field.
 */
sablono.core.week_field22650 = (function sablono$core$week_field22650(var_args){
var args22651 = [];
var len__20256__auto___22718 = arguments.length;
var i__20257__auto___22719 = (0);
while(true){
if((i__20257__auto___22719 < len__20256__auto___22718)){
args22651.push((arguments[i__20257__auto___22719]));

var G__22720 = (i__20257__auto___22719 + (1));
i__20257__auto___22719 = G__22720;
continue;
} else {
}
break;
}

var G__22653 = args22651.length;
switch (G__22653) {
case 1:
return sablono.core.week_field22650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22651.length)].join('')));

}
});

sablono.core.week_field22650.cljs$core$IFn$_invoke$arity$1 = (function (name__22501__auto__){
return sablono.core.week_field22650.call(null,name__22501__auto__,null);
});

sablono.core.week_field22650.cljs$core$IFn$_invoke$arity$2 = (function (name__22501__auto__,value__22502__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22501__auto__,value__22502__auto__);
});

sablono.core.week_field22650.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22650);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22722 = (function sablono$core$check_box22722(var_args){
var args22723 = [];
var len__20256__auto___22726 = arguments.length;
var i__20257__auto___22727 = (0);
while(true){
if((i__20257__auto___22727 < len__20256__auto___22726)){
args22723.push((arguments[i__20257__auto___22727]));

var G__22728 = (i__20257__auto___22727 + (1));
i__20257__auto___22727 = G__22728;
continue;
} else {
}
break;
}

var G__22725 = args22723.length;
switch (G__22725) {
case 1:
return sablono.core.check_box22722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22722.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22723.length)].join('')));

}
});

sablono.core.check_box22722.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box22722.call(null,name,null);
});

sablono.core.check_box22722.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box22722.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box22722.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19143__auto__ = value;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22722.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22722);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22730 = (function sablono$core$radio_button22730(var_args){
var args22731 = [];
var len__20256__auto___22734 = arguments.length;
var i__20257__auto___22735 = (0);
while(true){
if((i__20257__auto___22735 < len__20256__auto___22734)){
args22731.push((arguments[i__20257__auto___22735]));

var G__22736 = (i__20257__auto___22735 + (1));
i__20257__auto___22735 = G__22736;
continue;
} else {
}
break;
}

var G__22733 = args22731.length;
switch (G__22733) {
case 1:
return sablono.core.radio_button22730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22730.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22731.length)].join('')));

}
});

sablono.core.radio_button22730.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button22730.call(null,group,null);
});

sablono.core.radio_button22730.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button22730.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button22730.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19143__auto__ = value;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22730.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22730);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22738 = (function sablono$core$select_options22738(coll){
var iter__19931__auto__ = (function sablono$core$select_options22738_$_iter__22755(s__22756){
return (new cljs.core.LazySeq(null,(function (){
var s__22756__$1 = s__22756;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22756__$1);
if(temp__4657__auto__){
var s__22756__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22756__$2)){
var c__19929__auto__ = cljs.core.chunk_first.call(null,s__22756__$2);
var size__19930__auto__ = cljs.core.count.call(null,c__19929__auto__);
var b__22758 = cljs.core.chunk_buffer.call(null,size__19930__auto__);
if((function (){var i__22757 = (0);
while(true){
if((i__22757 < size__19930__auto__)){
var x = cljs.core._nth.call(null,c__19929__auto__,i__22757);
cljs.core.chunk_append.call(null,b__22758,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22765 = x;
var text = cljs.core.nth.call(null,vec__22765,(0),null);
var val = cljs.core.nth.call(null,vec__22765,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22765,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22738.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22771 = (i__22757 + (1));
i__22757 = G__22771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22758),sablono$core$select_options22738_$_iter__22755.call(null,cljs.core.chunk_rest.call(null,s__22756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22758),null);
}
} else {
var x = cljs.core.first.call(null,s__22756__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22768 = x;
var text = cljs.core.nth.call(null,vec__22768,(0),null);
var val = cljs.core.nth.call(null,vec__22768,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22768,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22738.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22738_$_iter__22755.call(null,cljs.core.rest.call(null,s__22756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19931__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22738);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22772 = (function sablono$core$drop_down22772(var_args){
var args22773 = [];
var len__20256__auto___22776 = arguments.length;
var i__20257__auto___22777 = (0);
while(true){
if((i__20257__auto___22777 < len__20256__auto___22776)){
args22773.push((arguments[i__20257__auto___22777]));

var G__22778 = (i__20257__auto___22777 + (1));
i__20257__auto___22777 = G__22778;
continue;
} else {
}
break;
}

var G__22775 = args22773.length;
switch (G__22775) {
case 2:
return sablono.core.drop_down22772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22772.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22773.length)].join('')));

}
});

sablono.core.drop_down22772.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22772.call(null,name,options,null);
});

sablono.core.drop_down22772.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22772.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22772);
/**
 * Creates a text area element.
 */
sablono.core.text_area22780 = (function sablono$core$text_area22780(var_args){
var args22781 = [];
var len__20256__auto___22784 = arguments.length;
var i__20257__auto___22785 = (0);
while(true){
if((i__20257__auto___22785 < len__20256__auto___22784)){
args22781.push((arguments[i__20257__auto___22785]));

var G__22786 = (i__20257__auto___22785 + (1));
i__20257__auto___22785 = G__22786;
continue;
} else {
}
break;
}

var G__22783 = args22781.length;
switch (G__22783) {
case 1:
return sablono.core.text_area22780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22781.length)].join('')));

}
});

sablono.core.text_area22780.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22780.call(null,name,null);
});

sablono.core.text_area22780.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19143__auto__ = value;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area22780.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22780);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22788 = (function sablono$core$label22788(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22788);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22789 = (function sablono$core$submit_button22789(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22789);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22790 = (function sablono$core$reset_button22790(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22790);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22791 = (function sablono$core$form_to22791(var_args){
var args__20263__auto__ = [];
var len__20256__auto___22798 = arguments.length;
var i__20257__auto___22799 = (0);
while(true){
if((i__20257__auto___22799 < len__20256__auto___22798)){
args__20263__auto__.push((arguments[i__20257__auto___22799]));

var G__22800 = (i__20257__auto___22799 + (1));
i__20257__auto___22799 = G__22800;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((1) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to22791.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20264__auto__);
});

sablono.core.form_to22791.cljs$core$IFn$_invoke$arity$variadic = (function (p__22794,body){
var vec__22795 = p__22794;
var method = cljs.core.nth.call(null,vec__22795,(0),null);
var action = cljs.core.nth.call(null,vec__22795,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22791.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22791.cljs$lang$applyTo = (function (seq22792){
var G__22793 = cljs.core.first.call(null,seq22792);
var seq22792__$1 = cljs.core.next.call(null,seq22792);
return sablono.core.form_to22791.cljs$core$IFn$_invoke$arity$variadic(G__22793,seq22792__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22791);

//# sourceMappingURL=core.js.map?rel=1494348449150