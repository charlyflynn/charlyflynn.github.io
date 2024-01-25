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
		/* background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='15' specularConstant='0.5' specularExponent='20' lighting-color='%237957A8' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='88'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='transparent'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%237957a8' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E"), */
		background: linear-gradient(
			#39375b 0vh,
			#745c97 25vh,
			#d597ce 50vh,
			#f5b0cb 85vh,
			#f09f9c,
			#fd9d7f,
			#ffc19f 66%,
			skyblue 76%,
			#748da6 /* var(--main-bg-color) 93% */
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
