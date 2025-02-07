import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index'

const cors = require('cors')
const path = require('path');

const app: express.Application = express()
const address: string = "0.0.0.0:3000"


app.use(bodyParser.json())

app.use(cors())

app.post('/', function (req: Request, res: Response) {
    console.log(req.body)
    res.send("/")
})

app.use(routes);

app.get('*', (req, res) => {
    res.send("Nothing found")
   // res.sendFile(path.join(rootPath, 'frontend/dist/', 'index.html'));
});

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

