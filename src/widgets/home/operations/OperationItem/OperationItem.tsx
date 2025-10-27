import { InfoCard } from "@/components/ui/card";
import OperationSettings from "../OperationSettings/OperationSettings";

const OperationItem = ({
  id,
  name,
  amount,
}: {
  id: number;
  name: string;
  amount: number;
}) => {
  return (
    <div className="flex items-center gap-2 max-h-[60px]">
      <InfoCard className="w-full flex flex-row justify-between items-center py-4 px-5 shadow-xl/10">
        <span>{name}</span>
        <span>{amount}</span>
      </InfoCard>
      <OperationSettings id={id} />
    </div>
  );
};

export default OperationItem;
