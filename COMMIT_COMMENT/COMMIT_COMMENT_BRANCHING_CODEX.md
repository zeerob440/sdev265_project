# BASIC STRUCTURE

Activity, location file location filename/function(), purpose, action taken

Keep commit types logically separated if possible such as do not commit a style and a feat in the same commit

EXAMPLE:
    / used to describe filepaths for new docs

docs: root/index.html, documents declared.
    used to separate file name and area of file changed

    feat: index.html|header, nav links anchored.


# ACTIVITY NAMING CONVENTIONS

- 'feat' used to describe new feature is complete and working
	* feat: index.html|header, nav links complete.
	* feat: pythonCartographer|forLoops() function declared menu completed
	
- 'docs'  used to describe new document declared, and new readmes
	* root/index.html, documents declared.

- 'debug' used to describe an action to taken to fix a bug
	* debug index.html|<h3> elements collision, web.css 15px padding added to <h3> elements 
	
- 'fixed' used to describe fixing a bug, or remove garbage (mostly used as a touch commit)
	* fixed: index.html| <h3> elements collision web.css 15 px padding added to <h3> elements; xpt: <h3> collision to stop on index.html
	
- 'style' used to describe a standalone change in a CSS
	* style: web.css| style selectors creates for <p> and <ul> elements.
 
- 'update' used to modify a working feature
	* update: index.html| header, addition link added to <nav> 
		
- 'merge' - used to merge branches
	* merge: Alpha; debug login >>> main, Alpha merged to main


# BRANCH NAMING CONVENTIONS 

Ordered by A-Z phonetic alphabet so the first branch is: 

Alpha_description_of_objective 

examples 
- Alpha_debug_login
- Bravo_disaster_recovery
- xray_create_past_timeline


# PROGRAM VERSION NAMING CONVENTIONS

Version numbers after so many digits get difficult to read, so after 10 iterations of minor changes I consider it a major change and add a version letter; so a program could be named pythonCartographer Echo IV, or if a major change occurs
to a program, I jump from, for example pythonCartographer Golf III to pythonCartographer Hotel. By using phonetics and Roman Numerals I avoid myprogram 1.3.141

program name phonetic letter, minor revision Roman Numeral < IX  (0-9) after 10 minor changes I consider it a major change. 

Example: 

- pythonCartographer Alpha

- javaScriptCartographer Alpha I

- the_zoo Alpha IX 

- hangman Bravo VII