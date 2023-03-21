import { useEffect, useState } from "react";

import { Agenda } from "@/components/Agenda/agenda";
import { getData } from "./api/getData";
import { AgendaProps } from "@/components/Agenda/agenda.type";

const GET_OFFER_API =
  "https://api.staging.bsport.io/api/v1/offer/?min_date=2019-03-01&max_date=2019-03-31&company=6";
const currentDate = "2019-03-30";

export default function AgendaScreen() {
  const [offer, setOffer] = useState(getData(GET_OFFER_API));
  const [agendaData, setAgendaData] = useState<AgendaProps["schedulerData"]>();

  useEffect(() => {
    offer.then(async (data) => {
      setAgendaData(
        await Promise.all(
          data.results.map(async (time) => {
            const activityName = getData(
              "https://api.staging.bsport.io/api/v1/meta-activity/?id__in=" +
                time.activity +
                "&company=6"
            ).then((response) => response.results[0].name);
            const endDate = new Date(time.date_start);

            endDate.setUTCMinutes(time.duration_minute);

            return {
              startDate: new Date(time.date_start),
              endDate: endDate,
              title: await activityName,
            };
          })
        )
      );

      console.log(agendaData);
    });
  }, [offer]);

  return <Agenda schedulerData={agendaData || []} currentDate={currentDate} />;
}
