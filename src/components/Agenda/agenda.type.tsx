export type Appointement = {
  startDate: string;
  endDate: string;
  title: string;
  coach: string;
  establishment: string;
};

export type AgendaProps = {
  schedulerData: Array<Appointement>;
  currentDate: string;
};
