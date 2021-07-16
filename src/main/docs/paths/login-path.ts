export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'API para autenticar usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginParams'
          }
        }
      }
    },
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
      400: {
        $ref: '#/schemas/badRequest'
      },
      401: {
        $ref: '#/schemas/unauthorized'
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
