import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creater: params.id }).populate(
      "creater"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response("failed to fetch the prompt", { status: 500 });
  }
};
