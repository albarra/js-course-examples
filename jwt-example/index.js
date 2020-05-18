var Koa = require('koa');
var Router = require('@koa/router');
const UserService = require('./userService');
const router = new Router();
var jwt = require('koa-jwt');
const bodyParser = require('koa-bodyparser');

var Config = require('config');
var app = new Koa();


const credentials = Config.get('secret');
const myUserService = new UserService();

app.use(bodyParser());
app.use(jwt({ secret: credentials }).unless({ path: [/^\/public/] }));

router.get('/read', (ctx, next) => {
    if(myUserService.hasRole(ctx.state.user.role, "read") || myUserService.hasRole(ctx.state.user.role, "write")) {
        ctx.body = 'read'
    } else {
        ctx.status = 401
        ctx.body = {message: 'Unauthorized'}
    }
});

router.post('/write', (ctx, next) => {
    if(myUserService.hasRole(ctx.state.user.role, "write")) {
        ctx.body = 'write'
    } else {
        ctx.status = 401
        ctx.body = {message: 'Unauthorized'}
    }
});

router.get('/public/info', (ctx, next) => {
    ctx.body = 'ort information'
});

router.post('/public/login', (ctx, next) => {
    var data = ctx.request.body;
    ctx.body = myUserService.login(data)
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Server running . . . ");
});