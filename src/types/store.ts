export type StoreProps = {
  name: string
  icon: string
  file: string
  url: string
  link: string
}

export type StoreDataProps = {
  social?: StoreProps[]
  sponsors?: StoreProps[]
}

export interface StoreApiProps {
  store: StoreDataProps
}
