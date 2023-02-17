export const getCssVar = (
  name: string,
  parent: HTMLElement | null | undefined = null
) => {
  if (typeof document === 'undefined' || !name) {
    return ''
  }
  const target = parent || document.documentElement
  const property = isCssVar(name)
    ? name.replace('var(', '').replace(')', '')
    : name.includes('--')
    ? name
    : `--${name}`

  return getComputedStyle(target).getPropertyValue(property)
}

export const isHex = (str: string): boolean => {
  const exp = /#[a-fA-F0-9]{3,6}/g

  return exp.test(str)
}

export const hexToRgb = (color: string): [number, number, number] => {
  const fullReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const full = color.replace(
    fullReg,
    (_, r, g, b) => `${r}${r}${g}${g}${b}${b}`
  )
  const values = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full)

  if (!values) {
    throw new Error(`Next UI: Unsupported ${color} color.`)
  }

  return [
    Number.parseInt(values[1], 16),
    Number.parseInt(values[2], 16),
    Number.parseInt(values[3], 16)
  ]
}

export const hexToRGBA = (hex: string, alpha = 1): string => {
  let r: string | number = 0,
    g: string | number = 0,
    b: string | number = 0

  // 3 digits
  if (hex.length == 4) {
    r = '0x' + hex[1] + hex[1]
    g = '0x' + hex[2] + hex[2]
    b = '0x' + hex[3] + hex[3]
    // 6 digits
  } else if (hex.length == 7) {
    r = '0x' + hex[1] + hex[2]
    g = '0x' + hex[3] + hex[4]
    b = '0x' + hex[5] + hex[6]
  }

  return `rgba(${+r},${+g},${+b},${alpha})`
}

export const isCssVar = (property: string) => {
  return property && property?.indexOf('var(') === 0 ? true : false
}

export const colorToRgbValues = (colorProp: string) => {
  const color = isCssVar(colorProp) ? getCssVar(colorProp) : colorProp

  if (color.charAt(0) === '#') return hexToRgb(color)

  const safeColor = color.replace(/ /g, '')
  const colorType = color.substr(0, 4)

  const regArray = safeColor.match(/\((.+)\)/)

  if (!colorType.startsWith('rgb') || !regArray) {
    console.warn(`NextUI: Only supports ["RGB", "RGBA", "HEX"] color.`)

    return [0, 0, 0]
  }

  return regArray[1].split(',').map((str) => Number.parseFloat(str))
}

export const addColorAlpha = (colorProp?: string, alpha = 1) => {
  if (!colorProp) return ''
  const color = isCssVar(colorProp) ? getCssVar(colorProp) : colorProp

  if (isHex(color)) {
    return hexToRGBA(color, alpha)
  } else if (!/^#|rgb|RGB/.test(color)) {
    return color
  }
  const [r, g, b] = colorToRgbValues(color)
  const safeAlpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha

  return `rgba(${r}, ${g}, ${b}, ${safeAlpha})`
}
