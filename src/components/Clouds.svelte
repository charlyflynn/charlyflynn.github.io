<script lang="ts">
	import Cloud1 from './cloud1.svelte';
	import Cloud2 from './cloud2.svelte';
	import Cloud3 from './cloud3.svelte';
	import Cloud4 from './cloud4.svelte';
	export let offset = 0;
</script>

<div class="container">
	<div class="cloud c1" style="--offset:{offset};">
		<Cloud1 />
	</div>
	<div class="cloud c2" style="--offset:{offset};">
		<Cloud2 />
	</div>
	<div class="cloud c3" style="--offset:{offset};">
		<Cloud3 />
	</div>
	<div class="cloud c4" style="--offset:{offset};">
		<Cloud4 />
	</div>
</div>

<style>
	.c1 {
		animation: scroll 65s linear infinite;
		animation-delay: calc(15s + -1s * var(--offset));
		top: 99px;
		transform: scale(0.7);
		z-index: -3;
		margin-left: 100%;
	}
	.c2 {
		animation: scroll 55s linear infinite;
		animation-delay: calc(-1.4s * var(--offset));
		top: 198px;
		transform: scale(0.7);
		z-index: -2;
		margin-left: 100%;
	}
	.c3 {
		animation: scroll 40s linear infinite;
		animation-delay: calc(-0.8s * var(--offset));
		top: 297px;
		transform: scale(0.7);
		z-index: -1;
		margin-left: 100%;
	}
	.c4 {
		animation: scroll 75s linear infinite;
		animation-delay: calc(-1s * var(--offset));
		transform: scale(0.7);
		z-index: -4;
		margin-left: 100%;
	}

	.cloud {
		position: absolute;
		opacity: 0.6;
	}

	@keyframes scroll {
		from {
			margin-left: 100%;
		}
		to {
			margin-left: -650px;
		}
	}
	.container {
		position: absolute;
		height: 100%;
		width: 100vw;
		overflow: hidden;
		z-index: -1;
		top: 0;
	}
</style>
