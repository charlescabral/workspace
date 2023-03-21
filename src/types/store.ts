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
