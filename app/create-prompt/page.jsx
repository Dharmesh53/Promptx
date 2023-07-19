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
  const createPrompt = async () => {};
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
