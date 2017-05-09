// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27487 = cljs.core._EQ_;
var expr__27488 = (function (){var or__18322__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27487.call(null,"true",expr__27488))){
return true;
} else {
if(cljs.core.truth_(pred__27487.call(null,"false",expr__27488))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27488)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27490__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27491__i = 0, G__27491__a = new Array(arguments.length -  0);
while (G__27491__i < G__27491__a.length) {G__27491__a[G__27491__i] = arguments[G__27491__i + 0]; ++G__27491__i;}
  args = new cljs.core.IndexedSeq(G__27491__a,0);
} 
return G__27490__delegate.call(this,args);};
G__27490.cljs$lang$maxFixedArity = 0;
G__27490.cljs$lang$applyTo = (function (arglist__27492){
var args = cljs.core.seq(arglist__27492);
return G__27490__delegate(args);
});
G__27490.cljs$core$IFn$_invoke$arity$variadic = G__27490__delegate;
return G__27490;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27493){
var map__27496 = p__27493;
var map__27496__$1 = ((((!((map__27496 == null)))?((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var message = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18322__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18310__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18310__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18310__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22230__auto___27658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___27658,ch){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___27658,ch){
return (function (state_27627){
var state_val_27628 = (state_27627[(1)]);
if((state_val_27628 === (7))){
var inst_27623 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27629_27659 = state_27627__$1;
(statearr_27629_27659[(2)] = inst_27623);

(statearr_27629_27659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (1))){
var state_27627__$1 = state_27627;
var statearr_27630_27660 = state_27627__$1;
(statearr_27630_27660[(2)] = null);

(statearr_27630_27660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (4))){
var inst_27580 = (state_27627[(7)]);
var inst_27580__$1 = (state_27627[(2)]);
var state_27627__$1 = (function (){var statearr_27631 = state_27627;
(statearr_27631[(7)] = inst_27580__$1);

return statearr_27631;
})();
if(cljs.core.truth_(inst_27580__$1)){
var statearr_27632_27661 = state_27627__$1;
(statearr_27632_27661[(1)] = (5));

} else {
var statearr_27633_27662 = state_27627__$1;
(statearr_27633_27662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (15))){
var inst_27587 = (state_27627[(8)]);
var inst_27602 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27587);
var inst_27603 = cljs.core.first.call(null,inst_27602);
var inst_27604 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27603);
var inst_27605 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27604)].join('');
var inst_27606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27605);
var state_27627__$1 = state_27627;
var statearr_27634_27663 = state_27627__$1;
(statearr_27634_27663[(2)] = inst_27606);

(statearr_27634_27663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (13))){
var inst_27611 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27635_27664 = state_27627__$1;
(statearr_27635_27664[(2)] = inst_27611);

(statearr_27635_27664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (6))){
var state_27627__$1 = state_27627;
var statearr_27636_27665 = state_27627__$1;
(statearr_27636_27665[(2)] = null);

(statearr_27636_27665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (17))){
var inst_27609 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27637_27666 = state_27627__$1;
(statearr_27637_27666[(2)] = inst_27609);

(statearr_27637_27666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (3))){
var inst_27625 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27627__$1,inst_27625);
} else {
if((state_val_27628 === (12))){
var inst_27586 = (state_27627[(9)]);
var inst_27600 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27586,opts);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27600)){
var statearr_27638_27667 = state_27627__$1;
(statearr_27638_27667[(1)] = (15));

} else {
var statearr_27639_27668 = state_27627__$1;
(statearr_27639_27668[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (2))){
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(4),ch);
} else {
if((state_val_27628 === (11))){
var inst_27587 = (state_27627[(8)]);
var inst_27592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27593 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27587);
var inst_27594 = cljs.core.async.timeout.call(null,(1000));
var inst_27595 = [inst_27593,inst_27594];
var inst_27596 = (new cljs.core.PersistentVector(null,2,(5),inst_27592,inst_27595,null));
var state_27627__$1 = state_27627;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27627__$1,(14),inst_27596);
} else {
if((state_val_27628 === (9))){
var inst_27587 = (state_27627[(8)]);
var inst_27613 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27614 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27587);
var inst_27615 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27614);
var inst_27616 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27615)].join('');
var inst_27617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27616);
var state_27627__$1 = (function (){var statearr_27640 = state_27627;
(statearr_27640[(10)] = inst_27613);

return statearr_27640;
})();
var statearr_27641_27669 = state_27627__$1;
(statearr_27641_27669[(2)] = inst_27617);

