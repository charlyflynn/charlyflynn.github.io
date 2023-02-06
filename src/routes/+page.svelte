<script>
	import Clouds from './Clouds.svelte';
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
		<a href="/" class="link disabled" rel="noreferrer">- soundcloud</a>
	</div>
	<a class="navbtn next" href="#projects"><div class="down arrow" /></a>
</div>
<div class="projects page" id="projects">
	<a class="navbtn prev" href="#hello"><div class="up arrow" /></a>
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
		width: 100%;
		gap: 2em;
		justify-content: center;
		margin: 15px 0;
	}
	@media (max-width: 450px) {
		.nav-container {
			flex-direction: column;
		}
	}

	.link {
		padding: 0.8em 2.5em;
		align-self: center;
		text-decoration: none;
		outline: none;
		font-weight: bold;
		color: inherit;
		border: 1px solid var(--accent-color);
		box-shadow: 0.5px 1px var(--accent-color);
		border-radius: 0.4em;
	}
	.disabled {
		cursor: not-allowed;
		text-decoration: line-through;
	}

	.navbtn {
		cursor: pointer;
		position: absolute;
	}

	.prev {
		top: 2em;
	}

	.next {
		bottom: 2em;
	}

	.arrow {
		border: solid var(--text-color);
		border-width: 0 5px 5px 0;
		display: inline-block;
		padding: 5px;
		background: transparent;
	}
	.up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}

	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
</style>
