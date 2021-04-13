import { AccountMongoRepository } from '../../../../../infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapater } from '../../../../../infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { AddAccount } from '../../../../../domain/usecases/add-account'
import { DbAddAccount } from '../../../../../data/usecases/add-account/db-add-account'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapater = new BcryptAdapater(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapater, accountMongoRepository, accountMongoRepository)
}
