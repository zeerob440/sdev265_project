// ship_controller.js controls the UI output on inside the ship_controller class from future.css

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
// function to print innerHTML when om_atmosphere_vent is interacted with by user.
function ventAtmos(){
    document.getElementById('atmosphere_output').innerHTML = `<p>LIFE SAFETY VIOLATION: o2 cannot be reduced to below 19.5% while ship is occupied!</p>`;
   }

// var to target button frame_c.html, om_armory   
const om_armory_button = document.getElementById('om_armory');

function armoryStatus(){
    document.getElementById('armory_output').innerHTML =`<p>01 MK-540 Electro-Magnetic Carbine, with 450 depleted U92 munitions operational.
    Other armaments depleted from attempted apprehension of UNREGISTERED PASSENGER 01 in 2322.</p>`}

const om_propulsion_button = document.getElementById('om_propulsion');

const om_astral_nav_button = document.getElementById('om_astral_nav');

//if if structure to allow this program to be used on multiple pages.

// event listener for frame_c.html om_atmosphere_vent.
if (om_atmosphere_vent_button){
    om_atmosphere_vent_button.addEventListener('click', ventAtmos);
}
if (om_armory_button){
    om_armory_button.addEventListener('click', armoryStatus);
}