const express = require('express')
const app = express()
const port = 3000

temp_id = "AKIA6ODU5DHTR5SW6POX"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})