axios.get("http://127.0.0.1:8000/api/Articulos/")
.then(function (response) {
  console.log(response)
  document.getElementById("mytab1").innerHTML = JSON.stringify(response.data)
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always exec
});