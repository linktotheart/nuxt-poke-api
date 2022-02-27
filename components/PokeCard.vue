<template>

  <div class="block px-5 py-8 rounded-xl shadow-xl bg-white max-w-sm">
	<h5 class="text-gray-900 text-lg text-capitalise leading-tight font-medium  mb-2">{{pokemon.name}}</h5>
	<template v-if="pokeDetails">
		<div class="picture mw-full">
			<img  :src="pokeDetails.sprites.front_default" class="images" alt="pokemon"  >
		</div>
		<div class="text-gray-600 text-sm leading-tight font-medium">
			<span class="text-gray-900">Weight:</span> {{pokeDetails.weight}}Kg
		</div>
		<div class="text-gray-600 text-sm leading-tight font-medium">
			<span class="text-gray-900">Height:</span> {{pokeDetails.height}}m
		</div>
		<button class="btn btn-primary">More</button>
	</template>
	
</div>
				
</template>

<script>
export default {
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
		
	},
	data() {
		return {
			pokeDetails: null,
		};
	},
	computed: {
		
	},
	async created() {
		await this.getPokemonImage();
	},
	methods: {
		async getPokemonImage() {
			const url = this.pokemon.url;
			const resp = await this.$axios.$get(url);
			this.pokeDetails = {...resp};
		},
	}
}
</script>

<style>
.images{
	image-rendering: pixelated;
	width: 100%;
	max-width: 100%;
}

</style>