import { Agenda } from "@/components/Agenda/Agenda.component";
import { useEffect, useState } from "react";
import { createAppointement } from "../../pages/api/createAppointement/createAppointement";
import { getData } from "../../pages/api/getData/getData";
import { Appointement } from "../Agenda/Agenda.type";

const GET_ACTIVITY_API =
  "https://api.staging.bsport.io/api/v1/meta-activity/?company=6&id__in=";
const GET_COACH_API =
  "https://api.staging.bsport.io/api/v1/coach/?company=6&id__in=";
const GET_ESTABLISHEMENT_API =
  "https://api.staging.bsport.io/api/v1/establishment/?company=6&id__in=";

type AppointementListProps = {
  offer: Array<any>;
  activityId: Array<number>;
  coachId: Array<number>;
  establishmentId: Array<number>;
  currentDate: Date;
  changeDate: any;
};

export const AppointementList = ({
  offer,
  activityId,
  coachId,
  establishmentId,
  currentDate,
  changeDate,
}: AppointementListProps) => {
  const [activityName, setAtivityName] = useState<Array<any>>();
  const [coachName, setCoachName] = useState<Array<any>>();
  const [establishmentName, setEstablishmentName] = useState<Array<any>>();

  const [schedulerData, setSchedulerData] = useState<Array<Appointement>>();

  useEffect(() => {
    const fetchAppointementContent = async () => {
      setAtivityName(
        await getData(GET_ACTIVITY_API + activityId).then((response) =>
          response.results.map((item: any) => [item.id, item.name])
        )
      );
      setCoachName(
        await getData(GET_COACH_API + coachId).then((response) =>
          response.results.map((item: any) => [item.id, item.user.name])
        )
      );
      setEstablishmentName(
        await getData(GET_ESTABLISHEMENT_API + establishmentId).then(
          (response) =>
            response.results.map((item: any) => [item.id, item.title])
        )
      );
    };
    fetchAppointementContent();
  }, [activityId, coachId, establishmentId]);

  useEffect(() => {
    if (!activityName || !coachName || !establishmentName) return;
    Promise.all(
      offer.map((time: any) => {
        return createAppointement({
          time: time,
          activityName: activityName,
          coachName: coachName,
          establishmentName: establishmentName,
        });
      })
    ).then((data) => setSchedulerData(data));
  }, [activityName, coachName, establishmentName]);

  return (
    <div>
      {schedulerData ? (
        <Agenda
          schedulerData={schedulerData}
          currentDate={currentDate}
          changeDate={changeDate}
        />
      ) : (
        <div>Nope</div>
      )}
    </div>
  );
};
