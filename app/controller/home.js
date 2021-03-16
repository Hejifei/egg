const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        // console.log({
        //     ctx: this.ctx,
        //     isIos: this.ctx.isIOS,
        // })
        this.ctx.body = `
        <div>
            'Hollo world'
            <a href="/news">news</a>
            isIOS: ${this.ctx.isIOS}
        </div>`
    }
}

module.exports = HomeController
