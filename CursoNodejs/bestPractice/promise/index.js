function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve('Data fetched successfully');
            } else {
                reject('Error fetching data');
            }
        }, 2000);
    });
}

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })