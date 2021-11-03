---
title: "DDP-based Parachute Landing Optimization for a Humanoid"
subtitle: 基于微分动态规划的人形机器人伞降着陆运动优化
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

abstract: 对于许多容易发生危险的活动，例如搜索、救援和探索，人类所承担的风险可以通过使用双足机器人代替他们来减少或消除。随着机器人在制造业、仓库和医疗保健领域的应用不断加速，并且随着研究人员研究使用类人机器人与人类合作甚至为人类提供陪伴，很快人类就会希望这些机器人能够参与各种活动。预计未来人形机器人将能够实现伞降着陆，以帮助搜索、救援和探索应用等。具体来说，人们可能会寻求部署类人机器人来拯救偏远地区灾难中的生命。以快速有效的反应解决此类问题，可能需要从飞行器上放下类人机器人。然而，有效实现这种策略需要设计、开发、测试和验证新型机器人解决方案，以克服重大的技术挑战。因此，我们寻求设计和测试一种人形机器人，它可以在空中降落时使用降落伞安全稳定地着陆。为了防止关键部件在着陆过程中出现故障，我们对双足机器人着陆轨迹的优化进行了研究和分析。此前，研究人员通过仅考虑类人机器人的一侧，启发式地设计了降落伞着陆坠落 (PLF) 运动。然而，如果在轨迹优化中不考虑实际接触环境，这种模型不能可靠地应用于完整的人形机器人。我们考虑基于具有刚性接触模型的全身双足机器人的降落伞着陆模型，利用差分动态规划 (DDP) 方法。考虑着陆过程中双足躯干的加速度和动量，构建目标函数。优化过程充分考虑了约束条件，即具有接触条件的仿人动力学模型，其中包括刚性接触和库仑摩擦锥，用于仿真和进一步优化。在模拟中获得的优化主动着陆轨迹通过在 12 自由度 (DOF) 人形机器人试验台上的实验进行验证。

# Summary. An optional shortened abstract.
summary: 此前，研究人员通过仅考虑类人机器人的一侧，启发式地设计了降落伞着陆坠落 (PLF) 运动。然而，如果在轨迹优化中不考虑实际接触环境，这种模型不能可靠地应用于完整的人形机器人。我们考虑基于具有刚性接触模型的全身双足机器人的降落伞着陆模型并采用差分动态规划 (DDP) 方法。

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
url_video: https://www.bilibili.com/video/BV14y4y177jA/

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