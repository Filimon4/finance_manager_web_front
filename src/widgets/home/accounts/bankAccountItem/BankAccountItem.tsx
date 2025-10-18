import { InfoCard } from "@/components/ui/card";
import { useAccountOverview } from "@/shared/api/account";

const AccountItem = ({ id, name }: { id: number; name: string }) => {
  const { data } = useAccountOverview(id);

  return (
    <InfoCard
      key={id}
      className="w-full flex flex-row justify-between items-center py-4 px-5 shadow-xl/10"
    >
      <span>{name}</span>
      <span>{data?.overview.totalProfit ?? 0}</span>
    </InfoCard>
  );
};

export default AccountItem;
