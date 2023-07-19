"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Provider from "./Provider";

const Nav = () => {
  const { data: session } = useSession();
  const [Providers, setProviders] = useState(null);
  useEffect(() => {
    const setupProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setupProvider();
  }, []);
  return (
    <div className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assests/images/logo.svg"
          alt="Promptx"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptx</p>
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href={"/profile"} >
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {Providers &&
              Object.values(Providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
