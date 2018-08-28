import routers from "koa-router"
import detail from "../tasks/detail"
const router = routers()
router.get('/',  (ctx, next) => {
    detail().then((data) => {
        ctx.body = data
        next()
    }, (data) => {
        console.log(data)
    })
})

router.get('/api',  (ctx, next) => {
    ctx.body = "1111111111"
})


export default router
