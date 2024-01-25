<div class="nav-container">
	<a class="link" href="#about" rel="noreferrer">about</a>
	<a class="link" href="#tech" rel="noreferrer">tech</a>
	<a class="link" href="#music" rel="noreferrer"> music </a>
</div>

<style>
	.nav-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5em;
		padding: 1em;

		position: fixed;
		top: 0;
		right: 0;
		z-index: 100;
	}

	.nav-container > a {
		min-width: 100px;
	}

	@media (max-width: 450px) {
		.nav-container {
			flex-direction: column;
			align-items: flex-end;
		}
	}

	.link {
		box-sizing: border-box;
		border-radius: 5px;
		padding: 0.6rem 1em;

		text-align: center;

		background: rgba(255, 255, 240, 0.1);
		backdrop-filter: blur(5px);
		filter: brightness(1.1);

		text-decoration: none;
		color: inherit;

		z-index: 100;
	}
</style>
