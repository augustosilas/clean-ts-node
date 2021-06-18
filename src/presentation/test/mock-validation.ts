import { Validation } from '@/presentation/protocols/validation'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return {} as Error
    }
  }
  return new ValidationStub()
}
