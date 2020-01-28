'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/sessions', 'SessionController.store')

Route.group(() => {
  Route.post('/uploads', 'FileController.store')
  Route.post('/recipients', 'RecipientController.store')
  Route.resource('/deliverymans', 'DeliverymanController').apiOnly()
}).middleware('auth')