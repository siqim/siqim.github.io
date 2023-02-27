---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a second-year PhD student in the Machine Leraning program at [Georgia Tech](https://www.gatech.edu/)'s School of Electrical and Computer Engineering. I'm working on machine learning on graphs under the supervision of [Prof. Pan Li](https://sites.google.com/view/panli-purdue) and [Prof. Mia Liu](https://mia.physics.purdue.edu/?_ga=2.103377984.1767497867.1654532514-144022576.1620484558). Before coming to Georgia Tech, I was a PhD student at [Purdue University](https://www.purdue.edu/) in the Department of Computer Science. Prior to that, I worked at [Tencent](https://www.tencent.com/) Big Data Lab for a while after receiving my master's degree from the [University of Illinois at Urbana-Champaign](https://illinois.edu/). Currently, I focus on 
geometric & graph deep learning, epsecially on interpretable learning methods to advance scientific discovery.

My Chinese given name is 思奇(siqi), pronounced as 思/si/ 奇/tʃiː/. My Chinese surname is 苗(miao), pronounced as 苗/mɪaʊ/. It's also fine to call me Aki.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔥 News

- *2023.01*: Our paper [LRI](https://openreview.net/forum?id=6u7mf9s2A9) is accepted to ICLR 2023 and NeurIPS 2022 AI4Science!

<details>
  <summary>Old news in 2022</summary>

  <div markdown="1">
  - *2022.11*: Gave a talk at [IML Machine Learning Working Group](https://iml.web.cern.ch/homepage) on [LRI](https://arxiv.org/abs/2210.16966) with slides [here](https://indico.cern.ch/event/1207697/).
  - *2022.11*: I will be moving to Georgia Tech in December as a PhD student in Machine Learning (ECE) with Prof. Pan Li.
  - *2022.11*: Our latest paper on model interpretability ([LRI](https://arxiv.org/abs/2210.16966)) will show up at NeurIPS 2022 [AI for Science](https://ai4sciencecommunity.github.io/neurips22.html) Workshop!
  - *2022.10*: Gave two lectures at [CS593-CLG](https://docs.google.com/presentation/d/1jkf6RDLE9_FQQMqiQ1-b0PZjZJbWqRqI-Zn7wQh8pHQ/edit#slide=id.g15e3f128fa5_0_77)([code](https://colab.research.google.com/drive/1At_gCWaiMNyh5bVbXNjNkS0XL2vTFyyf?usp=sharing)) and [Phys570-AI](https://docs.google.com/presentation/d/1WMN81yvPnoYisn9UF1jKw_nXGlYSvyyA/edit#slide=id.p1)([code](https://colab.research.google.com/drive/1gXj2ScYmTzl2BDQ-OCVqRE5Ik-k66C-R?usp=sharing)).
  - *2022.07*: Gave two talks at [FastML](https://fastmachinelearning.org/) and [AITime](http://www.aitime.cn/) on our ICML 2022 paper [GSAT](https://arxiv.org/abs/2201.12987)([slides](https://icml.cc/media/icml-2022/Slides/17430.pdf)).
  - *2022.07*: Awarded free registration and graduate travel grant for ICML! Thanks!
  - *2022.05*: One paper accepted to ICML 2022!
  </div>

</details>





# 📝 Publications

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
</div>
</div> -->



<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/GSAT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Interpretable and Generalizable Graph Learning via Stochastic Attention Mechanism](https://arxiv.org/abs/2201.12987) \\
**Siqi Miao**, Miaoyuan Liu, Pan Li, **ICML 2022**

<a href="https://github.com/Graph-COM/GSAT"><img src="https://img.shields.io/github/stars/Graph-COM/GSAT?style=social&label=Code+Stars" alt=""></a>
</div>
</div> -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2023</div><img src='images/LRI.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Interpretable Geometric Deep Learning via Learnable Randomness Injection](https://openreview.net/forum?id=6u7mf9s2A9) \\
**Siqi Miao**, Yunan Luo, Mia Liu, Pan Li. **ICLR 2023** and **NeurIPS 2022 AI4Science**\\
<a href="https://arxiv.org/abs/2210.16966"><img src="https://img.shields.io/badge/-Paper-grey?logo=gitbook&logoColor=white" alt="Paper"></a>
<a href="https://github.com/Graph-COM/LRI"><img src="https://img.shields.io/badge/-Github-grey?logo=github" alt="Github"></a>
<a href="https://openreview.net/forum?id=6u7mf9s2A9"> <img alt="License" src="https://img.shields.io/static/v1?label=Pub&message=ICLR%2723&color=blue"> </a>
<!-- <a href="https://colab.research.google.com/drive/1t0_4BxEJ0XncyYvn_VyEQhxwNMvtSUNx?usp=sharing"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Colab"></a> -->
<!-- <a href="https://proceedings.mlr.press/v162/miao22a.html"> <img alt="License" src="https://img.shields.io/static/v1?label=Pub&message=ICML%2722&color=blue"> </a> -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/GSAT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Interpretable and Generalizable Graph Learning via Stochastic Attention Mechanism](https://arxiv.org/abs/2201.12987) \\
**Siqi Miao**, Mia Liu, Pan Li. **ICML 2022** \\
<!-- <a href="https://arxiv.org/abs/2201.12987"><img src="https://img.shields.io/badge/-Paper-grey?logo=gitbook&logoColor=white" alt="Paper"></a>
<a href="https://github.com/Graph-COM/GSAT"><img src="https://img.shields.io/badge/-Github-grey?logo=github" alt="Github"></a>
<a href="https://colab.research.google.com/drive/1t0_4BxEJ0XncyYvn_VyEQhxwNMvtSUNx?usp=sharing"><img src="https://img.shields.io/badge/-Colab-grey?logo=googlecolab&logoColor=white" alt="Colab"></a>
<a> <img src="https://img.shields.io/badge/Video-grey?logo=airplayvideo&logoColor=white" alt="Video"></a>
<a> <img src="https://img.shields.io/badge/Slides-grey?&logo=MicrosoftPowerPoint&logoColor=white" alt="Slides"></a> -->
<a href="https://arxiv.org/abs/2201.12987"><img src="https://img.shields.io/badge/-Paper-grey?logo=gitbook&logoColor=white" alt="Paper"></a>
<a href="https://github.com/Graph-COM/GSAT"><img src="https://img.shields.io/badge/-Github-grey?logo=github" alt="Github"></a>
<a href="https://proceedings.mlr.press/v162/miao22a.html"><img alt="License" src="https://img.shields.io/static/v1?label=Pub&message=ICML%2722&color=blue"></a>
<a href="https://colab.research.google.com/drive/1t0_4BxEJ0XncyYvn_VyEQhxwNMvtSUNx?usp=sharing"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Colab"></a>

**Blogs ([English](https://towardsdatascience.com/graph-machine-learning-icml-2022-252f39865c70#be75:~:text=and%20inductive%20settings.-,%E2%9E%A1%EF%B8%8F%20Miao%20et%20al,-take%20another%20perspective) - [中文](https://mp.weixin.qq.com/s/aP-XBqFLV0x8h9rtOKU_yg))** |
**[Slides](https://icml.cc/media/icml-2022/Slides/17430.pdf)** |
**[Poster](https://icml.cc/media/PosterPDFs/ICML%202022/a8acc28734d4fe90ea24353d901ae678.png)**

</div>
</div>


<!-- https://img.shields.io/badge/Video-grey?style=plastic&logo=airplayvideo&logoColor=white -->
<!-- https://img.shields.io/badge/Slides-grey?&logo=GoogleSheets&logoColor=white -->



<!-- - [Interpretable and Generalizable Graph Learning via Stochastic Attention Mechanism](https://arxiv.org/abs/2201.12987), **Siqi Miao**, Miaoyuan Liu, Pan Li, **ICML 2022** ([codes](https://github.com/Graph-COM/GSAT)) -->

# 🎖 Honors and Awards
- *2022.07* ICML’22 Participation Grant 
- *2022.07* Purdue Graduate Travel Grant 
- *2020.03* Tencent Innovation Award
- *2020.01* Tencent Outstanding Employee (Top 10%)

# 💬 Invited Talks
- *2022.11*, Inter-Experimental LHC Machine Learning Working Group, CERN
- *2022.10*, Department of Physics, Purdue University
- *2022.08*, AI Time
- *2022.07*, Fast Machine Learning Lab


<!-- # 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Experience
- *2023.01 - Present*, Georgia Tech, Research Assistant, Atlanta, USA
- *2021.08 - 2022.12*, Purdue University, Research Assistant, West Lafayette, USA
- *2019.07 - 2020.05*, Tencent, Machine Learning Engineer, Guangzhou, China
- *2018.05 - 2018.08*, Tencent, Machine Learning Intern, Guangzhou, China

<script type="text/javascript" src="assets/js/LastUpdateDate.js"></script>
<a href='https://clustrmaps.com/site/1bgz9'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=70&t=n&d=a6iAb7ez3Wz6FmyA2Dk7WnttgXxsBmp_weXKt76zhWU&co=2d78ad&ct=ffffff' style="display: none;"/></a>


# 🎮 Misc
- *The Legend of Zelda: Breath of the Wild* and *The Witcher 3: Wild Hunt* are the best games ever. *Genshin Impact* is also awesome!
- I'm a big fan of *Lego Technic*. I once combined them with RC cars to build a few cool Lego cars that could drift and climb!
- I have ~4k followers on [Zhihu](https://www.zhihu.com/people/miao-si-qi), a Quora-like platform in China.
- I built my own PC and home automation system. I also liked to play with Jetson TX2 and Raspberry Pi.
