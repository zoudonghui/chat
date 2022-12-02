
import { Context } from 'egg';
module.exports = () => {
  return async function errorHandler(ctx: Context, next) {
    try {
      await next();
    } catch (err : unknown) {
      ctx.app.emit('error', err, ctx);
      if (err instanceof Error) {
        ctx.body = {
          msg: err.message,
          errorCode: 1,
        };
      } else {
        ctx.body = {
          msg: 'unknown',
          errorCode: 1,
        };
      }

    }
  };
};
