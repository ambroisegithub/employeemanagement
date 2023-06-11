import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";
import registerRoutes from "./routes/register"
const app = express();
app.use(cors())
app.use(morgan('dev'))

app.get('/', (res, req) => {

    return res.status(200).json({

        status: "sucuss",
        message: "Welcome to employee management system",
    })

})


app.use('/api/v1', registerRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('*', (res, req) => {

    return res.stauts(404).json({
        status: "Failed",
        message: "invalid Url",
    })
})

export default app;