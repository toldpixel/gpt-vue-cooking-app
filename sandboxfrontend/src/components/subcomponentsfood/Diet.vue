<!-- Food Diet -->
<script lang="js">
</script>
<template>
    <div class="text-center m-5">
        <div class="text-3xl text-gray-700 font-bold mb-10">Diet</div>
        <div class="grid grid-cols-2 gap-1 my-5">
            <div v-for="(diet, index) in diets" :key="index">
                <button
                    :class="['btn-primary', 'hover:bg-sky-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-sky-700', 'focus:ring-opacity-50', diets[index][1] ? 'bg-sky-600' : 'bg-sky-400']"
                    @click="updateDiets('diets', index)">
                    {{ diet[0] }}
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="js">
export default {
    name: 'Diet',
    props: {
        diets: {
            type: Array,
            default: () => []
        }
    },
    data() {
            return {           
        }               
    },
    methods: {
        updateDiets(prop, index) {
            let updatedArray = [...this.diets];
            this.$emit('update-diets', prop, updatedArray, index);
        }
    }
}
</script>
