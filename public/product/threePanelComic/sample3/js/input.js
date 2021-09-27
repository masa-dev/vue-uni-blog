const flickSelect = document.getElementById("flick-select");

flickSelect.addEventListener("change", function () {
  flicking.moveTo(parseInt(flickSelect.value) - 1)
})
