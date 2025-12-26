// Konversi suhu dari suhu awal 
// inputnya 3 output satu

// buat flowchart kemudian buat program

// let temp = 34 // harus number
// let tempSource = "farenheit" // str
// let convertTo = "celcius" // str

let temp = 32
let tempSource = "Kelvin"
let convertTo = "Reamure"

if (typeof temp === "number") {
    switch (tempSource) {
        case "Farenheit":
            switch (convertTo) {
                case "Celcius":{
                    temp = ((temp - 32) * (5/9) )
                    console.log(temp);
                    break;
                }
                case "Reamure":{
                    temp = ((temp - 32) * (4/9) )
                    console.log(temp);
                    break;
                }
                case "Kelvin":{
                    temp = (32 - 32) * 5/9 + 273,15
                    console.log(temp);
                    break;
                }
                case "Kelvin":{
                    temp = (32 - 32) * 5/9 + 273,15
                    console.log(temp);
                    break;
                }
                case "Farenheit":{
                    console.log("Error");
                    break;
                }
            }
        case "Celcius": 
            switch (convertTo) {
                case "Farenheit":{
                        temp = (temp * 9/5) + 32
                        console.log(temp);
                    break;
                }
                case "Kelvin":{
                        temp = temp + 273
                        console.log(temp);
                    break;
                }
                case "Reamure":{
                        temp = temp * 4/5
                        console.log(temp);
                    break;
                }
                case "Celcius":{
                        console.log("error");
                    break;
                }
            } 
        case "Reamure": 
            switch (convertTo) {
                case "Celcius":{
                        temp = (temp * 5/4)
                        console.log(temp);
                    break;
                }
                case "Kelvin":{
                        temp = temp * (5/4) + 273 
                        console.log(temp);
                    break;
                }
                case "Farenheit":{
                        temp = temp * (9/4) + 32
                        console.log(temp);
                    break;
                }
                case "Reamure":{
                        console.log("error");
                    break;
                }
            } 
        case "Kelvin": 
            switch (convertTo) {
                case "Celcius":{
                        temp = (temp - 273)
                        console.log(temp);
                    break;
                }
                case "Farenheit":{
                    temp = temp * (9/5) - 459.67
                    console.log(temp);
                    break;
                }
                case "Reamure":{
                    temp = temp - 273 * (4/5)
                    console.log(temp);
                    break;
                }
                case "Kelvin":{
                        console.log(error);
                    break;
                }
            } 
    }
} else {
    console.log("masukan tipe data number");
}



const celcius = 40
const celciusToFarenheit = (celcius * 9/5) + 32
const celciusToReamure = celcius * 4 / 5
const celciusToKelvin = celcius + 273