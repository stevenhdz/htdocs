function makeRequest(url, errorHandler) {
    fetch(url).then(response => response.json()).catch(error => { errorHandler.handle(error)})
}

const consoleErrorHandler = {
    handle: function(error) {
        console.log(error)
    }
}

const externalErrorHandler = {
    handle: function(error) {
        sendErrorToExternalService(error)
    }
}

makeRequest('xxx', consoleErrorHandler)
makeRequest('xxx', externalErrorHandler)
