import { createContext, FC, useContext, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { UseStoreProps, StoreProviderProps } from './type'

export const StoreContext = createContext<UseStoreProps | undefined>({
  setStore: () => null
})

export const StoreProvider: FC<StoreProviderProps> = ({ store, children }) => {
  const [storeContext, setStore] = useState<UseStoreProps>(store)

  useIsomorphicLayoutEffect(() => {
    setStore(store)
  }, [])

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
