const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
const nav = document.getElementById("nav");
const destinationImage = document.getElementById("destinationImage");
const destinationText = document.getElementById("destinationText");

const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

///date///
const all = [
  {
    destinations: [
      {
        name: "Moon",
        images: {
          png: "/assets/destination/image-moon.png",
          webp: "/assets/destination/image-moon.webp",
        },
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
      },
      {
        name: "Mars",
        images: {
          png: "/assets/destination/image-mars.png",
          webp: "/assets/destination/image-mars.webp",
        },
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
      },
      {
        name: "Europa",
        images: {
          png: "/assets/destination/image-europa.png",
          webp: "/assets/destination/image-europa.webp",
        },
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
      },
      {
        name: "Titan",
        images: {
          png: "/assets/destination/image-titan.png",
          webp: "/assets/destination/image-titan.webp",
        },
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
      },
    ],
    crew: [
      {
        name: "Douglas Hurley",
        images: {
          png: "./assets/crew/image-douglas-hurley.png",
          webp: "./assets/crew/image-douglas-hurley.webp",
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        name: "Mark Shuttleworth",
        images: {
          png: "./assets/crew/image-mark-shuttleworth.png",
          webp: "./assets/crew/image-mark-shuttleworth.webp",
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        name: "Victor Glover",
        images: {
          png: "./assets/crew/image-victor-glover.png",
          webp: "./assets/crew/image-victor-glover.webp",
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
      {
        name: "Anousheh Ansari",
        images: {
          png: "./assets/crew/image-anousheh-ansari.png",
          webp: "./assets/crew/image-anousheh-ansari.webp",
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ],
    technology: [
      {
        name: "Launch vehicle",
        images: {
          portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
          landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        name: "Spaceport",
        images: {
          portrait: "./assets/technology/image-spaceport-portrait.jpg",
          landscape: "./assets/technology/image-spaceport-landscape.jpg",
        },
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        name: "Space capsule",
        images: {
          portrait: "./assets/technology/image-space-capsule-portrait.jpg",
          landscape: "./assets/technology/image-space-capsule-landscape.jpg",
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ],
  },
];

///

openbtn.addEventListener("click", () => {
  openbtn.style.display = "none";
  nav.style.display = "flex";
});
closebtn.addEventListener("click", () => {
  openbtn.style.display = "flex";
  nav.style.display = "none";
});

const moonData = all[0].destinations[0];
const marsData = all[0].destinations[1];
const europaData = all[0].destinations[2];
const titanData = all[0].destinations[3];



moon.addEventListener("click", () => {
  moon.classList.add('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  mars.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  europa.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  titan.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  

  titan.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  europa.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  mars.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 

  destinationImage.innerHTML=`
       
                <img
                  class="w-[445px] max-[768px]:w-[300px] max-[555px]:w-[170px]"
                  src="${moonData.images.webp}"
                  alt="moon"
                />
`
  destinationText.innerHTML=`
       
              <h1
                  class="text-[100px] uppercase max-[1024px]:text-[100px] max-[1056px]:m-0 max-[768px]:text-[80px] max-[555px]:text-[56px] text-[#ffff]"
                  style="font-family: Bellefair Regular"
                >
                  ${moonData.name}
                </h1>
                <p
                  class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] text-[#D0D6F9] mb-[54px]"
                >
                  ${moonData.description}
                </p>
                <hr
                  class="max-[1056px]:w-[100%] w-[60%] max-w-[480px] border-[#979797] mb-[28px]"
                />
                <div
                  class="w-[60%] max-w-[480px] min-w-[300px] flex justify-between"
                >
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Avg. distance
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                    ${moonData.distance}
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Est. travel time
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                      ${moonData.travel}
                    </p>
                  </div>
                </div>
`

});
mars.addEventListener("click", () => {
  mars.classList.add('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  europa.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  moon.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  titan.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  
 
  titan.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  europa.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  moon.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 

  destinationImage.innerHTML=`
       
                <img
                  class="w-[445px] max-[768px]:w-[300px] max-[555px]:w-[170px]"
                  src="${marsData.images.webp}"
                  alt="moon"
                />
`
  destinationText.innerHTML=`
       
              <h1
                  class="text-[100px] uppercase max-[1024px]:text-[100px] max-[1056px]:m-0 max-[768px]:text-[80px] max-[555px]:text-[56px] text-[#ffff]"
                  style="font-family: Bellefair Regular"
                >
                  ${marsData.name}
                </h1>
                <p
                  class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] text-[#D0D6F9] mb-[54px]"
                >
                  ${marsData.description}
                </p>
                <hr
                  class="max-[1056px]:w-[100%] w-[60%] max-w-[480px] border-[#979797] mb-[28px]"
                />
                <div
                  class="w-[60%] max-w-[480px] min-w-[300px] flex justify-between"
                >
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Avg. distance
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                    ${marsData.distance}
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Est. travel time
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                      ${marsData.travel}
                    </p>
                  </div>
                </div>
`

});
europa.addEventListener("click", () => {
  europa.classList.add('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  mars.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  moon.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  titan.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  
 
  titan.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  mars.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  moon.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 

  destinationImage.innerHTML=`
       
                <img
                  class="w-[445px] max-[768px]:w-[300px] max-[555px]:w-[170px]"
                  src="${europaData.images.webp}"
                  alt="moon"
                />
`
  destinationText.innerHTML=`
       
              <h1
                  class="text-[100px] uppercase max-[1024px]:text-[100px] max-[1056px]:m-0 max-[768px]:text-[80px] max-[555px]:text-[56px] text-[#ffff]"
                  style="font-family: Bellefair Regular"
                >
                  ${europaData.name}
                </h1>
                <p
                  class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] text-[#D0D6F9] mb-[54px]"
                >
                  ${europaData.description}
                </p>
                <hr
                  class="max-[1056px]:w-[100%] w-[60%] max-w-[480px] border-[#979797] mb-[28px]"
                />
                <div
                  class="w-[60%] max-w-[480px] min-w-[300px] flex justify-between"
                >
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Avg. distance
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                    ${europaData.distance}
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Est. travel time
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                      ${europaData.travel}
                    </p>
                  </div>
                </div>
`

});
titan.addEventListener("click", () => {
  titan.classList.add('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  mars.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  moon.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  europa.classList.remove('relative', 'after:absolute', 'after:content-[""]', 'after:top-[30px]', 'after:left-0', 'after:w-[100%]', 'after:h-[3px]', 'after:bg-[#fff]'); 
  
  europa.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  mars.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 
  moon.classList.add(
    'relative',
    'hover:after:absolute',
    "hover:after:content-['']",
    'hover:after:top-[30px]',
    'hover:after:left-0',
    'hover:after:w-[100%]',
    'hover:after:h-[3px]',
    'hover:after:bg-[#ffffff8a]'
  ); 

  destinationImage.innerHTML=`
       
                <img
                  class="w-[445px] max-[768px]:w-[300px] max-[555px]:w-[170px]"
                  src="${titanData.images.webp}"
                  alt="moon"
                />
`
  destinationText.innerHTML=`
       
              <h1
                  class="text-[100px] uppercase max-[1024px]:text-[100px] max-[1056px]:m-0 max-[768px]:text-[80px] max-[555px]:text-[56px] text-[#ffff]"
                  style="font-family: Bellefair Regular"
                >
                  ${titanData.name}
                </h1>
                <p
                  class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] text-[#D0D6F9] mb-[54px]"
                >
                  ${titanData.description}
                </p>
                <hr
                  class="max-[1056px]:w-[100%] w-[60%] max-w-[480px] border-[#979797] mb-[28px]"
                />
                <div
                  class="w-[60%] max-w-[480px] min-w-[300px] flex justify-between"
                >
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Avg. distance
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                    ${titanData.distance}
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[18px] max-[1056px]:max-w-[100%] max-w-[444px] leading-[32px] uppercase text-[#D0D6F9] mb-[12px]"
                    >
                      Est. travel time
                    </p>
                    <p
                      style="font-family: Bellefair Regular"
                      class="text-[28px] text-[#ffff]"
                    >
                      ${titanData.travel}
                    </p>
                  </div>
                </div>
`

});
