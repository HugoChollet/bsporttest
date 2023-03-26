type changeMonthProps = {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
};

const MONTH_UNIX = 2678400000;

export const changeMonth = ({
  currentDate,
  startDate,
  endDate,
}: changeMonthProps) => {
  startDate.setTime(currentDate.getTime() - MONTH_UNIX);
  endDate.setTime(currentDate.getTime() + MONTH_UNIX);

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
