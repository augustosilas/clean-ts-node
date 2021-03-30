import { SingUpController } from '../../../../presentation/controllers/login/signup/signup-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../usecases/authentication/db-authentication-factory'
import { makeDbAddAccount } from '../../usecases/add-account/db-add-account'
import { makeLogControllerDecorator } from '../../decorator/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SingUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
