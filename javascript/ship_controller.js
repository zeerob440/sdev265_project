// ship_controller.js controls the UI output on inside the ship_controller class from future.css

/* 
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

const om_atmosphere_vent_button = document.getElementById('om_atmosphere_vent');

function ventAtmos(){document.getElementById('atmosphere_output').innerHTML = `<p>LIFE SAFETY VIOLATION: o2 cannot be reduced to below 19.5% while ship is occupied!</p>`;
    
}
const om_armory_button = document.getElementById('om_armory');

const om_propulsion_button = document.getElementById('om_propulsion');

const om_astral_nav_button = document.getElementById('om_astral_nav');


if (om_atmosphere_vent_button){
    om_atmosphere_vent_button.addEventListener('click', ventAtmos);
}