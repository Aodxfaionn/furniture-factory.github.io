const btnSend = document.querySelector(".contacts__adress--btn");
const personName = document.querySelector(".field--name");
const modal = document.querySelector(".b-popup");
const textModal = document.querySelector(".b-popup-content");
const btnClose = document.querySelector(".close");

btnSend.addEventListener("click", function (e) {
  if (personName.value == '') {
    textModal.innerHTML = `Указаны не все данные или выбран неверный формат.`;
  } else {
  textModal.innerHTML = `${personName.value}, ваша заявка отправлена. <p>Менеджер свяжется в указанное время</p>.`;
  }
  modal.style.display = "block";
  e.preventDefault();
});

btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
