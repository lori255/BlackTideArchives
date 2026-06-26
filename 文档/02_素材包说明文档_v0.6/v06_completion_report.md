# v0.6 production 补齐报告

## 已补齐

| 分类 | 数量 | 文件夹 |
|---|---:|---|
| 路线图标 SVG | 12 | assets/production/svg/routes |
| 状态图标 SVG | 24 | assets/production/svg/status |
| 属性图标 SVG | 12 | assets/production/svg/attributes |
| 材料/节点图标 SVG | 48 | assets/production/svg/materials |
| 房间功能图标 SVG | 16 | assets/production/svg/rooms |
| 通用功能图标 SVG | 40 | assets/production/svg/functions |
| UI 组件/框体 SVG | 19 | assets/production/svg/ui_components |

## 质量原则

- 新增 SVG 全部无内嵌中文、编号、说明文字。
- 颜色使用统一暗金/青绿/红色风险体系。
- 适合直接以 `<img>`、CSS mask、inline SVG 或 PixiJS texture 引用。
- 运行时文本仍由前端渲染。

## 仍建议后续处理

- 角色透明抠图：当前还不是稳定 alpha 资产。
- 动效：当前 VFX 多为静态帧，建议后续转程序粒子或 spritesheet。
- 核心异常物：建议逐张重新生成无背景透明 PNG 或人工修图。
