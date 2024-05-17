function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched successfully');
    }, 2000);
}

fetchData((result) => {
    console.log(result);
});