import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { Encoder, Decoder } from "@aws-sdk/types";
import { Readable } from "stream";
//TODO move to @aws-sdk/types
type Event = { type: string };

export class EventStreamMarshaller {
  private readonly eventMarshaller: EventMarshaller;
  constructor(toUtf8: Encoder, fromUtf8: Decoder) {
    this.eventMarshaller = new EventMarshaller(toUtf8, fromUtf8);
  }
  deserialize<T extends Event>(
    body: Readable,
    deserializers: { [key in T["type"]]: (output: any) => Promise<T> }
  ): AsyncIterable<T> {
    //frame the body
    //call EventMarshaller to deserialize each event
    //return an async generator
    return gen;
  }
  serializer(input: AsyncIterable<any>, serializer: any) {
    //return Readable
  }
}

const gen: AsyncIterable<any> = {
  [Symbol.asyncIterator]: async function*() {
    yield "good";
  }
};
