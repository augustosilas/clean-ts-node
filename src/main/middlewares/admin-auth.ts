import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAutMiddleware } from '@/main/factories/middlewares/auth-middleware-factory'

export const adminAuth = adaptMiddleware(makeAutMiddleware('admin'))
