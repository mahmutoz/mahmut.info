export interface RehypeElement {
  type: string
  tagName?: string
  value?: string
  attributes?: Record<string, unknown>
  properties: {
    className?: Array<string>
    style?: string
  } & Record<string, unknown>
  children?: Array<RehypeElement>
  heroMeta?: {
    src: string
    width: number
    height: number
  }
}
