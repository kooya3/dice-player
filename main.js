const audio = new Audio('/home/elyees/dice-player/2b/dice-player/music/Chrishan - Sin City.mp3" type="audio/mp3">');
const btn = document.querySelector('#play');

btn.addEventListener('click', () => {
  audio.play();
});

var boo = document.getElementById('player');
boo.pause();  //just bind play/pause to some onclick events on your page
boo.play();