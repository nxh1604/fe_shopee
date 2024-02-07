import Sidebar from "@/components/Sidebar";
import CardProduct from "@/app/(products-and-account)/products/components/CardProduct";
import { productsData, categoriesList } from "@/lib/data/productsData";
import PaginationFooter from "@/app/(products-and-account)/products/components/PaginationFooter";
import ProductsSortBar, { ProductsSortBarMobileWrapper } from "./components/ProductsSortBar";
import { SortbarPagination } from "./components/Pagination";
import CategoriesMobile from "@/components/CategoriesMobile";
import { ICategory } from "@/lib/definitions";

const ItemPerPage = 20;

export interface IPageSearchParams {
  page: number | string;
}

export interface ISortSearchParams {
  order?: "asc" | "desc";
  category?: ICategory["category"];
  sortBy: "pop" | "ctime" | "sales" | "price";
}

interface ISearchParams extends IPageSearchParams, ISortSearchParams {}

export default function Page({ searchParams }: { searchParams: ISearchParams }) {
  const { page, order, category, sortBy } = searchParams;

  const currentPage = !page || Number(page) <= 1 ? 1 : Number(page);

  // filteredData
  const currentCategory = !category || !categoriesList.filter((categoryItem) => categoryItem.category === category).length ? "all" : category;

  const filteredData = productsData.filter((product) => {
    if (currentCategory === "all") return true;
    return product.categories.includes(currentCategory);
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
    <>
      <ProductsSortBarMobileWrapper>
        <ProductsSortBar
          order={order}
          sortBy={sortBy}
          className="gridLayout items-stretch h-full justify-between flex gap-0 *:border-l-[1px] *:border-black/20 *:flex-1"
        />
      </ProductsSortBarMobileWrapper>
      <CategoriesMobile categoriesList={categoriesList} getCategory={currentCategory} className="hidden m-and-t:block" />

      <div className="gridLayout mx-auto scroll-smooth">
        <div className="row-12px">
          <Sidebar categoriesList={categoriesList} getCategory={currentCategory} className="self-start col-12px m-and-t:hidden" />
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
                return <CardProduct key={product.id} {...product} sortBy={sortBy} />;
              })}
            </ul>
            <PaginationFooter currentPage={currentPage} maxPage={maxPage} />
          </div>
        </div>
      </div>
    </>
  );
}

export { productsData };
