import { InfoCard } from "@/components/ui/card";
import { cn } from "@/lib";
import AccountSettings from "@/widgets/home/accounts/AccountSettings/AccountSettings";

const AccountItem = ({
  id,
  name,
  totalProfit,
  main,
  deleted,
}: {
  id: number;
  name: string;
  totalProfit: number;
  main: boolean;
  deleted: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <InfoCard
        key={id}
        className={cn(
          "w-full flex flex-row justify-between items-center py-4 px-5 shadow-xl/10",
          main &&
            "bg-[linear-gradient(to_right,rgba(147,51,234,0.5)_10%,white_40%)]",
          deleted && "text-black/50"
        )}
      >
        <span>{name}</span>
        <span>{totalProfit ?? 0}</span>
      </InfoCard>
      <AccountSettings id={id} />
    </div>
  );
};

export default AccountItem;
