// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
om_tutorial.core.read = (function om_tutorial$core$read(p__21562,key,params){
var map__21566 = p__21562;
var map__21566__$1 = ((((!((map__21566 == null)))?((((map__21566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21566):map__21566);
var env = map__21566__$1;
var state = cljs.core.get.call(null,map__21566__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21568 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__21568,(0),null);
var value = cljs.core.nth.call(null,vec__21568,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.core.mutate = (function om_tutorial$core$mutate(p__21569,key,params){
var map__21572 = p__21569;
var map__21572__$1 = ((((!((map__21572 == null)))?((((map__21572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21572):map__21572);
var env = map__21572__$1;
var state = cljs.core.get.call(null,map__21572__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21572,map__21572__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__21572,map__21572__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
om_tutorial.core.Counter = (function om_tutorial$core$Counter(){
var this__20407__auto__ = this;
React.Component.apply(this__20407__auto__,arguments);

if(!((this__20407__auto__.initLocalState == null))){
this__20407__auto__.state = this__20407__auto__.initLocalState();
} else {
this__20407__auto__.state = {};
}

return this__20407__auto__;
});

om_tutorial.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x21578_21588 = om_tutorial.core.Counter.prototype;
x21578_21588.componentWillUpdate = ((function (x21578_21588){
return (function (next_props__20348__auto__,next_state__20349__auto__){
var this__20347__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20347__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20347__auto__);
});})(x21578_21588))
;

x21578_21588.shouldComponentUpdate = ((function (x21578_21588){
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
});})(x21578_21588))
;

x21578_21588.componentWillUnmount = ((function (x21578_21588){
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
});})(x21578_21588))
;

x21578_21588.componentDidUpdate = ((function (x21578_21588){
return (function (prev_props__20350__auto__,prev_state__20351__auto__){
var this__20347__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20347__auto__);
});})(x21578_21588))
;

x21578_21588.isMounted = ((function (x21578_21588){
return (function (){
var this__20347__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20347__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21578_21588))
;

x21578_21588.componentWillMount = ((function (x21578_21588){
return (function (){
var this__20347__auto__ = this;
var indexer__20352__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20347__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20352__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20352__auto__,this__20347__auto__);
}
});})(x21578_21588))
;

x21578_21588.render = ((function (x21578_21588){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21579 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21580 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21581 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21582 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21583 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21584 = om.next.props.call(null,this$);
var map__21584__$1 = ((((!((map__21584 == null)))?((((map__21584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21584):map__21584);
var count = cljs.core.get.call(null,map__21584__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21584,map__21584__$1,count,_STAR_reconciler_STAR_21579,_STAR_depth_STAR_21580,_STAR_shared_STAR_21581,_STAR_instrument_STAR_21582,_STAR_parent_STAR_21583,this$,x21578_21588){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__21584,map__21584__$1,count,_STAR_reconciler_STAR_21579,_STAR_depth_STAR_21580,_STAR_shared_STAR_21581,_STAR_instrument_STAR_21582,_STAR_parent_STAR_21583,this$,x21578_21588))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21583;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21582;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21581;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21580;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21579;
}});})(x21578_21588))
;


om_tutorial.core.Counter.prototype.constructor = om_tutorial.core.Counter;

om_tutorial.core.Counter.prototype.om$isComponent = true;

var x21586_21589 = om_tutorial.core.Counter;
x21586_21589.om$next$IQuery$ = true;

x21586_21589.om$next$IQuery$query$arity$1 = ((function (x21586_21589){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21586_21589))
;


var x21587_21590 = om_tutorial.core.Counter.prototype;
x21587_21590.om$next$IQuery$ = true;

x21587_21590.om$next$IQuery$query$arity$1 = ((function (x21587_21590){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21587_21590))
;


om_tutorial.core.Counter.cljs$lang$type = true;

om_tutorial.core.Counter.cljs$lang$ctorStr = "om-tutorial.core/Counter";

om_tutorial.core.Counter.cljs$lang$ctorPrWriter = (function (this__20409__auto__,writer__20410__auto__,opt__20411__auto__){
return cljs.core._write.call(null,writer__20410__auto__,"om-tutorial.core/Counter");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map