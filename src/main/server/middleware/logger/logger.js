import log4js from "log4js"
const logger = ( options ) => {
    return async (ctx, next) => {
        console.log(11111111111111111111111)
      const start = Date.now()
      log4js.configure({
        appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
        categories: { default: { appenders: ['cheese'], level: 'info' } }
      }); 
      const logger = log4js.getLogger('cheese');
      await next()
      const end = Date.now()
      const responseTime = end - start;
      logger.info(`响应时间为${responseTime/1000}s`);
    }
  }


  export default logger