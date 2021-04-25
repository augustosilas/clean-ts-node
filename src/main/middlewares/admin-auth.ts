import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAutMiddleware } from '../factories/middlewares/auth-middleware-factory'

export const adminAuth = adaptMiddleware(makeAutMiddleware('admin'))
