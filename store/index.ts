import create from 'zustand'
import { persist } from 'zustand/middleware'

import authStore, { AuthStore } from './auth'
import hydrateStore, { RehydrateStore } from './rehydrate'

export type Store = AuthStore & RehydrateStore

const useStore = create<Store>(
  persist(
    (set) => ({
      ...authStore(set),
      ...hydrateStore(set),
    }),
    {
      name: 'myApp',
      getStorage: () => sessionStorage,
      onRehydrateStorage: () => (state) => state?.setRehydration(true),
      blacklist: ['rehydrated', 'setRehydration'],
    }
  )
)

export default useStore
