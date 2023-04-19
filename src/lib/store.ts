/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

type DataProps = {
  projectIsOn: boolean
}

export type DataStateProps = {
  data: DataProps
}

export default create((set) => ({
  data: { projectIsOn: false },
  setData: (data: DataStateProps) => set({ data })
}))
