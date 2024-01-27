import RatingStar from "@/components/RatingStar";
import productsData from "@/lib/data/productsData";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const index = parseInt(id) - 1;
  const product = productsData[index];

  if (!product) return <h1 className="text-red-500">Product not found!</h1>;

  const src = product.src.startsWith("https") ? product.src : `/${product.src}`;

  return (
    <main className="bg-primaryBgColor h-[100vh]">
      <div>Bread Crums</div>
      <div className="gridLayout bg-white p-4 mt-8">
        <section className="row-12px">
          <h1 className="sr-only">{product.title}</h1>
          <section className="col-12px w-5/12">
            <h2 className="sr-only">Product Image Section</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-[500px] w-auto rounded-sm object-cover" width={400} height={400} src={src} alt=""></img>
            <div className="relative mt-4">
              <button className="absolute left-0 top-[50%] translate-y-[-50%] bg-black/5 py-2">Previous</button>
              <ul className="flex gap-2 *:bg-yellow-500 *:w-1/5 h-[82px]">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
              </ul>
              <button className="absolute right-0 top-[50%] translate-y-[-50%] bg-black/5 py-2">Next</button>
            </div>
            <div className="flex *:flex-1 mt-6">
              <div className="flex justify-center">
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
              </div>
              <div className="flex justify-center">
                <div>item 1</div>
                <div>item 2</div>
              </div>
            </div>
          </section>
          <section className="col-12px flex-1">
            <h2 className="sr-only">Product Information Section</h2>
            <div className="font-[500] pb-2">
              <span className="mr-2 bg-primary text-white p-1 rounded-sm text-xs relative -top-[3px] capitalize ">yêu thích</span>
              <div className="inline text-xl leading-[0.75rem]">{product.title}</div>
            </div>
            <div className="">
              <div className="flex gap-4">
                <div className="flex gap-2">
                  {product.rating}
                  <RatingStar starSize={20} starGap={10} ratingStar={product.rating} />
                </div>
                <div>Danh Gia</div>
                <div>{product.sold}</div>
                <div className="ml-auto">To cao</div>
              </div>
              <div className="bg-primaryBgColor">{product.price}</div>
              <section>
                <h3>Ma giam gia cua shop</h3>
              </section>
              <section>
                <h3>Van chuyen</h3>
              </section>
              <section>
                <h3>Mau sac</h3>
              </section>
              <section>
                <h3>kich thuoc</h3>
              </section>
              <section>
                <h3>So luong</h3>
              </section>
              <div>
                <button>Them vao gio hang</button>
                <button>Mua ngay</button>
              </div>
            </div>
            <div>Footer</div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Page;
