<script lang="ts">
    import benjamin_photo from "$lib/images/members/Benjamin/benjamin photo.webp";
    import benjamin_research_photo from "$lib/images/members/Benjamin/benjamin image.webp";
    
    import mahdi_photo from "$lib/images/members/Mahdi/Mahdi photo.webp";
    import mahdi_research_photo from "$lib/images/members/Mahdi/Mahdi image.webp";
    
    import benazir_photo from "$lib/images/members/Benazir/Benazir photo.webp";
    import benazir_research_photo from "$lib/images/members/Benazir/Benazir image.webp";
    
    import shumeng_photo from "$lib/images/members/Shumeng/shumeng photo.webp";
    import shumeng_research_photo from "$lib/images/members/Shumeng/shumeng image.webp";   

    import loveni_photo from "$lib/images/members/Loveni/loveni photo.webp";
    import loveni_research_photo from "$lib/images/members/Loveni/loveni image.webp";

    import eran_photo from "$lib/images/members/Eran/eran photo.webp";
    import eran_research_photo from "$lib/images/members/Eran/eran image.webp";
    
    import arnaud_photo from "$lib/images/members/Arnaud/Arnaud photo.webp";
    import arnaud_research_photo from "$lib/images/members/Arnaud/Arnaud image.webp";
    
    import hubert_photo from "$lib/images/members/Hubert/Hubert photo.webp";
    import hubert_research_photo from "$lib/images/members/Hubert/Hubert Image.webp";

    import MemberCard from "./MemberCard.svelte";
    

    let members = [
        {
            name: "Benjamin Rudski",
            blerb: "Benjamin Z. Rudski is a PhD candidate in the Quantitative Life Sciences (QLS) program. His research centres on quantitatively understanding functional adaptation in bone using trabecular anisotropy. He seeks to understand the relationship between physiologic loading and bone architecture.  ",
            photo: benjamin_photo,
            research_photo: benjamin_research_photo
        },
        {
            name: "Mahdi Hosseinitabatabaei",
            blerb: "Having received training as a mechanical engineer, my research focus has evolved over the years to center around enhancing the reliability—specifically precision and accuracy—of computed tomography (CT) imaging through the application of diverse image processing techniques. Leveraging advancements in deep learning, the aim of my postdoctoral research is to solve the dilemma of choosing between resolution and field-of-view in dental cone beam CT imaging such that a large volume with rich structural context can be achieved without sacrificing the image resolution. ",
            photo: mahdi_photo,
            research_photo: mahdi_research_photo
        },
        {
            name: "Benazir Khurshid",
            blerb: "I am Benazir, a PhD graduate from Université de Bourgogne and Synchrotron-Soleil. As a Ph.D. graduate, my research journey unfolded by unveiling the complex structure of a mollusc shell and red corals, employing a different microscopic techniques and biochemical analyses. Now, as a postdoctoral fellow, I contribute to our group's exciting project, where the focus is understanding the mechanism behind heavy metal-induced weakening of scallop shells. ",
            photo: benazir_photo,
            research_photo: benazir_research_photo
        },
        {
            name: "Shumeng Jia",
            blerb: "I used to be an electrical and control system engineer before joining this group, but now I'm working as a “cyber archeologist” with my coding skills. My research focuses on the quality optimization on both resolution scale and volume scale of 3D computed tomography images using deep learning tools. We scan avian eggs from natural history museum collections and from breeders, as well as ancient Egyptian animal mummies from the World Cultures collection of the Redpath Museum, McGill. ",
            photo: shumeng_photo,
            research_photo: shumeng_research_photo
        },
        {
            name: "Lovéni Hanumunthadu",
            blerb: "I am Lovéni, a master's student in the Biological and Biomedical Engineering program at McGill. I have been in Natalie's research group since my undergraduate studies, working on unveiling essential features for the intriguing mechanical properties of 3D tessellations in the bone hierarchical structure. My research project now focuses on the same research area using tools like parametric modelling, additive manufacturing and finite element analysis. ",
            photo: loveni_photo,
            research_photo: loveni_research_photo
        },
        {
            name: "Eran Ittah",
            blerb: "I am Eran, I continue my work in Natalie's lab as a PhD student, after having completed my MSc degree here as well. I study the artchitecting role of water in connective tissues, and the effect of hydration on biomineralization kinetics. I am a big enthusiast of 3D electron microscopy!",
            photo: eran_photo,
            research_photo: eran_research_photo
        },
        {
            name: "Arnaud Benchetrite",
            blerb: "I admire nature and how its structures and processes at one scale resonate across different scales, just like how tiny coral bits become vast sand beaches! I am Arnaud, an undergraduate bioengineering student from Guadeloupe. I worked in Natalie’s lab for multiple projects including the treatment and imaging of mollusk shells using scanning electron microscopy, the active training of a deep learning segmentation model, the design of laboratory experiments, the review and classification of students’ essays, the construction of microscopy kits for unprivileged students, and as a course assistant! ",
            photo: arnaud_photo,
            research_photo: arnaud_research_photo
        },
        {
            name: "Hubert Taïeb",
            blerb: "Coming from Marseille, France, I obtained a PhD during my time at the Max Planck Institute of Colloids and Interfaces and the Technical University of Berlin, Germany. My project was a collaboration from the Biomaterials and Theory & Bio-Systems Department in the International Max Planck Research School (IMPRS) on Multiscale Bio-Systems. There I worked to understand the role of biophysical cues such as osmotic stress and fluid flow on breast cancer metastasis and dormancy using quantitative 3D time lapse confocal imaging. With my background in image acquisition and image processing, I then went on to a Mitacs postdoctoral position between the Reznikov Lab and Comet Technologies Canada, Inc. (creators of the Dragonfly software), where I am creating universal deep learning neural networks for bone or jaw segmentation. I am passionate about food, especially eating it and scanning it with µCT. ",
            photo: hubert_photo,
            research_photo: hubert_research_photo
        }
    ]

    members.sort((a,b) => {
        let last_name_a = a.name.split(" ")[1]
        let last_name_b = b.name.split(" ")[1]
        if (last_name_a > last_name_b) {
            return 1
        }  
        else {
            return -1
        }
    })
</script>

<div id="Lab">
    <div id="CardList">
        {#each members as member}
            <MemberCard name={member.name} blerb={member.blerb} photo={member.photo} research_photo={member.research_photo} />
        {/each}
    </div>
</div>

<style>
    #Lab{
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    #CardList{
        overflow-y: scroll;
        height: 100%;
        display: grid;
        padding: 0px 10px;

        
        grid-template-rows: repeat(auto-fill, 1fr);
        row-gap: 2em;
    }
    
</style>