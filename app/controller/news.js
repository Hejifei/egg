const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const newsList = [
            {id: 1, title: 'this is news 1', url: '/news/detail?id=1', time: +new Date('Mon Mar 15 2020 22:28:14 GMT+0800')/1000},
            {id: 2, title: 'this is news 2', url: '/news/detail?id=2', time: +new Date('Mon Jan 15 2021 22:28:14 GMT+0800')/1000},
        ]
        // await this.ctx.render('/news/list.tpl', dataList)
        const ctx = this.ctx
        const page = ctx.query.page || 1
        // const newsList = await ctx.service.news.list(page)
        // console.log('start------------', {
        //     newsList,
        //     page,
        //     query: ctx.query,
        //     ctx,
        // }, 'ending-----------')
        await ctx.render('news/list.tpl', {
            list: newsList,
        })
    }

    async detail() {
        // await this.ctx.render('/news/list.tpl', dataList)
        const ctx = this.ctx
        const id = ctx.query.id || 1
        const detail = {
            id,
            title: `this is news ${id}`,
            detail: 'this is news detail, xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time: +new Date('Mon Mar 15 2020 22:28:14 GMT+0800')/1000,
        }
        // const user = this.app.cache.get(id)
        console.log({app: this.app})
        // const newsList = await ctx.service.news.list(page)
        // console.log('start------------', {
        //     newsList,
        //     page,
        //     query: ctx.query,
        //     ctx,
        // }, 'ending-----------')
        await ctx.render('news/list_detail.tpl', {
            ...detail
        })
    }
}

module.exports = NewsController
