console.log('SOAL 1');
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


console.log('\n' + 'SOAL 2');
function tukarStrirng(str) {
    let reverseStr = '';
    let i = str.length - 1;

    while (i >= 0) {
        reverseStr += str[i];
        console.log(reverseStr);
        i--;
    }
    return reverseStr;
}
tukarStrirng('abcde');


console.log('\n' + 'SOAL 3');
printeDigitValue('9.86-A5.321');
function printeDigitValue(value) {
    let n = value.length;
    let results = '';


    for (let i = 0; i <= n; i++) {
        if (isNaN(value[i])) {
            continue;
        }
        results += value[i]
    }
    console.log(results)
    n = results.length


    for (let i = 0; i < n; i++) {
        console.log(results[i].padEnd(results[i], '0'));
    }
}



console.log('\n' + 'SOAL 4');
let a = 3;
let b = 7;

[a, b] = [b, a];

console.log(a)
console.log(b)

console.log('\n' + 'SOAL 5');
let angkaa = 4;
console.log(penyebut(angkaa));
function penyebut(nilai) {
    let nilaii = Math.abs(nilai)
    const huruf = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
    let temp = '';
    if (nilaii <= 0 || nilaii > 100) {
        console.log('Silahkan Masukkan Bilangan 1 - 100')
    } else if (nilaii < 12) {
        temp = huruf[nilaii]
    } else if (nilaii < 20) {
        temp = penyebut(nilaii - 10) + ' Belas'
    } else if (nilaii < 100) {
        temp = penyebut(nilaii / 10) + ' Puluh'
    } else {
        console.log('Seratus')
    }
    return temp;
}


console.log('\n' + 'SOAL 6 Dan 7');
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

console.log('\n' + 'SOAL 8');
let int = 15;

for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Eduwork')
    } else if (i % 3 === 0) {
        console.log('Edu')
    } else if (i % 5 === 0) {
        console.log("Work");
    } else {
        console.log(i)
    }
}

console.log('\n' + 'SOAL 9');
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

console.log('\n' + 'SOAL 10');
function CheckTahunKabisat(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' : adalah Tahun Kabisat');
    } else {
        console.log(year + ' : Bukan Tahun Kabisat');
    }
}

const year = 2024

CheckTahunKabisat(year);