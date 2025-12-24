// const celcius = 40
// const celciusToFarenheit = (celcius * 9/5) + 32
// const celciusToReamure = celcius * 4 / 5
// const celciusToKelvin = celcius + 273
// // c to f
// console.log(`Hasil konversi suhu dari celcius ke Farenheit adalah ${celciusToFarenheit}`);
// // c to r
// console.log(`Hasil konversi suhu dari celcius ke Reamure adalah ${celciusToReamure}`);
// // c to k
// console.log(`Hasil konversi suhu dari celcius ke Kelvin adalah ${celciusToKelvin}`);



// 2
// process.stdout.write('Enter a number: ');
// process.stdin.on('data', (data) => {
//     // deklarasi
//     const r = data
//     const phi = 3.14
//     // perhitungan
//     const l = phi * r * r
//     const d = 2 * r
//     const k = 2 * phi * r
//     console.log(`Luasnya dari lingkaran adalah : ${l}`);
//     console.log(`Diameter dari lingkaran adalah : ${d}`);
//     console.log(`Keliling dari lingkaran adalah : ${k}`);
//     process.exit();
// });

//v1
// let r = 7
// let phi = 22/7
// if(phi === 3.14 || phi === 22/7){
//     if(phi === 3.14){
//         const l = phi * r * r 
//         const d = 2 * r 
//         const k = 2 * phi * r 
//         console.log(`luas lingkaran dengan r nya ${r} adalah ${ l}`);
//         console.log(`luas diameter dengan r nya ${r} adalah ${ d}`);
//         console.log(`luas keliling dengan r nya ${r} adalah ${ k}`);
//     } else if (phi === 22/7){
//         const l = phi * r * r 
//         const d = 2 * r 
//         const k = 2 * phi * r 
//         console.log(`luas lingkaran dengan r nya ${r} adalah ${ l}`);
//         console.log(`luas diameter dengan r nya ${r} adalah ${ d}`);
//         console.log(`luas keliling dengan r nya ${r} adalah ${ k}`);
//     }
// } else {
//     console.log("stop");
// }



// v2
process.stdout.write('Masukan nilai jari-jari: ');
process.stdin.on('data', (data) => {
    const r = Number(data.toString().trim())

    if(!Number.isFinite(r)){
        console.log("yang anda masukan bukan angka!")
        process.exit()
    } else {
        let phi = 3.14
        if(phi === 3.14) {
            const l = phi * r * r 
            const d = 2 * r 
            const k = 2 * phi * r 

            console.log(`luas lingkaran dengan r nya ${r} adalah ${ l}`);
            console.log(`diameter lingkaran dengan r nya ${r} adalah ${ d}`);
            console.log(`keliling lingkaran dengan r nya ${r} adalah ${ k}`);
        }else if(phi === 22/7){
            const l = phi * r * r 
            const d = 2 * r 
            const k = 2 * phi * r 

            console.log(`luas lingkaran dengan r nya ${r} adalah ${ l}`);
            console.log(`diameter lingkaran dengan r nya ${r} adalah ${ d}`);
            console.log(`keliling lingkaran dengan r nya ${r} adalah ${ k}`);
        } else {
            console.log(`Tentukan phi yang benar`);
        }
        process.exit();
}
});