<script lang="ts">
	import Clouds from '../components/Clouds.svelte';
	import Arrow from '../components/Arrow.svelte';
</script>

<div class="hello page" id="hello">
	<Clouds />
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
	<Arrow direction="down" href="#projects" />
</div>
<div class="projects page" id="projects">
	<Arrow direction="up" href="#hello" />
	<h1>projects</h1>
	<p>
		sometimes I try and make fun things... but I'm currently rebuilding this page so hold tight.
	</p>
</div>

<style>
	p {
		margin: 30px;
		color: var(--text-color);
		text-align: center;
	}

	.page {
		width: 100vw;
		height: 100vh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		padding: 30px 0;
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
		justify-content: center;
		align-items: center;
	}

	h1 {
		display: flex;
		margin: 30px;
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
		}
	}

	.link {
		display: flex;
		align-items: center;
		justify-content: center;

		box-sizing: border-box;
		padding-top: 0.8em;
		padding-bottom: 0.8em;
		border: 1px solid var(--accent-color);
		border-radius: 0.4em;

		min-width: 180px;
		box-shadow: 0.5px 1px var(--accent-color);

		font-weight: bold;
		text-decoration: none;
		color: inherit;
	}
</style>
