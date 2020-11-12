# Synchronous Shopping

Como generar checksum
```bash
#!/usr/bin/env node 
const crypto = require('crypto');
const checksum = crypto.createHash('SHA256').update('username').digest('hex');
console.log(checksum);
```
Como ejecutar desde una terminal:
```bash
#!/bin/bash
curl \
    -d 'username=taximo_api_user&parameters=5,5,5&shoping_centers=1,1-1,2-1,3-1,4-1,5&roads=1,2,10-1,3,10-2,4,10-3,5,10-4,5,10&checksum=<your-checksum>' \
    -H "Content-Type: application/x-www-form-urlencoded"  \
    -X POST 'https://taximo-test.herokuapp.com/api/v1/synchronous_shopping'
```
Ejemplo de respuesta:
```json
{ "minimum_time": 30 }
```

> Enderson Vizcaino
