class AjaxAxios{

    constructor(axios, url){
        const mainAxios = axios.create({
            url: url
        })

        this.axios = mainAxios
        this.axios.defaults.headers.common.Accept = 'application/json; charset=utf-8'
        this.url = ''

        if(url != undefined){
            this.url = url
        }
    }

    post(params){
        let self = this
        params["TIMEZONE"] = Intl.DateTimeFormat().resolvedOptions().timeZone

        let result1 = self.axios.post(`${self.url}`,params)
        result1.catch(error =>{
            if(typeof error.response.data !== "undefined")
            {
                window.location.href = window.location.origin
            }
        })
        return result1
    }
}