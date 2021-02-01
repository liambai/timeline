import express from "express";
// import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import gql from "graphql-tag";
import * as dotenv from "dotenv";
import { buildASTSchema } from "graphql";
import * as EventService from "./services/EventService";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10) || 4000;

const app = express();
// app.use(cors());

const schema = buildASTSchema(gql`
  type Query {
    event(id: ID): Event
    events(timelineId: ID): [Event]
  }
  type Event {
    id: ID!
    startYear: Int!
    endYear: Int
    title: String!
    description: String
  }
  type EventLink {
    from: ID!
    to: ID!
  }
`);

const rootValue = {
  events: EventService.listEvents,
  event: EventService.getEvent,
};

app.use("/graphql", graphqlHTTP({ schema, rootValue }));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT}`);
});
