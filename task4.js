let temp = 32
let tempSource = "Kelvin"
let convertTo = "Celcius"

if (typeof temp === "number") {
    if (typeof tempSource === "string" && typeof convertTo === "string") {
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
                        console.log("error");
                    break;
                }
            } 
    }
    } else {
        console.log("Harus str");
        
    }
} else {
    console.log("masukan tipe data number");
}