import { EventModel } from "./../database/events/events.model";
import { IEvent } from "../database/events/events.types";
import { connect } from "../database/database";
export const listEvents = (timelineId: string) => {};

interface GetEventParams {
  id: string;
}
export const getEvent = async ({ id }: GetEventParams) => {
  await connect();
  console.log(id);
  const event: IEvent = await EventModel.findById(id);
  return event;
};
