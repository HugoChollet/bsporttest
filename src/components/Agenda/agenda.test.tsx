import * as React from "react";
import renderer from "react-test-renderer";
import { Agenda } from "./Agenda";

const mockDate = "2018-11-01";
const mockData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

describe("Button Component", () => {
  it("should render the label", () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(
      <Agenda schedulerData={mockData} currentDate={mockDate} />
    );
    component.find("Meeting");
  });
});
