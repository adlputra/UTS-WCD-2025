# Kode JavaScript Dasar

Proyek ini berisi beberapa tugas kode JavaScript sederhana yang menyelesaikan tugas-tugas pemrograman umum. Setiap potongan kode menunjukkan konsep tertentu dengan contoh input dan output.

## 📄 Daftar Kode

### 1. Luas Persegi Panjang
**Soal**: Menghitung luas persegi panjang.  
**Kode**:
```js
function calculateArea(length, width) {
  return length * width;
}
```

### 2. Menghitung Lingkaran
**Soal**: Menghitung diameter, keliling, dan luas lingkaran.
**Kode**:
```js
function calculateCircleProperties(radius) {
  return {
    diameter: 2 * radius,
    circumference: 2 * Math.PI * radius,
    area: Math.PI * Math.pow(radius, 2),
  };
}
```

### 3. Sudut Ketiga Segitiga
**Soal**: Diketahui dua sudut, hitung sudut ketiga pada segitiga.
**Kode**:
```js
function findThirdAngle(angle1, angle2) {
    // find thirdangle
    let angle3 = 180 - (angle1 + angle2);
    return angle3;}
```

### 4. Selisih Hari Antar Tanggal
**Soal**: Menghitung jumlah hari antara dua tanggal.
**Kode**:
```js
function getDateDifference(date1, date2) {
    // d1 d2
    let d1 = new Date(date1);
    let d2 = new Date(date2);
}
```

### 5. Inisial Nama dalam Huruf Kapital
**Soal**: Mengambil inisial dari nama lengkap dan mengubahnya ke huruf kapital.
**Kode**:
```js
function getInitials(name) {
    // the name into an array of words
    let nameParts = name.split(" ");
    
    // initial
    let initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
    
    return initials;
}

```