<slot />

<style>
	:root {
		font-family: 'Roboto Mono', monospace;
		--main-bg-color: #f0f9ff;
		--accent-color: #bb6464;
		--highlight-color: #cdb699;
		--text-color: #2c2c2c;
		--link-color: #642b6b;

		overflow-y: overlay;
		scroll-behavior: smooth;

		color-scheme: dark;
		color: var(--text-color);
		font-size: 15px;

		/* new 3 page bg  */
		background: linear-gradient(
			#39375b 0vh,
			#745c97 25vh,
			#d597ce 50vh,
			#f5b0cb 85vh,
			#f09f9c,
			#fd9d7f,
			#ffc19f 66%,
			skyblue 76%,
			var(--main-bg-color) 93%
		);
		/* bg for 3 pages  */
		/* background: linear-gradient(
			#39375b 0vh,
			#745c97 37.5vh,
			#d597ce 112.5vh,
			#f5b0cb 142.5vh,
			skyblue 187.5vh,
			var(--main-bg-color) 300vh
		); */
	}
</style>
