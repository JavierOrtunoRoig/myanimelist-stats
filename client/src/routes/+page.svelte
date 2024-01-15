<script>
	import Spinner from '../components/Spinner.svelte';
	import Stats from '../components/Stats.svelte';

	let search = {
		value: '',
		waiting: false
	};
	let stats = null;

	// Regex to validate if url is entired: https://myanimelist.net/animelist/JaViMaTaGiRi?status=1
	const regex = new RegExp(/^(https:\/\/myanimelist.net\/animelist\/)([a-zA-Z0-9]+)/);

	const handleSearch = () => {
		if (!regex.test(search.value)) return;
		search.waiting = true;
		fetch(`${window.location.href}api?anime=${search.value}`)
			.then((res) => res.json())
			.then((data) => {
				stats = data;
				// get actual date with format: dd/mm/yyyy - hh:mm
				const date = new Date().toLocaleString('es-ES', {
					day: 'numeric',
					month: 'numeric',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric'
				});
				const savedStats = JSON.parse(localStorage.getItem('stats')) || [];
				savedStats.push({stats, date});
				localStorage.setItem('stats', JSON.stringify(savedStats));
				search.waiting = false;
			});
	};

</script>

<section>
	<h1>AnimeList Stats</h1>

	<div class="search-container">
		<label for="search">Your myanimelist url: </label>
		<div style="display: flex; gap: 5px;">
			<input
				type="text"
				name="search"
				placeholder="https://myanimelist.net/animelist/username"
				bind:value={search.value}
			/>
			<button on:click={handleSearch}>Search</button>
		</div>
	</div>

	{#if search.waiting}
		<div class="spinner">
			<Spinner />
		</div>
	{/if}

	{#if stats && !search.waiting}
		<div class="stats-container">
			<Stats {stats} section={1} />
			<Stats {stats} section={3} />
			<!-- <Stats {stats} section={4} /> -->
			<Stats {stats} section={6} />
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 80vh;
	}

	h1 {
		width: 100%;
		font-size: 4rem;
	}

	.search-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		font-size: 1.5rem;
	}

	.search-container input {
		height: 3rem;
		width: 100%;
		border-radius: 0.5rem;
		color: black;
	}

	button {
		height: 3rem;
		width: 10rem;
		border-radius: 0.5rem;
		border-color: #f5f5f5;
		border-width: 1px;
	}

	.spinner {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 3;
	}

	.stats-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		width: 90%;
		padding: 50px;
	}
</style>
