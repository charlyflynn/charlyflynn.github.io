<script lang="ts">
	import Clouds from '../components/Clouds.svelte';
	// import Arrow from '../components/Arrow.svelte';
	import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />
<div id="about" class="page">
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
<div id="tech" class="page">
	<!-- <Arrow direction="up" href="#about" /> -->
	<Clouds offset={15} />
	<div class="flex content">
		<h2>tech.</h2>
		<p>
			I am a full stack software engineer, working predominantly with javascript, html, css,
			typescript, react, node.js and a plethora of related technologies.
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
			</a> as a senior full-stack engineer, working on user interfaces and proprietary music generation
			systems.
		</p>
		<p>I am currently working as a freelance web developer.</p>
		<h2>current projects:</h2>
		<div id="projects">
			<a
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
				<p>A work-in-progress commission.</p>
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
					A real-time, browser-based chord analyser for piano/keys.<br />usable with both MIDI
					keyboards as well as point and click.
				</p>
				<p>A work-in-progress pet project.</p>
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
				<p>A live squarespace commission.</p>
			</a>
		</div>
	</div>
	<!-- <Arrow direction="down" href="#music" /> -->
</div>
<div id="music" class="page">
	<!-- <Arrow direction="up" href="#about" /> -->
	<Clouds offset={32} />
	<div class="flex content">
		<h2>music.</h2>
		<p>I am a multi-instrumentalist, composer and producer.</p>
		<p>
			As a session musician, I have recorded at BBC Maida Vale Studios, Total Refreshment Centre and
			Brighton Road Recording Studios for artists/projects such as Dirty Nice, Orii Community and
			Zami Yazeed.
		</p>
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
			You can otherwise find me playing bass with my band <a
				class="inline"
				href="https://www.instagram.com/pangaea.band/"
				target="_blank"
				rel="noreferrer">⧉pangaea</a
			>, or perusing London's offering of gigs and jams.
		</p>
	</div>
</div>

<style>
	.page {
		width: 100vw;
		height: 100vh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		box-sizing: border-box;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
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
		flex-grow: 0;
		flex-direction: row;
		gap: 1em;
		padding: 0 3em;
		overflow-x: scroll;
		width: 100vw;
	}

	.project {
		min-width: 15em;
		width: 25em;
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
	}

	.inline {
		color: inherit;
	}
</style>
