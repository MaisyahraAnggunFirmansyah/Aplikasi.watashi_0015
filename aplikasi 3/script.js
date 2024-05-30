// script.js

$(document).ready(function () {
    // Fungsi untuk menambahkan barang ke daftar
    $('form').submit(function (event) {
        event.preventDefault(); // Menghentikan aksi bawaan formulir
        var nama = $('#nama').val(); // Mendapatkan nilai input nama
        var harga = $('#harga').val(); // Mendapatkan nilai input harga
        var jumlah = $('#jumlah').val(); // Mendapatkan nilai input jumlah
        $('#daftar-barang').append('<li class="list-group-item">' + nama + ' - Harga: ' + harga + ' - Jumlah: ' + jumlah + '</li>'); // Menambahkan item ke dalam daftar
        // Mengosongkan input setelah ditambahkan
        $('#nama').val('');
        $('#harga').val('');
        $('#jumlah').val('');
    });
});
