<script lang="ts">
	// import function to register Swiper custom elements
	import { page } from './stores';
	import { register } from 'swiper/element/bundle';
    import HomePage from './Home.svelte';
    import Bio from './Bio.svelte';
    import Publications from './Publications.svelte';
    import { onMount } from 'svelte';
    import Art from './Art.svelte';
    import Lab from './Lab.svelte';
    import Info from './Info.svelte';
	// register Swiper custom elements
	register();
	// const onProgress = (e: {detail: [any, any]}) => {
	// 	const [swiper, progress] = e.detail;
	// 	console.log(progress)
	// };
	const onSlideChange = (e: {detail: [{activeIndex: number}]}) => {

		const [swiper] = e.detail;
		// console.log(swiper)

		page.update((_) => swiper.activeIndex);
	}
	onMount(() => {
		// console.log(swiperEl);
		page.subscribe(value => {
			swiperEl.swiper.slideTo(value, 500);
		})
	})

	let swiperEl: any;
</script>

<svelte:head>
	<title>Natalie Reznikov</title>
	<meta name="Natalie Reznikov's website" content="Natalie Reznikov's professional website" />
</svelte:head>

<section>
	<swiper-container 
		centered-slides={true}
		space-between={50}
		on:swiperslidechange={onSlideChange}

		bind:this={swiperEl}
	>
		<swiper-slide><HomePage /></swiper-slide>
		<swiper-slide class="sliding"><Bio /> </swiper-slide>
		<swiper-slide class="sliding"><Publications /></swiper-slide>
		<swiper-slide><Art /></swiper-slide>
		<swiper-slide><Lab /></swiper-slide>
		<swiper-slide><Info /></swiper-slide>
	</swiper-container>
	  
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		color: var(--text-color);
		width: 100%;
		height: 100%;
	}

	swiper-container, swiper-slide {
		width: 100%;
		height: 100%;

	}
	swiper-slide.sliding{
		
		overflow-y: scroll;
	}


	

</style>
