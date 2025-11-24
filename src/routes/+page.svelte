<script lang="ts">
	import Clouds from '../components/Clouds.svelte';
	import Youtube from 'svelte-youtube-embed';
	import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />
<div id="about" class="fixed page">
	<Clouds />
	<div class="flex content">
		<h1>hi.</h1>
		<p>my name is Charly.</p>
		<p>
			i'm a <a class="inline" href="#tech">software engineer</a>
			and
			<a class="inline" href="#music">musician</a> based in London.
		</p>
		<div class="nav-container">
			<a
				class="link"
				href="https://www.instagram.com/flarliechynn"
				target="_blank"
				rel="noreferrer"
			>
				⧉ instagram
			</a>
			<a class="link" href="https://www.instagram.com/donut__jam" target="_blank" rel="noreferrer">
				⧉ donut jam
			</a>
			<a class="link" href="https://github.com/charlyflynn" target="_blank" rel="noreferrer"
				>⧉ github</a
			>
			<a class="link" href="https://www.linkedin.com/in/flynnch" target="_blank" rel="noreferrer">
				⧉ linkedin
			</a>
		</div>
	</div>
</div>
<div id="tech" class="variable page">
	<Clouds offset={15} />
	<div class="flex content">
		<h2>tech.</h2>
		<p>
			I am a full stack software engineer, primarily using javascript/typescript, html/css, react,
			node.js and a wide variety of technologies within this eco-system.
		</p>
		<p>
			Currently I freelance, designing and building custom sites and games for clients, and
			particularyl enjoy making fun things that look pretty.
		</p>
		<p>
			Previously I was a Senior Engineer at <a
				class="inline"
				href="https://www.wavepaths.com"
				target="_blank"
				rel="noreferrer"
			>
				⧉wavepaths</a
			>, who facilitate unique, personalised music experiences for therapeutic use. Prior to this, I
			spent 4 years with
			<a
				class="inline"
				href="https://www.ibm.com/consulting/ibmix"
				target="_blank"
				rel="noreferrer"
			>
				⧉IBM iX design consultancy</a
			> as a Senior Interactive Engineer, working for a diverse range of clients and industries at all
			scales.
		</p>

		<h2>recent projects:</h2>
	</div>
	<div id="projects">
		<!-- <a
				class="link project"
				href="https://orii-community.netlify.app"
				target="_blank"
				rel="noreferrer"
				style="text-align: left"
			>
				<h3>⧉Orii Community</h3>
				<p>
					A website for Orii Community, a collective of instrumentalist, singers, rappers and
					artists creating live, improvised music in London
				</p>
				<p><i>(A work-in-progress commission. react/next.js frontend and sanity.io CMS)</i></p>
			</a> -->
		<a
			href="https://puzzle.elsaselsas.com/"
			class="link project"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ In My Womb</h3>
			<p>an interactive audio puzzle built for Elsas upcoming EP release, <i>In My Womb</i></p>
			<p><i>built with phaser</i></p>
		</a>
		<a
			class="link project"
			href="https://lotusnova.org"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Lotus Nova</h3>
			<p>
				custom design and build for Lotus Nova, a team of event organisers and artist talent
				platform based in London
			</p>
			<p><i>built with react and sanity</i></p>
		</a>
		<!-- <a
			class="link project"
			href="https://wavepaths.com/"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Wavepaths</h3>
			<p>Music as therapy - contractor working as full stack engineer</p>
			<p><i>(react,node.js, bespoke music generation systems)</i></p>
		</a> -->
		<!-- <a
			class="link project"
			href="https://ianthe.house"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Ianthe House</h3>
			<p>Helping to create a community for women recovering from eating disorders</p>
			<p><i>(styling/customising wordpress site)</i></p>
		</a> -->
		<!-- <a
			class="link project"
			href="https://www.rebekahreidviolin.co.uk/"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Rebekah Reid // TÄPP Collective</h3>
			<p>A site for violinist, band leader and composer Bekah Reid</p>
			<p><i>(refresh + maintenance of a wix site)</i></p>
		</a> -->
		<!-- <a
			class="link project"
			href="https://www.deptfordx.org"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Deptford X</h3>
			<p>A website for Deptford x festival of visual arts.</p>
			<p><i>(refresh + maintenance of a wordpress site)</i></p>
		</a> -->
		<!-- <a
			class="link project"
			href="https://acordes.netlify.app"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ acordes</h3>
			<p>
				A real-time, browser-based chord analyser for keys.<br />usable with both MIDI keyboards as
				well as point and click.
			</p>
			<p><i>(a work-in-progress pet project)</i></p>
		</a> -->
		<!-- <a
			class="link project"
			href="https://charliyoga.com"
			target="_blank"
			rel="noreferrer"
			style="text-align: left"
		>
			<h3>⧉ Charli Livingstone Yoga</h3>
			<p>Professional website for yoga instructor Charli Livingstone.</p>
			<p><i>(a squarespace commission)</i></p>
		</a> -->
	</div>
