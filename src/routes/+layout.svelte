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
