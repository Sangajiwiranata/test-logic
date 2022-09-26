// soal 1
//Int = 4
function hasil(n) {
    let jawaban = 1;
    for (var i = n; i >= 1; i--) {
        jawaban = jawaban * i;
    }
    return jawaban;
}

let n = 4;
jawaban = hasil(n)
console.log(jawaban);


// Int = 8
function hasil(m) {
    let jawaban = 1;
    for (var i = m; i >= 1; i--) {
        jawaban = jawaban * i;
    }
    return jawaban;
}
let m = 8;
jawaban = hasil(m)
console.log(jawaban);

// soal 2
function reverseString(str) {
    let reverseStr = '';
    let i = str.length - 1;

    while (i >= 0) {
        reverseStr += str[i];
        console.log(reverseStr);
        i--;
    }
    return reverseStr;
}
reverseString('abcde');

// soal 4
let a = 3;
let b = 7;

[a, b] = [b, a];

console.log(a)
console.log(b)


//Soal 6 Dan 7
let data = [1, 4, 7, 9, 12];
let besar = 14;
let kecil = 2;
for (let i = 0; i < data.length; i++) {
    if (data[i] >= besar) {
        data.pop()
    }
    if (data[i] <= kecil) {
        data.shift()
    }
}
console.log(data)
console.log(data.length)

// soal 9
let angka = [4, 2, 6, 88, 3, 11];
let terbesar = 88;
let terkecil = 2;
for (let i = 0; i < angka.length; i++) {
    if (angka[i] > terbesar) {
        terbesar = angka[i];
    }
    if (angka[i] < terkecil) {
        terkecil = angka[i];
    }
}
console.log(terbesar);
console.log(terkecil);

// Soal 10
function CheckTahunKabisat(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' : adalah Tahun Kabisat');
    } else {
        console.log(year + ' : Bukan Tahun Kabisat');
    }
}

const year = 2024

CheckTahunKabisat(year);