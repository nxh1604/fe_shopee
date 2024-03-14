import Carousel from "@/components/Carousel";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Carousel />
      </main>
    </>
  );
}
