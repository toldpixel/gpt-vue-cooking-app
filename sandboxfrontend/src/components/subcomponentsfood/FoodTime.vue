<script lang="js">
</script>
<template>
 <!-- Food Time -->
 <div class="my-5 text-center m-5">
        <div class="text-3xl text-gray-700 font-bold mb-10">Which Time</div>
        <div class="grid grid-cols-2 gap-1 my-5">
          <div v-for="(time, index) in timeofday" :key="index">
            <button
              :class="['btn-primary', 'hover:bg-sky-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-sky-700', 'focus:ring-opacity-50', timeofday[index][1] ? 'bg-sky-600' : 'bg-sky-400']"
              @click="updateFoodTime('timeofday', index)">         
              {{ time[0] }}
            </button>
          </div>
        </div>
      </div>
</template>
<script lang="js">
export default {
    name: 'FoodTime',
    props: {
        timeofday: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    methods: {
        updateFoodTime(prop, index) {
            let updatedArray = [...this.timeofday];
            this.$emit('update-foodtime', prop, updatedArray, index);
        }
    }
    
}
</script>