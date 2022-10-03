const btnSend = document.querySelector(".contacts__adress--btn");
const personName = document.querySelector(".field--name").value;
const modal = document.querySelector(".b-popup");
const textModal = document.querySelector(".b-popup-content");
const btnClose = document.querySelector(".close");

btnSend.addEventListener("click", function (e) {
  textModal.innerHTML = `${personName}, ваша заявка отправлена. Менеджер свяжется в указанное время`;
  e.preventDefault();
  modal.style.display = "block";
});

btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function () {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
