const Router = require('koa-router');
const postCtrl = require('./posts.ctrl');

// 미들웨어 함수(한마디로 그냥 핸들러 함수 같은거임)
const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);
posts.get('/:id', postCtrl.read);
posts.post('/:id', postCtrl.remove);
posts.put('/:id', postCtrl.replace);
posts.patch('/:id', postCtrl.update);

module.exports = posts;
