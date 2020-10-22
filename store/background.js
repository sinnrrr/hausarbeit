export const state = () => ({
  options: {
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
  },
})

export const mutations = {
  change(state, options) {
    state.option = Object.assign(options, state.options)
  },
}
