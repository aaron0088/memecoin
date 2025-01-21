import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className=" flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:bg-none">
            <Image
              unoptimized={true}
              src="https://media1.tenor.com/m/Q4SZWsMX2NIAAAAd/dance.gif"
              alt="memecoin"
              width={250}
              height={1000}
            />
        </div>
      </div>
    </main>
  );
}
