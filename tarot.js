// kartSec fonksiyonu: Rastgele 3 kart seçip HTML olarak döner
function kartSec() {
    const kartlar = [
        { isim: "The Fool", anlam: "Yeni bir başlangıç, cesaretle adım atma." },
        { isim: "The Magician", anlam: "Yaratıcılığınızı kullanın, potansiyeliniz büyük." },
        { isim: "The High Priestess", anlam: "İçsel bilgeliğinizi dinleyin." },
        { isim: "The Empress", anlam: "Bereket ve doğurganlık, yaratıcılık." },
        { isim: "The Emperor", anlam: "Güç, otorite, disiplin." },
        { isim: "The Lovers", anlam: "Sevgi, ilişkiler, uyum." },
        { isim: "The Chariot", anlam: "Zafer, azim, hareket." },
        { isim: "Strength", anlam: "İçsel güç, cesaret, sabır." },
        { isim: "The Hermit", anlam: "İçsel keşif, yalnızlık, rehberlik." },
        { isim: "Wheel of Fortune", anlam: "Şans, döngüler, değişim." },
    ];

    // 3 rastgele kart seç
    const secilenKartlar = [];
    for (let i = 0; i < 3; i++) {
        const rastgeleKart = kartlar[Math.floor(Math.random() * kartlar.length)];
        secilenKartlar.push(rastgeleKart);
    }

    // Kartları HTML olarak döndür
    let sonucHTML = "<h3>Bugün Çektiğiniz Kartlar:</h3><div class='kart-container'>";
    secilenKartlar.forEach(kart => {
        sonucHTML += `
            <div class="kart">
                <h4>${kart.isim}</h4>
                <p>${kart.anlam}</p>
            </div>
        `;
    });
    sonucHTML += "</div>";
    return sonucHTML;
}

// Sayfa yüklendiğinde buton olayını tanımla
document.addEventListener("DOMContentLoaded", function () {
    const buton = document.getElementById("kartCekBtn");
    const sonucAlani = document.getElementById("kartSonucuAlani");

    buton.addEventListener("click", function () {
        sonucAlani.innerHTML = kartSec(); // Kartları seç ve sonucu göster
    });
});


