// load_main.js loads the menu and theme music on index.html


document.getElementById('time_to_time_travel').addEventListener('click', printMe);

function printMe()
{document.innerHTML = `
    <h1>This is Time Shift</h1>
		<p> 
			The date is March 25th 2026, but time does not flow linearly. Can you navigate space and time to return to your timeline?
		</p>

		<button id="pressToStart">START</button>`; 

}


