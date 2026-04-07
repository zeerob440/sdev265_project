# Introduction
The development team is planning to make a text adventure game. Similar to a choose your own adventure book. Time Shift is a mix between sci-fi and fantasy as your travel through time. We want people to have fun playing it or short diversion from other tasks at a machine.
# User Requirements & Definition  
  - At 2 choices with each page.
  - a ending for each timeline. 
  - If the user reloads or back take to right page. 
  - make the project work for all sizes of screens
# System Architecture
  The codebase for Time shift is written in HTML, CSS, and JavaScript. This allows an elegant project to be developed in a short amount of time. Since Time Shift is an interactive website/game, there is no navigation bar, instead navigation is determined by start_redirect.js. This program navigates the site based on user selections.
  Each time line has a distinct CSS. The system is styled by a number of CSS files. Strict separation of concerns are followed, scripts and styling are not written in HTML documents, rather scripts and styles are invoked from HTML documents.
# Systems Development Life Cycle 
  ### Planning 
  Since Time Shift has a short runway the development team is using Agile development methodology, supplemented with elements of DevOps methods. Additionally, the storyboard is under development. Once the storyboard is completed and a minimum viable product is produced the program will be polished as time allows.
  ### Defining 
  The development team has established functional and non-functional criteria for the project. These criteria include navigation, UX, and a functioning as expected minimum viable product at least before runway termination.
  ### Design
  Time Shift is designed as an interactive website. Therefore, it uses browsers, and HTML/CSS/JavaScript to power UX.
  The development team intends to design
    - At least two choices on each HTML page to lead to at least two different pages to continue the story.
    - Game Over states
    - User selection based navigation
  ### Development
  The development team is using a GitHub repository and VS Code to develop the site with HTML/CSS/JavaScript. Disaster recovery branches and external storage backups are saved regularly. Strict commit comments, and branch naming conventions are followed.
  ### Testing
  The development team will debugging and test the Project as it is developed. Manual inspection will be used to ensure a quality UX. Once the project is finished it will be tested by other developers who have not been part of the development project.
  ### System Evolution
  Time Shift is a website at its core. At minimum it is a proof-of-concept of how more sophisticated games can be developed; A lightweight story superimposed on a lightweight logic engine. This simplicity of design, and separation of concerns, make adding new structures as simple as adding a new HTML document, adding story, and linking the navigation logic to start_redirect.js. This workflow is scalable and repeatable for virtually any additional development that might be added in the future. Using Agile development allows for the development of more sophisticated UX including audio, interactive virtual terminals (machine-in-machine), and additional time lines.
  ### Appendices 
  1. Hardware Requirements
    - Turning Complete Machine with Internet access.
    - Browser, such as Firefox, Brave, Chrome, Edge, or Safari

  2. Programming Languages
    - HTML
    - CSS
    - JavaScript
    - Markdown
