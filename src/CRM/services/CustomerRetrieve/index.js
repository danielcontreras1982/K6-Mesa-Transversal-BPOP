import * as customerRetrieve from './getCustomerRetrieve.js'
import * as globals from '../../../../resources/Globals/global.js'
import * as token from '../../../../resources/General/token.js'
import * as dataCustomerRetrieve from '../../../../resources/CRM/services/CustomerRetrieve/dataCustomerRetrieve.js'
import { check, group, sleep, fail } from 'k6';

export let options = dataCustomerRetrieve.parametrization_test[__ENV.TYPE_TEST]
export let TOKEN = 'Valor Inicial'

export function setup(){

    globals.headersLogs();
    let resAuth = token.token_aut()
    return{
        data: resAuth.json()};
}
export default function (data){
    let res = customerRetrieve.execute(data)

    check(res, {
        'status is 200': r => r.status === 200 
    })
    sleep(1)
    globals.logged(__VU, __ITER, res);
}
export function teardown(data) {
}