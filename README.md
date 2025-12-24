# Algoritma Javascript

## Task 1 Menghitung Luas, Diameter dan Keliling Lingkaran
### Algoritma dalam bentuk Deskriptif
1. Mulai
2. Tentukan nilai r atau jari-jari 
3. Tentukan nilai Phi dengan angka 3.14 atau 22/7
4. Cek apakah phi yang digunakan adalah phi 3.14 atau 22/7


4. Hitung luas lingkarang dengan cara 3.14 dikali 4 dikali 4
5. Hitung diameter lingkaran dengan cara 2 dikali 4
6. Hitung Keliling Lingkaran dengan cara 2 dikali 3.14 dikali 4 
7. Tampilkan luas lingkaran yang hasilnya 50.24
8. Tampilkan diameter lingkaran yang hasilnya 8
9. Tampilkan Keliling lingkaran yang hasilnya 25.12
10. Stop
### Algoritma dalam bentuk Flowchart
```mermaid
flowchart TB
 Start@{ shape: circ, label: "start"}
 r@{ shape: lean-r, label: "input: r = 4"}
 phi@{ shape: rect, label: "phi = 3.14"}
 validatephi@{ shape: diamond, label: "phi != 3.14 && phi != 22/7"}

 CheckPhi@{ shape: diamond, label: "phi == 3.14"}

 l1@{ shape: rect, label: "l = phi * r * r "}
 d1@{ shape: rect, label: "d = 2 * r "}
 k1@{ shape: rect, label: "k = 2 * phi * r "}

 l2@{ shape: rect, label: "l = phi * r * r "}
 d2@{ shape: rect, label: "d = 2 * r "}
 k2@{ shape: rect, label: "k = 2 * phi * r "}

 OutputL1@{ shape: lean-r, label: "Output: ''luas lingkaran dengan r nya'' r ''adalah l1''"}
 OutputD1@{ shape: lean-r, label: "Output: ''diameter lingkaran dengan r nya '' r ''adalah d''"}
 OutputK1@{ shape: lean-r, label: "Output: ''keliling lingkaran dengan r nya'' r ''adalah k''"}


 OutputL2@{ shape: lean-r, label: "Output: Output: ''luas lingkaran dengan r nya'' r ''adalah l2''"}
 OutputD2@{ shape: lean-r, label: "Output: ''diameter lingkaran dengan r nya '' r ''adalah d2''"}
 OutputK2@{ shape: lean-r, label: "Output: ''keliling lingkaran dengan r nya'' r ''adalah k2''"}
 Stop@{ shape: dbl-circ, label: "stop"}

Start-->r-->phi-->validatephi-->|true|CheckPhi-->|false|l1-->k1-->d1-->OutputL1-->OutputD1-->OutputK1-->Stop

CheckPhi-->|true|l2-->k2-->d2-->OutputL2-->OutputD2-->OutputK2-->Stop


validatephi-->|false|Stop
```


# Naming Convention
* Camel Case: awalKataLowercaseKataSelanjutnyaUppercase
* Snake Case: tiap_Kata_dipisah_dengan_underscore
* Kebab Case: dipisah-dengan-dash
* Pascal Case: SemuaAwalKataBesar