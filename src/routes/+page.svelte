<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
</svelte:head>

<div class="hello">
	<h1>hello &#x1F44B;</h1>
	<p>my name is Charly.</p>
	<p>i'm a software engineer and musician based in London.</p>
	<div class="nav-container">
		<a href="https://github.com/charlyflynn" target="_blank" rel="noreferrer">- github</a>
		<a href="https://www.linkedin.com/in/flynnch" target="_blank" rel="noreferrer"> - linkedin </a>
		<a href="/" class="disabled" rel="noreferrer">- soundcloud</a>
	</div>
	<p>
		sometimes I try and make fun things... but I'm currently rebuilding this page so hold tight.
	</p>
</div>

<style>
	:root {
		--main-bg-color: #f0f9ff;
		--accent-color: #bb6464;
		--highlight-color: #cdb699;
		--text-color: #2c2c2c;
	}

	:root {
		font-family: 'Roboto Mono', monospace;
		background-color: var(--main-bg-color);
	}
	p {
		margin: 30px;
		color: var(--text-color);
		text-align: center;
	}

	.hello {
		width: 100vw;
		height: 100vh;
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

	a {
		padding: 0.8em 2.5em;
		align-self: center;
		text-decoration: none;
		outline: none;
		font-weight: bold;
		color: inherit;
		border: 1px solid var(--accent-color);
		box-shadow: 0.5px 1px var(--accent-color);
		border-radius: 0.6em;
	}

	a.disabled {
		cursor: not-allowed;
		text-decoration: line-through;
	}
</style>
