import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { AgendaProps } from "./agenda.type";

export const Agenda = ({ schedulerData, currentDate }: AgendaProps) => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <WeekView startDayHour={9} endDayHour={14} />
      <Appointments />
    </Scheduler>
  </Paper>
);
