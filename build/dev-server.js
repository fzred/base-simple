import express from 'express'
import config from '../config'

const app = express()
const port = process.env.PORT || config.port

app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}`)
})
console.log(__dirname)
