<script lang="js">
</script>
<template>
    <!-- Number of Persons -->
    <div class="text-3xl text-gray-700 font-bold mb-5">👪 Number of Persons</div>
      <div class="flex items-center">
        <input type="number" id="quantity" @change="$emit('update:updateProp', $event.target.value)" value="1" min="1" max="5"
          class="text-center w-16 border-t border-b my-4" />
      </div>
</template>
<script lang="js">
export default {
    name: 'Persons',
    props: {
        updateProp: {
            type: Number,
            default: 1
        }
    },
    data() {
      return {
        
      }
    }
}
</script>