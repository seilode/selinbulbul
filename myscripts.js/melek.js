const mesajlar = [
  "Melekler seninle. İç sesini dinle.",
  "Bugün mucizelere açık ol!",
  "Sevgi, sana rehberlik eden en büyük güç.",
  "Zorluklar, içindeki ışığı ortaya çıkarır.",
  "Kendine güven. Meleklerin seni destekliyor."
];

function melekMesajiGoster() {
  const rastgeleIndex = Math.floor(Math.random() * mesajlar.length);
  const mesaj = mesajlar[rastgeleIndex];
  document.getElementById("melek-mesaji").innerText = mesaj;
}


