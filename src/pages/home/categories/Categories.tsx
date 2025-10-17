import { InfoCard } from "@/components/ui/card";
import { useCategories } from "@/shared/api/categories";

const Categories = () => {
  const { data } = useCategories({ deleted: false });

  return (
    <>
      <p>Категории</p>
      <div className="w-full h-full flex flex-col gap-5">
        {data?.map((category) => (
          <InfoCard
            key={category.id}
            className="w-full flex flex-row justify-between items-center py-4 px-5 shadow-xl/10"
          >
            <span>{category.name}</span>
            <span>{0}</span>
          </InfoCard>
        ))}
        <div className="w-full py-[5px]" />
      </div>
    </>
  );
};

export default Categories;
