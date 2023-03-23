import * as React from "react";
import { Appointement } from "../Agenda/agenda.type";
import { container, subtitle, title } from "./Tooltip.styles";

export const Tooltip = (model: { data: Appointement }) => {
  return (
    <div style={container}>
      <div style={title}>{model.data.title}</div>
      <div style={subtitle}>
        {model.data.coach} at {model.data.establishment}
      </div>
    </div>
  );
};
