"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const Myprofile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
      // console.log(Posts);
    };
    if (session?.user.id) fetchdata();
  }, []);
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async(post) => {
    try{
      await fetch(`/api/prompt/${post._id.toString()}`,{
        method: 'DELETE',
      });
      const filteredPosts=Posts.filter((p)=>p._id!==post._id)
      setPosts(filteredPosts);
    }catch(e){

    }
  };
  return (
    <>
      <Profile
        name="My"
        desc="Welcome to your Personlized Profile Page"
        data={Posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Myprofile;
