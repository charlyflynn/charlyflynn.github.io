<script lang="ts">
	import Cloud1 from './cloud1.svelte';
	import Cloud2 from './cloud2.svelte';
	import Cloud3 from './cloud3.svelte';
	import Cloud4 from './cloud4.svelte';
</script>

<div class="container">
	<div class="cloud c1">
		<Cloud1 />
	</div>
	<div class="cloud c2">
		<Cloud2 />
	</div>
	<div class="cloud c3">
		<Cloud3 />
	</div>
	<div class="cloud c4">
		<Cloud4 />
	</div>
</div>

<style>
	.c1 {
		animation: scroll 65s linear 15s infinite;
		top: 99px;
		transform: scale(0.7);
		z-index: -3;
		margin-left: 100%;
	}
	.c2 {
		animation: scroll 55s linear 0s infinite;
		top: 198px;
		transform: scale(0.7);
		z-index: -2;
		margin-left: 100%;
	}
	.c3 {
		animation: scroll 40s linear infinite;
		top: 297px;
		transform: scale(0.7);
		z-index: -1;
		margin-left: 100%;
	}
	.c4 {
		animation: scroll 75s linear infinite;
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
		height: 80vh;
		width: 100vw;
		overflow: hidden;
		z-index: -1;
	}
</style>
