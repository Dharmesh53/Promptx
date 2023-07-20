import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate('creater');
    console.log(prompts)
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response("failed to fetch the prompt", { status: 500 });
  }
};
