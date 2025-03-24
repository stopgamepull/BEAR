const lenis = new Lenis({
	smooth: true,
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.body.style.overflow = "hidden";
lenis.stop();

document.addEventListener("DOMContentLoaded", function () {
	document.body.classList.add("loaded");
});

function copyCa() {
	const ca = "DLEeqAbpN5FEH5WMZkCGRhryG5iLV8X6WYAQwG6pump";
	const caTooltip = document.querySelector(".ca-tooltip");
	navigator.clipboard
		.writeText(ca)
		.then(() => {
			caTooltip.textContent = "COPIED!";
		})
		.catch(() => (caTooltip.textContent = "COPIED!"))
		.finally(() => {
			setTimeout(() => {
				if (window.innerWidth < 768) {
					caTooltip.style.opacity = 0;
				}
				caTooltip.textContent = "COPY ADDRESS";
			}, 2000);
		});
}

document.querySelector(".navbar-ca").addEventListener("click", copyCa);

const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navbar-btn");

function toggleNav() {
	navBtn.classList.toggle("active");
	if (navBtn.classList.contains("active")) {
		navbar.classList.add("active");
		document.body.style.overflow = "hidden";
		lenis.stop();
	} else {
		navbar.classList.remove("active");
		document.body.style.overflow = "";
		lenis.start();
	}
}
navBtn.addEventListener("click", toggleNav);

const beat = document.getElementById("beat");
const wakeUpLayout = document.getElementById("wake-up-fren");
const wakeUpBtn = document.getElementById("wake-up-btn");
const sleepingquak = document.querySelector(".wake-up-img.asleep");
const awakequak = document.querySelector(".wake-up-img.awake");

let revealing = false;

function wakeUp() {
	if (revealing) {
		return;
	}
	sleepingquak.style.display = "none";
	awakequak.style.display = "block";
	revealing = true;
	beat.play();
	setTimeout(() => {
		revealSite();
	}, 500);
}

wakeUpBtn.addEventListener("click", wakeUp);

function revealSite() {
	wakeUpLayout.style.opacity = "0";
	document.body.style.overflow = "";
	lenis.start();
	setTimeout(() => {
		wakeUpLayout.style.display = "none";
	}, 1000);
	const rightScrollText = document.querySelectorAll(".scroll-right");
	const leftScrollText = document.querySelectorAll(".scroll-left");
	rightScrollText.forEach((el) => {
		el.classList.remove("scroll-right");
		void el.offsetHeight;
		el.classList.add("scroll-right");
	});
	leftScrollText.forEach((el) => {
		el.classList.remove("scroll-left");
		void el.offsetHeight;
		el.classList.add("scroll-left");
	});
}

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

function pauseBeat() {
	beat.pause();
	playBtn.style.display = "block";
	pauseBtn.style.display = "none";
}

function playBeat() {
	beat.play();
	playBtn.style.display = "none";
	pauseBtn.style.display = "block";
}

playBtn.addEventListener("click", playBeat);
pauseBtn.addEventListener("click", pauseBeat);

window.addEventListener("resize", function () {
	if (window.innerWidth > 768) {
		navBtn.classList.remove("active");
		navbar.classList.remove("active");
		document.body.style.overflow = "";
		lenis.start();
	}
});

const btn = document.getElementById("back-to-top");
const gallery = document.querySelector(".gallery");

document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					btn.classList.add("active");
				} else {
					btn.classList.remove("active");
				}
			});
		},
		{
			rootMargin: "0px 0px -200px 0px",
		}
	);

	observer.observe(gallery);
});

btn.addEventListener("click", () => {
	// Durasi dalam milidetik (10 detik)
	const duration = 5000;

	// Hitung langkah scroll (per frame)
	const start = window.scrollY; // Posisi awal
	const step = start / (duration / 20); // Scroll setiap 16ms (rata-rata 60fps)

	// Gunakan setInterval untuk animasi manual
	const interval = setInterval(() => {
		const currentPosition = window.scrollY;

		if (currentPosition > 0) {
			window.scrollTo(0, currentPosition - step); // Scroll ke atas sedikit demi sedikit
		} else {
			clearInterval(interval); // Hentikan interval saat sudah di atas
		}
	}, 20); // Jalankan setiap 16ms
});

let colorIndex = 0;
let eyesIndex = 0;
let accessoryIndex = 0;
let footIndex = 0; // Tambahkan index untuk foot

const bodyColors = [
	"./images/pfp-generator/body-colors/1.png",
	"./images/pfp-generator/body-colors/2.png",
	"./images/pfp-generator/body-colors/3.png",
	"./images/pfp-generator/body-colors/4.png",
	"./images/pfp-generator/body-colors/5.png",
];

const eyes = [
	"./images/pfp-generator/eyes/1.png",
	"./images/pfp-generator/eyes/2.png",
	"./images/pfp-generator/eyes/3.png",
	"./images/pfp-generator/eyes/4.png",
	"./images/pfp-generator/eyes/5.png",
];

const foot = [
	"./images/pfp-generator/foot/1.png",
	"./images/pfp-generator/foot/2.png",
	"./images/pfp-generator/foot/3.png",
	"./images/pfp-generator/foot/4.png",
	"./images/pfp-generator/foot/5.png",
	"./images/pfp-generator/foot/6.png",
];

