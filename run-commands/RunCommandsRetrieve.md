## CUSTOMER CRM RETRIEVE

- smoke_test
```
    k6 run -e TYPE_TEST=smoke_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/customer_retrieve_smoke_test_$(date +%Y%m%d-%H%M%S).log \
      --http-debug="full" \
      src/CRM/services/CustomerRetrieve/index.js
```

- load_test
```
    k6 run -e TYPE_TEST=load_test \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/customer_retrieve_load_test_$(date +%Y%m%d-%H%M%S).log \
      src/CRM/services/CustomerRetrieve/index.js
```

 - constant_vus
 ```
     k6 run -e TYPE_TEST=constant_vus \
      --out influxdb=http://localhost:8086/test  \
      --logformat=raw --console-output=results/customer_retrieve_constant_vus_$(date +%Y%m%d-%H%M%S).log \
      src/CRM/services/CustomerRetrieve/index.js
```
