import Image from "next/image";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <h1>TESTING IMAGES</h1>
      <Image src="https://placehold.co/600x400/png" alt="Demo test" width={600} height={400} priority={true} />
    </>
  );
}
