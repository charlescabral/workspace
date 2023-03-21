import { MdProps } from '.'

export type SocialProps = {
  name: string
  icon: string
  file: string
  url: string
}

export type StoreDataProps = {
  social?: SocialProps[]
}

export interface StoreApiProps {
  store: StoreDataProps
}

export interface StoreStateProps {
  storeState: MdProps
  setStoreState: (store: StoreApiProps) => void
}
