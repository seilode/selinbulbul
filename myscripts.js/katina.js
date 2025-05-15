const katinaYorumlar = [
  "♥ Kalbindeki kişi de seni düşünüyor, doğru zaman yakın.",
  "♥ Beklediğin haber çok yakında gelecek, sabırlı ol.",
  "♥ Aşkta yeni bir başlangıç seni bekliyor.",
  "♥ Geçmişten biri tekrar hayatına girmek istiyor.",
  "♥ Hislerine güven, kalbin seni doğru yere yönlendiriyor.",
  "♥ Ruh eşinle enerjisel bir bağ içindesin, sinyalleri fark et.",
  "♥ Aşk hayatında büyük bir değişim olacak, hazırlıklı ol.",
  "♥ Kendine değer verdiğin sürece sevgi de seni bulacak."
];

function katinaYorumCek() {
  const kutu = document.getElementById("katina-yorumlar");
  kutu.innerHTML = "";
  const secilenler = [...katinaYorumlar].sort(() => 0.5 - Math.random()).slice(0, 3);
  secilenler.forEach(yorum => {
    const div = document.createElement("div");
    div.className = "katina-box";
    div.textContent = yorum;
    kutu.appendChild(div);
  });
}