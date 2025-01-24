const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
const nav = document.getElementById("nav");
const destinationImage = document.getElementById("destinationImage");
const destinationText = document.getElementById("destinationText");

const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

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

console.log(moonData);

import { all } from "/data.js";


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
                  src="${moonData.images.png}"
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
                  src="${marsData.images.png}"
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
                  src="${europaData.images.png}"
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
                  src="${titanData.images.png}"
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
