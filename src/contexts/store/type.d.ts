export interface UseStoreProps {
  storeContext?: StoreDataProps
  setStore: (store: StoreDataProps) => void
}

export interface StoreProviderProps {
  store?: StoreDataProps
  attribute?: string | 'class'
  value?: ValueObject
  children?: React.ReactNode
}
