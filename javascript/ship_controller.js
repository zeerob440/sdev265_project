// ship_controller.js controls the UI output on inside the ship_controller class from future.css

/* a series of vars and functions are declared, below that, an if-if structure contains event listeners to invoke the functions
so the program works across multiple pages.
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
// function for terminal div output frame_c.html atmosphere_output
function ventAtmos(){
    //document.getElementById('atmosphere_output').innerHTML = `<p>LIFE SAFETY VIOLATION: o2 cannot be reduced to below 19.5% while ship is occupied!</p>`;
   
    // target html ID
    const atmosphere_output = document.getElementById('atmosphere_output');
    // declare object 
    atmosphere_output.textContent = '';
    // create p element to insert into object
    const atmos_tutanota = document.createElement('p');
    // create message with textContent function
    atmos_tutanota.textContent = 'LIFE SAFETY VIOLATION: o2 cannot be reduced to below 19.5% while ship is occupied!';
    // append atmosphere_output with atmos_tutanota content.
    atmosphere_output.appendChild(atmos_tutanota);

   }

// var to target button frame_c.html, om_armory   
const om_armory_button = document.getElementById('om_armory');
// function for target innerHTML space frame_c.html, om_output
function armoryStatus(){
    /*document.getElementById('armory_output').innerHTML =`<p>01 MK-540 Electro-Magnetic Carbine, with 450 depleted U92 munitions operational.
    Other armaments depleted from attempted apprehension of UNREGISTERED PASSENGER 01 in 2322.</p>`;*/
    // target html id
    const armory_output =document.getElementById('armory_output');
    // declare object
    armory_output.textContent = '';
    // create p element 
    const armory_tutanota = document.createElement('p');
    // create message with textContent
    armory_tutanota.textContent = '01 MK-540 Electro-Magnetic Carbine, with 450 depleted U92 munitions operational.Other armaments depleted from attempted apprehension of UNREGISTERED PASSENGER 01 in 2322.';

    // apply armory_tutanota to armory_output
    armory_output.appendChild(armory_tutanota);

}

// var tp target button frame_c.html om_propulsion
const om_propulsion_button = document.getElementById('om_propulsion');
// function for target innerHTML space frame_c.html, propulsion_output
function propulsionStatus(){
    /*document.getElementById('propulsion_output').innerHTML =`<p>ERROR 1532; REMOTE ACCESS NOT AUTHORIZED FROM THIS CONSOLE. LOCAL ACCESS REQUIRED TO RESTART
    TESSERACT DRIVE. TEMPORAL ANOMALIES DETECT IN THIS FRAME.</p>`;*/
    // target html ID
    const propulsion_output = document.getElementById('propulsion_output');
    // declare object
    propulsion_output.textContent = '';
    //create p element
    const prop_tutanota = document.createElement('p');
    // create message
    prop_tutanota.textContent = 'ERROR 1532; REMOTE ACCESS NOT AUTHORIZED FROM THIS CONSOLE. LOCAL ACCESS REQUIRED TO RESTART TESSERACT DRIVE. TEMPORAL ANOMALIES DETECT IN THIS FRAME';
    // apply prop_tutanota to propulsion_output
    propulsion_output.appendChild(prop_tutanota);

}

// var tp target button frame_c.html om_astral_nav
const om_astral_nav_button = document.getElementById('om_astral_nav');
// function to target innerHTML frame_c.html om_astral output
function astralNavStatus(){
//document.getElementById('astral_nav_output').innerHTML =`<p>ERROR 1203; REMOTE ACCESS NOT AUTHORIZED FROM THIS CONSOLE. LOCAL ACCESS REQUIRED TO RESTART ASTRAL NAVIGATION.</p>`;
    // target html id
    const astral_nav_output = document.getElementById('astral_nav_output');
    // declare object
    astral_nav_output.textContent = '';
    // create p element 
    const astral_nav_tutanota = document.createElement('p');
    // create message 
    astral_nav_tutanota.textContent = 'ERROR 1203; REMOTE ACCESS NOT AUTHORIZED FROM THIS CONSOLE. LOCAL ACCESS REQUIRED TO RESTART ASTRAL NAVIGATION.';
    // append astral_nav_output with astral_nav_tuta
    astral_nav_output.appendChild(astral_nav_tutanota);

}

// var and function for armory1.html
const mk540_button =document.getElementById('om_mk540');

function mK540Status(){
    /*document.getElementById('mk540_output').innerHTML=
    `The Mk-540 is a rail-carbine. It accelerates a 12.95 g, 6.1mm depleted uranium hypersonic projectile at 1800 M/PS.
     It delivers 21,000 (J) of energy on target per round. The Mk-540 is fed from a 45-round dorsal magazine, and
     powered by a tungsten nanofilliment solid-state lithium cell.<p> The Mk-540EMC has 3 fire modes; semi, auto, and 2-round hyperburst.</p>`;*/
    //target html id
    const mk540_output = document.getElementById('mk540_output');
    //declare object
    mk540_output.textContent = '';
    //declare p element
    const mk540_output_tutanota = document.createElement('p');
    // create message
    mk540_output_tutanota.textContent = 
    `The Mk-540 is a rail-carbine. It accelerates a 12.95 g, 6.1mm depleted uranium hypersonic projectile at 1800 M/PS.
     It delivers 21,000 (J) of energy on target per round. The Mk-540 is fed from a 45-round dorsal magazine, and
     powered by a tungsten nanofilliment solid-state lithium cell. The Mk-540EMC has 3 fire modes; semi, auto, and 2-round hyperburst.`;

     mk540_output.appendChild(mk540_output_tutanota);

     console.log('BFG Found!');
}

