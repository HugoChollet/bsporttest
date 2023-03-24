import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  ViewSwitcher,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Appointement } from "./Agenda.type";
import { Tooltip } from "../Tooltip/Tooltip.component";

type AgendaProps = {
  schedulerData: Array<Appointement>;
  currentDate: Date;
  changeDate: () => void;
};

export const Agenda = ({
  schedulerData,
  currentDate,
  changeDate,
}: AgendaProps) => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState
        defaultCurrentDate={currentDate}
        defaultCurrentViewName="Week"
        onCurrentDateChange={changeDate}
      />
      <DayView startDayHour={0} endDayHour={24} />
      <WeekView startDayHour={10} endDayHour={24} />
      <MonthView />
      <Appointments appointmentContentComponent={Tooltip} />
      <AppointmentTooltip showCloseButton showOpenButton />
      <Toolbar />
      <ViewSwitcher />
      <DateNavigator />
    </Scheduler>
  </Paper>
);
