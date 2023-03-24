import { useEffect, useState } from "react";

import { Agenda } from "@/components/Agenda/Agenda";
import { getData } from "./api/getData";
import { Appointement } from "@/components/Agenda/Agenda.type";
import { changeMonth } from "./api/changeMonth";
import { createAppointement } from "./api/createAppointement";

const GET_OFFER_API =
  "https://api.staging.bsport.io/api/v1/offer/?company=6&min_date=";

export default function AgendaScreen() {
  const [agendaData, setAgendaData] = useState<Array<Appointement>>();
  const [currentDate, setCurrentDate] = useState<Date>(
    new Date("Mon Apr 01 2019 00:00:00")
  );
  const [startDate, setStartDate] = useState<Date>(
    new Date("Fri Mar 15 2019 00:00:00")
  );
  const [endDate, setEndDate] = useState<Date>(
    new Date("Wed May 15 2019 00:00:00")
  );
  const [offer, setOffer] = useState<Promise<any>>();

  useEffect(() => {
    if (offer) {
      offer.then(async (data) => {
        // console.log("oofer", data);

        setAgendaData(
          await Promise.all(
            data.results.map(async (time: any) => {
              console.log("before ::", time);

              return await createAppointement(time);
            })
          )
        );
      });
    }
  }, [offer]);

  useEffect(() => {
    setOffer(
      getData(GET_OFFER_API + changeMonth({ currentDate, startDate, endDate }))
    );
  }, [currentDate]);

  return (
    <Agenda
      schedulerData={agendaData || []}
      currentDate={currentDate}
      changeDate={setCurrentDate}
    />
  );
}
