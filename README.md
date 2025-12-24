# Algoritma Javascript

## Task 1

1. Mulai
2. Tentukan nilai r atau jari-jari dengan angka 4
3. Tentukan nilai Phi dengan angka 3.14
4. Hitung luas lingkarang dengan cara 3.14 dikali 4 dikali 4
5. Hitung diameter lingkaran dengan cara 2 dikali 4
6. Hitung Keliling Lingkaran dengan cara 2 dikali 3.14 dikali 4 
7. Tampilkan luas lingkaran yang hasilnya 50
8. Tampilkan diameter lingkaran yang hasilnya 8
9. Tampilkan Keliling lingkaran yang hasilnya 25
10. Stop

```mermaid
flowchart TB
 Start@{ shape: circ, label: "start"}
 r@{ shape: lean-r, label: "r = 4"}
 phi@{ shape: lean-r, label: "phi = 3.14"}


 l@{ shape: rect, label: "phi * r * r "}
 d@{ shape: rect, label: "2 * r "}
 k@{ shape: rect, label: "2 * phi * r "}


 OutputL@{ shape: lean-r, label: "Output: ''50''"}
 OutputD@{ shape: lean-r, label: "Output: ''8''"}
 OutputK@{ shape: lean-r, label: "Output: ''25''"}
 Stop@{ shape: dbl-circ, label: "stop"}

Start-->r-->phi-->l-->d-->k-->OutputL-->OutputD-->OutputK-->Stop
```