<script lang="ts">
    export let name: string;
    export let blerb: string;
    export let photo: string;
    export let research_photo: string;
    export let photo_mac: string;
    export let research_photo_mac: string;
</script>

<div class="cardcontainer">
    <div class="membercard">
        <picture class="photo" >
            <source srcset={photo_mac} type="image/png"> 
            <source srcset={photo} type="image/webp"> 
            <img src={photo} alt={name}> 
        </picture>
        <div class="content">
            <h1 class="name">
                {name}
            </h1>
            <div class="blerb">
                {blerb}
            </div>
        </div>
        <picture class="researchphoto" >
            <source srcset={research_photo_mac} type="image/png"> 
            <source srcset={research_photo} type="image/webp"> 
            <img src={research_photo} alt="research">
        </picture>
    </div>
</div>

<style>

    .cardcontainer {
        container: card / inline-size;
        height: fit-content;
        width: 100%;
    }

    .membercard{
        display: grid;
        width: 100%;

        grid-template: "a b" calc(1.54*calc(94vw - 40px)/2.54) 
                       "c c" auto / 1fr 1.54fr;
        grid-template: "a b" calc(1.54*100cqw/2.54) 
                       "c c" auto / 1fr 1.54fr;
        row-gap: 0.5em;
        column-gap: 0.5em;
    }   

    h1 {
        margin: 0 0 0.4em;
        font-size: 1.7em;
        position: sticky;
    }

    img {
        object-fit: contain;
        width: 100%;
    }

    .photo {
        grid-area: a;
        width: calc(calc(94vw - 40px)/2.54);
        width: calc(100cqw/2.54);
    }
    .content {
        grid-area: b;
        font-size: 0.45em;
        position: relative;
        height: 100%;
    }
    .blerb {
        padding: 0em 0.5em 0em 0em;

        overflow-y: auto;
        height: calc(100% - 3em);
    }
    .researchphoto {
        grid-area: c;
        width: calc(94vw - 40px);
        width: 100cqw;
    }

    @media (min-width: 520px) {
        .content {
            font-size: 0.5em;
        }
    }
    @media (min-width: 680px) {
        .content {
            font-size: 0.7em;
        }
    }

    @media (min-width: 1053px) {
        .membercard{

            grid-template: "a b c" calc(1.54*calc(94vw - 40px)/5.363) / 1fr 2fr 2.363fr;
            grid-template: "a b c" calc(1.54*100cqw/5.363) / 1fr 2fr 2.363fr;
        }   

        .photo {
            max-width: calc(calc(94vw - 40px)/5.363);
            max-width: calc(100cqw/5.363);
        }
        .researchphoto {
            width: calc(2.363*calc(94vw - 40px)/5.363);
            width: calc(2.363*100cqw/5.363);
        }
        .content {
            font-size: 0.6em;
        }

    }


    @media (min-width: 1638px) {
        .content{
            font-size: 0.8em;
        }
    }

    

</style>