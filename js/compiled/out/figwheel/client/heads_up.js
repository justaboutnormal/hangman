// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20263__auto__ = [];
var len__20256__auto___28585 = arguments.length;
var i__20257__auto___28586 = (0);
while(true){
if((i__20257__auto___28586 < len__20256__auto___28585)){
args__20263__auto__.push((arguments[i__20257__auto___28586]));

var G__28587 = (i__20257__auto___28586 + (1));
i__20257__auto___28586 = G__28587;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((2) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20264__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28577_28588 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28578_28589 = null;
var count__28579_28590 = (0);
var i__28580_28591 = (0);
while(true){
if((i__28580_28591 < count__28579_28590)){
var k_28592 = cljs.core._nth.call(null,chunk__28578_28589,i__28580_28591);
e.setAttribute(cljs.core.name.call(null,k_28592),cljs.core.get.call(null,attrs,k_28592));

var G__28593 = seq__28577_28588;
var G__28594 = chunk__28578_28589;
var G__28595 = count__28579_28590;
var G__28596 = (i__28580_28591 + (1));
seq__28577_28588 = G__28593;
chunk__28578_28589 = G__28594;
count__28579_28590 = G__28595;
i__28580_28591 = G__28596;
continue;
} else {
var temp__4657__auto___28597 = cljs.core.seq.call(null,seq__28577_28588);
if(temp__4657__auto___28597){
var seq__28577_28598__$1 = temp__4657__auto___28597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28577_28598__$1)){
var c__19962__auto___28599 = cljs.core.chunk_first.call(null,seq__28577_28598__$1);
var G__28600 = cljs.core.chunk_rest.call(null,seq__28577_28598__$1);
var G__28601 = c__19962__auto___28599;
var G__28602 = cljs.core.count.call(null,c__19962__auto___28599);
var G__28603 = (0);
seq__28577_28588 = G__28600;
chunk__28578_28589 = G__28601;
count__28579_28590 = G__28602;
i__28580_28591 = G__28603;
continue;
} else {
var k_28604 = cljs.core.first.call(null,seq__28577_28598__$1);
e.setAttribute(cljs.core.name.call(null,k_28604),cljs.core.get.call(null,attrs,k_28604));

var G__28605 = cljs.core.next.call(null,seq__28577_28598__$1);
var G__28606 = null;
var G__28607 = (0);
var G__28608 = (0);
seq__28577_28588 = G__28605;
chunk__28578_28589 = G__28606;
count__28579_28590 = G__28607;
i__28580_28591 = G__28608;
continue;
}
} else {
}
}
break;
}

var seq__28581_28609 = cljs.core.seq.call(null,children);
var chunk__28582_28610 = null;
var count__28583_28611 = (0);
var i__28584_28612 = (0);
while(true){
if((i__28584_28612 < count__28583_28611)){
var ch_28613 = cljs.core._nth.call(null,chunk__28582_28610,i__28584_28612);
e.appendChild(ch_28613);

var G__28614 = seq__28581_28609;
var G__28615 = chunk__28582_28610;
var G__28616 = count__28583_28611;
var G__28617 = (i__28584_28612 + (1));
seq__28581_28609 = G__28614;
chunk__28582_28610 = G__28615;
count__28583_28611 = G__28616;
i__28584_28612 = G__28617;
continue;
} else {
var temp__4657__auto___28618 = cljs.core.seq.call(null,seq__28581_28609);
if(temp__4657__auto___28618){
var seq__28581_28619__$1 = temp__4657__auto___28618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28581_28619__$1)){
var c__19962__auto___28620 = cljs.core.chunk_first.call(null,seq__28581_28619__$1);
var G__28621 = cljs.core.chunk_rest.call(null,seq__28581_28619__$1);
var G__28622 = c__19962__auto___28620;
var G__28623 = cljs.core.count.call(null,c__19962__auto___28620);
var G__28624 = (0);
seq__28581_28609 = G__28621;
chunk__28582_28610 = G__28622;
count__28583_28611 = G__28623;
i__28584_28612 = G__28624;
continue;
} else {
var ch_28625 = cljs.core.first.call(null,seq__28581_28619__$1);
e.appendChild(ch_28625);

var G__28626 = cljs.core.next.call(null,seq__28581_28619__$1);
var G__28627 = null;
var G__28628 = (0);
var G__28629 = (0);
seq__28581_28609 = G__28626;
chunk__28582_28610 = G__28627;
count__28583_28611 = G__28628;
i__28584_28612 = G__28629;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28574){
var G__28575 = cljs.core.first.call(null,seq28574);
var seq28574__$1 = cljs.core.next.call(null,seq28574);
var G__28576 = cljs.core.first.call(null,seq28574__$1);
var seq28574__$2 = cljs.core.next.call(null,seq28574__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28575,G__28576,seq28574__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20076__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20077__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20078__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20080__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20076__auto__,prefer_table__20077__auto__,method_cache__20078__auto__,cached_hierarchy__20079__auto__,hierarchy__20080__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20076__auto__,prefer_table__20077__auto__,method_cache__20078__auto__,cached_hierarchy__20079__auto__,hierarchy__20080__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20080__auto__,method_table__20076__auto__,prefer_table__20077__auto__,method_cache__20078__auto__,cached_hierarchy__20079__auto__));
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
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_28630 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_28630.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28630.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28630.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28630);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28631,st_map){
var map__28638 = p__28631;
var map__28638__$1 = ((((!((map__28638 == null)))?((((map__28638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28638):map__28638);
var container_el = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28638,map__28638__$1,container_el){
return (function (p__28640){
var vec__28641 = p__28640;
var k = cljs.core.nth.call(null,vec__28641,(0),null);
var v = cljs.core.nth.call(null,vec__28641,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28638,map__28638__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28644,dom_str){
var map__28647 = p__28644;
var map__28647__$1 = ((((!((map__28647 == null)))?((((map__28647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28647):map__28647);
var c = map__28647__$1;
var content_area_el = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28649){
var map__28652 = p__28649;
var map__28652__$1 = ((((!((map__28652 == null)))?((((map__28652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);
var content_area_el = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_28695){
var state_val_28696 = (state_28695[(1)]);
if((state_val_28696 === (1))){
var inst_28680 = (state_28695[(7)]);
var inst_28680__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28681 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28682 = ["10px","10px","100%","68px","1.0"];
var inst_28683 = cljs.core.PersistentHashMap.fromArrays(inst_28681,inst_28682);
var inst_28684 = cljs.core.merge.call(null,inst_28683,style);
var inst_28685 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28680__$1,inst_28684);
var inst_28686 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28680__$1,msg);
var inst_28687 = cljs.core.async.timeout.call(null,(300));
var state_28695__$1 = (function (){var statearr_28697 = state_28695;
(statearr_28697[(7)] = inst_28680__$1);

(statearr_28697[(8)] = inst_28686);

(statearr_28697[(9)] = inst_28685);

return statearr_28697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28695__$1,(2),inst_28687);
} else {
if((state_val_28696 === (2))){
var inst_28680 = (state_28695[(7)]);
var inst_28689 = (state_28695[(2)]);
var inst_28690 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28691 = ["auto"];
var inst_28692 = cljs.core.PersistentHashMap.fromArrays(inst_28690,inst_28691);
var inst_28693 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28680,inst_28692);
var state_28695__$1 = (function (){var statearr_28698 = state_28695;
(statearr_28698[(10)] = inst_28689);

return statearr_28698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28695__$1,inst_28693);
} else {
return null;
}
}
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto____0 = (function (){
var statearr_28702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28702[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto__);

(statearr_28702[(1)] = (1));

return statearr_28702;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto____1 = (function (state_28695){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_28695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e28703){if((e28703 instanceof Object)){
var ex__24230__auto__ = e28703;
var statearr_28704_28706 = state_28695;
(statearr_28704_28706[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28707 = state_28695;
state_28695 = G__28707;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto__ = function(state_28695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto____1.call(this,state_28695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_28705 = f__24339__auto__.call(null);
(statearr_28705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_28705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28711 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__28711,(0),null);
var ln = cljs.core.nth.call(null,vec__28711,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28718 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28718,(0),null);
var file_line = cljs.core.nth.call(null,vec__28718,(1),null);
var file_column = cljs.core.nth.call(null,vec__28718,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28718,file_name,file_line,file_column){
return (function (p1__28714_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.htmlEscape(p1__28714_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(vec__28718,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19143__auto__ = file_line;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
var and__19131__auto__ = cause;
if(cljs.core.truth_(and__19131__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19131__auto__;
}
}
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cause)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28723 = figwheel.client.heads_up.ensure_container.call(null);
var map__28723__$1 = ((((!((map__28723 == null)))?((((map__28723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28723):map__28723);
var content_area_el = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_28771){
var state_val_28772 = (state_28771[(1)]);
if((state_val_28772 === (1))){
var inst_28754 = (state_28771[(7)]);
var inst_28754__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28755 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28756 = ["0.0"];
var inst_28757 = cljs.core.PersistentHashMap.fromArrays(inst_28755,inst_28756);
var inst_28758 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28754__$1,inst_28757);
var inst_28759 = cljs.core.async.timeout.call(null,(300));
var state_28771__$1 = (function (){var statearr_28773 = state_28771;
(statearr_28773[(7)] = inst_28754__$1);

(statearr_28773[(8)] = inst_28758);

return statearr_28773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(2),inst_28759);
} else {
if((state_val_28772 === (2))){
var inst_28754 = (state_28771[(7)]);
var inst_28761 = (state_28771[(2)]);
var inst_28762 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28763 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28764 = cljs.core.PersistentHashMap.fromArrays(inst_28762,inst_28763);
var inst_28765 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28754,inst_28764);
var inst_28766 = cljs.core.async.timeout.call(null,(200));
var state_28771__$1 = (function (){var statearr_28774 = state_28771;
(statearr_28774[(9)] = inst_28765);

(statearr_28774[(10)] = inst_28761);

return statearr_28774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(3),inst_28766);
} else {
if((state_val_28772 === (3))){
var inst_28754 = (state_28771[(7)]);
var inst_28768 = (state_28771[(2)]);
var inst_28769 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28754,"");
var state_28771__$1 = (function (){var statearr_28775 = state_28771;
(statearr_28775[(11)] = inst_28768);

return statearr_28775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28771__$1,inst_28769);
} else {
return null;
}
}
}
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24227__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24227__auto____0 = (function (){
var statearr_28779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28779[(0)] = figwheel$client$heads_up$clear_$_state_machine__24227__auto__);

(statearr_28779[(1)] = (1));

return statearr_28779;
});
var figwheel$client$heads_up$clear_$_state_machine__24227__auto____1 = (function (state_28771){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_28771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e28780){if((e28780 instanceof Object)){
var ex__24230__auto__ = e28780;
var statearr_28781_28783 = state_28771;
(statearr_28781_28783[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28784 = state_28771;
state_28771 = G__28784;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24227__auto__ = function(state_28771){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24227__auto____1.call(this,state_28771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24227__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24227__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_28782 = f__24339__auto__.call(null);
(statearr_28782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_28782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_28816){
var state_val_28817 = (state_28816[(1)]);
if((state_val_28817 === (1))){
var inst_28806 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28816__$1,(2),inst_28806);
} else {
if((state_val_28817 === (2))){
var inst_28808 = (state_28816[(2)]);
var inst_28809 = cljs.core.async.timeout.call(null,(400));
var state_28816__$1 = (function (){var statearr_28818 = state_28816;
(statearr_28818[(7)] = inst_28808);

return statearr_28818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28816__$1,(3),inst_28809);
} else {
if((state_val_28817 === (3))){
var inst_28811 = (state_28816[(2)]);
var inst_28812 = figwheel.client.heads_up.clear.call(null);
var state_28816__$1 = (function (){var statearr_28819 = state_28816;
(statearr_28819[(8)] = inst_28811);

return statearr_28819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28816__$1,(4),inst_28812);
} else {
if((state_val_28817 === (4))){
var inst_28814 = (state_28816[(2)]);
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28816__$1,inst_28814);
} else {
return null;
}
}
}
}
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto____0 = (function (){
var statearr_28823 = [null,null,null,null,null,null,null,null,null];
(statearr_28823[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto__);

(statearr_28823[(1)] = (1));

return statearr_28823;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto____1 = (function (state_28816){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_28816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e28824){if((e28824 instanceof Object)){
var ex__24230__auto__ = e28824;
var statearr_28825_28827 = state_28816;
(statearr_28825_28827[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28828 = state_28816;
state_28816 = G__28828;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto__ = function(state_28816){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto____1.call(this,state_28816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_28826 = f__24339__auto__.call(null);
(statearr_28826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1494348452681