---
layout: resume
title: "简历 - 文力"
permalink: /resume-zh/
translate_no: true
---

# 文力
<div class="contact">
美国加州拉霍亚 | +1 (619) 953-8320 | manmanleklek@gmail.com | <a href="https://lekman.info">lekman.info</a> | <a href="https://github.com/sophondroplet">github.com/sophondroplet</a>
</div>

## 个人简介
加州大学圣地亚哥分校航空航天工程本科生，聚焦无人机系统、机电一体化、机器人与自主控制。具备从 CAD 设计、结构制造、嵌入式固件开发到飞控调参与试飞验证的端到端工程经验。在 Triton UAS 中由机械/电气/软件跨域成员逐步成长为系统级集成负责人，能够在真实工程约束下推动平台从实验台走向可飞行状态。

## 教育经历
<div class="role-line"><strong>加州大学圣地亚哥分校（UC San Diego）</strong><span class="meta">美国加州拉霍亚 | 2024-至今</span></div>
<p>航空航天工程本科，GPA: 3.4</p>

<div class="role-line"><strong>Christian Alliance International School</strong><span class="meta">中国香港 | 2018-2024</span></div>
<p>高中 GPA: 3.75</p>

## 技术技能
<ul class="compact">
  <li><strong>编程：</strong>Python, C/C++, C, JavaScript, MATLAB</li>
  <li><strong>嵌入式系统：</strong>ESP32, STM32, Arduino, Raspberry Pi, I2C/UART/CAN, UDP 遥测链路</li>
  <li><strong>飞控与控制：</strong>ArduPilot, Betaflight, ELRS, PID 调参, FOC 电机控制, 传感器标定, HIL 硬件在环测试</li>
  <li><strong>CAD 与硬件制造：</strong>Onshape, Fusion 360, SketchUp, SolidWorks（基础）, 碳纤维/玻纤复材铺层, 3D 打印, 激光切割, 焊接</li>
  <li><strong>工具链：</strong>Git/GitHub, OpenCV, VESC 工具链, Altium（基础 PCB 设计）</li>
</ul>

## 项目经历
<div class="role-line"><strong>10 英寸自主四旋翼飞行测试平台</strong><span class="meta">2025.06-至今</span></div>
<ul>
  <li>从零完成整机方案设计与搭建：碳纤维机架、定制起落架、云台与 Jetson 计算平台安装结构。</li>
  <li>完成 8S 动力系统与航电系统的全链路设计与集成，独立完成关键电气装配、走线与上电验证。</li>
  <li>完成 ArduPilot 从初始 bring-up 到稳定飞行的全流程配置与调试（校准、模式、失效保护、PID 调参）。</li>
  <li>将该平台作为可复用测试机，用于子系统联调与飞行前验证，提高集成效率。</li>
</ul>

<div class="role-line"><strong>自主天线跟踪器</strong><span class="meta">2025</span></div>
<ul>
  <li>基于 ESP32 实现双轴跟踪控制，通过 GPS 遥测保持地面站与飞行器链路指向。</li>
  <li>集成 GPS 与磁力计数据链路，完成实时姿态/方位估计与 PID 控制闭环。</li>
  <li>使用 Python 椭球拟合流程进行磁力计标定，显著提升指向精度与稳定性。</li>
</ul>

<div class="role-line"><strong>双轴相机云台</strong><span class="meta">2025</span></div>
<ul>
  <li>开发基于 STM32 的 ESC 固件，实现 FOC + PID 闭环控制与编码器反馈融合。</li>
  <li>完成 IMU、CAN 通信与减振机械结构集成，提升飞行工况下成像稳定性。</li>
</ul>

<div class="role-line"><strong>CNC 绘图机</strong><span class="meta">作品集项目</span></div>
<ul>
  <li>基于 Arduino GRBL 与 Python/OpenCV 搭建图像到 G-code 的自动化流程。</li>
  <li>设计并调试步进电机与导轨运动系统，优化参数以提高轨迹精度与重复性。</li>
