<script lang="ts">
    import footBoneCover from "$lib/images/coverart/jbmr.2961.png";
    import vortexCover from "$lib/images/coverart/jbmr.3764.png";
    import boneCover from "$lib/images/coverart/BoneCover2.png";
    import journalSBC from "$lib/images/coverart/JournalOfStructuralBiologyCover.png";
    import journalSBC3 from "$lib/images/coverart/JSB VSI cover version 107598.png";
    import journalSBC2 from "$lib/images/coverart/JSB regular cover 107598.png";
    import StreaksColor from "$lib/images/coverart/X10478477.a523bcfc.jpg";
    import CoverBoneEnthesis from "$lib/images/coverart/CoverBoneEnthesis.webp";
    import Cover from "./Cover.svelte";

    let covers = [
        {
            id : 0,
            url : footBoneCover,
            description : "<div>Golden Lotus. Top panels: three-dimensional reconstruction by micro-computed tomography of a bound foot (museum specimen, the Royal College of Surgeons, London, UK) showing anatomical structure and relationships for both soft tissues (orange) and skeletal elements (yellow). Bottom left: close-up view of the left foot of a 75 year old woman who had her feet deformed at the age of 7 years. Courtesy of Jo Farrell (Jo Farrell Photography, <a href=http://www.livingherstoryphotography.com>http://www.livingherstoryphotography.com</a>). Bottom right: an embroidered “Golden Lotus” shoe occasionally worn by a woman having bound feet (courtesy of the Museums at the Royal College of Surgeons, London, UK).</div>",
            alt: ""
        },
        {
            id : 1,
            url : vortexCover,
            description : "<div>Vortex by Object Research Systems. This image shows the interior of a proximal femur of a sheep. The specimen was imaged usingmicro-computed tomography, and then surface-rendered using Dragonfly software. The spiraling orientation of the trabecular trusses, andthe transition of trabecular texture from a robust to a delicate fabric, create an impression of a dynamic vortex within the bone’s interior.</div>",
            alt: ""
        },
        {
            id : 2,
            url : boneCover,
            description : "<div>Ions such as calcium and phosphate are used in myriad key metabolic processes, and are central to life itself. However, their abundance and propensity to adversely precipitate as mineral requires a generalized inhibition. Selective removal of such inhibition (“inhibiting the inhibitor”) to allow mineralization can be used to define the size, shape and layout of an organism (from in utero through to adulthood). As part of this process there is the third tier of mineralization regulation – the fine interfacial enzyme-stenciling control that provides refinement for mechanical resilience, metabolic responsiveness, morphological precision and sensitivity to loading, to name a few, that apparently can distinguish life from death, and health from disease.</div>",
            alt: ""
        },
        {
            id : 3,
            url : journalSBC,
            description : "<div>Tessellation of micrometer-sized, irregular mineral ellipsoids in the extracellular matrix of bone is a unique functional arrangement within its structural hierarchy.  FIB-SEM serial-surface-view imaging.</div>",
            alt: ""
        },
        {
            id : 4,
            url : journalSBC3,
            description : "<div>The cover refers to the article “Deep learning for 3D imaging and image analysis in biomineralization research” <a href=https://doi.org/10.1016/j.jsb.2020.107598>https://doi.org/10.1016/j.jsb.2020.107598</a> by Reznikov et al. in this issue of <em>Journal of Structural Biology</em>.</div>",
            alt: ""
        },
        {
            id : 5,
            url : journalSBC2,
            description : "<div>The cover refers to the article “Deep learning for 3D imaging and image analysis in biomineralization research” <a href=https://doi.org/10.1016/j.jsb.2020.107598>https://doi.org/10.1016/j.jsb.2020.107598</a> by Reznikov et al. in this issue of <em>Journal of Structural Biology</em>.</div>",
            alt: ""
        },
        {
            id: 6,
            url: StreaksColor,
            description : "<div>Bone mineral crystallites. Scanning transmission electron tomography, 3D segmentation followed by watershed transform.</em></div>",
            alt: ""
        },
        {
            id: 7,
            url: CoverBoneEnthesis,
            description : "<div>Bone mineral crystallites. Scanning transmission electron tomography, 3D segmentation followed by watershed transform.</em></div>",
            alt: ""
        }
    ];

    covers.sort((a,b) => {
        if (a.id > b.id) {
            return -1;
        } else if (a.id === b.id) {
            return 0;
        }
        else {
            return 1;
        }
    });
</script>

<div id="Art">
    <div id="ArtScroller">
        {#each covers as cover}
            <Cover url={cover.url} alt={cover.alt} description={cover.description}></Cover>
        {/each}
    </div>
</div>

<style>
    #Art{
        margin: 10px 0px;

        overflow-y: scroll;
        height: calc(100% - 20px);
        scrollbar-gutter: stable both-edges;

    }

    #ArtScroller{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(200px, 20vw), 1fr));
        column-gap: 20px;
        row-gap: 20px;
        padding: 0px 10px;

        width: 100%;
        box-sizing: border-box;

        place-items: center;
    }
    
</style>

