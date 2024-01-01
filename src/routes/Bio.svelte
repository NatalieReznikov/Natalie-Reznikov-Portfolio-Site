<script lang="ts">
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	let width: number = 0;
	let height: number = 0;

    $: loaded = !! width;

    import df from "$lib/images/occupations/df logo.webp";
    import hebrew from "$lib/images/occupations/hebrew u.webp";
    import icl from "$lib/images/occupations/icl.webp";
    import mcgill from "$lib/images/occupations/mcgill_modified.webp";
    import weizmann from "$lib/images/occupations/Weizmann-Institute-of-Science_logo_modified.webp";
    import df_mac from "$lib/images/occupations/df logo.png";
    import hebrew_mac from "$lib/images/occupations/hebrew u.png";
    import icl_mac from "$lib/images/occupations/icl.png";
    import mcgill_mac from "$lib/images/occupations/mcgill_modified.png";
    import weizmann_mac from "$lib/images/occupations/Weizmann-Institute-of-Science_logo_modified.png";

	let occupations = [
        
        {
            from: new Date(2020, 0),
            to: new Date(),
            title: 'McGill University, Montreal, QC, Canada',
            subtitle: 'Assistant Professor',
            content: '<em> I study structure-function relationships in living organisms (animals and plants), structural water and its role in the architecture and behavior of natural and artificial materials, biomineralization, and novel approaches to 3D imaging and image analysis.  </em>',
            image: mcgill,
            mac_image: mcgill_mac,
            image_alt: "McGill Unversity Logo"
        },
        {
            from: new Date(2018, 0),
            to: new Date(2020, 0),
            title: 'Object Research Systems Inc., Montreal, QC, Canada',
            subtitle: 'Applications Specialist',
            content: '<em> I designed, assessed and validated novel modules for 3D image analysis for Dragonfly software. I also produced tutorials and educational videos, provided hands-on and online training, troubleshooting and technical support for academic users. </em>',
            image: df,
            mac_image: df_mac,
            image_alt: "Object Research Systems Logo"
        },
        {
            from: new Date(2017, 0),
            to: new Date(2018, 0),
            title: 'McGill University, Montreal, QC, Canada',
            subtitle: 'Postdoctoral Research Fellow, Faculty of Dentistry',
            content: '<em> My project aimed at detecting topological differences of the trabecular bone network in pathological bone samples and comparison of the findings with those of normal trabecular bone to assess skeletal adaptation. This work was based on my original algorithm called Inter-Trabecular Angle analysis. My secondary project was 3D analysis of craniofacial deformations in the rare inherited disease Osteogenesis Imperfecta. </em>',
            image: mcgill,
            mac_image: mcgill_mac,
            image_alt: "McGill Unversity Logo"
        },
        {
            from: new Date(2014, 0),
            to: new Date(2017, 0),
            title: 'Imperial College London, London, UK',
            subtitle: 'Postdoctoral Research Fellow, <br> Dept. of Materials, Faculty of Engineering',
            content: '<em> I developed a biomimetic 3D-printed prosthetic material for repair of large defects of trabecular bone. That novel material mimics bone’s natural shock-absorbing properties as normally found in our joints and vertebrae. Other projects included: Functional adaptation of the human foot bones; Multiscale characterization of heterotopic bone; 3D imaging and analysis of the collagen-mineral interface in bone; 3D characterization of bioglass-bone interface; 3D imaging and quantification of DNA-origami drug carriers.</em>',
            image: icl,
            mac_image: icl_mac,
            image_alt: "Imperial College London Logo"
        },
        {
            from: new Date(2010, 0),
            to: new Date(2014, 0),
            title: 'Weizmann Institute of Science, Rehovot, Israel.',
            subtitle: 'PhD, Dept. of Structural Biology',
            content: 'Thesis title: The adaptation of mechanical properties of lamellar bone tissue <br> <em> I studied the 3D organization of bone collagen – the framework principally responsible for toughness – using volumetric imaging obtained from dual-beam microscopy (FIB-SEM), and the topology of trabecular bone tissue imaged by µCT.</em>',
            image: weizmann,
            mac_image: weizmann_mac,
            image_alt: "Weizmann Institute of Science Logo"
        },
        {
            from: new Date(2006, 0),
            to: new Date(2008, 0),
            title: 'Hebrew University of Jerusalem, Jerusalem, Israel.',
            subtitle: 'MSc, Dept. of Orthodontics, Faculty of Dentistry',
            content: 'Thesis title:  Frictional properties of various types of orthodontic brackets <br> <em> This work focused on the mechanics of fixed orthodontic appliances and their surface characterization in simulated pseudo-clinical situations. </em>',
            image: hebrew,
            mac_image: hebrew_mac,
            image_alt: "Hebrew University of Jerusalem Logo"
        },
    ]
</script>
<svelte:window bind:innerHeight={height} bind:innerWidth={width}></svelte:window>


<div id="Bio">
    {#if loaded}
        <Timeline position={width > 530 ? "alternate" : "right"}>
            {#each occupations as occupation, i}
                <TimelineItem>
                    <!-- {#if width > 470} -->
                    <TimelineOppositeContent slot="opposite-content">
                        <p>{occupation.from.getFullYear()} 
                            <br> - 
                            <br>
                            {#if i === 0} 
                            Present
                            <br> Time 
                            {:else} 
                            {occupation.to.getFullYear()} 
                            {/if}
                            <br>
                            <span class="duration">
                                {occupation.to.getFullYear() - occupation.from.getFullYear()} years
                            </span>
                        </p>
                    </TimelineOppositeContent > 
                    <!-- {/if} -->
                    <TimelineSeparator>
                        <TimelineDot
                            style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
                        >
                            <picture>
                                <source srcset={occupation.mac_image} type="image/png">
                                <source src={occupation.image} type="image/webp">
                                <img src={occupation.image} alt={occupation.image_alt} />
                            </picture>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator> 
                    <TimelineContent>
                        <h3>{occupation.title}</h3>
                        <h2>{@html occupation.subtitle}</h2>
                        <p class="content">{@html occupation.content}</p>
                        <!-- {#if width <= 470} 
                            <p class="time">{occupation.from.getFullYear()} - {#if i === 0} Present Time {:else} {occupation.to.getFullYear()} {/if}<span class="duration">{occupation.to.getFullYear() - occupation.from.getFullYear()} years</span></p>
                        {/if} -->
                    </TimelineContent>
                </TimelineItem>
                
            {/each}
        
        </Timeline>
    {/if}
</div>

<style>
    div {
        font-size: clamp(0.5em, 3vw, 1em);
    }

    h3 {
        padding: 0.5em;
        background-color: var(--main-accent);
        margin: 0px;
        color: black;
        font-weight: 400;
        font-size: 1.3em;
    }
    h2 {
        padding: 0.5em;
        background-color: var(--secondary-accent);
        margin: 0px;
        font-size: 1em;
    }
    p.content {
        padding: 0.5em;
        background-color: var(--main-color);
        margin: 0px;
    }
    /* p.time {
        padding: 5px;
        background-color: var(--secondary-accent);
        margin: 0px;
        font-size: 1em;
    } */
    img,source,picture {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

    .duration{
        font-style: italic;
        color: var(--main-accent);
    }
</style>