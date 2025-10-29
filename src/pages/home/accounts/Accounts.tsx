import CreateAccountDialog from "@/components/dialogs/AddAccountDialog";
import { useAccounts } from "@/shared/api/account/useAccounts.query";
import AccountItem from "@/widgets/home/accounts/Accountitem/Accountitem";

const Accounts = () => {
  const { data } = useAccounts({ deleted: false });
  const sortedData = data
    ?.slice()
    .sort((a, b) => (a.main === b.main ? 0 : a.main ? -1 : 1));

  return (
    <>
      <p>Счета</p>
      <div className="w-full h-full flex flex-col gap-5 overflow-auto">
        {sortedData?.map((account) => (
          // TODO: Можно сделать оптимизацию, не делаю ещё запрос на бэк
          <AccountItem key={account.id} id={account.id} name={account.name} />
        ))}
        <div className="w-full py-[5px]" />
      </div>
      <CreateAccountDialog />
    </>
  );
};

export default Accounts;
