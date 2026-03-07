import logger from "../utils/log.js";

const logMiddleware = (req, res, next) => {
    const start = new Date();

    next();
    const ms = new Date() - start;

    logger.info(`Method: ${req.method} ${req.originalUrl} \nStatus Code: ${res.statusCode} \nDuration: ${ms} ms`)
}

export default logMiddleware;