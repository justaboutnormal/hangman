// Compiled by ClojureScript 1.7.228 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
var node_SINGLEQUOTE_ = cljs.core.first.call(null,node);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__25307_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__25307_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__25307_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__25307_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__25308 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__25308;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
return (cljs.core.map_QMARK_.call(null,node)) && (((1) < cljs.core.count.call(null,node)));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__25317 = clojure.zip.down.call(null,loc);
var G__25318 = path__$1;
loc = G__25317;
path__$1 = G__25318;
continue;
} else {
var vec__25316 = path__$1;
var k = cljs.core.nth.call(null,vec__25316,(0),null);
var ks = cljs.core.nthnext.call(null,vec__25316,(1));
if(om.next.union_QMARK_.call(null,node)){
var node__$1 = clojure.zip.node.call(null,om.next.move_to_key.call(null,loc,k));
var G__25319 = clojure.zip.replace.call(null,loc,node__$1);
var G__25320 = ks;
loc = G__25319;
path__$1 = G__25320;
continue;
} else {
var k_SINGLEQUOTE_ = om.next.node__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_.call(null,node)){
var G__25321 = om.next.move_to_key.call(null,loc,k);
var G__25322 = ks;
loc = G__25321;
path__$1 = G__25322;
continue;
} else {
var G__25323 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__25324 = ks;
loc = G__25323;
path__$1 = G__25324;
continue;
}
} else {
var G__25325 = clojure.zip.right.call(null,loc);
var G__25326 = path__$1;
loc = G__25325;
path__$1 = G__25326;
continue;
}
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return om$next$join_key.call(null,cljs.core.first.call(null,node));
} else {
return node;

}
}
});
om.next.join_entry = (function om$next$join_entry(node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
return cljs.core.first.call(null,node);
}
});
om.next.join_value = (function om$next$join_value(join){
return cljs.core.second.call(null,om.next.join_entry.call(null,join));
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,node),om.next.focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,node)),ks)], true, false);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,node)),om$next$focused_join.call(null,cljs.core.first.call(null,node),ks));
} else {
return node;

}
}
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__25328 = path;
var k = cljs.core.nth.call(null,vec__25328,(0),null);
var ks = cljs.core.nthnext.call(null,vec__25328,(1));
var match = ((function (vec__25328,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.call(null,k,om.next.join_key.call(null,x));
});})(vec__25328,k,ks))
;
var value = ((function (vec__25328,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join.call(null,x,ks);
});})(vec__25328,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query.call(null,cljs.core.get.call(null,query,k),ks),new cljs.core.Keyword("om.next","union","om.next/union",1397420192),true], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args25329 = [];
var len__19380__auto___25333 = arguments.length;
var i__19381__auto___25334 = (0);
while(true){
if((i__19381__auto___25334 < len__19380__auto___25333)){
args25329.push((arguments[i__19381__auto___25334]));

var G__25335 = (i__19381__auto___25334 + (1));
i__19381__auto___25334 = G__25335;
continue;
} else {
}
break;
}

