// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22275 = [];
var len__19380__auto___22281 = arguments.length;
var i__19381__auto___22282 = (0);
while(true){
if((i__19381__auto___22282 < len__19380__auto___22281)){
args22275.push((arguments[i__19381__auto___22282]));

var G__22283 = (i__19381__auto___22282 + (1));
i__19381__auto___22282 = G__22283;
continue;
} else {
}
break;
}

var G__22277 = args22275.length;
switch (G__22277) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22275.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22278 = (function (f,blockable,meta22279){
this.f = f;
this.blockable = blockable;
this.meta22279 = meta22279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22280,meta22279__$1){
var self__ = this;
var _22280__$1 = this;
return (new cljs.core.async.t_cljs$core$async22278(self__.f,self__.blockable,meta22279__$1));
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22280){
var self__ = this;
var _22280__$1 = this;
return self__.meta22279;
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22279","meta22279",-1003790602,null)], null);
});

cljs.core.async.t_cljs$core$async22278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22278";

cljs.core.async.t_cljs$core$async22278.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async22278");
});

cljs.core.async.__GT_t_cljs$core$async22278 = (function cljs$core$async$__GT_t_cljs$core$async22278(f__$1,blockable__$1,meta22279){
return (new cljs.core.async.t_cljs$core$async22278(f__$1,blockable__$1,meta22279));
});

}

return (new cljs.core.async.t_cljs$core$async22278(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args22287 = [];
var len__19380__auto___22290 = arguments.length;
var i__19381__auto___22291 = (0);
while(true){
if((i__19381__auto___22291 < len__19380__auto___22290)){
args22287.push((arguments[i__19381__auto___22291]));

var G__22292 = (i__19381__auto___22291 + (1));
i__19381__auto___22291 = G__22292;
continue;
} else {
}
break;
}

var G__22289 = args22287.length;
switch (G__22289) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22287.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args22294 = [];
var len__19380__auto___22297 = arguments.length;
var i__19381__auto___22298 = (0);
while(true){
if((i__19381__auto___22298 < len__19380__auto___22297)){
args22294.push((arguments[i__19381__auto___22298]));

var G__22299 = (i__19381__auto___22298 + (1));
i__19381__auto___22298 = G__22299;
continue;
} else {
}
break;
}

var G__22296 = args22294.length;
switch (G__22296) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22294.length)].join('')));

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
var args22301 = [];
var len__19380__auto___22304 = arguments.length;
var i__19381__auto___22305 = (0);
while(true){
if((i__19381__auto___22305 < len__19380__auto___22304)){
args22301.push((arguments[i__19381__auto___22305]));

var G__22306 = (i__19381__auto___22305 + (1));
i__19381__auto___22305 = G__22306;
continue;
} else {
}
break;
}

var G__22303 = args22301.length;
switch (G__22303) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22301.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22308 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22308);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22308,ret){
return (function (){
return fn1.call(null,val_22308);
});})(val_22308,ret))
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
var args22309 = [];
var len__19380__auto___22312 = arguments.length;
var i__19381__auto___22313 = (0);
while(true){
if((i__19381__auto___22313 < len__19380__auto___22312)){
args22309.push((arguments[i__19381__auto___22313]));

var G__22314 = (i__19381__auto___22313 + (1));
i__19381__auto___22313 = G__22314;
continue;
} else {
}
break;
}

var G__22311 = args22309.length;
switch (G__22311) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22309.length)].join('')));

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
var n__19225__auto___22316 = n;
var x_22317 = (0);
while(true){
if((x_22317 < n__19225__auto___22316)){
(a[x_22317] = (0));

var G__22318 = (x_22317 + (1));
x_22317 = G__22318;
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

var G__22319 = (i + (1));
i = G__22319;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22323 = (function (alt_flag,flag,meta22324){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22324 = meta22324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22325,meta22324__$1){
var self__ = this;
var _22325__$1 = this;
return (new cljs.core.async.t_cljs$core$async22323(self__.alt_flag,self__.flag,meta22324__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22325){
var self__ = this;
var _22325__$1 = this;
return self__.meta22324;
});})(flag))
;

cljs.core.async.t_cljs$core$async22323.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22323.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22324","meta22324",-2101712505,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22323";

cljs.core.async.t_cljs$core$async22323.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async22323");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22323 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22323(alt_flag__$1,flag__$1,meta22324){
return (new cljs.core.async.t_cljs$core$async22323(alt_flag__$1,flag__$1,meta22324));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22323(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22329 = (function (alt_handler,flag,cb,meta22330){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22330 = meta22330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22331,meta22330__$1){
var self__ = this;
var _22331__$1 = this;
return (new cljs.core.async.t_cljs$core$async22329(self__.alt_handler,self__.flag,self__.cb,meta22330__$1));
});

cljs.core.async.t_cljs$core$async22329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22331){
var self__ = this;
var _22331__$1 = this;
return self__.meta22330;
});

cljs.core.async.t_cljs$core$async22329.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22330","meta22330",-1053216510,null)], null);
});

cljs.core.async.t_cljs$core$async22329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22329";

cljs.core.async.t_cljs$core$async22329.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async22329");
});

cljs.core.async.__GT_t_cljs$core$async22329 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22329(alt_handler__$1,flag__$1,cb__$1,meta22330){
return (new cljs.core.async.t_cljs$core$async22329(alt_handler__$1,flag__$1,cb__$1,meta22330));
});

}

