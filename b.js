function HitungKreditRumah() {
  var hargaRumah = parseInt(document.getElementById("typeRumah").value);
  var lamaKredit = parseInt(document.getElementById("LamaKredit").value);
  var uangMuka = 0.2 * hargaRumah;
  var sisa = hargaRumah - uangMuka;
  var angsuran = sisa / lamaKredit;
  var output =
    "Harga Rumah " +
    hargaRumah +
    "<br>" +
    "Uang Muka: " +
    uangMuka +
    "<br>" +
    "Sisa: " +
    sisa +
    "<br>" +
    "Angsuran per Bulan: " +
    angsuran.toFixed(2) +
    "<br><br>";
  for (var i = 1; i <= lamaKredit; i++) {
    output +=
      "Bulan" +
      i +
      "Angsuran = " +
      angsuran.toFixed(2) +
      "Sisa = " +
      (sisa - angsuran * i).toFixed(2) +
      "<br>";
  }
  document.getElementById("kreditOutput").innerHTML = output;
  document
    .getElementById("kreditRumahForm")
    .addEventListener("reset", function () {
      document.getElementById("kreditOutput").innerHTML = "";
    });
}
