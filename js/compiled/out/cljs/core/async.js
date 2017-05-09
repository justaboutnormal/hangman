// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24383 = [];
var len__20256__auto___24389 = arguments.length;
var i__20257__auto___24390 = (0);
while(true){
if((i__20257__auto___24390 < len__20256__auto___24389)){
args24383.push((arguments[i__20257__auto___24390]));

var G__24391 = (i__20257__auto___24390 + (1));
i__20257__auto___24390 = G__24391;
continue;
} else {
}
break;
}

var G__24385 = args24383.length;
switch (G__24385) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24383.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24386 = (function (f,blockable,meta24387){
this.f = f;
this.blockable = blockable;
this.meta24387 = meta24387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24388,meta24387__$1){
var self__ = this;
var _24388__$1 = this;
return (new cljs.core.async.t_cljs$core$async24386(self__.f,self__.blockable,meta24387__$1));
});

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24388){
var self__ = this;
var _24388__$1 = this;
return self__.meta24387;
});

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24387","meta24387",-1778816857,null)], null);
});

cljs.core.async.t_cljs$core$async24386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24386";

cljs.core.async.t_cljs$core$async24386.cljs$lang$ctorPrWriter = (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async24386");
});

cljs.core.async.__GT_t_cljs$core$async24386 = (function cljs$core$async$__GT_t_cljs$core$async24386(f__$1,blockable__$1,meta24387){
return (new cljs.core.async.t_cljs$core$async24386(f__$1,blockable__$1,meta24387));
});

}

return (new cljs.core.async.t_cljs$core$async24386(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24395 = [];
var len__20256__auto___24398 = arguments.length;
var i__20257__auto___24399 = (0);
while(true){
if((i__20257__auto___24399 < len__20256__auto___24398)){
args24395.push((arguments[i__20257__auto___24399]));

var G__24400 = (i__20257__auto___24399 + (1));
i__20257__auto___24399 = G__24400;
continue;
} else {
}
break;
}

var G__24397 = args24395.length;
switch (G__24397) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24395.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24402 = [];
var len__20256__auto___24405 = arguments.length;
var i__20257__auto___24406 = (0);
while(true){
if((i__20257__auto___24406 < len__20256__auto___24405)){
args24402.push((arguments[i__20257__auto___24406]));

var G__24407 = (i__20257__auto___24406 + (1));
i__20257__auto___24406 = G__24407;
continue;
} else {
}
break;
}

var G__24404 = args24402.length;
switch (G__24404) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24402.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24409 = [];
var len__20256__auto___24412 = arguments.length;
var i__20257__auto___24413 = (0);
while(true){
if((i__20257__auto___24413 < len__20256__auto___24412)){
args24409.push((arguments[i__20257__auto___24413]));

var G__24414 = (i__20257__auto___24413 + (1));
i__20257__auto___24413 = G__24414;
continue;
} else {
}
break;
}

var G__24411 = args24409.length;
switch (G__24411) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24409.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24416 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24416);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24416,ret){
return (function (){
return fn1.call(null,val_24416);
});})(val_24416,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24417 = [];
var len__20256__auto___24420 = arguments.length;
var i__20257__auto___24421 = (0);
while(true){
if((i__20257__auto___24421 < len__20256__auto___24420)){
args24417.push((arguments[i__20257__auto___24421]));

var G__24422 = (i__20257__auto___24421 + (1));
i__20257__auto___24421 = G__24422;
continue;
} else {
}
break;
}

var G__24419 = args24417.length;
switch (G__24419) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24417.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20066__auto___24424 = n;
var x_24425 = (0);
while(true){
if((x_24425 < n__20066__auto___24424)){
(a[x_24425] = (0));

var G__24426 = (x_24425 + (1));
x_24425 = G__24426;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24427 = (i + (1));
i = G__24427;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24431 = (function (flag,meta24432){
this.flag = flag;
this.meta24432 = meta24432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24433,meta24432__$1){
var self__ = this;
var _24433__$1 = this;
return (new cljs.core.async.t_cljs$core$async24431(self__.flag,meta24432__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24433){
var self__ = this;
var _24433__$1 = this;
return self__.meta24432;
});})(flag))
;

cljs.core.async.t_cljs$core$async24431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24431.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24432","meta24432",-1616483651,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24431";

cljs.core.async.t_cljs$core$async24431.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async24431");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24431 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24431(flag__$1,meta24432){
return (new cljs.core.async.t_cljs$core$async24431(flag__$1,meta24432));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24431(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24437 = (function (flag,cb,meta24438){
this.flag = flag;
this.cb = cb;
this.meta24438 = meta24438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24439,meta24438__$1){
var self__ = this;
var _24439__$1 = this;
return (new cljs.core.async.t_cljs$core$async24437(self__.flag,self__.cb,meta24438__$1));
});

cljs.core.async.t_cljs$core$async24437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24439){
var self__ = this;
var _24439__$1 = this;
return self__.meta24438;
});

cljs.core.async.t_cljs$core$async24437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24438","meta24438",-1369165053,null)], null);
});

cljs.core.async.t_cljs$core$async24437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24437";

cljs.core.async.t_cljs$core$async24437.cljs$lang$ctorPrWriter = (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async24437");
});

cljs.core.async.__GT_t_cljs$core$async24437 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24437(flag__$1,cb__$1,meta24438){
return (new cljs.core.async.t_cljs$core$async24437(flag__$1,cb__$1,meta24438));
});

}

