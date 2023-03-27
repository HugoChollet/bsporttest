import { createAppointement } from "./createAppointement";

const mockTime = {
  date_start: "2023-04-01T10:00:00Z",
  duration_minute: 60,
  meta_activity: "yoga",
  coach: "john_doe",
  establishment: "gym_abc",
  available: true,
};
const mockActivityName = [["yoga", "Yoga Class"]];
const mockCoachName = [["john_doe", "John Doe"]];
const mockEstablishmentName = [["gym_abc", "ABC Gym"]];

describe("createAppointement", () => {
  it("should create an appointment object with valid inputs", async () => {
    const input = {
      time: mockTime,
      activityName: mockActivityName,
      coachName: mockCoachName,
      establishmentName: mockEstablishmentName,
    };
    const expectedOutput = {
      startDate: new Date(mockTime.date_start),
      endDate: new Date("2023-04-01T11:00:00Z"),
      activity: "Yoga Class",
      coach: "John Doe",
      establishment: "ABC Gym",
      available: true,
    };

    const result = await createAppointement(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle missing activity name", async () => {
    const input = {
      time: {
        ...mockTime,
        meta_activity: "pilates",
      },
      activityName: mockActivityName,
      coachName: mockCoachName,
      establishmentName: mockEstablishmentName,
    };
    const expectedOutput = {
      startDate: new Date(mockTime.date_start),
      endDate: new Date("2023-04-01T11:00:00Z"),
      activity: "Searching",
      coach: "John Doe",
      establishment: "ABC Gym",
      available: true,
    };

    const result = await createAppointement(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle missing coach name", async () => {
    const input = {
      time: {
        ...mockTime,
        coach: "jane_doe",
      },
      activityName: mockActivityName,
      coachName: mockCoachName,
      establishmentName: mockEstablishmentName,
    };
    const expectedOutput = {
      startDate: new Date(mockTime.date_start),
      endDate: new Date("2023-04-01T11:00:00Z"),
      activity: "Yoga Class",
      coach: "Searching",
      establishment: "ABC Gym",
      available: true,
    };

    const result = await createAppointement(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle missing establishment name", async () => {
    const input = {
      time: {
        ...mockTime,
        establishment: "gym_xyz",
      },
      activityName: mockActivityName,
      coachName: mockCoachName,
      establishmentName: mockEstablishmentName,
    };
    const expectedOutput = {
      startDate: new Date(mockTime.date_start),
      endDate: new Date("2023-04-01T11:00:00Z"),
      activity: "Yoga Class",
      coach: "John Doe",
      establishment: "Searching",
      available: true,
    };

    const result = await createAppointement(input);

    expect(result).toEqual(expectedOutput);
  });
});