var G__25331 = args25329.length;
switch (G__25331) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25329.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__18310__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__18310__auto__){
var and__18310__auto____$1 = cljs.core.some.call(null,om.next.join_QMARK_,focus);
if(cljs.core.truth_(and__18310__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__18310__auto____$1;
}
} else {
return and__18310__auto__;
}
})())){
var vec__25332 = om.next.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__25332,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25332,(1),null);
var focus_SINGLEQUOTE___$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__25337 = focus_SINGLEQUOTE___$1;
var G__25338 = bound;
var G__25339 = cljs.core.conj.call(null,path,k);
focus = G__25337;
bound = G__25338;
path = G__25339;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next.ident[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$,props);
} else {
var m__18978__auto____$1 = (om.next.ident["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});

/**
 * Returns true if x satisfies? Ident
 */
om.next.ident_QMARK_ = (function om$next$ident_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
});

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next.params[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$);
} else {
var m__18978__auto____$1 = (om.next.params["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next.query[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$);
} else {
var m__18978__auto____$1 = (om.next.query["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$,new_state);
} else {
var m__18978__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next._get_state[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$);
} else {
var m__18978__auto____$1 = (om.next._get_state["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next._get_rendered_state[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$);
} else {
var m__18978__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__18977__auto__ = (((this$ == null))?null:this$);
var m__18978__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,this$);
} else {
var m__18978__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__18310__auto__ = (x instanceof cljs.core.Symbol);
if(and__18310__auto__){
return goog.string.startsWith(cljs.core.name.call(null,x),"?");
} else {
return and__18310__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,node))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,node),node);
} else {
return node;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});


om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__25343 = om.next.get_reconciler.call(null,component);
var G__25343__$1 = (((G__25343 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__25343));
var G__25343__$2 = (((G__25343__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__25343__$1));
var G__25343__$3 = (((G__25343__$2 == null))?null:cljs.core.deref.call(null,G__25343__$2));
var G__25343__$4 = (((G__25343__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__25343__$3));
if((G__25343__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__25343__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data.call(null,c);
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query.call(null,c));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c'","c'",-167114389,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params.call(null,c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,c)], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = Object.create(x.prototype);
if(((!((x__$1 == null)))?(((false) || (x__$1.om$next$IQuery$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1))){
var q = om.next.query.call(null,x__$1);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x__$1),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x__$1], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4655__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto__)){
var rk = temp__4655__auto__;
return rk;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args25350 = [];
var len__19380__auto___25357 = arguments.length;
var i__19381__auto___25358 = (0);
while(true){
if((i__19381__auto___25358 < len__19380__auto___25357)){
args25350.push((arguments[i__19381__auto___25358]));

var G__25359 = (i__19381__auto___25358 + (1));
i__19381__auto___25358 = G__25359;
continue;
} else {
}
break;
}

var G__25352 = args25350.length;
switch (G__25352) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25350.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__25353){
var map__25354 = p__25353;
var map__25354__$1 = ((((!((map__25354 == null)))?((((map__25354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25354):map__25354);
var opts = map__25354__$1;
var validator = cljs.core.get.call(null,map__25354__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__25354__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return ((function (map__25354,map__25354__$1,opts,validator,keyfn){
return (function() { 
var G__25361__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.call(null,om.next._STAR_instrument_STAR_,props,children);
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__25356 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__25356)].join('');
} else {
return G__25356;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},om.util.force_children.call(null,children));
}
};
var G__25361 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__25362__i = 0, G__25362__a = new Array(arguments.length -  1);
while (G__25362__i < G__25362__a.length) {G__25362__a[G__25362__i] = arguments[G__25362__i + 1]; ++G__25362__i;}
  children = new cljs.core.IndexedSeq(G__25362__a,0);
} 
return G__25361__delegate.call(this,props,children);};
G__25361.cljs$lang$maxFixedArity = 1;
G__25361.cljs$lang$applyTo = (function (arglist__25363){
var props = cljs.core.first(arglist__25363);
var children = cljs.core.rest(arglist__25363);
return G__25361__delegate(props,children);
});
G__25361.cljs$core$IFn$_invoke$arity$variadic = G__25361__delegate;
return G__25361;
})()
;
;})(map__25354,map__25354__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args25364 = [];
var len__19380__auto___25367 = arguments.length;
var i__19381__auto___25368 = (0);
while(true){
if((i__19381__auto___25368 < len__19380__auto___25367)){
args25364.push((arguments[i__19381__auto___25368]));

var G__25369 = (i__19381__auto___25368 + (1));
i__19381__auto___25368 = G__25369;
continue;
} else {
}
break;
}

var G__25366 = args25364.length;
switch (G__25366) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25364.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args25371 = [];
var len__19380__auto___25374 = arguments.length;
var i__19381__auto___25375 = (0);
while(true){
if((i__19381__auto___25375 < len__19380__auto___25374)){
args25371.push((arguments[i__19381__auto___25375]));

var G__25376 = (i__19381__auto___25375 + (1));
i__19381__auto___25375 = G__25376;
continue;
} else {
}
break;
}

var G__25373 = args25371.length;
switch (G__25373) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25371.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,next_props),om.next.get_props.call(null,component.props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop.call(null,component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__18322__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args25378 = [];
var len__19380__auto___25383 = arguments.length;
var i__19381__auto___25384 = (0);
while(true){
if((i__19381__auto___25384 < len__19380__auto___25383)){
args25378.push((arguments[i__19381__auto___25384]));

var G__25385 = (i__19381__auto___25384 + (1));
i__19381__auto___25384 = G__25385;
continue;
} else {
}
break;
}

var G__25380 = args25378.length;
switch (G__25380) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25378.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__25381 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__25381],null));
} else {
return G__25381;
}
})();
var G__25382 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__25382,ks);
} else {
return G__25382;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var G__25388 = c.state;
goog.object.set(G__25388,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__25388;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__25391 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__25391,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__25391;
}
} else {
var G__25392 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__25392,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__25392;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args25393 = [];
var len__19380__auto___25398 = arguments.length;
var i__19381__auto___25399 = (0);
while(true){
if((i__19381__auto___25399 < len__19380__auto___25398)){
args25393.push((arguments[i__19381__auto___25399]));

var G__25400 = (i__19381__auto___25399 + (1));
i__19381__auto___25399 = G__25400;
continue;
} else {
}
break;
}

var G__25395 = args25393.length;
switch (G__25395) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25393.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__25396 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__25396);
} else {
return G__25396;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__25397 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__25397],null));
} else {
return G__25397;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4655__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args25404 = [];
var len__19380__auto___25408 = arguments.length;
var i__19381__auto___25409 = (0);
while(true){
if((i__19381__auto___25409 < len__19380__auto___25408)){
args25404.push((arguments[i__19381__auto___25409]));

var G__25410 = (i__19381__auto___25409 + (1));
i__19381__auto___25409 = G__25410;
continue;
} else {
}
break;
}

var G__25406 = args25404.length;
switch (G__25406) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25404.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component)))?om.next._get_state.call(null,component):(function (){var temp__4657__auto__ = component.state;
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
var or__18322__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args25412 = [];
var len__19380__auto___25422 = arguments.length;
var i__19381__auto___25423 = (0);
while(true){
if((i__19381__auto___25423 < len__19380__auto___25422)){
args25412.push((arguments[i__19381__auto___25423]));

var G__25424 = (i__19381__auto___25423 + (1));
i__19381__auto___25423 = G__25424;
continue;
} else {
}
break;
}

var G__25421 = args25412.length;
switch (G__25421) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__19399__auto__ = (new cljs.core.IndexedSeq(args25412.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19399__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq25413){
var G__25414 = cljs.core.first.call(null,seq25413);
var seq25413__$1 = cljs.core.next.call(null,seq25413);
var G__25415 = cljs.core.first.call(null,seq25413__$1);
var seq25413__$2 = cljs.core.next.call(null,seq25413__$1);
var G__25416 = cljs.core.first.call(null,seq25413__$2);
var seq25413__$3 = cljs.core.next.call(null,seq25413__$2);
var G__25417 = cljs.core.first.call(null,seq25413__$3);
var seq25413__$4 = cljs.core.next.call(null,seq25413__$3);
var G__25418 = cljs.core.first.call(null,seq25413__$4);
var seq25413__$5 = cljs.core.next.call(null,seq25413__$4);
var G__25419 = cljs.core.first.call(null,seq25413__$5);
var seq25413__$6 = cljs.core.next.call(null,seq25413__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25414,G__25415,G__25416,G__25417,G__25418,G__25419,seq25413__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
return om.next._get_rendered_state.call(null,component);
} else {
var G__25429 = component;
var G__25429__$1 = (((G__25429 == null))?null:G__25429.state);
if((G__25429__$1 == null)){
return null;
} else {
return goog.object.get(G__25429__$1,"omcljs$state");
}
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4657__auto__ = (function (){var G__25433 = c;
var G__25433__$1 = (((G__25433 == null))?null:G__25433.state);
if((G__25433__$1 == null)){
return null;
} else {
return goog.object.get(G__25433__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pending = temp__4657__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args25434 = [];
var len__19380__auto___25437 = arguments.length;
var i__19381__auto___25438 = (0);
while(true){
if((i__19381__auto___25438 < len__19380__auto___25437)){
args25434.push((arguments[i__19381__auto___25438]));

var G__25439 = (i__19381__auto___25438 + (1));
i__19381__auto___25438 = G__25439;
continue;
} else {
}
break;
}

var G__25436 = args25434.length;
switch (G__25436) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25434.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;


om.next.gather_sends = (function om$next$gather_sends(p__25442,q,remotes){
var map__25447 = p__25442;
var map__25447__$1 = ((((!((map__25447 == null)))?((((map__25447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25447):map__25447);
var env = map__25447__$1;
var parser = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__25447,map__25447__$1,env,parser){
return (function (p1__25441_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25441_SHARP_,parser.call(null,env,q,p1__25441_SHARP_)],null));
});})(map__25447,map__25447__$1,env,parser))
),cljs.core.filter.call(null,((function (map__25447,map__25447__$1,env,parser){
return (function (p__25449){
var vec__25450 = p__25449;
var _ = cljs.core.nth.call(null,vec__25450,(0),null);
var v = cljs.core.nth.call(null,vec__25450,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__25447,map__25447__$1,env,parser))
)),remotes);
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,p__25451){
var map__25454 = p__25451;
var map__25454__$1 = ((((!((map__25454 == null)))?((((map__25454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25454):map__25454);
var params = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"query","query",352022017,null))))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
var temp__4657__auto___25456 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___25456)){
var l_25457 = temp__4657__auto___25456;
goog.log.info(l_25457,[cljs.core.str((function (){var temp__4657__auto____$1 = ((om.next.ident_QMARK_.call(null,component))?om.next.ident.call(null,component,om.next.props.call(null,component)):null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ref = temp__4657__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

var sends_25458 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),om.next.full_query.call(null,component),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_25458)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_25458);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__25460 = component.refs;
if((G__25460 == null)){
return null;
} else {
return goog.object.get(G__25460,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args25461 = [];
var len__19380__auto___25464 = arguments.length;
var i__19381__auto___25465 = (0);
while(true){
if((i__19381__auto___25465 < len__19380__auto___25464)){
args25461.push((arguments[i__19381__auto___25465]));

var G__25466 = (i__19381__auto___25465 + (1));
i__19381__auto___25465 = G__25466;
continue;
} else {
}
break;
}

var G__25463 = args25461.length;
switch (G__25463) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25461.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4655__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_.call(null,p))){
var G__25468 = p;
var G__25469 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__25468;
ret = G__25469;
continue;
} else {
var G__25470 = p;
var G__25471 = ret;
c__$1 = G__25470;
ret = G__25471;
continue;
}
} else {
var seen = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.take_while.call(null,((function (c__$1,ret,seen,temp__4655__auto__){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),x)){
return null;
} else {
cljs.core.swap_BANG_.call(null,seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4655__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))))].join('')));
}

var ref = (function (){var G__25473 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__25473)].join('');
} else {
return G__25473;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.ident.call(null,component,om.next.props.call(null,component));
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(300));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args25474 = [];
var len__19380__auto___25477 = arguments.length;
var i__19381__auto___25478 = (0);
while(true){
if((i__19381__auto___25478 < len__19380__auto___25477)){
args25474.push((arguments[i__19381__auto___25478]));

var G__25479 = (i__19381__auto___25478 + (1));
i__19381__auto___25478 = G__25479;
continue;
} else {
}
break;
}

var G__25476 = args25474.length;
switch (G__25476) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25474.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

var temp__4657__auto___25481 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4657__auto___25481)){
var old_reconciler_25482 = temp__4657__auto___25481;
om.next.remove_root_BANG_.call(null,old_reconciler_25482,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});
/**
 * Create an Om Next root without an actual DOM target. Useful in devcards
 * testing context.
 */
om.next.mock_root = (function om$next$mock_root(reconciler,root_class){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,null,null);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__18977__auto__ = (((c == null))?null:c);
var m__18978__auto__ = (om.next.tx_intercept[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,c,tx);
} else {
var m__18978__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__18310__auto__ = c;
if(cljs.core.truth_(and__18310__auto__)){
return (om.next.ident_QMARK_.call(null,c)) && (cljs.core.not.call(null,ref));
} else {
return and__18310__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto__)){
var l = temp__4657__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,(cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,v))));

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

return om.next.schedule_sends_BANG_.call(null,r);
}
});
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,tx__$1,c){
return cljs.core.into.call(null,tx__$1,om.next.full_query.call(null,c,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
});
var ks = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((ks == null))){
var k = cljs.core.first.call(null,ks);
if((k instanceof cljs.core.Keyword)){
var G__25485 = cljs.core.next.call(null,ks);
var G__25486 = cljs.core.reduce.call(null,((function (ks,tx_SINGLEQUOTE_,k){
return (function (p1__25483_SHARP_,p2__25484_SHARP_){
return add_focused_query.call(null,k,p1__25483_SHARP_,p2__25484_SHARP_);
});})(ks,tx_SINGLEQUOTE_,k))
,tx_SINGLEQUOTE_,om.next.ref__GT_components.call(null,r,k));
ks = G__25485;
tx_SINGLEQUOTE_ = G__25486;
continue;
} else {
var G__25487 = cljs.core.next.call(null,ks);
var G__25488 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,k);
ks = G__25487;
tx_SINGLEQUOTE_ = G__25488;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args25489 = [];
var len__19380__auto___25495 = arguments.length;
var i__19381__auto___25496 = (0);
while(true){
if((i__19381__auto___25496 < len__19380__auto___25495)){
args25489.push((arguments[i__19381__auto___25496]));

var G__25497 = (i__19381__auto___25496 + (1));
i__19381__auto___25496 = G__25497;
continue;
} else {
}
break;
}

var G__25491 = args25489.length;
switch (G__25491) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25489.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx);
} else {
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IQuery","IQuery",-2026788688,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$1 = tx;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$1));
} else {
var vec__25493 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$1], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25493,(0),null);
var tx__$2 = cljs.core.nth.call(null,vec__25493,(1),null);
var G__25499 = om.next.parent.call(null,p);
var G__25500 = x_SINGLEQUOTE_;
var G__25501 = tx__$2;
p = G__25499;
x__$1 = G__25500;
tx__$1 = G__25501;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__25502){
var map__25505 = p__25502;
var map__25505__$1 = ((((!((map__25505 == null)))?((((map__25505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25505):map__25505);
var opts = map__25505__$1;
var read = cljs.core.get.call(null,map__25505__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__25505__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__25513 = x;
if(om.next.component_QMARK_.call(null,x)){
return cljs.core.type.call(null,G__25513);
} else {
return G__25513;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath){
var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__25559 = classpath;
if((!((class$__$1 == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__25559,class$__$1);
} else {
return G__25559;
}
})();
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path));
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var map__25560 = cljs.core.group_by.call(null,om.next.join_QMARK_,query);
var map__25560__$1 = ((((!((map__25560 == null)))?((((map__25560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25560):map__25560);
var props = cljs.core.get.call(null,map__25560__$1,false);
var joins = cljs.core.get.call(null,map__25560__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__25560,map__25560__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__25507_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25507_SHARP_,cljs.core.zipmap.call(null,props,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__25560,map__25560__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__25562 = cljs.core.seq.call(null,joins);
var chunk__25563 = null;
var count__25564 = (0);
var i__25565 = (0);
while(true){
if((i__25565 < count__25564)){
var join = cljs.core._nth.call(null,chunk__25563,i__25565);
var vec__25566_25580 = om.next.join_entry.call(null,join);
var prop_25581 = cljs.core.nth.call(null,vec__25566_25580,(0),null);
var query_SINGLEQUOTE__25582 = cljs.core.nth.call(null,vec__25566_25580,(1),null);
var query_SINGLEQUOTE__25583__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE__25582))?query:query_SINGLEQUOTE__25582);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__25562,chunk__25563,count__25564,i__25565,vec__25566_25580,prop_25581,query_SINGLEQUOTE__25582,query_SINGLEQUOTE__25583__$1,join,map__25560,map__25560__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__25508_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25508_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_25581,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__25562,chunk__25563,count__25564,i__25565,vec__25566_25580,prop_25581,query_SINGLEQUOTE__25582,query_SINGLEQUOTE__25583__$1,join,map__25560,map__25560__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__25584 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__25583__$1));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25584,query_SINGLEQUOTE__25583__$1,cljs.core.conj.call(null,path,prop_25581),classpath__$1);

var G__25585 = seq__25562;
var G__25586 = chunk__25563;
var G__25587 = count__25564;
var G__25588 = (i__25565 + (1));
seq__25562 = G__25585;
chunk__25563 = G__25586;
count__25564 = G__25587;
i__25565 = G__25588;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25562);
if(temp__4657__auto__){
var seq__25562__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25562__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__25562__$1);
var G__25589 = cljs.core.chunk_rest.call(null,seq__25562__$1);
var G__25590 = c__19125__auto__;
var G__25591 = cljs.core.count.call(null,c__19125__auto__);
var G__25592 = (0);
seq__25562 = G__25589;
chunk__25563 = G__25590;
count__25564 = G__25591;
i__25565 = G__25592;
continue;
} else {
var join = cljs.core.first.call(null,seq__25562__$1);
var vec__25567_25593 = om.next.join_entry.call(null,join);
var prop_25594 = cljs.core.nth.call(null,vec__25567_25593,(0),null);
var query_SINGLEQUOTE__25595 = cljs.core.nth.call(null,vec__25567_25593,(1),null);
var query_SINGLEQUOTE__25596__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE__25595))?query:query_SINGLEQUOTE__25595);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__25562,chunk__25563,count__25564,i__25565,vec__25567_25593,prop_25594,query_SINGLEQUOTE__25595,query_SINGLEQUOTE__25596__$1,join,seq__25562__$1,temp__4657__auto__,map__25560,map__25560__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__25508_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25508_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_25594,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__25562,chunk__25563,count__25564,i__25565,vec__25567_25593,prop_25594,query_SINGLEQUOTE__25595,query_SINGLEQUOTE__25596__$1,join,seq__25562__$1,temp__4657__auto__,map__25560,map__25560__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__25597 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__25596__$1));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25597,query_SINGLEQUOTE__25596__$1,cljs.core.conj.call(null,path,prop_25594),classpath__$1);

var G__25598 = cljs.core.next.call(null,seq__25562__$1);
var G__25599 = null;
var G__25600 = (0);
var G__25601 = (0);
seq__25562 = G__25598;
chunk__25563 = G__25599;
count__25564 = G__25600;
i__25565 = G__25601;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__25568 = cljs.core.seq.call(null,query);
var chunk__25569 = null;
var count__25570 = (0);
var i__25571 = (0);
while(true){
if((i__25571 < count__25570)){
var vec__25572 = cljs.core._nth.call(null,chunk__25569,i__25571);
var prop = cljs.core.nth.call(null,vec__25572,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25572,(1),null);
var class_SINGLEQUOTE__25602 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25602,query_SINGLEQUOTE_,cljs.core.conj.call(null,path,prop),classpath__$1);

var G__25603 = seq__25568;
var G__25604 = chunk__25569;
var G__25605 = count__25570;
var G__25606 = (i__25571 + (1));
seq__25568 = G__25603;
chunk__25569 = G__25604;
count__25570 = G__25605;
i__25571 = G__25606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25568);
if(temp__4657__auto__){
var seq__25568__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25568__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__25568__$1);
var G__25607 = cljs.core.chunk_rest.call(null,seq__25568__$1);
var G__25608 = c__19125__auto__;
var G__25609 = cljs.core.count.call(null,c__19125__auto__);
var G__25610 = (0);
seq__25568 = G__25607;
chunk__25569 = G__25608;
count__25570 = G__25609;
i__25571 = G__25610;
continue;
} else {
var vec__25573 = cljs.core.first.call(null,seq__25568__$1);
var prop = cljs.core.nth.call(null,vec__25573,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25573,(1),null);
var class_SINGLEQUOTE__25611 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__25611,query_SINGLEQUOTE_,cljs.core.conj.call(null,path,prop),classpath__$1);

var G__25612 = cljs.core.next.call(null,seq__25568__$1);
var G__25613 = null;
var G__25614 = (0);
var G__25615 = (0);
seq__25568 = G__25612;
chunk__25569 = G__25613;
count__25570 = G__25614;
i__25571 = G__25615;
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
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = ((om.next.ident_QMARK_.call(null,c))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ref == null))){
var G__25574 = indexes__$2;
if(cljs.core.truth_(ref)){
return cljs.core.update_in.call(null,G__25574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__25574;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var ref = ((om.next.ident_QMARK_.call(null,c))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ref == null))){
var G__25575 = indexes__$2;
if(cljs.core.truth_(ref)){
return cljs.core.update_in.call(null,G__25575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.disj,c);
} else {
return G__25575;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__25509_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__25509_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18936__auto__,k__18937__auto__){
var self__ = this;
var this__18936__auto____$1 = this;
return cljs.core._lookup.call(null,this__18936__auto____$1,k__18937__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18938__auto__,k25511,else__18939__auto__){
var self__ = this;
var this__18938__auto____$1 = this;
var G__25576 = (((k25511 instanceof cljs.core.Keyword))?k25511.fqn:null);
switch (G__25576) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25511,else__18939__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18950__auto__,writer__18951__auto__,opts__18952__auto__){
var self__ = this;
var this__18950__auto____$1 = this;
var pr_pair__18953__auto__ = ((function (this__18950__auto____$1){
return (function (keyval__18954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18951__auto__,cljs.core.pr_writer,""," ","",opts__18952__auto__,keyval__18954__auto__);
});})(this__18950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18951__auto__,pr_pair__18953__auto__,"#om.next.Indexer{",", ","}",opts__18952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25510){
var self__ = this;
var G__25510__$1 = this;
return (new cljs.core.RecordIter((0),G__25510__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18934__auto__){
var self__ = this;
var this__18934__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18930__auto__){
var self__ = this;
var this__18930__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18940__auto__){
var self__ = this;
var this__18940__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18931__auto__){
var self__ = this;
var this__18931__auto____$1 = this;
var h__18757__auto__ = self__.__hash;
if(!((h__18757__auto__ == null))){
return h__18757__auto__;
} else {
var h__18757__auto____$1 = cljs.core.hash_imap.call(null,this__18931__auto____$1);
self__.__hash = h__18757__auto____$1;

return h__18757__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18932__auto__,other__18933__auto__){
var self__ = this;
var this__18932__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18310__auto__ = other__18933__auto__;
if(cljs.core.truth_(and__18310__auto__)){
var and__18310__auto____$1 = (this__18932__auto____$1.constructor === other__18933__auto__.constructor);
if(and__18310__auto____$1){
return cljs.core.equiv_map.call(null,this__18932__auto____$1,other__18933__auto__);
} else {
return and__18310__auto____$1;
}
} else {
return and__18310__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18945__auto__,k__18946__auto__){
var self__ = this;
var this__18945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__18946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18945__auto____$1),self__.__meta),k__18946__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18946__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18943__auto__,k__18944__auto__,G__25510){
var self__ = this;
var this__18943__auto____$1 = this;
var pred__25577 = cljs.core.keyword_identical_QMARK_;
var expr__25578 = k__18944__auto__;
if(cljs.core.truth_(pred__25577.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__25578))){
return (new om.next.Indexer(G__25510,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18944__auto__,G__25510),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18948__auto__){
var self__ = this;
var this__18948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18935__auto__,G__25510){
var self__ = this;
var this__18935__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__25510,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18941__auto__,entry__18942__auto__){
var self__ = this;
var this__18941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18942__auto__)){
return cljs.core._assoc.call(null,this__18941__auto____$1,cljs.core._nth.call(null,entry__18942__auto__,(0)),cljs.core._nth.call(null,entry__18942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18941__auto____$1,entry__18942__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__18970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__18970__auto__,writer__18971__auto__){
return cljs.core._write.call(null,writer__18971__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__25512){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__25512),null,cljs.core.dissoc.call(null,G__25512,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args25618 = [];
var len__19380__auto___25623 = arguments.length;
var i__19381__auto___25624 = (0);
while(true){
if((i__19381__auto___25624 < len__19380__auto___25623)){
args25618.push((arguments[i__19381__auto___25624]));

var G__25625 = (i__19381__auto___25624 + (1));
i__19381__auto___25624 = G__25625;
continue;
} else {
}
break;
}

var G__25620 = args25618.length;
switch (G__25620) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25618.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__25617_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__25617_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:(((!class$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$)))){
return Object.create(class$.prototype);
} else {
return class$;
}
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query)));
var ref = ((om.next.ident_QMARK_.call(null,class$))?om.next.ident.call(null,class$,data):null);
if(!((ref == null))){
return om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ref)),data,refs);
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var node = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.next.join_QMARK_.call(null,node))){
var vec__25634 = om.next.join_entry.call(null,node);
var k = cljs.core.nth.call(null,vec__25634,(0),null);
var sel = cljs.core.nth.call(null,vec__25634,(1),null);
var sel__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),sel))?query:sel);
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1)));
var v = cljs.core.get.call(null,data,k);
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs);
if(!(((class$ == null)) || (!(om.next.ident_QMARK_.call(null,class$))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__25637 = cljs.core.next.call(null,q);
var G__25638 = cljs.core.assoc.call(null,ret,k,i);
q = G__25637;
ret = G__25638;
continue;
} else {
var G__25639 = cljs.core.next.call(null,q);
var G__25640 = cljs.core.assoc.call(null,ret,k,x);
q = G__25639;
ret = G__25640;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__25634,k,sel,sel__$1,class$,v,node){
return (function (p1__25629_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__25629_SHARP_,refs);
});})(q,ret,vec__25634,k,sel,sel__$1,class$,v,node))
),v);
if(!(((class$ == null)) || (!(om.next.ident_QMARK_.call(null,class$))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__25634,k,sel,sel__$1,class$,v,node){
return (function (p1__25630_SHARP_){
return om.next.ident.call(null,class$,p1__25630_SHARP_);
});})(q,ret,xs,vec__25634,k,sel,sel__$1,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,is,xs,vec__25634,k,sel,sel__$1,class$,v,node){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,is,xs,vec__25634,k,sel,sel__$1,class$,v,node))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__25634,k,sel,sel__$1,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__25634,k,sel,sel__$1,class$,v,node){
return (function (ret__$1,p__25635){
var vec__25636 = p__25635;
var i = cljs.core.nth.call(null,vec__25636,(0),null);
var x = cljs.core.nth.call(null,vec__25636,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__25634,k,sel,sel__$1,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__25634,k,sel,sel__$1,class$,v,node))
);
}

