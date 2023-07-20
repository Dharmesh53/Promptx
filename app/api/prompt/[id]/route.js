import { connectToDB } from "@utils/database";
import Prompt, { exists } from "@models/prompt";
export const GET = async (request, {params}) => {
  try {
    await connectToDB();
    const prompts = await Prompt.findById(params.id).populate("creater");
    console.log(prompts);
    if(!prompts) return new Response("No Prompt found",{status: 404})
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response("failed to fetch the prompt", { status: 500 });
  }
};

export const PATCH= async (request, {params})=>{
    const {prompt,tag}=await request.json();
    try {
        await connectToDB();
        const existing = await Prompt.findById(params.id)
        existing.prompt = prompt;
        existing.tag = tag;
        await existing.save();
        return new Response(JSON.stringify(existing), { status: 200});
    } catch (error) {
        return new Response("failed to fetch the prompt",{status:500});
    }
}

export const DELETE= async(request,{params})=>{
    try{
        await connectToDB();
        await Prompt.deleteById(params.id);
        return new Response("success",{status:200})
    }catch(e){
        return new Response("failed to delete the prompt",{status:500})
    }
}