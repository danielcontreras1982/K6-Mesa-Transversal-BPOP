import * as getCatalogos from './getCatalogos.js'
import * as globals from '../../../../resources/Globals/global.js'
import * as token from '../../../../resources/General/token.js'
import * as datacatalogos from '../../../../resources/MDM/services/Catalogos/dataMDMCatalogo.js'
import { check, group, sleep, fail } from 'k6';

export let options = datacatalogos.parametrization_test[__ENV.TYPE_TEST]
export let TOKEN = 'Valor Inicial'

export function setup(){

    globals.headersLogs();
    let resAuth = token.token_aut()
    return{
        data: resAuth.json()};
}
export default function (data){
    let res = getCatalogos.execute(data)

    check(res, {
        'status is 200': r => r.status === 200 
    })
    sleep(1)
    globals.logged(__VU, __ITER, res);
}
export function teardown(data) {
}