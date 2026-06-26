# 黑潮档案局 Web 开发素材包 v0.3

这是面向 Web 前端原型开发的可直接引用素材包。v0.3 在 v0.2 基础上补齐了独立切分素材：调查员、异常物、环境、房间、图标、物品、VFX、纹理和 UI SVG。

## 推荐引用方式

- 页面基准图：`assets/mockups/png` 或 `assets/mockups/webp`
- 调查员卡/头像：`assets/characters/cards/png`、`assets/characters/portraits/png`
- 异常物卡/图：`assets/anomalies/cards/png`、`assets/anomalies/art/png`
- 场景背景：`assets/environments/wide/png`
- 房间背景：`assets/rooms/png`
- 图标格子：`assets/icons/tile/png`
- 物品图标：`assets/items/tile/png`
- 干净 SVG 图标：`assets/ui/svg/icons`
- UI 框体 SVG：`assets/ui/svg/frames`
- 设计变量：`styles/design-tokens.css`
- 素材索引：`data/asset_manifest.json`

## 说明

PNG/WebP 栅格素材已按开发目录拆分，可直接作为 `<img>`、CSS background、PixiJS/Phaser/Cocos 纹理使用。部分从 AI 图集切分得到，文字内容仅作氛围与占位，正式开发时建议前端文本使用真实组件渲染，不要依赖图片里的文字。
