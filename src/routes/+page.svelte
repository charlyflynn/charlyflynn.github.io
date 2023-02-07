<script>
	import Clouds from '../components/Clouds/Clouds.svelte';
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
	<a class="next navbtn down" href="#projects"><div class="arrow" /></a>
</div>
<div class="projects page" id="projects">
	<a class="prev navbtn" href="#hello">
		<div class="arrow" />
	</a>
	<Clouds />
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
	.navbtn {
		cursor: pointer;
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.prev {
		top: 4em;
	}

	.next {
		bottom: 4em;
	}

	.arrow {
		position: absolute;
		border: solid var(--text-color);
		border-width: 0 5px 5px 0;
		padding: 5px;
		transform: rotate(-135deg);
		transform-origin: center;
		top: 15px;
		left: 12.5px;
	}

	.down {
		transform: rotate(180deg);
	}
</style>
