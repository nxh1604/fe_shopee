import Sidebar from "@/components/Sidebar";
import CardProduct from "@/app/(products-and-account)/products/components/CardProduct";
import PaginationFooter from "@/app/(products-and-account)/products/components/PaginationFooter";
import ProductsSortBar, { ProductsSortBarMobileWrapper } from "./components/ProductsSortBar";
import { SortbarPagination } from "./components/Pagination";
import CategoriesMobile from "@/components/CategoriesMobile";
import { getAllCategories, getAllProducts, getProductsByLimit } from "@/lib/data";
import Image from "next/image";

const ItemPerPage = 10;

export interface IPageSearchParams {
  page: number | string;
}

export interface ISortSearchParams {
  order?: "asc" | "desc";
  category?: string;
  sortBy: "pop" | "ctime" | "sales" | "price";
}

interface ISearchParams extends IPageSearchParams, ISortSearchParams {}

export default async function Page({ searchParams }: { searchParams: ISearchParams }) {
  const { page, order, category, sortBy } = searchParams;
  const productsData = await getAllProducts();
  const categoriesList = await getAllCategories();
  const currentPage = !page || Number(page) <= 1 ? 1 : Number(page);

  // filteredData
  const currentCategory = !category ? "all" : !categoriesList.filter((categoryItem) => categoryItem === category).length ? "all" : category;

  const filteredData = productsData.filter((product) => {
    if (currentCategory === "all") return true;
    return product.category === currentCategory;
  });

  // caculate MaxPage after filteredData
  const maxPage = Math.ceil(filteredData.length / ItemPerPage);

  // sortData
  const currentSortBy = !sortBy ? "pop" : sortBy;

  switch (currentSortBy) {
    case "price":
      {
        if (order === "asc") {
          filteredData.sort((a, b) => a.price - (a.price * a.discount) / 100 - (b.price - (b.price * b.discount) / 100));
        } else {
          filteredData.sort((a, b) => -(a.price - (a.price * a.discount) / 100) + (b.price - (b.price * b.discount) / 100));
        }
      }
      break;
    case "sales": {
      filteredData.sort((a, b) => {
        return b.soldPerMonth - a.soldPerMonth;
      });
      break;
    }
    case "ctime": {
      filteredData.sort((a, b) => {
        return a.createdAt.getTime() - b.createdAt.getTime();
      });
      break;
    }
    default:
      {
        filteredData.sort((a, b) => {
          return b.totalSold - a.totalSold;
        });
      }
      break;
  }

  // pagination
  const newProductsData = filteredData.filter((_, index) => {
    if (currentPage <= 1) return index + 1 <= ItemPerPage;
    if (currentPage >= maxPage) return index + 1 > (maxPage - 1) * ItemPerPage;
    else return index + 1 < ItemPerPage * currentPage && index + 1 >= ItemPerPage * (currentPage - 1);
  });

  return (
    <div className="m-and-t:[margin-top:calc(var(--header-mobile-height)_+_var(--products-mobile-sort-bar))] w-full overflow-hidden flex-1 bg-primaryBgColor flex items-stretch">
      <main id="products-page" className="py-8 m-and-t:p-0 min-h-full w-full">
        <ProductsSortBarMobileWrapper>
          <ProductsSortBar
            order={order}
            sortBy={sortBy}
            className="gridLayout items-stretch h-full justify-between flex gap-0 *:border-l-[1px] *:border-black/20 *:flex-1"
          />
        </ProductsSortBarMobileWrapper>
        {!categoriesList.length ? null : (
          <CategoriesMobile categoriesList={categoriesList} getCategory={currentCategory} className="hidden m-and-t:block" />
        )}
        {!newProductsData.length ? null : (
          <PaginationFooter scrollToElementId="products-page" className="hidden mobile:flex pb-4 pt-4" currentPage={currentPage} maxPage={maxPage} />
        )}

        <div className="gridLayout mx-auto min-h-full mobile:min-h-[200px] flex">
          <div className="flex gap-4 min-h-full flex-1">
            <Sidebar categoriesList={categoriesList} getCategory={currentCategory} className="self-start flex-1 m-and-t:hidden" />
            <div className="flex-[5] min-h-full">
              <div className="flex justify-between px-5 py-3 rounded items-center text-sm bg-secondaryBgColor m-and-t:hidden">
                <ProductsSortBar order={order} sortBy={currentSortBy} />
                <div className="flex gap-4 self-stretch">
                  <div className="self-center">
                    <span className="text-primary">{currentPage}</span>/<span>{maxPage}</span>
                  </div>
                  <SortbarPagination currentPage={currentPage} maxPage={maxPage} />
                </div>
              </div>
              {!newProductsData.length ? (
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={"/img/no-products-found.png"}
                    width={300}
                    height={300}
                    alt="no products found"
                    className="max-w-[300px] max-h-[300px] w-full h-auto  object-contain object-center"
                  />
                </div>
              ) : (
                <>
                  <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-3 gap-y-4 mobile:px-2 pt-4">
                    {newProductsData.map((product) => {
                      return <CardProduct key={product.id} {...product} sortBy={sortBy} />;
                    })}
                  </ul>
                  <PaginationFooter scrollToElementId="products-page" currentPage={currentPage} maxPage={maxPage} />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
