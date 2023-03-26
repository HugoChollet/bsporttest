import { useEffect, useState } from "react";

import { getData } from "./api/getData";
import { changeMonth } from "./api/changeMonth";
import { AppointementList } from "@/components/AppointementList/AppointementList.component";

const GET_OFFER_API =
  "https://api.staging.bsport.io/api/v1/offer/?company=6&min_date=";

export default function AgendaScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate] = useState(new Date());
  const [endDate] = useState(new Date());
  const [offer, setOffer] = useState<any>();
  const [contentsId, setContentsId] = useState<Array<any>>();

  const noDuplicate = (array: Array<number>) => {
    return array.filter((element: number, index: number) => {
      return array.indexOf(element) === index;
    });
  };

  useEffect(() => {
    getData(
      GET_OFFER_API + changeMonth({ currentDate, startDate, endDate })
    ).then(async (data) => {
      setContentsId(
        await Promise.all(
          data.results.map((time: any) => {
            return {
              activityId: time.meta_activity,
              coachId: time.coach,
              establishmentId: time.establishment,
            };
          })
        )
      );
      setOffer(data);
    });
  }, [currentDate]);

  return (
    <div>
      {offer && contentsId ? (
        <AppointementList
          offer={offer.results}
          activityId={noDuplicate(contentsId.map((data) => data.activityId))}
          coachId={noDuplicate(contentsId.map((data) => data.coachId))}
          establishmentId={noDuplicate(
            contentsId.map((data) => data.establishmentId)
          )}
          currentDate={currentDate}
          changeDate={setCurrentDate}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
