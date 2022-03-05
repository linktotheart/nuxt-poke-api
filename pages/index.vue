<template>
	<main>
		<div class="logo px-8 mt-4">
			<poke-logo></poke-logo>
		</div>
		<div class="container px-4  mx-auto pt-8 ">
			<template v-if="isLoading">
				<!-- tailwind spinner -->
				<div class="flex min-h-full justify-center">
					<loader></loader>
				</div>
			</template>
			<template v-else>
				<div class="flex justify-center w-full mx-auto mb-6">
					<div class="form-control">
						<div class="input-group">
							<input type="text" placeholder="Search pokemons…" v-model="inpQuery" class="input input-bordered">
							<button class="btn btn-square">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
							</button>
						</div>
					</div>
				</div>
				<!-- tailwind cards  -->
				<div class="grid  mb-8 grid-cols-2   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4">
					<div class="" v-for="poke in filterPokemons" :key="poke.url" >
						<poke-card :pokemon="poke"></poke-card>
					</div>
				</div>
				<div class="flex items-center justify-between mb-16">
					<div class="">
						Current Page: {{currentPage}}
					</div>
					<div class="btn-group">
						<button class="btn" @click="goBack" :disabled="currentPage === 1">Previos</button>
						<button class="btn" @click="loadMore">Next</button>
					</div>
				</div>
			</template>
		</div>
		
	</main>	
	
</template>

<script>
import PokeCard from '~/components/PokeCard.vue';
import PokeLogo from '~/components/pokeLogo.vue';
// import axios from 'axios'
export default {
	components: { PokeCard, PokeLogo },
	name: "IndexPage",
	data() {
		return {
			message: "Welcome to Your Vue.js App",
			pokemons: [],
			isLoading: true,
			currentPage: 1,
			inpQuery: '',
		};
	},
	async mounted() {
		await this.getPokemons();
	},
	computed: {
		filterPokemons() {
			return this.pokemons.filter(pokemon => {
				return pokemon.name.toLowerCase().includes(this.inpQuery.toLowerCase());
			});
		}
	},
	methods: {
		async	getPokemons() {
			const limit = 60 * this.currentPage;
			const offset = limit - 60;
			this.isLoading = true;
			const data = await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
			console.log(data);
			this.pokemons = data.results;
			this.isLoading = false;
		},
		async loadMore() {
			this.currentPage++;
			await this.getPokemons();
		},
		goBack() {
			if (this.currentPage > 1) {
				this.currentPage--;
				this.getPokemons();
			}
		},
	},
};
</script>
