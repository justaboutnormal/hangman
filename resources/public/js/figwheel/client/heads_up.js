// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19387__auto__ = [];
var len__19380__auto___27253 = arguments.length;
var i__19381__auto___27254 = (0);
while(true){
if((i__19381__auto___27254 < len__19380__auto___27253)){
args__19387__auto__.push((arguments[i__19381__auto___27254]));

var G__27255 = (i__19381__auto___27254 + (1));
i__19381__auto___27254 = G__27255;
continue;
} else {
}
break;
}

var argseq__19388__auto__ = ((((2) < args__19387__auto__.length))?(new cljs.core.IndexedSeq(args__19387__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19388__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27245_27256 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27246_27257 = null;
var count__27247_27258 = (0);
var i__27248_27259 = (0);
while(true){
if((i__27248_27259 < count__27247_27258)){
var k_27260 = cljs.core._nth.call(null,chunk__27246_27257,i__27248_27259);
e.setAttribute(cljs.core.name.call(null,k_27260),cljs.core.get.call(null,attrs,k_27260));

var G__27261 = seq__27245_27256;
var G__27262 = chunk__27246_27257;
var G__27263 = count__27247_27258;
var G__27264 = (i__27248_27259 + (1));
seq__27245_27256 = G__27261;
chunk__27246_27257 = G__27262;
count__27247_27258 = G__27263;
i__27248_27259 = G__27264;
continue;
} else {
var temp__4657__auto___27265 = cljs.core.seq.call(null,seq__27245_27256);
if(temp__4657__auto___27265){
var seq__27245_27266__$1 = temp__4657__auto___27265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245_27266__$1)){
var c__19125__auto___27267 = cljs.core.chunk_first.call(null,seq__27245_27266__$1);
var G__27268 = cljs.core.chunk_rest.call(null,seq__27245_27266__$1);
var G__27269 = c__19125__auto___27267;
var G__27270 = cljs.core.count.call(null,c__19125__auto___27267);
var G__27271 = (0);
seq__27245_27256 = G__27268;
chunk__27246_27257 = G__27269;
count__27247_27258 = G__27270;
i__27248_27259 = G__27271;
continue;
} else {
var k_27272 = cljs.core.first.call(null,seq__27245_27266__$1);
e.setAttribute(cljs.core.name.call(null,k_27272),cljs.core.get.call(null,attrs,k_27272));

var G__27273 = cljs.core.next.call(null,seq__27245_27266__$1);
var G__27274 = null;
var G__27275 = (0);
var G__27276 = (0);
seq__27245_27256 = G__27273;
chunk__27246_27257 = G__27274;
count__27247_27258 = G__27275;
i__27248_27259 = G__27276;
continue;
}
} else {
}
}
break;
}

var seq__27249_27277 = cljs.core.seq.call(null,children);
var chunk__27250_27278 = null;
var count__27251_27279 = (0);
var i__27252_27280 = (0);
while(true){
if((i__27252_27280 < count__27251_27279)){
var ch_27281 = cljs.core._nth.call(null,chunk__27250_27278,i__27252_27280);
e.appendChild(ch_27281);

var G__27282 = seq__27249_27277;
var G__27283 = chunk__27250_27278;
var G__27284 = count__27251_27279;
var G__27285 = (i__27252_27280 + (1));
seq__27249_27277 = G__27282;
chunk__27250_27278 = G__27283;
count__27251_27279 = G__27284;
i__27252_27280 = G__27285;
continue;
} else {
var temp__4657__auto___27286 = cljs.core.seq.call(null,seq__27249_27277);
if(temp__4657__auto___27286){
var seq__27249_27287__$1 = temp__4657__auto___27286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27249_27287__$1)){
var c__19125__auto___27288 = cljs.core.chunk_first.call(null,seq__27249_27287__$1);
var G__27289 = cljs.core.chunk_rest.call(null,seq__27249_27287__$1);
var G__27290 = c__19125__auto___27288;
var G__27291 = cljs.core.count.call(null,c__19125__auto___27288);
var G__27292 = (0);
seq__27249_27277 = G__27289;
chunk__27250_27278 = G__27290;
count__27251_27279 = G__27291;
i__27252_27280 = G__27292;
continue;
} else {
var ch_27293 = cljs.core.first.call(null,seq__27249_27287__$1);
e.appendChild(ch_27293);

var G__27294 = cljs.core.next.call(null,seq__27249_27287__$1);
var G__27295 = null;
var G__27296 = (0);
var G__27297 = (0);
seq__27249_27277 = G__27294;
chunk__27250_27278 = G__27295;
count__27251_27279 = G__27296;
i__27252_27280 = G__27297;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27242){
var G__27243 = cljs.core.first.call(null,seq27242);
var seq27242__$1 = cljs.core.next.call(null,seq27242);
var G__27244 = cljs.core.first.call(null,seq27242__$1);
var seq27242__$2 = cljs.core.next.call(null,seq27242__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27243,G__27244,seq27242__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19235__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19236__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19239__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19235__auto__,prefer_table__19236__auto__,method_cache__19237__auto__,cached_hierarchy__19238__auto__,hierarchy__19239__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19235__auto__,prefer_table__19236__auto__,method_cache__19237__auto__,cached_hierarchy__19238__auto__,hierarchy__19239__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19239__auto__,method_table__19235__auto__,prefer_table__19236__auto__,method_cache__19237__auto__,cached_hierarchy__19238__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27298 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27298.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27298.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27298.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27298);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27299,st_map){
var map__27304 = p__27299;
var map__27304__$1 = ((((!((map__27304 == null)))?((((map__27304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27304):map__27304);
var container_el = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27304,map__27304__$1,container_el){
return (function (p__27306){
var vec__27307 = p__27306;
var k = cljs.core.nth.call(null,vec__27307,(0),null);
var v = cljs.core.nth.call(null,vec__27307,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27304,map__27304__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27308,dom_str){
var map__27311 = p__27308;
var map__27311__$1 = ((((!((map__27311 == null)))?((((map__27311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27311):map__27311);
var c = map__27311__$1;
var content_area_el = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27313){
var map__27316 = p__27313;
var map__27316__$1 = ((((!((map__27316 == null)))?((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var content_area_el = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_27359){
var state_val_27360 = (state_27359[(1)]);
if((state_val_27360 === (1))){
var inst_27344 = (state_27359[(7)]);
var inst_27344__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27345 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27346 = ["10px","10px","100%","68px","1.0"];
var inst_27347 = cljs.core.PersistentHashMap.fromArrays(inst_27345,inst_27346);
var inst_27348 = cljs.core.merge.call(null,inst_27347,style);
var inst_27349 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27344__$1,inst_27348);
var inst_27350 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27344__$1,msg);
var inst_27351 = cljs.core.async.timeout.call(null,(300));
var state_27359__$1 = (function (){var statearr_27361 = state_27359;
(statearr_27361[(7)] = inst_27344__$1);

(statearr_27361[(8)] = inst_27350);

(statearr_27361[(9)] = inst_27349);

return statearr_27361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27359__$1,(2),inst_27351);
} else {
if((state_val_27360 === (2))){
var inst_27344 = (state_27359[(7)]);
var inst_27353 = (state_27359[(2)]);
var inst_27354 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27355 = ["auto"];
var inst_27356 = cljs.core.PersistentHashMap.fromArrays(inst_27354,inst_27355);
var inst_27357 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27344,inst_27356);
var state_27359__$1 = (function (){var statearr_27362 = state_27359;
(statearr_27362[(10)] = inst_27353);

return statearr_27362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27359__$1,inst_27357);
} else {
return null;
}
}
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto____0 = (function (){
var statearr_27366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27366[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto__);

(statearr_27366[(1)] = (1));

return statearr_27366;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto____1 = (function (state_27359){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_27359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e27367){if((e27367 instanceof Object)){
var ex__22122__auto__ = e27367;
var statearr_27368_27370 = state_27359;
(statearr_27368_27370[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27371 = state_27359;
state_27359 = G__27371;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto__ = function(state_27359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto____1.call(this,state_27359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_27369 = f__22231__auto__.call(null);
(statearr_27369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_27369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27373 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27373,(0),null);
var ln = cljs.core.nth.call(null,vec__27373,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27376 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27376,(0),null);
var file_line = cljs.core.nth.call(null,vec__27376,(1),null);
var file_column = cljs.core.nth.call(null,vec__27376,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27376,file_name,file_line,file_column){
return (function (p1__27374_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27374_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27376,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18322__auto__ = file_line;
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
var and__18310__auto__ = cause;
if(cljs.core.truth_(and__18310__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18310__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27379 = figwheel.client.heads_up.ensure_container.call(null);
var map__27379__$1 = ((((!((map__27379 == null)))?((((map__27379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27379):map__27379);
var content_area_el = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_27427){
var state_val_27428 = (state_27427[(1)]);
if((state_val_27428 === (1))){
var inst_27410 = (state_27427[(7)]);
var inst_27410__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27411 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27412 = ["0.0"];
var inst_27413 = cljs.core.PersistentHashMap.fromArrays(inst_27411,inst_27412);
var inst_27414 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27410__$1,inst_27413);
var inst_27415 = cljs.core.async.timeout.call(null,(300));
var state_27427__$1 = (function (){var statearr_27429 = state_27427;
(statearr_27429[(8)] = inst_27414);

(statearr_27429[(7)] = inst_27410__$1);

return statearr_27429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27427__$1,(2),inst_27415);
} else {
if((state_val_27428 === (2))){
var inst_27410 = (state_27427[(7)]);
var inst_27417 = (state_27427[(2)]);
var inst_27418 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27419 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27420 = cljs.core.PersistentHashMap.fromArrays(inst_27418,inst_27419);
var inst_27421 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27410,inst_27420);
var inst_27422 = cljs.core.async.timeout.call(null,(200));
var state_27427__$1 = (function (){var statearr_27430 = state_27427;
(statearr_27430[(9)] = inst_27421);

(statearr_27430[(10)] = inst_27417);

return statearr_27430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27427__$1,(3),inst_27422);
} else {
if((state_val_27428 === (3))){
var inst_27410 = (state_27427[(7)]);
var inst_27424 = (state_27427[(2)]);
var inst_27425 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27410,"");
var state_27427__$1 = (function (){var statearr_27431 = state_27427;
(statearr_27431[(11)] = inst_27424);

return statearr_27431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27427__$1,inst_27425);
} else {
return null;
}
}
}
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22119__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22119__auto____0 = (function (){
var statearr_27435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27435[(0)] = figwheel$client$heads_up$clear_$_state_machine__22119__auto__);

(statearr_27435[(1)] = (1));

return statearr_27435;
});
var figwheel$client$heads_up$clear_$_state_machine__22119__auto____1 = (function (state_27427){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_27427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e27436){if((e27436 instanceof Object)){
var ex__22122__auto__ = e27436;
var statearr_27437_27439 = state_27427;
(statearr_27437_27439[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27440 = state_27427;
state_27427 = G__27440;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22119__auto__ = function(state_27427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22119__auto____1.call(this,state_27427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22119__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22119__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_27438 = f__22231__auto__.call(null);
(statearr_27438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_27438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_27472){
var state_val_27473 = (state_27472[(1)]);
if((state_val_27473 === (1))){
var inst_27462 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27472__$1,(2),inst_27462);
} else {
if((state_val_27473 === (2))){
var inst_27464 = (state_27472[(2)]);
var inst_27465 = cljs.core.async.timeout.call(null,(400));
var state_27472__$1 = (function (){var statearr_27474 = state_27472;
(statearr_27474[(7)] = inst_27464);

return statearr_27474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27472__$1,(3),inst_27465);
} else {
if((state_val_27473 === (3))){
var inst_27467 = (state_27472[(2)]);
var inst_27468 = figwheel.client.heads_up.clear.call(null);
var state_27472__$1 = (function (){var statearr_27475 = state_27472;
(statearr_27475[(8)] = inst_27467);

return statearr_27475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27472__$1,(4),inst_27468);
} else {
if((state_val_27473 === (4))){
var inst_27470 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27472__$1,inst_27470);
} else {
return null;
}
}
}
}
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto____0 = (function (){
var statearr_27479 = [null,null,null,null,null,null,null,null,null];
(statearr_27479[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto__);

(statearr_27479[(1)] = (1));

return statearr_27479;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto____1 = (function (state_27472){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_27472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e27480){if((e27480 instanceof Object)){
var ex__22122__auto__ = e27480;
var statearr_27481_27483 = state_27472;
(statearr_27481_27483[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27484 = state_27472;
state_27472 = G__27484;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto__ = function(state_27472){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto____1.call(this,state_27472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_27482 = f__22231__auto__.call(null);
(statearr_27482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map