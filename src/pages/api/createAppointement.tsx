import { getData } from "./getData";

const GET_ACTIVITY_API =
  "https://api.staging.bsport.io/api/v1/meta-activity/?company=6&id__in=";
const GET_COACH_API =
  "https://api.staging.bsport.io/api/v1/coach/?company=6&id__in=";
const GET_ESTABLISHEMENT_API =
  "https://api.staging.bsport.io/api/v1/establishment/?company=6&id__in=";

export const createAppointement = async (time: any) => {
  console.log("time ::", time);

  const endDate = new Date(time.date_start);
  const activityName = getData(GET_ACTIVITY_API + time.activity).then(
    (response) => response.results[0].name
  );
  const coachName = getData(GET_COACH_API + time.coach).then(
    (response) => response.results[0].user.name
  );
  const establishmentName = getData(
    GET_ESTABLISHEMENT_API + time.establishment
  ).then((response) => response.results[0].title);

  endDate.setUTCMinutes(time.duration_minute);
  return {
    startDate: new Date(time.date_start),
    endDate: endDate,
    title: await activityName,
    coach: await coachName,
    establishment: await establishmentName,
  };
};
