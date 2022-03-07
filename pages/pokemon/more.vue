<template>
	<div class="container lg:px-4 mx-auto ">
		<!-- {{this.$store.getters.getCurrentPokemon}}	 -->
		<div class="hero min-h-screen mx-auto bg-base-100 relative">
			<div class="flex-col  hero-content md:flex-row max-w-xl">
				<div class="indicator">
					<span class="indicator-item badge badge-primary">
						{{getCurrentPokemon.base_experience}} XP	  
					</span> 

					<img ref="imgPok" :src="getPokemonImage" @mouseleave="isHovering = false" @mouseenter="isHovering = true" class="max-w-sm h-56 rounded-lg shadow-2xl" style="image-rendering: pixelated" />
				</div>
				<div class="p-2 md:w-56 md:ml-8">
					<h1 class="text-4xl font-bold capitalize mb-3"> {{getCurrentPokemon.name}} </h1>
					<div class=" mb-4">
						<div class="text-gray-600 text flex leading-tight font-medium">
							<span class="text-gray-900 w-1/2">Weight:</span> <span class="w-1/2">{{getCurrentPokemon.weight}}Kg</span>
						</div>
						<div class="text-gray-600 flex leading-tight font-medium">
							<span class="text-gray-900  w-1/2">Height:</span> <span class="w-1/2">{{getCurrentPokemon.height}}m</span> 
						</div>	
						<div class="text-gray-600 flex leading-tight font-medium">
							<span class="text-gray-900  w-1/2">Type:</span> <span class=" w-1/2 capitalize text-gray">  {{getCurrentPokemon.types[0].type.name}} </span>
						</div>
						<!-- stats -->
					</div>
						<div class="flex flex-col w-full items-start" v-for="stat in getCurrentPokemon.stats" :key="stat.base_stat">
							<span class="mr-2 text-sm text-gray-500 capitalize ">{{stat.stat.name}}</span>
							<progress class=" progress-success  progress flex-grow" :value="stat.base_stat" max="100"></progress>
						</div>

				</div>
			</div>
				<button class="btn absolute top-4 right-4 btn-circle btn-outline" @click="goBack">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
				</button>
		</div>


	
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			getCurrentPokemon: 'getCurrentPokemon',
		}),
		getPokemonImage() {
			if (this.isHovering) {
				// this.$refs.imgPok.src = this.getCurrentPokemon.sprites.back_default ?? '';
				// console.log(this.$refs.imgPok);
				return this.getCurrentPokemon.sprites.back_default ?? '';
			} else {
				// this.$refs.imgPok.src = this.getCurrentPokemon.sprites.front_default ?? '';
				return this.getCurrentPokemon.sprites.front_default ?? '';
			}
		},
	},
	data() {
		return {
			isHovering: false,
		};
	},
	methods: {
			goBack() {
				this.$router.go(-1);
				this.$store.dispatch('setCurrentPokemon', null);
			}
	},
	mounted() {
		// console.log(this.$refs.imgPok);
		console.log(this.getCurrentPokemon);
	},
}
</script>