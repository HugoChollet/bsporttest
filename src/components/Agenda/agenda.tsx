import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  ViewSwitcher,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";
import { AgendaProps } from "./agenda.type";

export const Agenda = ({ schedulerData, currentDate }: AgendaProps) => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} defaultCurrentViewName="Week" />
      <DayView startDayHour={0} endDayHour={24} />
      <WeekView startDayHour={10} endDayHour={24} />
      <MonthView />
      <Appointments />
      <Toolbar />
      <ViewSwitcher />
    </Scheduler>
  </Paper>
);
