# INTRODUCTION
Time Shift is a text-based adventure, it allows a user to navigate a narrative through a website by presenting a decision and allowing the user to decide which action they want to take by clicking a link. 

The DEVOPS_TOOLCHAIN.md serves as the overview of the project's development details across the software's life cycle, including processes, tools, and CI/CD. One of the standout DevOps processes used by the development team is to place planning documents directly into the project root. This maintains a sole source of truth for the project's lifecycle. This documentation will ensure that continuity of development and operations is within a common operating picture throughout the development team. 

# PLANNING
All Project documentation is stored in the project root Main branch.All project documentation is written as Markdown files. The Markdown files are tracked by Git, therefore all documentation is version controlled and the sole sources of truth.

Collaboration is facilitated through a Discord server shared between the development team, there is a WBD, project schedule, and tracking & monitoring in PROJECT_PLAN.md in the project root of the main branch to ensure duplication of effort is minimized.

FIXME: ADD COMMIT_COMMENT_CODEX.md when the_bifrost is accessible again. 

Issue tracking is regulated by strict commit comment conventions. The Commit comment conventions are listed in COMMIT_COMMENT/BRANCHING_CODEX.md


# DEVELOPMENT
Time Shift is developed with the VS Code IDE, version controlled with Git and GitHub Desktop and hosted on GitHub pages. This strategy ensures the code is version controlled for the entirety of the project's life cycle. 

Commit comments follow a standard methodology to prevent vague commit comment that may be difficult to understand by the development team. 

A strict branching strategy will be followed. The workflow will be:
1. main --> create feature branch
2. build feature
3. pull updates from main into work branch often (integral)
4. work is complete
5. feature branch externally on a usb drive, external HDD or SSD.
6. merge work branch into main during live team meetings. 

Branch naming conventions are in COMMIT_COMMENT/BRANCHING_CODEX.md

# BUILD & TEST

# RELEASE

# PACKAGE AND DEPLOY

# OPERATE

# SECURE