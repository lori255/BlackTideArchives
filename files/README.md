# 黑潮档案局 Web 开发素材包 v0.5 production

这版在 v0.4 clean 基础上继续补充了单独生成的生产候选素材，并修正“图集裁切导致文字混入”的问题。

## 当前定位

- 可以直接用于 Web 端 MVP / 原型 / 第一版页面开发。
- 运行时素材目录不应包含中文标题、编号、说明文字；游戏文本由前端和配置渲染。
- `references/` 目录仅用于视觉参考，不应直接导入运行时。

## 新增生产候选素材

- 6 名调查员：完整图、卡片裁切、头像裁切。
- 2 件异常物：完整图、方形卡图、自动透明 PNG 尝试版。
- 2 个房间背景：1600x900 与 800x450 Web 版。
- 9 个路线/状态 SVG 图标。
- 前端 `production-helpers.css` 与 `asset-loader.ts` 示例。

## 重要质量说明

1. 角色立绘目前是“深色统一背景”，不是可靠透明背景。用于卡牌、详情页、对话框是可用的；如果要做角色从背景里独立抠出，需要后续人工或专业抠图流程。
2. 异常物提供了自动 alpha 版，但由于黑色材质和背景接近，边缘需要人工复核。
3. 商用上线前，核心角色和异常物仍建议逐张精修与相似性检查。
4. 本包不包含完整动画序列。

## 推荐接入目录

```text
assets/production/characters/card_portraits
assets/production/characters/avatars
assets/production/anomalies/card_art
assets/production/anomalies/cutout_alpha
assets/production/rooms/wide_800
assets/production/svg/status
styles/production-helpers.css
data/asset_manifest.json
```
