
const express = require('express')
const fetch = require('node-fetch')
const {format} = require('date-fns')

const port = process.env.port || 3000 


const app = express()

app.get('/api', async(request, response) => {
let date = format(Date.now(), 'yyyy-MM-dd')
var myHeaders = new fetch.Headers();
myHeaders.append("apikey", "tgyg7Zwe4S8f9wqVmvz0hHc8rUQXbEQj");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

await fetch(`https://api.apilayer.com/fixer/${date}?symbols=INR%2CAUD%2CCAD%2CGBP%2CAED&base=USD`, requestOptions)
  .then(response => response.json())
  .then(result => response.send(result))
  .catch(error => console.log('error', error))
})



app.listen(port, ()=> console.log(`Server is listening on ${port}`))



