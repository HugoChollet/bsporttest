import * as React from "react";
import { Appointement } from "../Agenda/Agenda.type";
import { container, subtitle, title } from "./Tooltip.styles";

export const Tooltip = (model: { data: Appointement }) => {
  return (
    <div style={container}>
      <div style={title}>{model.data.activity}</div>
      <div style={subtitle}>
        {model.data.coach} at {model.data.establishment}
      </div>
    </div>
  );
};
