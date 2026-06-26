# 前端接入建议

## Vue/React

```ts
import '@/assets/black-tide/styles/design-tokens.css'

const anomalyCard = '/assets/anomalies/cards/png/anomaly_a_01_whispering_lighthouse.png'
```

## PixiJS/Phaser/Cocos

建议使用 PNG 作为开发期纹理，WebP 作为 Web 构建期压缩资源。游戏文本、数值、按钮文字应由前端动态渲染。

## 命名规则

`类型_批次_序号_slug.png`，例如：

- `investigator_a_01_elene_hawk_spirit_scholar.png`
- `anomaly_a_01_whispering_lighthouse.png`
- `room_01_standard_containment_room.png`
- `icon_01_containment.png`
