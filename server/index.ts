import express from "express";
// import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import gql from "graphql-tag";
import { buildASTSchema } from "graphql";
import * as EventService from "./services/EventService";

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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT}`);
});
