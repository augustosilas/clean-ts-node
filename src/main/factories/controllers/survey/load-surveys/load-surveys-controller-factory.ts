import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorator/log-controller-decorator-factory'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-survey/load-surveys-controller'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/load-survey/db-load-surveys'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
