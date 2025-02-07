<script lang="js"></script>
<template>
    <!-- Food Mood-->
    <div class="my-5 text-center m-5">
        <div class="text-3xl text-gray-700 font-bold mb-10">Whats your food mood?</div>
            <div class="grid grid-cols-2 gap-1 my-5">
                <div v-for="(mood, index) in foodmoods" :key="index">
                    <button
                        :class="['btn-primary', 'hover:bg-sky-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-sky-700', 'focus:ring-opacity-50', foodmoods[index][1] ? 'bg-sky-600' : 'bg-sky-400']"
                        @click="updateFoodMood('foodmoods', index)">
                        {{ mood[0] }}
                    </button>
                </div>
            </div>
    </div>
</template>
<script lang="js">
export default {
    name: 'FoodMood',
    props: {
        foodmoods: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {

        }
    },
    methods: {
        updateFoodMood(prop, index) {
            let updatedArray = [...this.foodmoods];
            this.$emit('update-foodmoods', prop, updatedArray, index);
        }
    }
}
</script>