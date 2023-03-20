export type Appointement = {
  startDate: string;
  endDate: string;
  title: string;
};

export type AgendaProps = {
  schedulerData: Array<Appointement>;
  currentDate: string;
};
