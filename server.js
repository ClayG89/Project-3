/* 
 * This is the template for a server.js file.  Follow the steps below and read
 * the comments for creating your own (or you can just copy this file).
 */

/* Step 1
 *
 * Import needed packages
 *
 */
const express = require('express')
const app = express()

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { foodRouter } = require('./controllers/inventory')

const { cleaningRouter } = require('./controllers/inventory')

const { miscRouter } = require('./controllers/inventory')

const { payrollRouter } = require('./controllers/personnel')

const { vacationRouter } = require('./controllers/personnel')

const { benefitRouter } = require('./controllers/personnel')

const { utilityRouter } = require('./controllers/other')

const { rentRouter } = require('./controllers/other')

const { tableRouter } = require('./controllers/inventory')

/* Step 3
 *
 * Register middleware...
 */

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string 
 */
app.use(express.urlencoded({extended: true}))

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json())


/* Step 3.c
 *
 * use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/api/food', foodRouter)

app.use('/api/cleaning', cleaningRouter)

app.use('/api/misc', miscRouter)

app.use('/api/payroll', payrollRouter)

app.use('/api/vacation', vacationRouter)

app.use('/api/benefit', benefitRouter)

app.use('/api/utility', utilityRouter)

app.use('/api/rent', rentRouter)

// app.use('/api/table', tableRouter)

/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

/* Step 6
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3001

/* Step 7
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
