import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Welcome {session.user.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  
  return (
    <>
      <h1>You are not signed in</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  );
}
