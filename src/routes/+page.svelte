<script>
	import Countdown from './countdown.svelte';
</script>

<main
	class="bg-bg-img flex h-screen max-h-screen flex-col justify-start bg-cover bg-no-repeat pl-48 pt-40 before:absolute before:inset-0 before:block before:bg-opacity-40 before:bg-gradient-to-t before:from-[#13C2CC] before:to-[#13c3cc00] before:opacity-50 before:content-['']"
>
	<div class="z-20 flex w-[52rem] flex-col">
		<div class="flex h-auto w-96 items-center justify-center">
			<img src="/gis_cloud_logo.svg" alt="" />
		</div>
		<div>
			<p class="mt-3 text-5xl font-semibold text-white">Launching gis.cloud soon</p>
		</div>
		<div class="mt-24 flex w-[59rem] flex-col">
			<div class="flex items-center justify-start">
				<p class="mt-3 text-3xl text-white">
					Sign up to our newsletter to receive the latest updates
				</p>
			</div>
			<form class="mt-5 flex w-auto flex-row items-center gap-5">
				<div class="flex">
					<input
						class="h-[2.5rem] rounded-[.3rem] placeholder:ml-5"
						type="text"
						placeholder="Name"
						id="name"
						size="40"
					/>
				</div>
				<div class="flex flex-row">
					<input
						class="h-[2.5rem] rounded-[.3rem] rounded-r-[0]"
						type="text"
						placeholder="Email address"
						id="email address"
						size="40"
					/>
					<button
						class="flex items-center justify-center rounded-md rounded-l-[0] bg-gradient-to-l from-[#126FF0] to-[#13C2CC] px-4 py-2 font-semibold uppercase tracking-wide text-white"
						>Subscribe</button
					>
				</div>
				<!-- <input class="h-8 rounded-[.3rem]" type="submit" value="submit" size="40" /> -->
			</form>
			<Countdown />
		</div>
	</div>
</main>
