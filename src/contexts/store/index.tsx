import { createContext, FC, useContext, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { UseStoreProps, StoreProviderProps } from './type'
import { callAPI } from '@/lib'

export const StoreContext = createContext<UseStoreProps>({
  storeContext: null,
  setStore: () => null
})

export const StoreProvider: FC<StoreProviderProps> = ({ store, children }) => {
  const [storeContext, setStore] = useState<UseStoreProps>(store)

  useIsomorphicLayoutEffect(() => {
    if (store) {
      setStore(store)
    } else {
      callAPI('store').then((result) => {
        const storeApi = Object.values({ ...result })[0] as UseStoreProps
        setStore(storeApi)
      })
    }
  }, [store])

  return (
    <StoreContext.Provider value={{ storeContext, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore(): UseStoreProps {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within a DesignerProvider')
  }
  return context
}
