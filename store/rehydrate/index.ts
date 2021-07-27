import { SetState } from 'zustand'

import { Store } from '..'

export interface RehydrateStore {
  rehydrated: boolean
  setRehydration: (value: boolean) => void
}

const hydrateStore = (set: SetState<Store>): RehydrateStore => ({
  rehydrated: false,
  setRehydration: (value) => set(() => ({ rehydrated: value })),
})

export default hydrateStore
