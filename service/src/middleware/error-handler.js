
const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.error(e);
    const statusCode = e.statusCode || 500;
    const message = e.message || 'A System Error Occured';
    ctx.response.status = statusCode;
    ctx.response.statusText = message;
    ctx.body = { statusCode, message };
  }
};

module.exports = errorHandler;
