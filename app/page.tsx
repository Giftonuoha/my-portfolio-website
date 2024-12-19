import Hero from "./component/Hero";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 h-screen">
      <div className="max-w-7xl w-full">
        <Hero/>

      </div>
    </main>
  );
}
