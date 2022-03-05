export const state = () => ({
	page: 1,
	currentPokemon: {},
  })

  export const mutations = {
	setPage(state, page) {
		state.page = page
	},
	setCurrentPokemon(state, pokemon) {
		state.currentPokemon = pokemon
	}
  }
  
  export const getters = {
	getPage(state) {
		return state.page
	},
	getCurrentPokemon(state) {
		return state.currentPokemon
	}
  }