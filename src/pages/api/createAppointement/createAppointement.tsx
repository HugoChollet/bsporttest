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
  return {
    startDate: new Date(time.date_start),
    endDate: endDate,
    activity: !activityName.find(
      (item: any[]) => item[0] === time.meta_activity
    )
      ? "Searching"
      : activityName.find((item: any[]) => item[0] === time.meta_activity)[1],
    coach: !coachName.find((item: any[]) => item[0] === time.coach)
      ? "Searching"
      : coachName.find((item: any[]) => item[0] === time.coach)[1],
    establishment: !establishmentName.find(
      (item: any[]) => item[0] === time.establishment
    )
      ? "Searching"
      : establishmentName.find(
          (item: any[]) => item[0] === time.establishment
        )[1],
  };
};
