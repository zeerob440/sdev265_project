# IMPLEMENTATION PLAN

## INTRODUCTION
Time Shift is an interactive choose your own adventure website developed by Joshua Johnson,
and Zachary Roberts. In Time Shift the user navigates webpages and is presented with choices similar to a text-adventure. The user selects their choices which may affect their outcome. The game is set in the present but the user is soon teleported through time as they progress through the game.

## IMPLEMENTATION METHOD PRO/CON

Generally, there are three accepted methodologies for implementation currently. These methodologies include: Phased Implementation, Parallel Implementation, and Big Bang Implementation.

1. Phased Implementation

- General Method: Phased Implementation releases the project in logical divisions. Such as by module, department, location etc.
- Pros: Change adverse organizations can be placated because phases are gradual not immediate. Bugs discovered in phases can be corrected before subsequent phases are implemented.
- Cons: Implementation takes longer.

2. Parallel Implementation

- General Methods: This method implements new software that solves a specific use case while legacy software continues to be used for the same use case.
- Pros: this method allows for failover contingency since the legacy system is still in active use as the new system is implemented. Should the new system fail, the legacy system is still in use.
- Cons: This method can be difficult because different workflows exist for users. Change adverse users may avoid the new system all together.

3. Big Bang Implementation

- General: Big Bang Implementation launches the new software as one unit. In this method there are no parallel systems or deployment phases, only the new system is in place. 
- Pros: Fastest and cheapest Implementation method. For change adverse organizations this is ripping the band-aid off.
- Cons: If the software has not been developed and tested well, the software may be buggy.

4. Implementation Method for Time Shift

Time Shift will use the Big Bang Method for deployment. The team has chosen this method because the Time Shift project has an 8-week runway and $0 budget. The fast deployment properties of the Big Bang method are optimal for these constraints.

## DETAILS

 The codebase for Time shift is written in HTML, CSS, and JavaScript. This allows an elegant project to be developed in a short amount of time. Since Time Shift is an interactive website/game, there is no navigation bar, instead navigation is determined by start_redirect.js. This program navigates the site based on user selections.
 Each time line has a distinct CSS. The system is styled by a number of CSS files. Strict separation of concerns are followed, scripts and styling are not written in HTML documents, rather scripts and styles are invoked from HTML documents.

 Time Shift is defined as a MVP when the below specifications are achieved.

- Navigation choices on each page.
- a ending for each timeline.
- If the user reloads or back take to right page, the game over screen is invoked.
- make the project work for all sizes of screens.

## INSTALLATION

Since Time Shift is essentially a website the following steps are used to install the application from your browser.

### Brave
1. Right click three dashes on right of screen.
2. Right click "Save and share".
3. Right click "Install page as app".

![ts_install1.png](Part 1Brave Browser app install)

1. Type desired name of application or right click "install" to create app on Desktop.
2. Right click "install."

![ts_install2.png](Part 2 Brave browser app install)

## SUMMARY

Time Shift is intended to be a short diversion for users that work on computers daily. The given design paradigms ensure the development team can deliver a quality product to meet the declared specifications of Time Shift. The Behavior Diagrams will assist the development team with webpage development given the fairly complex selection pathways. The Use Case diagram depicts Time Shift's simplicity-by-design.

Time Shift will be deployed using the Big Bang Methodology to save time and capital. The release date is expected to be 30 APR 2026. 