import { Document, Model } from "mongoose";

export interface IEvent {
  startYear: number;
  endYear?: number;
  title: string;
  description?: string;
}

export interface IEventDocument extends IEvent, Document {}
export interface IEventModel extends Model<IEventDocument> {}
