export const state = () => ({
  index: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('/img/index.jpg')",
    backgroundPosition: 'center top',
    backgroundRepeat: 'no repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -10,
  },
  menu: {},
  facts: {},
})

export const mutations = {
  change(state, options) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state = Object.assign(options, state)
  },
  factChange(state, options) {
    state.facts = Object.assign(options, state.facts)
  },
}