const accessories = [
	"./images/pfp-generator/accessories/1.png",
	"./images/pfp-generator/accessories/2.png",
	"./images/pfp-generator/accessories/3.png",
	"./images/pfp-generator/accessories/4.png",
	"./images/pfp-generator/accessories/5.png",
	"./images/pfp-generator/accessories/6.png",
];

function getRandomElement(array) {
	const num = Math.floor(Math.random() * array.length);
	const item = array[num];
	return {
		num,
		item,
	};
}

const pfpColor = document.getElementById("pfp-color");
const pfpEyes = document.getElementById("pfp-eyes");
const pfpAccessory = document.getElementById("pfp-accessory");
const pfpFoot = document.getElementById("pfp-foot"); // Tambahkan elemen foot

function randomizeBtn() {
	let result = getRandomElement(bodyColors);
	colorIndex = result.num;
	pfpColor.src = result.item;
	document.getElementById("color-choice").textContent = `Color ${
		colorIndex + 1
	}`;

	result = getRandomElement(eyes);
	eyesIndex = result.num;
	pfpEyes.src = result.item;
	document.getElementById("eyes-choice").textContent = `Eyes ${eyesIndex + 1}`;

	result = getRandomElement(foot);
	footIndex = result.num;
	pfpFoot.src = result.item;
	document.getElementById("foot-choice").textContent = `Wear ${footIndex + 1}`;

	result = getRandomElement(accessories);
	accessoryIndex = result.num;
	pfpAccessory.src = result.item;
	document.getElementById("accessory-choice").textContent = `Accessory ${
		accessoryIndex + 1
	}`;
}
document.getElementById("download-pfp").addEventListener("click", async () => {
	try {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const container = document.querySelector(".generator-img-container");
		const images = container.querySelectorAll(".generator-img-el");
		const nameInput = document.getElementById("name-input");
		const nameText = nameInput.value || "";

		const imgWidth = 1000;
		const imgHeight = 1000;
		canvas.width = imgWidth;
		canvas.height = imgHeight;

		// Render background image
		const bgImage = await loadImage(document.getElementById("pfp-bg").src);
		ctx.drawImage(bgImage, 0, 0, imgWidth, imgHeight);

		// Wait for fonts to be ready
		await document.fonts.ready;

		// Render name
		ctx.font = '120px "Vividly", Arial, sans-serif';
		ctx.textAlign = "center";
		ctx.fillStyle = "black";
		ctx.fillText(nameText, canvas.width / 2, imgHeight - 80);

		// Render each additional image
		for (const img of images) {
			if (img.id !== "pfp-bg") {
				try {
					const loadedImg = await loadImage(img.src);
					ctx.drawImage(loadedImg, 0, 0, imgWidth, imgHeight);
				} catch (err) {
					console.error(`Failed to load image: ${img.src}`, err);
				}
			}
		}

		// Trigger download
		const link = document.createElement("a");
		link.download = "BOBU_PFP.png";
		link.href = canvas.toDataURL("image/png");
		link.click();
	} catch (error) {
		console.error("Error during download process:", error);
		alert("An error occurred while downloading. Please try again.");
	}
});

function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = src;
	});
}
const generatorChoice = document.querySelectorAll(".generator-choice-arrow");

generatorChoice.forEach((arrow) => {
	arrow.addEventListener("click", changeChoice);
});

function changeChoice(e) {
	const arrow = e.target.closest(".generator-choice-arrow"); // Pastikan klik bekerja meskipun ada ikon
	if (!arrow) return;

	const parent = arrow.parentElement;
	const textElement = parent.querySelector(".generator-choice-text");
	const text = textElement.textContent;

	const options = {
		Color: { array: bodyColors, indexVar: "colorIndex", img: pfpColor },
		Eyes: { array: eyes, indexVar: "eyesIndex", img: pfpEyes },
		Wear: { array: foot, indexVar: "footIndex", img: pfpFoot }, // Tambahkan untuk Wear
		Accessory: {
			array: accessories,
			indexVar: "accessoryIndex",
			img: pfpAccessory,
		},
	};

	for (const [key, { array, indexVar, img }] of Object.entries(options)) {
		if (text.includes(key)) {
			if (window[indexVar] === undefined) {
				window[indexVar] = 0;
			}

			// Deteksi apakah tombol panah kiri atau kanan ditekan
			if (arrow.classList.contains("choice-left")) {
				window[indexVar] = (window[indexVar] - 1 + array.length) % array.length;
			} else if (arrow.classList.contains("choice-right")) {
				window[indexVar] = (window[indexVar] + 1) % array.length;
			}

			// Update gambar dan teks pilihan
			img.src = array[window[indexVar]];
			textElement.textContent = `${key} ${window[indexVar] + 1}`;
			break;
		}
	}
}

generatorChoice.forEach((e) => e.addEventListener("click", changeChoice));

function scrollToGenerator() {
	const generator = document.getElementById("generator");
	const position = generator.getBoundingClientRect().top + window.scrollY - 100;
	if (window.innerWidth <= 768) {
		toggleNav();
	}

	lenis.scrollTo(position);
}
