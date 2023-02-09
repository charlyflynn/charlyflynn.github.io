<svelte:head>
	<title>charlyflynn</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:title" content="charlyflynn" />
	<meta property="og:url" content="https://charlyflynn.github.io" />
	<meta property="og:image" content="https://charlyflynn.github.io/preview.png" />
</svelte:head>

<slot />

<style>
	:root {
		font-family: 'Roboto Mono', monospace;
		--main-bg-color: #f0f9ff;
		--accent-color: #bb6464;
		--highlight-color: #cdb699;
		--text-color: #2c2c2c;

		overflow-y: overlay;
		scroll-behavior: smooth;

		background: linear-gradient(
			#39375b 0vh,
			#745c97 25vh,
			#d597ce 50vh,
			#f5b0cb 95vh,
			skyblue 125vh,
			var(--main-bg-color) 200vh
		);

		color: var(--text-color);
	}
</style>
