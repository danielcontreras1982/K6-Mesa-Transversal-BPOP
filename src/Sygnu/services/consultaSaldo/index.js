import * as postConsultaCupo from './postConsultaCupo.js'
import * as globals from '../../../../resources/Globals/global.js'
import * as token from '../../../../resources/Sygnu/Services/General/tokenSygnu.js'
import * as dataconsulCupo from '../../../../resources/Sygnu/services/consultarCupo/dataConsultarCupo.js'
import { check, group, sleep, fail } from 'k6';

export let options = dataconsulCupo.parametrization_test[__ENV.TYPE_TEST]
export let TOKEN = 'Valor Inicial'

export function setup(){

    globals.headersLogs();
    let resAuth = token.token_aut_sygnu();
    return{
        data: resAuth.json()};
}
export default function (data){
    let res = postConsultaCupo.execute(data)

    check(res, {
        'status is 200': r => r.status === 200 
    })
    sleep(1)
    globals.logged(__VU, __ITER, res);
}
export function teardown(data) {
}