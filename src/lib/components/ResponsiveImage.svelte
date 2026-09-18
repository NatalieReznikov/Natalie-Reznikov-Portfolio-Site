<script lang="ts">
  import { imageFor } from '$lib/images';

  let { src, alt, sizes = '100vw', eager = false, class: className = '' }: {
    src: string; alt: string; sizes?: string; eager?: boolean; class?: string;
  } = $props();
  const image = $derived(imageFor(src));
</script>

<enhanced:img src={image} {alt} {sizes} class={className}
  loading={eager ? 'eager' : 'lazy'} decoding={eager ? 'sync' : 'async'} fetchpriority={eager ? 'high' : 'auto'} />

<style>
  enhanced\:img { display: block; width: 100%; height: auto; object-fit: contain; }
</style>
