import CreateAccountDialog from "@/components/dialogs/AddAccountDialog";
import { useAccounts } from "@/shared/api/account/useAccounts.query";
import AccountItem from "@/widgets/home/accounts/bankAccountItem/BankAccountItem";

const Accounts = () => {
  const { data } = useAccounts({ deleted: false });

  return (
    <>
      <p>Счета</p>
      <div className="w-full h-full flex flex-col gap-5">
        {data?.map((account) => (
          <AccountItem key={account.id} id={account.id} name={account.name} />
        ))}
        <div className="w-full py-[5px]" />
      </div>
      <CreateAccountDialog />
    </>
  );
};

export default Accounts;