</div>
<div id="music" class="variable page">
	<Clouds offset={32} />
	<div class="flex content">
		<h2>music.</h2>
		<p>
			I am a session musician, multi-instrumentalist, composer, producer, band leader, event
			curator/producer/promoter and occasional DJ. You can find me exploring, touring and recording
			in a wide range of genres including jazz, electronic, folk, indie, pop and all the spaces
			between. As a part of <a
				class="inline"
				href="https://www.instagram.com/dirtynice_exe/"
				target="_blank"
				rel="noreferrer">⧉Dirty Nice</a
			>, I am currently an awardee of the
			<a class="inline" href="https://thefac.org/step-up" target="_blank" rel="noreferrer"
				>⧉2024 Amazon Featured Artist Coalition Step Up Fund</a
			>, and also a recipient of the
			<a
				class="inline"
				href="https://prsfoundation.com/funding-support/funding-for-industry-professionals/early-career-promoter-fund/"
				target="_blank"
				rel="noreferrer">⧉PRS Early Career Promoter Fund</a
			>
			for my work with
			<a
				class="inline"
				href="https://www.instagram.com/donut__jam/"
				target="_blank"
				rel="noreferrer">⧉donut</a
			>.
		</p>
		<div class="youtube-container">
			<Youtube id="6v9Zjigammk" />
		</div>
		<p>
			<a
				class="inline"
				href="https://www.instagram.com/donut__jam/"
				target="_blank"
				rel="noreferrer">⧉donut jam</a
			>
			is a monthly evening of experimentation through sound, light and movement, taking place in the
			round at
			<a class="inline" href="https://www.staffordshirest.com/" target="_blank" rel="noreferrer"
				>⧉Staffordshire St</a
			>
			in Peckham. I produce, curate and host the night, inviting bands from London's improvisational
			music scene to perform in the round alongside projections by a visual artist, followed by an open
			jam featuring London's most talented musicians, DJ's, dancers and vendor pop-ups. donut also performs
			internationally, with a variety of band lineups, with myself as bandleader. Most recently we have
			been invited to play Le Cocon at
			<a
				class="inline"
				href="https://petethemonkeyfestival.org/en/"
				target="_blank"
				rel="noreferrer">⧉Pete the Monkey</a
			>
			festival in France, The Room in Shibuya - Tokyo, and more recently on home turf
			<a class="inline" href="https://www.peckhamfestival.org/" target="_blank" rel="noreferrer"
				>⧉Peckahm Festival</a
			>
			and
			<a class="inline" href="https://jazzonwick.co.uk/" target="_blank" rel="noreferrer"
				>⧉Jazz on Wick</a
			>.
		</p>
		<div class="youtube-container">
			<Youtube id="ymjEdvj5SV8" />
		</div>
		<p>
			As a session musician, I work closely with projects such as <a
				class="inline"
				href="https://www.instagram.com/dirtynice_exe/"
				target="_blank"
				rel="noreferrer">⧉Dirty Nice</a
			>,
			<a
				class="inline"
				href="https://www.instagram.com/suedejazz_collective/"
				target="_blank"
				rel="noreferrer">⧉Suede Jazz Collective</a
			>,
			<a
				class="inline"
				href="https://www.instagram.com/orii.community/"
				target="_blank"
				rel="noreferrer">⧉Orii Community</a
			>,
			<a
				class="inline"
				href="https://www.instagram.com/queen.kaltoum/"
				target="_blank"
				rel="noreferrer">⧉Queen Kaltoum</a
			>,
			<a
				class="inline"
				href="https://www.instagram.com/ritakamale
