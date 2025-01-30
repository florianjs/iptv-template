import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    isPlaying: false,
  }),
  actions: {
    setPlaying(playing: boolean) {
      this.isPlaying = playing
    },
  },
})
