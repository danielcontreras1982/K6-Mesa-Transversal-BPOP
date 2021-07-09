import http from 'k6/http'
import * as general_data from './general.js'

export function token_aut (){

    const headers = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic MzE1dXAzY3JhZzF2YmJuZHNqNHB0aG03cmc6MXRjYmFuODA2OW50MWhycWFoYXZiMzRiY2RsOTcyb3MyZWZpcWNnNXZxMjA0YzFrZ3JnOQ=="
        }
    }
    let data = {
        grant_type: 'client_credentials'
    }

    const result = http.post(general_data.token_url,
        data,
        headers)
        return result

}



