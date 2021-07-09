import http from 'k6/http'
import * as general_data from '../../../../resources/General/general.js'
import * as bodyRequestCon from '../../../../resources/Sygnu/Services/General/extractDataConsulCupo.js'

const HEADERS = {
    headers: {
        "Content-Type": "application/json",
    }
}
export let execute = (data) => {

    const url = `${general_data.base_url_sygnu}` + "/vinculaciones_beneficiario"
    const TOKEN = data.data.Token
    let bodyRequest = bodyRequestCon.bodyPost(TOKEN)
    const BODY = bodyRequest
    HEADERS.headers['Authorization'] = "Bearer " + TOKEN

    return http.post( url,
        BODY,
        HEADERS
                    )
  }