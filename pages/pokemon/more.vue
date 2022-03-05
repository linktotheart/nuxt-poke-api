<template>
	<div class="container lg:px-4 mx-auto ">
		<!-- {{this.$store.getters.getCurrentPokemon}}	 -->
		<div class="hero min-h-screen mx-auto bg-base-200">
			<div class="flex-col hero-content lg:flex-row max-w-xl">
				<div class="indicator">
					<span class="indicator-item badge badge-primary">
						{{getCurrentPokemon.base_experience}} XP	  
					</span> 

					<img ref="imgPok" :src="getPokemonImage" @mouseleave="isHovering = false" @mouseenter="isHovering = true" class="max-w-sm h-56 rounded-lg shadow-2xl" style="image-rendering: pixelated" />
				</div>
				<div>
					<h1 class="text-5xl font-bold capitalize"> {{getCurrentPokemon.name}} </h1>

					stats
					

				</div>
			</div>
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
			
	},
	mounted() {
		// console.log(this.$refs.imgPok);
		console.log(this.getCurrentPokemon);
	},
}
</script>