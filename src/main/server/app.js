import koa from 'koa'
import koaBody from 'koa-body'
import router from './router'
import logger from 'koa-logger'
import cors from 'koa2-cors'
import config from "../config"
import logger from "./middleware/logger"

const app = new koa()

//静态资源
// app.use(static(config.staticFilePath))
//跨域
app.use(logger())
app.use(cors())
// https://github.com/ikcamp/koa2-tutorial/tree/8-mi-log


app.use(koaBody({multipart: true}))
app.use(router.routes()).use(router.allowedMethods())
app.listen(config.port, () => {
  console.log(`Server start at http://127.0.0.1:${config.port}`)
})

export const server =  app
// module.exports = app