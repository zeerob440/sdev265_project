// ship_controller.js controls the UI output on inside the ship_controller class from future.css

/* a series of vars and functions are declared, below that, an if-if structure contains event listeners to invoke the functions
so the program work across multiple pages.
*/

/* notes form frame_c.html to make writing js function target easier.
    <button id="om_astral_nav">Astral Nav</button>
    <button id="om_armory">Armory</button>
    <button id="om_propulsion">Propulsion</button>
    <button id="om_atmosphere_vent">Vent Atmosphere</button>
    <div class="atmosphere_output"></div>
    <div class="astral_nav_output"></div>
    <div class="armory_output"></div>
    <div class="propulsion_output"></div>
 </div>
*/
// var to target button frame_c.html, om_atmosphere_vent
const om_atmosphere_vent_button = document.getElementById('om_atmosphere_vent');
// function to target innerHTML space frame_c.html atmosphere_output
function ventAtmos(){
    document.getElementById('atmosphere_output').innerHTML = `<p>LIFE SAFETY VIOLATION: o2 cannot be reduced to below 19.5% while ship is occupied!</p>`;
   }

// var to target button frame_c.html, om_armory   
const om_armory_button = document.getElementById('om_armory');
// function for target innerHTML space frame_c.html, om_output
function armoryStatus(){
    document.getElementById('armory_output').innerHTML =`<p>01 MK-540 Electro-Magnetic Carbine, with 450 depleted U92 munitions operational.
    Other armaments depleted from attempted apprehension of UNREGISTERED PASSENGER 01 in 2322.</p>`;
}

// var tp target button frame_c.html om_propulsion
const om_propulsion_button = document.getElementById('om_propulsion');
// function for target innerHTML space frame_c.html, propulsion_output
function propulsionStatus(){
    document.getElementById('propulsion_output').innerHTML =`<p>ERROR 1532; REMOTE ACCESS NOT AUTHORIZED FROM THIS CONSOLE. LOCAL ACCESS REQUIRED TO RESTART
    TESSERACT DRIVE. TEMPORAL ANOMALIES DETECT IN THIS FRAME.</p>`;
}

// var tp target button frame_c.html om_astral_nav
const om_astral_nav_button = document.getElementById('om_astral_nav');
// function to target innerHTML frame_c.html om_astral output
function astralNavStatus(){
document.getElementById('astral_nav_output').innerHTML =`<p>ERROR 1203; REMOTE ACCESS NOT AUTHORIZED FROM THIS CONSOLE. LOCAL ACCESS REQUIRED TO RESTART ASTRAL NAVIGATION.</p>`;
}

// var and function for armory1.html
const mk540_button =document.getElementById('om_mk540');

function mK540Status(){
    document.getElementById('mk540_output').innerHTML=
    `The Mk-540 is a rail-carbine. It accelerates a 12.95 g, 6.1mm depleted uranium hypersonic projectile at 1800 M/PS.
     it delivers 21,000 (J) of energy on target. The Mk-540 is fed from a 45-round dorsal magazine, and
     powered by a tungsten nanofilliment solid-state lithium cell.<p> The Mk-540EMC has 3 fire modes, semi, auto, and 2-round hyperburst.</p>`;
}

//var and function for armory1.html mk540 diagram.
const mk540_diagram_button =document.getElementById('om_mk540_diagram');
function printDiagram(){
    document.getElementById('mk540_diagram_output').innerHTML`<img src='../images/mk540emc.png' class='mk540_om'>`;
    console.log('Image loaded.');
}
//var and function for propulsion2.html 
const tdrive_status_button =document.getElementById('om_tdrive_status');

function tDriveStatus(){
    document.getElementById('tdrive_status_output').innerHTML=
    `<p>Depleted Uranium detected in Tesseract Core. Cannot resolve FTL Dimensional Shift.<br>ASTRAL NAVIGATION: OFFLINE<br>WARNING: BLIND JUMP IMMINENT!</p>`;  
}
// var and function for astral1.html
const astral_solution_button =document.getElementById('om_astral_nav_solution');

function astralSolutionOutput(){
    document.getElementById('astral_solution_output').innerHTML=
    `ASTRAL SOLUTION<br>MODEL: HELIOCENTRIC<br>SYSTEM: SOL<br>DISTANCE RELATIVE STAR: 30.7AU<br>VECTOR: X -3.92e+09 KM, Y +2.18e+09 KM, Z +1.24e+08 KM<br>
    ORBIT: STABLE<br>LOCAL BODY: OBJECT 899 (NEPTUNE)`;
}
//if if structure to allow this program to be used on multiple pages.

// event listener for frame_c.html om_atmosphere_vent.
if (om_atmosphere_vent_button){
    om_atmosphere_vent_button.addEventListener('click', ventAtmos);
}
//event listener for frame_c.html for om_armory
if (om_armory_button){
    om_armory_button.addEventListener('click', armoryStatus);
}
//event listener for frame_c.html om_propulsion
if (om_propulsion_button){
    om_propulsion_button.addEventListener('click', propulsionStatus);
}
//event listener for frame_c.html om_astral_nav
if (om_astral_nav_button){
    om_astral_nav_button.addEventListener('click', astralNavStatus);
}

//event listener for mk540Status()
if (mk540_button){
    mk540_button.addEventListener('click', mK540Status);
    console.log('BFG Found!');
}

//event listener for tDriveStatus
if (tdrive_status_button){
    tdrive_status_button.addEventListener('click', tDriveStatus);
    console.log('Forward to the past!');
}

//eventlistener for astralSolutionOutput
if (astral_solution_button){
    astral_solution_button.addEventListener('click', astralSolutionOutput);
    console.log('Neptune Orbit discovered!');
}

// eventlistener for armory1.html mk540diagram
if (mk540_diagram_button){
    mk540_diagram_button.addEventListener('click', printDiagram);
}