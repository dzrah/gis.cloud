<script>
	import Countdown from './countdown.svelte';
	import { db } from '../firebase';
	import { collection, addDoc } from 'firebase/firestore';

	let name = '';
	let email = '';

	const getLocation = () => {
		return new Promise((resolve, reject) => {
			if (!navigator.geolocation) {
				reject(new Error('Geolocation is not supported by your browser'));
			} else {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						resolve({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude
						});
					},
					(error) => reject(error)
				);
			}
		});
	};

	const getCountry = async (latitude, longitude) => {
		const apiKey = 'f172151879664b5f9010b144ecf2dc31'; // Replace with your OpenCage API key
		const response = await fetch(
			`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
		);
		const data = await response.json();
		if (data.results.length > 0) {
			return data.results[0].components.country;
		} else {
			throw new Error('No country found');
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const subscribedAt = new Date();
			const location = await getLocation();
			const country = await getCountry(location.latitude, location.longitude);
			console.log('Submitting:', { name, email, subscribedAt, country });
			await addDoc(collection(db, 'users'), { name, email, subscribedAt, country });
			alert('You have been successfully subscribed');
			name = '';
			email = '';
		} catch (e) {
			console.error('Error adding document:', e);
			alert('Error adding user: ' + e.message);
		}
	};
</script>

<main
	class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-bg-img bg-cover bg-center before:absolute before:inset-0 before:block before:bg-opacity-40 before:bg-gradient-to-t before:from-[#13C2CC] before:to-[#13c3cc00] before:opacity-50 before:content-[''] lg:bg-left-top"
>
	<div
		class="z-20 mb-24 flex w-full flex-col items-start justify-start px-16 lg:mr-64 lg:w-[52rem]"
	>
		<div class="flex h-auto w-[17rem] items-start justify-start lg:w-96">
			<img class="flex items-start justify-start" src="/gis_cloud_logo.svg" alt="" />
		</div>
		<div class="flex w-full">
			<p class="mt-3 text-3xl font-semibold text-white lg:text-5xl">Launching gis.cloud soon</p>
		</div>
		<div class="mt-8 flex w-full flex-col lg:mt-16">
			<div class="flex items-center justify-start">
				<p class="text-1xl mr-5 mt-3 w-full text-white lg:text-2xl">
					Sign up to our newsletter to receive the latest updates
				</p>
			</div>
			<form
				on:submit|preventDefault={handleSubmit}
				class="mt-5 flex w-full flex-col items-start justify-start gap-5 lg:flex-row"
			>
				<div class="relative flex">
					<input
						required
						bind:value={name}
						class="relative h-[2.5rem] w-full rounded-[.3rem] pl-5"
						type="text"
						placeholder="Name"
						id="name"
						size="40"
					/>
				</div>
				<div class="relative flex flex-col lg:flex-row">
					<input
						required
						bind:value={email}
						class="relative h-[2.5rem] w-full rounded-[.3rem] pl-5 lg:rounded-r-[0]"
						type="email"
						placeholder="Email address"
						id="email"
						size="40"
					/>
					<button
						class=" mt-5 flex items-center justify-center rounded-md rounded-l-md bg-gradient-to-l from-[#126FF0] to-[#13C2CC] px-4 py-2 font-semibold uppercase tracking-wide text-white transition-all lg:mt-0 lg:rounded-l-[0]"
						type="submit">Subscribe</button
					>
				</div>
				<!-- <input class="h-8 rounded-[.3rem]" type="submit" value="submit" size="40" /> -->
			</form>
			<Countdown />
		</div>
	</div>
</main>