//var and function for armory1.html mk540 diagram.
const mk540_diagram_button =document.getElementById('om_mk540_diagram');
function printDiagram(){
    /*document.getElementById('mk540_diagram_output').innerHTML= 
    `DIAGRAM RETRIEVED<br><img src='../images/mk540emc.png' class='mk540_om'><br>It is advised to keep the front toward enemy.`;
    */
    // target html IDs
    const diagram_retrieved = document.getElementById('diagram_retrieved');
    const mk540_diagram_output = document.getElementById('mk540_diagram_output');
    const be_advised = document.getElementById('be_advised');
    // declare objects text objects 
    diagram_retrieved.textContent = '';
    be_advised.textContent = '';
    // prepare image attributes.
    const mk540_tutanota = document.createElement('img');
    mk540_tutanota.src = '../images/mk540emc.png';
    mk540_tutanota.className = 'mk540_om';

    // declare elements
    const diagram_retrieved_tutanota = document.createElement('p');
    const be_advised_tutanota = document.createElement('p');
    
    // create message outputs
    diagram_retrieved_tutanota.textContent = 'DIAGRAM RETRIEVED';
    be_advised_tutanota.textContent = 'It is advised to keep the front toward enemy.';

    //append child elements 
    diagram_retrieved.appendChild(diagram_retrieved_tutanota);
    mk540_diagram_output.appendChild(mk540_tutanota);
    be_advised.appendChild(be_advised_tutanota);

    console.log('Read the owner manual first...');
}
//var and function for propulsion2.html 
const tdrive_status_button =document.getElementById('om_tdrive_status');

function tDriveStatus(){
    /*document.getElementById('tdrive_status_output').innerHTML=
    `<p>Depleted Uranium detected in Tesseract Core. Cannot resolve FTL Dimensional Shift.<br>ASTRAL NAVIGATION: OFFLINE<br>WARNING: BLIND JUMP IMMINENT!</p>`;*/
    // target HTML id
    const tdrive_status_output = document.getElementById('tdrive_status_output');
    // declare text object
    tdrive_status_output.textContent = '';

    //declare element 
    const tdrive_tutanota =document.createElement('p');

    // create text output
    tdrive_tutanota.textContent = `
    Depleted Uranium detected in Tesseract Core. Cannot resolve FTL Dimensional Shift.
    ASTRAL NAVIGATION: OFFLINE 
    WARNING: BLIND JUMP IMMINENT!`;

    tdrive_status_output.appendChild(tdrive_tutanota);
    
    console.log('Forward to the past!');
       
}
// var and function for astral1.html
const astral_solution_button =document.getElementById('om_astral_nav_solution');

function astralSolutionOutput(){
    document.getElementById('astral_solution_output').innerHTML=
    `ASTRAL SOLUTION<br>MODEL: HELIOCENTRIC<br>SYSTEM: SOL<br>DISTANCE RELATIVE STAR: 30.7AU<br>VECTOR: X -3.92e+09 KM, Y +2.18e+09 KM, Z +1.24e+08 KM<br>
    ORBIT: STABLE<br>LOCAL BODY: OBJECT 899 (NEPTUNE)`;



    console.log('Neptune Orbit discovered!');
}

// var and function for propulsion4.html 

const tessdrive_button =document.getElementById('om_tessdrive_status');
function tessDriveOutput(){
    document.getElementById('tessdrive_output').innerHTML=
    `<p>WARNING! Depleted Uranium detected in Tesseract Core.<br>ASTRAL NAVIGATION: ONLINE<br>FTL DIMENSIONAL SHIFT: RESOLVED<br>WARNING: CALCULATED FTL JUMP IMMINENT!</p>`;

    console.log('Faster than light!');
}

// var and function for eva1.html
const incoming_transmission_button=document.getElementById('radio_key');
function spaceSpam(){

    const bfg_spam = document.getElementById('transmission');
    bfg_spam.innerHTML =
    `<p>91.3 percent of organic users find the vista 90 degrees right enjoyable!
    Targeting Solution calculated: Target intersect with planet: 27.2 Earth Years.
    Thank you for choosing Mk-540 for your ballistic needs!</p>`;

    bfg_spam.style.backgroundColor = 'black';
    console.log('Crap! A popup!');

    const advance_story = document.getElementById('story_advance');
    advance_story.innerHTML =
    `<p>You look in that direction to see the gas giant looming in the distance...</p>`;
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
    
}

//event listener for tDriveStatus
if (tdrive_status_button){
    tdrive_status_button.addEventListener('click', tDriveStatus);
    
}

//eventlistener for astralSolutionOutput
if (astral_solution_button){
    astral_solution_button.addEventListener('click', astralSolutionOutput);
    
}

// eventlistener for armory1.html mk540diagram
if (mk540_diagram_button){
    mk540_diagram_button.addEventListener('click', printDiagram);
}

// propulsion4.html event listener
if (tessdrive_button){
    tessdrive_button.addEventListener('click', tessDriveOutput);
}

// event listener for eva1.html
if(incoming_transmission_button){
    incoming_transmission_button.addEventListener('click', spaceSpam);
}