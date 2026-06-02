/* Hot Pizza — script.js */

document.addEventListener('DOMContentLoaded', function () {

  /* --- ФІЛЬТР КАТЕГОРІЙ МЕНЮ --- */
  var catBtns = document.querySelectorAll('.hp-cat-btn');
  var menuItems = document.querySelectorAll('.menu-item');

  if (catBtns.length) {
    catBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = this.getAttribute('data-cat');
        catBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        menuItems.forEach(function (item) {
          item.style.display = (cat === 'all' || item.getAttribute('data-cat') === cat) ? '' : 'none';
        });
      });
    });
  }

  /* --- ФОРМА ЗВОРОТНОГО ЗВ'ЯЗКУ --- */
  var form = document.getElementById('contactForm');
  var successMsg = document.getElementById('successMsg');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      /* Збираємо дані всіх полів */
      var data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = value;
      });

      /* Виводимо в консоль для перевірки (F12 → Console) */
      console.log('Дані форми:', data);

      /* Показуємо повідомлення про успіх */
      form.reset();
      form.classList.remove('was-validated');
      if (successMsg) {
        successMsg.classList.remove('d-none');
        setTimeout(function () {
          successMsg.classList.add('d-none');
        }, 5000);
      }
    });
  }

});
