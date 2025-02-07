<script lang="js">
</script>
<template>
    <!-- Cooking Difficulty -->
<div class="my-5 text-center m-5">
    <div class="text-3xl text-gray-700 font-bold mb-10">Difficulty</div>
    <div class="grid grid-cols-2 gap-1 my-5">
      <div v-for="(lvl, index) in difficulty">
        <button v-if="lvl[0] === 'Easy'"
          :class="['btn-primary','hover:bg-green-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-700', 'focus:ring-opacity-50', difficulty[index][1] ? 'bg-green-600' : 'bg-green-400']"
          @click="updateDifficulty('difficulty', index)">
          {{ lvl[0] }}
        </button>
        <button v-else-if="lvl[0] === 'Medium'"
          :class="['btn-primary', 'hover:bg-yellow-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-yellow-700', 'focus:ring-opacity-50', difficulty[index][1] ? 'bg-yellow-600' : 'bg-yellow-400']"
          @click="updateDifficulty('difficulty', index)">
          {{ lvl[0] }}
        </button>
        <button v-else="lvl[0] === 'Hard'"
          :class="['btn-primary', 'hover:bg-red-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-red-700', 'focus:ring-opacity-50', difficulty[index][1] ? 'bg-red-600' : 'bg-red-400']"
          @click="updateDifficulty('difficulty', index)">
          {{ lvl[0] }}
        </button>
      </div>
    </div>
</div>
</template>
<script lang="js">
export default {
    name: 'Difficulty',
    props: {
        difficulty: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {

        }
    },
    methods: {
        updateDifficulty(prop, index) {
            let updatedArray = [...this.difficulty];
            this.$emit('update-difficulty', prop, updatedArray, index);
        }
    }
}
</script>