return (new cljs.core.async.t_cljs$core$async22329(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22332_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22332_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22333_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22333_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18322__auto__ = wport;
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22334 = (i + (1));
i = G__22334;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18322__auto__ = ret;
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18310__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18310__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18310__auto__;
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
var args__19387__auto__ = [];
var len__19380__auto___22340 = arguments.length;
var i__19381__auto___22341 = (0);
while(true){
if((i__19381__auto___22341 < len__19380__auto___22340)){
args__19387__auto__.push((arguments[i__19381__auto___22341]));

var G__22342 = (i__19381__auto___22341 + (1));
i__19381__auto___22341 = G__22342;
continue;
} else {
}
break;
}

var argseq__19388__auto__ = ((((1) < args__19387__auto__.length))?(new cljs.core.IndexedSeq(args__19387__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19388__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22337){
var map__22338 = p__22337;
var map__22338__$1 = ((((!((map__22338 == null)))?((((map__22338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22338):map__22338);
var opts = map__22338__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22335){
var G__22336 = cljs.core.first.call(null,seq22335);
var seq22335__$1 = cljs.core.next.call(null,seq22335);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22336,seq22335__$1);
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
var args22343 = [];
var len__19380__auto___22393 = arguments.length;
var i__19381__auto___22394 = (0);
while(true){
if((i__19381__auto___22394 < len__19380__auto___22393)){
args22343.push((arguments[i__19381__auto___22394]));

var G__22395 = (i__19381__auto___22394 + (1));
i__19381__auto___22394 = G__22395;
continue;
} else {
}
break;
}

var G__22345 = args22343.length;
switch (G__22345) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22343.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22230__auto___22397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___22397){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___22397){
return (function (state_22369){
var state_val_22370 = (state_22369[(1)]);
if((state_val_22370 === (7))){
var inst_22365 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22371_22398 = state_22369__$1;
(statearr_22371_22398[(2)] = inst_22365);

(statearr_22371_22398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (1))){
var state_22369__$1 = state_22369;
var statearr_22372_22399 = state_22369__$1;
(statearr_22372_22399[(2)] = null);

(statearr_22372_22399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (4))){
var inst_22348 = (state_22369[(7)]);
var inst_22348__$1 = (state_22369[(2)]);
var inst_22349 = (inst_22348__$1 == null);
var state_22369__$1 = (function (){var statearr_22373 = state_22369;
(statearr_22373[(7)] = inst_22348__$1);

return statearr_22373;
})();
if(cljs.core.truth_(inst_22349)){
var statearr_22374_22400 = state_22369__$1;
(statearr_22374_22400[(1)] = (5));

} else {
var statearr_22375_22401 = state_22369__$1;
(statearr_22375_22401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (13))){
var state_22369__$1 = state_22369;
var statearr_22376_22402 = state_22369__$1;
(statearr_22376_22402[(2)] = null);

(statearr_22376_22402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (6))){
var inst_22348 = (state_22369[(7)]);
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22369__$1,(11),to,inst_22348);
} else {
if((state_val_22370 === (3))){
var inst_22367 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22369__$1,inst_22367);
} else {
if((state_val_22370 === (12))){
var state_22369__$1 = state_22369;
var statearr_22377_22403 = state_22369__$1;
(statearr_22377_22403[(2)] = null);

(statearr_22377_22403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (2))){
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22369__$1,(4),from);
} else {
if((state_val_22370 === (11))){
var inst_22358 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
if(cljs.core.truth_(inst_22358)){
var statearr_22378_22404 = state_22369__$1;
(statearr_22378_22404[(1)] = (12));

} else {
var statearr_22379_22405 = state_22369__$1;
(statearr_22379_22405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (9))){
var state_22369__$1 = state_22369;
var statearr_22380_22406 = state_22369__$1;
(statearr_22380_22406[(2)] = null);

(statearr_22380_22406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (5))){
var state_22369__$1 = state_22369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22381_22407 = state_22369__$1;
(statearr_22381_22407[(1)] = (8));

} else {
var statearr_22382_22408 = state_22369__$1;
(statearr_22382_22408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (14))){
var inst_22363 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22383_22409 = state_22369__$1;
(statearr_22383_22409[(2)] = inst_22363);

(statearr_22383_22409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (10))){
var inst_22355 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22384_22410 = state_22369__$1;
(statearr_22384_22410[(2)] = inst_22355);

(statearr_22384_22410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (8))){
var inst_22352 = cljs.core.async.close_BANG_.call(null,to);
var state_22369__$1 = state_22369;
var statearr_22385_22411 = state_22369__$1;
(statearr_22385_22411[(2)] = inst_22352);

(statearr_22385_22411[(1)] = (10));


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
});})(c__22230__auto___22397))
;
return ((function (switch__22118__auto__,c__22230__auto___22397){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_22389 = [null,null,null,null,null,null,null,null];
(statearr_22389[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_22389[(1)] = (1));

return statearr_22389;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_22369){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22390){if((e22390 instanceof Object)){
var ex__22122__auto__ = e22390;
var statearr_22391_22412 = state_22369;
(statearr_22391_22412[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22413 = state_22369;
state_22369 = G__22413;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_22369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_22369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___22397))
})();
var state__22232__auto__ = (function (){var statearr_22392 = f__22231__auto__.call(null);
(statearr_22392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___22397);

return statearr_22392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___22397))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22597){
var vec__22598 = p__22597;
var v = cljs.core.nth.call(null,vec__22598,(0),null);
var p = cljs.core.nth.call(null,vec__22598,(1),null);
var job = vec__22598;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22230__auto___22780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___22780,res,vec__22598,v,p,job,jobs,results){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___22780,res,vec__22598,v,p,job,jobs,results){
return (function (state_22603){
var state_val_22604 = (state_22603[(1)]);
if((state_val_22604 === (1))){
var state_22603__$1 = state_22603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22603__$1,(2),res,v);
} else {
if((state_val_22604 === (2))){
var inst_22600 = (state_22603[(2)]);
var inst_22601 = cljs.core.async.close_BANG_.call(null,res);
var state_22603__$1 = (function (){var statearr_22605 = state_22603;
(statearr_22605[(7)] = inst_22600);

return statearr_22605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22603__$1,inst_22601);
} else {
return null;
}
}
});})(c__22230__auto___22780,res,vec__22598,v,p,job,jobs,results))
;
return ((function (switch__22118__auto__,c__22230__auto___22780,res,vec__22598,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0 = (function (){
var statearr_22609 = [null,null,null,null,null,null,null,null];
(statearr_22609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__);

(statearr_22609[(1)] = (1));

return statearr_22609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1 = (function (state_22603){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22610){if((e22610 instanceof Object)){
var ex__22122__auto__ = e22610;
var statearr_22611_22781 = state_22603;
(statearr_22611_22781[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22782 = state_22603;
state_22603 = G__22782;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = function(state_22603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1.call(this,state_22603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___22780,res,vec__22598,v,p,job,jobs,results))
})();
var state__22232__auto__ = (function (){var statearr_22612 = f__22231__auto__.call(null);
(statearr_22612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___22780);

return statearr_22612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___22780,res,vec__22598,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22613){
var vec__22614 = p__22613;
var v = cljs.core.nth.call(null,vec__22614,(0),null);
var p = cljs.core.nth.call(null,vec__22614,(1),null);
var job = vec__22614;
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
var n__19225__auto___22783 = n;
var __22784 = (0);
while(true){
if((__22784 < n__19225__auto___22783)){
var G__22615_22785 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22615_22785) {
case "compute":
var c__22230__auto___22787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22784,c__22230__auto___22787,G__22615_22785,n__19225__auto___22783,jobs,results,process,async){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (__22784,c__22230__auto___22787,G__22615_22785,n__19225__auto___22783,jobs,results,process,async){
return (function (state_22628){
var state_val_22629 = (state_22628[(1)]);
if((state_val_22629 === (1))){
var state_22628__$1 = state_22628;
var statearr_22630_22788 = state_22628__$1;
(statearr_22630_22788[(2)] = null);

(statearr_22630_22788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22629 === (2))){
var state_22628__$1 = state_22628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22628__$1,(4),jobs);
} else {
if((state_val_22629 === (3))){
var inst_22626 = (state_22628[(2)]);
var state_22628__$1 = state_22628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22628__$1,inst_22626);
} else {
if((state_val_22629 === (4))){
var inst_22618 = (state_22628[(2)]);
var inst_22619 = process.call(null,inst_22618);
var state_22628__$1 = state_22628;
if(cljs.core.truth_(inst_22619)){
var statearr_22631_22789 = state_22628__$1;
(statearr_22631_22789[(1)] = (5));

} else {
var statearr_22632_22790 = state_22628__$1;
(statearr_22632_22790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22629 === (5))){
var state_22628__$1 = state_22628;
var statearr_22633_22791 = state_22628__$1;
(statearr_22633_22791[(2)] = null);

(statearr_22633_22791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22629 === (6))){
var state_22628__$1 = state_22628;
var statearr_22634_22792 = state_22628__$1;
(statearr_22634_22792[(2)] = null);

(statearr_22634_22792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22629 === (7))){
var inst_22624 = (state_22628[(2)]);
var state_22628__$1 = state_22628;
var statearr_22635_22793 = state_22628__$1;
(statearr_22635_22793[(2)] = inst_22624);

(statearr_22635_22793[(1)] = (3));


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
});})(__22784,c__22230__auto___22787,G__22615_22785,n__19225__auto___22783,jobs,results,process,async))
;
return ((function (__22784,switch__22118__auto__,c__22230__auto___22787,G__22615_22785,n__19225__auto___22783,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0 = (function (){
var statearr_22639 = [null,null,null,null,null,null,null];
(statearr_22639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__);

(statearr_22639[(1)] = (1));

return statearr_22639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1 = (function (state_22628){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22640){if((e22640 instanceof Object)){
var ex__22122__auto__ = e22640;
var statearr_22641_22794 = state_22628;
(statearr_22641_22794[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22795 = state_22628;
state_22628 = G__22795;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = function(state_22628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1.call(this,state_22628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__;
})()
;})(__22784,switch__22118__auto__,c__22230__auto___22787,G__22615_22785,n__19225__auto___22783,jobs,results,process,async))
})();
var state__22232__auto__ = (function (){var statearr_22642 = f__22231__auto__.call(null);
(statearr_22642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___22787);

return statearr_22642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(__22784,c__22230__auto___22787,G__22615_22785,n__19225__auto___22783,jobs,results,process,async))
);


break;
case "async":
var c__22230__auto___22796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22784,c__22230__auto___22796,G__22615_22785,n__19225__auto___22783,jobs,results,process,async){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (__22784,c__22230__auto___22796,G__22615_22785,n__19225__auto___22783,jobs,results,process,async){
return (function (state_22655){
var state_val_22656 = (state_22655[(1)]);
if((state_val_22656 === (1))){
var state_22655__$1 = state_22655;
var statearr_22657_22797 = state_22655__$1;
(statearr_22657_22797[(2)] = null);

(statearr_22657_22797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (2))){
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22655__$1,(4),jobs);
} else {
if((state_val_22656 === (3))){
var inst_22653 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22655__$1,inst_22653);
} else {
if((state_val_22656 === (4))){
var inst_22645 = (state_22655[(2)]);
var inst_22646 = async.call(null,inst_22645);
var state_22655__$1 = state_22655;
if(cljs.core.truth_(inst_22646)){
var statearr_22658_22798 = state_22655__$1;
(statearr_22658_22798[(1)] = (5));

} else {
var statearr_22659_22799 = state_22655__$1;
(statearr_22659_22799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (5))){
var state_22655__$1 = state_22655;
var statearr_22660_22800 = state_22655__$1;
(statearr_22660_22800[(2)] = null);

(statearr_22660_22800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (6))){
var state_22655__$1 = state_22655;
var statearr_22661_22801 = state_22655__$1;
(statearr_22661_22801[(2)] = null);

(statearr_22661_22801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (7))){
var inst_22651 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
var statearr_22662_22802 = state_22655__$1;
(statearr_22662_22802[(2)] = inst_22651);

(statearr_22662_22802[(1)] = (3));


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
});})(__22784,c__22230__auto___22796,G__22615_22785,n__19225__auto___22783,jobs,results,process,async))
;
return ((function (__22784,switch__22118__auto__,c__22230__auto___22796,G__22615_22785,n__19225__auto___22783,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0 = (function (){
var statearr_22666 = [null,null,null,null,null,null,null];
(statearr_22666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__);

(statearr_22666[(1)] = (1));

return statearr_22666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1 = (function (state_22655){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22667){if((e22667 instanceof Object)){
var ex__22122__auto__ = e22667;
var statearr_22668_22803 = state_22655;
(statearr_22668_22803[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22804 = state_22655;
state_22655 = G__22804;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = function(state_22655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1.call(this,state_22655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__;
})()
;})(__22784,switch__22118__auto__,c__22230__auto___22796,G__22615_22785,n__19225__auto___22783,jobs,results,process,async))
})();
var state__22232__auto__ = (function (){var statearr_22669 = f__22231__auto__.call(null);
(statearr_22669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___22796);

return statearr_22669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(__22784,c__22230__auto___22796,G__22615_22785,n__19225__auto___22783,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22805 = (__22784 + (1));
__22784 = G__22805;
continue;
} else {
}
break;
}

var c__22230__auto___22806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___22806,jobs,results,process,async){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___22806,jobs,results,process,async){
return (function (state_22691){
var state_val_22692 = (state_22691[(1)]);
if((state_val_22692 === (1))){
var state_22691__$1 = state_22691;
var statearr_22693_22807 = state_22691__$1;
(statearr_22693_22807[(2)] = null);

(statearr_22693_22807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (2))){
var state_22691__$1 = state_22691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22691__$1,(4),from);
} else {
if((state_val_22692 === (3))){
var inst_22689 = (state_22691[(2)]);
var state_22691__$1 = state_22691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22691__$1,inst_22689);
} else {
if((state_val_22692 === (4))){
var inst_22672 = (state_22691[(7)]);
var inst_22672__$1 = (state_22691[(2)]);
var inst_22673 = (inst_22672__$1 == null);
var state_22691__$1 = (function (){var statearr_22694 = state_22691;
(statearr_22694[(7)] = inst_22672__$1);

return statearr_22694;
})();
if(cljs.core.truth_(inst_22673)){
var statearr_22695_22808 = state_22691__$1;
(statearr_22695_22808[(1)] = (5));

} else {
var statearr_22696_22809 = state_22691__$1;
(statearr_22696_22809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (5))){
var inst_22675 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22691__$1 = state_22691;
var statearr_22697_22810 = state_22691__$1;
(statearr_22697_22810[(2)] = inst_22675);

(statearr_22697_22810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (6))){
var inst_22672 = (state_22691[(7)]);
var inst_22677 = (state_22691[(8)]);
var inst_22677__$1 = cljs.core.async.chan.call(null,(1));
var inst_22678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22679 = [inst_22672,inst_22677__$1];
var inst_22680 = (new cljs.core.PersistentVector(null,2,(5),inst_22678,inst_22679,null));
var state_22691__$1 = (function (){var statearr_22698 = state_22691;
(statearr_22698[(8)] = inst_22677__$1);

return statearr_22698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22691__$1,(8),jobs,inst_22680);
} else {
if((state_val_22692 === (7))){
var inst_22687 = (state_22691[(2)]);
var state_22691__$1 = state_22691;
var statearr_22699_22811 = state_22691__$1;
(statearr_22699_22811[(2)] = inst_22687);

(statearr_22699_22811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22692 === (8))){
var inst_22677 = (state_22691[(8)]);
var inst_22682 = (state_22691[(2)]);
var state_22691__$1 = (function (){var statearr_22700 = state_22691;
(statearr_22700[(9)] = inst_22682);

return statearr_22700;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22691__$1,(9),results,inst_22677);
} else {
if((state_val_22692 === (9))){
var inst_22684 = (state_22691[(2)]);
var state_22691__$1 = (function (){var statearr_22701 = state_22691;
(statearr_22701[(10)] = inst_22684);

return statearr_22701;
})();
var statearr_22702_22812 = state_22691__$1;
(statearr_22702_22812[(2)] = null);

(statearr_22702_22812[(1)] = (2));


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
});})(c__22230__auto___22806,jobs,results,process,async))
;
return ((function (switch__22118__auto__,c__22230__auto___22806,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0 = (function (){
var statearr_22706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__);

(statearr_22706[(1)] = (1));

return statearr_22706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1 = (function (state_22691){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22707){if((e22707 instanceof Object)){
var ex__22122__auto__ = e22707;
var statearr_22708_22813 = state_22691;
(statearr_22708_22813[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22814 = state_22691;
state_22691 = G__22814;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = function(state_22691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1.call(this,state_22691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___22806,jobs,results,process,async))
})();
var state__22232__auto__ = (function (){var statearr_22709 = f__22231__auto__.call(null);
(statearr_22709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___22806);

return statearr_22709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___22806,jobs,results,process,async))
);


var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__,jobs,results,process,async){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__,jobs,results,process,async){
return (function (state_22747){
var state_val_22748 = (state_22747[(1)]);
if((state_val_22748 === (7))){
var inst_22743 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22749_22815 = state_22747__$1;
(statearr_22749_22815[(2)] = inst_22743);

(statearr_22749_22815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (20))){
var state_22747__$1 = state_22747;
var statearr_22750_22816 = state_22747__$1;
(statearr_22750_22816[(2)] = null);

(statearr_22750_22816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (1))){
var state_22747__$1 = state_22747;
var statearr_22751_22817 = state_22747__$1;
(statearr_22751_22817[(2)] = null);

(statearr_22751_22817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (4))){
var inst_22712 = (state_22747[(7)]);
var inst_22712__$1 = (state_22747[(2)]);
var inst_22713 = (inst_22712__$1 == null);
var state_22747__$1 = (function (){var statearr_22752 = state_22747;
(statearr_22752[(7)] = inst_22712__$1);

return statearr_22752;
})();
if(cljs.core.truth_(inst_22713)){
var statearr_22753_22818 = state_22747__$1;
(statearr_22753_22818[(1)] = (5));

} else {
var statearr_22754_22819 = state_22747__$1;
(statearr_22754_22819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (15))){
var inst_22725 = (state_22747[(8)]);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22747__$1,(18),to,inst_22725);
} else {
if((state_val_22748 === (21))){
var inst_22738 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22755_22820 = state_22747__$1;
(statearr_22755_22820[(2)] = inst_22738);

(statearr_22755_22820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (13))){
var inst_22740 = (state_22747[(2)]);
var state_22747__$1 = (function (){var statearr_22756 = state_22747;
(statearr_22756[(9)] = inst_22740);

return statearr_22756;
})();
var statearr_22757_22821 = state_22747__$1;
(statearr_22757_22821[(2)] = null);

(statearr_22757_22821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (6))){
var inst_22712 = (state_22747[(7)]);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22747__$1,(11),inst_22712);
} else {
if((state_val_22748 === (17))){
var inst_22733 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
if(cljs.core.truth_(inst_22733)){
var statearr_22758_22822 = state_22747__$1;
(statearr_22758_22822[(1)] = (19));

} else {
var statearr_22759_22823 = state_22747__$1;
(statearr_22759_22823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (3))){
var inst_22745 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22747__$1,inst_22745);
} else {
if((state_val_22748 === (12))){
var inst_22722 = (state_22747[(10)]);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22747__$1,(14),inst_22722);
} else {
if((state_val_22748 === (2))){
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22747__$1,(4),results);
} else {
if((state_val_22748 === (19))){
var state_22747__$1 = state_22747;
var statearr_22760_22824 = state_22747__$1;
(statearr_22760_22824[(2)] = null);

(statearr_22760_22824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (11))){
var inst_22722 = (state_22747[(2)]);
var state_22747__$1 = (function (){var statearr_22761 = state_22747;
(statearr_22761[(10)] = inst_22722);

return statearr_22761;
})();
var statearr_22762_22825 = state_22747__$1;
(statearr_22762_22825[(2)] = null);

(statearr_22762_22825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (9))){
var state_22747__$1 = state_22747;
var statearr_22763_22826 = state_22747__$1;
(statearr_22763_22826[(2)] = null);

(statearr_22763_22826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (5))){
var state_22747__$1 = state_22747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22764_22827 = state_22747__$1;
(statearr_22764_22827[(1)] = (8));

} else {
var statearr_22765_22828 = state_22747__$1;
(statearr_22765_22828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (14))){
var inst_22725 = (state_22747[(8)]);
var inst_22727 = (state_22747[(11)]);
var inst_22725__$1 = (state_22747[(2)]);
var inst_22726 = (inst_22725__$1 == null);
var inst_22727__$1 = cljs.core.not.call(null,inst_22726);
var state_22747__$1 = (function (){var statearr_22766 = state_22747;
(statearr_22766[(8)] = inst_22725__$1);

(statearr_22766[(11)] = inst_22727__$1);

return statearr_22766;
})();
if(inst_22727__$1){
var statearr_22767_22829 = state_22747__$1;
(statearr_22767_22829[(1)] = (15));

} else {
var statearr_22768_22830 = state_22747__$1;
(statearr_22768_22830[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (16))){
var inst_22727 = (state_22747[(11)]);
var state_22747__$1 = state_22747;
var statearr_22769_22831 = state_22747__$1;
(statearr_22769_22831[(2)] = inst_22727);

(statearr_22769_22831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (10))){
var inst_22719 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22770_22832 = state_22747__$1;
(statearr_22770_22832[(2)] = inst_22719);

(statearr_22770_22832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (18))){
var inst_22730 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22771_22833 = state_22747__$1;
(statearr_22771_22833[(2)] = inst_22730);

(statearr_22771_22833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (8))){
var inst_22716 = cljs.core.async.close_BANG_.call(null,to);
var state_22747__$1 = state_22747;
var statearr_22772_22834 = state_22747__$1;
(statearr_22772_22834[(2)] = inst_22716);

(statearr_22772_22834[(1)] = (10));


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
});})(c__22230__auto__,jobs,results,process,async))
;
return ((function (switch__22118__auto__,c__22230__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0 = (function (){
var statearr_22776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__);

(statearr_22776[(1)] = (1));

return statearr_22776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1 = (function (state_22747){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22777){if((e22777 instanceof Object)){
var ex__22122__auto__ = e22777;
var statearr_22778_22835 = state_22747;
(statearr_22778_22835[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22836 = state_22747;
state_22747 = G__22836;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__ = function(state_22747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1.call(this,state_22747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__,jobs,results,process,async))
})();
var state__22232__auto__ = (function (){var statearr_22779 = f__22231__auto__.call(null);
(statearr_22779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_22779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__,jobs,results,process,async))
);

return c__22230__auto__;
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
var args22837 = [];
var len__19380__auto___22840 = arguments.length;
var i__19381__auto___22841 = (0);
while(true){
if((i__19381__auto___22841 < len__19380__auto___22840)){
args22837.push((arguments[i__19381__auto___22841]));

var G__22842 = (i__19381__auto___22841 + (1));
i__19381__auto___22841 = G__22842;
continue;
} else {
}
break;
}

var G__22839 = args22837.length;
switch (G__22839) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22837.length)].join('')));

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
var args22844 = [];
var len__19380__auto___22847 = arguments.length;
var i__19381__auto___22848 = (0);
while(true){
if((i__19381__auto___22848 < len__19380__auto___22847)){
args22844.push((arguments[i__19381__auto___22848]));

var G__22849 = (i__19381__auto___22848 + (1));
i__19381__auto___22848 = G__22849;
continue;
} else {
}
break;
}

var G__22846 = args22844.length;
switch (G__22846) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22844.length)].join('')));

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
var args22851 = [];
var len__19380__auto___22904 = arguments.length;
var i__19381__auto___22905 = (0);
while(true){
if((i__19381__auto___22905 < len__19380__auto___22904)){
args22851.push((arguments[i__19381__auto___22905]));

var G__22906 = (i__19381__auto___22905 + (1));
i__19381__auto___22905 = G__22906;
continue;
} else {
}
break;
}

var G__22853 = args22851.length;
switch (G__22853) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22851.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22230__auto___22908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___22908,tc,fc){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___22908,tc,fc){
return (function (state_22879){
var state_val_22880 = (state_22879[(1)]);
if((state_val_22880 === (7))){
var inst_22875 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22881_22909 = state_22879__$1;
(statearr_22881_22909[(2)] = inst_22875);

(statearr_22881_22909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (1))){
var state_22879__$1 = state_22879;
var statearr_22882_22910 = state_22879__$1;
(statearr_22882_22910[(2)] = null);

(statearr_22882_22910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (4))){
var inst_22856 = (state_22879[(7)]);
var inst_22856__$1 = (state_22879[(2)]);
var inst_22857 = (inst_22856__$1 == null);
var state_22879__$1 = (function (){var statearr_22883 = state_22879;
(statearr_22883[(7)] = inst_22856__$1);

return statearr_22883;
})();
if(cljs.core.truth_(inst_22857)){
var statearr_22884_22911 = state_22879__$1;
(statearr_22884_22911[(1)] = (5));

} else {
var statearr_22885_22912 = state_22879__$1;
(statearr_22885_22912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (13))){
var state_22879__$1 = state_22879;
var statearr_22886_22913 = state_22879__$1;
(statearr_22886_22913[(2)] = null);

(statearr_22886_22913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (6))){
var inst_22856 = (state_22879[(7)]);
var inst_22862 = p.call(null,inst_22856);
var state_22879__$1 = state_22879;
if(cljs.core.truth_(inst_22862)){
var statearr_22887_22914 = state_22879__$1;
(statearr_22887_22914[(1)] = (9));

} else {
var statearr_22888_22915 = state_22879__$1;
(statearr_22888_22915[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (3))){
var inst_22877 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22879__$1,inst_22877);
} else {
if((state_val_22880 === (12))){
var state_22879__$1 = state_22879;
var statearr_22889_22916 = state_22879__$1;
(statearr_22889_22916[(2)] = null);

(statearr_22889_22916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (2))){
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22879__$1,(4),ch);
} else {
if((state_val_22880 === (11))){
var inst_22856 = (state_22879[(7)]);
var inst_22866 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22879__$1,(8),inst_22866,inst_22856);
} else {
if((state_val_22880 === (9))){
var state_22879__$1 = state_22879;
var statearr_22890_22917 = state_22879__$1;
(statearr_22890_22917[(2)] = tc);

(statearr_22890_22917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (5))){
var inst_22859 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22860 = cljs.core.async.close_BANG_.call(null,fc);
var state_22879__$1 = (function (){var statearr_22891 = state_22879;
(statearr_22891[(8)] = inst_22859);

return statearr_22891;
})();
var statearr_22892_22918 = state_22879__$1;
(statearr_22892_22918[(2)] = inst_22860);

(statearr_22892_22918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (14))){
var inst_22873 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22893_22919 = state_22879__$1;
(statearr_22893_22919[(2)] = inst_22873);

(statearr_22893_22919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (10))){
var state_22879__$1 = state_22879;
var statearr_22894_22920 = state_22879__$1;
(statearr_22894_22920[(2)] = fc);

(statearr_22894_22920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (8))){
var inst_22868 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
if(cljs.core.truth_(inst_22868)){
var statearr_22895_22921 = state_22879__$1;
(statearr_22895_22921[(1)] = (12));

} else {
var statearr_22896_22922 = state_22879__$1;
(statearr_22896_22922[(1)] = (13));

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
});})(c__22230__auto___22908,tc,fc))
;
return ((function (switch__22118__auto__,c__22230__auto___22908,tc,fc){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_22900 = [null,null,null,null,null,null,null,null,null];
(statearr_22900[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_22900[(1)] = (1));

return statearr_22900;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_22879){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e22901){if((e22901 instanceof Object)){
var ex__22122__auto__ = e22901;
var statearr_22902_22923 = state_22879;
(statearr_22902_22923[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22924 = state_22879;
state_22879 = G__22924;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_22879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_22879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___22908,tc,fc))
})();
var state__22232__auto__ = (function (){var statearr_22903 = f__22231__auto__.call(null);
(statearr_22903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___22908);

return statearr_22903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___22908,tc,fc))
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
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_22988){
var state_val_22989 = (state_22988[(1)]);
if((state_val_22989 === (7))){
var inst_22984 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22990_23011 = state_22988__$1;
(statearr_22990_23011[(2)] = inst_22984);

(statearr_22990_23011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (1))){
var inst_22968 = init;
var state_22988__$1 = (function (){var statearr_22991 = state_22988;
(statearr_22991[(7)] = inst_22968);

return statearr_22991;
})();
var statearr_22992_23012 = state_22988__$1;
(statearr_22992_23012[(2)] = null);

(statearr_22992_23012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (4))){
var inst_22971 = (state_22988[(8)]);
var inst_22971__$1 = (state_22988[(2)]);
var inst_22972 = (inst_22971__$1 == null);
var state_22988__$1 = (function (){var statearr_22993 = state_22988;
(statearr_22993[(8)] = inst_22971__$1);

return statearr_22993;
})();
if(cljs.core.truth_(inst_22972)){
var statearr_22994_23013 = state_22988__$1;
(statearr_22994_23013[(1)] = (5));

} else {
var statearr_22995_23014 = state_22988__$1;
(statearr_22995_23014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (6))){
var inst_22971 = (state_22988[(8)]);
var inst_22968 = (state_22988[(7)]);
var inst_22975 = (state_22988[(9)]);
var inst_22975__$1 = f.call(null,inst_22968,inst_22971);
var inst_22976 = cljs.core.reduced_QMARK_.call(null,inst_22975__$1);
var state_22988__$1 = (function (){var statearr_22996 = state_22988;
(statearr_22996[(9)] = inst_22975__$1);

return statearr_22996;
})();
if(inst_22976){
var statearr_22997_23015 = state_22988__$1;
(statearr_22997_23015[(1)] = (8));

} else {
var statearr_22998_23016 = state_22988__$1;
(statearr_22998_23016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (3))){
var inst_22986 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22988__$1,inst_22986);
} else {
if((state_val_22989 === (2))){
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22988__$1,(4),ch);
} else {
if((state_val_22989 === (9))){
var inst_22975 = (state_22988[(9)]);
var inst_22968 = inst_22975;
var state_22988__$1 = (function (){var statearr_22999 = state_22988;
(statearr_22999[(7)] = inst_22968);

return statearr_22999;
})();
var statearr_23000_23017 = state_22988__$1;
(statearr_23000_23017[(2)] = null);

(statearr_23000_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (5))){
var inst_22968 = (state_22988[(7)]);
var state_22988__$1 = state_22988;
var statearr_23001_23018 = state_22988__$1;
(statearr_23001_23018[(2)] = inst_22968);

(statearr_23001_23018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (10))){
var inst_22982 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23002_23019 = state_22988__$1;
(statearr_23002_23019[(2)] = inst_22982);

(statearr_23002_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (8))){
var inst_22975 = (state_22988[(9)]);
var inst_22978 = cljs.core.deref.call(null,inst_22975);
var state_22988__$1 = state_22988;
var statearr_23003_23020 = state_22988__$1;
(statearr_23003_23020[(2)] = inst_22978);

(statearr_23003_23020[(1)] = (10));


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
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22119__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22119__auto____0 = (function (){
var statearr_23007 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23007[(0)] = cljs$core$async$reduce_$_state_machine__22119__auto__);

(statearr_23007[(1)] = (1));

return statearr_23007;
});
var cljs$core$async$reduce_$_state_machine__22119__auto____1 = (function (state_22988){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_22988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e23008){if((e23008 instanceof Object)){
var ex__22122__auto__ = e23008;
var statearr_23009_23021 = state_22988;
(statearr_23009_23021[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23022 = state_22988;
state_22988 = G__23022;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22119__auto__ = function(state_22988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22119__auto____1.call(this,state_22988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22119__auto____0;
cljs$core$async$reduce_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22119__auto____1;
return cljs$core$async$reduce_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_23010 = f__22231__auto__.call(null);
(statearr_23010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_23010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
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
var args23023 = [];
var len__19380__auto___23075 = arguments.length;
var i__19381__auto___23076 = (0);
while(true){
if((i__19381__auto___23076 < len__19380__auto___23075)){
args23023.push((arguments[i__19381__auto___23076]));

var G__23077 = (i__19381__auto___23076 + (1));
i__19381__auto___23076 = G__23077;
continue;
} else {
}
break;
}

var G__23025 = args23023.length;
switch (G__23025) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23023.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_23050){
var state_val_23051 = (state_23050[(1)]);
if((state_val_23051 === (7))){
var inst_23032 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23052_23079 = state_23050__$1;
(statearr_23052_23079[(2)] = inst_23032);

(statearr_23052_23079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (1))){
var inst_23026 = cljs.core.seq.call(null,coll);
var inst_23027 = inst_23026;
var state_23050__$1 = (function (){var statearr_23053 = state_23050;
(statearr_23053[(7)] = inst_23027);

return statearr_23053;
})();
var statearr_23054_23080 = state_23050__$1;
(statearr_23054_23080[(2)] = null);

(statearr_23054_23080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (4))){
var inst_23027 = (state_23050[(7)]);
var inst_23030 = cljs.core.first.call(null,inst_23027);
var state_23050__$1 = state_23050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23050__$1,(7),ch,inst_23030);
} else {
if((state_val_23051 === (13))){
var inst_23044 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23055_23081 = state_23050__$1;
(statearr_23055_23081[(2)] = inst_23044);

(statearr_23055_23081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (6))){
var inst_23035 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
if(cljs.core.truth_(inst_23035)){
var statearr_23056_23082 = state_23050__$1;
(statearr_23056_23082[(1)] = (8));

} else {
var statearr_23057_23083 = state_23050__$1;
(statearr_23057_23083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (3))){
var inst_23048 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23050__$1,inst_23048);
} else {
if((state_val_23051 === (12))){
var state_23050__$1 = state_23050;
var statearr_23058_23084 = state_23050__$1;
(statearr_23058_23084[(2)] = null);

(statearr_23058_23084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (2))){
var inst_23027 = (state_23050[(7)]);
var state_23050__$1 = state_23050;
if(cljs.core.truth_(inst_23027)){
var statearr_23059_23085 = state_23050__$1;
(statearr_23059_23085[(1)] = (4));

} else {
var statearr_23060_23086 = state_23050__$1;
(statearr_23060_23086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (11))){
var inst_23041 = cljs.core.async.close_BANG_.call(null,ch);
var state_23050__$1 = state_23050;
var statearr_23061_23087 = state_23050__$1;
(statearr_23061_23087[(2)] = inst_23041);

(statearr_23061_23087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (9))){
var state_23050__$1 = state_23050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23062_23088 = state_23050__$1;
(statearr_23062_23088[(1)] = (11));

} else {
var statearr_23063_23089 = state_23050__$1;
(statearr_23063_23089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (5))){
var inst_23027 = (state_23050[(7)]);
var state_23050__$1 = state_23050;
var statearr_23064_23090 = state_23050__$1;
(statearr_23064_23090[(2)] = inst_23027);

(statearr_23064_23090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (10))){
var inst_23046 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23065_23091 = state_23050__$1;
(statearr_23065_23091[(2)] = inst_23046);

(statearr_23065_23091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (8))){
var inst_23027 = (state_23050[(7)]);
var inst_23037 = cljs.core.next.call(null,inst_23027);
var inst_23027__$1 = inst_23037;
var state_23050__$1 = (function (){var statearr_23066 = state_23050;
(statearr_23066[(7)] = inst_23027__$1);

return statearr_23066;
})();
var statearr_23067_23092 = state_23050__$1;
(statearr_23067_23092[(2)] = null);

(statearr_23067_23092[(1)] = (2));


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
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_23071 = [null,null,null,null,null,null,null,null];
(statearr_23071[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_23071[(1)] = (1));

return statearr_23071;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_23050){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_23050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e23072){if((e23072 instanceof Object)){
var ex__22122__auto__ = e23072;
var statearr_23073_23093 = state_23050;
(statearr_23073_23093[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23094 = state_23050;
state_23050 = G__23094;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_23050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_23050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_23074 = f__22231__auto__.call(null);
(statearr_23074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_23074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
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
var x__18977__auto__ = (((_ == null))?null:_);
var m__18978__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,_);
} else {
var m__18978__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,_);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18978__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m,ch);
} else {
var m__18978__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m,ch);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m);
} else {
var m__18978__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23316 = (function (mult,ch,cs,meta23317){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23317 = meta23317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23318,meta23317__$1){
var self__ = this;
var _23318__$1 = this;
return (new cljs.core.async.t_cljs$core$async23316(self__.mult,self__.ch,self__.cs,meta23317__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23318){
var self__ = this;
var _23318__$1 = this;
return self__.meta23317;
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23317","meta23317",-2131538305,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23316";

cljs.core.async.t_cljs$core$async23316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async23316");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23316 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23316(mult__$1,ch__$1,cs__$1,meta23317){
return (new cljs.core.async.t_cljs$core$async23316(mult__$1,ch__$1,cs__$1,meta23317));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23316(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22230__auto___23537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___23537,cs,m,dchan,dctr,done){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___23537,cs,m,dchan,dctr,done){
return (function (state_23449){
var state_val_23450 = (state_23449[(1)]);
if((state_val_23450 === (7))){
var inst_23445 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23451_23538 = state_23449__$1;
(statearr_23451_23538[(2)] = inst_23445);

(statearr_23451_23538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (20))){
var inst_23350 = (state_23449[(7)]);
var inst_23360 = cljs.core.first.call(null,inst_23350);
var inst_23361 = cljs.core.nth.call(null,inst_23360,(0),null);
var inst_23362 = cljs.core.nth.call(null,inst_23360,(1),null);
var state_23449__$1 = (function (){var statearr_23452 = state_23449;
(statearr_23452[(8)] = inst_23361);

return statearr_23452;
})();
if(cljs.core.truth_(inst_23362)){
var statearr_23453_23539 = state_23449__$1;
(statearr_23453_23539[(1)] = (22));

} else {
var statearr_23454_23540 = state_23449__$1;
(statearr_23454_23540[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (27))){
var inst_23392 = (state_23449[(9)]);
var inst_23321 = (state_23449[(10)]);
var inst_23397 = (state_23449[(11)]);
var inst_23390 = (state_23449[(12)]);
var inst_23397__$1 = cljs.core._nth.call(null,inst_23390,inst_23392);
var inst_23398 = cljs.core.async.put_BANG_.call(null,inst_23397__$1,inst_23321,done);
var state_23449__$1 = (function (){var statearr_23455 = state_23449;
(statearr_23455[(11)] = inst_23397__$1);

return statearr_23455;
})();
if(cljs.core.truth_(inst_23398)){
var statearr_23456_23541 = state_23449__$1;
(statearr_23456_23541[(1)] = (30));

} else {
var statearr_23457_23542 = state_23449__$1;
(statearr_23457_23542[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (1))){
var state_23449__$1 = state_23449;
var statearr_23458_23543 = state_23449__$1;
(statearr_23458_23543[(2)] = null);

(statearr_23458_23543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (24))){
var inst_23350 = (state_23449[(7)]);
var inst_23367 = (state_23449[(2)]);
var inst_23368 = cljs.core.next.call(null,inst_23350);
var inst_23330 = inst_23368;
var inst_23331 = null;
var inst_23332 = (0);
var inst_23333 = (0);
var state_23449__$1 = (function (){var statearr_23459 = state_23449;
(statearr_23459[(13)] = inst_23367);

(statearr_23459[(14)] = inst_23330);

(statearr_23459[(15)] = inst_23332);

(statearr_23459[(16)] = inst_23331);

(statearr_23459[(17)] = inst_23333);

return statearr_23459;
})();
var statearr_23460_23544 = state_23449__$1;
(statearr_23460_23544[(2)] = null);

(statearr_23460_23544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (39))){
var state_23449__$1 = state_23449;
var statearr_23464_23545 = state_23449__$1;
(statearr_23464_23545[(2)] = null);

(statearr_23464_23545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (4))){
var inst_23321 = (state_23449[(10)]);
var inst_23321__$1 = (state_23449[(2)]);
var inst_23322 = (inst_23321__$1 == null);
var state_23449__$1 = (function (){var statearr_23465 = state_23449;
(statearr_23465[(10)] = inst_23321__$1);

return statearr_23465;
})();
if(cljs.core.truth_(inst_23322)){
var statearr_23466_23546 = state_23449__$1;
(statearr_23466_23546[(1)] = (5));

} else {
var statearr_23467_23547 = state_23449__$1;
(statearr_23467_23547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (15))){
var inst_23330 = (state_23449[(14)]);
var inst_23332 = (state_23449[(15)]);
var inst_23331 = (state_23449[(16)]);
var inst_23333 = (state_23449[(17)]);
var inst_23346 = (state_23449[(2)]);
var inst_23347 = (inst_23333 + (1));
var tmp23461 = inst_23330;
var tmp23462 = inst_23332;
var tmp23463 = inst_23331;
var inst_23330__$1 = tmp23461;
var inst_23331__$1 = tmp23463;
var inst_23332__$1 = tmp23462;
var inst_23333__$1 = inst_23347;
var state_23449__$1 = (function (){var statearr_23468 = state_23449;
(statearr_23468[(14)] = inst_23330__$1);

(statearr_23468[(15)] = inst_23332__$1);

(statearr_23468[(16)] = inst_23331__$1);

(statearr_23468[(17)] = inst_23333__$1);

(statearr_23468[(18)] = inst_23346);

return statearr_23468;
})();
var statearr_23469_23548 = state_23449__$1;
(statearr_23469_23548[(2)] = null);

(statearr_23469_23548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (21))){
var inst_23371 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23473_23549 = state_23449__$1;
(statearr_23473_23549[(2)] = inst_23371);

(statearr_23473_23549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (31))){
var inst_23397 = (state_23449[(11)]);
var inst_23401 = done.call(null,null);
var inst_23402 = cljs.core.async.untap_STAR_.call(null,m,inst_23397);
var state_23449__$1 = (function (){var statearr_23474 = state_23449;
(statearr_23474[(19)] = inst_23401);

return statearr_23474;
})();
var statearr_23475_23550 = state_23449__$1;
(statearr_23475_23550[(2)] = inst_23402);

(statearr_23475_23550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (32))){
var inst_23392 = (state_23449[(9)]);
var inst_23389 = (state_23449[(20)]);
var inst_23391 = (state_23449[(21)]);
var inst_23390 = (state_23449[(12)]);
var inst_23404 = (state_23449[(2)]);
var inst_23405 = (inst_23392 + (1));
var tmp23470 = inst_23389;
var tmp23471 = inst_23391;
var tmp23472 = inst_23390;
var inst_23389__$1 = tmp23470;
var inst_23390__$1 = tmp23472;
var inst_23391__$1 = tmp23471;
var inst_23392__$1 = inst_23405;
var state_23449__$1 = (function (){var statearr_23476 = state_23449;
(statearr_23476[(9)] = inst_23392__$1);

(statearr_23476[(20)] = inst_23389__$1);

(statearr_23476[(21)] = inst_23391__$1);

(statearr_23476[(22)] = inst_23404);

(statearr_23476[(12)] = inst_23390__$1);

return statearr_23476;
})();
var statearr_23477_23551 = state_23449__$1;
(statearr_23477_23551[(2)] = null);

(statearr_23477_23551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (40))){
var inst_23417 = (state_23449[(23)]);
var inst_23421 = done.call(null,null);
var inst_23422 = cljs.core.async.untap_STAR_.call(null,m,inst_23417);
var state_23449__$1 = (function (){var statearr_23478 = state_23449;
(statearr_23478[(24)] = inst_23421);

return statearr_23478;
})();
var statearr_23479_23552 = state_23449__$1;
(statearr_23479_23552[(2)] = inst_23422);

(statearr_23479_23552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (33))){
var inst_23408 = (state_23449[(25)]);
var inst_23410 = cljs.core.chunked_seq_QMARK_.call(null,inst_23408);
var state_23449__$1 = state_23449;
if(inst_23410){
var statearr_23480_23553 = state_23449__$1;
(statearr_23480_23553[(1)] = (36));

} else {
var statearr_23481_23554 = state_23449__$1;
(statearr_23481_23554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (13))){
var inst_23340 = (state_23449[(26)]);
var inst_23343 = cljs.core.async.close_BANG_.call(null,inst_23340);
var state_23449__$1 = state_23449;
var statearr_23482_23555 = state_23449__$1;
(statearr_23482_23555[(2)] = inst_23343);

(statearr_23482_23555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (22))){
var inst_23361 = (state_23449[(8)]);
var inst_23364 = cljs.core.async.close_BANG_.call(null,inst_23361);
var state_23449__$1 = state_23449;
var statearr_23483_23556 = state_23449__$1;
(statearr_23483_23556[(2)] = inst_23364);

(statearr_23483_23556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (36))){
var inst_23408 = (state_23449[(25)]);
var inst_23412 = cljs.core.chunk_first.call(null,inst_23408);
var inst_23413 = cljs.core.chunk_rest.call(null,inst_23408);
var inst_23414 = cljs.core.count.call(null,inst_23412);
var inst_23389 = inst_23413;
var inst_23390 = inst_23412;
var inst_23391 = inst_23414;
var inst_23392 = (0);
var state_23449__$1 = (function (){var statearr_23484 = state_23449;
(statearr_23484[(9)] = inst_23392);

(statearr_23484[(20)] = inst_23389);

(statearr_23484[(21)] = inst_23391);

(statearr_23484[(12)] = inst_23390);

return statearr_23484;
})();
var statearr_23485_23557 = state_23449__$1;
(statearr_23485_23557[(2)] = null);

(statearr_23485_23557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (41))){
var inst_23408 = (state_23449[(25)]);
var inst_23424 = (state_23449[(2)]);
var inst_23425 = cljs.core.next.call(null,inst_23408);
var inst_23389 = inst_23425;
var inst_23390 = null;
var inst_23391 = (0);
var inst_23392 = (0);
var state_23449__$1 = (function (){var statearr_23486 = state_23449;
(statearr_23486[(9)] = inst_23392);

(statearr_23486[(27)] = inst_23424);

(statearr_23486[(20)] = inst_23389);

(statearr_23486[(21)] = inst_23391);

(statearr_23486[(12)] = inst_23390);

return statearr_23486;
})();
var statearr_23487_23558 = state_23449__$1;
(statearr_23487_23558[(2)] = null);

(statearr_23487_23558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (43))){
var state_23449__$1 = state_23449;
var statearr_23488_23559 = state_23449__$1;
(statearr_23488_23559[(2)] = null);

(statearr_23488_23559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (29))){
var inst_23433 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23489_23560 = state_23449__$1;
(statearr_23489_23560[(2)] = inst_23433);

(statearr_23489_23560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (44))){
var inst_23442 = (state_23449[(2)]);
var state_23449__$1 = (function (){var statearr_23490 = state_23449;
(statearr_23490[(28)] = inst_23442);

return statearr_23490;
})();
var statearr_23491_23561 = state_23449__$1;
(statearr_23491_23561[(2)] = null);

(statearr_23491_23561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (6))){
var inst_23381 = (state_23449[(29)]);
var inst_23380 = cljs.core.deref.call(null,cs);
var inst_23381__$1 = cljs.core.keys.call(null,inst_23380);
var inst_23382 = cljs.core.count.call(null,inst_23381__$1);
var inst_23383 = cljs.core.reset_BANG_.call(null,dctr,inst_23382);
var inst_23388 = cljs.core.seq.call(null,inst_23381__$1);
var inst_23389 = inst_23388;
var inst_23390 = null;
var inst_23391 = (0);
var inst_23392 = (0);
var state_23449__$1 = (function (){var statearr_23492 = state_23449;
(statearr_23492[(9)] = inst_23392);

(statearr_23492[(20)] = inst_23389);

(statearr_23492[(29)] = inst_23381__$1);

(statearr_23492[(21)] = inst_23391);

(statearr_23492[(30)] = inst_23383);

(statearr_23492[(12)] = inst_23390);

return statearr_23492;
})();
var statearr_23493_23562 = state_23449__$1;
(statearr_23493_23562[(2)] = null);

(statearr_23493_23562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (28))){
var inst_23408 = (state_23449[(25)]);
var inst_23389 = (state_23449[(20)]);
var inst_23408__$1 = cljs.core.seq.call(null,inst_23389);
var state_23449__$1 = (function (){var statearr_23494 = state_23449;
(statearr_23494[(25)] = inst_23408__$1);

return statearr_23494;
})();
if(inst_23408__$1){
var statearr_23495_23563 = state_23449__$1;
(statearr_23495_23563[(1)] = (33));

} else {
var statearr_23496_23564 = state_23449__$1;
(statearr_23496_23564[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (25))){
var inst_23392 = (state_23449[(9)]);
var inst_23391 = (state_23449[(21)]);
var inst_23394 = (inst_23392 < inst_23391);
var inst_23395 = inst_23394;
var state_23449__$1 = state_23449;
if(cljs.core.truth_(inst_23395)){
var statearr_23497_23565 = state_23449__$1;
(statearr_23497_23565[(1)] = (27));

} else {
var statearr_23498_23566 = state_23449__$1;
(statearr_23498_23566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (34))){
var state_23449__$1 = state_23449;
var statearr_23499_23567 = state_23449__$1;
(statearr_23499_23567[(2)] = null);

(statearr_23499_23567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (17))){
var state_23449__$1 = state_23449;
var statearr_23500_23568 = state_23449__$1;
(statearr_23500_23568[(2)] = null);

(statearr_23500_23568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (3))){
var inst_23447 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23449__$1,inst_23447);
} else {
if((state_val_23450 === (12))){
var inst_23376 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23501_23569 = state_23449__$1;
(statearr_23501_23569[(2)] = inst_23376);

(statearr_23501_23569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (2))){
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(4),ch);
} else {
if((state_val_23450 === (23))){
var state_23449__$1 = state_23449;
var statearr_23502_23570 = state_23449__$1;
(statearr_23502_23570[(2)] = null);

(statearr_23502_23570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (35))){
var inst_23431 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23503_23571 = state_23449__$1;
(statearr_23503_23571[(2)] = inst_23431);

(statearr_23503_23571[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (19))){
var inst_23350 = (state_23449[(7)]);
var inst_23354 = cljs.core.chunk_first.call(null,inst_23350);
var inst_23355 = cljs.core.chunk_rest.call(null,inst_23350);
var inst_23356 = cljs.core.count.call(null,inst_23354);
var inst_23330 = inst_23355;
var inst_23331 = inst_23354;
var inst_23332 = inst_23356;
var inst_23333 = (0);
var state_23449__$1 = (function (){var statearr_23504 = state_23449;
(statearr_23504[(14)] = inst_23330);

(statearr_23504[(15)] = inst_23332);

(statearr_23504[(16)] = inst_23331);

(statearr_23504[(17)] = inst_23333);

return statearr_23504;
})();
var statearr_23505_23572 = state_23449__$1;
(statearr_23505_23572[(2)] = null);

(statearr_23505_23572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (11))){
var inst_23330 = (state_23449[(14)]);
var inst_23350 = (state_23449[(7)]);
var inst_23350__$1 = cljs.core.seq.call(null,inst_23330);
var state_23449__$1 = (function (){var statearr_23506 = state_23449;
(statearr_23506[(7)] = inst_23350__$1);

return statearr_23506;
})();
if(inst_23350__$1){
var statearr_23507_23573 = state_23449__$1;
(statearr_23507_23573[(1)] = (16));

} else {
var statearr_23508_23574 = state_23449__$1;
(statearr_23508_23574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (9))){
var inst_23378 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23509_23575 = state_23449__$1;
(statearr_23509_23575[(2)] = inst_23378);

(statearr_23509_23575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (5))){
var inst_23328 = cljs.core.deref.call(null,cs);
var inst_23329 = cljs.core.seq.call(null,inst_23328);
var inst_23330 = inst_23329;
var inst_23331 = null;
var inst_23332 = (0);
var inst_23333 = (0);
var state_23449__$1 = (function (){var statearr_23510 = state_23449;
(statearr_23510[(14)] = inst_23330);

(statearr_23510[(15)] = inst_23332);

(statearr_23510[(16)] = inst_23331);

(statearr_23510[(17)] = inst_23333);

return statearr_23510;
})();
var statearr_23511_23576 = state_23449__$1;
(statearr_23511_23576[(2)] = null);

(statearr_23511_23576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (14))){
var state_23449__$1 = state_23449;
var statearr_23512_23577 = state_23449__$1;
(statearr_23512_23577[(2)] = null);

(statearr_23512_23577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (45))){
var inst_23439 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23513_23578 = state_23449__$1;
(statearr_23513_23578[(2)] = inst_23439);

(statearr_23513_23578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (26))){
var inst_23381 = (state_23449[(29)]);
var inst_23435 = (state_23449[(2)]);
var inst_23436 = cljs.core.seq.call(null,inst_23381);
var state_23449__$1 = (function (){var statearr_23514 = state_23449;
(statearr_23514[(31)] = inst_23435);

return statearr_23514;
})();
if(inst_23436){
var statearr_23515_23579 = state_23449__$1;
(statearr_23515_23579[(1)] = (42));

} else {
var statearr_23516_23580 = state_23449__$1;
(statearr_23516_23580[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (16))){
var inst_23350 = (state_23449[(7)]);
var inst_23352 = cljs.core.chunked_seq_QMARK_.call(null,inst_23350);
var state_23449__$1 = state_23449;
if(inst_23352){
var statearr_23517_23581 = state_23449__$1;
(statearr_23517_23581[(1)] = (19));

} else {
var statearr_23518_23582 = state_23449__$1;
(statearr_23518_23582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (38))){
var inst_23428 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23519_23583 = state_23449__$1;
(statearr_23519_23583[(2)] = inst_23428);

(statearr_23519_23583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (30))){
var state_23449__$1 = state_23449;
var statearr_23520_23584 = state_23449__$1;
(statearr_23520_23584[(2)] = null);

(statearr_23520_23584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (10))){
var inst_23331 = (state_23449[(16)]);
var inst_23333 = (state_23449[(17)]);
var inst_23339 = cljs.core._nth.call(null,inst_23331,inst_23333);
var inst_23340 = cljs.core.nth.call(null,inst_23339,(0),null);
var inst_23341 = cljs.core.nth.call(null,inst_23339,(1),null);
var state_23449__$1 = (function (){var statearr_23521 = state_23449;
(statearr_23521[(26)] = inst_23340);

return statearr_23521;
})();
if(cljs.core.truth_(inst_23341)){
var statearr_23522_23585 = state_23449__$1;
(statearr_23522_23585[(1)] = (13));

} else {
var statearr_23523_23586 = state_23449__$1;
(statearr_23523_23586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (18))){
var inst_23374 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23524_23587 = state_23449__$1;
(statearr_23524_23587[(2)] = inst_23374);

(statearr_23524_23587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (42))){
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(45),dchan);
} else {
if((state_val_23450 === (37))){
var inst_23408 = (state_23449[(25)]);
var inst_23321 = (state_23449[(10)]);
var inst_23417 = (state_23449[(23)]);
var inst_23417__$1 = cljs.core.first.call(null,inst_23408);
var inst_23418 = cljs.core.async.put_BANG_.call(null,inst_23417__$1,inst_23321,done);
var state_23449__$1 = (function (){var statearr_23525 = state_23449;
(statearr_23525[(23)] = inst_23417__$1);

return statearr_23525;
})();
if(cljs.core.truth_(inst_23418)){
var statearr_23526_23588 = state_23449__$1;
(statearr_23526_23588[(1)] = (39));

} else {
var statearr_23527_23589 = state_23449__$1;
(statearr_23527_23589[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (8))){
var inst_23332 = (state_23449[(15)]);
var inst_23333 = (state_23449[(17)]);
var inst_23335 = (inst_23333 < inst_23332);
var inst_23336 = inst_23335;
var state_23449__$1 = state_23449;
if(cljs.core.truth_(inst_23336)){
var statearr_23528_23590 = state_23449__$1;
(statearr_23528_23590[(1)] = (10));

} else {
var statearr_23529_23591 = state_23449__$1;
(statearr_23529_23591[(1)] = (11));

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
});})(c__22230__auto___23537,cs,m,dchan,dctr,done))
;
return ((function (switch__22118__auto__,c__22230__auto___23537,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22119__auto__ = null;
var cljs$core$async$mult_$_state_machine__22119__auto____0 = (function (){
var statearr_23533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23533[(0)] = cljs$core$async$mult_$_state_machine__22119__auto__);

(statearr_23533[(1)] = (1));

return statearr_23533;
});
var cljs$core$async$mult_$_state_machine__22119__auto____1 = (function (state_23449){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_23449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e23534){if((e23534 instanceof Object)){
var ex__22122__auto__ = e23534;
var statearr_23535_23592 = state_23449;
(statearr_23535_23592[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23593 = state_23449;
state_23449 = G__23593;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22119__auto__ = function(state_23449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22119__auto____1.call(this,state_23449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22119__auto____0;
cljs$core$async$mult_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22119__auto____1;
return cljs$core$async$mult_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___23537,cs,m,dchan,dctr,done))
})();
var state__22232__auto__ = (function (){var statearr_23536 = f__22231__auto__.call(null);
(statearr_23536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___23537);

return statearr_23536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___23537,cs,m,dchan,dctr,done))
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
var args23594 = [];
var len__19380__auto___23597 = arguments.length;
var i__19381__auto___23598 = (0);
while(true){
if((i__19381__auto___23598 < len__19380__auto___23597)){
args23594.push((arguments[i__19381__auto___23598]));

var G__23599 = (i__19381__auto___23598 + (1));
i__19381__auto___23598 = G__23599;
continue;
} else {
}
break;
}

var G__23596 = args23594.length;
switch (G__23596) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23594.length)].join('')));

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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m,ch);
} else {
var m__18978__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m,ch);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m,ch);
} else {
var m__18978__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m,ch);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m);
} else {
var m__18978__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m,state_map);
} else {
var m__18978__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m,state_map);
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
var x__18977__auto__ = (((m == null))?null:m);
var m__18978__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,m,mode);
} else {
var m__18978__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19387__auto__ = [];
var len__19380__auto___23611 = arguments.length;
var i__19381__auto___23612 = (0);
while(true){
if((i__19381__auto___23612 < len__19380__auto___23611)){
args__19387__auto__.push((arguments[i__19381__auto___23612]));

var G__23613 = (i__19381__auto___23612 + (1));
i__19381__auto___23612 = G__23613;
continue;
} else {
}
break;
}

var argseq__19388__auto__ = ((((3) < args__19387__auto__.length))?(new cljs.core.IndexedSeq(args__19387__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19388__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23605){
var map__23606 = p__23605;
var map__23606__$1 = ((((!((map__23606 == null)))?((((map__23606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23606):map__23606);
var opts = map__23606__$1;
var statearr_23608_23614 = state;
(statearr_23608_23614[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23606,map__23606__$1,opts){
return (function (val){
var statearr_23609_23615 = state;
(statearr_23609_23615[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23606,map__23606__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23610_23616 = state;
(statearr_23610_23616[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23601){
var G__23602 = cljs.core.first.call(null,seq23601);
var seq23601__$1 = cljs.core.next.call(null,seq23601);
var G__23603 = cljs.core.first.call(null,seq23601__$1);
var seq23601__$2 = cljs.core.next.call(null,seq23601__$1);
var G__23604 = cljs.core.first.call(null,seq23601__$2);
var seq23601__$3 = cljs.core.next.call(null,seq23601__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23602,G__23603,G__23604,seq23601__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23780 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23781){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23781 = meta23781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23782,meta23781__$1){
var self__ = this;
var _23782__$1 = this;
return (new cljs.core.async.t_cljs$core$async23780(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23781__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23782){
var self__ = this;
var _23782__$1 = this;
return self__.meta23781;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23781","meta23781",-1762753073,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23780";

cljs.core.async.t_cljs$core$async23780.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async23780");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23780 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23780(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23781){
return (new cljs.core.async.t_cljs$core$async23780(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23781));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23780(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22230__auto___23943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23880){
var state_val_23881 = (state_23880[(1)]);
if((state_val_23881 === (7))){
var inst_23798 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23882_23944 = state_23880__$1;
(statearr_23882_23944[(2)] = inst_23798);

(statearr_23882_23944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (20))){
var inst_23810 = (state_23880[(7)]);
var state_23880__$1 = state_23880;
var statearr_23883_23945 = state_23880__$1;
(statearr_23883_23945[(2)] = inst_23810);

(statearr_23883_23945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (27))){
var state_23880__$1 = state_23880;
var statearr_23884_23946 = state_23880__$1;
(statearr_23884_23946[(2)] = null);

(statearr_23884_23946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (1))){
var inst_23786 = (state_23880[(8)]);
var inst_23786__$1 = calc_state.call(null);
var inst_23788 = (inst_23786__$1 == null);
var inst_23789 = cljs.core.not.call(null,inst_23788);
var state_23880__$1 = (function (){var statearr_23885 = state_23880;
(statearr_23885[(8)] = inst_23786__$1);

return statearr_23885;
})();
if(inst_23789){
var statearr_23886_23947 = state_23880__$1;
(statearr_23886_23947[(1)] = (2));

} else {
var statearr_23887_23948 = state_23880__$1;
(statearr_23887_23948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (24))){
var inst_23840 = (state_23880[(9)]);
var inst_23833 = (state_23880[(10)]);
var inst_23854 = (state_23880[(11)]);
var inst_23854__$1 = inst_23833.call(null,inst_23840);
var state_23880__$1 = (function (){var statearr_23888 = state_23880;
(statearr_23888[(11)] = inst_23854__$1);

return statearr_23888;
})();
if(cljs.core.truth_(inst_23854__$1)){
var statearr_23889_23949 = state_23880__$1;
(statearr_23889_23949[(1)] = (29));

} else {
var statearr_23890_23950 = state_23880__$1;
(statearr_23890_23950[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (4))){
var inst_23801 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23801)){
var statearr_23891_23951 = state_23880__$1;
(statearr_23891_23951[(1)] = (8));

} else {
var statearr_23892_23952 = state_23880__$1;
(statearr_23892_23952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (15))){
var inst_23827 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23827)){
var statearr_23893_23953 = state_23880__$1;
(statearr_23893_23953[(1)] = (19));

} else {
var statearr_23894_23954 = state_23880__$1;
(statearr_23894_23954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (21))){
var inst_23832 = (state_23880[(12)]);
var inst_23832__$1 = (state_23880[(2)]);
var inst_23833 = cljs.core.get.call(null,inst_23832__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23834 = cljs.core.get.call(null,inst_23832__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23835 = cljs.core.get.call(null,inst_23832__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23880__$1 = (function (){var statearr_23895 = state_23880;
(statearr_23895[(12)] = inst_23832__$1);

(statearr_23895[(10)] = inst_23833);

(statearr_23895[(13)] = inst_23834);

return statearr_23895;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23880__$1,(22),inst_23835);
} else {
if((state_val_23881 === (31))){
var inst_23862 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23862)){
var statearr_23896_23955 = state_23880__$1;
(statearr_23896_23955[(1)] = (32));

} else {
var statearr_23897_23956 = state_23880__$1;
(statearr_23897_23956[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (32))){
var inst_23839 = (state_23880[(14)]);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23880__$1,(35),out,inst_23839);
} else {
if((state_val_23881 === (33))){
var inst_23832 = (state_23880[(12)]);
var inst_23810 = inst_23832;
var state_23880__$1 = (function (){var statearr_23898 = state_23880;
(statearr_23898[(7)] = inst_23810);

return statearr_23898;
})();
var statearr_23899_23957 = state_23880__$1;
(statearr_23899_23957[(2)] = null);

(statearr_23899_23957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (13))){
var inst_23810 = (state_23880[(7)]);
var inst_23817 = inst_23810.cljs$lang$protocol_mask$partition0$;
var inst_23818 = (inst_23817 & (64));
var inst_23819 = inst_23810.cljs$core$ISeq$;
var inst_23820 = (inst_23818) || (inst_23819);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23820)){
var statearr_23900_23958 = state_23880__$1;
(statearr_23900_23958[(1)] = (16));

} else {
var statearr_23901_23959 = state_23880__$1;
(statearr_23901_23959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (22))){
var inst_23839 = (state_23880[(14)]);
var inst_23840 = (state_23880[(9)]);
var inst_23838 = (state_23880[(2)]);
var inst_23839__$1 = cljs.core.nth.call(null,inst_23838,(0),null);
var inst_23840__$1 = cljs.core.nth.call(null,inst_23838,(1),null);
var inst_23841 = (inst_23839__$1 == null);
var inst_23842 = cljs.core._EQ_.call(null,inst_23840__$1,change);
var inst_23843 = (inst_23841) || (inst_23842);
var state_23880__$1 = (function (){var statearr_23902 = state_23880;
(statearr_23902[(14)] = inst_23839__$1);

(statearr_23902[(9)] = inst_23840__$1);

return statearr_23902;
})();
if(cljs.core.truth_(inst_23843)){
var statearr_23903_23960 = state_23880__$1;
(statearr_23903_23960[(1)] = (23));

} else {
var statearr_23904_23961 = state_23880__$1;
(statearr_23904_23961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (36))){
var inst_23832 = (state_23880[(12)]);
var inst_23810 = inst_23832;
var state_23880__$1 = (function (){var statearr_23905 = state_23880;
(statearr_23905[(7)] = inst_23810);

return statearr_23905;
})();
var statearr_23906_23962 = state_23880__$1;
(statearr_23906_23962[(2)] = null);

(statearr_23906_23962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (29))){
var inst_23854 = (state_23880[(11)]);
var state_23880__$1 = state_23880;
var statearr_23907_23963 = state_23880__$1;
(statearr_23907_23963[(2)] = inst_23854);

(statearr_23907_23963[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (6))){
var state_23880__$1 = state_23880;
var statearr_23908_23964 = state_23880__$1;
(statearr_23908_23964[(2)] = false);

(statearr_23908_23964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (28))){
var inst_23850 = (state_23880[(2)]);
var inst_23851 = calc_state.call(null);
var inst_23810 = inst_23851;
var state_23880__$1 = (function (){var statearr_23909 = state_23880;
(statearr_23909[(7)] = inst_23810);

(statearr_23909[(15)] = inst_23850);

return statearr_23909;
})();
var statearr_23910_23965 = state_23880__$1;
(statearr_23910_23965[(2)] = null);

(statearr_23910_23965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (25))){
var inst_23876 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23911_23966 = state_23880__$1;
(statearr_23911_23966[(2)] = inst_23876);

(statearr_23911_23966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (34))){
var inst_23874 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23912_23967 = state_23880__$1;
(statearr_23912_23967[(2)] = inst_23874);

(statearr_23912_23967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (17))){
var state_23880__$1 = state_23880;
var statearr_23913_23968 = state_23880__$1;
(statearr_23913_23968[(2)] = false);

(statearr_23913_23968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (3))){
var state_23880__$1 = state_23880;
var statearr_23914_23969 = state_23880__$1;
(statearr_23914_23969[(2)] = false);

(statearr_23914_23969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (12))){
var inst_23878 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23880__$1,inst_23878);
} else {
if((state_val_23881 === (2))){
var inst_23786 = (state_23880[(8)]);
var inst_23791 = inst_23786.cljs$lang$protocol_mask$partition0$;
var inst_23792 = (inst_23791 & (64));
var inst_23793 = inst_23786.cljs$core$ISeq$;
var inst_23794 = (inst_23792) || (inst_23793);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23794)){
var statearr_23915_23970 = state_23880__$1;
(statearr_23915_23970[(1)] = (5));

} else {
var statearr_23916_23971 = state_23880__$1;
(statearr_23916_23971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (23))){
var inst_23839 = (state_23880[(14)]);
var inst_23845 = (inst_23839 == null);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23845)){
var statearr_23917_23972 = state_23880__$1;
(statearr_23917_23972[(1)] = (26));

} else {
var statearr_23918_23973 = state_23880__$1;
(statearr_23918_23973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (35))){
var inst_23865 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23865)){
var statearr_23919_23974 = state_23880__$1;
(statearr_23919_23974[(1)] = (36));

} else {
var statearr_23920_23975 = state_23880__$1;
(statearr_23920_23975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (19))){
var inst_23810 = (state_23880[(7)]);
var inst_23829 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23810);
var state_23880__$1 = state_23880;
var statearr_23921_23976 = state_23880__$1;
(statearr_23921_23976[(2)] = inst_23829);

(statearr_23921_23976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (11))){
var inst_23810 = (state_23880[(7)]);
var inst_23814 = (inst_23810 == null);
var inst_23815 = cljs.core.not.call(null,inst_23814);
var state_23880__$1 = state_23880;
if(inst_23815){
var statearr_23922_23977 = state_23880__$1;
(statearr_23922_23977[(1)] = (13));

} else {
var statearr_23923_23978 = state_23880__$1;
(statearr_23923_23978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (9))){
var inst_23786 = (state_23880[(8)]);
var state_23880__$1 = state_23880;
var statearr_23924_23979 = state_23880__$1;
(statearr_23924_23979[(2)] = inst_23786);

(statearr_23924_23979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (5))){
var state_23880__$1 = state_23880;
var statearr_23925_23980 = state_23880__$1;
(statearr_23925_23980[(2)] = true);

(statearr_23925_23980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (14))){
var state_23880__$1 = state_23880;
var statearr_23926_23981 = state_23880__$1;
(statearr_23926_23981[(2)] = false);

(statearr_23926_23981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (26))){
var inst_23840 = (state_23880[(9)]);
var inst_23847 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23840);
var state_23880__$1 = state_23880;
var statearr_23927_23982 = state_23880__$1;
(statearr_23927_23982[(2)] = inst_23847);

(statearr_23927_23982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (16))){
var state_23880__$1 = state_23880;
var statearr_23928_23983 = state_23880__$1;
(statearr_23928_23983[(2)] = true);

(statearr_23928_23983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (38))){
var inst_23870 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23929_23984 = state_23880__$1;
(statearr_23929_23984[(2)] = inst_23870);

(statearr_23929_23984[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (30))){
var inst_23840 = (state_23880[(9)]);
var inst_23833 = (state_23880[(10)]);
var inst_23834 = (state_23880[(13)]);
var inst_23857 = cljs.core.empty_QMARK_.call(null,inst_23833);
var inst_23858 = inst_23834.call(null,inst_23840);
var inst_23859 = cljs.core.not.call(null,inst_23858);
var inst_23860 = (inst_23857) && (inst_23859);
var state_23880__$1 = state_23880;
var statearr_23930_23985 = state_23880__$1;
(statearr_23930_23985[(2)] = inst_23860);

(statearr_23930_23985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (10))){
var inst_23786 = (state_23880[(8)]);
var inst_23806 = (state_23880[(2)]);
var inst_23807 = cljs.core.get.call(null,inst_23806,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23808 = cljs.core.get.call(null,inst_23806,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23809 = cljs.core.get.call(null,inst_23806,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23810 = inst_23786;
var state_23880__$1 = (function (){var statearr_23931 = state_23880;
(statearr_23931[(16)] = inst_23807);

(statearr_23931[(17)] = inst_23808);

(statearr_23931[(7)] = inst_23810);

(statearr_23931[(18)] = inst_23809);

return statearr_23931;
})();
var statearr_23932_23986 = state_23880__$1;
(statearr_23932_23986[(2)] = null);

(statearr_23932_23986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (18))){
var inst_23824 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23933_23987 = state_23880__$1;
(statearr_23933_23987[(2)] = inst_23824);

(statearr_23933_23987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (37))){
var state_23880__$1 = state_23880;
var statearr_23934_23988 = state_23880__$1;
(statearr_23934_23988[(2)] = null);

(statearr_23934_23988[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (8))){
var inst_23786 = (state_23880[(8)]);
var inst_23803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23786);
var state_23880__$1 = state_23880;
var statearr_23935_23989 = state_23880__$1;
(statearr_23935_23989[(2)] = inst_23803);

(statearr_23935_23989[(1)] = (10));


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
});})(c__22230__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22118__auto__,c__22230__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22119__auto__ = null;
var cljs$core$async$mix_$_state_machine__22119__auto____0 = (function (){
var statearr_23939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23939[(0)] = cljs$core$async$mix_$_state_machine__22119__auto__);

(statearr_23939[(1)] = (1));

return statearr_23939;
});
var cljs$core$async$mix_$_state_machine__22119__auto____1 = (function (state_23880){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_23880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e23940){if((e23940 instanceof Object)){
var ex__22122__auto__ = e23940;
var statearr_23941_23990 = state_23880;
(statearr_23941_23990[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23991 = state_23880;
state_23880 = G__23991;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22119__auto__ = function(state_23880){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22119__auto____1.call(this,state_23880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22119__auto____0;
cljs$core$async$mix_$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22119__auto____1;
return cljs$core$async$mix_$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22232__auto__ = (function (){var statearr_23942 = f__22231__auto__.call(null);
(statearr_23942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___23943);

return statearr_23942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18977__auto__ = (((p == null))?null:p);
var m__18978__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18978__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__18977__auto__ = (((p == null))?null:p);
var m__18978__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,p,v,ch);
} else {
var m__18978__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23992 = [];
var len__19380__auto___23995 = arguments.length;
var i__19381__auto___23996 = (0);
while(true){
if((i__19381__auto___23996 < len__19380__auto___23995)){
args23992.push((arguments[i__19381__auto___23996]));

var G__23997 = (i__19381__auto___23996 + (1));
i__19381__auto___23996 = G__23997;
continue;
} else {
}
break;
}

var G__23994 = args23992.length;
switch (G__23994) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23992.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18977__auto__ = (((p == null))?null:p);
var m__18978__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,p);
} else {
var m__18978__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,p);
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
var x__18977__auto__ = (((p == null))?null:p);
var m__18978__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18977__auto__)]);
if(!((m__18978__auto__ == null))){
return m__18978__auto__.call(null,p,v);
} else {
var m__18978__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18978__auto____$1 == null))){
return m__18978__auto____$1.call(null,p,v);
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
var args24000 = [];
var len__19380__auto___24125 = arguments.length;
var i__19381__auto___24126 = (0);
while(true){
if((i__19381__auto___24126 < len__19380__auto___24125)){
args24000.push((arguments[i__19381__auto___24126]));

var G__24127 = (i__19381__auto___24126 + (1));
i__19381__auto___24126 = G__24127;
continue;
} else {
}
break;
}

var G__24002 = args24000.length;
switch (G__24002) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24000.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18322__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18322__auto__)){
return or__18322__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18322__auto__,mults){
return (function (p1__23999_SHARP_){
if(cljs.core.truth_(p1__23999_SHARP_.call(null,topic))){
return p1__23999_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23999_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18322__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24003 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24004){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24004 = meta24004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24005,meta24004__$1){
var self__ = this;
var _24005__$1 = this;
return (new cljs.core.async.t_cljs$core$async24003(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24004__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24005){
var self__ = this;
var _24005__$1 = this;
return self__.meta24004;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24004","meta24004",-1546124516,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24003";

cljs.core.async.t_cljs$core$async24003.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async24003");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24003 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24004){
return (new cljs.core.async.t_cljs$core$async24003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24004));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24003(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22230__auto___24129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24129,mults,ensure_mult,p){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24129,mults,ensure_mult,p){
return (function (state_24077){
var state_val_24078 = (state_24077[(1)]);
if((state_val_24078 === (7))){
var inst_24073 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24079_24130 = state_24077__$1;
(statearr_24079_24130[(2)] = inst_24073);

(statearr_24079_24130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (20))){
var state_24077__$1 = state_24077;
var statearr_24080_24131 = state_24077__$1;
(statearr_24080_24131[(2)] = null);

(statearr_24080_24131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (1))){
var state_24077__$1 = state_24077;
var statearr_24081_24132 = state_24077__$1;
(statearr_24081_24132[(2)] = null);

(statearr_24081_24132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (24))){
var inst_24056 = (state_24077[(7)]);
var inst_24065 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24056);
var state_24077__$1 = state_24077;
var statearr_24082_24133 = state_24077__$1;
(statearr_24082_24133[(2)] = inst_24065);

(statearr_24082_24133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (4))){
var inst_24008 = (state_24077[(8)]);
var inst_24008__$1 = (state_24077[(2)]);
var inst_24009 = (inst_24008__$1 == null);
var state_24077__$1 = (function (){var statearr_24083 = state_24077;
(statearr_24083[(8)] = inst_24008__$1);

return statearr_24083;
})();
if(cljs.core.truth_(inst_24009)){
var statearr_24084_24134 = state_24077__$1;
(statearr_24084_24134[(1)] = (5));

} else {
var statearr_24085_24135 = state_24077__$1;
(statearr_24085_24135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (15))){
var inst_24050 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24086_24136 = state_24077__$1;
(statearr_24086_24136[(2)] = inst_24050);

(statearr_24086_24136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (21))){
var inst_24070 = (state_24077[(2)]);
var state_24077__$1 = (function (){var statearr_24087 = state_24077;
(statearr_24087[(9)] = inst_24070);

return statearr_24087;
})();
var statearr_24088_24137 = state_24077__$1;
(statearr_24088_24137[(2)] = null);

(statearr_24088_24137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (13))){
var inst_24032 = (state_24077[(10)]);
var inst_24034 = cljs.core.chunked_seq_QMARK_.call(null,inst_24032);
var state_24077__$1 = state_24077;
if(inst_24034){
var statearr_24089_24138 = state_24077__$1;
(statearr_24089_24138[(1)] = (16));

} else {
var statearr_24090_24139 = state_24077__$1;
(statearr_24090_24139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (22))){
var inst_24062 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
if(cljs.core.truth_(inst_24062)){
var statearr_24091_24140 = state_24077__$1;
(statearr_24091_24140[(1)] = (23));

} else {
var statearr_24092_24141 = state_24077__$1;
(statearr_24092_24141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (6))){
var inst_24058 = (state_24077[(11)]);
var inst_24008 = (state_24077[(8)]);
var inst_24056 = (state_24077[(7)]);
var inst_24056__$1 = topic_fn.call(null,inst_24008);
var inst_24057 = cljs.core.deref.call(null,mults);
var inst_24058__$1 = cljs.core.get.call(null,inst_24057,inst_24056__$1);
var state_24077__$1 = (function (){var statearr_24093 = state_24077;
(statearr_24093[(11)] = inst_24058__$1);

(statearr_24093[(7)] = inst_24056__$1);

return statearr_24093;
})();
if(cljs.core.truth_(inst_24058__$1)){
var statearr_24094_24142 = state_24077__$1;
(statearr_24094_24142[(1)] = (19));

} else {
var statearr_24095_24143 = state_24077__$1;
(statearr_24095_24143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (25))){
var inst_24067 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24096_24144 = state_24077__$1;
(statearr_24096_24144[(2)] = inst_24067);

(statearr_24096_24144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (17))){
var inst_24032 = (state_24077[(10)]);
var inst_24041 = cljs.core.first.call(null,inst_24032);
var inst_24042 = cljs.core.async.muxch_STAR_.call(null,inst_24041);
var inst_24043 = cljs.core.async.close_BANG_.call(null,inst_24042);
var inst_24044 = cljs.core.next.call(null,inst_24032);
var inst_24018 = inst_24044;
var inst_24019 = null;
var inst_24020 = (0);
var inst_24021 = (0);
var state_24077__$1 = (function (){var statearr_24097 = state_24077;
(statearr_24097[(12)] = inst_24018);

(statearr_24097[(13)] = inst_24021);

(statearr_24097[(14)] = inst_24019);

(statearr_24097[(15)] = inst_24020);

(statearr_24097[(16)] = inst_24043);

return statearr_24097;
})();
var statearr_24098_24145 = state_24077__$1;
(statearr_24098_24145[(2)] = null);

(statearr_24098_24145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (3))){
var inst_24075 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24077__$1,inst_24075);
} else {
if((state_val_24078 === (12))){
var inst_24052 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24099_24146 = state_24077__$1;
(statearr_24099_24146[(2)] = inst_24052);

(statearr_24099_24146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (2))){
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24077__$1,(4),ch);
} else {
if((state_val_24078 === (23))){
var state_24077__$1 = state_24077;
var statearr_24100_24147 = state_24077__$1;
(statearr_24100_24147[(2)] = null);

(statearr_24100_24147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (19))){
var inst_24058 = (state_24077[(11)]);
var inst_24008 = (state_24077[(8)]);
var inst_24060 = cljs.core.async.muxch_STAR_.call(null,inst_24058);
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24077__$1,(22),inst_24060,inst_24008);
} else {
if((state_val_24078 === (11))){
var inst_24018 = (state_24077[(12)]);
var inst_24032 = (state_24077[(10)]);
var inst_24032__$1 = cljs.core.seq.call(null,inst_24018);
var state_24077__$1 = (function (){var statearr_24101 = state_24077;
(statearr_24101[(10)] = inst_24032__$1);

return statearr_24101;
})();
if(inst_24032__$1){
var statearr_24102_24148 = state_24077__$1;
(statearr_24102_24148[(1)] = (13));

} else {
var statearr_24103_24149 = state_24077__$1;
(statearr_24103_24149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (9))){
var inst_24054 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24104_24150 = state_24077__$1;
(statearr_24104_24150[(2)] = inst_24054);

(statearr_24104_24150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (5))){
var inst_24015 = cljs.core.deref.call(null,mults);
var inst_24016 = cljs.core.vals.call(null,inst_24015);
var inst_24017 = cljs.core.seq.call(null,inst_24016);
var inst_24018 = inst_24017;
var inst_24019 = null;
var inst_24020 = (0);
var inst_24021 = (0);
var state_24077__$1 = (function (){var statearr_24105 = state_24077;
(statearr_24105[(12)] = inst_24018);

(statearr_24105[(13)] = inst_24021);

(statearr_24105[(14)] = inst_24019);

(statearr_24105[(15)] = inst_24020);

return statearr_24105;
})();
var statearr_24106_24151 = state_24077__$1;
(statearr_24106_24151[(2)] = null);

(statearr_24106_24151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (14))){
var state_24077__$1 = state_24077;
var statearr_24110_24152 = state_24077__$1;
(statearr_24110_24152[(2)] = null);

(statearr_24110_24152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (16))){
var inst_24032 = (state_24077[(10)]);
var inst_24036 = cljs.core.chunk_first.call(null,inst_24032);
var inst_24037 = cljs.core.chunk_rest.call(null,inst_24032);
var inst_24038 = cljs.core.count.call(null,inst_24036);
var inst_24018 = inst_24037;
var inst_24019 = inst_24036;
var inst_24020 = inst_24038;
var inst_24021 = (0);
var state_24077__$1 = (function (){var statearr_24111 = state_24077;
(statearr_24111[(12)] = inst_24018);

(statearr_24111[(13)] = inst_24021);

(statearr_24111[(14)] = inst_24019);

(statearr_24111[(15)] = inst_24020);

return statearr_24111;
})();
var statearr_24112_24153 = state_24077__$1;
(statearr_24112_24153[(2)] = null);

(statearr_24112_24153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (10))){
var inst_24018 = (state_24077[(12)]);
var inst_24021 = (state_24077[(13)]);
var inst_24019 = (state_24077[(14)]);
var inst_24020 = (state_24077[(15)]);
var inst_24026 = cljs.core._nth.call(null,inst_24019,inst_24021);
var inst_24027 = cljs.core.async.muxch_STAR_.call(null,inst_24026);
var inst_24028 = cljs.core.async.close_BANG_.call(null,inst_24027);
var inst_24029 = (inst_24021 + (1));
var tmp24107 = inst_24018;
var tmp24108 = inst_24019;
var tmp24109 = inst_24020;
var inst_24018__$1 = tmp24107;
var inst_24019__$1 = tmp24108;
var inst_24020__$1 = tmp24109;
var inst_24021__$1 = inst_24029;
var state_24077__$1 = (function (){var statearr_24113 = state_24077;
(statearr_24113[(12)] = inst_24018__$1);

(statearr_24113[(13)] = inst_24021__$1);

(statearr_24113[(17)] = inst_24028);

(statearr_24113[(14)] = inst_24019__$1);

(statearr_24113[(15)] = inst_24020__$1);

return statearr_24113;
})();
var statearr_24114_24154 = state_24077__$1;
(statearr_24114_24154[(2)] = null);

(statearr_24114_24154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (18))){
var inst_24047 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24115_24155 = state_24077__$1;
(statearr_24115_24155[(2)] = inst_24047);

(statearr_24115_24155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (8))){
var inst_24021 = (state_24077[(13)]);
var inst_24020 = (state_24077[(15)]);
var inst_24023 = (inst_24021 < inst_24020);
var inst_24024 = inst_24023;
var state_24077__$1 = state_24077;
if(cljs.core.truth_(inst_24024)){
var statearr_24116_24156 = state_24077__$1;
(statearr_24116_24156[(1)] = (10));

} else {
var statearr_24117_24157 = state_24077__$1;
(statearr_24117_24157[(1)] = (11));

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
});})(c__22230__auto___24129,mults,ensure_mult,p))
;
return ((function (switch__22118__auto__,c__22230__auto___24129,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24121[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24121[(1)] = (1));

return statearr_24121;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24077){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24122){if((e24122 instanceof Object)){
var ex__22122__auto__ = e24122;
var statearr_24123_24158 = state_24077;
(statearr_24123_24158[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24159 = state_24077;
state_24077 = G__24159;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24129,mults,ensure_mult,p))
})();
var state__22232__auto__ = (function (){var statearr_24124 = f__22231__auto__.call(null);
(statearr_24124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24129);

return statearr_24124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24129,mults,ensure_mult,p))
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
var args24160 = [];
var len__19380__auto___24163 = arguments.length;
var i__19381__auto___24164 = (0);
while(true){
if((i__19381__auto___24164 < len__19380__auto___24163)){
args24160.push((arguments[i__19381__auto___24164]));

var G__24165 = (i__19381__auto___24164 + (1));
i__19381__auto___24164 = G__24165;
continue;
} else {
}
break;
}

var G__24162 = args24160.length;
switch (G__24162) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24160.length)].join('')));

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
var args24167 = [];
var len__19380__auto___24170 = arguments.length;
var i__19381__auto___24171 = (0);
while(true){
if((i__19381__auto___24171 < len__19380__auto___24170)){
args24167.push((arguments[i__19381__auto___24171]));

var G__24172 = (i__19381__auto___24171 + (1));
i__19381__auto___24171 = G__24172;
continue;
} else {
}
break;
}

var G__24169 = args24167.length;
switch (G__24169) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24167.length)].join('')));

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
var args24174 = [];
var len__19380__auto___24245 = arguments.length;
var i__19381__auto___24246 = (0);
while(true){
if((i__19381__auto___24246 < len__19380__auto___24245)){
args24174.push((arguments[i__19381__auto___24246]));

var G__24247 = (i__19381__auto___24246 + (1));
i__19381__auto___24246 = G__24247;
continue;
} else {
}
break;
}

var G__24176 = args24174.length;
switch (G__24176) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24174.length)].join('')));

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
var c__22230__auto___24249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24215){
var state_val_24216 = (state_24215[(1)]);
if((state_val_24216 === (7))){
var state_24215__$1 = state_24215;
var statearr_24217_24250 = state_24215__$1;
(statearr_24217_24250[(2)] = null);

(statearr_24217_24250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (1))){
var state_24215__$1 = state_24215;
var statearr_24218_24251 = state_24215__$1;
(statearr_24218_24251[(2)] = null);

(statearr_24218_24251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (4))){
var inst_24179 = (state_24215[(7)]);
var inst_24181 = (inst_24179 < cnt);
var state_24215__$1 = state_24215;
if(cljs.core.truth_(inst_24181)){
var statearr_24219_24252 = state_24215__$1;
(statearr_24219_24252[(1)] = (6));

} else {
var statearr_24220_24253 = state_24215__$1;
(statearr_24220_24253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (15))){
var inst_24211 = (state_24215[(2)]);
var state_24215__$1 = state_24215;
var statearr_24221_24254 = state_24215__$1;
(statearr_24221_24254[(2)] = inst_24211);

(statearr_24221_24254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (13))){
var inst_24204 = cljs.core.async.close_BANG_.call(null,out);
var state_24215__$1 = state_24215;
var statearr_24222_24255 = state_24215__$1;
(statearr_24222_24255[(2)] = inst_24204);

(statearr_24222_24255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (6))){
var state_24215__$1 = state_24215;
var statearr_24223_24256 = state_24215__$1;
(statearr_24223_24256[(2)] = null);

(statearr_24223_24256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (3))){
var inst_24213 = (state_24215[(2)]);
var state_24215__$1 = state_24215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24215__$1,inst_24213);
} else {
if((state_val_24216 === (12))){
var inst_24201 = (state_24215[(8)]);
var inst_24201__$1 = (state_24215[(2)]);
var inst_24202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24201__$1);
var state_24215__$1 = (function (){var statearr_24224 = state_24215;
(statearr_24224[(8)] = inst_24201__$1);

return statearr_24224;
})();
if(cljs.core.truth_(inst_24202)){
var statearr_24225_24257 = state_24215__$1;
(statearr_24225_24257[(1)] = (13));

} else {
var statearr_24226_24258 = state_24215__$1;
(statearr_24226_24258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (2))){
var inst_24178 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24179 = (0);
var state_24215__$1 = (function (){var statearr_24227 = state_24215;
(statearr_24227[(7)] = inst_24179);

(statearr_24227[(9)] = inst_24178);

return statearr_24227;
})();
var statearr_24228_24259 = state_24215__$1;
(statearr_24228_24259[(2)] = null);

(statearr_24228_24259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (11))){
var inst_24179 = (state_24215[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24215,(10),Object,null,(9));
var inst_24188 = chs__$1.call(null,inst_24179);
var inst_24189 = done.call(null,inst_24179);
var inst_24190 = cljs.core.async.take_BANG_.call(null,inst_24188,inst_24189);
var state_24215__$1 = state_24215;
var statearr_24229_24260 = state_24215__$1;
(statearr_24229_24260[(2)] = inst_24190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (9))){
var inst_24179 = (state_24215[(7)]);
var inst_24192 = (state_24215[(2)]);
var inst_24193 = (inst_24179 + (1));
var inst_24179__$1 = inst_24193;
var state_24215__$1 = (function (){var statearr_24230 = state_24215;
(statearr_24230[(7)] = inst_24179__$1);

(statearr_24230[(10)] = inst_24192);

return statearr_24230;
})();
var statearr_24231_24261 = state_24215__$1;
(statearr_24231_24261[(2)] = null);

(statearr_24231_24261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (5))){
var inst_24199 = (state_24215[(2)]);
var state_24215__$1 = (function (){var statearr_24232 = state_24215;
(statearr_24232[(11)] = inst_24199);

return statearr_24232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24215__$1,(12),dchan);
} else {
if((state_val_24216 === (14))){
var inst_24201 = (state_24215[(8)]);
var inst_24206 = cljs.core.apply.call(null,f,inst_24201);
var state_24215__$1 = state_24215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24215__$1,(16),out,inst_24206);
} else {
if((state_val_24216 === (16))){
var inst_24208 = (state_24215[(2)]);
var state_24215__$1 = (function (){var statearr_24233 = state_24215;
(statearr_24233[(12)] = inst_24208);

return statearr_24233;
})();
var statearr_24234_24262 = state_24215__$1;
(statearr_24234_24262[(2)] = null);

(statearr_24234_24262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (10))){
var inst_24183 = (state_24215[(2)]);
var inst_24184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24215__$1 = (function (){var statearr_24235 = state_24215;
(statearr_24235[(13)] = inst_24183);

return statearr_24235;
})();
var statearr_24236_24263 = state_24215__$1;
(statearr_24236_24263[(2)] = inst_24184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24216 === (8))){
var inst_24197 = (state_24215[(2)]);
var state_24215__$1 = state_24215;
var statearr_24237_24264 = state_24215__$1;
(statearr_24237_24264[(2)] = inst_24197);

(statearr_24237_24264[(1)] = (5));


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
});})(c__22230__auto___24249,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22118__auto__,c__22230__auto___24249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24241[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24241[(1)] = (1));

return statearr_24241;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24215){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24242){if((e24242 instanceof Object)){
var ex__22122__auto__ = e24242;
var statearr_24243_24265 = state_24215;
(statearr_24243_24265[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24266 = state_24215;
state_24215 = G__24266;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24249,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22232__auto__ = (function (){var statearr_24244 = f__22231__auto__.call(null);
(statearr_24244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24249);

return statearr_24244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24249,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24268 = [];
var len__19380__auto___24324 = arguments.length;
var i__19381__auto___24325 = (0);
while(true){
if((i__19381__auto___24325 < len__19380__auto___24324)){
args24268.push((arguments[i__19381__auto___24325]));

var G__24326 = (i__19381__auto___24325 + (1));
i__19381__auto___24325 = G__24326;
continue;
} else {
}
break;
}

var G__24270 = args24268.length;
switch (G__24270) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24268.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22230__auto___24328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24328,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24328,out){
return (function (state_24300){
var state_val_24301 = (state_24300[(1)]);
if((state_val_24301 === (7))){
var inst_24280 = (state_24300[(7)]);
var inst_24279 = (state_24300[(8)]);
var inst_24279__$1 = (state_24300[(2)]);
var inst_24280__$1 = cljs.core.nth.call(null,inst_24279__$1,(0),null);
var inst_24281 = cljs.core.nth.call(null,inst_24279__$1,(1),null);
var inst_24282 = (inst_24280__$1 == null);
var state_24300__$1 = (function (){var statearr_24302 = state_24300;
(statearr_24302[(7)] = inst_24280__$1);

(statearr_24302[(9)] = inst_24281);

(statearr_24302[(8)] = inst_24279__$1);

return statearr_24302;
})();
if(cljs.core.truth_(inst_24282)){
var statearr_24303_24329 = state_24300__$1;
(statearr_24303_24329[(1)] = (8));

} else {
var statearr_24304_24330 = state_24300__$1;
(statearr_24304_24330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (1))){
var inst_24271 = cljs.core.vec.call(null,chs);
var inst_24272 = inst_24271;
var state_24300__$1 = (function (){var statearr_24305 = state_24300;
(statearr_24305[(10)] = inst_24272);

return statearr_24305;
})();
var statearr_24306_24331 = state_24300__$1;
(statearr_24306_24331[(2)] = null);

(statearr_24306_24331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (4))){
var inst_24272 = (state_24300[(10)]);
var state_24300__$1 = state_24300;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24300__$1,(7),inst_24272);
} else {
if((state_val_24301 === (6))){
var inst_24296 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24307_24332 = state_24300__$1;
(statearr_24307_24332[(2)] = inst_24296);

(statearr_24307_24332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (3))){
var inst_24298 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24300__$1,inst_24298);
} else {
if((state_val_24301 === (2))){
var inst_24272 = (state_24300[(10)]);
var inst_24274 = cljs.core.count.call(null,inst_24272);
var inst_24275 = (inst_24274 > (0));
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24275)){
var statearr_24309_24333 = state_24300__$1;
(statearr_24309_24333[(1)] = (4));

} else {
var statearr_24310_24334 = state_24300__$1;
(statearr_24310_24334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (11))){
var inst_24272 = (state_24300[(10)]);
var inst_24289 = (state_24300[(2)]);
var tmp24308 = inst_24272;
var inst_24272__$1 = tmp24308;
var state_24300__$1 = (function (){var statearr_24311 = state_24300;
(statearr_24311[(11)] = inst_24289);

(statearr_24311[(10)] = inst_24272__$1);

return statearr_24311;
})();
var statearr_24312_24335 = state_24300__$1;
(statearr_24312_24335[(2)] = null);

(statearr_24312_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (9))){
var inst_24280 = (state_24300[(7)]);
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24300__$1,(11),out,inst_24280);
} else {
if((state_val_24301 === (5))){
var inst_24294 = cljs.core.async.close_BANG_.call(null,out);
var state_24300__$1 = state_24300;
var statearr_24313_24336 = state_24300__$1;
(statearr_24313_24336[(2)] = inst_24294);

(statearr_24313_24336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (10))){
var inst_24292 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24314_24337 = state_24300__$1;
(statearr_24314_24337[(2)] = inst_24292);

(statearr_24314_24337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (8))){
var inst_24280 = (state_24300[(7)]);
var inst_24272 = (state_24300[(10)]);
var inst_24281 = (state_24300[(9)]);
var inst_24279 = (state_24300[(8)]);
var inst_24284 = (function (){var cs = inst_24272;
var vec__24277 = inst_24279;
var v = inst_24280;
var c = inst_24281;
return ((function (cs,vec__24277,v,c,inst_24280,inst_24272,inst_24281,inst_24279,state_val_24301,c__22230__auto___24328,out){
return (function (p1__24267_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24267_SHARP_);
});
;})(cs,vec__24277,v,c,inst_24280,inst_24272,inst_24281,inst_24279,state_val_24301,c__22230__auto___24328,out))
})();
var inst_24285 = cljs.core.filterv.call(null,inst_24284,inst_24272);
var inst_24272__$1 = inst_24285;
var state_24300__$1 = (function (){var statearr_24315 = state_24300;
(statearr_24315[(10)] = inst_24272__$1);

return statearr_24315;
})();
var statearr_24316_24338 = state_24300__$1;
(statearr_24316_24338[(2)] = null);

(statearr_24316_24338[(1)] = (2));


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
});})(c__22230__auto___24328,out))
;
return ((function (switch__22118__auto__,c__22230__auto___24328,out){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24320[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24320[(1)] = (1));

return statearr_24320;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24300){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24321){if((e24321 instanceof Object)){
var ex__22122__auto__ = e24321;
var statearr_24322_24339 = state_24300;
(statearr_24322_24339[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24340 = state_24300;
state_24300 = G__24340;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24328,out))
})();
var state__22232__auto__ = (function (){var statearr_24323 = f__22231__auto__.call(null);
(statearr_24323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24328);

return statearr_24323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24328,out))
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
var args24341 = [];
var len__19380__auto___24390 = arguments.length;
var i__19381__auto___24391 = (0);
while(true){
if((i__19381__auto___24391 < len__19380__auto___24390)){
args24341.push((arguments[i__19381__auto___24391]));

var G__24392 = (i__19381__auto___24391 + (1));
i__19381__auto___24391 = G__24392;
continue;
} else {
}
break;
}

var G__24343 = args24341.length;
switch (G__24343) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24341.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22230__auto___24394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24394,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24394,out){
return (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (7))){
var inst_24349 = (state_24367[(7)]);
var inst_24349__$1 = (state_24367[(2)]);
var inst_24350 = (inst_24349__$1 == null);
var inst_24351 = cljs.core.not.call(null,inst_24350);
var state_24367__$1 = (function (){var statearr_24369 = state_24367;
(statearr_24369[(7)] = inst_24349__$1);

return statearr_24369;
})();
if(inst_24351){
var statearr_24370_24395 = state_24367__$1;
(statearr_24370_24395[(1)] = (8));

} else {
var statearr_24371_24396 = state_24367__$1;
(statearr_24371_24396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (1))){
var inst_24344 = (0);
var state_24367__$1 = (function (){var statearr_24372 = state_24367;
(statearr_24372[(8)] = inst_24344);

return statearr_24372;
})();
var statearr_24373_24397 = state_24367__$1;
(statearr_24373_24397[(2)] = null);

(statearr_24373_24397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (4))){
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24367__$1,(7),ch);
} else {
if((state_val_24368 === (6))){
var inst_24362 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24374_24398 = state_24367__$1;
(statearr_24374_24398[(2)] = inst_24362);

(statearr_24374_24398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (3))){
var inst_24364 = (state_24367[(2)]);
var inst_24365 = cljs.core.async.close_BANG_.call(null,out);
var state_24367__$1 = (function (){var statearr_24375 = state_24367;
(statearr_24375[(9)] = inst_24364);

return statearr_24375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else {
if((state_val_24368 === (2))){
var inst_24344 = (state_24367[(8)]);
var inst_24346 = (inst_24344 < n);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24346)){
var statearr_24376_24399 = state_24367__$1;
(statearr_24376_24399[(1)] = (4));

} else {
var statearr_24377_24400 = state_24367__$1;
(statearr_24377_24400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (11))){
var inst_24344 = (state_24367[(8)]);
var inst_24354 = (state_24367[(2)]);
var inst_24355 = (inst_24344 + (1));
var inst_24344__$1 = inst_24355;
var state_24367__$1 = (function (){var statearr_24378 = state_24367;
(statearr_24378[(8)] = inst_24344__$1);

(statearr_24378[(10)] = inst_24354);

return statearr_24378;
})();
var statearr_24379_24401 = state_24367__$1;
(statearr_24379_24401[(2)] = null);

(statearr_24379_24401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (9))){
var state_24367__$1 = state_24367;
var statearr_24380_24402 = state_24367__$1;
(statearr_24380_24402[(2)] = null);

(statearr_24380_24402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (5))){
var state_24367__$1 = state_24367;
var statearr_24381_24403 = state_24367__$1;
(statearr_24381_24403[(2)] = null);

(statearr_24381_24403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (10))){
var inst_24359 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24382_24404 = state_24367__$1;
(statearr_24382_24404[(2)] = inst_24359);

(statearr_24382_24404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (8))){
var inst_24349 = (state_24367[(7)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24367__$1,(11),out,inst_24349);
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
});})(c__22230__auto___24394,out))
;
return ((function (switch__22118__auto__,c__22230__auto___24394,out){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24386[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24386[(1)] = (1));

return statearr_24386;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24367){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24387){if((e24387 instanceof Object)){
var ex__22122__auto__ = e24387;
var statearr_24388_24405 = state_24367;
(statearr_24388_24405[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24406 = state_24367;
state_24367 = G__24406;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24394,out))
})();
var state__22232__auto__ = (function (){var statearr_24389 = f__22231__auto__.call(null);
(statearr_24389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24394);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24394,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24414 = (function (map_LT_,f,ch,meta24415){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24415 = meta24415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24416,meta24415__$1){
var self__ = this;
var _24416__$1 = this;
return (new cljs.core.async.t_cljs$core$async24414(self__.map_LT_,self__.f,self__.ch,meta24415__$1));
});

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24416){
var self__ = this;
var _24416__$1 = this;
return self__.meta24415;
});

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24417 = (function (map_LT_,f,ch,meta24415,_,fn1,meta24418){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24415 = meta24415;
this._ = _;
this.fn1 = fn1;
this.meta24418 = meta24418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24419,meta24418__$1){
var self__ = this;
var _24419__$1 = this;
return (new cljs.core.async.t_cljs$core$async24417(self__.map_LT_,self__.f,self__.ch,self__.meta24415,self__._,self__.fn1,meta24418__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24419){
var self__ = this;
var _24419__$1 = this;
return self__.meta24418;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24417.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24407_SHARP_){
return f1.call(null,(((p1__24407_SHARP_ == null))?null:self__.f.call(null,p1__24407_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24417.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24415","meta24415",65737761,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24414","cljs.core.async/t_cljs$core$async24414",-1784286779,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24418","meta24418",-303146834,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24417";

cljs.core.async.t_cljs$core$async24417.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async24417");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24417 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24417(map_LT___$1,f__$1,ch__$1,meta24415__$1,___$2,fn1__$1,meta24418){
return (new cljs.core.async.t_cljs$core$async24417(map_LT___$1,f__$1,ch__$1,meta24415__$1,___$2,fn1__$1,meta24418));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24417(self__.map_LT_,self__.f,self__.ch,self__.meta24415,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18310__auto__ = ret;
if(cljs.core.truth_(and__18310__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18310__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24415","meta24415",65737761,null)], null);
});

cljs.core.async.t_cljs$core$async24414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24414";

cljs.core.async.t_cljs$core$async24414.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async24414");
});

cljs.core.async.__GT_t_cljs$core$async24414 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24414(map_LT___$1,f__$1,ch__$1,meta24415){
return (new cljs.core.async.t_cljs$core$async24414(map_LT___$1,f__$1,ch__$1,meta24415));
});

}

return (new cljs.core.async.t_cljs$core$async24414(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24423 = (function (map_GT_,f,ch,meta24424){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24424 = meta24424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24425,meta24424__$1){
var self__ = this;
var _24425__$1 = this;
return (new cljs.core.async.t_cljs$core$async24423(self__.map_GT_,self__.f,self__.ch,meta24424__$1));
});

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24425){
var self__ = this;
var _24425__$1 = this;
return self__.meta24424;
});

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24424","meta24424",1847650562,null)], null);
});

cljs.core.async.t_cljs$core$async24423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24423";

cljs.core.async.t_cljs$core$async24423.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async24423");
});

cljs.core.async.__GT_t_cljs$core$async24423 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24423(map_GT___$1,f__$1,ch__$1,meta24424){
return (new cljs.core.async.t_cljs$core$async24423(map_GT___$1,f__$1,ch__$1,meta24424));
});

}

return (new cljs.core.async.t_cljs$core$async24423(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24429 = (function (filter_GT_,p,ch,meta24430){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24430 = meta24430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24431,meta24430__$1){
var self__ = this;
var _24431__$1 = this;
return (new cljs.core.async.t_cljs$core$async24429(self__.filter_GT_,self__.p,self__.ch,meta24430__$1));
});

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24431){
var self__ = this;
var _24431__$1 = this;
return self__.meta24430;
});

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24430","meta24430",-1517533548,null)], null);
});

cljs.core.async.t_cljs$core$async24429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24429";

cljs.core.async.t_cljs$core$async24429.cljs$lang$ctorPrWriter = (function (this__18920__auto__,writer__18921__auto__,opt__18922__auto__){
return cljs.core._write.call(null,writer__18921__auto__,"cljs.core.async/t_cljs$core$async24429");
});

cljs.core.async.__GT_t_cljs$core$async24429 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24429(filter_GT___$1,p__$1,ch__$1,meta24430){
return (new cljs.core.async.t_cljs$core$async24429(filter_GT___$1,p__$1,ch__$1,meta24430));
});

}

return (new cljs.core.async.t_cljs$core$async24429(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24432 = [];
var len__19380__auto___24476 = arguments.length;
var i__19381__auto___24477 = (0);
while(true){
if((i__19381__auto___24477 < len__19380__auto___24476)){
args24432.push((arguments[i__19381__auto___24477]));

var G__24478 = (i__19381__auto___24477 + (1));
i__19381__auto___24477 = G__24478;
continue;
} else {
}
break;
}

var G__24434 = args24432.length;
switch (G__24434) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24432.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22230__auto___24480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24480,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24480,out){
return (function (state_24455){
var state_val_24456 = (state_24455[(1)]);
if((state_val_24456 === (7))){
var inst_24451 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
var statearr_24457_24481 = state_24455__$1;
(statearr_24457_24481[(2)] = inst_24451);

(statearr_24457_24481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (1))){
var state_24455__$1 = state_24455;
var statearr_24458_24482 = state_24455__$1;
(statearr_24458_24482[(2)] = null);

(statearr_24458_24482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (4))){
var inst_24437 = (state_24455[(7)]);
var inst_24437__$1 = (state_24455[(2)]);
var inst_24438 = (inst_24437__$1 == null);
var state_24455__$1 = (function (){var statearr_24459 = state_24455;
(statearr_24459[(7)] = inst_24437__$1);

return statearr_24459;
})();
if(cljs.core.truth_(inst_24438)){
var statearr_24460_24483 = state_24455__$1;
(statearr_24460_24483[(1)] = (5));

} else {
var statearr_24461_24484 = state_24455__$1;
(statearr_24461_24484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (6))){
var inst_24437 = (state_24455[(7)]);
var inst_24442 = p.call(null,inst_24437);
var state_24455__$1 = state_24455;
if(cljs.core.truth_(inst_24442)){
var statearr_24462_24485 = state_24455__$1;
(statearr_24462_24485[(1)] = (8));

} else {
var statearr_24463_24486 = state_24455__$1;
(statearr_24463_24486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (3))){
var inst_24453 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24455__$1,inst_24453);
} else {
if((state_val_24456 === (2))){
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24455__$1,(4),ch);
} else {
if((state_val_24456 === (11))){
var inst_24445 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
var statearr_24464_24487 = state_24455__$1;
(statearr_24464_24487[(2)] = inst_24445);

(statearr_24464_24487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (9))){
var state_24455__$1 = state_24455;
var statearr_24465_24488 = state_24455__$1;
(statearr_24465_24488[(2)] = null);

(statearr_24465_24488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (5))){
var inst_24440 = cljs.core.async.close_BANG_.call(null,out);
var state_24455__$1 = state_24455;
var statearr_24466_24489 = state_24455__$1;
(statearr_24466_24489[(2)] = inst_24440);

(statearr_24466_24489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (10))){
var inst_24448 = (state_24455[(2)]);
var state_24455__$1 = (function (){var statearr_24467 = state_24455;
(statearr_24467[(8)] = inst_24448);

return statearr_24467;
})();
var statearr_24468_24490 = state_24455__$1;
(statearr_24468_24490[(2)] = null);

(statearr_24468_24490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (8))){
var inst_24437 = (state_24455[(7)]);
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24455__$1,(11),out,inst_24437);
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
});})(c__22230__auto___24480,out))
;
return ((function (switch__22118__auto__,c__22230__auto___24480,out){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24472 = [null,null,null,null,null,null,null,null,null];
(statearr_24472[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24472[(1)] = (1));

return statearr_24472;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24455){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24473){if((e24473 instanceof Object)){
var ex__22122__auto__ = e24473;
var statearr_24474_24491 = state_24455;
(statearr_24474_24491[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24492 = state_24455;
state_24455 = G__24492;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24480,out))
})();
var state__22232__auto__ = (function (){var statearr_24475 = f__22231__auto__.call(null);
(statearr_24475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24480);

return statearr_24475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24480,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24493 = [];
var len__19380__auto___24496 = arguments.length;
var i__19381__auto___24497 = (0);
while(true){
if((i__19381__auto___24497 < len__19380__auto___24496)){
args24493.push((arguments[i__19381__auto___24497]));

var G__24498 = (i__19381__auto___24497 + (1));
i__19381__auto___24497 = G__24498;
continue;
} else {
}
break;
}

var G__24495 = args24493.length;
switch (G__24495) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24493.length)].join('')));

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
var c__22230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto__){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto__){
return (function (state_24665){
var state_val_24666 = (state_24665[(1)]);
if((state_val_24666 === (7))){
var inst_24661 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24667_24708 = state_24665__$1;
(statearr_24667_24708[(2)] = inst_24661);

(statearr_24667_24708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (20))){
var inst_24631 = (state_24665[(7)]);
var inst_24642 = (state_24665[(2)]);
var inst_24643 = cljs.core.next.call(null,inst_24631);
var inst_24617 = inst_24643;
var inst_24618 = null;
var inst_24619 = (0);
var inst_24620 = (0);
var state_24665__$1 = (function (){var statearr_24668 = state_24665;
(statearr_24668[(8)] = inst_24619);

(statearr_24668[(9)] = inst_24618);

(statearr_24668[(10)] = inst_24617);

(statearr_24668[(11)] = inst_24642);

(statearr_24668[(12)] = inst_24620);

return statearr_24668;
})();
var statearr_24669_24709 = state_24665__$1;
(statearr_24669_24709[(2)] = null);

(statearr_24669_24709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (1))){
var state_24665__$1 = state_24665;
var statearr_24670_24710 = state_24665__$1;
(statearr_24670_24710[(2)] = null);

(statearr_24670_24710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (4))){
var inst_24606 = (state_24665[(13)]);
var inst_24606__$1 = (state_24665[(2)]);
var inst_24607 = (inst_24606__$1 == null);
var state_24665__$1 = (function (){var statearr_24671 = state_24665;
(statearr_24671[(13)] = inst_24606__$1);

return statearr_24671;
})();
if(cljs.core.truth_(inst_24607)){
var statearr_24672_24711 = state_24665__$1;
(statearr_24672_24711[(1)] = (5));

} else {
var statearr_24673_24712 = state_24665__$1;
(statearr_24673_24712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (15))){
var state_24665__$1 = state_24665;
var statearr_24677_24713 = state_24665__$1;
(statearr_24677_24713[(2)] = null);

(statearr_24677_24713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (21))){
var state_24665__$1 = state_24665;
var statearr_24678_24714 = state_24665__$1;
(statearr_24678_24714[(2)] = null);

(statearr_24678_24714[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (13))){
var inst_24619 = (state_24665[(8)]);
var inst_24618 = (state_24665[(9)]);
var inst_24617 = (state_24665[(10)]);
var inst_24620 = (state_24665[(12)]);
var inst_24627 = (state_24665[(2)]);
var inst_24628 = (inst_24620 + (1));
var tmp24674 = inst_24619;
var tmp24675 = inst_24618;
var tmp24676 = inst_24617;
var inst_24617__$1 = tmp24676;
var inst_24618__$1 = tmp24675;
var inst_24619__$1 = tmp24674;
var inst_24620__$1 = inst_24628;
var state_24665__$1 = (function (){var statearr_24679 = state_24665;
(statearr_24679[(8)] = inst_24619__$1);

(statearr_24679[(14)] = inst_24627);

(statearr_24679[(9)] = inst_24618__$1);

(statearr_24679[(10)] = inst_24617__$1);

(statearr_24679[(12)] = inst_24620__$1);

return statearr_24679;
})();
var statearr_24680_24715 = state_24665__$1;
(statearr_24680_24715[(2)] = null);

(statearr_24680_24715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (22))){
var state_24665__$1 = state_24665;
var statearr_24681_24716 = state_24665__$1;
(statearr_24681_24716[(2)] = null);

(statearr_24681_24716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (6))){
var inst_24606 = (state_24665[(13)]);
var inst_24615 = f.call(null,inst_24606);
var inst_24616 = cljs.core.seq.call(null,inst_24615);
var inst_24617 = inst_24616;
var inst_24618 = null;
var inst_24619 = (0);
var inst_24620 = (0);
var state_24665__$1 = (function (){var statearr_24682 = state_24665;
(statearr_24682[(8)] = inst_24619);

(statearr_24682[(9)] = inst_24618);

(statearr_24682[(10)] = inst_24617);

(statearr_24682[(12)] = inst_24620);

return statearr_24682;
})();
var statearr_24683_24717 = state_24665__$1;
(statearr_24683_24717[(2)] = null);

(statearr_24683_24717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (17))){
var inst_24631 = (state_24665[(7)]);
var inst_24635 = cljs.core.chunk_first.call(null,inst_24631);
var inst_24636 = cljs.core.chunk_rest.call(null,inst_24631);
var inst_24637 = cljs.core.count.call(null,inst_24635);
var inst_24617 = inst_24636;
var inst_24618 = inst_24635;
var inst_24619 = inst_24637;
var inst_24620 = (0);
var state_24665__$1 = (function (){var statearr_24684 = state_24665;
(statearr_24684[(8)] = inst_24619);

(statearr_24684[(9)] = inst_24618);

(statearr_24684[(10)] = inst_24617);

(statearr_24684[(12)] = inst_24620);

return statearr_24684;
})();
var statearr_24685_24718 = state_24665__$1;
(statearr_24685_24718[(2)] = null);

(statearr_24685_24718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (3))){
var inst_24663 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24665__$1,inst_24663);
} else {
if((state_val_24666 === (12))){
var inst_24651 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24686_24719 = state_24665__$1;
(statearr_24686_24719[(2)] = inst_24651);

(statearr_24686_24719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (2))){
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24665__$1,(4),in$);
} else {
if((state_val_24666 === (23))){
var inst_24659 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24687_24720 = state_24665__$1;
(statearr_24687_24720[(2)] = inst_24659);

(statearr_24687_24720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (19))){
var inst_24646 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24688_24721 = state_24665__$1;
(statearr_24688_24721[(2)] = inst_24646);

(statearr_24688_24721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (11))){
var inst_24617 = (state_24665[(10)]);
var inst_24631 = (state_24665[(7)]);
var inst_24631__$1 = cljs.core.seq.call(null,inst_24617);
var state_24665__$1 = (function (){var statearr_24689 = state_24665;
(statearr_24689[(7)] = inst_24631__$1);

return statearr_24689;
})();
if(inst_24631__$1){
var statearr_24690_24722 = state_24665__$1;
(statearr_24690_24722[(1)] = (14));

} else {
var statearr_24691_24723 = state_24665__$1;
(statearr_24691_24723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (9))){
var inst_24653 = (state_24665[(2)]);
var inst_24654 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24665__$1 = (function (){var statearr_24692 = state_24665;
(statearr_24692[(15)] = inst_24653);

return statearr_24692;
})();
if(cljs.core.truth_(inst_24654)){
var statearr_24693_24724 = state_24665__$1;
(statearr_24693_24724[(1)] = (21));

} else {
var statearr_24694_24725 = state_24665__$1;
(statearr_24694_24725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (5))){
var inst_24609 = cljs.core.async.close_BANG_.call(null,out);
var state_24665__$1 = state_24665;
var statearr_24695_24726 = state_24665__$1;
(statearr_24695_24726[(2)] = inst_24609);

(statearr_24695_24726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (14))){
var inst_24631 = (state_24665[(7)]);
var inst_24633 = cljs.core.chunked_seq_QMARK_.call(null,inst_24631);
var state_24665__$1 = state_24665;
if(inst_24633){
var statearr_24696_24727 = state_24665__$1;
(statearr_24696_24727[(1)] = (17));

} else {
var statearr_24697_24728 = state_24665__$1;
(statearr_24697_24728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (16))){
var inst_24649 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24698_24729 = state_24665__$1;
(statearr_24698_24729[(2)] = inst_24649);

(statearr_24698_24729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (10))){
var inst_24618 = (state_24665[(9)]);
var inst_24620 = (state_24665[(12)]);
var inst_24625 = cljs.core._nth.call(null,inst_24618,inst_24620);
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24665__$1,(13),out,inst_24625);
} else {
if((state_val_24666 === (18))){
var inst_24631 = (state_24665[(7)]);
var inst_24640 = cljs.core.first.call(null,inst_24631);
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24665__$1,(20),out,inst_24640);
} else {
if((state_val_24666 === (8))){
var inst_24619 = (state_24665[(8)]);
var inst_24620 = (state_24665[(12)]);
var inst_24622 = (inst_24620 < inst_24619);
var inst_24623 = inst_24622;
var state_24665__$1 = state_24665;
if(cljs.core.truth_(inst_24623)){
var statearr_24699_24730 = state_24665__$1;
(statearr_24699_24730[(1)] = (10));

} else {
var statearr_24700_24731 = state_24665__$1;
(statearr_24700_24731[(1)] = (11));

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
});})(c__22230__auto__))
;
return ((function (switch__22118__auto__,c__22230__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22119__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22119__auto____0 = (function (){
var statearr_24704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22119__auto__);

(statearr_24704[(1)] = (1));

return statearr_24704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22119__auto____1 = (function (state_24665){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24705){if((e24705 instanceof Object)){
var ex__22122__auto__ = e24705;
var statearr_24706_24732 = state_24665;
(statearr_24706_24732[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24733 = state_24665;
state_24665 = G__24733;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22119__auto__ = function(state_24665){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22119__auto____1.call(this,state_24665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22119__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22119__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto__))
})();
var state__22232__auto__ = (function (){var statearr_24707 = f__22231__auto__.call(null);
(statearr_24707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto__);

return statearr_24707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto__))
);

return c__22230__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24734 = [];
var len__19380__auto___24737 = arguments.length;
var i__19381__auto___24738 = (0);
while(true){
if((i__19381__auto___24738 < len__19380__auto___24737)){
args24734.push((arguments[i__19381__auto___24738]));

var G__24739 = (i__19381__auto___24738 + (1));
i__19381__auto___24738 = G__24739;
continue;
} else {
}
break;
}

var G__24736 = args24734.length;
switch (G__24736) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24734.length)].join('')));

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
var args24741 = [];
var len__19380__auto___24744 = arguments.length;
var i__19381__auto___24745 = (0);
while(true){
if((i__19381__auto___24745 < len__19380__auto___24744)){
args24741.push((arguments[i__19381__auto___24745]));

var G__24746 = (i__19381__auto___24745 + (1));
i__19381__auto___24745 = G__24746;
continue;
} else {
}
break;
}

var G__24743 = args24741.length;
switch (G__24743) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24741.length)].join('')));

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
var args24748 = [];
var len__19380__auto___24799 = arguments.length;
var i__19381__auto___24800 = (0);
while(true){
if((i__19381__auto___24800 < len__19380__auto___24799)){
args24748.push((arguments[i__19381__auto___24800]));

var G__24801 = (i__19381__auto___24800 + (1));
i__19381__auto___24800 = G__24801;
continue;
} else {
}
break;
}

var G__24750 = args24748.length;
switch (G__24750) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24748.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22230__auto___24803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24803,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24803,out){
return (function (state_24774){
var state_val_24775 = (state_24774[(1)]);
if((state_val_24775 === (7))){
var inst_24769 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24776_24804 = state_24774__$1;
(statearr_24776_24804[(2)] = inst_24769);

(statearr_24776_24804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (1))){
var inst_24751 = null;
var state_24774__$1 = (function (){var statearr_24777 = state_24774;
(statearr_24777[(7)] = inst_24751);

return statearr_24777;
})();
var statearr_24778_24805 = state_24774__$1;
(statearr_24778_24805[(2)] = null);

(statearr_24778_24805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (4))){
var inst_24754 = (state_24774[(8)]);
var inst_24754__$1 = (state_24774[(2)]);
var inst_24755 = (inst_24754__$1 == null);
var inst_24756 = cljs.core.not.call(null,inst_24755);
var state_24774__$1 = (function (){var statearr_24779 = state_24774;
(statearr_24779[(8)] = inst_24754__$1);

return statearr_24779;
})();
if(inst_24756){
var statearr_24780_24806 = state_24774__$1;
(statearr_24780_24806[(1)] = (5));

} else {
var statearr_24781_24807 = state_24774__$1;
(statearr_24781_24807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (6))){
var state_24774__$1 = state_24774;
var statearr_24782_24808 = state_24774__$1;
(statearr_24782_24808[(2)] = null);

(statearr_24782_24808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (3))){
var inst_24771 = (state_24774[(2)]);
var inst_24772 = cljs.core.async.close_BANG_.call(null,out);
var state_24774__$1 = (function (){var statearr_24783 = state_24774;
(statearr_24783[(9)] = inst_24771);

return statearr_24783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24774__$1,inst_24772);
} else {
if((state_val_24775 === (2))){
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24774__$1,(4),ch);
} else {
if((state_val_24775 === (11))){
var inst_24754 = (state_24774[(8)]);
var inst_24763 = (state_24774[(2)]);
var inst_24751 = inst_24754;
var state_24774__$1 = (function (){var statearr_24784 = state_24774;
(statearr_24784[(10)] = inst_24763);

(statearr_24784[(7)] = inst_24751);

return statearr_24784;
})();
var statearr_24785_24809 = state_24774__$1;
(statearr_24785_24809[(2)] = null);

(statearr_24785_24809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (9))){
var inst_24754 = (state_24774[(8)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24774__$1,(11),out,inst_24754);
} else {
if((state_val_24775 === (5))){
var inst_24751 = (state_24774[(7)]);
var inst_24754 = (state_24774[(8)]);
var inst_24758 = cljs.core._EQ_.call(null,inst_24754,inst_24751);
var state_24774__$1 = state_24774;
if(inst_24758){
var statearr_24787_24810 = state_24774__$1;
(statearr_24787_24810[(1)] = (8));

} else {
var statearr_24788_24811 = state_24774__$1;
(statearr_24788_24811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (10))){
var inst_24766 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24789_24812 = state_24774__$1;
(statearr_24789_24812[(2)] = inst_24766);

(statearr_24789_24812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (8))){
var inst_24751 = (state_24774[(7)]);
var tmp24786 = inst_24751;
var inst_24751__$1 = tmp24786;
var state_24774__$1 = (function (){var statearr_24790 = state_24774;
(statearr_24790[(7)] = inst_24751__$1);

return statearr_24790;
})();
var statearr_24791_24813 = state_24774__$1;
(statearr_24791_24813[(2)] = null);

(statearr_24791_24813[(1)] = (2));


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
});})(c__22230__auto___24803,out))
;
return ((function (switch__22118__auto__,c__22230__auto___24803,out){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24795[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24795[(1)] = (1));

return statearr_24795;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24774){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24796){if((e24796 instanceof Object)){
var ex__22122__auto__ = e24796;
var statearr_24797_24814 = state_24774;
(statearr_24797_24814[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24815 = state_24774;
state_24774 = G__24815;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24803,out))
})();
var state__22232__auto__ = (function (){var statearr_24798 = f__22231__auto__.call(null);
(statearr_24798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24803);

return statearr_24798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24803,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24816 = [];
var len__19380__auto___24886 = arguments.length;
var i__19381__auto___24887 = (0);
while(true){
if((i__19381__auto___24887 < len__19380__auto___24886)){
args24816.push((arguments[i__19381__auto___24887]));

var G__24888 = (i__19381__auto___24887 + (1));
i__19381__auto___24887 = G__24888;
continue;
} else {
}
break;
}

var G__24818 = args24816.length;
switch (G__24818) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24816.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22230__auto___24890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24890,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24890,out){
return (function (state_24856){
var state_val_24857 = (state_24856[(1)]);
if((state_val_24857 === (7))){
var inst_24852 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24858_24891 = state_24856__$1;
(statearr_24858_24891[(2)] = inst_24852);

(statearr_24858_24891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (1))){
var inst_24819 = (new Array(n));
var inst_24820 = inst_24819;
var inst_24821 = (0);
var state_24856__$1 = (function (){var statearr_24859 = state_24856;
(statearr_24859[(7)] = inst_24821);

(statearr_24859[(8)] = inst_24820);

return statearr_24859;
})();
var statearr_24860_24892 = state_24856__$1;
(statearr_24860_24892[(2)] = null);

(statearr_24860_24892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (4))){
var inst_24824 = (state_24856[(9)]);
var inst_24824__$1 = (state_24856[(2)]);
var inst_24825 = (inst_24824__$1 == null);
var inst_24826 = cljs.core.not.call(null,inst_24825);
var state_24856__$1 = (function (){var statearr_24861 = state_24856;
(statearr_24861[(9)] = inst_24824__$1);

return statearr_24861;
})();
if(inst_24826){
var statearr_24862_24893 = state_24856__$1;
(statearr_24862_24893[(1)] = (5));

} else {
var statearr_24863_24894 = state_24856__$1;
(statearr_24863_24894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (15))){
var inst_24846 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24864_24895 = state_24856__$1;
(statearr_24864_24895[(2)] = inst_24846);

(statearr_24864_24895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (13))){
var state_24856__$1 = state_24856;
var statearr_24865_24896 = state_24856__$1;
(statearr_24865_24896[(2)] = null);

(statearr_24865_24896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (6))){
var inst_24821 = (state_24856[(7)]);
var inst_24842 = (inst_24821 > (0));
var state_24856__$1 = state_24856;
if(cljs.core.truth_(inst_24842)){
var statearr_24866_24897 = state_24856__$1;
(statearr_24866_24897[(1)] = (12));

} else {
var statearr_24867_24898 = state_24856__$1;
(statearr_24867_24898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (3))){
var inst_24854 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24856__$1,inst_24854);
} else {
if((state_val_24857 === (12))){
var inst_24820 = (state_24856[(8)]);
var inst_24844 = cljs.core.vec.call(null,inst_24820);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24856__$1,(15),out,inst_24844);
} else {
if((state_val_24857 === (2))){
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24856__$1,(4),ch);
} else {
if((state_val_24857 === (11))){
var inst_24836 = (state_24856[(2)]);
var inst_24837 = (new Array(n));
var inst_24820 = inst_24837;
var inst_24821 = (0);
var state_24856__$1 = (function (){var statearr_24868 = state_24856;
(statearr_24868[(7)] = inst_24821);

(statearr_24868[(8)] = inst_24820);

(statearr_24868[(10)] = inst_24836);

return statearr_24868;
})();
var statearr_24869_24899 = state_24856__$1;
(statearr_24869_24899[(2)] = null);

(statearr_24869_24899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (9))){
var inst_24820 = (state_24856[(8)]);
var inst_24834 = cljs.core.vec.call(null,inst_24820);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24856__$1,(11),out,inst_24834);
} else {
if((state_val_24857 === (5))){
var inst_24829 = (state_24856[(11)]);
var inst_24821 = (state_24856[(7)]);
var inst_24824 = (state_24856[(9)]);
var inst_24820 = (state_24856[(8)]);
var inst_24828 = (inst_24820[inst_24821] = inst_24824);
var inst_24829__$1 = (inst_24821 + (1));
var inst_24830 = (inst_24829__$1 < n);
var state_24856__$1 = (function (){var statearr_24870 = state_24856;
(statearr_24870[(11)] = inst_24829__$1);

(statearr_24870[(12)] = inst_24828);

return statearr_24870;
})();
if(cljs.core.truth_(inst_24830)){
var statearr_24871_24900 = state_24856__$1;
(statearr_24871_24900[(1)] = (8));

} else {
var statearr_24872_24901 = state_24856__$1;
(statearr_24872_24901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (14))){
var inst_24849 = (state_24856[(2)]);
var inst_24850 = cljs.core.async.close_BANG_.call(null,out);
var state_24856__$1 = (function (){var statearr_24874 = state_24856;
(statearr_24874[(13)] = inst_24849);

return statearr_24874;
})();
var statearr_24875_24902 = state_24856__$1;
(statearr_24875_24902[(2)] = inst_24850);

(statearr_24875_24902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (10))){
var inst_24840 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24876_24903 = state_24856__$1;
(statearr_24876_24903[(2)] = inst_24840);

(statearr_24876_24903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (8))){
var inst_24829 = (state_24856[(11)]);
var inst_24820 = (state_24856[(8)]);
var tmp24873 = inst_24820;
var inst_24820__$1 = tmp24873;
var inst_24821 = inst_24829;
var state_24856__$1 = (function (){var statearr_24877 = state_24856;
(statearr_24877[(7)] = inst_24821);

(statearr_24877[(8)] = inst_24820__$1);

return statearr_24877;
})();
var statearr_24878_24904 = state_24856__$1;
(statearr_24878_24904[(2)] = null);

(statearr_24878_24904[(1)] = (2));


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
});})(c__22230__auto___24890,out))
;
return ((function (switch__22118__auto__,c__22230__auto___24890,out){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24882[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24882[(1)] = (1));

return statearr_24882;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24856){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24883){if((e24883 instanceof Object)){
var ex__22122__auto__ = e24883;
var statearr_24884_24905 = state_24856;
(statearr_24884_24905[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24906 = state_24856;
state_24856 = G__24906;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24890,out))
})();
var state__22232__auto__ = (function (){var statearr_24885 = f__22231__auto__.call(null);
(statearr_24885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24890);

return statearr_24885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24890,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24907 = [];
var len__19380__auto___24981 = arguments.length;
var i__19381__auto___24982 = (0);
while(true){
if((i__19381__auto___24982 < len__19380__auto___24981)){
args24907.push((arguments[i__19381__auto___24982]));

var G__24983 = (i__19381__auto___24982 + (1));
i__19381__auto___24982 = G__24983;
continue;
} else {
}
break;
}

var G__24909 = args24907.length;
switch (G__24909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24907.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22230__auto___24985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22230__auto___24985,out){
return (function (){
var f__22231__auto__ = (function (){var switch__22118__auto__ = ((function (c__22230__auto___24985,out){
return (function (state_24951){
var state_val_24952 = (state_24951[(1)]);
if((state_val_24952 === (7))){
var inst_24947 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
var statearr_24953_24986 = state_24951__$1;
(statearr_24953_24986[(2)] = inst_24947);

(statearr_24953_24986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (1))){
var inst_24910 = [];
var inst_24911 = inst_24910;
var inst_24912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24951__$1 = (function (){var statearr_24954 = state_24951;
(statearr_24954[(7)] = inst_24912);

(statearr_24954[(8)] = inst_24911);

return statearr_24954;
})();
var statearr_24955_24987 = state_24951__$1;
(statearr_24955_24987[(2)] = null);

(statearr_24955_24987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (4))){
var inst_24915 = (state_24951[(9)]);
var inst_24915__$1 = (state_24951[(2)]);
var inst_24916 = (inst_24915__$1 == null);
var inst_24917 = cljs.core.not.call(null,inst_24916);
var state_24951__$1 = (function (){var statearr_24956 = state_24951;
(statearr_24956[(9)] = inst_24915__$1);

return statearr_24956;
})();
if(inst_24917){
var statearr_24957_24988 = state_24951__$1;
(statearr_24957_24988[(1)] = (5));

} else {
var statearr_24958_24989 = state_24951__$1;
(statearr_24958_24989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (15))){
var inst_24941 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
var statearr_24959_24990 = state_24951__$1;
(statearr_24959_24990[(2)] = inst_24941);

(statearr_24959_24990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (13))){
var state_24951__$1 = state_24951;
var statearr_24960_24991 = state_24951__$1;
(statearr_24960_24991[(2)] = null);

(statearr_24960_24991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (6))){
var inst_24911 = (state_24951[(8)]);
var inst_24936 = inst_24911.length;
var inst_24937 = (inst_24936 > (0));
var state_24951__$1 = state_24951;
if(cljs.core.truth_(inst_24937)){
var statearr_24961_24992 = state_24951__$1;
(statearr_24961_24992[(1)] = (12));

} else {
var statearr_24962_24993 = state_24951__$1;
(statearr_24962_24993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (3))){
var inst_24949 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24951__$1,inst_24949);
} else {
if((state_val_24952 === (12))){
var inst_24911 = (state_24951[(8)]);
var inst_24939 = cljs.core.vec.call(null,inst_24911);
var state_24951__$1 = state_24951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24951__$1,(15),out,inst_24939);
} else {
if((state_val_24952 === (2))){
var state_24951__$1 = state_24951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24951__$1,(4),ch);
} else {
if((state_val_24952 === (11))){
var inst_24915 = (state_24951[(9)]);
var inst_24919 = (state_24951[(10)]);
var inst_24929 = (state_24951[(2)]);
var inst_24930 = [];
var inst_24931 = inst_24930.push(inst_24915);
var inst_24911 = inst_24930;
var inst_24912 = inst_24919;
var state_24951__$1 = (function (){var statearr_24963 = state_24951;
(statearr_24963[(7)] = inst_24912);

(statearr_24963[(11)] = inst_24929);

(statearr_24963[(12)] = inst_24931);

(statearr_24963[(8)] = inst_24911);

return statearr_24963;
})();
var statearr_24964_24994 = state_24951__$1;
(statearr_24964_24994[(2)] = null);

(statearr_24964_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (9))){
var inst_24911 = (state_24951[(8)]);
var inst_24927 = cljs.core.vec.call(null,inst_24911);
var state_24951__$1 = state_24951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24951__$1,(11),out,inst_24927);
} else {
if((state_val_24952 === (5))){
var inst_24912 = (state_24951[(7)]);
var inst_24915 = (state_24951[(9)]);
var inst_24919 = (state_24951[(10)]);
var inst_24919__$1 = f.call(null,inst_24915);
var inst_24920 = cljs.core._EQ_.call(null,inst_24919__$1,inst_24912);
var inst_24921 = cljs.core.keyword_identical_QMARK_.call(null,inst_24912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24922 = (inst_24920) || (inst_24921);
var state_24951__$1 = (function (){var statearr_24965 = state_24951;
(statearr_24965[(10)] = inst_24919__$1);

return statearr_24965;
})();
if(cljs.core.truth_(inst_24922)){
var statearr_24966_24995 = state_24951__$1;
(statearr_24966_24995[(1)] = (8));

} else {
var statearr_24967_24996 = state_24951__$1;
(statearr_24967_24996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (14))){
var inst_24944 = (state_24951[(2)]);
var inst_24945 = cljs.core.async.close_BANG_.call(null,out);
var state_24951__$1 = (function (){var statearr_24969 = state_24951;
(statearr_24969[(13)] = inst_24944);

return statearr_24969;
})();
var statearr_24970_24997 = state_24951__$1;
(statearr_24970_24997[(2)] = inst_24945);

(statearr_24970_24997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (10))){
var inst_24934 = (state_24951[(2)]);
var state_24951__$1 = state_24951;
var statearr_24971_24998 = state_24951__$1;
(statearr_24971_24998[(2)] = inst_24934);

(statearr_24971_24998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24952 === (8))){
var inst_24915 = (state_24951[(9)]);
var inst_24919 = (state_24951[(10)]);
var inst_24911 = (state_24951[(8)]);
var inst_24924 = inst_24911.push(inst_24915);
var tmp24968 = inst_24911;
var inst_24911__$1 = tmp24968;
var inst_24912 = inst_24919;
var state_24951__$1 = (function (){var statearr_24972 = state_24951;
(statearr_24972[(7)] = inst_24912);

(statearr_24972[(14)] = inst_24924);

(statearr_24972[(8)] = inst_24911__$1);

return statearr_24972;
})();
var statearr_24973_24999 = state_24951__$1;
(statearr_24973_24999[(2)] = null);

(statearr_24973_24999[(1)] = (2));


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
});})(c__22230__auto___24985,out))
;
return ((function (switch__22118__auto__,c__22230__auto___24985,out){
return (function() {
var cljs$core$async$state_machine__22119__auto__ = null;
var cljs$core$async$state_machine__22119__auto____0 = (function (){
var statearr_24977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24977[(0)] = cljs$core$async$state_machine__22119__auto__);

(statearr_24977[(1)] = (1));

return statearr_24977;
});
var cljs$core$async$state_machine__22119__auto____1 = (function (state_24951){
while(true){
var ret_value__22120__auto__ = (function (){try{while(true){
var result__22121__auto__ = switch__22118__auto__.call(null,state_24951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22121__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object)){
var ex__22122__auto__ = e24978;
var statearr_24979_25000 = state_24951;
(statearr_24979_25000[(5)] = ex__22122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25001 = state_24951;
state_24951 = G__25001;
continue;
} else {
return ret_value__22120__auto__;
}
break;
}
});
cljs$core$async$state_machine__22119__auto__ = function(state_24951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22119__auto____1.call(this,state_24951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22119__auto____0;
cljs$core$async$state_machine__22119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22119__auto____1;
return cljs$core$async$state_machine__22119__auto__;
})()
;})(switch__22118__auto__,c__22230__auto___24985,out))
})();
var state__22232__auto__ = (function (){var statearr_24980 = f__22231__auto__.call(null);
(statearr_24980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22230__auto___24985);

return statearr_24980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22232__auto__);
});})(c__22230__auto___24985,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map