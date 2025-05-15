document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('randevuForm');
  const tablo = document.querySelector('#randevuTablosu tbody');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Formdan verileri al
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const fal = document.getElementById('fal').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Yeni satır oluştur ve tabloya ekle
    const newRow = tablo.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${fal}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td><button class="sil-btn">Sil</button></td>
    `;

    // Sil butonuna tıklandığında satırı sil
    const deleteButton = newRow.querySelector('.sil-btn');
    deleteButton.addEventListener('click', function() {
      tablo.deleteRow(newRow.rowIndex - 1); // Satırı sil
    });

    // Formu temizle
    form.reset();
  });
});
