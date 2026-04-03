import { Link } from "react-router-dom";
import { List } from "tabler-icons-react";
import Button from "~/components/common/Button";
import { useGetAllCategories } from "~/hooks/client/use-category-api";
import { categorySlugIconMap } from "~/pages/PageConfig";

function ClientHomeFeaturedCategories() {
  const { data: categories } = useGetAllCategories();
  console.log(222);

  if (!categories) return null;

  return (
    <div className="flex flex-col items-stretch gap-4">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-[26px] text-[#f76707] leading-[1.35] font-bold">
          Danh mục nổi bật
        </h2>
        <Button
          size="sm"
          icon={<List size={16} />}
          to={"/all-categories"}
          className="bg-soft text-primary hover:bg-[#d0ebffa6]"
        >
          Xem tất cả
        </Button>
      </div>

      <div className="grid grid-cols-4 m-[-8px]">
        {categories.content.map((category, index) => {
          const CategoryIcon = categorySlugIconMap[category.slug];
          return (
            <div key={index} className="p-2 flex-grow-0">
              <Link
                to={`/category/${category.slug}`}
                className="block text-c-black rounded-lg bg-white p-5 
                    shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
              >
                <div className="flex flex-wrap items-center justify-start gap-4">
                  <CategoryIcon size={50} strokeWidth={1} />
                  <span className="leading-[1.55]">{category.name}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClientHomeFeaturedCategories;
