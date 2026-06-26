import manifest from '../data/asset_manifest.json'

export function getAsset(id: string) {
  const asset = manifest.assets.find((item: any) => item.id === id)
  if (!asset) throw new Error(`Asset not found: ${id}`)
  return '/' + asset.path
}

export const productionCharacters = manifest.assets.filter((item: any) => item.category === 'character_card_portrait' && item.format === 'webp')
export const productionAnomalies = manifest.assets.filter((item: any) => item.category === 'anomaly_card_art' && item.format === 'webp')
export const productionRooms = manifest.assets.filter((item: any) => item.category === 'room_background_web_800' && item.format === 'webp')
