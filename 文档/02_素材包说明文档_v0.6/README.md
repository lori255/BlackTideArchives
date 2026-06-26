# Black Tide Archives / 黑潮档案局 Web 开发素材包 v0.6 production

本包在 v0.5 production 基础上继续补齐开发直接可接入的结构化素材。重点不是概念图，而是运行时可以通过路径直接引用的 SVG、PNG、WebP、CSS 和 manifest。

## 本轮新增

- 路线图标 SVG：12 个
- 状态图标 SVG：24 个
- 属性图标 SVG：12 个
- 材料/节点图标 SVG：48 个
- 房间功能图标 SVG：16 个
- 通用功能图标 SVG：40 个
- UI 组件/框体 SVG：19 个
- production-components-v06.css
- asset-registry-v06.ts
- InvestigatorCard.vue 示例组件
- 更新 asset_manifest.json / asset_index.csv / checksums.sha256.json / preview/index.html

## 使用建议

- `assets/production/svg/**`：优先作为正式 UI 图标和框体资源接入。
- `assets/production/characters/**`：可用于原型和 MVP；正式上线前建议人工抠图与精修。
- `assets/production/anomalies/**`：异常物图可用于卡面；透明 alpha 版本仍需检查边缘。
- `references/**`：仅参考，不要作为运行时素材。
- 所有中文名称、等级、描述、编号都应由前端组件和配置数据渲染，不应烘焙到图片中。

## 推荐接入路径

```ts
import manifest from './data/asset_manifest.json'
import './styles/design-tokens.css'
import './styles/production-components-v06.css'
```

## 仍未完全解决

- 高质量透明角色立绘仍需专业抠图或重新生成透明背景版本。
- 动态特效目前为静态概念帧，正式动画建议用 WebGL 粒子或 Lottie/Spritesheet 重做。
- 正式商用前需要做美术相似性检查、版权检查和逐张精修。
