import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen min-h-[90dvh] items-center justify-center flex">
      <Image
        src="/logo-color.png"
        alt="Loading..."
        width={150}
        height={150}
        className="animate-pulse"
      />
    </div>
  );
}
