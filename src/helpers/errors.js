import logger from './logger'

const notFound = (req, res, next) => {
    const error = new Error (`Not Found - ${req.orinalURL}`)
    res.status(404)
    next(error)
}

export const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode = 200 ? 500 : res.statusCodereq.log.error({
        message: error.message,
        stack: error.stack,
    })
res.status(statuscode)
res.json({
    message: error.message,
    stack: process.env.NODE_ENV = 'production' ? ' ' : error.stack,
})
}
