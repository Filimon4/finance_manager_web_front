import AddOperationDialog from "@/components/dialogs/AddOperationDialog";
import { useOperations } from "@/shared/api/operations";
import OperationItem from "@/widgets/home/operations/OperationItem/OperationItem";
import moment from "moment";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "moment/dist/locale/ru";

const Operations = () => {
  const { data } = useOperations({
    fromDate: moment().startOf("month").format(),
    dateOrder: "desc",
  });

  return (
    <>
      <p>Операции</p>
      <div className="w-full h-full flex flex-col gap-5 overflow-auto">
        {data?.map((operation, index) => {
          const currentDate = moment(operation.created_at).format("YYYY-MM-DD");
          const prevDate =
            index > 0
              ? moment(data[index - 1].created_at).format("YYYY-MM-DD")
              : null;
          const showDateHeader = currentDate !== prevDate;

          return (
            <div key={operation.id}>
              {showDateHeader && (
                <div className="text-sm pb-3">
                  {moment(operation.created_at).locale("ru").format("D MMMM")}
                </div>
              )}

              <OperationItem
                id={operation.id}
                name={operation.name}
                amount={Number(operation.amount)}
                type={operation.type}
              />
            </div>
          );
        })}
        <div className="w-full py-[5px]" />
      </div>
      <AddOperationDialog />
    </>
  );
};

export default Operations;
