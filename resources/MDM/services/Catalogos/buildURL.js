import http from 'k6/http'
import * as resource from '../general/extractData.js'

export function buildURL() {

    let values = resource.extractData()
    const urlRetrieve = "/v1/common/catalogs/" + values;   
    return urlRetrieve
  }