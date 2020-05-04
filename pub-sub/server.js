const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router')
const router = new Router()

const redis = require("redis");
const publisher = redis.createClient();

router.get('/', (ctx, next) => {
    publisher.publish('my-channel', JSON.stringify(ctx.request.query))
    if(ctx.request.query.age) {
        publisher.publish('age-channel', JSON.stringify(ctx.request.query.age))
    }
    ctx.body = ctx.request.query
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000);