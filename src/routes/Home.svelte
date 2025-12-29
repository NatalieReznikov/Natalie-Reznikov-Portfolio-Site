<script lang="ts">

	  import { onMount } from 'svelte';
    import homepage_picture from "$lib/images/nataliepicture.webp";
    import homepage_picture_png from "$lib/images/nataliepicture.png";
    function layoutOval() {
      const container = document.querySelector(".background-container");
      const text = document.querySelector(".text");
      const oval = document.querySelector(".oval");
      if (!container || !text || !oval) return;

      // Get bounding boxes in viewport coords
      const cb = container.getBoundingClientRect();
      const tb = text.getBoundingClientRect();

      const W = cb.width;
      const H = cb.height;

      // Text rect in container coordinates
      const textLeft = tb.left - cb.left;
      const textTop = tb.top - cb.top;
      const textRight = textLeft + tb.width;
      const textBottom = textTop + tb.height;

      // Helper: does a bottom-right square of side s 2D-overlap text?
      function overlapsBothAxes(s) {
        const sqLeft = W - s;
        const sqTop = H - s;
        const sqRight = W;
        const sqBottom = H;

        const xOverlap =
          Math.max(sqLeft, textLeft) < Math.min(sqRight, textRight);
        const yOverlap =
          Math.max(sqTop, textTop) < Math.min(sqBottom, textBottom);

        return xOverlap && yOverlap;
      }

      // Binary search for largest s ∈ [0, min(W, H)] with no 2D overlap
      let lo = 0;
      let hi = Math.min(W, H);

      for (let i = 0; i < 40; i++) {
        const mid = (lo + hi) / 2;
        if (overlapsBothAxes(mid)) {
          hi = mid; // too big
        } else {
          lo = mid; // feasible
        }
      }

      const s = lo;

      // Apply size (and keep bottom-right anchor)
      oval.style.width = s + "px";
      oval.style.height = s + "px";
      oval.style.right = "0px";
      oval.style.bottom = "0px";
      
      oval.classList.add("ready");
  }

  onMount(() => {
    layoutOval();
    window.addEventListener("resize", layoutOval);
  });
</script>

<div id="Home">
    
    <div class="background-container"> 
        <div class="text">
          <div class="title">
            Natal<span class="i">i</span>e 
            Rezn<span class="i">i</span>kov
          </div>
          <div class="blerb">
            An engineer trapped inside the body of a biologist
          </div>
        </div>
        <div class="oval">
        <picture> 
            <source srcset={homepage_picture_png} type="image/png">
            <source src={homepage_picture} type="image/webp">
            <img src={homepage_picture} alt="Natalie Reznikov, smiling.">
        </picture>
        </div>
    </div>
    
</div>

<style>
    #Home {
        width: 100%;
        height: 100%;
        

        display: grid;
        place-items: center;
        padding: 40px;

        box-sizing: border-box;
        /* -webkit-mask:
        linear-gradient(to right ,rgba(0,0,0,0.2) ,white ,rgba(0,0,0,0.2)),
        linear-gradient(to bottom,rgba(0,0,0,0.2) ,white ,rgba(0,0,0,0.2));  */
        /* background-size: 90% 90%; */
        background-repeat: no-repeat;
        background-position: center, center;
    }

    .background-container{
        background-image:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7));
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        container-type: inline-size;
        container-name: background;

        box-shadow: 0px 0px 20px 20px rgba(0,0,0,0.7);
    }

    .text {
        position: absolute;
        top: 0;
        left: 0;
        width: min-content;
        font-size: min(64px, 16vw);
    }
    .blerb{
        font-size: clamp(18px, 3vw, 30px);
        color: color-mix(in srgb, var(--main-accent) 70%, white 30%);

    }
    
    .oval {
      position: absolute;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      border-radius: 50%;
      overflow: hidden;
    }
    .oval:global(.ready){
      opacity: 1;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }

    .i {  
        color: var(--main-accent);
        position: relative;
    }
    .i:before {
        content: "ı";
        position: absolute; 
        color: var(--text-color);
    }
</style>
