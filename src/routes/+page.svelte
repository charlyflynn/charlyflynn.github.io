<script lang="ts">
	import Clouds from '../components/Clouds.svelte';
	import Arrow from '../components/Arrow.svelte';
</script>

<div class="hello page" id="hello">
	<Clouds />
	<div>
		<h1>hello &#x1F44B;</h1>
		<p>my name is Charly.</p>
		<p>i'm a software engineer and musician based in London.</p>
		<div class="nav-container">
			<a class="link" href="https://github.com/charlyflynn" target="_blank" rel="noreferrer"
				>- github</a
			>
			<a class="link" href="https://www.linkedin.com/in/flynnch" target="_blank" rel="noreferrer">
				- linkedin
			</a>
		</div>
	</div>
	<Arrow direction="down" href="#projects" />
</div>
<div class="projects page" id="projects">
	<Clouds />
	<Arrow direction="up" href="#hello" />
	<div class="content">
		<h1>projects</h1>
		<a
			class="link"
			href="https://acordes.netlify.app"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h2>acordes</h2>
			<p>a real-time, browser based chord analyser for piano/keys</p>
			<p>usable with both MIDI keyboards as well as point and click</p>
		</a>
	</div>
</div>

<style>
	h1 {
		margin: 30px 0;
	}
	p {
		margin: 30px 0;
	}

	.page {
		width: 100vw;
		height: 100vh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		padding: 6em 2em;
		box-sizing: border-box;
		position: relative;
	}

	.hello {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.projects {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.nav-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
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
		padding: 0.8em 2em;
		min-width: 180px;
		text-align: center;

		border: 1px solid var(--accent-color);
		border-radius: 0.4em;
		box-shadow: 0.5px 1px var(--accent-color);

		font-weight: bold;
		text-decoration: none;
		color: inherit;

		background: rgba(255, 255, 255, 0.1);
	}
</style>
