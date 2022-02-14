<template>
	<!-- <Tutorial/> -->
	<div class="container mx-auto mt-12">
		<template v-if="isLoading">
			<!-- tailwind spinner -->
			<div class="flex justify-center">
				<loader></loader>
			</div>
		</template>
		<template v-else>
			<!-- tailwind cards  -->
			<div class="grid grid-cols-6 gap-4">
				<div class="" v-for="poke in pokemons" :key="poke.url" >
					<poke-card :pokemon="poke"></poke-card>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import PokeCard from '~/components/PokeCard.vue';
// import axios from 'axios'
export default {
	components: { PokeCard },
	name: "IndexPage",
	data() {
		return {
			message: "Welcome to Your Vue.js App",
			pokemons: [],
			isLoading: true,
		};
	},
	async mounted() {
		await this.getPokemons();
	},
	methods: {
	  async	getPokemons() {
      this.isLoading = true;
			const data = await this.$axios.$get("https://pokeapi.co/api/v2/pokemon?limit=151");
      console.log(data);
      this.pokemons = data.results;
      this.isLoading = false;
		},
	},
};
</script>
