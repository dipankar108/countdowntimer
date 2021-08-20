const endDate = '1 jan 2022';
const dis_days = document.querySelector('#days');
const dis_hours = document.querySelector('#hours');
const dis_minutes = document.querySelector('#minutes');
const dis_seconds = document.querySelector('#seconds');
function countdown() {
	const endDateTime = new Date(endDate);
	const currDate = new Date();
	const totalseconds = (endDateTime - currDate) / 1000;
	const days = Math.floor(totalseconds / 3600 / 24);
	const hours = Math.floor((totalseconds / 3600) % 24);
	const minutes = Math.floor((totalseconds / 60) % 60);
	const seconds = Math.floor(totalseconds % 60);
	dis_days.innerHTML = days;
	dis_hours.innerHTML = hours;
	dis_minutes.innerHTML = minutes;

	seconds < 10 ? (dis_seconds.innerHTML = '0' + seconds) : (dis_seconds.innerHTML = seconds);
}
countdown();
setInterval(countdown, 1000);
