import CreateAccountDialog from "@/components/dialogs/AddAccountDialog";
import { useAccounts } from "@/shared/api/account/useAccounts.query";
import AccountItem from "@/widgets/home/accounts/Accountitem/Accountitem";

const Accounts = () => {
  const { data } = useAccounts();
  const sortedData = data
    ?.slice()
    .sort((a, b) => (a.deleted === b.deleted ? 0 : a.deleted ? 1 : -1))
    .sort((a, b) => (a.main === b.main ? 0 : a.main ? -1 : 1));

  return (
    <>
      <p>Счета</p>
      <div className="w-full h-full flex flex-col gap-5 overflow-auto">
        {sortedData?.map((account, i) => (
          <AccountItem
            key={account.id}
            totalProfit={account.totalProfit}
            id={account.id}
            name={account.name}
            main={i === 0}
            deleted={account.deleted}
          />
        ))}
        <div className="w-full py-[5px]" />
      </div>
      <CreateAccountDialog />
    </>
  );
};

export default Accounts;
