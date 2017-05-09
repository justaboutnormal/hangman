// Compiled by ClojureScript 1.9.521 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__23189_SHARP_,p2__23188_SHARP_){
return p2__23188_SHARP_.call(null,p1__23189_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__23191_SHARP_,p2__23190_SHARP_){
return p2__23190_SHARP_.call(null,old_state,p1__23191_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__19143__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__23192_SHARP_){
return p1__23192_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__23197 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__23197,(0),null);
var next_state = cljs.core.nth.call(null,vec__23197,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__23193_SHARP_){
return p1__23193_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__23200__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__23200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23201__i = 0, G__23201__a = new Array(arguments.length -  0);
while (G__23201__i < G__23201__a.length) {G__23201__a[G__23201__i] = arguments[G__23201__i + 0]; ++G__23201__i;}
  args = new cljs.core.IndexedSeq(G__23201__a,0);
} 
return G__23200__delegate.call(this,args);};
G__23200.cljs$lang$maxFixedArity = 0;
G__23200.cljs$lang$applyTo = (function (arglist__23202){
var args = cljs.core.seq(arglist__23202);
return G__23200__delegate(args);
});
G__23200.cljs$core$IFn$_invoke$arity$variadic = G__23200__delegate;
return G__23200;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__23203__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__23203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23204__i = 0, G__23204__a = new Array(arguments.length -  0);
while (G__23204__i < G__23204__a.length) {G__23204__a[G__23204__i] = arguments[G__23204__i + 0]; ++G__23204__i;}
  args = new cljs.core.IndexedSeq(G__23204__a,0);
} 
return G__23203__delegate.call(this,args);};
G__23203.cljs$lang$maxFixedArity = 0;
G__23203.cljs$lang$applyTo = (function (arglist__23205){
var args = cljs.core.seq(arglist__23205);
return G__23203__delegate(args);
});
G__23203.cljs$core$IFn$_invoke$arity$variadic = G__23203__delegate;
return G__23203;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__23206__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__23206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23207__i = 0, G__23207__a = new Array(arguments.length -  0);
while (G__23207__i < G__23207__a.length) {G__23207__a[G__23207__i] = arguments[G__23207__i + 0]; ++G__23207__i;}
  args = new cljs.core.IndexedSeq(G__23207__a,0);
} 
return G__23206__delegate.call(this,args);};
G__23206.cljs$lang$maxFixedArity = 0;
G__23206.cljs$lang$applyTo = (function (arglist__23208){
var args = cljs.core.seq(arglist__23208);
return G__23206__delegate(args);
});
G__23206.cljs$core$IFn$_invoke$arity$variadic = G__23206__delegate;
return G__23206;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__19143__auto__ = (function (){var and__19131__auto__ = typeof window !== 'undefined';
if(and__19131__auto__){
var or__19143__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
var or__19143__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__19143__auto____$1)){
return or__19143__auto____$1;
} else {
var or__19143__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__19143__auto____$2)){
return or__19143__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__19131__auto__;
}
})();
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return ((function (or__19143__auto__){
return (function (p1__23209_SHARP_){
return setTimeout(p1__23209_SHARP_,(16));
});
;})(or__19143__auto__))
}
})();
rum.core.batch = (function (){var or__19143__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
var or__19143__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__19143__auto____$1)){
return or__19143__auto____$1;
} else {
return ((function (or__19143__auto____$1,or__19143__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__19143__auto____$1,or__19143__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__23216 = cljs.core.seq.call(null,queue);
var chunk__23218 = null;
var count__23219 = (0);
var i__23220 = (0);
while(true){
if((i__23220 < count__23219)){
var comp = cljs.core._nth.call(null,chunk__23218,i__23220);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__23222 = seq__23216;
var G__23223 = chunk__23218;
var G__23224 = count__23219;
var G__23225 = (i__23220 + (1));
seq__23216 = G__23222;
chunk__23218 = G__23223;
count__23219 = G__23224;
i__23220 = G__23225;
continue;
} else {
var G__23226 = seq__23216;
var G__23227 = chunk__23218;
var G__23228 = count__23219;
var G__23229 = (i__23220 + (1));
seq__23216 = G__23226;
chunk__23218 = G__23227;
count__23219 = G__23228;
i__23220 = G__23229;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23216);
if(temp__4657__auto__){
var seq__23216__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23216__$1)){
var c__19962__auto__ = cljs.core.chunk_first.call(null,seq__23216__$1);
var G__23230 = cljs.core.chunk_rest.call(null,seq__23216__$1);
var G__23231 = c__19962__auto__;
var G__23232 = cljs.core.count.call(null,c__19962__auto__);
var G__23233 = (0);
seq__23216 = G__23230;
chunk__23218 = G__23231;
count__23219 = G__23232;
i__23220 = G__23233;
continue;
} else {
var comp = cljs.core.first.call(null,seq__23216__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__23234 = cljs.core.next.call(null,seq__23216__$1);
var G__23235 = null;
var G__23236 = (0);
var G__23237 = (0);
seq__23216 = G__23234;
chunk__23218 = G__23235;
count__23219 = G__23236;
i__23220 = G__23237;
continue;
} else {
var G__23238 = cljs.core.next.call(null,seq__23216__$1);
var G__23239 = null;
var G__23240 = (0);
var G__23241 = (0);
seq__23216 = G__23238;
chunk__23218 = G__23239;
count__23219 = G__23240;
i__23220 = G__23241;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args23242 = [];
var len__20256__auto___23245 = arguments.length;
var i__20257__auto___23246 = (0);
while(true){
if((i__20257__auto___23246 < len__20256__auto___23245)){
args23242.push((arguments[i__20257__auto___23246]));

var G__23247 = (i__20257__auto___23246 + (1));
i__20257__auto___23246 = G__23247;
continue;
} else {
}
break;
}

var G__23244 = args23242.length;
switch (G__23244) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23242.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_23249 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__23250 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__23250,(0),null);
var next_state = cljs.core.nth.call(null,vec__23250,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__23253_23265 = cljs.core.seq.call(null,old_reactions);
var chunk__23254_23266 = null;
var count__23255_23267 = (0);
var i__23256_23268 = (0);
while(true){
if((i__23256_23268 < count__23255_23267)){
var ref_23269 = cljs.core._nth.call(null,chunk__23254_23266,i__23256_23268);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_23269)){
} else {
cljs.core.remove_watch.call(null,ref_23269,key);
}

var G__23270 = seq__23253_23265;
var G__23271 = chunk__23254_23266;
var G__23272 = count__23255_23267;
var G__23273 = (i__23256_23268 + (1));
seq__23253_23265 = G__23270;
chunk__23254_23266 = G__23271;
count__23255_23267 = G__23272;
i__23256_23268 = G__23273;
continue;
} else {
var temp__4657__auto___23274 = cljs.core.seq.call(null,seq__23253_23265);
if(temp__4657__auto___23274){
var seq__23253_23275__$1 = temp__4657__auto___23274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23253_23275__$1)){
var c__19962__auto___23276 = cljs.core.chunk_first.call(null,seq__23253_23275__$1);
var G__23277 = cljs.core.chunk_rest.call(null,seq__23253_23275__$1);
var G__23278 = c__19962__auto___23276;
var G__23279 = cljs.core.count.call(null,c__19962__auto___23276);
var G__23280 = (0);
seq__23253_23265 = G__23277;
chunk__23254_23266 = G__23278;
count__23255_23267 = G__23279;
i__23256_23268 = G__23280;
continue;
} else {
var ref_23281 = cljs.core.first.call(null,seq__23253_23275__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_23281)){
} else {
cljs.core.remove_watch.call(null,ref_23281,key);
}

var G__23282 = cljs.core.next.call(null,seq__23253_23275__$1);
var G__23283 = null;
var G__23284 = (0);
var G__23285 = (0);
seq__23253_23265 = G__23282;
chunk__23254_23266 = G__23283;
count__23255_23267 = G__23284;
i__23256_23268 = G__23285;
continue;
}
} else {
}
}
break;
}

var seq__23257_23286 = cljs.core.seq.call(null,new_reactions);
var chunk__23258_23287 = null;
var count__23259_23288 = (0);
var i__23260_23289 = (0);
while(true){
if((i__23260_23289 < count__23259_23288)){
var ref_23290 = cljs.core._nth.call(null,chunk__23258_23287,i__23260_23289);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_23290)){
} else {
cljs.core.add_watch.call(null,ref_23290,key,((function (seq__23257_23286,chunk__23258_23287,count__23259_23288,i__23260_23289,ref_23290,comp,old_reactions,vec__23250,dom,next_state,new_reactions,key,_STAR_reactions_STAR_23249){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__23257_23286,chunk__23258_23287,count__23259_23288,i__23260_23289,ref_23290,comp,old_reactions,vec__23250,dom,next_state,new_reactions,key,_STAR_reactions_STAR_23249))
);
}

var G__23291 = seq__23257_23286;
var G__23292 = chunk__23258_23287;
var G__23293 = count__23259_23288;
var G__23294 = (i__23260_23289 + (1));
seq__23257_23286 = G__23291;
chunk__23258_23287 = G__23292;
count__23259_23288 = G__23293;
i__23260_23289 = G__23294;
continue;
} else {
var temp__4657__auto___23295 = cljs.core.seq.call(null,seq__23257_23286);
if(temp__4657__auto___23295){
var seq__23257_23296__$1 = temp__4657__auto___23295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23257_23296__$1)){
var c__19962__auto___23297 = cljs.core.chunk_first.call(null,seq__23257_23296__$1);
var G__23298 = cljs.core.chunk_rest.call(null,seq__23257_23296__$1);
var G__23299 = c__19962__auto___23297;
var G__23300 = cljs.core.count.call(null,c__19962__auto___23297);
var G__23301 = (0);
seq__23257_23286 = G__23298;
chunk__23258_23287 = G__23299;
count__23259_23288 = G__23300;
i__23260_23289 = G__23301;
continue;
} else {
var ref_23302 = cljs.core.first.call(null,seq__23257_23296__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_23302)){
} else {
cljs.core.add_watch.call(null,ref_23302,key,((function (seq__23257_23286,chunk__23258_23287,count__23259_23288,i__23260_23289,ref_23302,seq__23257_23296__$1,temp__4657__auto___23295,comp,old_reactions,vec__23250,dom,next_state,new_reactions,key,_STAR_reactions_STAR_23249){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__23257_23286,chunk__23258_23287,count__23259_23288,i__23260_23289,ref_23302,seq__23257_23296__$1,temp__4657__auto___23295,comp,old_reactions,vec__23250,dom,next_state,new_reactions,key,_STAR_reactions_STAR_23249))
);
}

var G__23303 = cljs.core.next.call(null,seq__23257_23296__$1);
var G__23304 = null;
var G__23305 = (0);
var G__23306 = (0);
seq__23257_23286 = G__23303;
chunk__23258_23287 = G__23304;
count__23259_23288 = G__23305;
i__23260_23289 = G__23306;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_23249;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_23307 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__23261_23308 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__23262_23309 = null;
var count__23263_23310 = (0);
var i__23264_23311 = (0);
while(true){
if((i__23264_23311 < count__23263_23310)){
var ref_23312 = cljs.core._nth.call(null,chunk__23262_23309,i__23264_23311);
cljs.core.remove_watch.call(null,ref_23312,key_23307);

var G__23313 = seq__23261_23308;
var G__23314 = chunk__23262_23309;
var G__23315 = count__23263_23310;
var G__23316 = (i__23264_23311 + (1));
seq__23261_23308 = G__23313;
chunk__23262_23309 = G__23314;
count__23263_23310 = G__23315;
i__23264_23311 = G__23316;
continue;
} else {
var temp__4657__auto___23317 = cljs.core.seq.call(null,seq__23261_23308);
if(temp__4657__auto___23317){
var seq__23261_23318__$1 = temp__4657__auto___23317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23261_23318__$1)){
var c__19962__auto___23319 = cljs.core.chunk_first.call(null,seq__23261_23318__$1);
var G__23320 = cljs.core.chunk_rest.call(null,seq__23261_23318__$1);
var G__23321 = c__19962__auto___23319;
var G__23322 = cljs.core.count.call(null,c__19962__auto___23319);
var G__23323 = (0);
seq__23261_23308 = G__23320;
chunk__23262_23309 = G__23321;
count__23263_23310 = G__23322;
i__23264_23311 = G__23323;
continue;
} else {
var ref_23324 = cljs.core.first.call(null,seq__23261_23318__$1);
cljs.core.remove_watch.call(null,ref_23324,key_23307);

var G__23325 = cljs.core.next.call(null,seq__23261_23318__$1);
var G__23326 = null;
var G__23327 = (0);
var G__23328 = (0);
seq__23261_23308 = G__23325;
chunk__23262_23309 = G__23326;
count__23263_23310 = G__23327;
i__23264_23311 = G__23328;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__20263__auto__ = [];
var len__20256__auto___23335 = arguments.length;
var i__20257__auto___23336 = (0);
while(true){
if((i__20257__auto___23336 < len__20256__auto___23335)){
args__20263__auto__.push((arguments[i__20257__auto___23336]));

var G__23337 = (i__20257__auto___23336 + (1));
i__20257__auto___23336 = G__23337;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((2) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20264__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__23332){
var map__23333 = p__23332;
var map__23333__$1 = ((((!((map__23333 == null)))?((((map__23333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23333):map__23333);
var options = map__23333__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq23329){
var G__23330 = cljs.core.first.call(null,seq23329);
var seq23329__$1 = cljs.core.next.call(null,seq23329);
var G__23331 = cljs.core.first.call(null,seq23329__$1);
var seq23329__$2 = cljs.core.next.call(null,seq23329__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__23330,G__23331,seq23329__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__20263__auto__ = [];
var len__20256__auto___23341 = arguments.length;
var i__20257__auto___23342 = (0);
while(true){
if((i__20257__auto___23342 < len__20256__auto___23341)){
args__20263__auto__.push((arguments[i__20257__auto___23342]));

var G__23343 = (i__20257__auto___23342 + (1));
i__20257__auto___23342 = G__23343;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((2) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20264__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq23338){
var G__23339 = cljs.core.first.call(null,seq23338);
var seq23338__$1 = cljs.core.next.call(null,seq23338);
var G__23340 = cljs.core.first.call(null,seq23338__$1);
var seq23338__$2 = cljs.core.next.call(null,seq23338__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__23339,G__23340,seq23338__$2);
});


//# sourceMappingURL=core.js.map?rel=1494348449470