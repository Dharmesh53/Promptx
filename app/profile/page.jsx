"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Profile from "@components/Profile";
const MyProfile = () => {
  return (
    <Profile
      name="My"
      desc="Welcome to your Personlized Profile Page"
      data={[]}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default MyProfile;