var G__25641 = cljs.core.next.call(null,q);
var G__25642 = cljs.core.assoc.call(null,ret,k,is);
q = G__25641;
ret = G__25642;
continue;
} else {
var G__25643 = cljs.core.next.call(null,q);
var G__25644 = cljs.core.assoc.call(null,ret,k,xs);
q = G__25643;
ret = G__25644;
continue;
}
} else {
if((v == null)){
var G__25645 = cljs.core.next.call(null,q);
var G__25646 = ret;
q = G__25645;
ret = G__25646;
continue;
} else {
var G__25647 = cljs.core.next.call(null,q);
var G__25648 = cljs.core.assoc.call(null,ret,k,v);
q = G__25647;
ret = G__25648;
continue;

}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.first.call(null,node):node);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__25649 = cljs.core.next.call(null,q);
var G__25650 = ret;
q = G__25649;
ret = G__25650;
continue;
} else {
var G__25651 = cljs.core.next.call(null,q);
var G__25652 = cljs.core.assoc.call(null,ret,k,v);
q = G__25651;
ret = G__25652;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-ref
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args25653 = [];
var len__19380__auto___25656 = arguments.length;
var i__19381__auto___25657 = (0);
while(true){
if((i__19381__auto___25657 < len__19380__auto___25656)){
args25653.push((arguments[i__19381__auto___25657]));

var G__25658 = (i__19381__auto___25657 + (1));
i__19381__auto___25657 = G__25658;
continue;
} else {
}
break;
}

var G__25655 = args25653.length;
switch (G__25655) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25653.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_refs){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs);
if(merge_refs){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__25663 = cljs.core.group_by.call(null,(function (p1__25660_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__25660_SHARP_));
}),res);
var map__25663__$1 = ((((!((map__25663 == null)))?((((map__25663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25663):map__25663);
var refs = cljs.core.get.call(null,map__25663__$1,true);
var rest = cljs.core.get.call(null,map__25663__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args25666 = [];
var len__19380__auto___25673 = arguments.length;
var i__19381__auto___25674 = (0);
while(true){
if((i__19381__auto___25674 < len__19380__auto___25673)){
args25666.push((arguments[i__19381__auto___25674]));

var G__25675 = (i__19381__auto___25674 + (1));
i__19381__auto___25674 = G__25675;
continue;
} else {
}
break;
}

var G__25668 = args25666.length;
switch (G__25668) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25666.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.db__GT_tree.call(null,query,data,refs,cljs.core.identity);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"refs","refs",80480079,null))))].join('')));
}

