import { InfoCard } from "@/components/ui/card";
import AccountSettings from "@/widgets/home/accounts/AccountSettings/AccountSettings";

const AccountItem = ({
  id,
  name,
  totalProfit,
}: {
  id: number;
  name: string;
  totalProfit: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <InfoCard
        key={id}
        className="w-full flex flex-row justify-between items-center py-4 px-5 shadow-xl/10"
      >
        <span>{name}</span>
        <span>{totalProfit ?? 0}</span>
      </InfoCard>
      <AccountSettings id={id} />
    </div>
  );
};

export default AccountItem;
