<script>
	import Countdown from './countdown.svelte';
	import { db } from '../firebase';
	import { collection, addDoc } from 'firebase/firestore';

	let name = '';
	let email = '';

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			console.log('Submitting:', { name, email });
			await addDoc(collection(db, 'users'), { name, email });
			alert('User added successfully');
			name = '';
			email = '';
		} catch (e) {
			console.error('Error adding document:', e);
			alert('Error adding user: ' + e.message);
		}
	};
</script>

<main
	class="flex h-screen max-h-screen flex-col justify-start overflow-hidden bg-bg-img bg-cover bg-no-repeat pl-12 pt-32 before:absolute before:inset-0 before:block before:bg-opacity-40 before:bg-gradient-to-t before:from-[#13C2CC] before:to-[#13c3cc00] before:opacity-50 before:content-[''] lg:pl-48 lg:pt-40"
>
	<div class="z-20 flex w-full flex-col lg:w-[52rem]">
		<div class="flex h-auto w-[14rem] items-center justify-center lg:w-96">
			<img src="/gis_cloud_logo.svg" alt="" />
		</div>
		<div>
			<p class="mt-3 text-3xl font-semibold text-white lg:text-5xl">Launching gis.cloud soon</p>
		</div>
		<div class="mt-16 flex w-full flex-col lg:w-[59rem]">
			<div class="flex items-center justify-start">
				<p class="text-1xl mr-5 mt-3 w-full text-white lg:text-3xl">
					Sign up to our newsletter to receive the latest updates
				</p>
			</div>
			<form
				on:submit|preventDefault={handleSubmit}
				class="mt-5 flex w-full flex-col items-start justify-start gap-5 lg:flex-row"
			>
				<div class="flex">
					<input
						required
						bind:value={name}
						class="h-[2.5rem] w-full rounded-[.3rem] placeholder:ml-5"
						type="text"
						placeholder="Name"
						id="name"
						size="40"
					/>
				</div>
				<div class="flex flex-col lg:flex-row">
					<input
						required
						bind:value={email}
						class="h-[2.5rem] rounded-[.3rem] rounded-r-[0]"
						type="email"
						placeholder="Email address"
						id="email"
						size="40"
					/>
					<button
						class="mt-5 flex items-center justify-center rounded-md rounded-l-md bg-gradient-to-l from-[#126FF0] to-[#13C2CC] px-4 py-2 font-semibold uppercase tracking-wide text-white lg:mt-0 lg:rounded-l-[0]"
						type="submit">Subscribe</button
					>
				</div>
				<!-- <input class="h-8 rounded-[.3rem]" type="submit" value="submit" size="40" /> -->
			</form>
			<Countdown />
		</div>
	</div>
</main>
