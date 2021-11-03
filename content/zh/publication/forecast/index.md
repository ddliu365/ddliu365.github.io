---
title: "Bidirectional LSTM-based Network for Fall Prediction in a Humanoid"
subtitle: 基于双向长短时记忆系统的人形机器人跌倒预测网络
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

abstract: 仿人机器人的跌倒预测是一个具有挑战性的问题。人们对将双足类人机器人引入各种应用的兴趣日益浓厚，例如灾难场景中的搜索和救援，需要赋予它们处理环境干扰的稳健方法。我们首先简要回顾了先前提出的用于预测受未知外力扰动的双足机器人即将发生的跌倒事件的方法。接下来，为了改进先前的工作，我们考虑了双向长短期记忆 (BLSTM) 网络，该网络利用系统状态的历史测量作为输入，实时有效地预测跌倒概率。通过广泛的模拟实验验证，这些实验利用具有随机幅度、方向、位置和作用时间的外力，我们证明了所提出的 BLSTM 网络可以稳健地预测跌倒事件。与先前文献中基于学习的方法相比，本文的技术显示可降低跌倒预测的误报率 (FPR)，同时在预测即将发生的跌倒时达到几乎相同水平的先导时间。为了在 FPR 和先导时间之间进行敏感的权衡，我们的训练过程中包含了一个调整参数 α，以允许用户控制生成的预测模型。通过这些贡献，双足仿人机器人可以利用所提出的 BLSTM 预测模型并根据手头的任务调整其有效性。

# Summary. An optional shortened abstract.
summary: 为了改进先前的工作，我们考虑了双向长短期记忆 (BLSTM) 网络，该网络利用系统状态的历史测量作为输入，实时有效地预测跌倒概率。通过广泛的模拟实验验证，这些实验利用具有随机幅度、方向、位置和作用时间的外力，我们证明了所提出的 BLSTM 网络可以稳健地预测跌倒事件。

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
url_video: https://www.bilibili.com/video/bv1gK4y1J7FK

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