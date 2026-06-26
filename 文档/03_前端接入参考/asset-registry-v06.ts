
export type AssetKind =
  | 'character' | 'anomaly' | 'room' | 'environment'
  | 'ui-icon' | 'status-icon' | 'route-icon' | 'material-icon'
  | 'ui-frame' | 'texture' | 'vfx';

export interface BtAsset {
  id: string;
  kind: AssetKind | string;
  path: string;
  format?: string;
  runtime_ready?: boolean;
  tags?: string[];
}

export async function loadAssetManifest(base = '/assets') {
  const res = await fetch(`${base}/data/asset_manifest.json`);
  if (!res.ok) throw new Error(`Failed to load manifest: ${res.status}`);
  return await res.json() as BtAsset[];
}

export function byKind(assets: BtAsset[], kind: string) {
  return assets.filter(a => a.kind === kind);
}

export function byTag(assets: BtAsset[], tag: string) {
  return assets.filter(a => a.tags?.includes(tag));
}

export function assetUrl(asset: BtAsset, publicBase = '') {
  return `${publicBase}/${asset.path}`.replace(/\/+/g, '/');
}