</ul>

<div class="role-line"><strong>平衡球机器人</strong><span class="meta">作品集项目</span></div>
<ul>
  <li>使用 Raspberry Pi + OpenCV 实现视觉追踪与双轴实时平衡控制。</li>
  <li>完成 Python PID 控制、舵机执行机构与机械结构联调，形成感知-控制闭环。</li>
</ul>

<div class="role-line"><strong>自主机器人炮塔</strong><span class="meta">作品集项目</span></div>
<ul>
  <li>构建视觉引导的 3 自由度机电系统，集成嵌入式控制、驱动电路与安全联锁逻辑。</li>
  <li>采用模块化软硬件架构，支持稳定演示与 STEM 教学展示。</li>
</ul>

## 实习与团队经历
<div class="role-line"><strong>UAV 系统集成工程师，Triton Unmanned Aerial Systems（UCSD）</strong><span class="meta">2024.09-至今</span></div>
<ul>
  <li><strong>角色进阶：</strong>从机械/电气/软件跨域执行成员，逐步扩展为整机系统集成负责角色。</li>
  <li>负责动力、航电、控制等关键子系统接口定义与系统级联调，推动平台达到可飞行状态。</li>
  <li>完成整机动力系统架构设计，并主导 ArduPilot/Betaflight 的配置、调参与故障排查。</li>
  <li>参与复材机体制造（碳纤维/玻纤铺层与环氧工艺），并设计制作减振安装件、夹具与关键结构件。</li>
  <li>开发并集成天线跟踪器及相关嵌入式模块，通过台架与外场迭代提升系统可靠性。</li>
  <li>组织地面检查、飞前验证与试飞流程，推动从实验室 bring-up 到外场起飞的集成闭环。</li>
  <li>支撑 SUAS 竞赛成绩：团队总排名前 25%，任务演示得分前 20%（81 支参赛队）。</li>
</ul>

<div class="role-line"><strong>成员，Existential Robotics Laboratory（UC San Diego）</strong><span class="meta">2025-至今</span></div>
<ul>
  <li>参与机器人研究原型的机电系统集成、实验搭建与迭代验证。</li>
  <li>支持跨学科开发流程，协同机械硬件、嵌入式电子与系统测试工作。</li>
</ul>

<div class="role-line"><strong>机械工程学会创始人兼主席</strong><span class="meta">2022.09-2024.06</span></div>
<ul>
  <li>创办并带领社团发展至 20+ 活跃成员，组织工程活动与跨团队实践项目。</li>
  <li>负责预算与资源协调、活动策划执行及低年级成员技术指导。</li>
</ul>

<div class="role-line"><strong>CYC Motors 工程实习生</strong><span class="meta">2023.07-2023.08</span></div>
<ul>
  <li>搭建并焊接 BLDC 电机测试台，执行性能与耐久测试流程。</li>
  <li>使用 VESC 工具链采集与分析测试数据，支持产品优化反馈。</li>
  <li>参与 IQC/OQC 质量流程并整理 SOP 文档，提升测试一致性与交接效率。</li>
</ul>

<div class="role-line"><strong>学生演讲者，ACAMIS 科技会议</strong><span class="meta">2023.03</span></div>
<ul>
  <li>围绕“技术赋能学习”进行主题展示，面向教育工作者与管理者进行技术分享。</li>
</ul>

<div class="role-line"><strong>主设计师，Greendeck VR 竞赛团队</strong><span class="meta">2021-2022</span></div>
<ul>
  <li>与 4 人团队共同完成交互式 3D VR 场景设计与实现（Unity, SketchUp）。</li>
  <li>获得赛事总冠军。</li>
</ul>

## 奖项
<ul class="compact">
  <li>SUAS 2025：团队前 25%，任务演示得分前 20%（UC San Diego，81 支队伍）。</li>
  <li>Cayley 数学竞赛 2022：全球前 25%，校内年级第一。</li>
  <li>Greendeck VR 竞赛 2021-2022：冠军。</li>
</ul>
