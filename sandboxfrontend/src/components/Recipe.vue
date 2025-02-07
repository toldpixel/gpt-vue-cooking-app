<script lang="js"></script>
<template>
    <div class="flex h-screen justify-center items-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="sharedData.url" alt="Image description">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Title</div>
                <p class="text-gray-700 text-base">
                    {{sharedData.revised_prompt}}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button Text
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="js">
export default {
    name: "Recipe",
    computed: {
        sharedData() {
            return this.$store.state.sharedData;
        }
    }
}
</script>