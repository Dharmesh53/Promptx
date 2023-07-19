"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
const CreatePrompt = () => {
  const [Submitting, setSubmitting] = useState(false);
  const [Post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: Post.prompt,
          userId: session?.user.id,
          tag: Post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      Submitting(false);
    }
  };
  return (
    <Form
      type="Create"
      Post={Post}
      setPost={setPost}
      Submitting={Submitting}
      handle={createPrompt}
    />
  );
};

export default CreatePrompt;
