function body(req) {
    let body = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    return body;
}

function result(res, custom, result, status) {
    let results = res.json({
        action: custom,
        status: status,
        result: result || ""
    });
    return results;
}

module.exports = { body, result };