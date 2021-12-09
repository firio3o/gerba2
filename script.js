
// Code for spin
const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.button');
const arrow = document.querySelector('.pin');

let deg = 0;


startButton.onclick = function () {
	deg = Math.floor(5000 + Math.random() * 5000);
	wheel.style.transition = 'all 10s ease-out';
	wheel.style.transform = `rotate(${deg}deg)`;
	wheel.classList.add('blur');
	vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
        vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
         .then(data => console.log(data.result))
         .catch(error => console.log(error));
            }

wheel.addEventListener('transitionend', () => {
	wheel.classList.remove('blur')
	wheel.style.transition = 'none';
	const actualDeg = deg % 360;
	wheel.style.transform = `rotate(${actualDeg}deg)`;
	arrow.classList.add('bounce')
});


//let audio = new Audio('tick.mp3')

//function playSound()
//{
//        audio.currentTime = 0;
//       audio.play();
//        audio.loop = true;
//}

//function stopSound()
//{
//	audio.pause();
//}
