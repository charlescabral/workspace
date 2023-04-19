export type StoreProps = {
  name: string
  icon: string
  file: string
  url: string
  link: string
}

export type ModalProps = {
  isOpen?: boolean
  content?: string
  key?: string
}

export type StoreDataProps = {
  social: StoreProps[]
  sponsors: StoreProps[]
  modal?: ModalProps
}

export interface StoreApiProps {
  store: StoreDataProps
}