return (new cljs.core.async.t_cljs$core$async24437(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24440_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24440_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24441_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24441_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19143__auto__ = wport;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24442 = (i + (1));
i = G__24442;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19143__auto__ = ret;
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19131__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19131__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19131__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20263__auto__ = [];
var len__20256__auto___24448 = arguments.length;
var i__20257__auto___24449 = (0);
while(true){
if((i__20257__auto___24449 < len__20256__auto___24448)){
args__20263__auto__.push((arguments[i__20257__auto___24449]));

var G__24450 = (i__20257__auto___24449 + (1));
i__20257__auto___24449 = G__24450;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((1) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20264__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24445){
var map__24446 = p__24445;
var map__24446__$1 = ((((!((map__24446 == null)))?((((map__24446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24446):map__24446);
var opts = map__24446__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24443){
var G__24444 = cljs.core.first.call(null,seq24443);
var seq24443__$1 = cljs.core.next.call(null,seq24443);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24444,seq24443__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24451 = [];
var len__20256__auto___24502 = arguments.length;
var i__20257__auto___24503 = (0);
while(true){
if((i__20257__auto___24503 < len__20256__auto___24502)){
args24451.push((arguments[i__20257__auto___24503]));

var G__24504 = (i__20257__auto___24503 + (1));
i__20257__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var G__24453 = args24451.length;
switch (G__24453) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24451.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24338__auto___24506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___24506){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___24506){
return (function (state_24477){
var state_val_24478 = (state_24477[(1)]);
if((state_val_24478 === (7))){
var inst_24473 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24479_24507 = state_24477__$1;
(statearr_24479_24507[(2)] = inst_24473);

(statearr_24479_24507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (1))){
var state_24477__$1 = state_24477;
var statearr_24480_24508 = state_24477__$1;
(statearr_24480_24508[(2)] = null);

(statearr_24480_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (4))){
var inst_24456 = (state_24477[(7)]);
var inst_24456__$1 = (state_24477[(2)]);
var inst_24457 = (inst_24456__$1 == null);
var state_24477__$1 = (function (){var statearr_24481 = state_24477;
(statearr_24481[(7)] = inst_24456__$1);

return statearr_24481;
})();
if(cljs.core.truth_(inst_24457)){
var statearr_24482_24509 = state_24477__$1;
(statearr_24482_24509[(1)] = (5));

} else {
var statearr_24483_24510 = state_24477__$1;
(statearr_24483_24510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (13))){
var state_24477__$1 = state_24477;
var statearr_24484_24511 = state_24477__$1;
(statearr_24484_24511[(2)] = null);

(statearr_24484_24511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (6))){
var inst_24456 = (state_24477[(7)]);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24477__$1,(11),to,inst_24456);
} else {
if((state_val_24478 === (3))){
var inst_24475 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24477__$1,inst_24475);
} else {
if((state_val_24478 === (12))){
var state_24477__$1 = state_24477;
var statearr_24485_24512 = state_24477__$1;
(statearr_24485_24512[(2)] = null);

(statearr_24485_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (2))){
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(4),from);
} else {
if((state_val_24478 === (11))){
var inst_24466 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
if(cljs.core.truth_(inst_24466)){
var statearr_24486_24513 = state_24477__$1;
(statearr_24486_24513[(1)] = (12));

} else {
var statearr_24487_24514 = state_24477__$1;
(statearr_24487_24514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (9))){
var state_24477__$1 = state_24477;
var statearr_24488_24515 = state_24477__$1;
(statearr_24488_24515[(2)] = null);

(statearr_24488_24515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (5))){
var state_24477__$1 = state_24477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24489_24516 = state_24477__$1;
(statearr_24489_24516[(1)] = (8));

} else {
var statearr_24490_24517 = state_24477__$1;
(statearr_24490_24517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (14))){
var inst_24471 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24492_24518 = state_24477__$1;
(statearr_24492_24518[(2)] = inst_24471);

(statearr_24492_24518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (10))){
var inst_24463 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24493_24519 = state_24477__$1;
(statearr_24493_24519[(2)] = inst_24463);

(statearr_24493_24519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (8))){
var inst_24460 = cljs.core.async.close_BANG_.call(null,to);
var state_24477__$1 = state_24477;
var statearr_24494_24520 = state_24477__$1;
(statearr_24494_24520[(2)] = inst_24460);

(statearr_24494_24520[(1)] = (10));


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
});})(c__24338__auto___24506))
;
return ((function (switch__24226__auto__,c__24338__auto___24506){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_24498 = [null,null,null,null,null,null,null,null];
(statearr_24498[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_24498[(1)] = (1));

return statearr_24498;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_24477){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e24499){if((e24499 instanceof Object)){
var ex__24230__auto__ = e24499;
var statearr_24500_24521 = state_24477;
(statearr_24500_24521[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24522 = state_24477;
state_24477 = G__24522;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_24477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_24477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___24506))
})();
var state__24340__auto__ = (function (){var statearr_24501 = f__24339__auto__.call(null);
(statearr_24501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___24506);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___24506))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24710){
var vec__24711 = p__24710;
var v = cljs.core.nth.call(null,vec__24711,(0),null);
var p = cljs.core.nth.call(null,vec__24711,(1),null);
var job = vec__24711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24338__auto___24897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___24897,res,vec__24711,v,p,job,jobs,results){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___24897,res,vec__24711,v,p,job,jobs,results){
return (function (state_24718){
var state_val_24719 = (state_24718[(1)]);
if((state_val_24719 === (1))){
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24718__$1,(2),res,v);
} else {
if((state_val_24719 === (2))){
var inst_24715 = (state_24718[(2)]);
var inst_24716 = cljs.core.async.close_BANG_.call(null,res);
var state_24718__$1 = (function (){var statearr_24720 = state_24718;
(statearr_24720[(7)] = inst_24715);

return statearr_24720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24718__$1,inst_24716);
} else {
return null;
}
}
});})(c__24338__auto___24897,res,vec__24711,v,p,job,jobs,results))
;
return ((function (switch__24226__auto__,c__24338__auto___24897,res,vec__24711,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0 = (function (){
var statearr_24724 = [null,null,null,null,null,null,null,null];
(statearr_24724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__);

(statearr_24724[(1)] = (1));

return statearr_24724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1 = (function (state_24718){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e24725){if((e24725 instanceof Object)){
var ex__24230__auto__ = e24725;
var statearr_24726_24898 = state_24718;
(statearr_24726_24898[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24899 = state_24718;
state_24718 = G__24899;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = function(state_24718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1.call(this,state_24718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___24897,res,vec__24711,v,p,job,jobs,results))
})();
var state__24340__auto__ = (function (){var statearr_24727 = f__24339__auto__.call(null);
(statearr_24727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___24897);

return statearr_24727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___24897,res,vec__24711,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24728){
var vec__24729 = p__24728;
var v = cljs.core.nth.call(null,vec__24729,(0),null);
var p = cljs.core.nth.call(null,vec__24729,(1),null);
var job = vec__24729;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20066__auto___24900 = n;
var __24901 = (0);
while(true){
if((__24901 < n__20066__auto___24900)){
var G__24732_24902 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24732_24902) {
case "compute":
var c__24338__auto___24904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24901,c__24338__auto___24904,G__24732_24902,n__20066__auto___24900,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (__24901,c__24338__auto___24904,G__24732_24902,n__20066__auto___24900,jobs,results,process,async){
return (function (state_24745){
var state_val_24746 = (state_24745[(1)]);
if((state_val_24746 === (1))){
var state_24745__$1 = state_24745;
var statearr_24747_24905 = state_24745__$1;
(statearr_24747_24905[(2)] = null);

(statearr_24747_24905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (2))){
var state_24745__$1 = state_24745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24745__$1,(4),jobs);
} else {
if((state_val_24746 === (3))){
var inst_24743 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24745__$1,inst_24743);
} else {
if((state_val_24746 === (4))){
var inst_24735 = (state_24745[(2)]);
var inst_24736 = process.call(null,inst_24735);
var state_24745__$1 = state_24745;
if(cljs.core.truth_(inst_24736)){
var statearr_24748_24906 = state_24745__$1;
(statearr_24748_24906[(1)] = (5));

} else {
var statearr_24749_24907 = state_24745__$1;
(statearr_24749_24907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (5))){
var state_24745__$1 = state_24745;
var statearr_24750_24908 = state_24745__$1;
(statearr_24750_24908[(2)] = null);

(statearr_24750_24908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (6))){
var state_24745__$1 = state_24745;
var statearr_24751_24909 = state_24745__$1;
(statearr_24751_24909[(2)] = null);

(statearr_24751_24909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (7))){
var inst_24741 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24752_24910 = state_24745__$1;
(statearr_24752_24910[(2)] = inst_24741);

(statearr_24752_24910[(1)] = (3));


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
});})(__24901,c__24338__auto___24904,G__24732_24902,n__20066__auto___24900,jobs,results,process,async))
;
return ((function (__24901,switch__24226__auto__,c__24338__auto___24904,G__24732_24902,n__20066__auto___24900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0 = (function (){
var statearr_24756 = [null,null,null,null,null,null,null];
(statearr_24756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__);

(statearr_24756[(1)] = (1));

return statearr_24756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1 = (function (state_24745){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e24757){if((e24757 instanceof Object)){
var ex__24230__auto__ = e24757;
var statearr_24758_24911 = state_24745;
(statearr_24758_24911[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24912 = state_24745;
state_24745 = G__24912;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = function(state_24745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1.call(this,state_24745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__;
})()
;})(__24901,switch__24226__auto__,c__24338__auto___24904,G__24732_24902,n__20066__auto___24900,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24759 = f__24339__auto__.call(null);
(statearr_24759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___24904);

return statearr_24759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(__24901,c__24338__auto___24904,G__24732_24902,n__20066__auto___24900,jobs,results,process,async))
);


break;
case "async":
var c__24338__auto___24913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24901,c__24338__auto___24913,G__24732_24902,n__20066__auto___24900,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (__24901,c__24338__auto___24913,G__24732_24902,n__20066__auto___24900,jobs,results,process,async){
return (function (state_24772){
var state_val_24773 = (state_24772[(1)]);
if((state_val_24773 === (1))){
var state_24772__$1 = state_24772;
var statearr_24774_24914 = state_24772__$1;
(statearr_24774_24914[(2)] = null);

(statearr_24774_24914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24773 === (2))){
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24772__$1,(4),jobs);
} else {
if((state_val_24773 === (3))){
var inst_24770 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24772__$1,inst_24770);
} else {
if((state_val_24773 === (4))){
var inst_24762 = (state_24772[(2)]);
var inst_24763 = async.call(null,inst_24762);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24763)){
var statearr_24775_24915 = state_24772__$1;
(statearr_24775_24915[(1)] = (5));

} else {
var statearr_24776_24916 = state_24772__$1;
(statearr_24776_24916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24773 === (5))){
var state_24772__$1 = state_24772;
var statearr_24777_24917 = state_24772__$1;
(statearr_24777_24917[(2)] = null);

(statearr_24777_24917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24773 === (6))){
var state_24772__$1 = state_24772;
var statearr_24778_24918 = state_24772__$1;
(statearr_24778_24918[(2)] = null);

(statearr_24778_24918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24773 === (7))){
var inst_24768 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24779_24919 = state_24772__$1;
(statearr_24779_24919[(2)] = inst_24768);

(statearr_24779_24919[(1)] = (3));


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
});})(__24901,c__24338__auto___24913,G__24732_24902,n__20066__auto___24900,jobs,results,process,async))
;
return ((function (__24901,switch__24226__auto__,c__24338__auto___24913,G__24732_24902,n__20066__auto___24900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0 = (function (){
var statearr_24783 = [null,null,null,null,null,null,null];
(statearr_24783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__);

(statearr_24783[(1)] = (1));

return statearr_24783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1 = (function (state_24772){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e24784){if((e24784 instanceof Object)){
var ex__24230__auto__ = e24784;
var statearr_24785_24920 = state_24772;
(statearr_24785_24920[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24921 = state_24772;
state_24772 = G__24921;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = function(state_24772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1.call(this,state_24772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__;
})()
;})(__24901,switch__24226__auto__,c__24338__auto___24913,G__24732_24902,n__20066__auto___24900,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24786 = f__24339__auto__.call(null);
(statearr_24786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___24913);

return statearr_24786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(__24901,c__24338__auto___24913,G__24732_24902,n__20066__auto___24900,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__24922 = (__24901 + (1));
__24901 = G__24922;
continue;
} else {
}
break;
}

var c__24338__auto___24923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___24923,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___24923,jobs,results,process,async){
return (function (state_24808){
var state_val_24809 = (state_24808[(1)]);
if((state_val_24809 === (1))){
var state_24808__$1 = state_24808;
var statearr_24810_24924 = state_24808__$1;
(statearr_24810_24924[(2)] = null);

(statearr_24810_24924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (2))){
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(4),from);
} else {
if((state_val_24809 === (3))){
var inst_24806 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24808__$1,inst_24806);
} else {
if((state_val_24809 === (4))){
var inst_24789 = (state_24808[(7)]);
var inst_24789__$1 = (state_24808[(2)]);
var inst_24790 = (inst_24789__$1 == null);
var state_24808__$1 = (function (){var statearr_24811 = state_24808;
(statearr_24811[(7)] = inst_24789__$1);

return statearr_24811;
})();
if(cljs.core.truth_(inst_24790)){
var statearr_24812_24925 = state_24808__$1;
(statearr_24812_24925[(1)] = (5));

} else {
var statearr_24813_24926 = state_24808__$1;
(statearr_24813_24926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (5))){
var inst_24792 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24808__$1 = state_24808;
var statearr_24814_24927 = state_24808__$1;
(statearr_24814_24927[(2)] = inst_24792);

(statearr_24814_24927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (6))){
var inst_24789 = (state_24808[(7)]);
var inst_24794 = (state_24808[(8)]);
var inst_24794__$1 = cljs.core.async.chan.call(null,(1));
var inst_24795 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24796 = [inst_24789,inst_24794__$1];
var inst_24797 = (new cljs.core.PersistentVector(null,2,(5),inst_24795,inst_24796,null));
var state_24808__$1 = (function (){var statearr_24815 = state_24808;
(statearr_24815[(8)] = inst_24794__$1);

return statearr_24815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24808__$1,(8),jobs,inst_24797);
} else {
if((state_val_24809 === (7))){
var inst_24804 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24816_24928 = state_24808__$1;
(statearr_24816_24928[(2)] = inst_24804);

(statearr_24816_24928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (8))){
var inst_24794 = (state_24808[(8)]);
var inst_24799 = (state_24808[(2)]);
var state_24808__$1 = (function (){var statearr_24817 = state_24808;
(statearr_24817[(9)] = inst_24799);

return statearr_24817;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24808__$1,(9),results,inst_24794);
} else {
if((state_val_24809 === (9))){
var inst_24801 = (state_24808[(2)]);
var state_24808__$1 = (function (){var statearr_24818 = state_24808;
(statearr_24818[(10)] = inst_24801);

return statearr_24818;
})();
var statearr_24819_24929 = state_24808__$1;
(statearr_24819_24929[(2)] = null);

(statearr_24819_24929[(1)] = (2));


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
});})(c__24338__auto___24923,jobs,results,process,async))
;
return ((function (switch__24226__auto__,c__24338__auto___24923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0 = (function (){
var statearr_24823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__);

(statearr_24823[(1)] = (1));

return statearr_24823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1 = (function (state_24808){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e24824){if((e24824 instanceof Object)){
var ex__24230__auto__ = e24824;
var statearr_24825_24930 = state_24808;
(statearr_24825_24930[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24931 = state_24808;
state_24808 = G__24931;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = function(state_24808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1.call(this,state_24808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___24923,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24826 = f__24339__auto__.call(null);
(statearr_24826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___24923);

return statearr_24826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___24923,jobs,results,process,async))
);


var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__,jobs,results,process,async){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__,jobs,results,process,async){
return (function (state_24864){
var state_val_24865 = (state_24864[(1)]);
if((state_val_24865 === (7))){
var inst_24860 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24866_24932 = state_24864__$1;
(statearr_24866_24932[(2)] = inst_24860);

(statearr_24866_24932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (20))){
var state_24864__$1 = state_24864;
var statearr_24867_24933 = state_24864__$1;
(statearr_24867_24933[(2)] = null);

(statearr_24867_24933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (1))){
var state_24864__$1 = state_24864;
var statearr_24868_24934 = state_24864__$1;
(statearr_24868_24934[(2)] = null);

(statearr_24868_24934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (4))){
var inst_24829 = (state_24864[(7)]);
var inst_24829__$1 = (state_24864[(2)]);
var inst_24830 = (inst_24829__$1 == null);
var state_24864__$1 = (function (){var statearr_24869 = state_24864;
(statearr_24869[(7)] = inst_24829__$1);

return statearr_24869;
})();
if(cljs.core.truth_(inst_24830)){
var statearr_24870_24935 = state_24864__$1;
(statearr_24870_24935[(1)] = (5));

} else {
var statearr_24871_24936 = state_24864__$1;
(statearr_24871_24936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (15))){
var inst_24842 = (state_24864[(8)]);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24864__$1,(18),to,inst_24842);
} else {
if((state_val_24865 === (21))){
var inst_24855 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24872_24937 = state_24864__$1;
(statearr_24872_24937[(2)] = inst_24855);

(statearr_24872_24937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (13))){
var inst_24857 = (state_24864[(2)]);
var state_24864__$1 = (function (){var statearr_24873 = state_24864;
(statearr_24873[(9)] = inst_24857);

return statearr_24873;
})();
var statearr_24874_24938 = state_24864__$1;
(statearr_24874_24938[(2)] = null);

(statearr_24874_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (6))){
var inst_24829 = (state_24864[(7)]);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24864__$1,(11),inst_24829);
} else {
if((state_val_24865 === (17))){
var inst_24850 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
if(cljs.core.truth_(inst_24850)){
var statearr_24875_24939 = state_24864__$1;
(statearr_24875_24939[(1)] = (19));

} else {
var statearr_24876_24940 = state_24864__$1;
(statearr_24876_24940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (3))){
var inst_24862 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24864__$1,inst_24862);
} else {
if((state_val_24865 === (12))){
var inst_24839 = (state_24864[(10)]);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24864__$1,(14),inst_24839);
} else {
if((state_val_24865 === (2))){
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24864__$1,(4),results);
} else {
if((state_val_24865 === (19))){
var state_24864__$1 = state_24864;
var statearr_24877_24941 = state_24864__$1;
(statearr_24877_24941[(2)] = null);

(statearr_24877_24941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (11))){
var inst_24839 = (state_24864[(2)]);
var state_24864__$1 = (function (){var statearr_24878 = state_24864;
(statearr_24878[(10)] = inst_24839);

return statearr_24878;
})();
var statearr_24879_24942 = state_24864__$1;
(statearr_24879_24942[(2)] = null);

(statearr_24879_24942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (9))){
var state_24864__$1 = state_24864;
var statearr_24880_24943 = state_24864__$1;
(statearr_24880_24943[(2)] = null);

(statearr_24880_24943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (5))){
var state_24864__$1 = state_24864;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24881_24944 = state_24864__$1;
(statearr_24881_24944[(1)] = (8));

} else {
var statearr_24882_24945 = state_24864__$1;
(statearr_24882_24945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (14))){
var inst_24842 = (state_24864[(8)]);
var inst_24844 = (state_24864[(11)]);
var inst_24842__$1 = (state_24864[(2)]);
var inst_24843 = (inst_24842__$1 == null);
var inst_24844__$1 = cljs.core.not.call(null,inst_24843);
var state_24864__$1 = (function (){var statearr_24883 = state_24864;
(statearr_24883[(8)] = inst_24842__$1);

(statearr_24883[(11)] = inst_24844__$1);

return statearr_24883;
})();
if(inst_24844__$1){
var statearr_24884_24946 = state_24864__$1;
(statearr_24884_24946[(1)] = (15));

} else {
var statearr_24885_24947 = state_24864__$1;
(statearr_24885_24947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (16))){
var inst_24844 = (state_24864[(11)]);
var state_24864__$1 = state_24864;
var statearr_24886_24948 = state_24864__$1;
(statearr_24886_24948[(2)] = inst_24844);

(statearr_24886_24948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (10))){
var inst_24836 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24887_24949 = state_24864__$1;
(statearr_24887_24949[(2)] = inst_24836);

(statearr_24887_24949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (18))){
var inst_24847 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24888_24950 = state_24864__$1;
(statearr_24888_24950[(2)] = inst_24847);

(statearr_24888_24950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (8))){
var inst_24833 = cljs.core.async.close_BANG_.call(null,to);
var state_24864__$1 = state_24864;
var statearr_24889_24951 = state_24864__$1;
(statearr_24889_24951[(2)] = inst_24833);

(statearr_24889_24951[(1)] = (10));


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
}
}
}
}
});})(c__24338__auto__,jobs,results,process,async))
;
return ((function (switch__24226__auto__,c__24338__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0 = (function (){
var statearr_24893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__);

(statearr_24893[(1)] = (1));

return statearr_24893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1 = (function (state_24864){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e24894){if((e24894 instanceof Object)){
var ex__24230__auto__ = e24894;
var statearr_24895_24952 = state_24864;
(statearr_24895_24952[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24953 = state_24864;
state_24864 = G__24953;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__ = function(state_24864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1.call(this,state_24864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__,jobs,results,process,async))
})();
var state__24340__auto__ = (function (){var statearr_24896 = f__24339__auto__.call(null);
(statearr_24896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_24896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__,jobs,results,process,async))
);

return c__24338__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24954 = [];
var len__20256__auto___24957 = arguments.length;
var i__20257__auto___24958 = (0);
while(true){
if((i__20257__auto___24958 < len__20256__auto___24957)){
args24954.push((arguments[i__20257__auto___24958]));

var G__24959 = (i__20257__auto___24958 + (1));
i__20257__auto___24958 = G__24959;
continue;
} else {
}
break;
}

var G__24956 = args24954.length;
switch (G__24956) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24954.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24961 = [];
var len__20256__auto___24964 = arguments.length;
var i__20257__auto___24965 = (0);
while(true){
if((i__20257__auto___24965 < len__20256__auto___24964)){
args24961.push((arguments[i__20257__auto___24965]));

var G__24966 = (i__20257__auto___24965 + (1));
i__20257__auto___24965 = G__24966;
continue;
} else {
}
break;
}

var G__24963 = args24961.length;
switch (G__24963) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24961.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24968 = [];
var len__20256__auto___25021 = arguments.length;
var i__20257__auto___25022 = (0);
while(true){
if((i__20257__auto___25022 < len__20256__auto___25021)){
args24968.push((arguments[i__20257__auto___25022]));

var G__25023 = (i__20257__auto___25022 + (1));
i__20257__auto___25022 = G__25023;
continue;
} else {
}
break;
}

var G__24970 = args24968.length;
switch (G__24970) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24968.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24338__auto___25025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___25025,tc,fc){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___25025,tc,fc){
return (function (state_24996){
var state_val_24997 = (state_24996[(1)]);
if((state_val_24997 === (7))){
var inst_24992 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
var statearr_24998_25026 = state_24996__$1;
(statearr_24998_25026[(2)] = inst_24992);

(statearr_24998_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (1))){
var state_24996__$1 = state_24996;
var statearr_24999_25027 = state_24996__$1;
(statearr_24999_25027[(2)] = null);

(statearr_24999_25027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (4))){
var inst_24973 = (state_24996[(7)]);
var inst_24973__$1 = (state_24996[(2)]);
var inst_24974 = (inst_24973__$1 == null);
var state_24996__$1 = (function (){var statearr_25000 = state_24996;
(statearr_25000[(7)] = inst_24973__$1);

return statearr_25000;
})();
if(cljs.core.truth_(inst_24974)){
var statearr_25001_25028 = state_24996__$1;
(statearr_25001_25028[(1)] = (5));

} else {
var statearr_25002_25029 = state_24996__$1;
(statearr_25002_25029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (13))){
var state_24996__$1 = state_24996;
var statearr_25003_25030 = state_24996__$1;
(statearr_25003_25030[(2)] = null);

(statearr_25003_25030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (6))){
var inst_24973 = (state_24996[(7)]);
var inst_24979 = p.call(null,inst_24973);
var state_24996__$1 = state_24996;
if(cljs.core.truth_(inst_24979)){
var statearr_25004_25031 = state_24996__$1;
(statearr_25004_25031[(1)] = (9));

} else {
var statearr_25005_25032 = state_24996__$1;
(statearr_25005_25032[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (3))){
var inst_24994 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24996__$1,inst_24994);
} else {
if((state_val_24997 === (12))){
var state_24996__$1 = state_24996;
var statearr_25006_25033 = state_24996__$1;
(statearr_25006_25033[(2)] = null);

(statearr_25006_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (2))){
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24996__$1,(4),ch);
} else {
if((state_val_24997 === (11))){
var inst_24973 = (state_24996[(7)]);
var inst_24983 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24996__$1,(8),inst_24983,inst_24973);
} else {
if((state_val_24997 === (9))){
var state_24996__$1 = state_24996;
var statearr_25007_25034 = state_24996__$1;
(statearr_25007_25034[(2)] = tc);

(statearr_25007_25034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (5))){
var inst_24976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24977 = cljs.core.async.close_BANG_.call(null,fc);
var state_24996__$1 = (function (){var statearr_25008 = state_24996;
(statearr_25008[(8)] = inst_24976);

return statearr_25008;
})();
var statearr_25009_25035 = state_24996__$1;
(statearr_25009_25035[(2)] = inst_24977);

(statearr_25009_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (14))){
var inst_24990 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
var statearr_25010_25036 = state_24996__$1;
(statearr_25010_25036[(2)] = inst_24990);

(statearr_25010_25036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (10))){
var state_24996__$1 = state_24996;
var statearr_25011_25037 = state_24996__$1;
(statearr_25011_25037[(2)] = fc);

(statearr_25011_25037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (8))){
var inst_24985 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
if(cljs.core.truth_(inst_24985)){
var statearr_25012_25038 = state_24996__$1;
(statearr_25012_25038[(1)] = (12));

} else {
var statearr_25013_25039 = state_24996__$1;
(statearr_25013_25039[(1)] = (13));

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
});})(c__24338__auto___25025,tc,fc))
;
return ((function (switch__24226__auto__,c__24338__auto___25025,tc,fc){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_25017 = [null,null,null,null,null,null,null,null,null];
(statearr_25017[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_25017[(1)] = (1));

return statearr_25017;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_24996){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_24996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e25018){if((e25018 instanceof Object)){
var ex__24230__auto__ = e25018;
var statearr_25019_25040 = state_24996;
(statearr_25019_25040[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25041 = state_24996;
state_24996 = G__25041;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_24996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_24996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___25025,tc,fc))
})();
var state__24340__auto__ = (function (){var statearr_25020 = f__24339__auto__.call(null);
(statearr_25020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___25025);

return statearr_25020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___25025,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_25105){
var state_val_25106 = (state_25105[(1)]);
if((state_val_25106 === (7))){
var inst_25101 = (state_25105[(2)]);
var state_25105__$1 = state_25105;
var statearr_25107_25128 = state_25105__$1;
(statearr_25107_25128[(2)] = inst_25101);

(statearr_25107_25128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (1))){
var inst_25085 = init;
var state_25105__$1 = (function (){var statearr_25108 = state_25105;
(statearr_25108[(7)] = inst_25085);

return statearr_25108;
})();
var statearr_25109_25129 = state_25105__$1;
(statearr_25109_25129[(2)] = null);

(statearr_25109_25129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (4))){
var inst_25088 = (state_25105[(8)]);
var inst_25088__$1 = (state_25105[(2)]);
var inst_25089 = (inst_25088__$1 == null);
var state_25105__$1 = (function (){var statearr_25110 = state_25105;
(statearr_25110[(8)] = inst_25088__$1);

return statearr_25110;
})();
if(cljs.core.truth_(inst_25089)){
var statearr_25111_25130 = state_25105__$1;
(statearr_25111_25130[(1)] = (5));

} else {
var statearr_25112_25131 = state_25105__$1;
(statearr_25112_25131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (6))){
var inst_25092 = (state_25105[(9)]);
var inst_25085 = (state_25105[(7)]);
var inst_25088 = (state_25105[(8)]);
var inst_25092__$1 = f.call(null,inst_25085,inst_25088);
var inst_25093 = cljs.core.reduced_QMARK_.call(null,inst_25092__$1);
var state_25105__$1 = (function (){var statearr_25113 = state_25105;
(statearr_25113[(9)] = inst_25092__$1);

return statearr_25113;
})();
if(inst_25093){
var statearr_25114_25132 = state_25105__$1;
(statearr_25114_25132[(1)] = (8));

} else {
var statearr_25115_25133 = state_25105__$1;
(statearr_25115_25133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (3))){
var inst_25103 = (state_25105[(2)]);
var state_25105__$1 = state_25105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25105__$1,inst_25103);
} else {
if((state_val_25106 === (2))){
var state_25105__$1 = state_25105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25105__$1,(4),ch);
} else {
if((state_val_25106 === (9))){
var inst_25092 = (state_25105[(9)]);
var inst_25085 = inst_25092;
var state_25105__$1 = (function (){var statearr_25116 = state_25105;
(statearr_25116[(7)] = inst_25085);

return statearr_25116;
})();
var statearr_25117_25134 = state_25105__$1;
(statearr_25117_25134[(2)] = null);

(statearr_25117_25134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (5))){
var inst_25085 = (state_25105[(7)]);
var state_25105__$1 = state_25105;
var statearr_25118_25135 = state_25105__$1;
(statearr_25118_25135[(2)] = inst_25085);

(statearr_25118_25135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (10))){
var inst_25099 = (state_25105[(2)]);
var state_25105__$1 = state_25105;
var statearr_25119_25136 = state_25105__$1;
(statearr_25119_25136[(2)] = inst_25099);

(statearr_25119_25136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (8))){
var inst_25092 = (state_25105[(9)]);
var inst_25095 = cljs.core.deref.call(null,inst_25092);
var state_25105__$1 = state_25105;
var statearr_25120_25137 = state_25105__$1;
(statearr_25120_25137[(2)] = inst_25095);

(statearr_25120_25137[(1)] = (10));


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
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24227__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24227__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25124[(0)] = cljs$core$async$reduce_$_state_machine__24227__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var cljs$core$async$reduce_$_state_machine__24227__auto____1 = (function (state_25105){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_25105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__24230__auto__ = e25125;
var statearr_25126_25138 = state_25105;
(statearr_25126_25138[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25139 = state_25105;
state_25105 = G__25139;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24227__auto__ = function(state_25105){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24227__auto____1.call(this,state_25105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24227__auto____0;
cljs$core$async$reduce_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24227__auto____1;
return cljs$core$async$reduce_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_25127 = f__24339__auto__.call(null);
(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25140 = [];
var len__20256__auto___25192 = arguments.length;
var i__20257__auto___25193 = (0);
while(true){
if((i__20257__auto___25193 < len__20256__auto___25192)){
args25140.push((arguments[i__20257__auto___25193]));

var G__25194 = (i__20257__auto___25193 + (1));
i__20257__auto___25193 = G__25194;
continue;
} else {
}
break;
}

var G__25142 = args25140.length;
switch (G__25142) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25140.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_25167){
var state_val_25168 = (state_25167[(1)]);
if((state_val_25168 === (7))){
var inst_25149 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25169_25196 = state_25167__$1;
(statearr_25169_25196[(2)] = inst_25149);

(statearr_25169_25196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (1))){
var inst_25143 = cljs.core.seq.call(null,coll);
var inst_25144 = inst_25143;
var state_25167__$1 = (function (){var statearr_25170 = state_25167;
(statearr_25170[(7)] = inst_25144);

return statearr_25170;
})();
var statearr_25171_25197 = state_25167__$1;
(statearr_25171_25197[(2)] = null);

(statearr_25171_25197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (4))){
var inst_25144 = (state_25167[(7)]);
var inst_25147 = cljs.core.first.call(null,inst_25144);
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25167__$1,(7),ch,inst_25147);
} else {
if((state_val_25168 === (13))){
var inst_25161 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25172_25198 = state_25167__$1;
(statearr_25172_25198[(2)] = inst_25161);

(statearr_25172_25198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (6))){
var inst_25152 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
if(cljs.core.truth_(inst_25152)){
var statearr_25173_25199 = state_25167__$1;
(statearr_25173_25199[(1)] = (8));

} else {
var statearr_25174_25200 = state_25167__$1;
(statearr_25174_25200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (3))){
var inst_25165 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25167__$1,inst_25165);
} else {
if((state_val_25168 === (12))){
var state_25167__$1 = state_25167;
var statearr_25175_25201 = state_25167__$1;
(statearr_25175_25201[(2)] = null);

(statearr_25175_25201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (2))){
var inst_25144 = (state_25167[(7)]);
var state_25167__$1 = state_25167;
if(cljs.core.truth_(inst_25144)){
var statearr_25176_25202 = state_25167__$1;
(statearr_25176_25202[(1)] = (4));

} else {
var statearr_25177_25203 = state_25167__$1;
(statearr_25177_25203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (11))){
var inst_25158 = cljs.core.async.close_BANG_.call(null,ch);
var state_25167__$1 = state_25167;
var statearr_25178_25204 = state_25167__$1;
(statearr_25178_25204[(2)] = inst_25158);

(statearr_25178_25204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (9))){
var state_25167__$1 = state_25167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25179_25205 = state_25167__$1;
(statearr_25179_25205[(1)] = (11));

} else {
var statearr_25180_25206 = state_25167__$1;
(statearr_25180_25206[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (5))){
var inst_25144 = (state_25167[(7)]);
var state_25167__$1 = state_25167;
var statearr_25181_25207 = state_25167__$1;
(statearr_25181_25207[(2)] = inst_25144);

(statearr_25181_25207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (10))){
var inst_25163 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25182_25208 = state_25167__$1;
(statearr_25182_25208[(2)] = inst_25163);

(statearr_25182_25208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (8))){
var inst_25144 = (state_25167[(7)]);
var inst_25154 = cljs.core.next.call(null,inst_25144);
var inst_25144__$1 = inst_25154;
var state_25167__$1 = (function (){var statearr_25183 = state_25167;
(statearr_25183[(7)] = inst_25144__$1);

return statearr_25183;
})();
var statearr_25184_25209 = state_25167__$1;
(statearr_25184_25209[(2)] = null);

(statearr_25184_25209[(1)] = (2));


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
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_25188 = [null,null,null,null,null,null,null,null];
(statearr_25188[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_25188[(1)] = (1));

return statearr_25188;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_25167){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_25167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e25189){if((e25189 instanceof Object)){
var ex__24230__auto__ = e25189;
var statearr_25190_25210 = state_25167;
(statearr_25190_25210[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25211 = state_25167;
state_25167 = G__25211;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_25167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_25167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_25191 = f__24339__auto__.call(null);
(statearr_25191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_25191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19811__auto__ = (((_ == null))?null:_);
var m__19812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,_);
} else {
var m__19812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m,ch);
} else {
var m__19812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m);
} else {
var m__19812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25437 = (function (ch,cs,meta25438){
this.ch = ch;
this.cs = cs;
this.meta25438 = meta25438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25439,meta25438__$1){
var self__ = this;
var _25439__$1 = this;
return (new cljs.core.async.t_cljs$core$async25437(self__.ch,self__.cs,meta25438__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25439){
var self__ = this;
var _25439__$1 = this;
return self__.meta25438;
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25438","meta25438",1130244846,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25437";

cljs.core.async.t_cljs$core$async25437.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async25437");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25437 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25437(ch__$1,cs__$1,meta25438){
return (new cljs.core.async.t_cljs$core$async25437(ch__$1,cs__$1,meta25438));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25437(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24338__auto___25662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___25662,cs,m,dchan,dctr,done){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___25662,cs,m,dchan,dctr,done){
return (function (state_25574){
var state_val_25575 = (state_25574[(1)]);
if((state_val_25575 === (7))){
var inst_25570 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25576_25663 = state_25574__$1;
(statearr_25576_25663[(2)] = inst_25570);

(statearr_25576_25663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (20))){
var inst_25473 = (state_25574[(7)]);
var inst_25485 = cljs.core.first.call(null,inst_25473);
var inst_25486 = cljs.core.nth.call(null,inst_25485,(0),null);
var inst_25487 = cljs.core.nth.call(null,inst_25485,(1),null);
var state_25574__$1 = (function (){var statearr_25577 = state_25574;
(statearr_25577[(8)] = inst_25486);

return statearr_25577;
})();
if(cljs.core.truth_(inst_25487)){
var statearr_25578_25664 = state_25574__$1;
(statearr_25578_25664[(1)] = (22));

} else {
var statearr_25579_25665 = state_25574__$1;
(statearr_25579_25665[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (27))){
var inst_25522 = (state_25574[(9)]);
var inst_25442 = (state_25574[(10)]);
var inst_25515 = (state_25574[(11)]);
var inst_25517 = (state_25574[(12)]);
var inst_25522__$1 = cljs.core._nth.call(null,inst_25515,inst_25517);
var inst_25523 = cljs.core.async.put_BANG_.call(null,inst_25522__$1,inst_25442,done);
var state_25574__$1 = (function (){var statearr_25580 = state_25574;
(statearr_25580[(9)] = inst_25522__$1);

return statearr_25580;
})();
if(cljs.core.truth_(inst_25523)){
var statearr_25581_25666 = state_25574__$1;
(statearr_25581_25666[(1)] = (30));

} else {
var statearr_25582_25667 = state_25574__$1;
(statearr_25582_25667[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (1))){
var state_25574__$1 = state_25574;
var statearr_25583_25668 = state_25574__$1;
(statearr_25583_25668[(2)] = null);

(statearr_25583_25668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (24))){
var inst_25473 = (state_25574[(7)]);
var inst_25492 = (state_25574[(2)]);
var inst_25493 = cljs.core.next.call(null,inst_25473);
var inst_25451 = inst_25493;
var inst_25452 = null;
var inst_25453 = (0);
var inst_25454 = (0);
var state_25574__$1 = (function (){var statearr_25584 = state_25574;
(statearr_25584[(13)] = inst_25454);

(statearr_25584[(14)] = inst_25492);

(statearr_25584[(15)] = inst_25453);

(statearr_25584[(16)] = inst_25452);

(statearr_25584[(17)] = inst_25451);

return statearr_25584;
})();
var statearr_25585_25669 = state_25574__$1;
(statearr_25585_25669[(2)] = null);

(statearr_25585_25669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (39))){
var state_25574__$1 = state_25574;
var statearr_25589_25670 = state_25574__$1;
(statearr_25589_25670[(2)] = null);

(statearr_25589_25670[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (4))){
var inst_25442 = (state_25574[(10)]);
var inst_25442__$1 = (state_25574[(2)]);
var inst_25443 = (inst_25442__$1 == null);
var state_25574__$1 = (function (){var statearr_25590 = state_25574;
(statearr_25590[(10)] = inst_25442__$1);

return statearr_25590;
})();
if(cljs.core.truth_(inst_25443)){
var statearr_25591_25671 = state_25574__$1;
(statearr_25591_25671[(1)] = (5));

} else {
var statearr_25592_25672 = state_25574__$1;
(statearr_25592_25672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (15))){
var inst_25454 = (state_25574[(13)]);
var inst_25453 = (state_25574[(15)]);
var inst_25452 = (state_25574[(16)]);
var inst_25451 = (state_25574[(17)]);
var inst_25469 = (state_25574[(2)]);
var inst_25470 = (inst_25454 + (1));
var tmp25586 = inst_25453;
var tmp25587 = inst_25452;
var tmp25588 = inst_25451;
var inst_25451__$1 = tmp25588;
var inst_25452__$1 = tmp25587;
var inst_25453__$1 = tmp25586;
var inst_25454__$1 = inst_25470;
var state_25574__$1 = (function (){var statearr_25593 = state_25574;
(statearr_25593[(13)] = inst_25454__$1);

(statearr_25593[(18)] = inst_25469);

(statearr_25593[(15)] = inst_25453__$1);

(statearr_25593[(16)] = inst_25452__$1);

(statearr_25593[(17)] = inst_25451__$1);

return statearr_25593;
})();
var statearr_25594_25673 = state_25574__$1;
(statearr_25594_25673[(2)] = null);

(statearr_25594_25673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (21))){
var inst_25496 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25598_25674 = state_25574__$1;
(statearr_25598_25674[(2)] = inst_25496);

(statearr_25598_25674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (31))){
var inst_25522 = (state_25574[(9)]);
var inst_25526 = done.call(null,null);
var inst_25527 = cljs.core.async.untap_STAR_.call(null,m,inst_25522);
var state_25574__$1 = (function (){var statearr_25599 = state_25574;
(statearr_25599[(19)] = inst_25526);

return statearr_25599;
})();
var statearr_25600_25675 = state_25574__$1;
(statearr_25600_25675[(2)] = inst_25527);

(statearr_25600_25675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (32))){
var inst_25516 = (state_25574[(20)]);
var inst_25514 = (state_25574[(21)]);
var inst_25515 = (state_25574[(11)]);
var inst_25517 = (state_25574[(12)]);
var inst_25529 = (state_25574[(2)]);
var inst_25530 = (inst_25517 + (1));
var tmp25595 = inst_25516;
var tmp25596 = inst_25514;
var tmp25597 = inst_25515;
var inst_25514__$1 = tmp25596;
var inst_25515__$1 = tmp25597;
var inst_25516__$1 = tmp25595;
var inst_25517__$1 = inst_25530;
var state_25574__$1 = (function (){var statearr_25601 = state_25574;
(statearr_25601[(20)] = inst_25516__$1);

(statearr_25601[(21)] = inst_25514__$1);

(statearr_25601[(11)] = inst_25515__$1);

(statearr_25601[(22)] = inst_25529);

(statearr_25601[(12)] = inst_25517__$1);

return statearr_25601;
})();
var statearr_25602_25676 = state_25574__$1;
(statearr_25602_25676[(2)] = null);

(statearr_25602_25676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (40))){
var inst_25542 = (state_25574[(23)]);
var inst_25546 = done.call(null,null);
var inst_25547 = cljs.core.async.untap_STAR_.call(null,m,inst_25542);
var state_25574__$1 = (function (){var statearr_25603 = state_25574;
(statearr_25603[(24)] = inst_25546);

return statearr_25603;
})();
var statearr_25604_25677 = state_25574__$1;
(statearr_25604_25677[(2)] = inst_25547);

(statearr_25604_25677[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (33))){
var inst_25533 = (state_25574[(25)]);
var inst_25535 = cljs.core.chunked_seq_QMARK_.call(null,inst_25533);
var state_25574__$1 = state_25574;
if(inst_25535){
var statearr_25605_25678 = state_25574__$1;
(statearr_25605_25678[(1)] = (36));

} else {
var statearr_25606_25679 = state_25574__$1;
(statearr_25606_25679[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (13))){
var inst_25463 = (state_25574[(26)]);
var inst_25466 = cljs.core.async.close_BANG_.call(null,inst_25463);
var state_25574__$1 = state_25574;
var statearr_25607_25680 = state_25574__$1;
(statearr_25607_25680[(2)] = inst_25466);

(statearr_25607_25680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (22))){
var inst_25486 = (state_25574[(8)]);
var inst_25489 = cljs.core.async.close_BANG_.call(null,inst_25486);
var state_25574__$1 = state_25574;
var statearr_25608_25681 = state_25574__$1;
(statearr_25608_25681[(2)] = inst_25489);

(statearr_25608_25681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (36))){
var inst_25533 = (state_25574[(25)]);
var inst_25537 = cljs.core.chunk_first.call(null,inst_25533);
var inst_25538 = cljs.core.chunk_rest.call(null,inst_25533);
var inst_25539 = cljs.core.count.call(null,inst_25537);
var inst_25514 = inst_25538;
var inst_25515 = inst_25537;
var inst_25516 = inst_25539;
var inst_25517 = (0);
var state_25574__$1 = (function (){var statearr_25609 = state_25574;
(statearr_25609[(20)] = inst_25516);

(statearr_25609[(21)] = inst_25514);

(statearr_25609[(11)] = inst_25515);

(statearr_25609[(12)] = inst_25517);

return statearr_25609;
})();
var statearr_25610_25682 = state_25574__$1;
(statearr_25610_25682[(2)] = null);

(statearr_25610_25682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (41))){
var inst_25533 = (state_25574[(25)]);
var inst_25549 = (state_25574[(2)]);
var inst_25550 = cljs.core.next.call(null,inst_25533);
var inst_25514 = inst_25550;
var inst_25515 = null;
var inst_25516 = (0);
var inst_25517 = (0);
var state_25574__$1 = (function (){var statearr_25611 = state_25574;
(statearr_25611[(20)] = inst_25516);

(statearr_25611[(27)] = inst_25549);

(statearr_25611[(21)] = inst_25514);

(statearr_25611[(11)] = inst_25515);

(statearr_25611[(12)] = inst_25517);

return statearr_25611;
})();
var statearr_25612_25683 = state_25574__$1;
(statearr_25612_25683[(2)] = null);

(statearr_25612_25683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (43))){
var state_25574__$1 = state_25574;
var statearr_25613_25684 = state_25574__$1;
(statearr_25613_25684[(2)] = null);

(statearr_25613_25684[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (29))){
var inst_25558 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25614_25685 = state_25574__$1;
(statearr_25614_25685[(2)] = inst_25558);

(statearr_25614_25685[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (44))){
var inst_25567 = (state_25574[(2)]);
var state_25574__$1 = (function (){var statearr_25615 = state_25574;
(statearr_25615[(28)] = inst_25567);

return statearr_25615;
})();
var statearr_25616_25686 = state_25574__$1;
(statearr_25616_25686[(2)] = null);

(statearr_25616_25686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (6))){
var inst_25506 = (state_25574[(29)]);
var inst_25505 = cljs.core.deref.call(null,cs);
var inst_25506__$1 = cljs.core.keys.call(null,inst_25505);
var inst_25507 = cljs.core.count.call(null,inst_25506__$1);
var inst_25508 = cljs.core.reset_BANG_.call(null,dctr,inst_25507);
var inst_25513 = cljs.core.seq.call(null,inst_25506__$1);
var inst_25514 = inst_25513;
var inst_25515 = null;
var inst_25516 = (0);
var inst_25517 = (0);
var state_25574__$1 = (function (){var statearr_25617 = state_25574;
(statearr_25617[(20)] = inst_25516);

(statearr_25617[(30)] = inst_25508);

(statearr_25617[(21)] = inst_25514);

(statearr_25617[(11)] = inst_25515);

(statearr_25617[(29)] = inst_25506__$1);

(statearr_25617[(12)] = inst_25517);

return statearr_25617;
})();
var statearr_25618_25687 = state_25574__$1;
(statearr_25618_25687[(2)] = null);

(statearr_25618_25687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (28))){
var inst_25533 = (state_25574[(25)]);
var inst_25514 = (state_25574[(21)]);
var inst_25533__$1 = cljs.core.seq.call(null,inst_25514);
var state_25574__$1 = (function (){var statearr_25619 = state_25574;
(statearr_25619[(25)] = inst_25533__$1);

return statearr_25619;
})();
if(inst_25533__$1){
var statearr_25620_25688 = state_25574__$1;
(statearr_25620_25688[(1)] = (33));

} else {
var statearr_25621_25689 = state_25574__$1;
(statearr_25621_25689[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (25))){
var inst_25516 = (state_25574[(20)]);
var inst_25517 = (state_25574[(12)]);
var inst_25519 = (inst_25517 < inst_25516);
var inst_25520 = inst_25519;
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25520)){
var statearr_25622_25690 = state_25574__$1;
(statearr_25622_25690[(1)] = (27));

} else {
var statearr_25623_25691 = state_25574__$1;
(statearr_25623_25691[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (34))){
var state_25574__$1 = state_25574;
var statearr_25624_25692 = state_25574__$1;
(statearr_25624_25692[(2)] = null);

(statearr_25624_25692[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (17))){
var state_25574__$1 = state_25574;
var statearr_25625_25693 = state_25574__$1;
(statearr_25625_25693[(2)] = null);

(statearr_25625_25693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (3))){
var inst_25572 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25574__$1,inst_25572);
} else {
if((state_val_25575 === (12))){
var inst_25501 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25626_25694 = state_25574__$1;
(statearr_25626_25694[(2)] = inst_25501);

(statearr_25626_25694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (2))){
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25574__$1,(4),ch);
} else {
if((state_val_25575 === (23))){
var state_25574__$1 = state_25574;
var statearr_25627_25695 = state_25574__$1;
(statearr_25627_25695[(2)] = null);

(statearr_25627_25695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (35))){
var inst_25556 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25628_25696 = state_25574__$1;
(statearr_25628_25696[(2)] = inst_25556);

(statearr_25628_25696[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (19))){
var inst_25473 = (state_25574[(7)]);
var inst_25477 = cljs.core.chunk_first.call(null,inst_25473);
var inst_25478 = cljs.core.chunk_rest.call(null,inst_25473);
var inst_25479 = cljs.core.count.call(null,inst_25477);
var inst_25451 = inst_25478;
var inst_25452 = inst_25477;
var inst_25453 = inst_25479;
var inst_25454 = (0);
var state_25574__$1 = (function (){var statearr_25629 = state_25574;
(statearr_25629[(13)] = inst_25454);

(statearr_25629[(15)] = inst_25453);

(statearr_25629[(16)] = inst_25452);

(statearr_25629[(17)] = inst_25451);

return statearr_25629;
})();
var statearr_25630_25697 = state_25574__$1;
(statearr_25630_25697[(2)] = null);

(statearr_25630_25697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (11))){
var inst_25451 = (state_25574[(17)]);
var inst_25473 = (state_25574[(7)]);
var inst_25473__$1 = cljs.core.seq.call(null,inst_25451);
var state_25574__$1 = (function (){var statearr_25631 = state_25574;
(statearr_25631[(7)] = inst_25473__$1);

return statearr_25631;
})();
if(inst_25473__$1){
var statearr_25632_25698 = state_25574__$1;
(statearr_25632_25698[(1)] = (16));

} else {
var statearr_25633_25699 = state_25574__$1;
(statearr_25633_25699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (9))){
var inst_25503 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25634_25700 = state_25574__$1;
(statearr_25634_25700[(2)] = inst_25503);

(statearr_25634_25700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (5))){
var inst_25449 = cljs.core.deref.call(null,cs);
var inst_25450 = cljs.core.seq.call(null,inst_25449);
var inst_25451 = inst_25450;
var inst_25452 = null;
var inst_25453 = (0);
var inst_25454 = (0);
var state_25574__$1 = (function (){var statearr_25635 = state_25574;
(statearr_25635[(13)] = inst_25454);

(statearr_25635[(15)] = inst_25453);

(statearr_25635[(16)] = inst_25452);

(statearr_25635[(17)] = inst_25451);

return statearr_25635;
})();
var statearr_25636_25701 = state_25574__$1;
(statearr_25636_25701[(2)] = null);

(statearr_25636_25701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (14))){
var state_25574__$1 = state_25574;
var statearr_25637_25702 = state_25574__$1;
(statearr_25637_25702[(2)] = null);

(statearr_25637_25702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (45))){
var inst_25564 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25638_25703 = state_25574__$1;
(statearr_25638_25703[(2)] = inst_25564);

(statearr_25638_25703[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (26))){
var inst_25506 = (state_25574[(29)]);
var inst_25560 = (state_25574[(2)]);
var inst_25561 = cljs.core.seq.call(null,inst_25506);
var state_25574__$1 = (function (){var statearr_25639 = state_25574;
(statearr_25639[(31)] = inst_25560);

return statearr_25639;
})();
if(inst_25561){
var statearr_25640_25704 = state_25574__$1;
(statearr_25640_25704[(1)] = (42));

} else {
var statearr_25641_25705 = state_25574__$1;
(statearr_25641_25705[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (16))){
var inst_25473 = (state_25574[(7)]);
var inst_25475 = cljs.core.chunked_seq_QMARK_.call(null,inst_25473);
var state_25574__$1 = state_25574;
if(inst_25475){
var statearr_25642_25706 = state_25574__$1;
(statearr_25642_25706[(1)] = (19));

} else {
var statearr_25643_25707 = state_25574__$1;
(statearr_25643_25707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (38))){
var inst_25553 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25644_25708 = state_25574__$1;
(statearr_25644_25708[(2)] = inst_25553);

(statearr_25644_25708[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (30))){
var state_25574__$1 = state_25574;
var statearr_25645_25709 = state_25574__$1;
(statearr_25645_25709[(2)] = null);

(statearr_25645_25709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (10))){
var inst_25454 = (state_25574[(13)]);
var inst_25452 = (state_25574[(16)]);
var inst_25462 = cljs.core._nth.call(null,inst_25452,inst_25454);
var inst_25463 = cljs.core.nth.call(null,inst_25462,(0),null);
var inst_25464 = cljs.core.nth.call(null,inst_25462,(1),null);
var state_25574__$1 = (function (){var statearr_25646 = state_25574;
(statearr_25646[(26)] = inst_25463);

return statearr_25646;
})();
if(cljs.core.truth_(inst_25464)){
var statearr_25647_25710 = state_25574__$1;
(statearr_25647_25710[(1)] = (13));

} else {
var statearr_25648_25711 = state_25574__$1;
(statearr_25648_25711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (18))){
var inst_25499 = (state_25574[(2)]);
var state_25574__$1 = state_25574;
var statearr_25649_25712 = state_25574__$1;
(statearr_25649_25712[(2)] = inst_25499);

(statearr_25649_25712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (42))){
var state_25574__$1 = state_25574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25574__$1,(45),dchan);
} else {
if((state_val_25575 === (37))){
var inst_25533 = (state_25574[(25)]);
var inst_25542 = (state_25574[(23)]);
var inst_25442 = (state_25574[(10)]);
var inst_25542__$1 = cljs.core.first.call(null,inst_25533);
var inst_25543 = cljs.core.async.put_BANG_.call(null,inst_25542__$1,inst_25442,done);
var state_25574__$1 = (function (){var statearr_25650 = state_25574;
(statearr_25650[(23)] = inst_25542__$1);

return statearr_25650;
})();
if(cljs.core.truth_(inst_25543)){
var statearr_25651_25713 = state_25574__$1;
(statearr_25651_25713[(1)] = (39));

} else {
var statearr_25652_25714 = state_25574__$1;
(statearr_25652_25714[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25575 === (8))){
var inst_25454 = (state_25574[(13)]);
var inst_25453 = (state_25574[(15)]);
var inst_25456 = (inst_25454 < inst_25453);
var inst_25457 = inst_25456;
var state_25574__$1 = state_25574;
if(cljs.core.truth_(inst_25457)){
var statearr_25653_25715 = state_25574__$1;
(statearr_25653_25715[(1)] = (10));

} else {
var statearr_25654_25716 = state_25574__$1;
(statearr_25654_25716[(1)] = (11));

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
});})(c__24338__auto___25662,cs,m,dchan,dctr,done))
;
return ((function (switch__24226__auto__,c__24338__auto___25662,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24227__auto__ = null;
var cljs$core$async$mult_$_state_machine__24227__auto____0 = (function (){
var statearr_25658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25658[(0)] = cljs$core$async$mult_$_state_machine__24227__auto__);

(statearr_25658[(1)] = (1));

return statearr_25658;
});
var cljs$core$async$mult_$_state_machine__24227__auto____1 = (function (state_25574){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_25574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e25659){if((e25659 instanceof Object)){
var ex__24230__auto__ = e25659;
var statearr_25660_25717 = state_25574;
(statearr_25660_25717[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25718 = state_25574;
state_25574 = G__25718;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24227__auto__ = function(state_25574){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24227__auto____1.call(this,state_25574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24227__auto____0;
cljs$core$async$mult_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24227__auto____1;
return cljs$core$async$mult_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___25662,cs,m,dchan,dctr,done))
})();
var state__24340__auto__ = (function (){var statearr_25661 = f__24339__auto__.call(null);
(statearr_25661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___25662);

return statearr_25661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___25662,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25719 = [];
var len__20256__auto___25722 = arguments.length;
var i__20257__auto___25723 = (0);
while(true){
if((i__20257__auto___25723 < len__20256__auto___25722)){
args25719.push((arguments[i__20257__auto___25723]));

var G__25724 = (i__20257__auto___25723 + (1));
i__20257__auto___25723 = G__25724;
continue;
} else {
}
break;
}

var G__25721 = args25719.length;
switch (G__25721) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25719.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m,ch);
} else {
var m__19812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m,ch);
} else {
var m__19812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m);
} else {
var m__19812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m,state_map);
} else {
var m__19812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19811__auto__ = (((m == null))?null:m);
var m__19812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,m,mode);
} else {
var m__19812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20263__auto__ = [];
var len__20256__auto___25736 = arguments.length;
var i__20257__auto___25737 = (0);
while(true){
if((i__20257__auto___25737 < len__20256__auto___25736)){
args__20263__auto__.push((arguments[i__20257__auto___25737]));

var G__25738 = (i__20257__auto___25737 + (1));
i__20257__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var argseq__20264__auto__ = ((((3) < args__20263__auto__.length))?(new cljs.core.IndexedSeq(args__20263__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20264__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25730){
var map__25731 = p__25730;
var map__25731__$1 = ((((!((map__25731 == null)))?((((map__25731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25731):map__25731);
var opts = map__25731__$1;
var statearr_25733_25739 = state;
(statearr_25733_25739[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25731,map__25731__$1,opts){
return (function (val){
var statearr_25734_25740 = state;
(statearr_25734_25740[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25731,map__25731__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25735_25741 = state;
(statearr_25735_25741[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25726){
var G__25727 = cljs.core.first.call(null,seq25726);
var seq25726__$1 = cljs.core.next.call(null,seq25726);
var G__25728 = cljs.core.first.call(null,seq25726__$1);
var seq25726__$2 = cljs.core.next.call(null,seq25726__$1);
var G__25729 = cljs.core.first.call(null,seq25726__$2);
var seq25726__$3 = cljs.core.next.call(null,seq25726__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25727,G__25728,G__25729,seq25726__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25909 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25910){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25910 = meta25910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25911,meta25910__$1){
var self__ = this;
var _25911__$1 = this;
return (new cljs.core.async.t_cljs$core$async25909(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25910__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25911){
var self__ = this;
var _25911__$1 = this;
return self__.meta25910;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25910","meta25910",-89547834,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25909";

cljs.core.async.t_cljs$core$async25909.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async25909");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25909 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25909(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25910){
return (new cljs.core.async.t_cljs$core$async25909(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25910));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25909(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24338__auto___26076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26013){
var state_val_26014 = (state_26013[(1)]);
if((state_val_26014 === (7))){
var inst_25928 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26015_26077 = state_26013__$1;
(statearr_26015_26077[(2)] = inst_25928);

(statearr_26015_26077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (20))){
var inst_25940 = (state_26013[(7)]);
var state_26013__$1 = state_26013;
var statearr_26016_26078 = state_26013__$1;
(statearr_26016_26078[(2)] = inst_25940);

(statearr_26016_26078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (27))){
var state_26013__$1 = state_26013;
var statearr_26017_26079 = state_26013__$1;
(statearr_26017_26079[(2)] = null);

(statearr_26017_26079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (1))){
var inst_25915 = (state_26013[(8)]);
var inst_25915__$1 = calc_state.call(null);
var inst_25917 = (inst_25915__$1 == null);
var inst_25918 = cljs.core.not.call(null,inst_25917);
var state_26013__$1 = (function (){var statearr_26018 = state_26013;
(statearr_26018[(8)] = inst_25915__$1);

return statearr_26018;
})();
if(inst_25918){
var statearr_26019_26080 = state_26013__$1;
(statearr_26019_26080[(1)] = (2));

} else {
var statearr_26020_26081 = state_26013__$1;
(statearr_26020_26081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (24))){
var inst_25964 = (state_26013[(9)]);
var inst_25973 = (state_26013[(10)]);
var inst_25987 = (state_26013[(11)]);
var inst_25987__$1 = inst_25964.call(null,inst_25973);
var state_26013__$1 = (function (){var statearr_26021 = state_26013;
(statearr_26021[(11)] = inst_25987__$1);

return statearr_26021;
})();
if(cljs.core.truth_(inst_25987__$1)){
var statearr_26022_26082 = state_26013__$1;
(statearr_26022_26082[(1)] = (29));

} else {
var statearr_26023_26083 = state_26013__$1;
(statearr_26023_26083[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (4))){
var inst_25931 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25931)){
var statearr_26024_26084 = state_26013__$1;
(statearr_26024_26084[(1)] = (8));

} else {
var statearr_26025_26085 = state_26013__$1;
(statearr_26025_26085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (15))){
var inst_25958 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25958)){
var statearr_26026_26086 = state_26013__$1;
(statearr_26026_26086[(1)] = (19));

} else {
var statearr_26027_26087 = state_26013__$1;
(statearr_26027_26087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (21))){
var inst_25963 = (state_26013[(12)]);
var inst_25963__$1 = (state_26013[(2)]);
var inst_25964 = cljs.core.get.call(null,inst_25963__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25965 = cljs.core.get.call(null,inst_25963__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25966 = cljs.core.get.call(null,inst_25963__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26013__$1 = (function (){var statearr_26028 = state_26013;
(statearr_26028[(9)] = inst_25964);

(statearr_26028[(13)] = inst_25965);

(statearr_26028[(12)] = inst_25963__$1);

return statearr_26028;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26013__$1,(22),inst_25966);
} else {
if((state_val_26014 === (31))){
var inst_25995 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25995)){
var statearr_26029_26088 = state_26013__$1;
(statearr_26029_26088[(1)] = (32));

} else {
var statearr_26030_26089 = state_26013__$1;
(statearr_26030_26089[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (32))){
var inst_25972 = (state_26013[(14)]);
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26013__$1,(35),out,inst_25972);
} else {
if((state_val_26014 === (33))){
var inst_25963 = (state_26013[(12)]);
var inst_25940 = inst_25963;
var state_26013__$1 = (function (){var statearr_26031 = state_26013;
(statearr_26031[(7)] = inst_25940);

return statearr_26031;
})();
var statearr_26032_26090 = state_26013__$1;
(statearr_26032_26090[(2)] = null);

(statearr_26032_26090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (13))){
var inst_25940 = (state_26013[(7)]);
var inst_25947 = inst_25940.cljs$lang$protocol_mask$partition0$;
var inst_25948 = (inst_25947 & (64));
var inst_25949 = inst_25940.cljs$core$ISeq$;
var inst_25950 = (cljs.core.PROTOCOL_SENTINEL === inst_25949);
var inst_25951 = (inst_25948) || (inst_25950);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25951)){
var statearr_26033_26091 = state_26013__$1;
(statearr_26033_26091[(1)] = (16));

} else {
var statearr_26034_26092 = state_26013__$1;
(statearr_26034_26092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (22))){
var inst_25972 = (state_26013[(14)]);
var inst_25973 = (state_26013[(10)]);
var inst_25971 = (state_26013[(2)]);
var inst_25972__$1 = cljs.core.nth.call(null,inst_25971,(0),null);
var inst_25973__$1 = cljs.core.nth.call(null,inst_25971,(1),null);
var inst_25974 = (inst_25972__$1 == null);
var inst_25975 = cljs.core._EQ_.call(null,inst_25973__$1,change);
var inst_25976 = (inst_25974) || (inst_25975);
var state_26013__$1 = (function (){var statearr_26035 = state_26013;
(statearr_26035[(14)] = inst_25972__$1);

(statearr_26035[(10)] = inst_25973__$1);

return statearr_26035;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_26036_26093 = state_26013__$1;
(statearr_26036_26093[(1)] = (23));

} else {
var statearr_26037_26094 = state_26013__$1;
(statearr_26037_26094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (36))){
var inst_25963 = (state_26013[(12)]);
var inst_25940 = inst_25963;
var state_26013__$1 = (function (){var statearr_26038 = state_26013;
(statearr_26038[(7)] = inst_25940);

return statearr_26038;
})();
var statearr_26039_26095 = state_26013__$1;
(statearr_26039_26095[(2)] = null);

(statearr_26039_26095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (29))){
var inst_25987 = (state_26013[(11)]);
var state_26013__$1 = state_26013;
var statearr_26040_26096 = state_26013__$1;
(statearr_26040_26096[(2)] = inst_25987);

(statearr_26040_26096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (6))){
var state_26013__$1 = state_26013;
var statearr_26041_26097 = state_26013__$1;
(statearr_26041_26097[(2)] = false);

(statearr_26041_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (28))){
var inst_25983 = (state_26013[(2)]);
var inst_25984 = calc_state.call(null);
var inst_25940 = inst_25984;
var state_26013__$1 = (function (){var statearr_26042 = state_26013;
(statearr_26042[(15)] = inst_25983);

(statearr_26042[(7)] = inst_25940);

return statearr_26042;
})();
var statearr_26043_26098 = state_26013__$1;
(statearr_26043_26098[(2)] = null);

(statearr_26043_26098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (25))){
var inst_26009 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26044_26099 = state_26013__$1;
(statearr_26044_26099[(2)] = inst_26009);

(statearr_26044_26099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (34))){
var inst_26007 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26045_26100 = state_26013__$1;
(statearr_26045_26100[(2)] = inst_26007);

(statearr_26045_26100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (17))){
var state_26013__$1 = state_26013;
var statearr_26046_26101 = state_26013__$1;
(statearr_26046_26101[(2)] = false);

(statearr_26046_26101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (3))){
var state_26013__$1 = state_26013;
var statearr_26047_26102 = state_26013__$1;
(statearr_26047_26102[(2)] = false);

(statearr_26047_26102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (12))){
var inst_26011 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26013__$1,inst_26011);
} else {
if((state_val_26014 === (2))){
var inst_25915 = (state_26013[(8)]);
var inst_25920 = inst_25915.cljs$lang$protocol_mask$partition0$;
var inst_25921 = (inst_25920 & (64));
var inst_25922 = inst_25915.cljs$core$ISeq$;
var inst_25923 = (cljs.core.PROTOCOL_SENTINEL === inst_25922);
var inst_25924 = (inst_25921) || (inst_25923);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25924)){
var statearr_26048_26103 = state_26013__$1;
(statearr_26048_26103[(1)] = (5));

} else {
var statearr_26049_26104 = state_26013__$1;
(statearr_26049_26104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (23))){
var inst_25972 = (state_26013[(14)]);
var inst_25978 = (inst_25972 == null);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25978)){
var statearr_26050_26105 = state_26013__$1;
(statearr_26050_26105[(1)] = (26));

} else {
var statearr_26051_26106 = state_26013__$1;
(statearr_26051_26106[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (35))){
var inst_25998 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25998)){
var statearr_26052_26107 = state_26013__$1;
(statearr_26052_26107[(1)] = (36));

} else {
var statearr_26053_26108 = state_26013__$1;
(statearr_26053_26108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (19))){
var inst_25940 = (state_26013[(7)]);
var inst_25960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25940);
var state_26013__$1 = state_26013;
var statearr_26054_26109 = state_26013__$1;
(statearr_26054_26109[(2)] = inst_25960);

(statearr_26054_26109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (11))){
var inst_25940 = (state_26013[(7)]);
var inst_25944 = (inst_25940 == null);
var inst_25945 = cljs.core.not.call(null,inst_25944);
var state_26013__$1 = state_26013;
if(inst_25945){
var statearr_26055_26110 = state_26013__$1;
(statearr_26055_26110[(1)] = (13));

} else {
var statearr_26056_26111 = state_26013__$1;
(statearr_26056_26111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (9))){
var inst_25915 = (state_26013[(8)]);
var state_26013__$1 = state_26013;
var statearr_26057_26112 = state_26013__$1;
(statearr_26057_26112[(2)] = inst_25915);

(statearr_26057_26112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (5))){
var state_26013__$1 = state_26013;
var statearr_26058_26113 = state_26013__$1;
(statearr_26058_26113[(2)] = true);

(statearr_26058_26113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (14))){
var state_26013__$1 = state_26013;
var statearr_26059_26114 = state_26013__$1;
(statearr_26059_26114[(2)] = false);

(statearr_26059_26114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (26))){
var inst_25973 = (state_26013[(10)]);
var inst_25980 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25973);
var state_26013__$1 = state_26013;
var statearr_26060_26115 = state_26013__$1;
(statearr_26060_26115[(2)] = inst_25980);

(statearr_26060_26115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (16))){
var state_26013__$1 = state_26013;
var statearr_26061_26116 = state_26013__$1;
(statearr_26061_26116[(2)] = true);

(statearr_26061_26116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (38))){
var inst_26003 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26062_26117 = state_26013__$1;
(statearr_26062_26117[(2)] = inst_26003);

(statearr_26062_26117[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (30))){
var inst_25964 = (state_26013[(9)]);
var inst_25973 = (state_26013[(10)]);
var inst_25965 = (state_26013[(13)]);
var inst_25990 = cljs.core.empty_QMARK_.call(null,inst_25964);
var inst_25991 = inst_25965.call(null,inst_25973);
var inst_25992 = cljs.core.not.call(null,inst_25991);
var inst_25993 = (inst_25990) && (inst_25992);
var state_26013__$1 = state_26013;
var statearr_26063_26118 = state_26013__$1;
(statearr_26063_26118[(2)] = inst_25993);

(statearr_26063_26118[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (10))){
var inst_25915 = (state_26013[(8)]);
var inst_25936 = (state_26013[(2)]);
var inst_25937 = cljs.core.get.call(null,inst_25936,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25938 = cljs.core.get.call(null,inst_25936,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25939 = cljs.core.get.call(null,inst_25936,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25940 = inst_25915;
var state_26013__$1 = (function (){var statearr_26064 = state_26013;
(statearr_26064[(16)] = inst_25937);

(statearr_26064[(17)] = inst_25938);

(statearr_26064[(7)] = inst_25940);

(statearr_26064[(18)] = inst_25939);

return statearr_26064;
})();
var statearr_26065_26119 = state_26013__$1;
(statearr_26065_26119[(2)] = null);

(statearr_26065_26119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (18))){
var inst_25955 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26066_26120 = state_26013__$1;
(statearr_26066_26120[(2)] = inst_25955);

(statearr_26066_26120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (37))){
var state_26013__$1 = state_26013;
var statearr_26067_26121 = state_26013__$1;
(statearr_26067_26121[(2)] = null);

(statearr_26067_26121[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26014 === (8))){
var inst_25915 = (state_26013[(8)]);
var inst_25933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25915);
var state_26013__$1 = state_26013;
var statearr_26068_26122 = state_26013__$1;
(statearr_26068_26122[(2)] = inst_25933);

(statearr_26068_26122[(1)] = (10));


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
});})(c__24338__auto___26076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24226__auto__,c__24338__auto___26076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24227__auto__ = null;
var cljs$core$async$mix_$_state_machine__24227__auto____0 = (function (){
var statearr_26072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26072[(0)] = cljs$core$async$mix_$_state_machine__24227__auto__);

(statearr_26072[(1)] = (1));

return statearr_26072;
});
var cljs$core$async$mix_$_state_machine__24227__auto____1 = (function (state_26013){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26073){if((e26073 instanceof Object)){
var ex__24230__auto__ = e26073;
var statearr_26074_26123 = state_26013;
(statearr_26074_26123[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26124 = state_26013;
state_26013 = G__26124;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24227__auto__ = function(state_26013){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24227__auto____1.call(this,state_26013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24227__auto____0;
cljs$core$async$mix_$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24227__auto____1;
return cljs$core$async$mix_$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24340__auto__ = (function (){var statearr_26075 = f__24339__auto__.call(null);
(statearr_26075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26076);

return statearr_26075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19811__auto__ = (((p == null))?null:p);
var m__19812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19811__auto__ = (((p == null))?null:p);
var m__19812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,p,v,ch);
} else {
var m__19812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26125 = [];
var len__20256__auto___26128 = arguments.length;
var i__20257__auto___26129 = (0);
while(true){
if((i__20257__auto___26129 < len__20256__auto___26128)){
args26125.push((arguments[i__20257__auto___26129]));

var G__26130 = (i__20257__auto___26129 + (1));
i__20257__auto___26129 = G__26130;
continue;
} else {
}
break;
}

var G__26127 = args26125.length;
switch (G__26127) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26125.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19811__auto__ = (((p == null))?null:p);
var m__19812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,p);
} else {
var m__19812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19811__auto__ = (((p == null))?null:p);
var m__19812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19811__auto__)]);
if(!((m__19812__auto__ == null))){
return m__19812__auto__.call(null,p,v);
} else {
var m__19812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19812__auto____$1 == null))){
return m__19812__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26133 = [];
var len__20256__auto___26258 = arguments.length;
var i__20257__auto___26259 = (0);
while(true){
if((i__20257__auto___26259 < len__20256__auto___26258)){
args26133.push((arguments[i__20257__auto___26259]));

var G__26260 = (i__20257__auto___26259 + (1));
i__20257__auto___26259 = G__26260;
continue;
} else {
}
break;
}

var G__26135 = args26133.length;
switch (G__26135) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26133.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19143__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19143__auto__)){
return or__19143__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19143__auto__,mults){
return (function (p1__26132_SHARP_){
if(cljs.core.truth_(p1__26132_SHARP_.call(null,topic))){
return p1__26132_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26132_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19143__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26136 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26137){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26137 = meta26137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26138,meta26137__$1){
var self__ = this;
var _26138__$1 = this;
return (new cljs.core.async.t_cljs$core$async26136(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26137__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26138){
var self__ = this;
var _26138__$1 = this;
return self__.meta26137;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26137","meta26137",1292214839,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26136";

cljs.core.async.t_cljs$core$async26136.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async26136");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26136 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26136(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26137){
return (new cljs.core.async.t_cljs$core$async26136(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26137));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26136(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24338__auto___26262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26262,mults,ensure_mult,p){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26262,mults,ensure_mult,p){
return (function (state_26210){
var state_val_26211 = (state_26210[(1)]);
if((state_val_26211 === (7))){
var inst_26206 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26212_26263 = state_26210__$1;
(statearr_26212_26263[(2)] = inst_26206);

(statearr_26212_26263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (20))){
var state_26210__$1 = state_26210;
var statearr_26213_26264 = state_26210__$1;
(statearr_26213_26264[(2)] = null);

(statearr_26213_26264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (1))){
var state_26210__$1 = state_26210;
var statearr_26214_26265 = state_26210__$1;
(statearr_26214_26265[(2)] = null);

(statearr_26214_26265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (24))){
var inst_26189 = (state_26210[(7)]);
var inst_26198 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26189);
var state_26210__$1 = state_26210;
var statearr_26215_26266 = state_26210__$1;
(statearr_26215_26266[(2)] = inst_26198);

(statearr_26215_26266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (4))){
var inst_26141 = (state_26210[(8)]);
var inst_26141__$1 = (state_26210[(2)]);
var inst_26142 = (inst_26141__$1 == null);
var state_26210__$1 = (function (){var statearr_26216 = state_26210;
(statearr_26216[(8)] = inst_26141__$1);

return statearr_26216;
})();
if(cljs.core.truth_(inst_26142)){
var statearr_26217_26267 = state_26210__$1;
(statearr_26217_26267[(1)] = (5));

} else {
var statearr_26218_26268 = state_26210__$1;
(statearr_26218_26268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (15))){
var inst_26183 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26219_26269 = state_26210__$1;
(statearr_26219_26269[(2)] = inst_26183);

(statearr_26219_26269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (21))){
var inst_26203 = (state_26210[(2)]);
var state_26210__$1 = (function (){var statearr_26220 = state_26210;
(statearr_26220[(9)] = inst_26203);

return statearr_26220;
})();
var statearr_26221_26270 = state_26210__$1;
(statearr_26221_26270[(2)] = null);

(statearr_26221_26270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (13))){
var inst_26165 = (state_26210[(10)]);
var inst_26167 = cljs.core.chunked_seq_QMARK_.call(null,inst_26165);
var state_26210__$1 = state_26210;
if(inst_26167){
var statearr_26222_26271 = state_26210__$1;
(statearr_26222_26271[(1)] = (16));

} else {
var statearr_26223_26272 = state_26210__$1;
(statearr_26223_26272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (22))){
var inst_26195 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
if(cljs.core.truth_(inst_26195)){
var statearr_26224_26273 = state_26210__$1;
(statearr_26224_26273[(1)] = (23));

} else {
var statearr_26225_26274 = state_26210__$1;
(statearr_26225_26274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (6))){
var inst_26191 = (state_26210[(11)]);
var inst_26189 = (state_26210[(7)]);
var inst_26141 = (state_26210[(8)]);
var inst_26189__$1 = topic_fn.call(null,inst_26141);
var inst_26190 = cljs.core.deref.call(null,mults);
var inst_26191__$1 = cljs.core.get.call(null,inst_26190,inst_26189__$1);
var state_26210__$1 = (function (){var statearr_26226 = state_26210;
(statearr_26226[(11)] = inst_26191__$1);

(statearr_26226[(7)] = inst_26189__$1);

return statearr_26226;
})();
if(cljs.core.truth_(inst_26191__$1)){
var statearr_26227_26275 = state_26210__$1;
(statearr_26227_26275[(1)] = (19));

} else {
var statearr_26228_26276 = state_26210__$1;
(statearr_26228_26276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (25))){
var inst_26200 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26229_26277 = state_26210__$1;
(statearr_26229_26277[(2)] = inst_26200);

(statearr_26229_26277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (17))){
var inst_26165 = (state_26210[(10)]);
var inst_26174 = cljs.core.first.call(null,inst_26165);
var inst_26175 = cljs.core.async.muxch_STAR_.call(null,inst_26174);
var inst_26176 = cljs.core.async.close_BANG_.call(null,inst_26175);
var inst_26177 = cljs.core.next.call(null,inst_26165);
var inst_26151 = inst_26177;
var inst_26152 = null;
var inst_26153 = (0);
var inst_26154 = (0);
var state_26210__$1 = (function (){var statearr_26230 = state_26210;
(statearr_26230[(12)] = inst_26152);

(statearr_26230[(13)] = inst_26151);

(statearr_26230[(14)] = inst_26153);

(statearr_26230[(15)] = inst_26176);

(statearr_26230[(16)] = inst_26154);

return statearr_26230;
})();
var statearr_26231_26278 = state_26210__$1;
(statearr_26231_26278[(2)] = null);

(statearr_26231_26278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (3))){
var inst_26208 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26210__$1,inst_26208);
} else {
if((state_val_26211 === (12))){
var inst_26185 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26232_26279 = state_26210__$1;
(statearr_26232_26279[(2)] = inst_26185);

(statearr_26232_26279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (2))){
var state_26210__$1 = state_26210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26210__$1,(4),ch);
} else {
if((state_val_26211 === (23))){
var state_26210__$1 = state_26210;
var statearr_26233_26280 = state_26210__$1;
(statearr_26233_26280[(2)] = null);

(statearr_26233_26280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (19))){
var inst_26191 = (state_26210[(11)]);
var inst_26141 = (state_26210[(8)]);
var inst_26193 = cljs.core.async.muxch_STAR_.call(null,inst_26191);
var state_26210__$1 = state_26210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26210__$1,(22),inst_26193,inst_26141);
} else {
if((state_val_26211 === (11))){
var inst_26151 = (state_26210[(13)]);
var inst_26165 = (state_26210[(10)]);
var inst_26165__$1 = cljs.core.seq.call(null,inst_26151);
var state_26210__$1 = (function (){var statearr_26234 = state_26210;
(statearr_26234[(10)] = inst_26165__$1);

return statearr_26234;
})();
if(inst_26165__$1){
var statearr_26235_26281 = state_26210__$1;
(statearr_26235_26281[(1)] = (13));

} else {
var statearr_26236_26282 = state_26210__$1;
(statearr_26236_26282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (9))){
var inst_26187 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26237_26283 = state_26210__$1;
(statearr_26237_26283[(2)] = inst_26187);

(statearr_26237_26283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (5))){
var inst_26148 = cljs.core.deref.call(null,mults);
var inst_26149 = cljs.core.vals.call(null,inst_26148);
var inst_26150 = cljs.core.seq.call(null,inst_26149);
var inst_26151 = inst_26150;
var inst_26152 = null;
var inst_26153 = (0);
var inst_26154 = (0);
var state_26210__$1 = (function (){var statearr_26238 = state_26210;
(statearr_26238[(12)] = inst_26152);

(statearr_26238[(13)] = inst_26151);

(statearr_26238[(14)] = inst_26153);

(statearr_26238[(16)] = inst_26154);

return statearr_26238;
})();
var statearr_26239_26284 = state_26210__$1;
(statearr_26239_26284[(2)] = null);

(statearr_26239_26284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (14))){
var state_26210__$1 = state_26210;
var statearr_26243_26285 = state_26210__$1;
(statearr_26243_26285[(2)] = null);

(statearr_26243_26285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (16))){
var inst_26165 = (state_26210[(10)]);
var inst_26169 = cljs.core.chunk_first.call(null,inst_26165);
var inst_26170 = cljs.core.chunk_rest.call(null,inst_26165);
var inst_26171 = cljs.core.count.call(null,inst_26169);
var inst_26151 = inst_26170;
var inst_26152 = inst_26169;
var inst_26153 = inst_26171;
var inst_26154 = (0);
var state_26210__$1 = (function (){var statearr_26244 = state_26210;
(statearr_26244[(12)] = inst_26152);

(statearr_26244[(13)] = inst_26151);

(statearr_26244[(14)] = inst_26153);

(statearr_26244[(16)] = inst_26154);

return statearr_26244;
})();
var statearr_26245_26286 = state_26210__$1;
(statearr_26245_26286[(2)] = null);

(statearr_26245_26286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (10))){
var inst_26152 = (state_26210[(12)]);
var inst_26151 = (state_26210[(13)]);
var inst_26153 = (state_26210[(14)]);
var inst_26154 = (state_26210[(16)]);
var inst_26159 = cljs.core._nth.call(null,inst_26152,inst_26154);
var inst_26160 = cljs.core.async.muxch_STAR_.call(null,inst_26159);
var inst_26161 = cljs.core.async.close_BANG_.call(null,inst_26160);
var inst_26162 = (inst_26154 + (1));
var tmp26240 = inst_26152;
var tmp26241 = inst_26151;
var tmp26242 = inst_26153;
var inst_26151__$1 = tmp26241;
var inst_26152__$1 = tmp26240;
var inst_26153__$1 = tmp26242;
var inst_26154__$1 = inst_26162;
var state_26210__$1 = (function (){var statearr_26246 = state_26210;
(statearr_26246[(17)] = inst_26161);

(statearr_26246[(12)] = inst_26152__$1);

(statearr_26246[(13)] = inst_26151__$1);

(statearr_26246[(14)] = inst_26153__$1);

(statearr_26246[(16)] = inst_26154__$1);

return statearr_26246;
})();
var statearr_26247_26287 = state_26210__$1;
(statearr_26247_26287[(2)] = null);

(statearr_26247_26287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (18))){
var inst_26180 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26248_26288 = state_26210__$1;
(statearr_26248_26288[(2)] = inst_26180);

(statearr_26248_26288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (8))){
var inst_26153 = (state_26210[(14)]);
var inst_26154 = (state_26210[(16)]);
var inst_26156 = (inst_26154 < inst_26153);
var inst_26157 = inst_26156;
var state_26210__$1 = state_26210;
if(cljs.core.truth_(inst_26157)){
var statearr_26249_26289 = state_26210__$1;
(statearr_26249_26289[(1)] = (10));

} else {
var statearr_26250_26290 = state_26210__$1;
(statearr_26250_26290[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__24338__auto___26262,mults,ensure_mult,p))
;
return ((function (switch__24226__auto__,c__24338__auto___26262,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_26254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26254[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_26254[(1)] = (1));

return statearr_26254;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26210){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26255){if((e26255 instanceof Object)){
var ex__24230__auto__ = e26255;
var statearr_26256_26291 = state_26210;
(statearr_26256_26291[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26292 = state_26210;
state_26210 = G__26292;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26262,mults,ensure_mult,p))
})();
var state__24340__auto__ = (function (){var statearr_26257 = f__24339__auto__.call(null);
(statearr_26257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26262);

return statearr_26257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26262,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26293 = [];
var len__20256__auto___26296 = arguments.length;
var i__20257__auto___26297 = (0);
while(true){
if((i__20257__auto___26297 < len__20256__auto___26296)){
args26293.push((arguments[i__20257__auto___26297]));

var G__26298 = (i__20257__auto___26297 + (1));
i__20257__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var G__26295 = args26293.length;
switch (G__26295) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26293.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26300 = [];
var len__20256__auto___26303 = arguments.length;
var i__20257__auto___26304 = (0);
while(true){
if((i__20257__auto___26304 < len__20256__auto___26303)){
args26300.push((arguments[i__20257__auto___26304]));

var G__26305 = (i__20257__auto___26304 + (1));
i__20257__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var G__26302 = args26300.length;
switch (G__26302) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26300.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26307 = [];
var len__20256__auto___26378 = arguments.length;
var i__20257__auto___26379 = (0);
while(true){
if((i__20257__auto___26379 < len__20256__auto___26378)){
args26307.push((arguments[i__20257__auto___26379]));

var G__26380 = (i__20257__auto___26379 + (1));
i__20257__auto___26379 = G__26380;
continue;
} else {
}
break;
}

var G__26309 = args26307.length;
switch (G__26309) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26307.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24338__auto___26382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26382,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26382,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26348){
var state_val_26349 = (state_26348[(1)]);
if((state_val_26349 === (7))){
var state_26348__$1 = state_26348;
var statearr_26350_26383 = state_26348__$1;
(statearr_26350_26383[(2)] = null);

(statearr_26350_26383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (1))){
var state_26348__$1 = state_26348;
var statearr_26351_26384 = state_26348__$1;
(statearr_26351_26384[(2)] = null);

(statearr_26351_26384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (4))){
var inst_26312 = (state_26348[(7)]);
var inst_26314 = (inst_26312 < cnt);
var state_26348__$1 = state_26348;
if(cljs.core.truth_(inst_26314)){
var statearr_26352_26385 = state_26348__$1;
(statearr_26352_26385[(1)] = (6));

} else {
var statearr_26353_26386 = state_26348__$1;
(statearr_26353_26386[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (15))){
var inst_26344 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
var statearr_26354_26387 = state_26348__$1;
(statearr_26354_26387[(2)] = inst_26344);

(statearr_26354_26387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (13))){
var inst_26337 = cljs.core.async.close_BANG_.call(null,out);
var state_26348__$1 = state_26348;
var statearr_26355_26388 = state_26348__$1;
(statearr_26355_26388[(2)] = inst_26337);

(statearr_26355_26388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (6))){
var state_26348__$1 = state_26348;
var statearr_26356_26389 = state_26348__$1;
(statearr_26356_26389[(2)] = null);

(statearr_26356_26389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (3))){
var inst_26346 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26348__$1,inst_26346);
} else {
if((state_val_26349 === (12))){
var inst_26334 = (state_26348[(8)]);
var inst_26334__$1 = (state_26348[(2)]);
var inst_26335 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26334__$1);
var state_26348__$1 = (function (){var statearr_26357 = state_26348;
(statearr_26357[(8)] = inst_26334__$1);

return statearr_26357;
})();
if(cljs.core.truth_(inst_26335)){
var statearr_26358_26390 = state_26348__$1;
(statearr_26358_26390[(1)] = (13));

} else {
var statearr_26359_26391 = state_26348__$1;
(statearr_26359_26391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (2))){
var inst_26311 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26312 = (0);
var state_26348__$1 = (function (){var statearr_26360 = state_26348;
(statearr_26360[(9)] = inst_26311);

(statearr_26360[(7)] = inst_26312);

return statearr_26360;
})();
var statearr_26361_26392 = state_26348__$1;
(statearr_26361_26392[(2)] = null);

(statearr_26361_26392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (11))){
var inst_26312 = (state_26348[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26348,(10),Object,null,(9));
var inst_26321 = chs__$1.call(null,inst_26312);
var inst_26322 = done.call(null,inst_26312);
var inst_26323 = cljs.core.async.take_BANG_.call(null,inst_26321,inst_26322);
var state_26348__$1 = state_26348;
var statearr_26362_26393 = state_26348__$1;
(statearr_26362_26393[(2)] = inst_26323);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26348__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (9))){
var inst_26312 = (state_26348[(7)]);
var inst_26325 = (state_26348[(2)]);
var inst_26326 = (inst_26312 + (1));
var inst_26312__$1 = inst_26326;
var state_26348__$1 = (function (){var statearr_26363 = state_26348;
(statearr_26363[(7)] = inst_26312__$1);

(statearr_26363[(10)] = inst_26325);

return statearr_26363;
})();
var statearr_26364_26394 = state_26348__$1;
(statearr_26364_26394[(2)] = null);

(statearr_26364_26394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (5))){
var inst_26332 = (state_26348[(2)]);
var state_26348__$1 = (function (){var statearr_26365 = state_26348;
(statearr_26365[(11)] = inst_26332);

return statearr_26365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26348__$1,(12),dchan);
} else {
if((state_val_26349 === (14))){
var inst_26334 = (state_26348[(8)]);
var inst_26339 = cljs.core.apply.call(null,f,inst_26334);
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26348__$1,(16),out,inst_26339);
} else {
if((state_val_26349 === (16))){
var inst_26341 = (state_26348[(2)]);
var state_26348__$1 = (function (){var statearr_26366 = state_26348;
(statearr_26366[(12)] = inst_26341);

return statearr_26366;
})();
var statearr_26367_26395 = state_26348__$1;
(statearr_26367_26395[(2)] = null);

(statearr_26367_26395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (10))){
var inst_26316 = (state_26348[(2)]);
var inst_26317 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26348__$1 = (function (){var statearr_26368 = state_26348;
(statearr_26368[(13)] = inst_26316);

return statearr_26368;
})();
var statearr_26369_26396 = state_26348__$1;
(statearr_26369_26396[(2)] = inst_26317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26348__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26349 === (8))){
var inst_26330 = (state_26348[(2)]);
var state_26348__$1 = state_26348;
var statearr_26370_26397 = state_26348__$1;
(statearr_26370_26397[(2)] = inst_26330);

(statearr_26370_26397[(1)] = (5));


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
});})(c__24338__auto___26382,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24226__auto__,c__24338__auto___26382,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_26374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26374[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_26374[(1)] = (1));

return statearr_26374;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26348){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26375){if((e26375 instanceof Object)){
var ex__24230__auto__ = e26375;
var statearr_26376_26398 = state_26348;
(statearr_26376_26398[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26399 = state_26348;
state_26348 = G__26399;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26382,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24340__auto__ = (function (){var statearr_26377 = f__24339__auto__.call(null);
(statearr_26377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26382);

return statearr_26377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26382,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26401 = [];
var len__20256__auto___26459 = arguments.length;
var i__20257__auto___26460 = (0);
while(true){
if((i__20257__auto___26460 < len__20256__auto___26459)){
args26401.push((arguments[i__20257__auto___26460]));

var G__26461 = (i__20257__auto___26460 + (1));
i__20257__auto___26460 = G__26461;
continue;
} else {
}
break;
}

var G__26403 = args26401.length;
switch (G__26403) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26401.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24338__auto___26463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26463,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26463,out){
return (function (state_26435){
var state_val_26436 = (state_26435[(1)]);
if((state_val_26436 === (7))){
var inst_26414 = (state_26435[(7)]);
var inst_26415 = (state_26435[(8)]);
var inst_26414__$1 = (state_26435[(2)]);
var inst_26415__$1 = cljs.core.nth.call(null,inst_26414__$1,(0),null);
var inst_26416 = cljs.core.nth.call(null,inst_26414__$1,(1),null);
var inst_26417 = (inst_26415__$1 == null);
var state_26435__$1 = (function (){var statearr_26437 = state_26435;
(statearr_26437[(9)] = inst_26416);

(statearr_26437[(7)] = inst_26414__$1);

(statearr_26437[(8)] = inst_26415__$1);

return statearr_26437;
})();
if(cljs.core.truth_(inst_26417)){
var statearr_26438_26464 = state_26435__$1;
(statearr_26438_26464[(1)] = (8));

} else {
var statearr_26439_26465 = state_26435__$1;
(statearr_26439_26465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (1))){
var inst_26404 = cljs.core.vec.call(null,chs);
var inst_26405 = inst_26404;
var state_26435__$1 = (function (){var statearr_26440 = state_26435;
(statearr_26440[(10)] = inst_26405);

return statearr_26440;
})();
var statearr_26441_26466 = state_26435__$1;
(statearr_26441_26466[(2)] = null);

(statearr_26441_26466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (4))){
var inst_26405 = (state_26435[(10)]);
var state_26435__$1 = state_26435;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26435__$1,(7),inst_26405);
} else {
if((state_val_26436 === (6))){
var inst_26431 = (state_26435[(2)]);
var state_26435__$1 = state_26435;
var statearr_26442_26467 = state_26435__$1;
(statearr_26442_26467[(2)] = inst_26431);

(statearr_26442_26467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (3))){
var inst_26433 = (state_26435[(2)]);
var state_26435__$1 = state_26435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26435__$1,inst_26433);
} else {
if((state_val_26436 === (2))){
var inst_26405 = (state_26435[(10)]);
var inst_26407 = cljs.core.count.call(null,inst_26405);
var inst_26408 = (inst_26407 > (0));
var state_26435__$1 = state_26435;
if(cljs.core.truth_(inst_26408)){
var statearr_26444_26468 = state_26435__$1;
(statearr_26444_26468[(1)] = (4));

} else {
var statearr_26445_26469 = state_26435__$1;
(statearr_26445_26469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (11))){
var inst_26405 = (state_26435[(10)]);
var inst_26424 = (state_26435[(2)]);
var tmp26443 = inst_26405;
var inst_26405__$1 = tmp26443;
var state_26435__$1 = (function (){var statearr_26446 = state_26435;
(statearr_26446[(11)] = inst_26424);

(statearr_26446[(10)] = inst_26405__$1);

return statearr_26446;
})();
var statearr_26447_26470 = state_26435__$1;
(statearr_26447_26470[(2)] = null);

(statearr_26447_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (9))){
var inst_26415 = (state_26435[(8)]);
var state_26435__$1 = state_26435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26435__$1,(11),out,inst_26415);
} else {
if((state_val_26436 === (5))){
var inst_26429 = cljs.core.async.close_BANG_.call(null,out);
var state_26435__$1 = state_26435;
var statearr_26448_26471 = state_26435__$1;
(statearr_26448_26471[(2)] = inst_26429);

(statearr_26448_26471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (10))){
var inst_26427 = (state_26435[(2)]);
var state_26435__$1 = state_26435;
var statearr_26449_26472 = state_26435__$1;
(statearr_26449_26472[(2)] = inst_26427);

(statearr_26449_26472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26436 === (8))){
var inst_26416 = (state_26435[(9)]);
var inst_26405 = (state_26435[(10)]);
var inst_26414 = (state_26435[(7)]);
var inst_26415 = (state_26435[(8)]);
var inst_26419 = (function (){var cs = inst_26405;
var vec__26410 = inst_26414;
var v = inst_26415;
var c = inst_26416;
return ((function (cs,vec__26410,v,c,inst_26416,inst_26405,inst_26414,inst_26415,state_val_26436,c__24338__auto___26463,out){
return (function (p1__26400_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26400_SHARP_);
});
;})(cs,vec__26410,v,c,inst_26416,inst_26405,inst_26414,inst_26415,state_val_26436,c__24338__auto___26463,out))
})();
var inst_26420 = cljs.core.filterv.call(null,inst_26419,inst_26405);
var inst_26405__$1 = inst_26420;
var state_26435__$1 = (function (){var statearr_26450 = state_26435;
(statearr_26450[(10)] = inst_26405__$1);

return statearr_26450;
})();
var statearr_26451_26473 = state_26435__$1;
(statearr_26451_26473[(2)] = null);

(statearr_26451_26473[(1)] = (2));


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
});})(c__24338__auto___26463,out))
;
return ((function (switch__24226__auto__,c__24338__auto___26463,out){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_26455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26455[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_26455[(1)] = (1));

return statearr_26455;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26435){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26456){if((e26456 instanceof Object)){
var ex__24230__auto__ = e26456;
var statearr_26457_26474 = state_26435;
(statearr_26457_26474[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26475 = state_26435;
state_26435 = G__26475;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26463,out))
})();
var state__24340__auto__ = (function (){var statearr_26458 = f__24339__auto__.call(null);
(statearr_26458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26463);

return statearr_26458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26463,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26476 = [];
var len__20256__auto___26525 = arguments.length;
var i__20257__auto___26526 = (0);
while(true){
if((i__20257__auto___26526 < len__20256__auto___26525)){
args26476.push((arguments[i__20257__auto___26526]));

var G__26527 = (i__20257__auto___26526 + (1));
i__20257__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var G__26478 = args26476.length;
switch (G__26478) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26476.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24338__auto___26529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26529,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26529,out){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (7))){
var inst_26484 = (state_26502[(7)]);
var inst_26484__$1 = (state_26502[(2)]);
var inst_26485 = (inst_26484__$1 == null);
var inst_26486 = cljs.core.not.call(null,inst_26485);
var state_26502__$1 = (function (){var statearr_26504 = state_26502;
(statearr_26504[(7)] = inst_26484__$1);

return statearr_26504;
})();
if(inst_26486){
var statearr_26505_26530 = state_26502__$1;
(statearr_26505_26530[(1)] = (8));

} else {
var statearr_26506_26531 = state_26502__$1;
(statearr_26506_26531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (1))){
var inst_26479 = (0);
var state_26502__$1 = (function (){var statearr_26507 = state_26502;
(statearr_26507[(8)] = inst_26479);

return statearr_26507;
})();
var statearr_26508_26532 = state_26502__$1;
(statearr_26508_26532[(2)] = null);

(statearr_26508_26532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (4))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(7),ch);
} else {
if((state_val_26503 === (6))){
var inst_26497 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26509_26533 = state_26502__$1;
(statearr_26509_26533[(2)] = inst_26497);

(statearr_26509_26533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (3))){
var inst_26499 = (state_26502[(2)]);
var inst_26500 = cljs.core.async.close_BANG_.call(null,out);
var state_26502__$1 = (function (){var statearr_26510 = state_26502;
(statearr_26510[(9)] = inst_26499);

return statearr_26510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26502__$1,inst_26500);
} else {
if((state_val_26503 === (2))){
var inst_26479 = (state_26502[(8)]);
var inst_26481 = (inst_26479 < n);
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26481)){
var statearr_26511_26534 = state_26502__$1;
(statearr_26511_26534[(1)] = (4));

} else {
var statearr_26512_26535 = state_26502__$1;
(statearr_26512_26535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (11))){
var inst_26479 = (state_26502[(8)]);
var inst_26489 = (state_26502[(2)]);
var inst_26490 = (inst_26479 + (1));
var inst_26479__$1 = inst_26490;
var state_26502__$1 = (function (){var statearr_26513 = state_26502;
(statearr_26513[(8)] = inst_26479__$1);

(statearr_26513[(10)] = inst_26489);

return statearr_26513;
})();
var statearr_26514_26536 = state_26502__$1;
(statearr_26514_26536[(2)] = null);

(statearr_26514_26536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (9))){
var state_26502__$1 = state_26502;
var statearr_26515_26537 = state_26502__$1;
(statearr_26515_26537[(2)] = null);

(statearr_26515_26537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (5))){
var state_26502__$1 = state_26502;
var statearr_26516_26538 = state_26502__$1;
(statearr_26516_26538[(2)] = null);

(statearr_26516_26538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (10))){
var inst_26494 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26517_26539 = state_26502__$1;
(statearr_26517_26539[(2)] = inst_26494);

(statearr_26517_26539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (8))){
var inst_26484 = (state_26502[(7)]);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26502__$1,(11),out,inst_26484);
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
});})(c__24338__auto___26529,out))
;
return ((function (switch__24226__auto__,c__24338__auto___26529,out){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_26521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26521[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_26521[(1)] = (1));

return statearr_26521;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26502){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26522){if((e26522 instanceof Object)){
var ex__24230__auto__ = e26522;
var statearr_26523_26540 = state_26502;
(statearr_26523_26540[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26541 = state_26502;
state_26502 = G__26541;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26529,out))
})();
var state__24340__auto__ = (function (){var statearr_26524 = f__24339__auto__.call(null);
(statearr_26524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26529);

return statearr_26524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26529,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26549 = (function (f,ch,meta26550){
this.f = f;
this.ch = ch;
this.meta26550 = meta26550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26551,meta26550__$1){
var self__ = this;
var _26551__$1 = this;
return (new cljs.core.async.t_cljs$core$async26549(self__.f,self__.ch,meta26550__$1));
});

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26551){
var self__ = this;
var _26551__$1 = this;
return self__.meta26550;
});

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26552 = (function (f,ch,meta26550,_,fn1,meta26553){
this.f = f;
this.ch = ch;
this.meta26550 = meta26550;
this._ = _;
this.fn1 = fn1;
this.meta26553 = meta26553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26554,meta26553__$1){
var self__ = this;
var _26554__$1 = this;
return (new cljs.core.async.t_cljs$core$async26552(self__.f,self__.ch,self__.meta26550,self__._,self__.fn1,meta26553__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26554){
var self__ = this;
var _26554__$1 = this;
return self__.meta26553;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26542_SHARP_){
return f1.call(null,(((p1__26542_SHARP_ == null))?null:self__.f.call(null,p1__26542_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26552.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26550","meta26550",541588933,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26549","cljs.core.async/t_cljs$core$async26549",-513158679,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26553","meta26553",1863630871,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26552";

cljs.core.async.t_cljs$core$async26552.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async26552");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26552 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26552(f__$1,ch__$1,meta26550__$1,___$2,fn1__$1,meta26553){
return (new cljs.core.async.t_cljs$core$async26552(f__$1,ch__$1,meta26550__$1,___$2,fn1__$1,meta26553));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26552(self__.f,self__.ch,self__.meta26550,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19131__auto__ = ret;
if(cljs.core.truth_(and__19131__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19131__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26550","meta26550",541588933,null)], null);
});

cljs.core.async.t_cljs$core$async26549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26549";

cljs.core.async.t_cljs$core$async26549.cljs$lang$ctorPrWriter = (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async26549");
});

cljs.core.async.__GT_t_cljs$core$async26549 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26549(f__$1,ch__$1,meta26550){
return (new cljs.core.async.t_cljs$core$async26549(f__$1,ch__$1,meta26550));
});

}

return (new cljs.core.async.t_cljs$core$async26549(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26558 = (function (f,ch,meta26559){
this.f = f;
this.ch = ch;
this.meta26559 = meta26559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26560,meta26559__$1){
var self__ = this;
var _26560__$1 = this;
return (new cljs.core.async.t_cljs$core$async26558(self__.f,self__.ch,meta26559__$1));
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26560){
var self__ = this;
var _26560__$1 = this;
return self__.meta26559;
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26559","meta26559",-1436061787,null)], null);
});

cljs.core.async.t_cljs$core$async26558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26558";

cljs.core.async.t_cljs$core$async26558.cljs$lang$ctorPrWriter = (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async26558");
});

cljs.core.async.__GT_t_cljs$core$async26558 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26558(f__$1,ch__$1,meta26559){
return (new cljs.core.async.t_cljs$core$async26558(f__$1,ch__$1,meta26559));
});

}

return (new cljs.core.async.t_cljs$core$async26558(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26564 = (function (p,ch,meta26565){
this.p = p;
this.ch = ch;
this.meta26565 = meta26565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26566,meta26565__$1){
var self__ = this;
var _26566__$1 = this;
return (new cljs.core.async.t_cljs$core$async26564(self__.p,self__.ch,meta26565__$1));
});

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26566){
var self__ = this;
var _26566__$1 = this;
return self__.meta26565;
});

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26565","meta26565",944382462,null)], null);
});

cljs.core.async.t_cljs$core$async26564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26564";

cljs.core.async.t_cljs$core$async26564.cljs$lang$ctorPrWriter = (function (this__19754__auto__,writer__19755__auto__,opt__19756__auto__){
return cljs.core._write.call(null,writer__19755__auto__,"cljs.core.async/t_cljs$core$async26564");
});

cljs.core.async.__GT_t_cljs$core$async26564 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26564(p__$1,ch__$1,meta26565){
return (new cljs.core.async.t_cljs$core$async26564(p__$1,ch__$1,meta26565));
});

}

return (new cljs.core.async.t_cljs$core$async26564(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26567 = [];
var len__20256__auto___26611 = arguments.length;
var i__20257__auto___26612 = (0);
while(true){
if((i__20257__auto___26612 < len__20256__auto___26611)){
args26567.push((arguments[i__20257__auto___26612]));

var G__26613 = (i__20257__auto___26612 + (1));
i__20257__auto___26612 = G__26613;
continue;
} else {
}
break;
}

var G__26569 = args26567.length;
switch (G__26569) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26567.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24338__auto___26615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26615,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26615,out){
return (function (state_26590){
var state_val_26591 = (state_26590[(1)]);
if((state_val_26591 === (7))){
var inst_26586 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26592_26616 = state_26590__$1;
(statearr_26592_26616[(2)] = inst_26586);

(statearr_26592_26616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (1))){
var state_26590__$1 = state_26590;
var statearr_26593_26617 = state_26590__$1;
(statearr_26593_26617[(2)] = null);

(statearr_26593_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (4))){
var inst_26572 = (state_26590[(7)]);
var inst_26572__$1 = (state_26590[(2)]);
var inst_26573 = (inst_26572__$1 == null);
var state_26590__$1 = (function (){var statearr_26594 = state_26590;
(statearr_26594[(7)] = inst_26572__$1);

return statearr_26594;
})();
if(cljs.core.truth_(inst_26573)){
var statearr_26595_26618 = state_26590__$1;
(statearr_26595_26618[(1)] = (5));

} else {
var statearr_26596_26619 = state_26590__$1;
(statearr_26596_26619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (6))){
var inst_26572 = (state_26590[(7)]);
var inst_26577 = p.call(null,inst_26572);
var state_26590__$1 = state_26590;
if(cljs.core.truth_(inst_26577)){
var statearr_26597_26620 = state_26590__$1;
(statearr_26597_26620[(1)] = (8));

} else {
var statearr_26598_26621 = state_26590__$1;
(statearr_26598_26621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (3))){
var inst_26588 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26590__$1,inst_26588);
} else {
if((state_val_26591 === (2))){
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26590__$1,(4),ch);
} else {
if((state_val_26591 === (11))){
var inst_26580 = (state_26590[(2)]);
var state_26590__$1 = state_26590;
var statearr_26599_26622 = state_26590__$1;
(statearr_26599_26622[(2)] = inst_26580);

(statearr_26599_26622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (9))){
var state_26590__$1 = state_26590;
var statearr_26600_26623 = state_26590__$1;
(statearr_26600_26623[(2)] = null);

(statearr_26600_26623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (5))){
var inst_26575 = cljs.core.async.close_BANG_.call(null,out);
var state_26590__$1 = state_26590;
var statearr_26601_26624 = state_26590__$1;
(statearr_26601_26624[(2)] = inst_26575);

(statearr_26601_26624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (10))){
var inst_26583 = (state_26590[(2)]);
var state_26590__$1 = (function (){var statearr_26602 = state_26590;
(statearr_26602[(8)] = inst_26583);

return statearr_26602;
})();
var statearr_26603_26625 = state_26590__$1;
(statearr_26603_26625[(2)] = null);

(statearr_26603_26625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26591 === (8))){
var inst_26572 = (state_26590[(7)]);
var state_26590__$1 = state_26590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26590__$1,(11),out,inst_26572);
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
});})(c__24338__auto___26615,out))
;
return ((function (switch__24226__auto__,c__24338__auto___26615,out){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_26607 = [null,null,null,null,null,null,null,null,null];
(statearr_26607[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_26607[(1)] = (1));

return statearr_26607;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26590){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26608){if((e26608 instanceof Object)){
var ex__24230__auto__ = e26608;
var statearr_26609_26626 = state_26590;
(statearr_26609_26626[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26590;
state_26590 = G__26627;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26615,out))
})();
var state__24340__auto__ = (function (){var statearr_26610 = f__24339__auto__.call(null);
(statearr_26610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26615);

return statearr_26610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26615,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26628 = [];
var len__20256__auto___26631 = arguments.length;
var i__20257__auto___26632 = (0);
while(true){
if((i__20257__auto___26632 < len__20256__auto___26631)){
args26628.push((arguments[i__20257__auto___26632]));

var G__26633 = (i__20257__auto___26632 + (1));
i__20257__auto___26632 = G__26633;
continue;
} else {
}
break;
}

var G__26630 = args26628.length;
switch (G__26630) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26628.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto__){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto__){
return (function (state_26800){
var state_val_26801 = (state_26800[(1)]);
if((state_val_26801 === (7))){
var inst_26796 = (state_26800[(2)]);
var state_26800__$1 = state_26800;
var statearr_26802_26843 = state_26800__$1;
(statearr_26802_26843[(2)] = inst_26796);

(statearr_26802_26843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (20))){
var inst_26766 = (state_26800[(7)]);
var inst_26777 = (state_26800[(2)]);
var inst_26778 = cljs.core.next.call(null,inst_26766);
var inst_26752 = inst_26778;
var inst_26753 = null;
var inst_26754 = (0);
var inst_26755 = (0);
var state_26800__$1 = (function (){var statearr_26803 = state_26800;
(statearr_26803[(8)] = inst_26754);

(statearr_26803[(9)] = inst_26752);

(statearr_26803[(10)] = inst_26755);

(statearr_26803[(11)] = inst_26777);

(statearr_26803[(12)] = inst_26753);

return statearr_26803;
})();
var statearr_26804_26844 = state_26800__$1;
(statearr_26804_26844[(2)] = null);

(statearr_26804_26844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (1))){
var state_26800__$1 = state_26800;
var statearr_26805_26845 = state_26800__$1;
(statearr_26805_26845[(2)] = null);

(statearr_26805_26845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (4))){
var inst_26741 = (state_26800[(13)]);
var inst_26741__$1 = (state_26800[(2)]);
var inst_26742 = (inst_26741__$1 == null);
var state_26800__$1 = (function (){var statearr_26806 = state_26800;
(statearr_26806[(13)] = inst_26741__$1);

return statearr_26806;
})();
if(cljs.core.truth_(inst_26742)){
var statearr_26807_26846 = state_26800__$1;
(statearr_26807_26846[(1)] = (5));

} else {
var statearr_26808_26847 = state_26800__$1;
(statearr_26808_26847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (15))){
var state_26800__$1 = state_26800;
var statearr_26812_26848 = state_26800__$1;
(statearr_26812_26848[(2)] = null);

(statearr_26812_26848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (21))){
var state_26800__$1 = state_26800;
var statearr_26813_26849 = state_26800__$1;
(statearr_26813_26849[(2)] = null);

(statearr_26813_26849[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (13))){
var inst_26754 = (state_26800[(8)]);
var inst_26752 = (state_26800[(9)]);
var inst_26755 = (state_26800[(10)]);
var inst_26753 = (state_26800[(12)]);
var inst_26762 = (state_26800[(2)]);
var inst_26763 = (inst_26755 + (1));
var tmp26809 = inst_26754;
var tmp26810 = inst_26752;
var tmp26811 = inst_26753;
var inst_26752__$1 = tmp26810;
var inst_26753__$1 = tmp26811;
var inst_26754__$1 = tmp26809;
var inst_26755__$1 = inst_26763;
var state_26800__$1 = (function (){var statearr_26814 = state_26800;
(statearr_26814[(8)] = inst_26754__$1);

(statearr_26814[(9)] = inst_26752__$1);

(statearr_26814[(10)] = inst_26755__$1);

(statearr_26814[(14)] = inst_26762);

(statearr_26814[(12)] = inst_26753__$1);

return statearr_26814;
})();
var statearr_26815_26850 = state_26800__$1;
(statearr_26815_26850[(2)] = null);

(statearr_26815_26850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (22))){
var state_26800__$1 = state_26800;
var statearr_26816_26851 = state_26800__$1;
(statearr_26816_26851[(2)] = null);

(statearr_26816_26851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (6))){
var inst_26741 = (state_26800[(13)]);
var inst_26750 = f.call(null,inst_26741);
var inst_26751 = cljs.core.seq.call(null,inst_26750);
var inst_26752 = inst_26751;
var inst_26753 = null;
var inst_26754 = (0);
var inst_26755 = (0);
var state_26800__$1 = (function (){var statearr_26817 = state_26800;
(statearr_26817[(8)] = inst_26754);

(statearr_26817[(9)] = inst_26752);

(statearr_26817[(10)] = inst_26755);

(statearr_26817[(12)] = inst_26753);

return statearr_26817;
})();
var statearr_26818_26852 = state_26800__$1;
(statearr_26818_26852[(2)] = null);

(statearr_26818_26852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (17))){
var inst_26766 = (state_26800[(7)]);
var inst_26770 = cljs.core.chunk_first.call(null,inst_26766);
var inst_26771 = cljs.core.chunk_rest.call(null,inst_26766);
var inst_26772 = cljs.core.count.call(null,inst_26770);
var inst_26752 = inst_26771;
var inst_26753 = inst_26770;
var inst_26754 = inst_26772;
var inst_26755 = (0);
var state_26800__$1 = (function (){var statearr_26819 = state_26800;
(statearr_26819[(8)] = inst_26754);

(statearr_26819[(9)] = inst_26752);

(statearr_26819[(10)] = inst_26755);

(statearr_26819[(12)] = inst_26753);

return statearr_26819;
})();
var statearr_26820_26853 = state_26800__$1;
(statearr_26820_26853[(2)] = null);

(statearr_26820_26853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (3))){
var inst_26798 = (state_26800[(2)]);
var state_26800__$1 = state_26800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26800__$1,inst_26798);
} else {
if((state_val_26801 === (12))){
var inst_26786 = (state_26800[(2)]);
var state_26800__$1 = state_26800;
var statearr_26821_26854 = state_26800__$1;
(statearr_26821_26854[(2)] = inst_26786);

(statearr_26821_26854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (2))){
var state_26800__$1 = state_26800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26800__$1,(4),in$);
} else {
if((state_val_26801 === (23))){
var inst_26794 = (state_26800[(2)]);
var state_26800__$1 = state_26800;
var statearr_26822_26855 = state_26800__$1;
(statearr_26822_26855[(2)] = inst_26794);

(statearr_26822_26855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (19))){
var inst_26781 = (state_26800[(2)]);
var state_26800__$1 = state_26800;
var statearr_26823_26856 = state_26800__$1;
(statearr_26823_26856[(2)] = inst_26781);

(statearr_26823_26856[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (11))){
var inst_26766 = (state_26800[(7)]);
var inst_26752 = (state_26800[(9)]);
var inst_26766__$1 = cljs.core.seq.call(null,inst_26752);
var state_26800__$1 = (function (){var statearr_26824 = state_26800;
(statearr_26824[(7)] = inst_26766__$1);

return statearr_26824;
})();
if(inst_26766__$1){
var statearr_26825_26857 = state_26800__$1;
(statearr_26825_26857[(1)] = (14));

} else {
var statearr_26826_26858 = state_26800__$1;
(statearr_26826_26858[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (9))){
var inst_26788 = (state_26800[(2)]);
var inst_26789 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26800__$1 = (function (){var statearr_26827 = state_26800;
(statearr_26827[(15)] = inst_26788);

return statearr_26827;
})();
if(cljs.core.truth_(inst_26789)){
var statearr_26828_26859 = state_26800__$1;
(statearr_26828_26859[(1)] = (21));

} else {
var statearr_26829_26860 = state_26800__$1;
(statearr_26829_26860[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (5))){
var inst_26744 = cljs.core.async.close_BANG_.call(null,out);
var state_26800__$1 = state_26800;
var statearr_26830_26861 = state_26800__$1;
(statearr_26830_26861[(2)] = inst_26744);

(statearr_26830_26861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (14))){
var inst_26766 = (state_26800[(7)]);
var inst_26768 = cljs.core.chunked_seq_QMARK_.call(null,inst_26766);
var state_26800__$1 = state_26800;
if(inst_26768){
var statearr_26831_26862 = state_26800__$1;
(statearr_26831_26862[(1)] = (17));

} else {
var statearr_26832_26863 = state_26800__$1;
(statearr_26832_26863[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (16))){
var inst_26784 = (state_26800[(2)]);
var state_26800__$1 = state_26800;
var statearr_26833_26864 = state_26800__$1;
(statearr_26833_26864[(2)] = inst_26784);

(statearr_26833_26864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26801 === (10))){
var inst_26755 = (state_26800[(10)]);
var inst_26753 = (state_26800[(12)]);
var inst_26760 = cljs.core._nth.call(null,inst_26753,inst_26755);
var state_26800__$1 = state_26800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26800__$1,(13),out,inst_26760);
} else {
if((state_val_26801 === (18))){
var inst_26766 = (state_26800[(7)]);
var inst_26775 = cljs.core.first.call(null,inst_26766);
var state_26800__$1 = state_26800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26800__$1,(20),out,inst_26775);
} else {
if((state_val_26801 === (8))){
var inst_26754 = (state_26800[(8)]);
var inst_26755 = (state_26800[(10)]);
var inst_26757 = (inst_26755 < inst_26754);
var inst_26758 = inst_26757;
var state_26800__$1 = state_26800;
if(cljs.core.truth_(inst_26758)){
var statearr_26834_26865 = state_26800__$1;
(statearr_26834_26865[(1)] = (10));

} else {
var statearr_26835_26866 = state_26800__$1;
(statearr_26835_26866[(1)] = (11));

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
}
}
}
}
}
}
});})(c__24338__auto__))
;
return ((function (switch__24226__auto__,c__24338__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24227__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24227__auto____0 = (function (){
var statearr_26839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26839[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24227__auto__);

(statearr_26839[(1)] = (1));

return statearr_26839;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24227__auto____1 = (function (state_26800){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26840){if((e26840 instanceof Object)){
var ex__24230__auto__ = e26840;
var statearr_26841_26867 = state_26800;
(statearr_26841_26867[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26868 = state_26800;
state_26800 = G__26868;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24227__auto__ = function(state_26800){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24227__auto____1.call(this,state_26800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24227__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24227__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto__))
})();
var state__24340__auto__ = (function (){var statearr_26842 = f__24339__auto__.call(null);
(statearr_26842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto__);

return statearr_26842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto__))
);

return c__24338__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26869 = [];
var len__20256__auto___26872 = arguments.length;
var i__20257__auto___26873 = (0);
while(true){
if((i__20257__auto___26873 < len__20256__auto___26872)){
args26869.push((arguments[i__20257__auto___26873]));

var G__26874 = (i__20257__auto___26873 + (1));
i__20257__auto___26873 = G__26874;
continue;
} else {
}
break;
}

var G__26871 = args26869.length;
switch (G__26871) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26869.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26876 = [];
var len__20256__auto___26879 = arguments.length;
var i__20257__auto___26880 = (0);
while(true){
if((i__20257__auto___26880 < len__20256__auto___26879)){
args26876.push((arguments[i__20257__auto___26880]));

var G__26881 = (i__20257__auto___26880 + (1));
i__20257__auto___26880 = G__26881;
continue;
} else {
}
break;
}

var G__26878 = args26876.length;
switch (G__26878) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26876.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26883 = [];
var len__20256__auto___26934 = arguments.length;
var i__20257__auto___26935 = (0);
while(true){
if((i__20257__auto___26935 < len__20256__auto___26934)){
args26883.push((arguments[i__20257__auto___26935]));

var G__26936 = (i__20257__auto___26935 + (1));
i__20257__auto___26935 = G__26936;
continue;
} else {
}
break;
}

var G__26885 = args26883.length;
switch (G__26885) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26883.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24338__auto___26938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___26938,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___26938,out){
return (function (state_26909){
var state_val_26910 = (state_26909[(1)]);
if((state_val_26910 === (7))){
var inst_26904 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26911_26939 = state_26909__$1;
(statearr_26911_26939[(2)] = inst_26904);

(statearr_26911_26939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (1))){
var inst_26886 = null;
var state_26909__$1 = (function (){var statearr_26912 = state_26909;
(statearr_26912[(7)] = inst_26886);

return statearr_26912;
})();
var statearr_26913_26940 = state_26909__$1;
(statearr_26913_26940[(2)] = null);

(statearr_26913_26940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (4))){
var inst_26889 = (state_26909[(8)]);
var inst_26889__$1 = (state_26909[(2)]);
var inst_26890 = (inst_26889__$1 == null);
var inst_26891 = cljs.core.not.call(null,inst_26890);
var state_26909__$1 = (function (){var statearr_26914 = state_26909;
(statearr_26914[(8)] = inst_26889__$1);

return statearr_26914;
})();
if(inst_26891){
var statearr_26915_26941 = state_26909__$1;
(statearr_26915_26941[(1)] = (5));

} else {
var statearr_26916_26942 = state_26909__$1;
(statearr_26916_26942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (6))){
var state_26909__$1 = state_26909;
var statearr_26917_26943 = state_26909__$1;
(statearr_26917_26943[(2)] = null);

(statearr_26917_26943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (3))){
var inst_26906 = (state_26909[(2)]);
var inst_26907 = cljs.core.async.close_BANG_.call(null,out);
var state_26909__$1 = (function (){var statearr_26918 = state_26909;
(statearr_26918[(9)] = inst_26906);

return statearr_26918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26909__$1,inst_26907);
} else {
if((state_val_26910 === (2))){
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(4),ch);
} else {
if((state_val_26910 === (11))){
var inst_26889 = (state_26909[(8)]);
var inst_26898 = (state_26909[(2)]);
var inst_26886 = inst_26889;
var state_26909__$1 = (function (){var statearr_26919 = state_26909;
(statearr_26919[(7)] = inst_26886);

(statearr_26919[(10)] = inst_26898);

return statearr_26919;
})();
var statearr_26920_26944 = state_26909__$1;
(statearr_26920_26944[(2)] = null);

(statearr_26920_26944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (9))){
var inst_26889 = (state_26909[(8)]);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26909__$1,(11),out,inst_26889);
} else {
if((state_val_26910 === (5))){
var inst_26886 = (state_26909[(7)]);
var inst_26889 = (state_26909[(8)]);
var inst_26893 = cljs.core._EQ_.call(null,inst_26889,inst_26886);
var state_26909__$1 = state_26909;
if(inst_26893){
var statearr_26922_26945 = state_26909__$1;
(statearr_26922_26945[(1)] = (8));

} else {
var statearr_26923_26946 = state_26909__$1;
(statearr_26923_26946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (10))){
var inst_26901 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26924_26947 = state_26909__$1;
(statearr_26924_26947[(2)] = inst_26901);

(statearr_26924_26947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (8))){
var inst_26886 = (state_26909[(7)]);
var tmp26921 = inst_26886;
var inst_26886__$1 = tmp26921;
var state_26909__$1 = (function (){var statearr_26925 = state_26909;
(statearr_26925[(7)] = inst_26886__$1);

return statearr_26925;
})();
var statearr_26926_26948 = state_26909__$1;
(statearr_26926_26948[(2)] = null);

(statearr_26926_26948[(1)] = (2));


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
});})(c__24338__auto___26938,out))
;
return ((function (switch__24226__auto__,c__24338__auto___26938,out){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_26930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26930[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_26930[(1)] = (1));

return statearr_26930;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26909){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e26931){if((e26931 instanceof Object)){
var ex__24230__auto__ = e26931;
var statearr_26932_26949 = state_26909;
(statearr_26932_26949[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26950 = state_26909;
state_26909 = G__26950;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___26938,out))
})();
var state__24340__auto__ = (function (){var statearr_26933 = f__24339__auto__.call(null);
(statearr_26933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___26938);

return statearr_26933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___26938,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26951 = [];
var len__20256__auto___27021 = arguments.length;
var i__20257__auto___27022 = (0);
while(true){
if((i__20257__auto___27022 < len__20256__auto___27021)){
args26951.push((arguments[i__20257__auto___27022]));

var G__27023 = (i__20257__auto___27022 + (1));
i__20257__auto___27022 = G__27023;
continue;
} else {
}
break;
}

var G__26953 = args26951.length;
switch (G__26953) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26951.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24338__auto___27025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___27025,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___27025,out){
return (function (state_26991){
var state_val_26992 = (state_26991[(1)]);
if((state_val_26992 === (7))){
var inst_26987 = (state_26991[(2)]);
var state_26991__$1 = state_26991;
var statearr_26993_27026 = state_26991__$1;
(statearr_26993_27026[(2)] = inst_26987);

(statearr_26993_27026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (1))){
var inst_26954 = (new Array(n));
var inst_26955 = inst_26954;
var inst_26956 = (0);
var state_26991__$1 = (function (){var statearr_26994 = state_26991;
(statearr_26994[(7)] = inst_26956);

(statearr_26994[(8)] = inst_26955);

return statearr_26994;
})();
var statearr_26995_27027 = state_26991__$1;
(statearr_26995_27027[(2)] = null);

(statearr_26995_27027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (4))){
var inst_26959 = (state_26991[(9)]);
var inst_26959__$1 = (state_26991[(2)]);
var inst_26960 = (inst_26959__$1 == null);
var inst_26961 = cljs.core.not.call(null,inst_26960);
var state_26991__$1 = (function (){var statearr_26996 = state_26991;
(statearr_26996[(9)] = inst_26959__$1);

return statearr_26996;
})();
if(inst_26961){
var statearr_26997_27028 = state_26991__$1;
(statearr_26997_27028[(1)] = (5));

} else {
var statearr_26998_27029 = state_26991__$1;
(statearr_26998_27029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (15))){
var inst_26981 = (state_26991[(2)]);
var state_26991__$1 = state_26991;
var statearr_26999_27030 = state_26991__$1;
(statearr_26999_27030[(2)] = inst_26981);

(statearr_26999_27030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (13))){
var state_26991__$1 = state_26991;
var statearr_27000_27031 = state_26991__$1;
(statearr_27000_27031[(2)] = null);

(statearr_27000_27031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (6))){
var inst_26956 = (state_26991[(7)]);
var inst_26977 = (inst_26956 > (0));
var state_26991__$1 = state_26991;
if(cljs.core.truth_(inst_26977)){
var statearr_27001_27032 = state_26991__$1;
(statearr_27001_27032[(1)] = (12));

} else {
var statearr_27002_27033 = state_26991__$1;
(statearr_27002_27033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (3))){
var inst_26989 = (state_26991[(2)]);
var state_26991__$1 = state_26991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26991__$1,inst_26989);
} else {
if((state_val_26992 === (12))){
var inst_26955 = (state_26991[(8)]);
var inst_26979 = cljs.core.vec.call(null,inst_26955);
var state_26991__$1 = state_26991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26991__$1,(15),out,inst_26979);
} else {
if((state_val_26992 === (2))){
var state_26991__$1 = state_26991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26991__$1,(4),ch);
} else {
if((state_val_26992 === (11))){
var inst_26971 = (state_26991[(2)]);
var inst_26972 = (new Array(n));
var inst_26955 = inst_26972;
var inst_26956 = (0);
var state_26991__$1 = (function (){var statearr_27003 = state_26991;
(statearr_27003[(7)] = inst_26956);

(statearr_27003[(8)] = inst_26955);

(statearr_27003[(10)] = inst_26971);

return statearr_27003;
})();
var statearr_27004_27034 = state_26991__$1;
(statearr_27004_27034[(2)] = null);

(statearr_27004_27034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (9))){
var inst_26955 = (state_26991[(8)]);
var inst_26969 = cljs.core.vec.call(null,inst_26955);
var state_26991__$1 = state_26991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26991__$1,(11),out,inst_26969);
} else {
if((state_val_26992 === (5))){
var inst_26959 = (state_26991[(9)]);
var inst_26964 = (state_26991[(11)]);
var inst_26956 = (state_26991[(7)]);
var inst_26955 = (state_26991[(8)]);
var inst_26963 = (inst_26955[inst_26956] = inst_26959);
var inst_26964__$1 = (inst_26956 + (1));
var inst_26965 = (inst_26964__$1 < n);
var state_26991__$1 = (function (){var statearr_27005 = state_26991;
(statearr_27005[(11)] = inst_26964__$1);

(statearr_27005[(12)] = inst_26963);

return statearr_27005;
})();
if(cljs.core.truth_(inst_26965)){
var statearr_27006_27035 = state_26991__$1;
(statearr_27006_27035[(1)] = (8));

} else {
var statearr_27007_27036 = state_26991__$1;
(statearr_27007_27036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (14))){
var inst_26984 = (state_26991[(2)]);
var inst_26985 = cljs.core.async.close_BANG_.call(null,out);
var state_26991__$1 = (function (){var statearr_27009 = state_26991;
(statearr_27009[(13)] = inst_26984);

return statearr_27009;
})();
var statearr_27010_27037 = state_26991__$1;
(statearr_27010_27037[(2)] = inst_26985);

(statearr_27010_27037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (10))){
var inst_26975 = (state_26991[(2)]);
var state_26991__$1 = state_26991;
var statearr_27011_27038 = state_26991__$1;
(statearr_27011_27038[(2)] = inst_26975);

(statearr_27011_27038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26992 === (8))){
var inst_26964 = (state_26991[(11)]);
var inst_26955 = (state_26991[(8)]);
var tmp27008 = inst_26955;
var inst_26955__$1 = tmp27008;
var inst_26956 = inst_26964;
var state_26991__$1 = (function (){var statearr_27012 = state_26991;
(statearr_27012[(7)] = inst_26956);

(statearr_27012[(8)] = inst_26955__$1);

return statearr_27012;
})();
var statearr_27013_27039 = state_26991__$1;
(statearr_27013_27039[(2)] = null);

(statearr_27013_27039[(1)] = (2));


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
});})(c__24338__auto___27025,out))
;
return ((function (switch__24226__auto__,c__24338__auto___27025,out){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_27017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27017[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_27017[(1)] = (1));

return statearr_27017;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_26991){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_26991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e27018){if((e27018 instanceof Object)){
var ex__24230__auto__ = e27018;
var statearr_27019_27040 = state_26991;
(statearr_27019_27040[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27041 = state_26991;
state_26991 = G__27041;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_26991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_26991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___27025,out))
})();
var state__24340__auto__ = (function (){var statearr_27020 = f__24339__auto__.call(null);
(statearr_27020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___27025);

return statearr_27020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___27025,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27042 = [];
var len__20256__auto___27116 = arguments.length;
var i__20257__auto___27117 = (0);
while(true){
if((i__20257__auto___27117 < len__20256__auto___27116)){
args27042.push((arguments[i__20257__auto___27117]));

var G__27118 = (i__20257__auto___27117 + (1));
i__20257__auto___27117 = G__27118;
continue;
} else {
}
break;
}

var G__27044 = args27042.length;
switch (G__27044) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27042.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24338__auto___27120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24338__auto___27120,out){
return (function (){
var f__24339__auto__ = (function (){var switch__24226__auto__ = ((function (c__24338__auto___27120,out){
return (function (state_27086){
var state_val_27087 = (state_27086[(1)]);
if((state_val_27087 === (7))){
var inst_27082 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27088_27121 = state_27086__$1;
(statearr_27088_27121[(2)] = inst_27082);

(statearr_27088_27121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (1))){
var inst_27045 = [];
var inst_27046 = inst_27045;
var inst_27047 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27086__$1 = (function (){var statearr_27089 = state_27086;
(statearr_27089[(7)] = inst_27046);

(statearr_27089[(8)] = inst_27047);

return statearr_27089;
})();
var statearr_27090_27122 = state_27086__$1;
(statearr_27090_27122[(2)] = null);

(statearr_27090_27122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (4))){
var inst_27050 = (state_27086[(9)]);
var inst_27050__$1 = (state_27086[(2)]);
var inst_27051 = (inst_27050__$1 == null);
var inst_27052 = cljs.core.not.call(null,inst_27051);
var state_27086__$1 = (function (){var statearr_27091 = state_27086;
(statearr_27091[(9)] = inst_27050__$1);

return statearr_27091;
})();
if(inst_27052){
var statearr_27092_27123 = state_27086__$1;
(statearr_27092_27123[(1)] = (5));

} else {
var statearr_27093_27124 = state_27086__$1;
(statearr_27093_27124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (15))){
var inst_27076 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27094_27125 = state_27086__$1;
(statearr_27094_27125[(2)] = inst_27076);

(statearr_27094_27125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (13))){
var state_27086__$1 = state_27086;
var statearr_27095_27126 = state_27086__$1;
(statearr_27095_27126[(2)] = null);

(statearr_27095_27126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (6))){
var inst_27046 = (state_27086[(7)]);
var inst_27071 = inst_27046.length;
var inst_27072 = (inst_27071 > (0));
var state_27086__$1 = state_27086;
if(cljs.core.truth_(inst_27072)){
var statearr_27096_27127 = state_27086__$1;
(statearr_27096_27127[(1)] = (12));

} else {
var statearr_27097_27128 = state_27086__$1;
(statearr_27097_27128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (3))){
var inst_27084 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27086__$1,inst_27084);
} else {
if((state_val_27087 === (12))){
var inst_27046 = (state_27086[(7)]);
var inst_27074 = cljs.core.vec.call(null,inst_27046);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27086__$1,(15),out,inst_27074);
} else {
if((state_val_27087 === (2))){
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(4),ch);
} else {
if((state_val_27087 === (11))){
var inst_27050 = (state_27086[(9)]);
var inst_27054 = (state_27086[(10)]);
var inst_27064 = (state_27086[(2)]);
var inst_27065 = [];
var inst_27066 = inst_27065.push(inst_27050);
var inst_27046 = inst_27065;
var inst_27047 = inst_27054;
var state_27086__$1 = (function (){var statearr_27098 = state_27086;
(statearr_27098[(11)] = inst_27066);

(statearr_27098[(12)] = inst_27064);

(statearr_27098[(7)] = inst_27046);

(statearr_27098[(8)] = inst_27047);

return statearr_27098;
})();
var statearr_27099_27129 = state_27086__$1;
(statearr_27099_27129[(2)] = null);

(statearr_27099_27129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (9))){
var inst_27046 = (state_27086[(7)]);
var inst_27062 = cljs.core.vec.call(null,inst_27046);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27086__$1,(11),out,inst_27062);
} else {
if((state_val_27087 === (5))){
var inst_27050 = (state_27086[(9)]);
var inst_27047 = (state_27086[(8)]);
var inst_27054 = (state_27086[(10)]);
var inst_27054__$1 = f.call(null,inst_27050);
var inst_27055 = cljs.core._EQ_.call(null,inst_27054__$1,inst_27047);
var inst_27056 = cljs.core.keyword_identical_QMARK_.call(null,inst_27047,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27057 = (inst_27055) || (inst_27056);
var state_27086__$1 = (function (){var statearr_27100 = state_27086;
(statearr_27100[(10)] = inst_27054__$1);

return statearr_27100;
})();
if(cljs.core.truth_(inst_27057)){
var statearr_27101_27130 = state_27086__$1;
(statearr_27101_27130[(1)] = (8));

} else {
var statearr_27102_27131 = state_27086__$1;
(statearr_27102_27131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (14))){
var inst_27079 = (state_27086[(2)]);
var inst_27080 = cljs.core.async.close_BANG_.call(null,out);
var state_27086__$1 = (function (){var statearr_27104 = state_27086;
(statearr_27104[(13)] = inst_27079);

return statearr_27104;
})();
var statearr_27105_27132 = state_27086__$1;
(statearr_27105_27132[(2)] = inst_27080);

(statearr_27105_27132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (10))){
var inst_27069 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27106_27133 = state_27086__$1;
(statearr_27106_27133[(2)] = inst_27069);

(statearr_27106_27133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (8))){
var inst_27050 = (state_27086[(9)]);
var inst_27046 = (state_27086[(7)]);
var inst_27054 = (state_27086[(10)]);
var inst_27059 = inst_27046.push(inst_27050);
var tmp27103 = inst_27046;
var inst_27046__$1 = tmp27103;
var inst_27047 = inst_27054;
var state_27086__$1 = (function (){var statearr_27107 = state_27086;
(statearr_27107[(7)] = inst_27046__$1);

(statearr_27107[(8)] = inst_27047);

(statearr_27107[(14)] = inst_27059);

return statearr_27107;
})();
var statearr_27108_27134 = state_27086__$1;
(statearr_27108_27134[(2)] = null);

(statearr_27108_27134[(1)] = (2));


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
});})(c__24338__auto___27120,out))
;
return ((function (switch__24226__auto__,c__24338__auto___27120,out){
return (function() {
var cljs$core$async$state_machine__24227__auto__ = null;
var cljs$core$async$state_machine__24227__auto____0 = (function (){
var statearr_27112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27112[(0)] = cljs$core$async$state_machine__24227__auto__);

(statearr_27112[(1)] = (1));

return statearr_27112;
});
var cljs$core$async$state_machine__24227__auto____1 = (function (state_27086){
while(true){
var ret_value__24228__auto__ = (function (){try{while(true){
var result__24229__auto__ = switch__24226__auto__.call(null,state_27086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24229__auto__;
}
break;
}
}catch (e27113){if((e27113 instanceof Object)){
var ex__24230__auto__ = e27113;
var statearr_27114_27135 = state_27086;
(statearr_27114_27135[(5)] = ex__24230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27136 = state_27086;
state_27086 = G__27136;
continue;
} else {
return ret_value__24228__auto__;
}
break;
}
});
cljs$core$async$state_machine__24227__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24227__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24227__auto____0;
cljs$core$async$state_machine__24227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24227__auto____1;
return cljs$core$async$state_machine__24227__auto__;
})()
;})(switch__24226__auto__,c__24338__auto___27120,out))
})();
var state__24340__auto__ = (function (){var statearr_27115 = f__24339__auto__.call(null);
(statearr_27115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24338__auto___27120);

return statearr_27115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24340__auto__);
});})(c__24338__auto___27120,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1494348451327