<script lang="ts">
	import Clouds from '../components/Clouds.svelte';
	import Youtube from 'svelte-youtube-embed';
	// import Arrow from '../components/Arrow.svelte';
	import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />
<div id="about" class="fixed page">
	<Clouds />
	<div class="flex content">
		<h1>hi.</h1>
		<p>my name is Charly.</p>
		<p>
			i'm a <a class="inline" href="#tech">software engineer</a>
			and
			<a class="inline" href="#music">musician</a> based in London.
		</p>
		<div class="nav-container">
			<a class="link" href="https://github.com/charlyflynn" target="_blank" rel="noreferrer"
				>⧉ github</a
			>
			<a class="link" href="https://www.linkedin.com/in/flynnch" target="_blank" rel="noreferrer">
				⧉ linkedin
			</a>
			<a class="link" href="https://soundcloud.com/charlieflynn" target="_blank" rel="noreferrer">
				⧉ soundcloud
			</a>
		</div>
	</div>
	<!-- <Arrow direction="down" href="#projects" /> -->
</div>
<div id="tech" class="variable page">
	<!-- <Arrow direction="up" href="#about" /> -->
	<Clouds offset={15} />
	<div class="flex content">
		<h2>tech.</h2>
		<p>
			I am a full stack software engineer, working predominantly with javascript/typescript,
			html/css, react, node.js and a variety of related technologies.
		</p>
		<p>
			I spent 4 years working with IBM iX design consultancy, building bespoke websites for a
			diverse range of clients. Following IBM, I moved to <a
				class="inline"
				href="https://www.wavepaths.com"
				target="_blank"
				rel="noreferrer"
			>
				⧉wavepaths
			</a> as a senior full-stack engineer, working primarily on user interfaces and their proprietary
			music generation systems.
		</p>
		<p>
			Currently I work as a freelance web developer, covering everything from bespoke builds, to
			maintenance, to working with website builder systems.
		</p>
		<h2>current projects:</h2>
	</div>
	<div id="projects">
		<!-- <a
				class="link project"
				href="https://orii-community.netlify.app"
				target="_blank"
				rel="noreferrer"
				style="text-align: left"
			>
				<h3>⧉ Orii Community</h3>
				<p>
					A website for Orii Community, a collective of instrumentalist, singers, rappers and
					artists creating live, improvised music in London
				</p>
				<p><i>(A work-in-progress commission. react/next.js frontend and sanity.io CMS)</i></p>
			</a> -->
		<a
			class="link project"
			href="https://lotusnova.org"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Lotus Nova</h3>
			<p>A landing page for the Lotus Nova event organisers and artist talent platform .</p>
			<p><i>(react/next.js frontend and sanity.io CMS)</i></p>
		</a>
		<a
			class="link project"
			href="https://www.rebekahreidviolin.co.uk/"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Rebekah Reid // TÄPP Collective</h3>
			<p>A site for violinist, band leader and composer Bekah Reid</p>
			<p><i>(maintenance of a wix site)</i></p>
		</a>
		<a
			class="link project"
			href="https://www.deptfordx.org"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Deptford X</h3>
			<p>A website for Deptford x festival of visual arts.</p>
			<p><i>(maintenance of wordpress site)</i></p>
		</a>
		<a
			class="link project"
			href="https://acordes.netlify.app"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ acordes</h3>
			<p>
				A real-time, browser-based chord analyser for keys.<br />usable with both MIDI keyboards as
				well as point and click.
			</p>
			<p><i>(a work-in-progress pet project)</i></p>
		</a>
		<a
			class="link project"
			href="https://charliyoga.com"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Charli Livingstone Yoga</h3>
			<p>Professional website for yoga instructor Charli Livingstone.</p>
			<p><i>(a squarespace commission)</i></p>
		</a>
	</div>
	<!-- <Arrow direction="down" href="#music" /> -->
</div>
<div id="music" class="variable page">
	<!-- <Arrow direction="up" href="#about" /> -->
	<Clouds offset={32} />
	<div class="flex content">
		<h2>music.</h2>
		<p>
			I am a multi-instrumentalist, composer and producer. You can find me exploring a wide range of
			genres including jazz, electronic, folk and most things in-between.
		</p>
		<p>
			As a session musician, I have worked closely with projects such as Orii Community, Dirty Nice,
			Zami Yazeed, Millie Gibson, EllC, Rebekah Reid and TÄPP Collective. I have recorded live
			sessions for BBC Introducing at Maida Vale Studios and for Woodburner music at Dalston Curve
			Garden, as well as having the opportunity to record and perform at places such as Total
			Refreshment Centre, Pizza Express Soho, House of Koko, Servant Jazz Quarters, London Jazz
			festival and Peckham festival.
		</p>
		<div class="youtube-container">
			<Youtube id="6v9Zjigammk" />
		</div>
		<p>
			My compositions have found their way into podcasts and exhibitions, most recently scoring the
			exhibition and short film <a
				class="inline"
				href="https://www.staffordshirest.com/thestore"
				target="_blank"
				rel="noreferrer"><i>⧉The Store</i></a
			> by Tilly Wace and Kaia Goodenough, held at Staffordshire Street gallery in Peckham.
		</p>
		<p>
			Also held at the gallery is <a
				class="inline"
				href="https://www.instagram.com/donut__jam/"
				target="_blank"
				rel="noreferrer"><i>⧉Donut Jam</i></a
			>, a monthly evening of sonic and visual collaboration and experimentation that I curate.
			Bands from London's music scene are invited to perform in the round to a backdrop of
			interactive visual projection, followed by an open jam featuring London's most talented.
		</p>
		<p>
			You can otherwise find me playing bass with my band <a
				class="inline"
				href="https://www.instagram.com/pangaea.band/"
				target="_blank"
				rel="noreferrer">⧉pangaea</a
			>, or perusing London's offering of gigs, jams and sessions.
		</p>
	</div>
</div>

<style lang="scss">
	.page {
		height: 100vh;
		height: 100svh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		box-sizing: border-box;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		&.fixed {
			height: 100vh;
		}
		&.variable {
			padding-top: 250px;
			padding-bottom: 250px;
			height: 100%;
			min-height: 100vh;
		}
	}

	.content {
		box-sizing: border-box;
		padding: 3em;
		width: 100%;
	}

	.flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#projects {
		box-sizing: border-box;
		display: flex;
		align-self: center;
		gap: 1em;
		padding: 0 3em;
		overflow-x: auto;
		width: 100%;
		padding-bottom: 1.5em;
	}

	.project {
		min-width: 250px;
		width: 400px;
	}

	.nav-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		/* align-items: center; */
		width: 100%;
		gap: 1em;
		padding: 1.5em 0em;
	}

	.nav-container a {
		min-width: 180px;
	}
	@media (max-width: 450px) {
		.nav-container {
			flex-direction: column;
			align-items: center;
		}
	}
	.link {
		box-sizing: border-box;
		border-radius: 5px;
		padding: 0.8rem 1.5em;

		text-align: center;
		backdrop-filter: blur(5px);
		background: rgba(255, 255, 240, 0.1);
		filter: brightness(1.1);

		text-decoration: none;
		color: inherit;
	}

	.youtube-container {
		max-width: 1080px;
		width: 100%;
		padding: 3rem 0;
	}

	h1 {
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1.4rem;
	}

	h3 {
		font-size: 1.2rem;
	}

	p {
		font-size: 1rem;
		max-width: 1080px;
	}

	.inline {
		color: inherit;
	}
</style>
