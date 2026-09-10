import { Tabs } from "radix-ui";
import { Link } from "react-router-dom";
import { categorySlugIconMap } from "~/pages/PageConfig";

function CategoryHeader({ categories }) {
  return (
    <Tabs.Root className="bg-white">
      <Tabs.List className="flex gap-[5px]">
        {categories.content.map((category) => {
          const CategoryIcon = categorySlugIconMap[category.slug];
          return (
            <Tabs.Trigger
              key={category.slug}
              value={category.slug}
              className="flex items-center text-sm text-[#495057] font-semibold leading-[14px] px-5 py-2.5 rounded-[4px]
                        data-[state=active]:bg-[#e7f5ff] data-[state=active]:text-[#228be6] hover:bg-[#f8f9fa]"
            >
              <CategoryIcon size={14} className="mr-2.5" />
              {category.name}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {categories.content.map((category) => {
        const CategoryIcon = categorySlugIconMap[category.slug];
        return (
          <Tabs.Content
            key={category.slug}
            value={category.slug}
            className="pt-4"
          >
            <div className="flex flex-col items-stretch">
              <div className="flex flex-wrap items-center justify-start gap-4">
                <div className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-[4px] text-[#228be6] bg-[#e7f5ff]">
                  <CategoryIcon size={24} />
                </div>
                <Link className="text-[28px] text-[#228be6] font-medium hover:underline">
                  {category.name}
                </Link>
              </div>
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}

export default CategoryHeader;
