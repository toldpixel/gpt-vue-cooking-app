import 'dotenv/config'
import OpenAI from 'openai';
import { Food } from '../controllers/FrontendRequestController';

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], 
});

async function requestPrompt(food: Food) {
    let message = `
    Create an image of ${food.cuisines[0]}, ${food.difficulty[0]}-to-prepare ${food.timeofday[0]} that is ${food.foodmoods[0]}. For ${food.persons} Person${food.persons > 1 ? 's.' : '.'}`
    const response = await openai.images.generate({ 
        model: "dall-e-2",
        prompt: message,
        size: "256x256",
    });
    /*let image_url = response.data.data[0].url;*/
    console.log(response.data[0])
    return response.data[0];
}

export { requestPrompt }