type createAppointementProps = {
  time: any;
  activityName: Array<any>;
  coachName: Array<any>;
  establishmentName: Array<any>;
};

export const createAppointement = async ({
  time,
  activityName,
  coachName,
  establishmentName,
}: createAppointementProps) => {
  const endDate = new Date(time.date_start);

  endDate.setUTCMinutes(time.duration_minute);
  if (
    !activityName.find((item: any[]) => item[0] === time.activity) ||
    !coachName.find((item: any[]) => item[0] === time.coach) ||
    !establishmentName.find((item: any[]) => item[0] === time.establishment)
  ) {
    return {
      startDate: new Date(time.date_start),
      endDate: endDate,
      activity: "Searching",
      coach: "Searching",
      establishment: "Searching",
    };
  }

  return {
    startDate: new Date(time.date_start),
    endDate: endDate,
    activity: activityName.find((item: any[]) => item[0] === time.activity)[1],
    coach: coachName.find((item: any[]) => item[0] === time.coach)[1],
    establishment: establishmentName.find(
      (item: any[]) => item[0] === time.establishment
    )[1],
  };
};
