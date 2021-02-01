import { Event } from "../interfaces/Event";
export const listEvents = (timelineId: string) => {};
export const getEvent = (eventId: string) => {
  const event: Event = {
    id: "1",
    startYear: 2012,
    title: "TestTitle",
    description: "Hello",
  };
  return event;
};