var data__$1 = (function (){var G__25669 = data;
if(om.next.ref_QMARK_.call(null,data)){
return cljs.core.get_in.call(null,refs,map_ident.call(null,G__25669));
} else {
return G__25669;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (data__$1){
return (function (p1__25665_SHARP_){
return om.next.db__GT_tree.call(null,query,cljs.core.get_in.call(null,refs,map_ident.call(null,p1__25665_SHARP_)),refs,map_ident);
});})(data__$1))
),data__$1);
} else {
var map__25670 = cljs.core.group_by.call(null,om.next.join_QMARK_,query);
var map__25670__$1 = ((((!((map__25670 == null)))?((((map__25670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25670):map__25670);
var props = cljs.core.get.call(null,map__25670__$1,false);
var joins = cljs.core.get.call(null,map__25670__$1,true);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__25672 = om.next.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__25672,(0),null);
var sel = cljs.core.nth.call(null,vec__25672,(1),null);
var sel__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),sel))?query:sel);
var v = cljs.core.get.call(null,data__$1,key);
if(!(om.next.ref_QMARK_.call(null,v))){
var G__25677 = cljs.core.next.call(null,joins__$1);
var G__25678 = cljs.core.assoc.call(null,ret,key,om.next.db__GT_tree.call(null,sel__$1,v,refs,map_ident));
joins__$1 = G__25677;
ret = G__25678;
continue;
} else {
var G__25679 = cljs.core.next.call(null,joins__$1);
var G__25680 = cljs.core.assoc.call(null,ret,key,om.next.db__GT_tree.call(null,sel__$1,cljs.core.get_in.call(null,refs,map_ident.call(null,v)),refs,map_ident));
joins__$1 = G__25679;
ret = G__25680;
continue;
}
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props),ret);
}
break;
}
}
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;
om.next.rewrite = (function om$next$rewrite(paths){
return (function (res){
var step = (function om$next$rewrite_$_step(res__$1,p__25690){
var vec__25692 = p__25690;
var k = cljs.core.nth.call(null,vec__25692,(0),null);
var orig_path = cljs.core.nth.call(null,vec__25692,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,res__$1,k),orig_path,cljs.core.get.call(null,res__$1,k));
});
return cljs.core.reduce.call(null,step,res,paths);
});
});
/**
 * A send helper for rewriting the query to remove client local keys that
 * don't need server side processing. Give a query this function will
 * return a map with two keys, :query and :rewrite. :query is the
 * actual query you should send. Upon receiving the response you should invoke
 * :rewrite on the response before invoking the send callback.
 */
