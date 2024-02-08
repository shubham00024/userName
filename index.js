const express = require('express')
const app = express()
const port = 3000

var os = require('os');
var username = os.userInfo();
console.log(username.username)

app.get('/', (req, res) => {
    
  res.send(os.userInfo())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})