<template>
	<div class="card py-4 overflow-auto px-4 rounded shadow-xl max-w-sm relative" :class="getBgColor(pokeDetails)">
		
		<div class="flex justify-between">
			<h5 class="text-gray-900 text-lg mb-0 capitalize leading-tight font-bold  mb-2">{{pokemon.name}}</h5>
			
			<span  v-if="pokeDetails" class="badge px-2  absolute top-0 right-0 font-bold badge-accent">
				{{pokeDetails.base_experience}} XP
			</span> 
		</div>
		<template v-if="pokeDetails">			
			<div class="picture  h-42 bg-transparent relative mw-full">
				<div class="h-32  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 absolute bg-gray-400 opacity-10 rounded-full"></div>
				<img  :src="pokeDetails.sprites.front_default" class="images mb-0" alt="pokemon"  >
			</div>
			
			<div class="text-gray-600 text-sm leading-tight font-medium">
				<span class="text-gray-900">Weight:</span> {{pokeDetails.weight}}Kg
			</div>
			<div class="text-gray-600 text-sm leading-tight font-medium">
				<span class="text-gray-900">Height:</span> {{pokeDetails.height}}m
			</div>	
			<div class="text-gray-600 text-sm leading-tight font-medium">
				<span class="text-gray-900">Type:</span> <span class="capitalize text-gray">  {{pokeDetails.types[0].type.name}} </span>
			</div>
			<button class="btn btn-primary w-full btn-sm py-2 mt-2" @click="showMore">More</button>
		</template>
		<template v-else >
			<div class="h-48 w-full flex items-center justify-center">
				<loader></loader>
			</div>
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
		showMore() {
			this.$store.commit('setCurrentPokemon', this.pokeDetails);
			this.$router.push( '/pokemon/more' );
		},
		async getPokemonImage() {
			const url = this.pokemon.url;
			const resp = await this.$axios.$get(url);
			this.pokeDetails = {...resp};
		},
		getBgColor(pokeDetails) {
			if (pokeDetails) {
				let pokeType = pokeDetails.types[0].type.name;
				if (pokeType === 'water' ){
					return 'bg-blue-100';
				}
				else if (pokeType === 'grass') {
					return 'bg-green-100';
				}
				else if (pokeType === 'fire') {
					return 'bg-red-100';
				}
				else if (pokeType === 'bug') {
					return 'bg-purple-100';
				}
				else if (pokeType === 'ground') {
					return 'bg-yellow-100';
				}
				else if (pokeType === 'poison') {
					return 'bg-pink-100';
				}
				else if (pokeType === 'fairy') {
					return 'bg-pink-200';
				}
				else if (pokeType === 'psychic') {
					return 'bg-purple-200';
				}
				else if (pokeType === 'rock') {
					return 'bg-gray-50';
				}
				else if (pokeType === 'electric') {
					return 'bg-yellow-200';
				}
				else {
					return 'bg-gray-50';
				}
			}
		}
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