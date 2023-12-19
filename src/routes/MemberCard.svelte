<script lang="ts">
    export let name: string;
    export let blerb: string;
    export let photo: string;
    export let research_photo: string | undefined;
</script>

<div class="cardcontainer">
    <div class="membercard">
        <img class="photo" src={photo} alt={name}> 
        <div class="content">
            <h1 class="name">
                {name}
            </h1>
            <div class="blerb">
                {blerb}
            </div>
        </div>
        <img class="researchphoto" src={research_photo} alt="research">
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
    }

    .photo {
        grid-area: a;
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
        width: 100cqw;
    }

    @container (min-width: 450px) {
        .content {
            font-size: 0.5em;
        }
    }
    @container (min-width: 600px) {
        .content {
            font-size: 0.7em;
        }
    }

    @container (min-width: 950px) {
        .membercard{

            grid-template: "a b c" calc(1.54*100cqw/5.363) / 1fr 2fr 2.363fr;
        }   

        .photo {
            max-width: calc(100cqw/5.363);
        }
        .researchphoto {
            width: calc(2.363*100cqw/5.363);
        }
        .content {
            font-size: 0.6em;
        }

    }


    @container (min-width: 1500px) {
        .content{
            font-size: 0.8em;
        }
    }

    

</style>