(statearr_27641_27669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (5))){
var inst_27580 = (state_27627[(7)]);
var inst_27582 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27583 = (new cljs.core.PersistentArrayMap(null,2,inst_27582,null));
var inst_27584 = (new cljs.core.PersistentHashSet(null,inst_27583,null));
var inst_27585 = figwheel.client.focus_msgs.call(null,inst_27584,inst_27580);
var inst_27586 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27585);
var inst_27587 = cljs.core.first.call(null,inst_27585);
var inst_27588 = figwheel.client.autoload_QMARK_.call(null);
var state_27627__$1 = (function (){var statearr_27642 = state_27627;
(statearr_27642[(8)] = inst_27587);

(statearr_27642[(9)] = inst_27586);

return statearr_27642;
})();
if(cljs.core.truth_(inst_27588)){
var statearr_27643_27670 = state_27627__$1;
(statearr_27643_27670[(1)] = (8));

} else {
var statearr_27644_27671 = state_27627__$1;
(statearr_27644_27671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (14))){
var inst_27598 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27645_27672 = state_27627__$1;
(statearr_27645_27672[(2)] = inst_27598);

(statearr_27645_27672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (16))){
var state_27627__$1 = state_27627;
var statearr_27646_27673 = state_27627__$1;
(statearr_27646_27673[(2)] = null);

(statearr_27646_27673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (10))){
var inst_27619 = (state_27627[(2)]);
var state_27627__$1 = (function (){var statearr_27647 = state_27627;
(statearr_27647[(11)] = inst_27619);

return statearr_27647;
})();
var statearr_27648_27674 = state_27627__$1;
(statearr_27648_27674[(2)] = null);

(statearr_27648_27674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (8))){
var inst_27586 = (state_27627[(9)]);
var inst_27590 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27586,opts);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27590)){
var statearr_27649_27675 = state_27627__$1;
(statearr_27649_27675[(1)] = (11));

} else {
var statearr_27650_27676 = state_27627__$1;
(statearr_27650_27676[(1)] = (12));

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
});})(c__22230__auto___27658,ch))
;
return ((function (switch__22118__auto__,c__22230__auto___27658,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22119__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22119__auto____0 = (function (){
var statearr_27654 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27654[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22119__auto__);

(statearr_27654[(1)] = (1));

return statearr_27654;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22119__auto____1 = (function (state_27627){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_27627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e27655){if((e27655 instanceof Object)){
var ex__22122__auto__ = e27655;
var statearr_27656_27677 = state_27627;
(statearr_27656_27677[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27678 = state_27627;
state_27627 = G__27678;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22119__auto__ = function(state_27627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22119__auto____1.call(this,state_27627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22119__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22119__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___27658,ch))
})();
var state__22232__auto__ = (function (){var statearr_27657 = f__22231__auto__.call(null);
(statearr_27657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___27658);

return statearr_27657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___27658,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27679_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27679_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27686 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27686){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27685 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27684,_STAR_print_newline_STAR_27685,base_path_27686){
return (function() { 
var G__27687__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27688__i = 0, G__27688__a = new Array(arguments.length -  0);
while (G__27688__i < G__27688__a.length) {G__27688__a[G__27688__i] = arguments[G__27688__i + 0]; ++G__27688__i;}
  args = new cljs.core.IndexedSeq(G__27688__a,0);
} 
return G__27687__delegate.call(this,args);};
G__27687.cljs$lang$maxFixedArity = 0;
G__27687.cljs$lang$applyTo = (function (arglist__27689){
var args = cljs.core.seq(arglist__27689);
return G__27687__delegate(args);
});
G__27687.cljs$core$IFn$_invoke$arity$variadic = G__27687__delegate;
return G__27687;
})()
;})(_STAR_print_fn_STAR_27684,_STAR_print_newline_STAR_27685,base_path_27686))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27685;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27684;
}}catch (e27683){if((e27683 instanceof Error)){
var e = e27683;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27686], null));
} else {
var e = e27683;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27686))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27690){
var map__27697 = p__27690;
var map__27697__$1 = ((((!((map__27697 == null)))?((((map__27697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27697):map__27697);
var opts = map__27697__$1;
var build_id = cljs.core.get.call(null,map__27697__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27697,map__27697__$1,opts,build_id){
return (function (p__27699){
var vec__27700 = p__27699;
var map__27701 = cljs.core.nth.call(null,vec__27700,(0),null);
var map__27701__$1 = ((((!((map__27701 == null)))?((((map__27701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27701):map__27701);
var msg = map__27701__$1;
var msg_name = cljs.core.get.call(null,map__27701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27700,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27700,map__27701,map__27701__$1,msg,msg_name,_,map__27697,map__27697__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27700,map__27701,map__27701__$1,msg,msg_name,_,map__27697,map__27697__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27697,map__27697__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27707){
var vec__27708 = p__27707;
var map__27709 = cljs.core.nth.call(null,vec__27708,(0),null);
var map__27709__$1 = ((((!((map__27709 == null)))?((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var msg = map__27709__$1;
var msg_name = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27708,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27711){
var map__27721 = p__27711;
var map__27721__$1 = ((((!((map__27721 == null)))?((((map__27721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27721):map__27721);
var on_compile_warning = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27721,map__27721__$1,on_compile_warning,on_compile_fail){
return (function (p__27723){
var vec__27724 = p__27723;
var map__27725 = cljs.core.nth.call(null,vec__27724,(0),null);
var map__27725__$1 = ((((!((map__27725 == null)))?((((map__27725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27725):map__27725);
var msg = map__27725__$1;
var msg_name = cljs.core.get.call(null,map__27725__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27724,(1));
var pred__27727 = cljs.core._EQ_;
var expr__27728 = msg_name;
if(cljs.core.truth_(pred__27727.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27728))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27727.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27728))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27721,map__27721__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__,msg_hist,msg_names,msg){
return (function (state_27944){
var state_val_27945 = (state_27944[(1)]);
if((state_val_27945 === (7))){
var inst_27868 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27868)){
var statearr_27946_27992 = state_27944__$1;
(statearr_27946_27992[(1)] = (8));

} else {
var statearr_27947_27993 = state_27944__$1;
(statearr_27947_27993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (20))){
var inst_27938 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27948_27994 = state_27944__$1;
(statearr_27948_27994[(2)] = inst_27938);

(statearr_27948_27994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (27))){
var inst_27934 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27949_27995 = state_27944__$1;
(statearr_27949_27995[(2)] = inst_27934);

(statearr_27949_27995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (1))){
var inst_27861 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27861)){
var statearr_27950_27996 = state_27944__$1;
(statearr_27950_27996[(1)] = (2));

} else {
var statearr_27951_27997 = state_27944__$1;
(statearr_27951_27997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (24))){
var inst_27936 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27952_27998 = state_27944__$1;
(statearr_27952_27998[(2)] = inst_27936);

(statearr_27952_27998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (4))){
var inst_27942 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27944__$1,inst_27942);
} else {
if((state_val_27945 === (15))){
var inst_27940 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27953_27999 = state_27944__$1;
(statearr_27953_27999[(2)] = inst_27940);

(statearr_27953_27999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (21))){
var inst_27899 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27954_28000 = state_27944__$1;
(statearr_27954_28000[(2)] = inst_27899);

(statearr_27954_28000[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (31))){
var inst_27923 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27923)){
var statearr_27955_28001 = state_27944__$1;
(statearr_27955_28001[(1)] = (34));

} else {
var statearr_27956_28002 = state_27944__$1;
(statearr_27956_28002[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (32))){
var inst_27932 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27957_28003 = state_27944__$1;
(statearr_27957_28003[(2)] = inst_27932);

(statearr_27957_28003[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (33))){
var inst_27921 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27958_28004 = state_27944__$1;
(statearr_27958_28004[(2)] = inst_27921);

(statearr_27958_28004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (13))){
var inst_27882 = figwheel.client.heads_up.clear.call(null);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(16),inst_27882);
} else {
if((state_val_27945 === (22))){
var inst_27903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27904 = figwheel.client.heads_up.append_message.call(null,inst_27903);
var state_27944__$1 = state_27944;
var statearr_27959_28005 = state_27944__$1;
(statearr_27959_28005[(2)] = inst_27904);

(statearr_27959_28005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (36))){
var inst_27930 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27960_28006 = state_27944__$1;
(statearr_27960_28006[(2)] = inst_27930);

(statearr_27960_28006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (29))){
var inst_27914 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27961_28007 = state_27944__$1;
(statearr_27961_28007[(2)] = inst_27914);

(statearr_27961_28007[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (6))){
var inst_27863 = (state_27944[(7)]);
var state_27944__$1 = state_27944;
var statearr_27962_28008 = state_27944__$1;
(statearr_27962_28008[(2)] = inst_27863);

(statearr_27962_28008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (28))){
var inst_27910 = (state_27944[(2)]);
var inst_27911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27912 = figwheel.client.heads_up.display_warning.call(null,inst_27911);
var state_27944__$1 = (function (){var statearr_27963 = state_27944;
(statearr_27963[(8)] = inst_27910);

return statearr_27963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(29),inst_27912);
} else {
if((state_val_27945 === (25))){
var inst_27908 = figwheel.client.heads_up.clear.call(null);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(28),inst_27908);
} else {
if((state_val_27945 === (34))){
var inst_27925 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(37),inst_27925);
} else {
if((state_val_27945 === (17))){
var inst_27890 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27964_28009 = state_27944__$1;
(statearr_27964_28009[(2)] = inst_27890);

(statearr_27964_28009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (3))){
var inst_27880 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27880)){
var statearr_27965_28010 = state_27944__$1;
(statearr_27965_28010[(1)] = (13));

} else {
var statearr_27966_28011 = state_27944__$1;
(statearr_27966_28011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (12))){
var inst_27876 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27967_28012 = state_27944__$1;
(statearr_27967_28012[(2)] = inst_27876);

(statearr_27967_28012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (2))){
var inst_27863 = (state_27944[(7)]);
var inst_27863__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27944__$1 = (function (){var statearr_27968 = state_27944;
(statearr_27968[(7)] = inst_27863__$1);

return statearr_27968;
})();
if(cljs.core.truth_(inst_27863__$1)){
var statearr_27969_28013 = state_27944__$1;
(statearr_27969_28013[(1)] = (5));

} else {
var statearr_27970_28014 = state_27944__$1;
(statearr_27970_28014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (23))){
var inst_27906 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27906)){
var statearr_27971_28015 = state_27944__$1;
(statearr_27971_28015[(1)] = (25));

} else {
var statearr_27972_28016 = state_27944__$1;
(statearr_27972_28016[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (35))){
var state_27944__$1 = state_27944;
var statearr_27973_28017 = state_27944__$1;
(statearr_27973_28017[(2)] = null);

(statearr_27973_28017[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (19))){
var inst_27901 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27901)){
var statearr_27974_28018 = state_27944__$1;
(statearr_27974_28018[(1)] = (22));

} else {
var statearr_27975_28019 = state_27944__$1;
(statearr_27975_28019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (11))){
var inst_27872 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27976_28020 = state_27944__$1;
(statearr_27976_28020[(2)] = inst_27872);

(statearr_27976_28020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (9))){
var inst_27874 = figwheel.client.heads_up.clear.call(null);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(12),inst_27874);
} else {
if((state_val_27945 === (5))){
var inst_27865 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27944__$1 = state_27944;
var statearr_27977_28021 = state_27944__$1;
(statearr_27977_28021[(2)] = inst_27865);

(statearr_27977_28021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (14))){
var inst_27892 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27892)){
var statearr_27978_28022 = state_27944__$1;
(statearr_27978_28022[(1)] = (18));

} else {
var statearr_27979_28023 = state_27944__$1;
(statearr_27979_28023[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (26))){
var inst_27916 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27944__$1 = state_27944;
if(cljs.core.truth_(inst_27916)){
var statearr_27980_28024 = state_27944__$1;
(statearr_27980_28024[(1)] = (30));

} else {
var statearr_27981_28025 = state_27944__$1;
(statearr_27981_28025[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (16))){
var inst_27884 = (state_27944[(2)]);
var inst_27885 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27886 = figwheel.client.format_messages.call(null,inst_27885);
var inst_27887 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27888 = figwheel.client.heads_up.display_error.call(null,inst_27886,inst_27887);
var state_27944__$1 = (function (){var statearr_27982 = state_27944;
(statearr_27982[(9)] = inst_27884);

return statearr_27982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(17),inst_27888);
} else {
if((state_val_27945 === (30))){
var inst_27918 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27919 = figwheel.client.heads_up.display_warning.call(null,inst_27918);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(33),inst_27919);
} else {
if((state_val_27945 === (10))){
var inst_27878 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27983_28026 = state_27944__$1;
(statearr_27983_28026[(2)] = inst_27878);

(statearr_27983_28026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (18))){
var inst_27894 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27895 = figwheel.client.format_messages.call(null,inst_27894);
var inst_27896 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27897 = figwheel.client.heads_up.display_error.call(null,inst_27895,inst_27896);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(21),inst_27897);
} else {
if((state_val_27945 === (37))){
var inst_27927 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27984_28027 = state_27944__$1;
(statearr_27984_28027[(2)] = inst_27927);

(statearr_27984_28027[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (8))){
var inst_27870 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(11),inst_27870);
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
});})(c__22230__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22118__auto__,c__22230__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto____0 = (function (){
var statearr_27988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27988[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto__);

(statearr_27988[(1)] = (1));

return statearr_27988;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto____1 = (function (state_27944){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_27944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e27989){if((e27989 instanceof Object)){
var ex__22122__auto__ = e27989;
var statearr_27990_28028 = state_27944;
(statearr_27990_28028[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28029 = state_27944;
state_27944 = G__28029;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto__ = function(state_27944){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto____1.call(this,state_27944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__,msg_hist,msg_names,msg))
})();
var state__22232__auto__ = (function (){var statearr_27991 = f__22231__auto__.call(null);
(statearr_27991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_27991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__,msg_hist,msg_names,msg))
);

return c__22230__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22230__auto___28092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___28092,ch){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___28092,ch){
return (function (state_28075){
var state_val_28076 = (state_28075[(1)]);
if((state_val_28076 === (1))){
var state_28075__$1 = state_28075;
var statearr_28077_28093 = state_28075__$1;
(statearr_28077_28093[(2)] = null);

(statearr_28077_28093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (2))){
var state_28075__$1 = state_28075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28075__$1,(4),ch);
} else {
if((state_val_28076 === (3))){
var inst_28073 = (state_28075[(2)]);
var state_28075__$1 = state_28075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28075__$1,inst_28073);
} else {
if((state_val_28076 === (4))){
var inst_28063 = (state_28075[(7)]);
var inst_28063__$1 = (state_28075[(2)]);
var state_28075__$1 = (function (){var statearr_28078 = state_28075;
(statearr_28078[(7)] = inst_28063__$1);

return statearr_28078;
})();
if(cljs.core.truth_(inst_28063__$1)){
var statearr_28079_28094 = state_28075__$1;
(statearr_28079_28094[(1)] = (5));

} else {
var statearr_28080_28095 = state_28075__$1;
(statearr_28080_28095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (5))){
var inst_28063 = (state_28075[(7)]);
var inst_28065 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28063);
var state_28075__$1 = state_28075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28075__$1,(8),inst_28065);
} else {
if((state_val_28076 === (6))){
var state_28075__$1 = state_28075;
var statearr_28081_28096 = state_28075__$1;
(statearr_28081_28096[(2)] = null);

(statearr_28081_28096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (7))){
var inst_28071 = (state_28075[(2)]);
var state_28075__$1 = state_28075;
var statearr_28082_28097 = state_28075__$1;
(statearr_28082_28097[(2)] = inst_28071);

(statearr_28082_28097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (8))){
var inst_28067 = (state_28075[(2)]);
var state_28075__$1 = (function (){var statearr_28083 = state_28075;
(statearr_28083[(8)] = inst_28067);

return statearr_28083;
})();
var statearr_28084_28098 = state_28075__$1;
(statearr_28084_28098[(2)] = null);

(statearr_28084_28098[(1)] = (2));


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
});})(c__22230__auto___28092,ch))
;
return ((function (switch__22118__auto__,c__22230__auto___28092,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22119__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22119__auto____0 = (function (){
var statearr_28088 = [null,null,null,null,null,null,null,null,null];
(statearr_28088[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22119__auto__);

(statearr_28088[(1)] = (1));

return statearr_28088;
});
var figwheel$client$heads_up_plugin_$_state_machine__22119__auto____1 = (function (state_28075){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_28075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e28089){if((e28089 instanceof Object)){
var ex__22122__auto__ = e28089;
var statearr_28090_28099 = state_28075;
(statearr_28090_28099[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28100 = state_28075;
state_28075 = G__28100;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22119__auto__ = function(state_28075){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22119__auto____1.call(this,state_28075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22119__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22119__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___28092,ch))
})();
var state__22232__auto__ = (function (){var statearr_28091 = f__22231__auto__.call(null);
(statearr_28091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___28092);

return statearr_28091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___28092,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_28121){
var state_val_28122 = (state_28121[(1)]);
if((state_val_28122 === (1))){
var inst_28116 = cljs.core.async.timeout.call(null,(3000));
var state_28121__$1 = state_28121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28121__$1,(2),inst_28116);
} else {
if((state_val_28122 === (2))){
var inst_28118 = (state_28121[(2)]);
var inst_28119 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28121__$1 = (function (){var statearr_28123 = state_28121;
(statearr_28123[(7)] = inst_28118);

return statearr_28123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28121__$1,inst_28119);
} else {
return null;
}
}
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22119__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22119__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22119__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22119__auto____1 = (function (state_28121){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_28121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e28128){if((e28128 instanceof Object)){
var ex__22122__auto__ = e28128;
var statearr_28129_28131 = state_28121;
(statearr_28129_28131[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28132 = state_28121;
state_28121 = G__28132;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22119__auto__ = function(state_28121){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22119__auto____1.call(this,state_28121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22119__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22119__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_28130 = f__22231__auto__.call(null);
(statearr_28130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28133){
var map__28140 = p__28133;
var map__28140__$1 = ((((!((map__28140 == null)))?((((map__28140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28140):map__28140);
var ed = map__28140__$1;
var formatted_exception = cljs.core.get.call(null,map__28140__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28140__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28140__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28142_28146 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28143_28147 = null;
var count__28144_28148 = (0);
var i__28145_28149 = (0);
while(true){
if((i__28145_28149 < count__28144_28148)){
var msg_28150 = cljs.core._nth.call(null,chunk__28143_28147,i__28145_28149);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28150);

var G__28151 = seq__28142_28146;
var G__28152 = chunk__28143_28147;
var G__28153 = count__28144_28148;
var G__28154 = (i__28145_28149 + (1));
seq__28142_28146 = G__28151;
chunk__28143_28147 = G__28152;
count__28144_28148 = G__28153;
i__28145_28149 = G__28154;
continue;
} else {
var temp__4657__auto___28155 = cljs.core.seq.call(null,seq__28142_28146);
if(temp__4657__auto___28155){
var seq__28142_28156__$1 = temp__4657__auto___28155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28142_28156__$1)){
var c__19125__auto___28157 = cljs.core.chunk_first.call(null,seq__28142_28156__$1);
var G__28158 = cljs.core.chunk_rest.call(null,seq__28142_28156__$1);
var G__28159 = c__19125__auto___28157;
var G__28160 = cljs.core.count.call(null,c__19125__auto___28157);
var G__28161 = (0);
seq__28142_28146 = G__28158;
chunk__28143_28147 = G__28159;
count__28144_28148 = G__28160;
i__28145_28149 = G__28161;
continue;
} else {
var msg_28162 = cljs.core.first.call(null,seq__28142_28156__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28162);

var G__28163 = cljs.core.next.call(null,seq__28142_28156__$1);
var G__28164 = null;
var G__28165 = (0);
var G__28166 = (0);
seq__28142_28146 = G__28163;
chunk__28143_28147 = G__28164;
count__28144_28148 = G__28165;
i__28145_28149 = G__28166;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28167){
var map__28170 = p__28167;
var map__28170__$1 = ((((!((map__28170 == null)))?((((map__28170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);
var w = map__28170__$1;
var message = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18310__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18310__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18310__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28178 = cljs.core.seq.call(null,plugins);
var chunk__28179 = null;
var count__28180 = (0);
var i__28181 = (0);
while(true){
if((i__28181 < count__28180)){
var vec__28182 = cljs.core._nth.call(null,chunk__28179,i__28181);
var k = cljs.core.nth.call(null,vec__28182,(0),null);
var plugin = cljs.core.nth.call(null,vec__28182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28184 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28178,chunk__28179,count__28180,i__28181,pl_28184,vec__28182,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28184.call(null,msg_hist);
});})(seq__28178,chunk__28179,count__28180,i__28181,pl_28184,vec__28182,k,plugin))
);
} else {
}

var G__28185 = seq__28178;
var G__28186 = chunk__28179;
var G__28187 = count__28180;
var G__28188 = (i__28181 + (1));
seq__28178 = G__28185;
chunk__28179 = G__28186;
count__28180 = G__28187;
i__28181 = G__28188;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28178);
if(temp__4657__auto__){
var seq__28178__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28178__$1)){
var c__19125__auto__ = cljs.core.chunk_first.call(null,seq__28178__$1);
var G__28189 = cljs.core.chunk_rest.call(null,seq__28178__$1);
var G__28190 = c__19125__auto__;
var G__28191 = cljs.core.count.call(null,c__19125__auto__);
var G__28192 = (0);
seq__28178 = G__28189;
chunk__28179 = G__28190;
count__28180 = G__28191;
i__28181 = G__28192;
continue;
} else {
var vec__28183 = cljs.core.first.call(null,seq__28178__$1);
var k = cljs.core.nth.call(null,vec__28183,(0),null);
var plugin = cljs.core.nth.call(null,vec__28183,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28193 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28178,chunk__28179,count__28180,i__28181,pl_28193,vec__28183,k,plugin,seq__28178__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28193.call(null,msg_hist);
});})(seq__28178,chunk__28179,count__28180,i__28181,pl_28193,vec__28183,k,plugin,seq__28178__$1,temp__4657__auto__))
);
} else {
}

var G__28194 = cljs.core.next.call(null,seq__28178__$1);
var G__28195 = null;
var G__28196 = (0);
var G__28197 = (0);
seq__28178 = G__28194;
chunk__28179 = G__28195;
count__28180 = G__28196;
i__28181 = G__28197;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28198 = [];
var len__19380__auto___28201 = arguments.length;
var i__19381__auto___28202 = (0);
while(true){
if((i__19381__auto___28202 < len__19380__auto___28201)){
args28198.push((arguments[i__19381__auto___28202]));

var G__28203 = (i__19381__auto___28202 + (1));
i__19381__auto___28202 = G__28203;
continue;
} else {
}
break;
}

var G__28200 = args28198.length;
switch (G__28200) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28198.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19387__auto__ = [];
var len__19380__auto___28209 = arguments.length;
var i__19381__auto___28210 = (0);
while(true){
if((i__19381__auto___28210 < len__19380__auto___28209)){
args__19387__auto__.push((arguments[i__19381__auto___28210]));

var G__28211 = (i__19381__auto___28210 + (1));
i__19381__auto___28210 = G__28211;
continue;
} else {
}
break;
}

var argseq__19388__auto__ = ((((0) < args__19387__auto__.length))?(new cljs.core.IndexedSeq(args__19387__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19388__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28206){
var map__28207 = p__28206;
var map__28207__$1 = ((((!((map__28207 == null)))?((((map__28207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28207):map__28207);
var opts = map__28207__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28205){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28205));
});

//# sourceMappingURL=client.js.map