// Compiled by ClojureScript 1.7.228 {}
goog.provide('hangman.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
hangman.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ant","Antelope","Lion","Mouse","Monkey","Snake","Zebra","Bird","Cat","Dog"], null)], null));
if(typeof hangman.core.read !== 'undefined'){
} else {
hangman.core.read = (function (){var method_table__19235__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19236__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19239__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hangman.core","read"),((function (method_table__19235__auto__,prefer_table__19236__auto__,method_cache__19237__auto__,cached_hierarchy__19238__auto__,hierarchy__19239__auto__){
return (function (env,key,params){
return key;
});})(method_table__19235__auto__,prefer_table__19236__auto__,method_cache__19237__auto__,cached_hierarchy__19238__auto__,hierarchy__19239__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19239__auto__,method_table__19235__auto__,prefer_table__19236__auto__,method_cache__19237__auto__,cached_hierarchy__19238__auto__));
})();
}
cljs.core._add_method.call(null,hangman.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22323,key,params){
var map__22324 = p__22323;
var map__22324__$1 = ((((!((map__22324 == null)))?((((map__22324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22324):map__22324);
var env = map__22324__$1;
var state = cljs.core.get.call(null,map__22324__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__22326 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__22326,(0),null);
var value = cljs.core.nth.call(null,vec__22326,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,hangman.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__22327,key,p__22328){
var map__22329 = p__22327;
var map__22329__$1 = ((((!((map__22329 == null)))?((((map__22329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22329):map__22329);
var env = map__22329__$1;
var state = cljs.core.get.call(null,map__22329__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22330 = p__22328;
var map__22330__$1 = ((((!((map__22330 == null)))?((((map__22330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22330):map__22330);
var start = cljs.core.get.call(null,map__22330__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__22330__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
hangman.core.mutate = (function hangman$core$mutate(p__22333,key,params){
var map__22336 = p__22333;
var map__22336__$1 = ((((!((map__22336 == null)))?((((map__22336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22336):map__22336);
var env = map__22336__$1;
var state = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"add-animal","add-animal",-1560610395,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("animals","list","animals/list",1488034922)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22336,map__22336__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("animals","list","animals/list",1488034922)], null),cljs.core.conj,"a");
});})(map__22336,map__22336__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
hangman.core.AnimalsList = (function hangman$core$AnimalsList(){
var this__20407__auto__ = this;
React.Component.apply(this__20407__auto__,arguments);

if(!((this__20407__auto__.initLocalState == null))){
this__20407__auto__.state = this__20407__auto__.initLocalState();
} else {
this__20407__auto__.state = {};
}

return this__20407__auto__;
});

hangman.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x22342_22352 = hangman.core.AnimalsList.prototype;
x22342_22352.componentWillUpdate = ((function (x22342_22352){
return (function (next_props__20348__auto__,next_state__20349__auto__){
var this__20347__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20347__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20347__auto__);
});})(x22342_22352))
;

x22342_22352.shouldComponentUpdate = ((function (x22342_22352){
return (function (next_props__20348__auto__,next_state__20349__auto__){
var this__20347__auto__ = this;
var or__18322__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20347__auto__),goog.object.get(next_props__20348__auto__,"omcljs$value"));
if(or__18322__auto__){
return or__18322__auto__;
} else {
var and__18310__auto__ = this__20347__auto__.state;
if(cljs.core.truth_(and__18310__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20347__auto__.state,"omcljs$state"),goog.object.get(next_state__20349__auto__,"omcljs$state"));
} else {
return and__18310__auto__;
}
}
});})(x22342_22352))
;

x22342_22352.componentWillUnmount = ((function (x22342_22352){
return (function (){
var this__20347__auto__ = this;
var r__20353__auto__ = om.next.get_reconciler.call(null,this__20347__auto__);
var cfg__20354__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20353__auto__);
var st__20355__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20354__auto__);
var indexer__20352__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20354__auto__);
if((st__20355__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20355__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20347__auto__);
}

if((indexer__20352__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20352__auto__,this__20347__auto__);
}
});})(x22342_22352))
;

x22342_22352.componentDidUpdate = ((function (x22342_22352){
return (function (prev_props__20350__auto__,prev_state__20351__auto__){
var this__20347__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20347__auto__);
});})(x22342_22352))
;

x22342_22352.isMounted = ((function (x22342_22352){
return (function (){
var this__20347__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20347__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22342_22352))
;

x22342_22352.componentWillMount = ((function (x22342_22352){
return (function (){
var this__20347__auto__ = this;
var indexer__20352__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20347__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20352__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20352__auto__,this__20347__auto__);
}
});})(x22342_22352))
;

x22342_22352.render = ((function (x22342_22352){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22343 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22344 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22345 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22346 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22347 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22348 = om.next.props.call(null,this$);
var map__22348__$1 = ((((!((map__22348 == null)))?((((map__22348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22348):map__22348);
var title = cljs.core.get.call(null,map__22348__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__22348__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ol,null,cljs.core.map.call(null,((function (map__22348,map__22348__$1,title,list,_STAR_reconciler_STAR_22343,_STAR_depth_STAR_22344,_STAR_shared_STAR_22345,_STAR_instrument_STAR_22346,_STAR_parent_STAR_22347,this$,x22342_22352){
return (function (name){
return React.DOM.li(null,om.util.force_children.call(null,name));
});})(map__22348,map__22348__$1,title,list,_STAR_reconciler_STAR_22343,_STAR_depth_STAR_22344,_STAR_shared_STAR_22345,_STAR_instrument_STAR_22346,_STAR_parent_STAR_22347,this$,x22342_22352))
,cljs.core.sort.call(null,list)))),om.util.force_children.call(null,om.dom.input.call(null,null)),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__22348,map__22348__$1,title,list,_STAR_reconciler_STAR_22343,_STAR_depth_STAR_22344,_STAR_shared_STAR_22345,_STAR_instrument_STAR_22346,_STAR_parent_STAR_22347,this$,x22342_22352){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"add-animal","add-animal",-1560610395,null))], null));
});})(map__22348,map__22348__$1,title,list,_STAR_reconciler_STAR_22343,_STAR_depth_STAR_22344,_STAR_shared_STAR_22345,_STAR_instrument_STAR_22346,_STAR_parent_STAR_22347,this$,x22342_22352))
},om.util.force_children.call(null,"Add Animal"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22347;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22346;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22345;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22344;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22343;
}});})(x22342_22352))
;


hangman.core.AnimalsList.prototype.constructor = hangman.core.AnimalsList;

hangman.core.AnimalsList.prototype.om$isComponent = true;

var x22350_22353 = hangman.core.AnimalsList;
x22350_22353.om$next$IQueryParams$ = true;

x22350_22353.om$next$IQueryParams$params$arity$1 = ((function (x22350_22353){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x22350_22353))
;

x22350_22353.om$next$IQuery$ = true;

x22350_22353.om$next$IQuery$query$arity$1 = ((function (x22350_22353){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x22350_22353))
;


var x22351_22354 = hangman.core.AnimalsList.prototype;
x22351_22354.om$next$IQueryParams$ = true;

x22351_22354.om$next$IQueryParams$params$arity$1 = ((function (x22351_22354){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x22351_22354))
;

x22351_22354.om$next$IQuery$ = true;

x22351_22354.om$next$IQuery$query$arity$1 = ((function (x22351_22354){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x22351_22354))
;


hangman.core.AnimalsList.cljs$lang$type = true;

hangman.core.AnimalsList.cljs$lang$ctorStr = "hangman.core/AnimalsList";

hangman.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__20409__auto__,writer__20410__auto__,opt__20411__auto__){
return cljs.core._write.call(null,writer__20410__auto__,"hangman.core/AnimalsList");
});
hangman.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),hangman.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),hangman.core.read], null))], null));
om.next.add_root_BANG_.call(null,hangman.core.reconciler,hangman.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map