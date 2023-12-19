<script lang="ts">

	import { page } from "./stores";

	let page_value: number;

	page.subscribe((value) => {
		page_value = value;
	});

	let width = 1000;
	let height = 0;

	import Home from "$lib/icons/home.svg?raw";
	import Bio from "$lib/icons/book-open.svg?raw";
	import Pubs from "$lib/icons/document_list.svg?raw";
	import Art from "$lib/icons/picture.svg?raw";
	import Lab from "$lib/icons/flask.svg?raw";
	import Info from "$lib/icons/info-circle.svg?raw";


	let pages = [
		{
			id: 0,
			text: "Home",
			ref: "",
			icon: Home
		},
		{
			id: 1,
			text: "Bio",
			ref: "",
			icon: Bio,
		},
		{
			id: 2,
			text: "Publications",
			ref: "",
			icon: Pubs,
		},
		{
			id: 3,
			text: "Cover Art",
			ref: "",
			icon: Art,
		},
		{
			id: 4,
			text: "Lab",
			ref: "",
			icon: Lab,
		},
		{
			id: 5,
			text: "Contact Info",
			ref: "",
			icon: Info,
		}
	]
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width}></svelte:window>

<header>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			
			{#each pages as page_heading}
				<li aria-current={page_value===page_heading.id ? 'page' : undefined}>
					<a href={page_heading.ref} on:click={() => page.update((_)  => page_heading.id)}> 
						{#if width > 910}
						{page_heading.text}
						{:else}
						{@html page_heading.icon}
						{/if}
					</a>
				</li>
			{/each}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;

	}
/* 


	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	nav {
		font-size: 0.6rem;
		display: flex;
		justify-content: center;
		height: max-content;
	}

	

	svg {
		font-size:inherit;
		width: 2em;
		height: 4em;
		scale: calc(4/3.0);
		display: block;
	}

	/* li img {
		color: var(--text-color);
	} */

	path {
		fill: var(--main-color);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 4em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--main-color);
		background-size: contain;
	}

	

	li {
		position: relative;
		padding: 0.5em 0.5em 0.5em;

	}

	

	li::after {
		/* --size: 6px; */
		content: '';
		margin: 3px calc(50%);
		width: calc(0%);
		height: 2px;
		display: block;
		/* left: calc(50% - var(--size)); */
		/* border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1); */
		transition-property: width, margin;
		transition-duration: 0.25s;

		background-color: var(--main-accent);
	}

	li[aria-current='page']::after {
		margin: 3px calc(0%);
		width: calc(100%);
	}

	nav a {
		display: flex;
		height: max-content;
		align-items: center;
		color: var(--text-color);
		font-weight: 400;
		font-size: 1.875em;
		/* text-transform: uppercase; */
		/* letter-spacing: 0.1em; */
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav a:hover {
		color: var(--main-accent);
	}

/* @media (max-width: 56em) {
	nav li a {
		visibility: hidden;
		width: 0px;
		height: 0px;
	}
	nav li a::after {
		content: '.';
		width: 3px;
	}

	nav li {
		width: 3px;
	}
		
} */

</style>
