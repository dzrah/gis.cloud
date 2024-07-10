<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const days = document.getElementById('days');
		const hours = document.getElementById('hours');
		const minutes = document.getElementById('minutes');
		const seconds = document.getElementById('seconds');
		const days_t = document.getElementById('days-t');

		const launchDate = new Date('July 29 2024 12:00:00');

		function updateCountDown() {
			const currentTime = new Date();
			const diff = launchDate - currentTime;

			const d = Math.floor(diff / 1000 / 60 / 60 / 24);
			const h = Math.floor(diff / 1000 / 60 / 60) % 24;
			const m = Math.floor(diff / 1000 / 60) % 60;
			const s = Math.floor(diff / 1000) % 60;

			days.innerHTML = d;
			hours.innerHTML = h < 10 ? '0' + h : h;
			minutes.innerHTML = m < 10 ? '0' + m : m;
			seconds.innerHTML = s < 10 ? '0' + s : s;
			days_t.innerHTML = d;
		}

		setInterval(updateCountDown, 1000);
	});
</script>

<div class="flex items-center justify-start">
	<div class="mt-9 flex items-center justify-start gap-2 text-3xl font-semibold text-white">
		<div class="g flex flex-col items-center justify-center">
			<div class="flex items-center justify-center gap-2">
				<h2 id="days">00</h2>
				<p>:</p>
			</div>
			<p class="text-[0.8rem]">Days</p>
		</div>
		<div class="flex items-center justify-center gap-2">
			<h2 id="hours">00</h2>
			<p>:</p>
		</div>
		<div class="flex items-center justify-center gap-2">
			<h2 id="minutes">00</h2>
			<p>:</p>
		</div>
		<div class="flex items-center justify-center gap-2">
			<h2 id="seconds">00</h2>
		</div>
	</div>
	<!-- <div class="ml-9"><h2 id="days-t">days</h2></div> -->
</div>
