
import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
    res.json({message: 'Endpoint working perfectly'})
})





app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})