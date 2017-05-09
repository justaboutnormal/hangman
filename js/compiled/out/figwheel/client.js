// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28831 = cljs.core._EQ_;
var expr__28832 = (function (){var or__19143__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28831.call(null,"true",expr__28832))){
return true;
} else {
if(cljs.core.truth_(pred__28831.call(null,"false",expr__28832))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28832)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
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
var G__28834__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28835__i = 0, G__28835__a = new Array(arguments.length -  0);
while (G__28835__i < G__28835__a.length) {G__28835__a[G__28835__i] = arguments[G__28835__i + 0]; ++G__28835__i;}
  args = new cljs.core.IndexedSeq(G__28835__a,0);
} 
return G__28834__delegate.call(this,args);};
G__28834.cljs$lang$maxFixedArity = 0;
G__28834.cljs$lang$applyTo = (function (arglist__28836){
var args = cljs.core.seq(arglist__28836);
return G__28834__delegate(args);
});
G__28834.cljs$core$IFn$_invoke$arity$variadic = G__28834__delegate;
return G__28834;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28837){
var map__28840 = p__28837;
var map__28840__$1 = ((((!((map__28840 == null)))?((((map__28840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28840):map__28840);
var message = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19143__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19131__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19131__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19131__auto__;
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
var c__24338__auto___29002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___29002,ch){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___29002,ch){
return (function (state_28971){
var state_val_28972 = (state_28971[(1)]);
if((state_val_28972 === (7))){
var inst_28967 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28973_29003 = state_28971__$1;
(statearr_28973_29003[(2)] = inst_28967);

(statearr_28973_29003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (1))){
var state_28971__$1 = state_28971;
var statearr_28974_29004 = state_28971__$1;
(statearr_28974_29004[(2)] = null);

(statearr_28974_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (4))){
var inst_28924 = (state_28971[(7)]);
var inst_28924__$1 = (state_28971[(2)]);
var state_28971__$1 = (function (){var statearr_28975 = state_28971;
(statearr_28975[(7)] = inst_28924__$1);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28924__$1)){
var statearr_28976_29005 = state_28971__$1;
(statearr_28976_29005[(1)] = (5));

} else {
var statearr_28977_29006 = state_28971__$1;
(statearr_28977_29006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (15))){
var inst_28931 = (state_28971[(8)]);
var inst_28946 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28931);
var inst_28947 = cljs.core.first.call(null,inst_28946);
var inst_28948 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28947);
var inst_28949 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28948)].join('');
var inst_28950 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28949);
var state_28971__$1 = state_28971;
var statearr_28978_29007 = state_28971__$1;
(statearr_28978_29007[(2)] = inst_28950);

(statearr_28978_29007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (13))){
var inst_28955 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28979_29008 = state_28971__$1;
(statearr_28979_29008[(2)] = inst_28955);

(statearr_28979_29008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (6))){
var state_28971__$1 = state_28971;
var statearr_28980_29009 = state_28971__$1;
(statearr_28980_29009[(2)] = null);

(statearr_28980_29009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (17))){
var inst_28953 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28981_29010 = state_28971__$1;
(statearr_28981_29010[(2)] = inst_28953);

(statearr_28981_29010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (3))){
var inst_28969 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28971__$1,inst_28969);
} else {
if((state_val_28972 === (12))){
var inst_28930 = (state_28971[(9)]);
var inst_28944 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28930,opts);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28944)){
var statearr_28982_29011 = state_28971__$1;
(statearr_28982_29011[(1)] = (15));

} else {
var statearr_28983_29012 = state_28971__$1;
(statearr_28983_29012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (2))){
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(4),ch);
} else {
if((state_val_28972 === (11))){
var inst_28931 = (state_28971[(8)]);
var inst_28936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28937 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28931);
var inst_28938 = cljs.core.async.timeout.call(null,(1000));
var inst_28939 = [inst_28937,inst_28938];
var inst_28940 = (new cljs.core.PersistentVector(null,2,(5),inst_28936,inst_28939,null));
var state_28971__$1 = state_28971;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28971__$1,(14),inst_28940);
} else {
if((state_val_28972 === (9))){
var inst_28931 = (state_28971[(8)]);
var inst_28957 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28958 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28931);
var inst_28959 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28958);
var inst_28960 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28959)].join('');
var inst_28961 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28960);
var state_28971__$1 = (function (){var statearr_28984 = state_28971;
(statearr_28984[(10)] = inst_28957);

return statearr_28984;
})();
var statearr_28985_29013 = state_28971__$1;
(statearr_28985_29013[(2)] = inst_28961);

