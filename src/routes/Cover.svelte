<script lang="ts">
    export let url: string;
    export let alt: string;
    export let description: string;

    import up_chevron from "$lib/icons/chevron_up.svg?raw";
</script>

<div class="cover">
    <img src={url} alt={alt}>
    <div class="description">
        <div class="indicator">{@html up_chevron}</div>
        {@html description}
    </div>
</div>

<style>
    img {
        object-fit: contain;
        width: 100%;
    }

    div {
        width: 100%;
    }

    .cover{
        position:relative;
        overflow:hidden;

        display: grid;
        place-items: end;
        width: 100%;
    }

    .description{

        font-size: 0.5rem;
        box-sizing: border-box;
        width: 100%;
        padding: 0 10px 10px 10px;
        position: absolute;
        bottom: 21px;
        transform: translateY(100%);
        border-radius: 5px 5px 0 0;
        transition-duration: .3s;
        background-image: linear-gradient(to bottom, color-mix(in srgb, var(--main-color) 70%, transparent), var(--main-color) 21px);
    }

    .description:hover{
        bottom: 0px;

        transform: translateY(0%);
    }
    
    .indicator{
        display:grid;

        place-items: center;
    }
    
    
    
</style>