import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse, LoadSurveyById, SaveSurveyResult } from './save-survey-result-controller-protocols'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const { accountId } = httpRequest
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey.id) {
        const answers = survey.answers.map(a => a.answer)
        console.log(answers, answer)
        if (!answers.includes(answer)) {
          console.log('dentro do primeiro if')
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        console.log('dentro do segundo if')
        return forbidden(new InvalidParamError('surveyId'))
      }
      await this.saveSurveyResult.save({
        accountId: accountId ?? '',
        surveyId,
        answer,
        date: new Date()
      })
      return {} as HttpResponse
    } catch (error) {
      return serverError(error)
    }
  }
}
