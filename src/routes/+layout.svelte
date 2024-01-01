<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import background_tile_png from "$lib/images/background_tile.png";
  import background_tile from "$lib/images/background_tile.webp";
</script>

<div
  class="app"
  style="background-image:
    image-set(
      url({background_tile_png}) type(&quot;image/png&quot;),
      url({background_tile}) type(&quot;image/webp&quot;)
    );"
>
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;

    background-color: var(--main-color);
    background-repeat: repeat;
    background-size: 15%;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    padding: 0% 3%;
    margin: 0 auto;
    height: calc(100% - 3em);
    box-sizing: border-box;
  }

  /* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	} */

  /* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
