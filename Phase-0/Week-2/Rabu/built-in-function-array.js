var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {
      input.splice(1, 1, "Roman Alamsyah Elsharawy");
      input.splice(4, 1, "Pria");
      input.splice(5, 0, "SMA Internasional Metro");
console.log(input);
var angkaBulan = input[3].split('/');
var namaBulan;
      switch (angkaBulan[1]) {
        case '01':
          namaBulan = 'Januari';
          break;
        case '02':
          namaBulan = 'Februari';
          break;
        case '03':
          namaBulan = 'Maret';
          break;
        case '04':
          namaBulan = 'April';
          break;
        case '05':
          namaBulan = 'Mei';
          break;
        case '06':
          namaBulan = 'Juni';
          break;
        case '07':
          namaBulan = 'Juli';
          break;
        case '08':
          namaBulan = 'Agustus';
          break;
        case '09':
          namaBulan = 'September';
          break;
        case '10':
          namaBulan = 'Oktober';
          break;
        case '11':
          namaBulan = 'November';
          break;
        case '12':
          namaBulan = 'Desember';
          break;
        default:
      }
console.log(namaBulan);
      angkaBulan.sort(function(value1, value2) { return value1 < value2});
console.log(angkaBulan);
var tanggal = angkaBulan.join("-");
console.log(tanggal);
      input.splice(1,1, input[1].split("").slice(0, 14).join(''));
console.log(input);
    }
dataHandling2(input);
