import http from 'k6/http'
import * as general_data from '../../../../resources/General/general.js'
import * as resource from '../../../../resources/MDM/services/Catalogos/buildURL.js'

const HEADERS = {
    headers: {
        "Content-Type": "application/json",
        "x-adl-transaction-id": "536513f4-b31c-11e9-8008-033173de76f",
        "x-adl-channel": "ADL",
        "x-adl-bank-id": "00010029",
        "x-adl-app-name": "TDC"
    }
}
export let execute = (data) => {

    const url = `${general_data.base_url}` + resource.buildURL()
    const TOKEN = data.data.access_token
    HEADERS.headers['Authorization'] = TOKEN

    return http.get( url,
                     HEADERS
                    )
  }