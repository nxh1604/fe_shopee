import Carousel from "@/components/Carousel";
import RatingStar from "@/components/RatingStar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel />
      <RatingStar ratingStar={3.4} />
    </main>
  );
}
