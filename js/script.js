var link = document.querySelector(".contacts-link");
var popup = document.querySelector(".modal-contacts");
var close = popup.querySelector(".contacts-modal-close");
var form = popup.querySelector(".feedback-form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email]");
var userMessage = popup.querySelector("[name=mail-content]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".map-modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });

var myMap;

ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [55.686980, 37.529654],
    zoom: 15
    }, {
    searchControlProvider: 'yandex#search'
  }),
  myMap.geoObjects
    .add(new ymaps.Placemark([55.686980, 37.529654], {
      balloonContent: 'цвет <strong>носика Гены</strong>',
      iconCaption: 'улица Строителей, 15'
    }, {
    preset: 'islands#redDotIconWithCaption'
  }))
}