om.next.process_roots = (function om$next$process_roots(query){
var process_roots_STAR_ = (function om$next$process_roots_$_process_roots_STAR_(query__$1,ret,path){
var ks = cljs.core.seq.call(null,query__$1);
while(true){
if(!((ks == null))){
var k = cljs.core.first.call(null,ks);
if(new cljs.core.Keyword("query","root","query/root",-68034309).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,k)) === true){
return cljs.core.swap_BANG_.call(null,ret,((function (ks,k){
return (function (p1__25693_SHARP_){
var jk = om.next.join_key.call(null,k);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,p1__25693_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),cljs.core.conj,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths","paths",-1807389588),jk], null),cljs.core.conj.call(null,path,jk));
});})(ks,k))
);
} else {
if(cljs.core.truth_(om.next.join_QMARK_.call(null,k))){
var vec__25701_25702 = om.next.join_entry.call(null,k);
var jk_25703 = cljs.core.nth.call(null,vec__25701_25702,(0),null);
var jv_25704 = cljs.core.nth.call(null,vec__25701_25702,(1),null);
om$next$process_roots_$_process_roots_STAR_.call(null,jv_25704,ret,cljs.core.conj.call(null,path,jk_25703));
} else {
}

var G__25705 = cljs.core.next.call(null,ks);
ks = G__25705;
continue;
}
} else {
return null;
}
break;
}
});
var ret = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.PersistentArrayMap.EMPTY], null));
process_roots_STAR_.call(null,query,ret,cljs.core.PersistentVector.EMPTY);

