<template>
   <div class="container">
		<div class="wheel-table">
			<div class="wheel">
				<div class="wheel-segment"></div>
			</div>
		</div>
   </div>
</template>
  
<script lang="js">
export default {
    data() {
      return {
        rotation: 0,
        spinning: false,
        items: ["Comforting", "Adventurous", "Healthy and Fresh", "Indulgent", "Cozy and Warm", "Energizing", "Romantic", "Soothing", "Festive", "Nostalgic"],
      };
    },
    computed: {
    },
    methods: {
      getSegmentStyle(index) {
        const segmentAngle = 360 / this.items.length;
        return {
            transform: `rotate(${segmentAngle * index}deg)`,
            // Additional styling for positioning and text alignment
        };
      },
    },
};
  </script>
  
<style lang="scss" scoped>
	$diameter: 350px;
	.wheel-table {
		position: relative;
		width: 500px;
		height: 500px;
		background-color: lightblue;
	}

	.wheel {
		position: relative;
		top: 50%;
		left: 50%;
		width: 350px;
		height: 350px;
		background-color: lightyellow;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}

	.wheel-segment {
		/*position: absolute;
		top: 50%;
 		left: 50%;
		width: 50%;
		height: 50%;
		//border-radius: 50%;
		//clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
		border-radius: 50%;
		background-color: black;
		transform-origin: top center;
		transform: rotate(0deg); 
		transform: translate(-50%, 0%);*/
		position: absolute;
		width: 50%;
		height: 50%;
		transform-origin: bottom right;
		transform: rotate(calc(45deg * 1));
		background-color: black;
		clip-path: polygon(0 0, 56% 0, 100% 100%, 0 56%);
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		cursor: pointer;
	}


</style>