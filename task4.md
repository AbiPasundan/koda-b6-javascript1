# Flowchart Task 4

## Konversi Suhu

```mermaid
    flowchart TB
        Start@{ shape: circ, label: "Start"}

        temp@{ shape: lean-r, label: "temp = 34"}
        tempSource@{ shape: lean-r, label: "tempSource = Farenheit"}
        convertTo@{ shape: lean-r, label:  "convertTo = Celcius"}

        validation@{ shape: diamond, label:  "temp == ''number''"}
        outputerr@{ shape: lean-r, label:  "''masukan tipe data number''"}

        isString@{ shape: diamond, label:  "typeof tempSource === ''string'' && typeof convertTo === ''string'' "}
        isStringFalse@{ shape: lean-r, label:  "output: ''Harus String''"}

        isStringTrue@{ shape: lean-r, label:  "output: ''Harus String''"}

        Stop@{ shape: dbl-circ, label: "Stop"}

        Start-->temp-->tempSource-->convertTo-->validation-->|false|outputerr-->Stop

        validation-- true -->isString -- false --> isStringFalse

        isString
```
