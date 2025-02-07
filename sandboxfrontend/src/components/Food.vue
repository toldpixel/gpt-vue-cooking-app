<script setup lang="js">
//import Wheel from './components/Wheel.vue'
import Diet from './subcomponentsfood/Diet.vue'
import Difficulty from './subcomponentsfood/Difficulty.vue'
import FoodTime from './subcomponentsfood/FoodTime.vue'
import Cuisine from './subcomponentsfood/Cuisine.vue'
import FoodMood from './subcomponentsfood/FoodMood.vue'
import HeaderElement from './HeaderElement.vue'
import Persons from './subcomponentsfood/Persons.vue'
</script>
<template> 
    <main class="min-h-screen bg-happywhite">
        <header>
        </header>
        <div class="flex flex-col items-center justify-center">
            <HeaderElement />
            <Persons @update:updateProp="data.persons = $event"/>
        </div>
        <div class="flex justify-center">
            <Diet @update-diets="handleButtonClick" :diets="data.diets"  />
            <Difficulty  @update-difficulty="handleButtonClick" :difficulty="data.difficulty"/>
            <FoodTime  @update-foodtime="handleButtonClick" :timeofday="data.timeofday" />
            <Cuisine  @update-cuisines="handleButtonClick" :cuisines="data.cuisines" />
            <FoodMood  @update-foodmoods="handleButtonClick" :foodmoods="data.foodmoods" />
        </div>
        <div class="text-center">
            <button @click="sendDataOnClick(data)" class="px-5 py-5 my-5 text-white bg-red-400 rounded align-middle font-bold pb-2 text-center">
                lets Go
            </button>
        </div>
    </main>
</template>
<script lang="js">
import dataRecord from './data/data.js'
import axios from 'axios'
export default {
    name: 'Food', 
    components: {
        Diet,
        Difficulty,
        FoodTime,
        Cuisine,
        FoodMood,
        HeaderElement,
        Persons,
    },
    data() {
        return {
            data: {},
        }
    },
    async mounted() {
        this.data = await dataRecord
    },
    methods: {
        handleButtonClick(prop, updatedArray, index) {
            this.data[prop] = [...updatedArray]
            const hasTrueVal = this.data[prop].some(x => x[1] === true); //check if any true values are set in property array 
            if (hasTrueVal) {
                let indexBefore = this.data[prop].findIndex(x => x[1] === true); // find the index of the set value 
                if (index === indexBefore) { // if its the same button (toggle)
                    this.data[prop][index][1] = false; // set the element to false
                } else {
                    this.data[prop][indexBefore][1] = false; //if its not the same button set the old to false 
                    this.data[prop][index][1] = true; // and the new to true 
                }
            } else {
                this.data[prop][index][1] = true; // if nothing is set yet than set the new button 
            }
        },
        handleUpdate(changes) {
             this.parentArray = changes;
        },
        async sendDataOnClick(data) {
            let sendData = {}
            for (const key in data) { // get all keys
                if (Array.isArray(data[key])) { //get all the true/false arrays
                    if(data[key].some(x => x[1] === true)) { //check if some have true values if yes 
                        let indexOfTrueArr = this.data[key].findIndex(x => x[1] === true); //get the index 
                        sendData[key] = data[key][indexOfTrueArr] //copy the true array in new array
                    }
                }
            }
            sendData["persons"] = data["persons"]; // add number of persons from data
            try {
                const response = await axios.post('http://localhost:3000/api/cooking', sendData).catch(function (error) {
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                 });
                 this.$store.commit('setSharedData', response.data);// Pass to ShareData Parent Component to share in Recipe
                 this.$router.push('/recipe');
            } catch(error) {
                console.error('Error fetching data', error.message);
            }
            
        }
    }
}

</script>
<style scoped></style>