module.exports = {

    "app-name": "BPOP",
    httpDebug: 'full',
    "parametrization_test": {

        "smoke_test": {
            vus: 3,  // 1 user looping for 1 minute
            duration: '30s',
            thresholds: {
              'http_req_duration': ['p(99)<150000'], // 99% of requests must complete below 1.5s
            },
            tags: {
                stack: 'Sygnu - Vincular Beneficiario',   // variable de entorno
                layer: 'BPOP',   // variable de entorno
                env: 'qa',    // variable de entorno
                service: 'Vincular Beneficiario',
                type_test: 'smoke_test'
            },
        },
        "constant_vus": {
            vus: 100,
            rps: 4,
            duration: '1m',
            tags: {
                stack: 'Sygnu - Vincular Beneficiario',   // variable de entorno
                layer: 'BPOP',   // variable de entorno
                env: 'qa',    // variable de entorno
                service: 'Vincular Beneficiario',
                type_test: 'constant_vus'
            }
        },
        "load_test": {
            stages: [
                    { duration: "1s", target: 5, rps: 5 },
                    { duration: "1m", target: 150,rps: 6 },
                    { duration: "1s", target: 5, rps: 5 }
              ],
              thresholds: {
                'http_req_duration': ['p(99)<150000'], // 99% of requests must complete below 1.5s
                'logged in successfully': ['p(99)<150000'], // 99% of requests must complete below 1.5s
              },
              tags: {
                  stack: 'Sygnu - Vincular Beneficiario',     // variable de entorno
                  layer: 'BPOP',     // variable de entorno
                  env: 'qa',      // variable de entorno
                  service: 'Vincular Beneficiario',
                  type_test: 'load_test'
              }
        },
        "stress_test":{
            stages: [
                { duration: '2m', target: 10, rps: 5 },
                { duration: '5m', target: 10, rps: 5 },
                { duration: '30s', target: 22, rps: 11 },
                { duration: '30s', target: 14, rps: 7 },
                { duration: '5m', target: 14, rps: 7 },
                { duration: '2m', target: 10, rps: 5 },
                { duration: '1m', target: 10, rps: 5 },
                { duration: '1m', target: 0, rps: 2 }
              ],
            tags: {
                stack: 'Sygnu - Vincular Beneficiario',
                layer: 'BPOP',
                env: 'qa',
                service: 'Vincular Beneficiario',
                type_test: 'stress_test'
            }
        }
    }
}
