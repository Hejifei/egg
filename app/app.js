module.exports = app => {
    app.cache = new Cache();
    /**
     *  server 该事件一个worker进程只会出发一次，在HTTP服务完成启动后，
     * 会将HTTP server 通过这个事件暴露出来给开发者。
     */
    app.once('server', server => {
        console.log('server')
    })
    /**
     * 运行时有任何的异常被onerror插件捕获后，都会触发error事件，
     * 将错误对象和关联的上下文暴露给开发者，可以进行自定义的日志记录上报等处理。
     */
    app.on('error', (err, ctx) => {
        console.log('err', {
            err, 
            ctx,
        })
    })
    /**
     * request/response:
     * 应用收到请求和相应请求时，分别会触发request和response事件，并将当前请求
     * 上下文暴露出来，开发者可以监听这两个事件来进行日志记录。
     */
    app.on('request', ctx => {
        console.log('request', {ctx})
    })
    app.on('response', ctx => {
        const used = Date.now() - ctx.starttime;
        console.log('response', {
            used,
            ctx,
        })
    })
}