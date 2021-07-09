import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const csvData = new SharedArray("another data name", function() {
    return papaparse.parse(open('./dataCatalogos.csv'), { header: true }).data;
});

export function extractData() {
    var lengthCSV= csvData.length;
    var numRegister = Math.floor(Math.random() * lengthCSV); 
        var value1= csvData[numRegister].Parameter1;
return value1
}
