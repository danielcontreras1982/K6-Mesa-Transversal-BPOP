import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const csvData = new SharedArray("another data CC", function() {
    return papaparse.parse(open('./dataConsulta.csv'), { header: true }).data;
});
var lengthCSV= csvData.length;
var numRegister = Math.floor(Math.random() * lengthCSV);
export function extractData() {

    console.log("El registro generado de forma aleatoria es::::" ,numRegister);
        var userName = csvData[numRegister].Parameter1;
        var password = csvData[numRegister].Parameter2;
    console.log("los valores de los parametros son ;;", userName, password);
        var bodyActivarToken ={};
        bodyActivarToken["userName"] = userName;
        bodyActivarToken["password"] = password;
return JSON.stringify(bodyActivarToken)
}
export function bodyPost(TOKEN){
    var entidad = csvData[numRegister].Parameter3;
    var clave = csvData[numRegister].Parameter4;
    var tipoDocu = csvData[numRegister].Parameter5;
    var numDocu = csvData[numRegister].Parameter6;
    var numVinculacion = csvData[numRegister].Parameter7;
    var bodyConsultaSaldo = {};
    bodyConsultaSaldo["Entidad"] = entidad;
    bodyConsultaSaldo["Identificacion"] = numDocu;
    bodyConsultaSaldo["Clave"] = clave;
    bodyConsultaSaldo["NumVinculacion"] = numVinculacion;
    bodyConsultaSaldo["TipoIdentificacion"] = tipoDocu;
    bodyConsultaSaldo["Token"] = TOKEN;
return JSON.stringify(bodyConsultaSaldo)
}
export function bodyVinculacionB(TOKEN){
    var entidad = csvData[numRegister].Parameter3;
    var tipoDocu = csvData[numRegister].Parameter5;
    var numDocu = csvData[numRegister].Parameter6;
    var bodyConsultaSaldo = {};
    bodyConsultaSaldo["Entidad"] = entidad;
    bodyConsultaSaldo["Identificacion"] = numDocu;
    bodyConsultaSaldo["Clave"] = clave;
    bodyConsultaSaldo["NumVinculacion"] = numVinculacion;
    bodyConsultaSaldo["TipoIdentificacion"] = tipoDocu;
    bodyConsultaSaldo["Token"] = TOKEN;
return JSON.stringify(bodyConsultaSaldo)
}