export const surveyPath = {
  get: {
    tags: ['Enquete'],
    summary: 'API para listar todas as enquestes ',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      },
      403: {
        $ref: '#/schemas/forbidden'
      },
      404: {
        $ref: '#/schemas/notFound'
      },
      500: {
        $ref: '#/schemas/serverError'
      }
    }
  }
}
