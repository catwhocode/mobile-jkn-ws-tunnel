<script>
	const endpoints = [
		['/auth/token', 'Mendapakan token'],
		['/antre/buat', 'Ambil antrean'],
		['/antre/status', 'Cek status antrean'],
		['/antre/sisa', 'Cek sisa antrean peserta'],
		['/antre/batal', 'Batal antrean'],
		['/antre/checkin', 'Check in'],
		['/antre/pasien', 'Kirim data pasien baru'],
		['/operasi/faskes', 'Jadwal operasi faskes'],
		['/operasi/pasien', 'Jadwal operasi pasien']
	];
</script>

<svelte:head>
	<title>WS Mobile JKN - SSEC Lubuklinggau</title>
	<meta
		name="description"
		content="Web Service Mobile JKN Klinik Utama Mata Simapari Sriwijaya Eye Centre Lubuklinggau"
	/>
</svelte:head>

<header>
	<h1>Web Service Mobile JKN</h1>
	<h2>Klinik Utama Mata Silampari Sriwijaya Eye Centre Lubuklinggau</h2>
</header>

<main>
	<ul>
		{#each endpoints as [href, text]}
			<li><a {href} data-sveltekit-reload>{href}</a> - {text}</li>
		{/each}
	</ul>
</main>

<footer>
	<p>
		&copy;2022 Made by <a href="https://ssec.co.id" target="__blank" rel="noreferrer">
			Silampari Sriwijaya Eye Centre Lubuklinggau
		</a>
	</p>
</footer>
