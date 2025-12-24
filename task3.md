# Algoritma Javascript
```
let fullName = "John"
let age = 20
let hobbies = ["Programming"]

if(fullName === "Jane"){
    console.log(`Hello ${fullName}`)
}else if(fullName === "Dan" || fullName === "John"){
    console.log(`Whats'up ${fullName}`)
    if(age > 18){
        console.log("How are you today?")
    }else{
        console.log("Let's go to school!")
        if(hobbies[0] === "Programming"){
            console.log("I love JavaScript!")
        }
    }
}else if(fullName === "John"){
    console.log(`Hi ${fullName}`)
}else{
    console.log("Hola!")
}
```
```mermaid
flowchart TB
 Start@{ shape: circ, label: "start"}
 name@{ shape: lean-r, label: "input: name"}
 age@{ shape: lean-r, label: "input: age"}
 hobi@{ shape: lean-r, label: "input: hobbies"}
 validateNameJane@{ shape: diamond, label: "name === Jane"}
 validateNameDanOrJohn@{ shape: diamond, label: "name === Dan || name === John"}
validateAgeDanOrJohn@{ shape: diamond, label: "age > 18"}
validateAgeDanOrJohnTrue@{ shape: lean-r, label: "Output: ''How are you today?''"}


 helloDanOrJohn@{ shape: rect, label: "output: ''Hello'' name"}
 hellojane@{ shape: rect, label: "output: ''Hello'' name"}


 Stop@{ shape: dbl-circ, label: "Stop"}


 Start-->name-->age-->hobi-->validateNameJane-->|false|validateNameDanOrJohn


 validateNameDanOrJohn-->|true|helloDanOrJohn-->validateAgeDanOrJohn-->|true|validateAgeDanOrJohnTrue


 validateNameJane-->|true|hellojane-->Stop
```