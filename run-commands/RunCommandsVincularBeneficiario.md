## Sygnu Vincular Beneficiario

- smoke_test
```
    k6 run -e TYPE_TEST=smoke_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/Consultar_Cupo_test_$(date +%Y%m%d-%H%M%S).log \
      --http-debug="full" \
      src/Sygnu/services/consultaSaldo/index.js
```

- load_test
```
    k6 run -e TYPE_TEST=load_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/Consultar_Cupo_load_test_$(date +%Y%m%d-%H%M%S).log \
      src/Sygnu/services/consultaSaldo/index.js
```

 - constant_vus
 ```
     k6 run -e TYPE_TEST=constant_vus \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/Consultar_Cupo_constant_vus_$(date +%Y%m%d-%H%M%S).log \
      src/Sygnu/services/consultaSaldo/index.js
```
