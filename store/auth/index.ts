import { SetState } from 'zustand'

import { Store } from '..'

export interface AuthStore {
  walletAddress?: string
  setWalletAddress: (address: string) => void
}

const authStore = (set: SetState<Store>): AuthStore => ({
  walletAddress: undefined,
  setWalletAddress: (address) => {
    set(() => ({ walletAddress: address }))
  },
})

export default authStore
