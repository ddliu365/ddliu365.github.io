---
title: "Bidirectional LSTM-based Network for Fall Prediction in a Humanoid"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Dongdong Liu
- Hoon Jeong
- Aoxue Wei
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

abstract: Fall prediction for humanoid robots is a challenging problem. Increasing interest in the introduction of biped humanoids for diverse applications, e.g., search and rescue in a disaster scenario, necessitates endowing them with robust ways of handling environmental disturbances. We begin the paper with a brief review of previously proposed methods to predict an impending fall event for a biped perturbed by an unknown external force. Next, to improve on prior works, we consider a bidirectional long short-term memory (BLSTM) network, which makes use of historical measurements of system states as inputs, to effectively predict fall probability in real time. Through extensive simulation experiments, which utilize external forces with random magnitudes, directions, locations, and times of application, we demonstrate that the proposed BLSTM network can robustly predict fall events. In contrast to learning-based methods in prior literature, the technique of this paper is shown to reduce false positive rate (FPR) for fall prediction while achieving nearly the same level of lead time in predicting an approaching fall. To perform the sensitive tradeoff between the FPR and lead time, a tuning parameter α is included in our training process to permit a user control over the resulting prediction model. With these contributions, a biped can take advantage of the proposed BLSTM prediction model and tailor its effectiveness to the task at hand.

# Summary. An optional shortened abstract.
summary: To improve on prior works, we consider a bidirectional long short-term memory (BLSTM) network, which makes use of historical measurements of system states as inputs, to effectively predict fall probability in real time. Through extensive simulation experiments, which utilize external forces with random magnitudes, directions, locations, and times of application, we demonstrate that the proposed BLSTM network can robustly predict fall events.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: https://ieeexplore.ieee.org/document/9292620
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: https://www.youtube.com/watch?v=F75tUYqeGkU

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
- forecast
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