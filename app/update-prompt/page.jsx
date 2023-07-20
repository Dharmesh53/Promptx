"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
const EditPrompt = () => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const [Submitting, setSubmitting] = useState(false);
  const promptId = searchparams.get("id");
  const [Post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  useEffect(() => {
    const getPromptDetails = async () => {
      const getParams = await fetch(`/api/prompt/${promptId}`);
      const data = await getParams.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);
  const updatePrompt=async(e)=>{
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: Post.prompt,
          tag: Post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="Edit"
      Post={Post}
      setPost={setPost}
      Submitting={Submitting}
      handle={updatePrompt}
    />
  );
};

export default EditPrompt;
