const axios = require('axios')
const https = require('https');



function result(res, custom, result, status) {
    let results = res.json({
        action: custom,
        status: status,
        result: result || ""
    }); 
    return results
}

function CustomLog(req,exec,responsible){
      const httpsAgent = new https.Agent({ rejectUnauthorized: false })
    
      var data = {
        "eventExecute": exec,
        "bodyAll": JSON.stringify(req.body),
        "responsible": responsible
      };
      
      var config = {
        method: 'post',
        url: 'https://localhost:3001/api/logs',
        headers: { 
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3RldmVuIiwiaWQiOiI2MWY3MDA2NTQ4ZGU0MzZjYWRkMzViZGUiLCJpYXQiOjE2NDM2ODIxNzV9.A2MAdH8Ryi6hITGLhA3N-WWjY-4Q6N8YUwFG4pqz5HE', 
          'Content-Type': 'application/json'
        },
        data : data,
        httpsAgent: httpsAgent
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      });
}

module.exports = {  result , CustomLog };