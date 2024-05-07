import { Pictures } from "./types";

const API_KEY = process.env.NASA_API_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

// export const pictures = [
//   {
//     title: "NGC 1232: A Grand Design Spiral Galaxy",
//     date: "2024-01-01",
//     explanation:
//       "Galaxies are fascinating not only for what is visible, but for what is invisible. Grand spiral galaxy NGC 1232, captured in detail by one of the Very Large Telescopes, is a good example.  The visible is dominated by millions of bright stars and dark dust, caught up in a gravitational swirl of spiral arms revolving about the center. Open clusters containing bright blue stars can be seen sprinkled along these spiral arms, while dark lanes of dense interstellar dust can be seen sprinkled between them. Less visible, but detectable, are billions of dim normal stars and vast tracts of interstellar gas, together wielding such high mass that they dominate the dynamics of the inner galaxy.  Leading theories indicate that even greater amounts of matter are invisible, in a form we don't yet know. This pervasive dark matter is postulated, in part, to explain the motions of the visible matter in the outer regions of galaxies.    Free APOD Lecture: January 9, 2024 to the Amateur Astronomers of Association of New York",
//     mediaType: "image",
//     thumbnailUrl: "https://apod.nasa.gov/apod/image/2401/ngc1232b_vlt_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/ngc1232b_vlt_3969.jpg",
//   },
//   {
//     title: "Rocket Transits Rippling Moon",
//     date: "2024-01-02",
//     explanation:
//       "Can a rocket make the Moon ripple? No, but it can make a background moon appear wavy.  The rocket, in this case, was a SpaceX Falcon Heavy that blasted off from NASA's Kennedy Space Center last week. In the featured launch picture, the rocket's exhaust plume glows beyond its projection onto the distant, rising, and nearly full moon.  Oddly, the Moon's lower edge shows unusual drip-like ripples. The Moon itself, far in the distance, was really unchanged.  The physical cause of these apparent ripples was pockets of relatively hot or rarefied air deflecting moonlight less strongly than pockets of relatively cool or compressed air: refraction. Although the shot was planned, the timing of the launch had to be just right for the rocket to be transiting the Moon during this single exposure.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/FalconMoon_Madow_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/FalconMoon_Madow_1710.jpg",
//   },
//   {
//     title: "A SAR Arc from New Zealand",
//     date: "2024-01-03",
//     explanation:
//       "What is that unusual red halo surrounding this aurora?  It is a Stable Auroral Red (SAR) arc. SAR arcs are rare and have only been acknowledged and studied since 1954.  The featured wide-angle photograph, capturing nearly an entire SAR arc surrounding more common green and red aurora, was taken earlier this month from Poolburn, New Zealand, during an especially energetic geomagnetic storm. Why SAR arcs form remains a topic of research, but is likely related to Earth's protective magnetic field, a field created by molten iron flowing deep inside the Earth.  This magnetic field usually redirects incoming charged particles from the Sun's wind toward the Earth's poles. However, it also traps a ring of ions closer to the equator, where they can gain energy from the magnetosphere during high solar activity. The energetic electrons in this ion ring can collide with and excite oxygen higher in Earth's ionosphere than typical auroras, causing the oxygen to glow red. Ongoing research has uncovered evidence that a red SAR arc can even transform into a purple and green STEVE.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/SarArcNz_McDonald_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/SarArcNz_McDonald_2048.jpg",
//   },
//   {
//     title: "Zeta Oph: Runaway Star",
//     date: "2024-01-04",
//     explanation:
//       "Like a ship plowing through cosmic seas, runaway star Zeta Ophiuchi produces the arcing interstellar bow wave or bow shock seen in this stunning infrared portrait. In the false-color view, bluish Zeta Oph, a star about 20 times more massive than the Sun, lies near the center of the frame, moving toward the left at 24 kilometers per second. Its strong stellar wind precedes it, compressing and heating the dusty interstellar material and shaping the curved shock front. What set this star in motion? Zeta Oph was likely once a member of a binary star system, its companion star was more massive and hence shorter lived. When the companion exploded as a supernova catastrophically losing mass, Zeta Oph was flung out of the system.  About 460 light-years away, Zeta Oph is 65,000 times more luminous than the Sun and would be one of the brighter stars in the sky if it weren't surrounded by obscuring dust. The image spans about 1.5 degrees or 12 light-years at the estimated distance of Zeta Ophiuchi. In January 2020, NASA placed the Spitzer Space Telescope in safe mode, ending its 16 successful years of exploring the cosmos.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/ZetaOph_spitzer_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/ZetaOph_spitzer_4015.jpg",
//   },
//   {
//     title: "Trapezium: At the Heart of Orion",
//     date: "2024-01-05",
//     explanation:
//       "Near the center of this sharp cosmic portrait, at the heart of the Orion Nebula, are four hot, massive stars known as the Trapezium. Gathered within a region about 1.5 light-years in radius, they dominate the core of the dense Orion Nebula Star Cluster. Ultraviolet ionizing radiation from the Trapezium stars, mostly from the brightest star Theta-1 Orionis C powers the complex star forming region's entire visible glow. About three million years old, the Orion Nebula Cluster was even more compact in its younger years and a dynamical study indicates that runaway stellar collisions at an earlier age may have formed a black hole with more than 100 times the mass of the Sun. The presence of a black hole within the cluster could explain the observed high velocities of the Trapezium stars. The Orion Nebula's distance of some 1,500 light-years would make it one of the closest known black holes to planet Earth.",
//     mediaType: "image",
//     thumbnailUrl: "https://apod.nasa.gov/apod/image/2401/Image964_1024.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/Image964.jpg",
//   },
//   {
//     title: "The Snows of Churyumov-Gerasimenko",
//     date: "2024-01-06",
//     explanation:
//       "You couldn't really be caught in this blizzard while standing by a cliff on periodic comet 67P/Churyumov-Gerasimenko. Orbiting the comet in June of 2016, the Rosetta spacecraft's narrow angle camera did record streaks of dust and ice particles similar to snow as they drifted across the field of view close to the camera and above the comet's surface. Still, some of the bright specks in the scene are likely due to a rain of energetic charged particles or cosmic rays hitting the camera, and the dense background of stars in the direction of the constellation of the Big Dog (Canis Major). In the video, the background stars are easy to spot trailing from top to bottom. The stunning movie was constructed from 33 consecutive images taken over 25 minutes while Rosetta cruised some 13 kilometers from the comet's nucleus. In September 2016, the nucleus became the final resting place for the Rosetta spacecraft after its mission was ended with a successful controlled impact on 67P/Churyumov-Gerasimenko.",
//     mediaType: "video",
//     thumbnailUrl: "https://img.youtube.com/vi/PpyPgJHKxSw/0.jpg",
//     url: "https://www.youtube.com/embed/PpyPgJHKxSw?rel=0",
//   },
//   {
//     title: "The Cat's Eye Nebula in Optical and X-ray",
//     date: "2024-01-07",
//     explanation:
//       "To some it looks like a cat's eye. To others, perhaps like a giant cosmic conch shell.  It is actually one of the brightest and most highly detailed planetary nebula known, composed of gas expelled in the brief yet glorious phase near the end of life of a Sun-like star. This nebula's dying central star may have produced the outer circular concentric shells by shrugging off outer layers in a series of regular convulsions. The formation of the beautiful, complex-yet-symmetric inner structures, however, is not well understood. The featured image is a composite of a digitally sharpened Hubble Space Telescope image with X-ray light captured by the orbiting Chandra Observatory.  The exquisite floating space statue spans over half a light-year across. Of course, gazing into this Cat's Eye, humanity may well be seeing the fate of our sun, destined to enter its own planetary nebula phase of evolution ... in about 5 billion years.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/CatsEye_HubblePohl_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/CatsEye_HubblePohl_1278.jpg",
//   },
//   {
//     title: "The Phases of Venus",
//     date: "2024-01-08",
//     explanation:
//       "Venus goes through phases.  Just like our Moon, Venus can appear as a full circular disk, a thin crescent, or anything in between.  Venus, frequently the brightest object in the post-sunset or pre-sunrise sky, appears so small, however, that it usually requires binoculars or a small telescope to clearly see its current phase.  The featured time-lapse sequence was taken over the course of six months in 2015 from Surgères, Charente-Maritime, France, and shows not only how Venus changes phase, but changes angular size as well. When Venus is on the far side of the Sun from the Earth, it appears angularly smallest and nearest to full phase, while when Venus and Earth are on the same side of the Sun, Venus appears larger, but as a crescent. This month Venus rises before dawn in waxing gibbous phases.    Free APOD Lecture: January 9, 2024 to the Amateur Astronomers of Association of New York",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/VenusPhases_Gonzales_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/VenusPhases_Gonzales_1280.jpg",
//   },
//   {
//     title: "Thor's Helmet",
//     date: "2024-01-09",
//     explanation:
//       "Thor not only has his own day (Thursday), but a helmet in the heavens.  Popularly called Thor's Helmet, NGC 2359 is a hat-shaped cosmic cloud with wing-like appendages. Heroically sized even for a Norse god, Thor's Helmet is about 30 light-years across. In fact, the cosmic head-covering is more like an interstellar bubble, blown with a fast wind from the bright, massive star near the bubble's center. Known as a Wolf-Rayet star, the central star is an extremely hot giant thought to be in a brief, pre-supernova stage of evolution. NGC 2359 is located about 15,000 light-years away toward the constellation of the Great Overdog. This remarkably sharp image is a mixed cocktail of data from  narrowband filters, capturing not only natural looking stars but details of the nebula's filamentary structures. The star in the center of Thor's Helmet is expected to explode in a spectacular supernova sometime within the next few thousand years.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/ThorsHelmet_Biswas_960.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/ThorsHelmet_Biswas_1436.jpg",
//   },
//   {
//     title: "The Light, the Dark, and the Dusty",
//     date: "2024-01-10",
//     explanation:
//       "This colorful skyscape spans about three full moons across nebula rich starfields along the plane of our Milky Way Galaxy toward the royal northern constellation Cepheus. Near the edge of the region's massive molecular cloud some 2,400 light-years away, bright reddish emission region Sharpless (Sh)2-155 is at the center of the frame, also known as the Cave Nebula. About 10 light-years across the cosmic cave's bright walls of gas are ionized by ultraviolet light from the hot young stars around it. Dusty bluish reflection nebulae, like vdB 155 at the left, and dense obscuring clouds of dust also abound on the interstellar canvas. Astronomical explorations have revealed other dramatic signs of star formation, including the bright reddish fleck of Herbig-Haro (HH) 168. At the upper left in the frame, the Herbig-Haro object emission is generated by energetic jets from a newborn star.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/Sh2_155_4K_5Mb1024.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/Sh2_155_4K_5Mb.jpg",
//   },
//   {
//     title: "Quadrantids of the North",
//     date: "2024-01-11",
//     explanation:
//       "Named for a forgotten constellation, the Quadrantid Meteor Shower puts on an annual show for planet Earth's northern hemisphere skygazers. The shower's radiant on the sky lies within the old, astronomically obsolete constellation Quadrans Muralis. That location is not far from the Big Dipper asterism, known to some as the Plough, at the boundaries of the modern constellations Bootes and Draco. The Big Dipper \"handle\" stars are near the upper right corner in this frame, with the meteor shower radiant just below. North star Polaris is toward the top left. Pointing back toward the radiant, Quadrantid meteors streak through the night in this skyscape from Jangsu, South Korea. The composite image was recorded in the hours around the shower's peak on January 4, 2024. A likely source of the dust stream that produces Quadrantid meteors was identified in 2003 as an asteroid.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/2024_quadrantids_240104_med_bsyeom1024.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/2024_quadrantids_240104_med_bsyeom.jpg",
//   },
//   {
//     title: "Good Morning Moon",
//     date: "2024-01-12",
//     explanation:
//       "Yesterday, the Moon was New. But on January 9, early morning risers around planet Earth were treated to the sight of an old Moon, low in the east as the sky grew bright before dawn. Above the city of Saarburg in Rhineland-Palatinate, western Germany, this simple snapshot found the waning Moon's sunlit crescent just before sunrise. But also never wandering far from the Sun in Earth's sky, inner planets Venus and Mercury shared the cold morning skyview. In the foreground are the historic city's tower and castle with ruins from the 10th century.",
//     mediaType: "image",
//     thumbnailUrl:
//       "https://apod.nasa.gov/apod/image/2401/HimmlichesDreieckSaarburg_TWAN_mercurybildweb1024.jpg",
//     url: "https://apod.nasa.gov/apod/image/2401/HimmlichesDreieckSaarburg_TWAN_mercurybildweb.jpg",
//   },
// ];

const pictures: Pictures[] = [];

const api = {
  list: async (startDate: string, endDate: string): Promise<any> => {
    const data = await fetch(
      `${APOD_URL}?api_key=${API_KEY}&thumbs=true&start_date=${startDate}&end_date=${endDate}`
    )
      .then((res) => res.json())
      .then((datos) => {
        return datos;
      });

    return data;
  },
  //   fetch: async (title: Pictures["title"]): Promise<Pictures> => {
  //     const restaurant = pictures.find((pictures) => pictures.title === title);

  //     if (!restaurant) {
  //       throw new Error(`Restaurant with name ${name} not found`);
  //     }

  //     return restaurant;
  //   },
  //   search: async (query: string): Promise<Pictures[]> => {
  //     const results = await api
  //       .list()
  //       .then((restos) =>
  //         restos.filter((res) =>
  //           res.title.toLowerCase().includes(query?.toLowerCase())
  //         )
  //       );

  //     // Los retornamos
  //     return results;
  //   },
};

export default api;
