<script lang="ts">
    import homepage_picture from "$lib/images/natalie picture.webp";
</script>

<div id="Home">
    
    <div class="background-container"> 
        <div class="title">Natal<span class="i">i</span>e Rezn<span class="i">i</span>kov</div>
        <img src={homepage_picture} alt="Natalie Reznikov, smiling."> 
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
        display: grid;
        place-items: end end;
        box-sizing: border-box;
        position: relative;


        box-shadow: 0px 0px 20px 20px rgba(0,0,0,0.7);
    }

    .title{
        position: absolute;
        top: 0;
        left: 0;
        font-size: min(64px, 16vw);
    }

    img {
        max-width: calc(80vw - 90px);
        left: 20%;
        max-height: calc(100vh - 4em - 80px - 80px);
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