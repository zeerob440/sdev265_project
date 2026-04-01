# INTRODUCTION
Time Shift is a text-based adventure, it allows a user to navigate a narrative through a website by presenting a decision and allowing the user to decide which action they want to take by clicking a link. 

The DEVOPS_TOOLCHAIN.md serves as the overview of the project's development details across the software's life cycle, including processes, tools, and CI/CD. One of the standout DevOps processes used by the development team is to place planning documents directly into the project root. This maintains a sole source of truth for the project's lifecycle. This documentation will ensure that continuity of development and operations is within a common operating picture throughout the development team. 

# PLANNING
All Project documentation is stored in the project root Main branch. All project documentation is written as Markdown files. The Markdown files are tracked by Git, therefore all documentation is version controlled and the sole sources of truth.

Collaboration is facilitated through a Discord server shared between the development team, there is a WBD, project schedule, and tracking & monitoring in PROJECT_PLAN.md in the project root of the main branch to ensure duplication of effort is minimized.

Issue tracking is regulated by strict commit comment conventions. The commit comment conventions are listed in COMMIT_COMMENT_BRANCHING_CODEX.md

# DEVELOPMENT
Time Shift is developed with the VS Code, version controlled with Git and GitHub Desktop and hosted on GitHub pages. This strategy ensures the code is version controlled for the entirety of the project's life cycle. 

Commit comments follow a standard methodology to prevent vague commit comment that may be difficult to understand by the development team. 

A strict branching strategy will be followed. The workflow will be:
1. main --> create feature branch
2. build feature
3. pull updates from main into work branch often (integral)
4. work is complete
5. feature branch externally stored on a USB drive, external HDD or SSD.
6. merge work branch into main during live team meetings. 

Branch naming conventions are in COMMIT_COMMENT_BRANCHING_CODEX.md

# BUILD & TEST

Time Shift uses project structure and good naming conventions to build all codebase. This is a less complex approach which is advantageous for short development times. Testing and validation are facilitated by manual processes. Comment and branch naming conventions are documented in COMMIT_COMMENT_BRANCHING_CODEX.md. This assists with code validation before branches are merged, thereby ensuring quality code output. 

Automated validation may be incorporated at a later date, if the current system proves to be inadequate. However, our current build & test methods supports CI and allows the development team to maintain alignment across branches, testing, and deployment which is congruent with DevOps processes.



# RELEASE
Time Shift is released continuously on a live GitHub Pages site, therefore release and deployment are concurrent and in accordance with a continuous deployment model.

Finished feature branches will be merged to main following defined branching methodologies outlined in the DEVELOPMENT heading in this document. Main is the production codebase, therefore it is the only branch deployed to a live GitHub Pages site. 

Versioning will follow the methodologies described in COMMIT_COMMENT_BRANCHING_CODEX.md. The intent of the versioning method is to create human-legible, predictable versioning nomenclature. 


# PACKAGE AND DEPLOY
Time Shift has a short runway and a small development team, therefore the DevOps toolchains employed are elegant. Time Shift's codebase consists of HTML/CSS/JavaScript files. Since Time Shift's Main branch is already deployed to a live GitHub Pages website package deployment is automated and deployed whenever a change is synched on Main. 

This workflow simplifies the deployment process. It is scalable, repeatable and congruent with high-tempo CI/CD operations. 

# OPERATE
Time Shift is essentially a website with game-like attributes. Therefore, GitHub Pages was selected to host the website due to its stability and field expedience. Using GitHub Pages to host the site removes the need for the development team to manage infrastructure. 

The website is manually monitored and validated after it is deployed. This includes monitoring expected navigation, style rendering, and script outputs. 

When an issue occurs and if it is a small bug the patch is developed in situ from Main. Otherwise if the bug is large a feature branch is built to patch it, then merged to Main after testing. 

This approach aligns with rapid CI/CD workflows of DevOps methods. 

# SECURE
Time Shift is unique in that it has no user database, no settings. It is as grab and go as reading a magazine in a grocery store checkout line. 

Access to the Main branch is limited to the development team with authorized workflow methods. This mitigates the risk of crashing the website with bad merges or buggy features. 

Disaster recovery methods have been carefully considered as well. Feature branches are saved on external storage before merging with Main as a fail safe should a merge behave unexpectedly. Main is backed up on external storage after merges for the same reasons. External storage is a fail safe behind GitHub version control, therefore even if a machine or GitHub fails, the external storage persists. Additionally, a safety branch exists as a copy of the Main branch on GitHub. 


