type changeMonthProps = {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
};

export const changeMonth = ({
  currentDate,
  startDate,
  endDate,
}: changeMonthProps) => {
  console.log(currentDate);

  if (currentDate.getMonth() <= startDate.getMonth()) {
    console.log("going down");

    startDate.setMonth(startDate.getMonth() - 1);
    endDate.setMonth(endDate.getMonth() - 1);
  }
  if (currentDate.getMonth() >= endDate.getMonth()) {
    console.log("going up");

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
