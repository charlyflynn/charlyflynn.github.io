<script lang="ts">
	import Clouds from '../components/Clouds.svelte';
	import Arrow from '../components/Arrow.svelte';
	import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />
<div id="about" class="page">
	<Clouds />
	<div class="content">
		<h1>hi.</h1>
		<p>my name is Charly.</p>
		<p>
			i'm a <a
				class="inline"
				href="https://www.linkedin.com/in/flynnch"
				target="_blank"
				rel="noreferrer">software engineer</a
			>
			and
			<a class="inline" href="https://www.linkedin.com/in/flynnch" target="_blank" rel="noreferrer"
				>musician</a
			> based in London.
		</p>
		<div class="nav-container">
			<a class="link" href="https://github.com/charlyflynn" target="_blank" rel="noreferrer"
				>⧉ github</a
			>
			<a class="link" href="https://www.linkedin.com/in/flynnch" target="_blank" rel="noreferrer">
				⧉ linkedin
			</a>
		</div>
	</div>
	<Arrow direction="down" href="#projects" />
</div>
<div id="projects" class="page">
	<Arrow direction="up" href="#about" />
	<Clouds offset={15} />
	<div class="flex content">
		<h2>projects.</h2>
		<a
			class="link"
			href="https://acordes.netlify.app"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ acordes</h3>
			<p>
				a real-time, browser-based chord analyser for piano/keys.<br />usable with both MIDI
				keyboards as well as point and click.
			</p>
			<p>work in progress.</p>
		</a>
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
		padding: 6em;
	}

	.flex {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.nav-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 2em;
		margin: 15px 0;
	}
	@media (max-width: 450px) {
		.nav-container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	.link {
		box-sizing: border-box;
		padding: 0.8rem 2em;
		min-width: 180px;
		text-align: center;
		backdrop-filter: blur(5px);
		border-radius: 5px;

		text-decoration: none;
		color: inherit;

		background: rgba(255, 255, 255, 0.1);
	}

	h1 {
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1.3rem;
	}

	h3 {
		font-size: 1.2rem;
	}

	p {
		font-size: 1rem;
	}

	.inline {
		text-decoration: none;
		color: var(--text-color);
	}
</style>
