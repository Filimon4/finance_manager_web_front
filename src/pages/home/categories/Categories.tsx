import { useCategories } from "@/shared/api/categories";
import CategoryItem from "@/widgets/categories/categoryItem/CategoryItem";

const Categories = () => {
  const { data } = useCategories({ deleted: false });

  return (
    <>
      <p>Категории</p>
      <div className="w-full h-full flex flex-col gap-5">
        {data?.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
          />
        ))}
        <div className="w-full py-[5px]" />
      </div>
    </>
  );
};

export default Categories;
