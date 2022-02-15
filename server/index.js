const express = require('express')
const path = require('path')
const staticPath = path.join(__dirname, '../client')
const indexPath = path.join(__dirname, '../client/index.html')
const nopagePath = path.join(__dirname, '../client/404.html')
const app = express()
const port = 3000


app.use(express.static(staticPath))

app.get('/', (req, res) => {    
    res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('*', function(req, res){
    res.sendFile(nopagePath)
  });