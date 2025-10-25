import { InfoCard } from "@/components/ui/card";
import { useCategoryOverview } from "@/shared/api/category/useCategoryOverview.query";
import CategorySettings from "../CategorySettings/CategorySettings";

const CategoryItem = ({ id, name }: { id: number; name: string }) => {
  const { data } = useCategoryOverview(id);

  return (
    <div className="flex items-center gap-2">
      <InfoCard
        key={id}
        className="w-full flex flex-row justify-between items-center py-4 px-5 shadow-xl/10"
      >
        <span>{name}</span>
        <span>{data?.overview.totalProfit ?? 0}</span>
      </InfoCard>
      <CategorySettings id={id} />
    </div>
  );
};

export default CategoryItem;
