import { useEffect, useState } from "react";

import { Agenda } from "@/components/Agenda/agenda";
import { getData } from "./api/getData";
import { AgendaProps } from "@/components/Agenda/agenda.type";

const GETAPI =
  "https://api.staging.bsport.io/api/v1/offer/?min_date=2019-03-01&max_date=2019-03-31&company=6";
const currentDate = "2019-03-30";

export default function AgendaScreen() {
  const [offer, setOffer] = useState(getData(GETAPI));
  const [agendaData, setAgendaData] = useState<AgendaProps["schedulerData"]>();

  useEffect(() => {
    offer.then((data) => {
      setAgendaData(
        data.results.map((time) => {
          const endDate = new Date(time.date_start);
          endDate.setUTCMinutes(time.duration_minute);

          return {
            startDate: time.date_start,
            endDate: endDate,
            title: "Appointement",
          };
        })
      );
    });
  }, [offer]);

  return <Agenda schedulerData={agendaData || []} currentDate={currentDate} />;
}
