import Link from "next/link";
const Form = ({ type, Post, setPost, Submitting, setSubmitting, handle }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts woth the world and let your imagination
        run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handle}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={Post.prompt}
            onChange={(e) => setPost({ ...Post, prompt: e.target.value })}
            placeholder="Write your Prompt here.."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">(#string,#region,#endregion)</span>
          </span>
          <input
            value={Post.tag}
            onChange={(e) => setPost({ ...Post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={Submitting}
            className="px-5 py-1.5 text-sm bg-black text-white rounded-2xl"
          >
            {Submitting ? `${type}...` : Ktype }
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
