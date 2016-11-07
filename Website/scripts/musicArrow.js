const musicNext = document.getElementById("musicNext");
const musicPrev = document.getElementById("musicPrev");

const musiciFrame1 = document.getElementById("musiciFrame1");
const musiciFrame2 = document.getElementById("musiciFrame2");
const musiciFrame3 = document.getElementById("musiciFrame3");

const musicInfo1 = document.getElementById("musicInfo1");
const musicInfo2 = document.getElementById("musicInfo2");
const musicInfo3 = document.getElementById("musicInfo3");

let musicArray = [];
let musicInfoArray = [];
let index = [0, 1, 2];


musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:6dTjFmqFb2KHZy9f6VPwce");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:6Nh1LYRncSJRSMhgh6YlBP");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:1QvfyT3hSLYXMHw1u1Xo5F");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:2MwC68GbWwHmih1Qo4KuVV");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:7KQNQyDeMzh9IApGLInOM4");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:4j46yi8Ah1NUPgtdS9DXY8");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:4pLZHBAj0aSGOSLcSaPGJv");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:0doGJF34mnfeu99orScola");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:1MdzdNePTzybKbsCuZnDFW");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:4O4SRDt3DIcrlm40ddEbxj");
musicArray.push("https://embed.spotify.com/?uri=spotify:user:andreskr:playlist:5MJCuU8WpPqAiD0ujhuUdB");

musicInfoArray.push("Swing < 110");
musicInfoArray.push("Swing 111-120");
musicInfoArray.push("Swing 121-130");
musicInfoArray.push("Swing 131-140");
musicInfoArray.push("Swing 141-150");
musicInfoArray.push("Swing 151-160");
musicInfoArray.push("Swing 161-170");
musicInfoArray.push("Swing 171-180");
musicInfoArray.push("Swing 181-190");
musicInfoArray.push("Swing 191-200");
musicInfoArray.push("Swing > 200");

musicPrev.addEventListener("click", function() {
	for (let x = 0; x< 3; x++) {
		index[x]--;
		if (index[x] < 0) {
		index[x] = musicArray.length-1;
		}
	}
	changePandArray();
});


musicNext.addEventListener("click", function() {
	for (let x = 0; x< 3; x++) {
		index[x]++;
		if (index[x] > musicArray.length - 1) {
		index[x] = 0;
		}
	}
	changePandArray();
});

function changePandArray() {
	musiciFrame1.src = musicArray[index[0]];
	musicInfo1.innerHTML = musicInfoArray[index[0]];
	musiciFrame2.src = musicArray[index[1]];
	musicInfo2.innerHTML = musicInfoArray[index[1]];
	musiciFrame3.src = musicArray[index[2]];
	musicInfo3.innerHTML = musicInfoArray[index[2]];
}