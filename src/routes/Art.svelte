<script lang="ts">
    import footBoneCover from "$lib/images/coverart/jbmr.2961.webp";
    import vortexCover from "$lib/images/coverart/jbmr.3764.webp";
    import boneCover from "$lib/images/coverart/BoneCover2.webp";
    import journalSBC from "$lib/images/coverart/JournalOfStructuralBiologyCover.webp";
    import journalSBC3 from "$lib/images/coverart/JSB_VSI_cover_version_107598.webp";
    import journalSBC2 from "$lib/images/coverart/JSB_regular_cover_107598.webp";
    import StreaksColor from "$lib/images/coverart/1-s2.0-S1047847722000156-main.webp";
    import CoverBoneEnthesis from "$lib/images/coverart/CoverBoneEnthesis.webp";
    import CoverBoneAugust from "$lib/images/coverart/BonecoverAugust2024.webp";
    import CoverJMBR from "$lib/images/coverart/m_cover.webp";

    import footBoneCover_Mac from "$lib/images/coverart/jbmr.2961.png";
    import vortexCover_Mac from "$lib/images/coverart/jbmr.3764.png";
    import boneCover_Mac from "$lib/images/coverart/BoneCover2.png";
    import journalSBC_Mac from "$lib/images/coverart/JournalOfStructuralBiologyCover.png";
    import journalSBC3_Mac from "$lib/images/coverart/JSB_VSI_cover_version_107598.png";
    import journalSBC2_Mac from "$lib/images/coverart/JSB_regular_cover_107598.png";
    import StreaksColor_Mac from "$lib/images/coverart/1-s2.0-S1047847722000156-main.png";
    import CoverBoneEnthesis_Mac from "$lib/images/coverart/CoverBoneEnthesis.png";
    import CoverBoneAugust_Mac from "$lib/images/coverart/BonecoverAugust2024.png";
    import CoverJMBR_Mac from "$lib/images/coverart/m_cover.png";

    import Cover from "./Cover.svelte";

    let covers = [
        {
            id : 0,
            cover : footBoneCover,
            cover_mac: footBoneCover_Mac,
            description : "<div>Golden Lotus. Top panels: three-dimensional reconstruction by micro-computed tomography of a bound foot (museum specimen, the Royal College of Surgeons, London, UK) showing anatomical structure and relationships for both soft tissues (orange) and skeletal elements (yellow). Bottom left: close-up view of the left foot of a 75 year old woman who had her feet deformed at the age of 7 years. Courtesy of Jo Farrell (Jo Farrell Photography, <a href=http://www.livingherstoryphotography.com>http://www.livingherstoryphotography.com</a>). Bottom right: an embroidered “Golden Lotus” shoe occasionally worn by a woman having bound feet (courtesy of the Museums at the Royal College of Surgeons, London, UK).</div>",
            alt: ""
        },
        {
            id : 1,
            cover : vortexCover,
            cover_mac: vortexCover_Mac,
            description : "<div>Vortex by Object Research Systems. This image shows the interior of a proximal femur of a sheep. The specimen was imaged usingmicro-computed tomography, and then surface-rendered using Dragonfly software. The spiraling orientation of the trabecular trusses, andthe transition of trabecular texture from a robust to a delicate fabric, create an impression of a dynamic vortex within the bone’s interior.</div>",
            alt: ""
        },
        {
            id : 2,
            cover : boneCover,
            cover_mac: boneCover_Mac,
            description : "<div>Ions such as calcium and phosphate are used in myriad key metabolic processes, and are central to life itself. However, their abundance and propensity to adversely precipitate as mineral requires a generalized inhibition. Selective removal of such inhibition (“inhibiting the inhibitor”) to allow mineralization can be used to define the size, shape and layout of an organism (from in utero through to adulthood). As part of this process there is the third tier of mineralization regulation – the fine interfacial enzyme-stenciling control that provides refinement for mechanical resilience, metabolic responsiveness, morphological precision and sensitivity to loading, to name a few, that apparently can distinguish life from death, and health from disease.</div>",
            alt: ""
        },
        {
            id : 3,
            cover : journalSBC,
            cover_mac: journalSBC_Mac,
            description : "<div>Tessellation of micrometer-sized, irregular mineral ellipsoids in the extracellular matrix of bone is a unique functional arrangement within its structural hierarchy.  FIB-SEM serial-surface-view imaging.</div>",
            alt: ""
        },
        {
            id : 4,
            cover : journalSBC3,
            cover_mac: journalSBC3_Mac,
            description : "<div>The cover refers to the article “Deep learning for 3D imaging and image analysis in biomineralization research” <a href=https://doi.org/10.1016/j.jsb.2020.107598>https://doi.org/10.1016/j.jsb.2020.107598</a> by Reznikov et al. in this issue of <em>Journal of Structural Biology</em>.</div>",
            alt: ""
        },
        {
            id : 5,
            cover : journalSBC2,
            cover_mac: journalSBC2_Mac,
            description : "<div>The cover refers to the article “Deep learning for 3D imaging and image analysis in biomineralization research” <a href=https://doi.org/10.1016/j.jsb.2020.107598>https://doi.org/10.1016/j.jsb.2020.107598</a> by Reznikov et al. in this issue of <em>Journal of Structural Biology</em>.</div>",
            alt: ""
        },
        {
            id: 6,
            cover: StreaksColor,
            cover_mac: StreaksColor_Mac,
            description : "<div>Bone mineral crystallites. Scanning transmission electron tomography, 3D segmentation followed by watershed transform.</em></div>",
            alt: ""
        },
        {
            id: 7,
            cover: CoverBoneEnthesis,
            cover_mac: CoverBoneEnthesis_Mac,
            description : "<div>3D Multiscale imaging of Enthesis</div>",
            alt: ""
        },
        {
            id: 8,
            cover: CoverBoneAugust,
            cover_mac: CoverBoneAugust_Mac,
            description: "<div>Quantitative 3D analysis of bone resorption events</div>",
            alt: ""
        },
{
            id: 9,
            cover: CoverJMBR,
            cover_mac: CoverJMBR_Mac,
            description: "<div>Microscale 3D reconstruction of bone mineral patterning at the microscale in the osteomalacic Hyp mouse, a frequently used animal model for the rare bone and tooth disease X-linked hypophosphatemia. The image shows a small volume of bone in the region of the mineralization front as obtained from focused ion beam - scanning electron microscopy (FIB-SEM) tomography. After software segmentation of individual, micrometer-sized packets of bone mineral that are called tesselles and which normally pack closely to one another in a pattern called crossfibrillar mineral tessellation, in the osteomalacic Hyp mice there is a delay and incompleteness in the space-filling tessellation. This defective patterning of mineral is associated with soft bone and bone deformities.</div>",
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
            <Cover cover={cover.cover} cover_mac={cover.cover_mac} alt={cover.alt} description={cover.description}></Cover>
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
        grid-template-columns: repeat(auto-fit, minmax(max(30vh, 20vw), 1fr));
        column-gap: 20px;
        row-gap: 20px;
        padding: 0px 10px;

        width: 100%;
        box-sizing: border-box;

        place-items: center;
    }
    
</style>

