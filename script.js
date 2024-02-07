const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('may 25, 2024 17:30:00').getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
          distance = countDown - now;
        document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);
    }, second);
/*screen.orientation.onchange = function () {
  console.log(screen.orientation.type + " W: " +screen.width + " H: " +screen.height);
}
*/
function reproducir() {
  let audio=document.getElementById("musica");
  audio.play();
  document.getElementById("muteado").classList.remove("show");
  document.getElementById("muteado").classList.add("noShow");
  document.getElementById("sonido").classList.remove("noShow");
  document.getElementById("sonido").classList.add("show");
}
function pausar() {
  let audio=document.getElementById("musica");
  audio.pause();
  document.getElementById("sonido").classList.remove("show");
  document.getElementById("sonido").classList.add("noShow");
  document.getElementById("muteado").classList.remove("noShow");
  document.getElementById("muteado").classList.add("show");
}