"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handletagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handletagClick={handletagClick}/>
      ))}
    </div>
  );
};
const Feed = () => {
  const [Searchtxt, setSearchtxt] = useState("");
  const [Posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchtxt(e.target.value)
  };
  useEffect(() => {
    const fetchPost = async () => {
      const resposnse = await fetch("/api/prompt");
      const data = await resposnse.json();
      setPosts(data);
    };
    fetchPost();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username.."
          value={Searchtxt}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={Posts} handletagClick={() => {}} />
    </section>
  );
};

export default Feed;
