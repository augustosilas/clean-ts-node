import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
import { badRequest, serverError } from '../../../helpers/http/http-helpers'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error instanceof Error) {
        return badRequest(error)
      }
      const { question, answers } = httpRequest.body
      await this.addSurvey.add({
        question,
        answers
      })
      return {} as HttpResponse
    } catch (error) {
      return serverError(error)
    }
  }
}
