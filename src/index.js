let express = require('express');
const path = require('path')

let app = express();
let userRoutes = require('./routes/user')
let projectRoutes = require('./routes/project')
let bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(`${ new Date().toString() } => ${ req.originalUrl }`, req.body)
    next()
})

app.use(projectRoutes)
app.use(userRoutes)
app.use(express.static('public'));

app.use((req, res, next) => {
    res.status(404).send('We think you are lost')
})

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendFile(path.join(__dirname, "../public/500.html"))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.info(`Server has started on ${ PORT }`)
})