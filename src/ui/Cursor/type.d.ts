export interface HTMLElementTagNameMap {
  forEach(arg0: (element: HTMLElement) => void): unknown
  a?: HTMLAnchorElement
  button?: HTMLButtonElement
  input?: HTMLInputElement
  label?: HTMLLabelElement
  '*[data-cursor="pointer"]'?: HTMLElement
}

export interface Elements {
  [key: string]: string
}
