<script lang="ts">
	export let href: string;
	export let direction: 'up' | 'down' = 'down';
</script>

<a class={`navbtn ${direction}`} {href}><div class="arrow" /></a>

<style>
	.navbtn {
		cursor: pointer;
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: rgba(0, 0, 0, 0.2);
		align-self: center;
	}

	.arrow {
		position: absolute;
		border: solid var(--text-color);
		border-width: 0 5px 5px 0;
		padding: 5px;
		top: -2.5px;
		left: 5px;
		transform: rotate(-135deg);
		transform-origin: bottom right;
	}

	.up {
		top: 4em;
	}

	.down {
		bottom: 4em;
		transform: rotate(180deg);
	}
</style>