return cljs.core.assoc.call(null,cljs.core.deref.call(null,ret),new cljs.core.Keyword(null,"rewrite","rewrite",870487388),om.next.rewrite.call(null,new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ret))));
});
om.next.merge_refs = (function om$next$merge_refs(tree,config,refs){
var map__25714 = config;
var map__25714__$1 = ((((!((map__25714 == null)))?((((map__25714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25714):map__25714);
var merge_ref = cljs.core.get.call(null,map__25714__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403));
var indexer = cljs.core.get.call(null,map__25714__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var step = ((function (map__25714,map__25714__$1,merge_ref,indexer){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__25719){
var vec__25721 = p__25719;
var ref = cljs.core.nth.call(null,vec__25721,(0),null);
var props = cljs.core.nth.call(null,vec__25721,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any.call(null,indexer,ref);
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props);
}
});})(map__25714,map__25714__$1,merge_ref,indexer))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
var vec__25723 = om.next.sift_refs.call(null,res);
var refs = cljs.core.nth.call(null,vec__25723,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25723,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,root,res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs.call(null,state,config,refs),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__25726 = merge.call(null,reconciler,cljs.core.deref.call(null,state),delta);
var map__25726__$1 = ((((!((map__25726 == null)))?((((map__25726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25726):map__25726);
var keys = cljs.core.get.call(null,map__25726__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__25726__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__25726__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4655__auto__)){
var migrate = temp__4655__auto__;
return migrate.call(null,next,om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)))),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config));
} else {
return next;
}
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18936__auto__,k__18937__auto__){
var self__ = this;
var this__18936__auto____$1 = this;
return cljs.core._lookup.call(null,this__18936__auto____$1,k__18937__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18938__auto__,k25735,else__18939__auto__){
var self__ = this;
var this__18938__auto____$1 = this;
var G__25737 = (((k25735 instanceof cljs.core.Keyword))?k25735.fqn:null);
switch (G__25737) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25735,else__18939__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (p1__25733_SHARP_){
return om.next.merge_BANG_.call(null,this$__$1,p1__25733_SHARP_);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_.call(null,q)){
new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
} else {
var cs_25752 = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__25730_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__25730_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__25731_SHARP_,p2__25732_SHARP_){
return cljs.core.into.call(null,p1__25731_SHARP_,p2__25732_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__25738_25753 = self__.config;
var map__25738_25754__$1 = ((((!((map__25738_25753 == null)))?((((map__25738_25753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25738_25753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25738_25753):map__25738_25753);
var ui__GT_props_25755 = cljs.core.get.call(null,map__25738_25754__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env_25756 = om.next.to_env.call(null,self__.config);
var seq__25740_25757 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_25752));
var chunk__25741_25758 = null;
var count__25742_25759 = (0);
var i__25743_25760 = (0);
while(true){
if((i__25743_25760 < count__25742_25759)){
var c_25761 = cljs.core._nth.call(null,chunk__25741_25758,i__25743_25760);
if(om.next.mounted_QMARK_.call(null,c_25761)){
var computed_25762 = om.next.get_computed.call(null,om.next.props.call(null,c_25761));
var next_props_25763 = om.next.computed.call(null,ui__GT_props_25755.call(null,env_25756,c_25761),computed_25762);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c_25761,next_props_25763,om.next.get_state.call(null,c_25761)))){
if(!((next_props_25763 == null))){
om.next.update_component_BANG_.call(null,c_25761,next_props_25763);
} else {
c_25761.forceUpdate();
}
} else {
}
} else {
}

var G__25764 = seq__25740_25757;
var G__25765 = chunk__25741_25758;
var G__25766 = count__25742_25759;
var G__25767 = (i__25743_25760 + (1));
seq__25740_25757 = G__25764;
chunk__25741_25758 = G__25765;
count__25742_25759 = G__25766;
i__25743_25760 = G__25767;
continue;
} else {
var temp__4657__auto___25768 = cljs.core.seq.call(null,seq__25740_25757);
if(temp__4657__auto___25768){
var seq__25740_25769__$1 = temp__4657__auto___25768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25740_25769__$1)){
var c__19125__auto___25770 = cljs.core.chunk_first.call(null,seq__25740_25769__$1);
var G__25771 = cljs.core.chunk_rest.call(null,seq__25740_25769__$1);
var G__25772 = c__19125__auto___25770;
var G__25773 = cljs.core.count.call(null,c__19125__auto___25770);
var G__25774 = (0);
seq__25740_25757 = G__25771;
chunk__25741_25758 = G__25772;
count__25742_25759 = G__25773;
i__25743_25760 = G__25774;
continue;
} else {
var c_25775 = cljs.core.first.call(null,seq__25740_25769__$1);
if(om.next.mounted_QMARK_.call(null,c_25775)){
var computed_25776 = om.next.get_computed.call(null,om.next.props.call(null,c_25775));
var next_props_25777 = om.next.computed.call(null,ui__GT_props_25755.call(null,env_25756,c_25775),computed_25776);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c_25775,next_props_25777,om.next.get_state.call(null,c_25775)))){
if(!((next_props_25777 == null))){
om.next.update_component_BANG_.call(null,c_25775,next_props_25777);
} else {
c_25775.forceUpdate();
}
} else {
}
} else {
}

var G__25778 = cljs.core.next.call(null,seq__25740_25769__$1);
var G__25779 = null;
var G__25780 = (0);
var G__25781 = (0);
seq__25740_25757 = G__25778;
chunk__25741_25758 = G__25779;
count__25742_25759 = G__25780;
i__25743_25760 = G__25781;
continue;
}
} else {
}
}
break;
}

}
}

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(((!((root_class == null)))?(((false) || (root_class.om$next$IQuery$))?true:(((!root_class.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class))){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__18310__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__18310__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__18310__auto__;
}
})())){
var new_state_25782 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_25783 = cljs.core.meta.call(null,new_state_25782);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_25782,refs_25783));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);

