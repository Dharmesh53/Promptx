"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const PromptCard = ({ post, handletagClick, handleEdit, handleDelete }) => {
  const [Copied, setCopied] = useState("");
  const handleCopy=()=>{
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied('')
    }, 3000);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-4 ">
        <div className="flex justify-start items-start gap-1 cursor-pointer">
          <Image
            src={post.creater.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-satoshi text-gray-800 font-semibold">
            {post.creater.username}
          </h3>
          <p className="font-inter text-sm text-gray-500">
            {post.creater.email}
          </p>
        </div>
        <div className="copy_btn flex" onClick={handleCopy}>
          <Image
            src={
              Copied === post.prompt
                ? "./assests/icons/tick.svg"
                : "./assests/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="font-satoshi mt-4 text-sm text-gray-800">{post.prompt}</p>
      <p
        className="font-inter blue_gradient cursor-pointer text-sm"
        onClick={() => handletagClick && handletagClick(post.tag)}
      >
        {post.tag}
      </p>
    </div>
  );
};

export default PromptCard;
