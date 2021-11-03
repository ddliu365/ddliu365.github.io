---
title: "DDP-based Parachute Landing Optimization for a Humanoid"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Dongdong Liu
- Yang Liu
- Yifan Xing
- Shramana Ghosh
- Vikram Kapila

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2020-11-04T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-11-04T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: IEEE-RAS International Conference on Safety, Security, and Rescue Robotics (SSRR)
publication_short: In IEEE International Conference on Safety, Security, and Rescue Robotics (SSRR)

abstract: For many hazard prone activities, such as search, rescue, and exploration, the risk borne by human respondents can be reduced or obviated with the use of biped robots in their stead. As the adoption of robots in manufacturing, warehouses, and healthcare continues to accelerate, and as researchers examine the use of humanoids for collaborating with and even providing companionship to humans, soon, humans would want such robots to be able to engage in all manner of human-like activities. For example, it is envisioned that humanoids will, one day, be capable of parachute landings to aid in search, rescue, and exploration applications, among others. Specifically, one may seek to deploy humanoids to save lives from disasters in remote areas. Addressing such a problem with a rapid and effective response may necessitate dropping humanoids from an aerial vehicle. However, effective realization of such a strategy requires design, development, testing, and validation of novel robotic solutions to overcome significant technical challenges. Thus, we seek to design and test a humanoid that can land safely and stably using a parachute when dropped aerially. To prevent the failure of key components during landing, we examine and analyze the optimization of the landing trajectory of a biped robot. Previously, researchers have designed a parachute landing fall (PLF) motion heuristically by considering only one side of a humanoid. However, such a model cannot be reliably applied to a full humanoid without considering actual contact environment in trajectory optimization. We consider parachute landing based on a full biped robot with a rigid contact model, utilizing the differential dynamic programming (DDP) method. A cost function is constructed with consideration of the acceleration and momentum of the bipedal torso during the landing process. The optimization process gives due consideration to the constraints, namely, the dynamic model of the humanoid with contact conditions, wherein a rigid contact and a Coulomb friction cone are included for simulation and further optimization. The optimized active landing trajectory obtained in the simulation is verified with experiments on a 12 degrees of freedom (DOF) humanoid testbed.

# Summary. An optional shortened abstract.
summary: "Previously, researchers have designed a parachute landing fall (PLF) motion heuristically by considering only one side of a humanoid. However, such a model cannot be reliably applied to a full humanoid without considering actual contact environment in trajectory optimization. We consider parachute landing based on a full biped robot with a rigid contact model, utilizing the differential dynamic programming (DDP) method." 

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: https://ieeexplore.ieee.org/document/9292623
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: https://www.youtube.com/watch?v=X0k1AhSLTzI

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- landing
share: false  # Show social sharing links?

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
reading_time: false  # Show estimated reading time?
share: false  # Show social sharing links?
profile: false  # Show author profile?
commentable: false  # Allow visitors to comment? Supported by the Page, Post, and Docs content types.
editable: false  # Allow visitors to edit the page? Supported by the Page, Post, and Docs content types.
---