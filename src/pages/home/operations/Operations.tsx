import { useMemo, useState } from "react";
import AddOperationDialog from "@/components/dialogs/AddOperationDialog";
import { useOperations } from "@/shared/api/operations";
import OperationItem from "@/widgets/home/operations/OperationItem/OperationItem";
import moment from "moment";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "moment/dist/locale/ru";

import arrowLeft from "/icons/left_arrow.svg";
import arrowRight from "/icons/right_arrow.svg";
import { Button } from "@/components/ui";

const Operations = () => {
  const [selectedMonth, setSelectedMonth] = useState(moment());
  const currentMonth = moment();

  const canGoForward = useMemo(
    () => selectedMonth.isBefore(currentMonth, "month"),
    [currentMonth, selectedMonth]
  );

  const goToPreviousMonth = () => {
    setSelectedMonth(selectedMonth.clone().subtract(1, "month"));
  };

  const goToNextMonth = () => {
    const nextMonth = selectedMonth.clone().add(1, "month");
    if (nextMonth.isSameOrBefore(currentMonth, "month")) {
      setSelectedMonth(nextMonth);
    }
  };

  const { data } = useOperations({
    fromDate: selectedMonth.clone().utc().startOf("month").format(),
    toDate: selectedMonth.clone().utc().endOf("month").format(),
    dateOrder: "desc",
  });

  return (
    <>
      <p>Операции</p>
      <div className="grid grid-cols-3 gap-2 w-full place-items-center">
        <div />
        <div className="flex items-center justify-center">
          <Button
            variant={"ghost"}
            onClick={goToPreviousMonth}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src={arrowLeft} alt="Предыдущий месяц" className="h-[15px]" />
          </Button>
          <span className="text-center font-medium min-w-[120px]">
            {selectedMonth.locale("ru").format("MMMM YYYY")}
          </span>
          <Button
            variant={"ghost"}
            onClick={goToNextMonth}
            disabled={!canGoForward}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src={arrowRight} alt="Следующий месяц" className="h-[15px]" />
          </Button>
        </div>
        <div />
      </div>
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
