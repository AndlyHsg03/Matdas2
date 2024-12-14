function hitungSistemVariabel() {
    // Ambil nilai dari input
    const x = parseFloat(document.getElementById('uangAwal').value); // Uang Awal (x)
    const a = parseFloat(document.getElementById('biayaKos').value); // Biaya Sewa Kos (a)
    const b = parseFloat(document.getElementById('biayaMakan').value); // Biaya Makan (b)
    const c = parseFloat(document.getElementById('biayaTransport').value); // Biaya Transportasi (c)

    // Validasi input
    if (isNaN(x) || isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Harap masukkan semua nilai dengan benar</p>';
        return;
    }

    // Perhitungan langkah-langkah
    const y = a + b + c; // Total Pengeluaran
    const z = x - y;     // Sisa Uang

    // Tampilkan perhitungan langkah-langkah dan hasil akhir
    document.getElementById('result').innerHTML = `<div>
        <p><strong style="color: blue;">Langkah-langkah:</strong></p>
        <p style="color: green;">1. Hitung Total Pengeluaran (y):</p>
        <p>&emsp;<span style="color: darkorange;">y = a + b + c</span></p>
        <p>&emsp;<span style="color: darkorange;">y = ${a} + ${b} + ${c}</span></p>
        <p>&emsp;<span style="color: darkorange;">y = ${y}</span></p>

        <p style="color: green;">2. Hitung Sisa Uang (z):</p>
        <p>&emsp;<span style="color: darkorange;">z = x - y</span></p>
        <p>&emsp;<span style="color: darkorange;">z = ${x} - ${y}</span></p>
        <p>&emsp;<span style="color: darkorange;">z = ${z}</span></p>

        <p><strong style="color: blue;">Hasil Akhir:</strong></p>
        <p style="color: purple;">Total Pengeluaran (y): Rp ${y.toLocaleString('id-ID')}</p>
        <p style="color: purple;">Sisa Uang (z): Rp ${z.toLocaleString('id-ID')}</p>
    </div>`;
}
