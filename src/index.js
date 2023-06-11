import mongoose from "mongoose"
import app from "./app"
import dotenv from "dotenv"


dotenv.config()

mongoose.set("strictQuery", false)
mongoose.connect(process.env.DATABASENAME)

.then(() => {
    console.log("Db Connected");

})

.catch((err) => {
    console.log(err);

})


const PORT = process.env.PORT;
app.listen(PORT, () => {

    console.log(`The server is running on Port number called  ${PORT}`)

})

app.get('/', (res, req) => {


    return res.status(200).json({

        status: true,
        message: "Welcome to my  Employee Managent system Project API"
    })
})
export default app;