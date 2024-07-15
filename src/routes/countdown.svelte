<script>
	import { onDestroy, onMount } from 'svelte';

	let days = '00',
		hours = '00',
		minutes = '00',
		seconds = '00';

	const launchDate = new Date('December 2 2024 12:00:00').getTime();

	function updateCountDown() {
		const currentTime = new Date().getTime();
		const diff = launchDate - currentTime;

		days = Math.floor(diff / 1000 / 60 / 60 / 24);
		hours = Math.floor(diff / 1000 / 60 / 60) % 24;
		minutes = Math.floor(diff / 1000 / 60) % 60;
		seconds = Math.floor(diff / 1000) % 60;
	}

	const interval = setInterval(updateCountDown, 1000);
	onMount(() => {
		updateCountDown();
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="flex w-full items-center justify-start">
	<div class="mt-9 flex items-center justify-start gap-4 text-3xl font-semibold text-white">
		<div class="flex-1 flex-col items-center justify-center">
			<p class="text-[0.8rem]">Days</p>
			<div class="flex items-center justify-center gap-2">
				<h2 id="days">{days}</h2>
				<p>:</p>
			</div>
		</div>

		<div class="flex-1 flex-col items-center justify-center">
			<p class="text-[0.8rem]">Hours</p>
			<div class="flex items-center justify-center gap-3">
				<h2 id="hours">{hours}</h2>
				<p>:</p>
			</div>
		</div>

		<div class="flex-1 flex-col items-center justify-center">
			<p class="text-[0.8rem]">Minutes</p>
			<div class="flex items-center justify-center gap-3">
				<h2 id="minutes">{minutes}</h2>
				<p>:</p>
			</div>
		</div>

		<div class="flex-1 flex-col items-center justify-center">
			<p class="text-[0.8rem]">Seconds</p>
			<div class="flex items-center justify-center gap-0">
				<h2 id="seconds">{seconds}</h2>
			</div>
		</div>
	</div>
	<!-- <div class="ml-9"><h2 id="days-t">days</h2></div> -->
</div>
