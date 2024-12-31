<script lang="ts">
  import benjamin_photo from "$lib/images/members/Benjamin/benjamin_photo.webp";
  import benjamin_research_photo from "$lib/images/members/Benjamin/benjamin_image.webp";

  import mahdi_photo from "$lib/images/members/Mahdi/Mahdi_photo.webp";
  import mahdi_research_photo from "$lib/images/members/Mahdi/Mahdi_image.webp";

  import benazir_photo from "$lib/images/members/Benazir/Benazir_photo.webp";
  import benazir_research_photo from "$lib/images/members/Benazir/Benazir_image.webp";

  import shumeng_photo from "$lib/images/members/Shumeng/shumeng_photo.webp";
  import shumeng_research_photo from "$lib/images/members/Shumeng/shumeng_image.webp";

  import loveni_photo from "$lib/images/members/Loveni/loveni_photo.webp";
  import loveni_research_photo from "$lib/images/members/Loveni/loveni_image.webp";

  import eran_photo from "$lib/images/members/Eran/eran_photo.webp";
  import eran_research_photo from "$lib/images/members/Eran/eran_image.webp";

  import arnaud_photo from "$lib/images/members/Arnaud/Arnaud_photo.webp";
  import arnaud_research_photo from "$lib/images/members/Arnaud/Arnaud_image.webp";

  import hubert_photo from "$lib/images/members/Hubert/Hubert_photo.webp";
  import hubert_research_photo from "$lib/images/members/Hubert/Hubert_image.webp";

  import vinay_photo from "$lib/images/members/Vinay/Vinay_photo.webp";
  import vinay_research_photo from "$lib/images/members/Vinay/Vinay_image.webp";

  import alexandre_photo from "$lib/images/members/Alexandre/Alexandre_photo.webp";
  import alexandre_research_photo from "$lib/images/members/Alexandre/Alexandre_image.webp";

  import benjamin_photo_mac from "$lib/images/members/Benjamin/benjamin_photo.png";
  import benjamin_research_photo_mac from "$lib/images/members/Benjamin/benjamin_image.png";

  import mahdi_photo_mac from "$lib/images/members/Mahdi/Mahdi_photo.png";
  import mahdi_research_photo_mac from "$lib/images/members/Mahdi/Mahdi_image.png";

  import benazir_photo_mac from "$lib/images/members/Benazir/Benazir_photo.png";
  import benazir_research_photo_mac from "$lib/images/members/Benazir/Benazir_image.png";

  import shumeng_photo_mac from "$lib/images/members/Shumeng/shumeng_photo.png";
  import shumeng_research_photo_mac from "$lib/images/members/Shumeng/shumeng_image.png";

  import loveni_photo_mac from "$lib/images/members/Loveni/loveni_photo.png";
  import loveni_research_photo_mac from "$lib/images/members/Loveni/loveni_image.png";

  import eran_photo_mac from "$lib/images/members/Eran/eran_photo.png";
  import eran_research_photo_mac from "$lib/images/members/Eran/eran_image.png";

  import arnaud_photo_mac from "$lib/images/members/Arnaud/Arnaud_photo.png";
  import arnaud_research_photo_mac from "$lib/images/members/Arnaud/Arnaud_image.png";

  import hubert_photo_mac from "$lib/images/members/Hubert/Hubert_photo.png";
  import hubert_research_photo_mac from "$lib/images/members/Hubert/Hubert_image.png";

  import vinay_photo_mac from "$lib/images/members/Vinay/Vinay_photo.png";
  import vinay_research_photo_mac from "$lib/images/members/Vinay/Vinay_image.png";

  import alexandre_photo_mac from "$lib/images/members/Alexandre/Alexandre_photo.png";
  import alexandre_research_photo_mac from "$lib/images/members/Alexandre/Alexandre_image.png";


  import MemberCard from "./MemberCard.svelte";

  let members = [
    {
      name: "Vinay Ashok Kumar",
      blerb:
        "The intricate interplay between craniofacial biomechanics and muscle dysfunction drives my research. With a background in dentistry and surgical expertise, I focus on the debilitating effects of temporomandibular disorders (TMDs) on the jaw, facial muscles, and dentition. My current work at the Reznikov lab explores a non-invasive treatment for bruxism and TMD using an innovative oscillating device designed by Prof. Reznikov and team to modulate muscle tone and alleviate pain. By integrating principles from biomechanics and clinical practice, I aim to advance therapeutic interventions that enhance patient quality of life.",
      photo: vinay_photo,
      research_photo: vinay_research_photo,
      photo_mac: vinay_photo_mac,
      research_photo_mac: vinay_research_photo_mac,
      order: -1,
    },
    {
      name: "Alexandre Demers-Potvin",
      blerb:
        "I am a new postdoctoral researcher in the Reznikov Lab with a background in paleontology following the completion of a Master’s and of a PhD in Prof. Hans Larsson’s lab in McGill University’s Department of Biology. After spending much of my PhD making 3D reconstructions of animal skeletons through surface scanning and of entire fossil-rich rock outcrops through photogrammetry, I will direct my attention towards the segmentation of several CT scans of biological and archeological specimens from McGill museum collections. My ultimate objective is to display those segmented and annotated scans within a virtual reality museum that I will design as part of this project.",
      photo: alexandre_photo,
      research_photo: alexandre_research_photo,
      photo_mac: alexandre_photo_mac,
      research_photo_mac: alexandre_research_photo_mac,
      order: 7,
    },
    {
      name: "Benjamin Rudski",
      blerb:
        "I am a PhD candidate in the Quantitative Life Sciences (QLS) program. My research centres on quantitatively understanding functional adaptation in bone using trabecular anisotropy. I seek to understand the relationship between physiologic loading and bone architecture.",
      photo: benjamin_photo,
      research_photo: benjamin_research_photo,
      photo_mac: benjamin_photo_mac,
      research_photo_mac: benjamin_research_photo_mac,
      order: 4,
    },
    {
      name: "Mahdi Hosseinitabatabaei",
      blerb:
        "Having received training as a mechanical engineer, my research focus has evolved over the years to center around enhancing the reliability—specifically precision and accuracy—of computed tomography (CT) imaging through the application of diverse image processing techniques. Leveraging advancements in deep learning, the aim of my postdoctoral research is to solve the dilemma of choosing between resolution and field-of-view in dental cone beam CT imaging such that a large volume with rich structural context can be achieved without sacrificing the image resolution. ",
      photo: mahdi_photo,
      research_photo: mahdi_research_photo,
      photo_mac: mahdi_photo_mac,
      research_photo_mac: mahdi_research_photo_mac,
      order: 6,
    },
    {
      name: "Benazir Khurshid",
      blerb:
        "I am Benazir, a PhD graduate from Université de Bourgogne and Synchrotron-Soleil. As a Ph.D. graduate, my research journey unfolded by unveiling the complex structure of a mollusc shell and red corals, employing a different microscopic techniques and biochemical analyses. Now, as a postdoctoral fellow, I contribute to our group's exciting project, where the focus is understanding the mechanism behind heavy metal-induced weakening of scallop shells. ",
      photo: benazir_photo,
      research_photo: benazir_research_photo,
      photo_mac: benazir_photo_mac,
      research_photo_mac: benazir_research_photo_mac,
      order: 5,
    },
    {
      name: "Shumeng Jia",
      blerb:
        "I used to be an electrical and control system engineer before joining this group, but now I'm working as a “cyber archeologist” with my coding skills. My research focuses on the quality optimization on both resolution scale and volume scale of 3D computed tomography images using deep learning tools. We scan avian eggs from natural history museum collections and from breeders, as well as ancient Egyptian animal mummies from the World Cultures collection of the Redpath Museum, McGill. ",
      photo: shumeng_photo,
      research_photo: shumeng_research_photo,
      photo_mac: shumeng_photo_mac,
      research_photo_mac: shumeng_research_photo_mac,
      order: 3,
    },
    {
      name: "Lovéni Hanumunthadu",
      blerb:
        "I am Lovéni, a master's student in the Biological and Biomedical Engineering program at McGill. I have been in Natalie's research group since my undergraduate studies, working on unveiling essential features for the intriguing mechanical properties of 3D tessellations in the bone hierarchical structure. My research project now focuses on the same research area using tools like parametric modelling, additive manufacturing and finite element analysis. ",
      photo: loveni_photo,
      research_photo: loveni_research_photo,
      photo_mac: loveni_photo_mac,
      research_photo_mac: loveni_research_photo_mac,
      order: 1,
    },
    {
      name: "Eran Ittah",
      blerb:
        "Water is crucial for protein structure and, by extension, life itself. Its role extends beyond cellular-level functions, influencing how animals adapt through evolutionary changes in connective tissues like skin, scales, bone, and corneas. My research focuses on understanding the complex chemistry and physics governing hydrated interfaces in animal connective tissues, aiming to design materials for practical applications by leveraging similar interactions.",
      photo: eran_photo,
      research_photo: eran_research_photo,
      photo_mac: eran_photo_mac,
      research_photo_mac: eran_research_photo_mac,
      order: 2,
    },
    {
      name: "Arnaud Benchetrite",
      blerb:
        "I admire nature and how its structures and processes at one scale resonate across different scales, just like how tiny coral bits become vast sand beaches! I am Arnaud, an undergraduate bioengineering student from Guadeloupe. I worked in Natalie’s lab for multiple projects including the treatment and imaging of mollusk shells using scanning electron microscopy, the active training of a deep learning segmentation model, the design of laboratory experiments, the review and classification of students’ essays, the construction of microscopy kits for unprivileged students, and as a course assistant! ",
      photo: arnaud_photo,
      research_photo: arnaud_research_photo,
      photo_mac: arnaud_photo_mac,
      research_photo_mac: arnaud_research_photo_mac,
      order: 0,
    },
  ];

  let alumni = [
    {
      name: "Hubert Taïeb",
      blerb:
        "Coming from Marseille, France, I obtained a PhD during my time at the Max Planck Institute of Colloids and Interfaces and the Technical University of Berlin, Germany. There I worked to understand the role of biophysical cues such as osmotic stress and fluid flow on breast cancer metastasis and dormancy using quantitative 3D time lapse confocal imaging. With my background in image acquisition and image processing, I then went on to a Mitacs postdoctoral position between the Reznikov Lab and Comet Technologies Canada, Inc. (creators of the Dragonfly software), where I am creating universal deep learning neural networks for bone or jaw segmentation. I am passionate about food, especially eating it and scanning it with µCT.",
      photo: hubert_photo,
      research_photo: hubert_research_photo,
      photo_mac: hubert_photo_mac,
      research_photo_mac: hubert_research_photo_mac,
      order: 0,
    },
  ];

  members.sort((a, b) => {
    return a.order - b.order;
  });
  alumni.sort((a, b) => {
    return a.order - b.order;
  });
</script>

<div id="Lab">
  <div id="CardList">
    {#each members as member}
      <MemberCard
        name={member.name}
        blerb={member.blerb}
        photo={member.photo}
        research_photo={member.research_photo}
        photo_mac={member.photo_mac}
        research_photo_mac={member.research_photo_mac}
      />
    {/each}
    <div class="Break">

    <h2>Alumni</h2>
    <hr>
    </div>
    {#each alumni as member}
      <MemberCard
        name={member.name}
        blerb={member.blerb}
        photo={member.photo}
        research_photo={member.research_photo}
        photo_mac={member.photo_mac}
        research_photo_mac={member.research_photo_mac}
      />
    {/each}
  </div>
</div>

<style>
  #Lab {
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  #CardList {
    overflow-y: scroll;
    height: 100%;
    display: grid;
    padding: 0px 10px;

    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 2em;
  }

  h2 {
    font-size: 3em;
    margin: 0em;
  }

  hr {
    width: 100%;
  }
</style>