/"
				target="_blank"
				rel="noreferrer">⧉Rita Kamale</a
			>,
			<a
				class="inline"
				href="https://www.instagram.com/willydelphiaa
/"
				target="_blank"
				rel="noreferrer">⧉Willy Delphia</a
			>,
			<a
				class="inline"
				href="https://www.instagram.com/millieegibson/"
				target="_blank"
				rel="noreferrer">⧉Millie Gibson</a
			>,
			<a class="inline" href="https://www.instagram.com/noum_._/" target="_blank" rel="noreferrer"
				>⧉Noum</a
			>,
			<!-- <a class="inline" href="https://www.instagram.com/marysho/" target="_blank" rel="noreferrer"
				>⧉Mary Sho</a
			>, -->
			<a
				class="inline"
				href="https://www.instagram.com/bekareidviolin/"
				target="_blank"
				rel="noreferrer">⧉Rebekah Reid</a
			>
			and
			<a
				class="inline"
				href="https://www.instagram.com/tappcollective/"
				target="_blank"
				rel="noreferrer">⧉TÄPP Collective</a
			>. I have recorded and performed at such places as Abbey Road Studios, Radio 1's Big Weekend,
			BBC Introducing at Maida Vale, Total Refreshment Centre, The Roundhouse, London Jazz Festival,
			Woodburner and Sofar Sounds.
		</p>
		<p>
			My compositions have found their way into podcasts and exhibitions, most recently scoring the
			exhibition and short film <a
				class="inline"
				href="https://www.staffordshirest.com/thestore"
				target="_blank"
				rel="noreferrer">⧉The Store</a
			>
			by
			<a
				class="inline"
				href="https://www.instagram.com/tilly_wace/"
				target="_blank"
				rel="noreferrer">⧉Tilly Wace</a
			>
			and
			<a
				class="inline"
				href="https://www.instagram.com/kaiagoodenough/"
				target="_blank"
				rel="noreferrer">⧉Kaia Goodenough</a
			>, held at Staffordshire Street gallery.
		</p>
		<div class="youtube-container">
			<Youtube id="6BgAyUiUG20" />
		</div>
		<!-- <p>
			You can otherwise find me playing bass with my band <a
				class="inline"
				href="https://www.instagram.com/pangaea.band/"
				target="_blank"
				rel="noreferrer">⧉pangaea</a
			>, tinkering with synths and loopers with shinkibeetz, or perusing London's offering of gigs,
			jams and sessions.
		</p> -->
	</div>
</div>

<style lang="scss">
	.page {
		height: 100vh;
		height: 100svh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		box-sizing: border-box;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		&.fixed {
			height: 100vh;
		}
		&.variable {
			padding-top: 150px;
			padding-bottom: 250px;
			height: 100%;
			min-height: 100vh;
		}
	}

	/* .disabled {
		cursor: not-allowed;
	} */
	.content {
		box-sizing: border-box;
		padding: 3em;
		width: 100%;
	}

	.flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#projects {
		box-sizing: border-box;
		display: flex;
		align-self: center;
		gap: 1em;
		padding: 0 3em;
		overflow-x: auto;
		width: 100%;
		padding-bottom: 1.5em;
	}

	.project {
		min-width: 250px;
		width: 400px;
	}

	.nav-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		/* align-items: center; */
		width: 100%;
		gap: 1em;
		padding: 1.5em 0em;
	}

	.nav-container a {
		min-width: 180px;
	}
	@media (max-width: 450px) {
		.nav-container {
			flex-direction: column;
			align-items: start;
		}
	}
	.link {
		box-sizing: border-box;
		border-radius: 5px;
		padding: 0.8rem 1.5em;

		text-align: center;
		backdrop-filter: blur(5px);
		background: rgba(255, 255, 240, 0.1);
		filter: brightness(1.1);

		text-decoration: none;
		color: inherit;
	}

	.youtube-container {
		max-width: 1080px;
		width: 100%;
		padding: 3rem 0;
	}

	h1 {
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1.4rem;
	}

	h3 {
		font-size: 1.2rem;
	}

	p {
		font-size: 1rem;
		max-width: 1080px;
	}

	.inline {
		color: inherit;
	}
</style>