(statearr_28985_29013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (5))){
var inst_28924 = (state_28971[(7)]);
var inst_28926 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28927 = (new cljs.core.PersistentArrayMap(null,2,inst_28926,null));
var inst_28928 = (new cljs.core.PersistentHashSet(null,inst_28927,null));
var inst_28929 = figwheel.client.focus_msgs.call(null,inst_28928,inst_28924);
var inst_28930 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28929);
var inst_28931 = cljs.core.first.call(null,inst_28929);
var inst_28932 = figwheel.client.autoload_QMARK_.call(null);
var state_28971__$1 = (function (){var statearr_28986 = state_28971;
(statearr_28986[(8)] = inst_28931);

(statearr_28986[(9)] = inst_28930);

return statearr_28986;
})();
if(cljs.core.truth_(inst_28932)){
var statearr_28987_29014 = state_28971__$1;
(statearr_28987_29014[(1)] = (8));

} else {
var statearr_28988_29015 = state_28971__$1;
(statearr_28988_29015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (14))){
var inst_28942 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28989_29016 = state_28971__$1;
(statearr_28989_29016[(2)] = inst_28942);

(statearr_28989_29016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (16))){
var state_28971__$1 = state_28971;
var statearr_28990_29017 = state_28971__$1;
(statearr_28990_29017[(2)] = null);

(statearr_28990_29017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (10))){
var inst_28963 = (state_28971[(2)]);
var state_28971__$1 = (function (){var statearr_28991 = state_28971;
(statearr_28991[(11)] = inst_28963);

return statearr_28991;
})();
var statearr_28992_29018 = state_28971__$1;
(statearr_28992_29018[(2)] = null);

(statearr_28992_29018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (8))){
var inst_28930 = (state_28971[(9)]);
var inst_28934 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28930,opts);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28934)){
var statearr_28993_29019 = state_28971__$1;
(statearr_28993_29019[(1)] = (11));

} else {
var statearr_28994_29020 = state_28971__$1;
(statearr_28994_29020[(1)] = (12));

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
});})(c__24338__auto___29002,ch))
;
return ((function (switch__24226__auto__,c__24338__auto___29002,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24227__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24227__auto____0 = (function (){
var statearr_28998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28998[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24227__auto__);

(statearr_28998[(1)] = (1));

return statearr_28998;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24227__auto____1 = (function (state_28971){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_28971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e28999){if((e28999 instanceof Object)){
var ex__24230__auto__ = e28999;
var statearr_29000_29021 = state_28971;
(statearr_29000_29021[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29022 = state_28971;
state_28971 = G__29022;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24227__auto__ = function(state_28971){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24227__auto____1.call(this,state_28971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24227__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24227__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___29002,ch))
})();
var state__24340__auto__ = (function (){var statearr_29001 = f__24339__auto__.call(null);
(statearr_29001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___29002);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___29002,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29023_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29023_SHARP_));
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
var base_path_29030 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29030){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29028 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29029 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29028,_STAR_print_newline_STAR_29029,base_path_29030){
return (function() { 
var G__29031__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29032__i = 0, G__29032__a = new Array(arguments.length -  0);
while (G__29032__i < G__29032__a.length) {G__29032__a[G__29032__i] = arguments[G__29032__i + 0]; ++G__29032__i;}
  args = new cljs.core.IndexedSeq(G__29032__a,0);
} 
return G__29031__delegate.call(this,args);};
G__29031.cljs$lang$maxFixedArity = 0;
G__29031.cljs$lang$applyTo = (function (arglist__29033){
var args = cljs.core.seq(arglist__29033);
return G__29031__delegate(args);
});
G__29031.cljs$core$IFn$_invoke$arity$variadic = G__29031__delegate;
return G__29031;
})()
;})(_STAR_print_fn_STAR_29028,_STAR_print_newline_STAR_29029,base_path_29030))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29029;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29028;
}}catch (e29027){if((e29027 instanceof Error)){
var e = e29027;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29030], null));
} else {
var e = e29027;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29030))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29034){
var map__29043 = p__29034;
var map__29043__$1 = ((((!((map__29043 == null)))?((((map__29043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043):map__29043);
var opts = map__29043__$1;
var build_id = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29043,map__29043__$1,opts,build_id){
return (function (p__29045){
var vec__29046 = p__29045;
var seq__29047 = cljs.core.seq.call(null,vec__29046);
var first__29048 = cljs.core.first.call(null,seq__29047);
var seq__29047__$1 = cljs.core.next.call(null,seq__29047);
var map__29049 = first__29048;
var map__29049__$1 = ((((!((map__29049 == null)))?((((map__29049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29049):map__29049);
var msg = map__29049__$1;
var msg_name = cljs.core.get.call(null,map__29049__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29047__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29046,seq__29047,first__29048,seq__29047__$1,map__29049,map__29049__$1,msg,msg_name,_,map__29043,map__29043__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29046,seq__29047,first__29048,seq__29047__$1,map__29049,map__29049__$1,msg,msg_name,_,map__29043,map__29043__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29043,map__29043__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29057){
var vec__29058 = p__29057;
var seq__29059 = cljs.core.seq.call(null,vec__29058);
var first__29060 = cljs.core.first.call(null,seq__29059);
var seq__29059__$1 = cljs.core.next.call(null,seq__29059);
var map__29061 = first__29060;
var map__29061__$1 = ((((!((map__29061 == null)))?((((map__29061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29061):map__29061);
var msg = map__29061__$1;
var msg_name = cljs.core.get.call(null,map__29061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29059__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29063){
var map__29075 = p__29063;
var map__29075__$1 = ((((!((map__29075 == null)))?((((map__29075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);
var on_compile_warning = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29075,map__29075__$1,on_compile_warning,on_compile_fail){
return (function (p__29077){
var vec__29078 = p__29077;
var seq__29079 = cljs.core.seq.call(null,vec__29078);
var first__29080 = cljs.core.first.call(null,seq__29079);
var seq__29079__$1 = cljs.core.next.call(null,seq__29079);
var map__29081 = first__29080;
var map__29081__$1 = ((((!((map__29081 == null)))?((((map__29081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29081):map__29081);
var msg = map__29081__$1;
var msg_name = cljs.core.get.call(null,map__29081__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29079__$1;
var pred__29083 = cljs.core._EQ_;
var expr__29084 = msg_name;
if(cljs.core.truth_(pred__29083.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29084))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29083.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29084))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29075,map__29075__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__,msg_hist,msg_names,msg){
return (function (state_29300){
var state_val_29301 = (state_29300[(1)]);
if((state_val_29301 === (7))){
var inst_29224 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29224)){
var statearr_29302_29348 = state_29300__$1;
(statearr_29302_29348[(1)] = (8));

} else {
var statearr_29303_29349 = state_29300__$1;
(statearr_29303_29349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (20))){
var inst_29294 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29304_29350 = state_29300__$1;
(statearr_29304_29350[(2)] = inst_29294);

(statearr_29304_29350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (27))){
var inst_29290 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29305_29351 = state_29300__$1;
(statearr_29305_29351[(2)] = inst_29290);

(statearr_29305_29351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (1))){
var inst_29217 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29217)){
var statearr_29306_29352 = state_29300__$1;
(statearr_29306_29352[(1)] = (2));

} else {
var statearr_29307_29353 = state_29300__$1;
(statearr_29307_29353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (24))){
var inst_29292 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29308_29354 = state_29300__$1;
(statearr_29308_29354[(2)] = inst_29292);

(statearr_29308_29354[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (4))){
var inst_29298 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29300__$1,inst_29298);
} else {
if((state_val_29301 === (15))){
var inst_29296 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29309_29355 = state_29300__$1;
(statearr_29309_29355[(2)] = inst_29296);

(statearr_29309_29355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (21))){
var inst_29255 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29310_29356 = state_29300__$1;
(statearr_29310_29356[(2)] = inst_29255);

(statearr_29310_29356[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (31))){
var inst_29279 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29279)){
var statearr_29311_29357 = state_29300__$1;
(statearr_29311_29357[(1)] = (34));

} else {
var statearr_29312_29358 = state_29300__$1;
(statearr_29312_29358[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (32))){
var inst_29288 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29313_29359 = state_29300__$1;
(statearr_29313_29359[(2)] = inst_29288);

(statearr_29313_29359[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (33))){
var inst_29277 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29314_29360 = state_29300__$1;
(statearr_29314_29360[(2)] = inst_29277);

(statearr_29314_29360[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (13))){
var inst_29238 = figwheel.client.heads_up.clear.call(null);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(16),inst_29238);
} else {
if((state_val_29301 === (22))){
var inst_29259 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29260 = figwheel.client.heads_up.append_message.call(null,inst_29259);
var state_29300__$1 = state_29300;
var statearr_29315_29361 = state_29300__$1;
(statearr_29315_29361[(2)] = inst_29260);

(statearr_29315_29361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (36))){
var inst_29286 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29316_29362 = state_29300__$1;
(statearr_29316_29362[(2)] = inst_29286);

(statearr_29316_29362[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (29))){
var inst_29270 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29317_29363 = state_29300__$1;
(statearr_29317_29363[(2)] = inst_29270);

(statearr_29317_29363[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (6))){
var inst_29219 = (state_29300[(7)]);
var state_29300__$1 = state_29300;
var statearr_29318_29364 = state_29300__$1;
(statearr_29318_29364[(2)] = inst_29219);

(statearr_29318_29364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (28))){
var inst_29266 = (state_29300[(2)]);
var inst_29267 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29268 = figwheel.client.heads_up.display_warning.call(null,inst_29267);
var state_29300__$1 = (function (){var statearr_29319 = state_29300;
(statearr_29319[(8)] = inst_29266);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(29),inst_29268);
} else {
if((state_val_29301 === (25))){
var inst_29264 = figwheel.client.heads_up.clear.call(null);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(28),inst_29264);
} else {
if((state_val_29301 === (34))){
var inst_29281 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(37),inst_29281);
} else {
if((state_val_29301 === (17))){
var inst_29246 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29320_29365 = state_29300__$1;
(statearr_29320_29365[(2)] = inst_29246);

(statearr_29320_29365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (3))){
var inst_29236 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29236)){
var statearr_29321_29366 = state_29300__$1;
(statearr_29321_29366[(1)] = (13));

} else {
var statearr_29322_29367 = state_29300__$1;
(statearr_29322_29367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (12))){
var inst_29232 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29323_29368 = state_29300__$1;
(statearr_29323_29368[(2)] = inst_29232);

(statearr_29323_29368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (2))){
var inst_29219 = (state_29300[(7)]);
var inst_29219__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29300__$1 = (function (){var statearr_29324 = state_29300;
(statearr_29324[(7)] = inst_29219__$1);

return statearr_29324;
})();
if(cljs.core.truth_(inst_29219__$1)){
var statearr_29325_29369 = state_29300__$1;
(statearr_29325_29369[(1)] = (5));

} else {
var statearr_29326_29370 = state_29300__$1;
(statearr_29326_29370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (23))){
var inst_29262 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29262)){
var statearr_29327_29371 = state_29300__$1;
(statearr_29327_29371[(1)] = (25));

} else {
var statearr_29328_29372 = state_29300__$1;
(statearr_29328_29372[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (35))){
var state_29300__$1 = state_29300;
var statearr_29329_29373 = state_29300__$1;
(statearr_29329_29373[(2)] = null);

(statearr_29329_29373[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (19))){
var inst_29257 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29257)){
var statearr_29330_29374 = state_29300__$1;
(statearr_29330_29374[(1)] = (22));

} else {
var statearr_29331_29375 = state_29300__$1;
(statearr_29331_29375[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (11))){
var inst_29228 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29332_29376 = state_29300__$1;
(statearr_29332_29376[(2)] = inst_29228);

(statearr_29332_29376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (9))){
var inst_29230 = figwheel.client.heads_up.clear.call(null);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(12),inst_29230);
} else {
if((state_val_29301 === (5))){
var inst_29221 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29300__$1 = state_29300;
var statearr_29333_29377 = state_29300__$1;
(statearr_29333_29377[(2)] = inst_29221);

(statearr_29333_29377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (14))){
var inst_29248 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29248)){
var statearr_29334_29378 = state_29300__$1;
(statearr_29334_29378[(1)] = (18));

} else {
var statearr_29335_29379 = state_29300__$1;
(statearr_29335_29379[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (26))){
var inst_29272 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29272)){
var statearr_29336_29380 = state_29300__$1;
(statearr_29336_29380[(1)] = (30));

} else {
var statearr_29337_29381 = state_29300__$1;
(statearr_29337_29381[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (16))){
var inst_29240 = (state_29300[(2)]);
var inst_29241 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29242 = figwheel.client.format_messages.call(null,inst_29241);
var inst_29243 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29244 = figwheel.client.heads_up.display_error.call(null,inst_29242,inst_29243);
var state_29300__$1 = (function (){var statearr_29338 = state_29300;
(statearr_29338[(9)] = inst_29240);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(17),inst_29244);
} else {
if((state_val_29301 === (30))){
var inst_29274 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29275 = figwheel.client.heads_up.display_warning.call(null,inst_29274);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(33),inst_29275);
} else {
if((state_val_29301 === (10))){
var inst_29234 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29339_29382 = state_29300__$1;
(statearr_29339_29382[(2)] = inst_29234);

(statearr_29339_29382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (18))){
var inst_29250 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29251 = figwheel.client.format_messages.call(null,inst_29250);
var inst_29252 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29253 = figwheel.client.heads_up.display_error.call(null,inst_29251,inst_29252);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(21),inst_29253);
} else {
if((state_val_29301 === (37))){
var inst_29283 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29340_29383 = state_29300__$1;
(statearr_29340_29383[(2)] = inst_29283);

(statearr_29340_29383[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (8))){
var inst_29226 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(11),inst_29226);
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
});})(c__24338__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24226__auto__,c__24338__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto____0 = (function (){
var statearr_29344 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29344[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto__);

(statearr_29344[(1)] = (1));

return statearr_29344;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto____1 = (function (state_29300){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_29300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e29345){if((e29345 instanceof Object)){
var ex__24230__auto__ = e29345;
var statearr_29346_29384 = state_29300;
(statearr_29346_29384[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29385 = state_29300;
state_29300 = G__29385;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto__ = function(state_29300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto____1.call(this,state_29300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__,msg_hist,msg_names,msg))
})();
var state__24340__auto__ = (function (){var statearr_29347 = f__24339__auto__.call(null);
(statearr_29347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_29347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__,msg_hist,msg_names,msg))
);

return c__24338__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24338__auto___29448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___29448,ch){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___29448,ch){
return (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (1))){
var state_29431__$1 = state_29431;
var statearr_29433_29449 = state_29431__$1;
(statearr_29433_29449[(2)] = null);

(statearr_29433_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (2))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(4),ch);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (4))){
var inst_29419 = (state_29431[(7)]);
var inst_29419__$1 = (state_29431[(2)]);
var state_29431__$1 = (function (){var statearr_29434 = state_29431;
(statearr_29434[(7)] = inst_29419__$1);

return statearr_29434;
})();
if(cljs.core.truth_(inst_29419__$1)){
var statearr_29435_29450 = state_29431__$1;
(statearr_29435_29450[(1)] = (5));

} else {
var statearr_29436_29451 = state_29431__$1;
(statearr_29436_29451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (5))){
var inst_29419 = (state_29431[(7)]);
var inst_29421 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29419);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(8),inst_29421);
} else {
if((state_val_29432 === (6))){
var state_29431__$1 = state_29431;
var statearr_29437_29452 = state_29431__$1;
(statearr_29437_29452[(2)] = null);

(statearr_29437_29452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (7))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29438_29453 = state_29431__$1;
(statearr_29438_29453[(2)] = inst_29427);

(statearr_29438_29453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (8))){
var inst_29423 = (state_29431[(2)]);
var state_29431__$1 = (function (){var statearr_29439 = state_29431;
(statearr_29439[(8)] = inst_29423);

return statearr_29439;
})();
var statearr_29440_29454 = state_29431__$1;
(statearr_29440_29454[(2)] = null);

(statearr_29440_29454[(1)] = (2));


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
});})(c__24338__auto___29448,ch))
;
return ((function (switch__24226__auto__,c__24338__auto___29448,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24227__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24227__auto____0 = (function (){
var statearr_29444 = [null,null,null,null,null,null,null,null,null];
(statearr_29444[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24227__auto__);

(statearr_29444[(1)] = (1));

return statearr_29444;
});
var figwheel$client$heads_up_plugin_$_state_machine__24227__auto____1 = (function (state_29431){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_29431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e29445){if((e29445 instanceof Object)){
var ex__24230__auto__ = e29445;
var statearr_29446_29455 = state_29431;
(statearr_29446_29455[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29431;
state_29431 = G__29456;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24227__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24227__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24227__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24227__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___29448,ch))
})();
var state__24340__auto__ = (function (){var statearr_29447 = f__24339__auto__.call(null);
(statearr_29447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___29448);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___29448,ch))
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
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_29477){
var state_val_29478 = (state_29477[(1)]);
if((state_val_29478 === (1))){
var inst_29472 = cljs.core.async.timeout.call(null,(3000));
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29477__$1,(2),inst_29472);
} else {
if((state_val_29478 === (2))){
var inst_29474 = (state_29477[(2)]);
var inst_29475 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29477__$1 = (function (){var statearr_29479 = state_29477;
(statearr_29479[(7)] = inst_29474);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29477__$1,inst_29475);
} else {
return null;
}
}
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24227__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24227__auto____0 = (function (){
var statearr_29483 = [null,null,null,null,null,null,null,null];
(statearr_29483[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24227__auto__);

(statearr_29483[(1)] = (1));

return statearr_29483;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24227__auto____1 = (function (state_29477){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_29477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e29484){if((e29484 instanceof Object)){
var ex__24230__auto__ = e29484;
var statearr_29485_29487 = state_29477;
(statearr_29485_29487[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29488 = state_29477;
state_29477 = G__29488;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24227__auto__ = function(state_29477){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24227__auto____1.call(this,state_29477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24227__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24227__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_29486 = f__24339__auto__.call(null);
(statearr_29486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_29486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29489){
var map__29496 = p__29489;
var map__29496__$1 = ((((!((map__29496 == null)))?((((map__29496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29496):map__29496);
var ed = map__29496__$1;
var formatted_exception = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29498_29502 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29499_29503 = null;
var count__29500_29504 = (0);
var i__29501_29505 = (0);
while(true){
if((i__29501_29505 < count__29500_29504)){
var msg_29506 = cljs.core._nth.call(null,chunk__29499_29503,i__29501_29505);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29506);

var G__29507 = seq__29498_29502;
var G__29508 = chunk__29499_29503;
var G__29509 = count__29500_29504;
var G__29510 = (i__29501_29505 + (1));
seq__29498_29502 = G__29507;
chunk__29499_29503 = G__29508;
count__29500_29504 = G__29509;
i__29501_29505 = G__29510;
continue;
} else {
var temp__4657__auto___29511 = cljs.core.seq.call(null,seq__29498_29502);
if(temp__4657__auto___29511){
var seq__29498_29512__$1 = temp__4657__auto___29511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29498_29512__$1)){
var c__19962__auto___29513 = cljs.core.chunk_first.call(null,seq__29498_29512__$1);
var G__29514 = cljs.core.chunk_rest.call(null,seq__29498_29512__$1);
var G__29515 = c__19962__auto___29513;
var G__29516 = cljs.core.count.call(null,c__19962__auto___29513);
var G__29517 = (0);
seq__29498_29502 = G__29514;
chunk__29499_29503 = G__29515;
count__29500_29504 = G__29516;
i__29501_29505 = G__29517;
continue;
} else {
var msg_29518 = cljs.core.first.call(null,seq__29498_29512__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29518);

var G__29519 = cljs.core.next.call(null,seq__29498_29512__$1);
var G__29520 = null;
var G__29521 = (0);
var G__29522 = (0);
seq__29498_29502 = G__29519;
chunk__29499_29503 = G__29520;
count__29500_29504 = G__29521;
i__29501_29505 = G__29522;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29523){
var map__29526 = p__29523;
var map__29526__$1 = ((((!((map__29526 == null)))?((((map__29526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29526):map__29526);
var w = map__29526__$1;
var message = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__19131__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19131__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19131__auto__;
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
var seq__29538 = cljs.core.seq.call(null,plugins);
var chunk__29539 = null;
var count__29540 = (0);
var i__29541 = (0);
while(true){
if((i__29541 < count__29540)){
var vec__29542 = cljs.core._nth.call(null,chunk__29539,i__29541);
var k = cljs.core.nth.call(null,vec__29542,(0),null);
var plugin = cljs.core.nth.call(null,vec__29542,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29548 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29538,chunk__29539,count__29540,i__29541,pl_29548,vec__29542,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29548.call(null,msg_hist);
});})(seq__29538,chunk__29539,count__29540,i__29541,pl_29548,vec__29542,k,plugin))
);
} else {
}

var G__29549 = seq__29538;
var G__29550 = chunk__29539;
var G__29551 = count__29540;
var G__29552 = (i__29541 + (1));
seq__29538 = G__29549;
chunk__29539 = G__29550;
count__29540 = G__29551;
i__29541 = G__29552;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29538);
if(temp__4657__auto__){
var seq__29538__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29538__$1)){
var c__19962__auto__ = cljs.core.chunk_first.call(null,seq__29538__$1);
var G__29553 = cljs.core.chunk_rest.call(null,seq__29538__$1);
var G__29554 = c__19962__auto__;
var G__29555 = cljs.core.count.call(null,c__19962__auto__);
var G__29556 = (0);
seq__29538 = G__29553;
chunk__29539 = G__29554;
count__29540 = G__29555;
i__29541 = G__29556;
continue;
} else {
var vec__29545 = cljs.core.first.call(null,seq__29538__$1);
var k = cljs.core.nth.call(null,vec__29545,(0),null);
var plugin = cljs.core.nth.call(null,vec__29545,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29557 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29538,chunk__29539,count__29540,i__29541,pl_29557,vec__29545,k,plugin,seq__29538__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29557.call(null,msg_hist);
});})(seq__29538,chunk__29539,count__29540,i__29541,pl_29557,vec__29545,k,plugin,seq__29538__$1,temp__4657__auto__))
);
} else {
}

var G__29558 = cljs.core.next.call(null,seq__29538__$1);
var G__29559 = null;
var G__29560 = (0);
var G__29561 = (0);
seq__29538 = G__29558;
chunk__29539 = G__29559;
count__29540 = G__29560;
i__29541 = G__29561;
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
var args29562 = [];
var len__20256__auto___29565 = arguments.length;
var i__20257__auto___29566 = (0);
while(true){
if((i__20257__auto___29566 < len__20256__auto___29565)){
args29562.push((arguments[i__20257__auto___29566]));

var G__29567 = (i__20257__auto___29566 + (1));
i__20257__auto___29566 = G__29567;
continue;
} else {
}
break;
}

var G__29564 = args29562.length;
switch (G__29564) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29562.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20263__auto__ = [];
var len__20256__auto___29573 = arguments.length;
var i__20257__auto___29574 = (0);
while(true){
if((i__20257__auto___29574 < len__20256__auto___29573)){
args__20263__auto__.push((arguments[i__20257__auto___29574]));

var G__29575 = (i__20257__auto___29574 + (1));
i__20257__auto___29574 = G__29575;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((0) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20264__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29570){
var map__29571 = p__29570;
var map__29571__$1 = ((((!((map__29571 == null)))?((((map__29571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29571):map__29571);
var opts = map__29571__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29569){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29569));
});


//# sourceMappingURL=client.js.map?rel=1494348453022