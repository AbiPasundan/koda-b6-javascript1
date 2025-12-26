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

        isStringTrue@{ shape: diamond, label:  "tempSource == ''Farenheit''"}

        %% SAMBUNGAN AWAL START
        Start-->temp-->tempSource-->convertTo-->validation-->|false|outputerr-->Stop

        validation-- true -->isString -- false --> isStringFalse --> Stop

        isString-- true --> isStringTrue -- true -->isStringTrueFC -- true -->isStringTrueFCVar-->isStringTrueFCOut-->Stop
        
        %% SAMBUNGAN AWAL END

        

        %% CONVERT FARENHEIT START
        isStringTrueFC@{ shape: diamond, label:  "convertTo == ''Celcius''"}
        isStringTrueFCVar@{ shape: rect, label:  "temp = ((temp - 32) * (5/9) )"}
        isStringTrueFCOut@{ shape: lean-r, label:  "output: temp"}

        isStringTrueFR@{ shape: diamond, label:  "convertTo == ''Reamure''"}
        isStringTrueFRVar@{ shape: rect, label:  "temp = ((temp - 32) * (4/9) )"}
        isStringTrueFROut@{ shape: rect, label:  "output: temp"}

        isStringTrueFK@{ shape: diamond, label:  "convertTo == ''Kelvin''"}
        isStringTrueFKVar@{ shape: rect, label:  "temp = (32 - 32) * 5/9 + 273.15"}
        isStringTrueFKOut@{ shape: rect, label:  "output: temp"}

        isStringTrueFF@{ shape: diamond, label:  "convertTo == ''Farenheit''"}
        isStringTrueFFOut@{ shape: rect, label:  "output: ''Error''"}

        %% SAMBUNGAN START
        isStringTrueFC-- false --> isStringTrueFR -- true --> isStringTrueFRVar --> isStringTrueFROut-->Stop

        isStringTrueFR -- false --> isStringTrueFK -- true --> isStringTrueFKVar --> isStringTrueFKOut -->Stop

        isStringTrueFK -- false --> isStringTrueFF -- true --> isStringTrueFFOut -->Stop

        isStringTrueFF -- false  -->Stop

        %% isStringTrueFC -- true -->isStringTrueFCVar
        %% SAMBUNGAN END

        %% CONVERT FARENHEIT END

        Stop@{ shape: dbl-circ, label: "Stop"}

```
