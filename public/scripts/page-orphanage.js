const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-14.7865571,-39.2671589], 16)

// Create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map)

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// Create and add marker
L
.marker([-14.7865571,-39.2671589], {icon})
.addTo(map)

/* Image Gallery */

function selectImage(event) {
  const button = event.currentTarget

  // Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove(".active")
  }

  // Selecionar a imagem clicada

  // Atualizar o container de imagem

  // Adicionar a class .active para este botão
}

