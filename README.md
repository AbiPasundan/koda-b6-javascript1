# Algoritma Javascript

## Task 1 Menghitung Luas, Diameter dan Keliling Lingkaran
### Algoritma dalam bentuk Deskriptif
1. Mulai
2. Tentukan nilai r atau jari-jari dengan angka 4
3. Tentukan nilai Phi dengan angka 3.14
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
 r@{ shape: lean-r, label: "r = 4"}
 phi@{ shape: lean-r, label: "phi = 3.14"}


 l@{ shape: lean-r, label: "l = phi * r * r "}
 d@{ shape: lean-r, label: "d = 2 * r "}
 k@{ shape: lean-r, label: "k = 2 * phi * r "}


 OutputL@{ shape: lean-r, label: "Output: l"}
 OutputD@{ shape: lean-r, label: "Output: d"}
 OutputK@{ shape: lean-r, label: "Output: k"}
 Stop@{ shape: dbl-circ, label: "stop"}

Start-->r-->phi-->l-->d-->k-->OutputL-->OutputD-->OutputK-->Stop
```