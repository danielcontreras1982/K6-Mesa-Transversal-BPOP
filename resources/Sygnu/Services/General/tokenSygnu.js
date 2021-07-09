import http from 'k6/http'
import * as general_data from '../../../General/general.js'
import * as bodyToken from './extractDataConsulCupo.js'

export function token_aut_sygnu (){
//export default function (data){
    let bodyUser = bodyToken.extractData()
    console.log("El request Body QUE envia es: ", bodyUser);
    const BODY = bodyUser
    console.log("El request Body del activaqr token es: ", BODY);
    var urlResource = general_data.base_url_sygnu + "/activar_token";
    const HEADERS = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const result = http.post(urlResource,
        BODY,
        HEADERS)
        return result
}


