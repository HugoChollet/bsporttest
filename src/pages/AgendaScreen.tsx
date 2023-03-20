import { useState } from "react";

import { Agenda } from "@/components/Agenda/agenda";
import { getData } from "./api/getData";

const GETAPI =
  "https://api.staging.bsport.io/api/v1/offer/?min_date=2019-03-17&max_date=2019-03-31&company=6";
const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T12:15",
    endDate: "2018-11-01T13:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

export default function AgendaScreen() {
  const [offer, setOffer] = useState(getData(GETAPI));

  offer.then((data) => {
    console.log(data);
  });
  return <Agenda schedulerData={schedulerData} currentDate={currentDate} />;
}
