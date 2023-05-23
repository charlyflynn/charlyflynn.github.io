<div class="container">
	<div class="nav-container">
		<a class="link" href="#about" rel="noreferrer">about</a>
		<a class="link" href="#projects" rel="noreferrer"> projects </a>
	</div>
</div>

<style scoped>
	.container {
		display: grid;
		grid-template-columns: [lhs] 100px [rhs] auto;
		width: 100%;
		position: fixed;
		z-index: 100;
	}

	.nav-container {
		grid-column: rhs;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
		padding: 1em;
	}

	.link {
		box-sizing: border-box;
		border-radius: 5px;
		max-width: 10rem;
		padding: 0.6rem 1.5em;

		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(5px);
		filter: brightness(1.1);

		text-align: justify;
		text-decoration: none;
		color: inherit;
	}
</style>
