import Sidebar from "@/components/Sidebar";
import CardProduct from "@/app/(products-and-account)/products/components/CardProduct";
import productsData from "@/lib/data/productsData";
import PaginationFooter from "@/app/(products-and-account)/products/components/PaginationFooter";
import ProductsSortBar from "./components/ProductsSortBar";
import { SortbarPagination } from "./components/Pagination";

const ItemPerPage = 20;

export interface IPageSearchParams {
  page: number | string;
}

export interface ICategorySearchParams {
  category?: number;
}

export interface ISortSearchParams {
  order?: "asc" | "desc";
  category?: number;
  sortBy: "pop" | "ctime" | "sales" | "price";
}

interface ISearchParams extends IPageSearchParams, ISortSearchParams, ICategorySearchParams {}

export default function Page({ searchParams }: { searchParams: ISearchParams }) {
  const { page, order, category, sortBy } = searchParams;
  const currentPage = !page || Number(page) <= 1 ? 1 : Number(page);
  const currentCategory = !category || Number(category) <= 1 ? 1 : Number(category);
  const currentSortBy = !sortBy ? "pop" : sortBy;
  const maxPage = Math.ceil(productsData.length / ItemPerPage);

  const newProductsData = productsData.filter((_, index) => {
    if (currentPage <= 1) return index + 1 <= ItemPerPage;
    if (currentPage >= maxPage) return index + 1 > (maxPage - 1) * ItemPerPage;
    else return index + 1 < ItemPerPage * currentPage && index + 1 >= ItemPerPage * (currentPage - 1);
  });

  return (
    <>
      <div className="shadow bg-white top-[var(--header-mobile-height)] [height:var(--products-mobile-sort-bar)] m-and-t:fixed z-10 m-and-t:fixed-all-width w-full hidden m-and-t:block">
        <ProductsSortBar
          order={order}
          sortBy={sortBy}
          className="gridLayout items-stretch h-full justify-between flex gap-0 *:border-l-[1px] *:border-black/20 *:flex-1"
        />
      </div>
      <div className="gridLayout mx-auto scroll-smooth">
        <div className="row-12px">
          <Sidebar category={currentCategory} className="self-start col-12px m-and-t:hidden" />
          <div className="flex-1 col-12px">
            <div className="flex justify-between px-5 py-3 rounded items-center text-sm bg-secondaryBgColor m-and-t:hidden">
              <ProductsSortBar order={order} sortBy={currentSortBy} />
              <div className="flex gap-4 self-stretch">
                <div className="self-center">
                  <span className="text-primary">{currentPage}</span>/<span>{maxPage}</span>
                </div>
                <SortbarPagination currentPage={currentPage} maxPage={maxPage} />
              </div>
            </div>
            <ul className="row-5px">
              {newProductsData.map((product) => {
                return <CardProduct key={product.id} {...product} />;
              })}
            </ul>
            <PaginationFooter currentPage={currentPage} maxPage={maxPage} />
          </div>
        </div>
      </div>
    </>
  );
}
