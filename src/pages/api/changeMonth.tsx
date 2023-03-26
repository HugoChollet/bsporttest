type changeMonthProps = {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
};

const MONTH_UNIX = 2078400000;

export const changeMonth = ({
  currentDate,
  startDate,
  endDate,
}: changeMonthProps) => {
  if (currentDate.getTime() - MONTH_UNIX <= startDate.getTime()) {
    startDate.setMonth(startDate.getMonth() - 1);
    endDate.setMonth(endDate.getMonth() - 1);
  } else if (currentDate.getTime() + MONTH_UNIX >= endDate.getMonth()) {
    endDate.setMonth(endDate.getMonth() + 1);
    startDate.setMonth(startDate.getMonth() + 1);
  }

  return (
    startDate.getUTCFullYear() +
    "-" +
    (startDate.getMonth() + 1) +
    "-" +
    startDate.getUTCDate() +
    "&max_date=" +
    endDate.getUTCFullYear() +
    "-" +
    (endDate.getMonth() + 1) +
    "-" +
    endDate.getUTCDate()
  );
};
