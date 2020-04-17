// 2. Membuat Controller
app.controller('MainController', ['$scope', function($scope) {

  // 3. Memberikan Model Object untuk Biodata
  $scope.biodata = {
    title: 'Biodata Diri',
    nama: 'Mohammad Idham Fachrurrozi',
    npm: '17081010044',
    umur: 20,
    alamat: 'Jl Teladan No 1 Gedangan Sidoarjo',
    email: 'muh_idham85@yahoo.com',
    tgl_lahir: new Date('1999', '01', '15'),
    deskripsi: 'Hallo Saya Idham salah satu Mahasiswa S1 Teknik Informatika di Kampus Bela Negara, UPN Veteran Jawa Timur. Front End ini merupakan salah satu tugas dari Mata Kuliah Pemrograman Framework. Untuk Framework yang digunakan adalah AngularJS'
  };
}]);

// 4. Melakukan konfigurasi routing saat user memilih jenjang pendidikan
app.config(function($routeProvider) {

  $routeProvider
    .when('/sd', {
      templateUrl: "index.html",
      controller: "sdCtrl"
    })
    .when('/smp', {
      templateUrl: "index.html",
      controller: "smpCtrl"
    })
    .when('/sma', {
      templateUrl: "index.html",
      controller: "smaCtrl"
    })
    .when('/kuliah', {
      templateUrl: "index.html",
      controller: "kuliahCtrl"
    });
});

app.controller("sdCtrl", function($scope, $route) {
  $scope.appPendidikan = {
    jenjang_pendidikan : 'Sekolah Dasar',
    name: 'SD Muhammadiyah 6 Gadung Surabaya',
    tahun_lulus: '2005 - 2011'
  }
});

app.controller("smpCtrl", function($scope, $route) {
  $scope.appPendidikan = {
    jenjang_pendidikan : 'Sekolah Menegah Pertama',
    name: 'SMP Negeri 32 Surabaya',
    tahun_lulus: '2011 - 2014'
  }
});

app.controller("smaCtrl", function($scope, $route) {
  $scope.appPendidikan = {
    jenjang_pendidikan : 'Sekolah Menegah Atas',
    name: 'SMA Kemala Bhayangkari 1 Surabaya',
    tahun_lulus: '2014 - 2017'
  }
});

app.controller("kuliahCtrl", function($scope, $route) {
  $scope.appPendidikan = {
    jenjang_pendidikan : 'Kuliah',
    name: 'UPN Veteran Jawa Timur',
    tahun_lulus: '2017 - 2021'
  }
});
