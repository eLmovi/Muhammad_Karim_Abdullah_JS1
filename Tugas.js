// Menggunakan if

let Ron = 93;

if (Ron >= 92) {
  console.log("Bahan bakar Untuk kendaraan anda Pertamax");
} else if (Ron >= 90) {
  console.log("Bahan bakar Untuk kendaraan anda Pertalite");
} else if (Ron >= 88) {
  console.log("Bahan bakar Untuk kendaraan anda Premium");
} else {
  console.log("Bahan bakar Untuk kendaraan anda Air");
}

// Menggunakan switch case

let Jurusan = "Komputer";

switch (Jurusan) {
  case "Informatika":
    console.log("Informatika merupakan Jurusan Fakultas Teknik");
    break;
  case "Komputer":
    console.log("Komputer merupakan Jurusan Fakultas Teknik");
    break;
  case "Pertambangan":
    console.log("Pertambang merupakan Jurusan Fakultas Teknik");
    break;
  default:
    console.log("Bukan merupakan Bagian Dari Jurusan Fakultas Teknik");
}

// Menggunakan For

for (let z = 0; z < 20; z++) {
  console.log("Nomor ke-" + z);
}

// Menggunakan while
let opsi = 1;
while (opsi <= 5) {
  console.log("opsi ke-" + opsi);
  opsi++;
}

// Menggunakan do while
let count = 0;
do {
  console.log("Perulangan ke-" + count);
  count++;
} while (count < 9);

// Menggunakan Fungsi sederhana
function sapa(Tingkatan) {
  console.log("Halo, " + Tingkatan + "!");
}

sapa("Siswa Dasar");

// Fungsi dengan nilai
function Perkalian(a, b) {
  return a * b;
}

let hasil = Perkalian(8, 5);
console.log("Hasil perkalian: " + hasil);
