<script lang="ts">
    let pubs = [
        {
  id: 48,
  authors: "Khurshid B, Mousa A, Dallas SL, Deering J, Reznikov N, McKee MD.",
  title: "Trabecular bone formation in vitro by the OmGFP66 osteogenic cell line.",
  prelink: "Bone, ",
  link: "https://doi.org/10.1016/j.bone.2025.117767.",
  postlink: ""
},
{
  id: 47,
  authors: "Bromage TG, Denys C, De Jesus CL, Erdjument-Bromage H, Kullmer Schrenk F, McKee MD, Reznikov N, Ittah E, Buss DJ, Ashley GM, Sandrock O, Pudel SB, Yakar S, Hu B, Rabieh S, Neubert TA.",
  title: "Fossil mammalian bone paleometabolomes yield metabolic and ecologic profiles.",
  prelink: "Nature. ",
  link: "https://doi.org/10.1038/s41586-025-09843-w.",
  postlink: ""
},
        {
  id: 46,
  authors: "Deering J, Buss DJ, Murshed M, Reznikov N, McKee MD.",
  title: "Local fibril orientation guides mineral growth direction and morphology in collagenous matrices: A study of parallelism in bone, cartilage, enthesis fibrocartilage, calcifying tendon and dentin.",
  prelink: "ACS Nano, ",
  link: "https://doi.org/10.1021/acsnano.5c11922.",
  postlink: ""
},

        {
          id: 45,
          authors: "Jia S, Piché N, McKee MD, Reznikov N.",
          title: "Advancing X-ray micro-computed tomography image processing of avian eggshells: An improved registration metric for multiscale 3D images and resolution-enhanced segmentation using edge-attentive neural networks.",
          prelink: "Micron. 199:103915.",
          link: "https://doi.org/10.1016/j.micron.2025.103915",
          postlink: "",
        },
        {
          id: 44,
          authors: "Rudski BZ, Deering J, Reznikov N.",
          title: "The Anisotropy Vector Rose: A new package for analysing and visualising 3D non-unit vectors in Python.",
          prelink: "J Open Source Software, 2025, 10(111):8369",
          link: "https://doi.org/10.21105/joss.08369",
          postlink: "",
        },
        {
          id: 43,
          authors: "Nelea V, Ittah E, McKee MD, Reznikov N.",
          title: "Bone mineral tessellation: Visualization by atomic force microscopy of the volume-filling mineralization pattern in hydrated and dehydrated states.",
          prelink: "Acta Biomaterialia. 2025",
          link: "https://doi.org/10.1016/j.actbio.2025.05.016.",
          postlink: "",
        },
        {
          id: 42,
          authors: "Khurshid B, Benchetrite A, Guichaoua L, Brodusch N, Stewart BD, Kröger R, Gauvin R, Mallet M, Tremblay R, Reznikov N",
          title: "Investigating temperature influences on shell growth and microstructural variations in Bay scallops: Insights from multiscale microscopy",
          prelink: "Faraday Discussions 2025",
          link: "https://doi.org/10.1039/D5FD00023H",
          postlink: "",
        },
        {
          id: 41,
          authors: "Guichaoua L, Reznikov N, Stewart BD, Kröger R, Gauvin R",
          title: "Combined crystallographic study of king scallop (Pecten maximus) shells using SEM, EBSD and Raman spectroscopy",
          prelink: "Faraday Discussions 2025",
          link: "https://doi.org/10.1039/D5FD00029G",
          postlink: "",
        },
        {
          id: 40,
          authors: "Deering J, Buss DJ, Kröger R, Vali H, Lagos MJ, Reznikov N, McKee MD",
          title: "Bone mineralization and the effects of elevated osteopontin: From symmetry-breaking foci to 3D space-filling tessellation",
          prelink: "Faraday Discussions 2025",
          link: "https://doi.org/10.1039/D5FD00013K",
          postlink: "",
        },
        {
          id: 39,
          authors: "Buss DJ, Deering J, Reznikov N, McKee MD",
          title: "Understanding the structural biology of osteomalacia through multiscale 3D X-ray and electron tomographic imaging:  A review of X-linked hypophosphatemia, the Hyp mouse model, and imaging methods.",
          prelink: "J Bone Miner Res Plus, 2025 (special issue on rare bone diseases), 9(2): ziae176. ",
          link: "https://doi.org/10.1093/jbmrpl/ziae176",
          postlink: "(Cover article)",
        },
        {
          id: 37,
          authors: "Reznikov N",
          title: "Editorial [for paper of the year 2022] for Buss et al., “Hierarchical organization of bone in three dimensions; a twist of twists”",
          prelink:"J Struct Biol: X, 2024(10):100116 ",
          link:"http://doi.org/10.1016/j.yjsbx.2024.100116 ",
          postlink:"",
        },
        {
          id: 36,
          authors: "Reznikov N",
          title: "The Stenciling Principle for extracellular matrix mineralization.  Textbook Sub-Chapter in: Ten Cate's Oral Histology: Development, Structure, and Function (10th edition)",
          prelink:"Author/Editor Antonio Nanci.  Elsevier.  ISBN-13 978-0323798952 ",
          link:"https://shop.elsevier.com/books/ten-cates-oral-histology/nanci/978-0-323-79895-2#full-description",
          postlink:"",
        },
        {
          id: 35,
          authors: "Halgrain M, Schneider MA, Jia S, Narcy A, Gambier E, Hincke MT, McKee MD, Rehault-Godbert S, Reznikov N",
          title: "A 3D micro-computed tomography study comparing embryonic skeletal development in layer versus broiler strains of the domestic chicken",
          prelink:"Poultry Science, 2024, 103(12):104308 ",
          link:"http://doi.org/10.1016/j.psj.2024.104308 ",
          postlink:"",
        },
        {
          id: 34,
          authors: "Rodriguez-Navarro AB, Dominguez-Gasca N, Athanasiadou D, Le Roy N, Reznikov N, Gonzalez-Segura A, Hincke MT, McKee MD, Nys Y, Gautron J",
          title: "Guinea fowl eggshell structural analysis at different scales reveals how organic matrix induces microstructural shifts that enhance its mechanical properties",
          prelink:"Acta Biomater, 2024, 178:244-256",
          link:"http://doi.org/10.1016/j.actbio.2024.03.001 ",
          postlink:"",
        },
        {
          id: 33,
          authors: "Grass D, Malek G, Taieb H, Ittah E, Richard H, Reznikov N, Laverty S",
          title: "Characterization and quantification of in-vitro equine bone resorption in 3D using microcomputed tomography (µCT) and deep learning-aided feature segmentation",
          prelink:"Bone, 2024, 185:117131",
          link:"https://doi.org/10.1016/j.bone.2024.117131 ",
          postlink:"",
        },
        {
          id: 32,
          authors: "Daniel J Buss, Natalie Reznikov, Marc D McKee",
          title: "Attaching organic fibers to mineral: The case of the avian eggshell",
          prelink:"iScience, 2023 ",
          link:"https://doi.org/10.1016%2Fj.isci.2023.108425 ",
          postlink:"",
        },
        {
          id: 31,
          authors: "Daniel J Buss, Katya Rechav, Natalie Reznikov, Marc D McKee",
          title: "Mineral tessellation in mouse enthesis fibrocartilage, Achilles tendon, and Hyp calcifying enthesopathy: A shared 3D mineralization pattern",
          prelink:"Bone, 2023 ",
          link:"https://doi.org/10.1016/j.bone.2023.116818 ",
          postlink:"",
        },
        {
          id: 30,
          authors: "McKee MD, Buss DJ, Reznikov N.",
          title: "Mineral tessellation in bone and the stenciling principle for extracellular matrix mineralization",
          prelink:"J Struct Biol, 2022, 214(1):107823",
          link:"https://doi.org/10.1016/j.jsb.2021.107823 ",
          postlink:"",
        },
        {
          id: 29,
          authors: "Reznikov N, Liang H, McKee MD, Piché N.",
          title: "Mapping of trabecular bone anisotropy and volume fraction in 3D using µCT images of the human calcaneus",
          prelink:"Am J Biol Anthrop, 2022",
          link:"https://doi.org/10.1002/ajpa.24474",
          postlink:"",
        },
        {
          id: 28,
          authors: "Buss DJ, Kroeger R, McKee MD, Reznikov N.",
          title: "Hierarchical organization of bone in three dimensions: A twist of twists",
          prelink:"J Struct Biol: X, 2022(6):100057",
          link:"https://doi.org/10.1016/j.yjsbx.2021.100057",
          postlink:"",
        },
        {
          id: 27,
          authors: "Alsheghri A*, Reznikov N*, Piché N, Gendron M, Tamimi Marino F, Song J.",
          title: "Optimization of 3D network topology for bioinspired design of stiff and lightweight bone-like structures",
          prelink:"Mat Sci Eng: C, 2021, 112010 ",
          link:"https://doi.org/10.1016/j.msec.2021.112010",
          postlink:"* equally contributing authors.",
        },
        {
          id: 26,
          authors: "Reznikov N, Buss DJ, Provencher B, McKee MD, Piché N.",
          title: "Deep learning and 3D imaging in structural biology. Review",
          prelink:"J Struct Biol, 2020: 107598 (invited from conference selection, special issue) ",
          link:"https://doi.org/10.1016/j.jsb.2020.107598",
          postlink:"",
        },
        {
          id: 25,
          authors: "Buss DJ, Reznikov N, McKee MD.",
          title:"Crossfibrillar mineral tessellation in normal and Hyp mouse bone as revealed by 3D FIB-SEM microscopy",
          prelink:"J Struct Biol, 2020: 108603 ",
          link:"https://doi.org/10.1016/j.jsb.2020.107603",
          postlink:"",
        },
        {
          id: 24,
          authors:"Reznikov N, Hoac B, Buss DJ, Addison WN, Barros NMT, McKee MD.",
          title:"Biological stenciling of mineralization in the skeleton:  Local enzymatic removal of inhibitors in the extracellular matrix.",
          prelink:"Bone, 2020 ",
          link:"https://doi.org/10.1016/j.bone.2020.115447",
          postlink:"   (cover article)",
        },
        {
          id: 23,
          authors:"Athanasiadou D, Jiang W, Reznikov N, Rodriguez-Navarro AB, Kroeger R, Bilton M, Nelea V, Hu Y, McKee MD.",
          title: "Nanostructure of mouse otoconia",
          prelink:"J Struct Biol, 2020, 210(2):107489. ",
          link:"https://doi.org/10.1016/j.jsb.2020.107489",
          postlink:"",
        },
        {
          id: 22,
          authors: "Reznikov N, Rechav K.",
          title:"FIB-SEM dual-beam microscopy for three-dimensional ultrastructural imaging of skeletal tissues. Methodological insert in Comparative skeletal histology and paleohistology. Editors : A. de Ricqlès, L. Zylberberg, K. Padian and V. de Buffrénil",
          prelink:"CRC Press (Francis and Taylor Group) (invited book chapter, in press).",
          link:"",
          postlink:"",
        },
        {
          id: 21,
          authors:"Reznikov N, Alsheghri A, Piche N, Gendron M, Morozova I, Sanchez Siles JM, Gonzalez-Quevedo D, Tamimi Marino I, Song J, Tamimi Marino F.",
          title:"The topological blueprint of trabecular bone associates with skeletal pathology in humans",
          prelink:"Bone Reports, 2020 12:100264. ",
          link:"https://doi.org/10.1016/j.bonr.2020.100264",
          postlink:"",
        },
        {
          id: 20,
          authors:"Reznikov N, Dagdeviren D, Tamimi Marino F, Glorieux F, Rauch F, Retrouvey JM.",
          title:"Cone-beam computed tomography of Osteogenesis Imperfecta types III and IV: Three-dimensional evaluation of craniofacial features and upper airways",
          prelink:"J Bone Miner Res Plus, 2019, 3(6): ",
          link:"https://doi.org/10.1002/jbm4.10124",
          postlink:"",
        },
        {
          id: 19,
          authors:"Autefage H,  Allen F, Tang HM, Kallepitis C, Gentleman E, Reznikov N,  Nitiputri K, Nommeots-Nomm A, O’Donnell MD,  Lange C, Seidt BM, Kim TB, Lee PD, Pierce BF, Wagermaier W, Fratzl P, Goodship A, Jones JR, Blunn G, Stevens MM.",
          title:"Multiscale analyses reveal native-like lamellar bone repair and near perfect bone-contact with porous strontium-loaded bioactive glass.",
          prelink:"Biomaterials, 2019, 209:152-162. ",
          link:"https://doi.org/10.1016/j.biomaterials.2019.03.035",
          postlink:"",
        },
        {
          id: 18,
          authors:"Ghouse S, Reznikov N, Boughton O, Babu S, Ng G, Blunn G, Cobb J, Stevens MM, Jeffers J.",
          title:"The design and in vivo testing of a locally stiffness-matched porous scaffold",
          prelink:"Applied Materials Today, 2019, 15:377-388. ",
          link:"https://doi.org/10.1016/j.apmt.2019.02.017",
          postlink:"",
        },
        {
          id: 17,
          authors:"Reznikov N, Boughton O, Ghouse S, Blunn G, Weston A, Collinson L, Jeffers J, Cobb J, Stevens M.",
          title:"Individual response variations in scaffold-guided bone regeneration are determined by independent strain- and injury-induced mechanisms",
          prelink:"Biomaterials, 2019, 194: 183-194. ",
          link:"https://doi.org/10.1016/j.biomaterials.2018.11.026",
          postlink:"",
        },
        {
          id: 16,
          authors: "Reznikov N, Bilton M, Lari L, Stevens MM, Kroeger R.",
          title:"Fractal-like hierarchical organization of bone begins at the atomic level",
          prelink:"Science, 2018, 360: eaao2189.  ",
          link:"https://doi.org/10.1126/science.aao2189",
          postlink:"",
        },
        {
          id: 15,
          authors:"Silvent J, Akiva A, Brumfeld V, Reznikov N, Rechav K, Yaniv K, Addadi L, Weiner S.",
          title:"Embryogenic zebrafish skeleton development: high resolution micro-CT imaging for phenotype identification",
          prelink:"PLoS ONE, 2017; 12(12): e0177731 ",
          link:"https://doi.org/10.1371/journal.pone.0177731",
          postlink:"",
        },
        {
          id: 14,
          authors: "Rowan S, Chang M-L, Reznikov N, Taylor A.",
          title:"Disassembly of the lens fiber cell nucleus to create a clear lens: The p27 descent",
          prelink:"Exper Eye Res, 2017; 156:72-78. ",
          link:"https://doi.org/10.1016/j.exer.2016.02.011",
          postlink:"",
        },
        {
          id: 13,
          authors: "Ben-Zvi Y*, Reznikov N*, Shahar R, Weiner S.",
          title:"3D architecture of trabecular bone in the pig mandible and femur: Inter-trabecular angle distributions",
          prelink:"Front Mater (Special Issue: Computed Tomography-Based Biomaterials), 2017 ",
          link:"https://doi.org/10.3389/fmats.2017.00029",
          postlink:"",
        },
        {
          id: 12,
          authors:"Reznikov N, Phillips C, Cooke M, Garbout A, Ahmed F, Stevens MM.",
          title:"Functional adaptation of the calcaneus in historical foot binding",
          prelink:"J Bone Miner Res, 2017, 32(9):1915-1925 ",
          link:"https://doi.org/10.1002/jbmr.3185",
          postlink:"(cover article, and received American Society for Bone and Mineral Research / Journal of Bone and Mineral Research Raisz-Drezner Award)",
        },
        {
          id: 11,
          authors:"Kim E, Zwi-Dantsis L, Reznikov N, Hansel CS, Agarwal S, Stevens MM.",
          title:"One-pot synthesis of multiple protein-encapsulated DNA flowers and their application in intracellular protein delivery",
          prelink:"Adv Mater, 2017, 29:1701086 ",
          link:"https://doi.org/10.1002/adma.201701086",
          postlink:"",
        },
        {
          id: 10,
          authors: "Reznikov N, Steele JAM, Fratzl P, Stevens MM.",
          title:"A materials science vision of extracellular matrix mineralization",
          prelink:"Nature Reviews Mater, 2016:16041. ",
          link:"https://doi.org/10.1038/natrevmats.2016.41",
          postlink:"",
        },
        {
          id: 9,
          authors:"Reznikov N, Chase H, Ben Zvi Y, Tarle V, Singer M, Brumfeld V, Shahar R, Weiner S.",
          title:"Intertrabecular angle: a new topological parameter of trabecular bone architecture in the human proximal femur",
          prelink:"Acta Biomater, 2016; 44:65-72. ",
          link:"https://doi.org/10.1016/j.actbio.2016.08.040",
          postlink:"",
        },
        {
          id: 8,
          authors: "Reznikov N, Chase H, Brumfeld V, Shahar R, Weiner S.",
          title:"The 3D Structure of the collagen fibril network in human trabecular bone: relation to trabecular organization",
          prelink:"Bone, 2015; 71:189-195. ",
          link:"https://doi.org/10.1016/j.bone.2014.10.017",
          postlink:"",
        },
        {
          id: 7,
          authors: "Atkins A, Reznikov N, Ofer L, Masic A, Weiner S, Shahar R.",
          title:"The three-dimensional structure of anosteocytic lamellated bone of fish",
          prelink:"Acta Biomater, 2015; 13:311-323. ",
          link:"https://doi.org/10.1016/j.actbio.2014.10.025",
          postlink:"",
        },
        {
          id: 6,
          authors: "Reznikov N, Shahar R, Weiner S.",
          title: "Bone hierarchical structure in three dimensions",
          prelink:"Acta Biomater, 2014; 10:3815-3826. ",
          link:"https://doi.org/10.1016/j.actbio.2014.05.024",
          postlink:"",
        },
        {
          id: 5,
          authors: "Almany-Magal R, Reznikov N, Shahar R, Weiner S.",
          title:"Three-dimensional structure of minipig fibrolamellar bone: adaptation to axial loading",
          prelink:"J Struct Biol, 2014; 186:253-264. ",
          link:"https://doi.org/10.1016/j.jsb.2014.03.007",
          postlink:"",
        },
        {
          id: 4,
          authors: "Reznikov N, Shahar R, Weiner S.",
          title:"Three-dimensional structure of human lamellar bone: the presence of two different materials and new insights into the hierarchical organization",
          prelink:"Bone, 2014; 59:93-104. ",
          link:"https://doi.org/10.1016/j.bone.2013.10.023",
          postlink:"",
        },
        {
          id: 3,
          authors: "Reznikov N, Almany-Magal R, Shahar R, Weiner S.",
          title:"Three-dimensional imaging of collagen fibril organization in rat circumferential lamellar bone using a dual beam electron microscope reveals ordered and disordered sub-lamellar structures",
          prelink:"Bone, 2013; 52:676-683. ",
          link:"https://doi.org/10.1016/j.bone.2012.10.034",
          postlink:"",
        },
        {
          id: 2,
          authors: "Faingold A, Cohen S, Reznikov N, Wagner DH.",
          title:"Osteonal lamellae elementary units: lamellar microstructure, curvature and mechanical properties",
          prelink:"Acta Biomater, 2013; 9:5956-5962. ",
          link:"https://doi.org/10.1016/j.actbio.2012.11.032",
          postlink:"",
        },
        {
          id: 1,
          authors: "Reznikov N, Barkana I, Abed Y, Har-Zion G, Redlich M.",
          title:"Measurement of friction forces between stainless steel wires and \"reduced-friction\" self-ligating brackets",
          prelink:"Am J Orth Dent Orthop, 2010; 138:330-338. ",
          link:"https://doi.org/10.1016/j.ajodo.2008.07.025",
          postlink:"",
        },
        {
          id: 0,
          authors: "Reznikov N, Barkana I, Abed Y, Har-Zion G, Redlich M.",
          title:"Influence of friction resistance on expression of superelastic properties of initial NiTi wires in \"reduced friction\" and conventional bracket systems",
          prelink:"J Dent Biomech, 2010; 1:613142. ",
          link:"http://dx.doi.org/10.4061/2010/613142",
          postlink:"",
        },
      ]

    // pubs.sort((a,b) => a.id)
</script>

<div id="Pubs">
    {#each pubs as pub, i}
        <h3>{i+1}. {pub.authors}</h3>
        <h2>{pub.title}</h2>
        <p>{pub.prelink} <a href={pub.link}>{pub.link}</a> {pub.postlink}</p>
    {/each}
</div>

<style>
    h3 {
        font-size: 1.5em;
        font-weight: 400;
        margin: 0.5em 0;
    }

    h2{
        font-size: 1.5em;
        font-weight: 400;

        font-style: italic;
        margin: 0.5em 0;

    }

    p {
        font-size: 1em;
        margin: 0.5em 0;

    }
    a {
        color: var(--main-accent);
    }

    a:visited{
        color: var(--secondary-accent);
    }
</style>