om.next.protocols.queue_BANG_.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null));
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_25745 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_25746 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__4657__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__4657__auto__)){
var c_SINGLEQUOTE_ = temp__4657__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25746;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25745;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__18322__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__18322__auto__ = target;
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__25728_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__25728_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__18322__auto__ = target;
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

return om.next.schedule_render_BANG_.call(null,this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__4657__auto___25784 = om.next.get_query.call(null,(function (){var or__18322__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4657__auto___25784)){
var sel_25785 = temp__4657__auto___25784;
var env_25786 = om.next.to_env.call(null,self__.config);
var snds_25787 = om.next.gather_sends.call(null,env_25786,sel_25785,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_25787)){
} else {
var temp__4657__auto___25788__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4657__auto___25788__$1)){
var send_25789 = temp__4657__auto___25788__$1;
send_25789.call(null,snds_25787,((function (send_25789,temp__4657__auto___25788__$1,env_25786,snds_25787,sel_25785,temp__4657__auto___25784,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__25729_SHARP_){
om.next.merge_BANG_.call(null,this$__$1,p1__25729_SHARP_);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_25786,sel_25785));
});})(send_25789,temp__4657__auto___25788__$1,env_25786,snds_25787,sel_25785,temp__4657__auto___25784,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(((!((root == null)))?(((false) || (root.om$next$IQuery$))?true:(((!root.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root))){
return om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4657__auto__)){
var remove = temp__4657__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18950__auto__,writer__18951__auto__,opts__18952__auto__){
var self__ = this;
var this__18950__auto____$1 = this;
var pr_pair__18953__auto__ = ((function (this__18950__auto____$1){
return (function (keyval__18954__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18951__auto__,cljs.core.pr_writer,""," ","",opts__18952__auto__,keyval__18954__auto__);
});})(this__18950__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18951__auto__,pr_pair__18953__auto__,"#om.next.Reconciler{",", ","}",opts__18952__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25734){
var self__ = this;
var G__25734__$1 = this;
return (new cljs.core.RecordIter((0),G__25734__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18934__auto__){
var self__ = this;
var this__18934__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18930__auto__){
var self__ = this;
var this__18930__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18940__auto__){
var self__ = this;
var this__18940__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18931__auto__){
var self__ = this;
var this__18931__auto____$1 = this;
var h__18757__auto__ = self__.__hash;
if(!((h__18757__auto__ == null))){
return h__18757__auto__;
} else {
var h__18757__auto____$1 = cljs.core.hash_imap.call(null,this__18931__auto____$1);
self__.__hash = h__18757__auto____$1;

return h__18757__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18932__auto__,other__18933__auto__){
var self__ = this;
var this__18932__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18310__auto__ = other__18933__auto__;
if(cljs.core.truth_(and__18310__auto__)){
var and__18310__auto____$1 = (this__18932__auto____$1.constructor === other__18933__auto__.constructor);
if(and__18310__auto____$1){
return cljs.core.equiv_map.call(null,this__18932__auto____$1,other__18933__auto__);
} else {
return and__18310__auto____$1;
}
} else {
return and__18310__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18945__auto__,k__18946__auto__){
var self__ = this;
var this__18945__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__18946__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18945__auto____$1),self__.__meta),k__18946__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18946__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18943__auto__,k__18944__auto__,G__25734){
var self__ = this;
var this__18943__auto____$1 = this;
var pred__25748 = cljs.core.keyword_identical_QMARK_;
var expr__25749 = k__18944__auto__;
if(cljs.core.truth_(pred__25748.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__25749))){
return (new om.next.Reconciler(G__25734,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25748.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__25749))){
return (new om.next.Reconciler(self__.config,G__25734,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18944__auto__,G__25734),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18948__auto__){
var self__ = this;
var this__18948__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18935__auto__,G__25734){
var self__ = this;
var this__18935__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__25734,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18941__auto__,entry__18942__auto__){
var self__ = this;
var this__18941__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18942__auto__)){
return cljs.core._assoc.call(null,this__18941__auto____$1,cljs.core._nth.call(null,entry__18942__auto__,(0)),cljs.core._nth.call(null,entry__18942__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18941__auto____$1,entry__18942__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__18970__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__18970__auto__,writer__18971__auto__){
return cljs.core._write.call(null,writer__18971__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__25736){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__25736),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__25736),null,cljs.core.dissoc.call(null,G__25736,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__25790,c){
var map__25793 = p__25790;
var map__25793__$1 = ((((!((map__25793 == null)))?((((map__25793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);
var env = map__25793__$1;
var parser = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (cljs.core.truth_((function (){var and__18310__auto__ = pathopt;
if(and__18310__auto__){
var and__18310__auto____$1 = om.next.ident_QMARK_.call(null,c);
if(and__18310__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__18310__auto____$1;
}
} else {
return and__18310__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__4657__auto___25795 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4657__auto___25795)){
var l_25796 = temp__4657__auto___25795;
var dt_25797 = (e - s);
if(((16) < dt_25797)){
goog.log.warning(l_25796,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_25797),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
om.next.default_migrate = (function om$next$default_migrate(pure,query,tempids,id_key){
var dissoc_in = (function om$next$default_migrate_$_dissoc_in(pure__$1,p__25828){
var vec__25830 = p__25828;
var table = cljs.core.nth.call(null,vec__25830,(0),null);
var id = cljs.core.nth.call(null,vec__25830,(1),null);
return cljs.core.assoc.call(null,pure__$1,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure__$1,table),id));
});
var step = (function om$next$default_migrate_$_step(pure__$1,p__25831){
var vec__25835 = p__25831;
var old = cljs.core.nth.call(null,vec__25835,(0),null);
var vec__25836 = cljs.core.nth.call(null,vec__25835,(1),null);
var _ = cljs.core.nth.call(null,vec__25836,(0),null);
var id = cljs.core.nth.call(null,vec__25836,(1),null);
var new$ = vec__25836;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure__$1,old),new$,(function (){var G__25837 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure__$1,old),cljs.core.get_in.call(null,pure__$1,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__25837,id_key,id);
} else {
return G__25837;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return pure;
}
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__25843){
var map__25847 = p__25843;
var map__25847__$1 = ((((!((map__25847 == null)))?((((map__25847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25847):map__25847);
var config = map__25847__$1;
var root_render = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__25847,map__25847__$1,config){
return (function (p1__25840_SHARP_,p2__25841_SHARP_){
return ReactDOM.render(p1__25840_SHARP_,p2__25841_SHARP_);
});})(map__25847,map__25847__$1,config))
);
var normalize = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var pathopt = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var id_key = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__25847,map__25847__$1,config,root_render,normalize,pathopt,id_key){
return (function (p1__25838_SHARP_,p2__25839_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__25838_SHARP_,p2__25839_SHARP_);
});})(map__25847,map__25847__$1,config,root_render,normalize,pathopt,id_key))
);
var remotes = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var history = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var merge_ref = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),om.next.default_merge_ref);
var state = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__25847,map__25847__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__25842_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__25842_SHARP_);
});})(map__25847,map__25847__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__25847__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__25847,map__25847__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__25847,map__25847__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[pathopt,id_key,merge_sends,remotes,migrate,om.next.cache.cache.call(null,history),merge_ref,state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__18322__auto__ = !(norm_QMARK_);
if(or__18322__auto__){
return or__18322__auto__;
} else {
return normalize;
}
})()]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args25850 = [];
var len__19380__auto___25853 = arguments.length;
var i__19381__auto___25854 = (0);
while(true){
if((i__19381__auto___25854 < len__19380__auto___25853)){
args25850.push((arguments[i__19381__auto___25854]));

var G__25855 = (i__19381__auto___25854 + (1));
i__19381__auto___25854 = G__25855;
continue;
} else {
}
break;
}

var G__25852 = args25850.length;
switch (G__25852) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25850.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args25857 = [];
var len__19380__auto___25860 = arguments.length;
var i__19381__auto___25861 = (0);
while(true){
if((i__19381__auto___25861 < len__19380__auto___25860)){
args25857.push((arguments[i__19381__auto___25861]));

var G__25862 = (i__19381__auto___25861 + (1));
i__19381__auto___25861 = G__25862;
continue;
} else {
}
break;
}

var G__25859 = args25857.length;
switch (G__25859) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25857.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args25864 = [];
var len__19380__auto___25867 = arguments.length;
var i__19381__auto___25868 = (0);
while(true){
if((i__19381__auto___25868 < len__19380__auto___25867)){
args25864.push((arguments[i__19381__auto___25868]));

var G__25869 = (i__19381__auto___25868 + (1));
i__19381__auto___25868 = G__25869;
continue;
} else {
}
break;
}

var G__25866 = args25864.length;
switch (G__25866) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25864.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=next.js.map