<script lang="js">
</script>
<template>
    <div class="my-5 text-center m-5">
        <div class="text-3xl text-gray-700 font-bold mb-10">Cuisine</div>
        <div class="grid grid-cols-2 gap-1 my-5">
          <div v-for="(cuisine, index) in cuisines" :key="index">
            <button
              :class="['btn-primary', 'bg-blue', 'hover:bg-sky-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-sky-700', 'focus:ring-opacity-50', cuisines[index][1] ? 'bg-sky-600' : 'bg-sky-400']"
              @click="updateCuisines('cuisines', index)">
              {{ cuisine[0] }}
            </button>
          </div>
        </div>
      </div>
</template>
<script lang="js">
export default {
    name: 'Cuisine',
    props: {
        cuisines: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    methods: {
        updateCuisines(prop, index) {
            let updatedArray = [...this.cuisines];
            this.$emit('update-cuisines', prop, updatedArray, index);
        }
    }
}
</script>