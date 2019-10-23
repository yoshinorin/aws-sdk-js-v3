import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
} from "../models";
import {
  startStreamTranscriptionAwsJson1_1Serialize,
  startStreamTranscriptionAwsJson1_1Deserialize
} from "./AwsJson1_1";
import { SerdeContext } from "@aws-sdk/types";

export function startStreamTranscriptionSerializer(
  input: StartStreamTranscriptionRequest,
  protocol: string,
  context: SerdeContext
): HttpRequest {
  switch (protocol) {
    case "aws.json-1.1":
      return startStreamTranscriptionAwsJson1_1Serialize(input, context);
    default:
      throw new Error("Unknown protocol, use aws.json-1.1");
  }
}

export async function startStreamTranscriptionDeserializer(
  output: HttpResponse,
  protocol: string,
  context: SerdeContext
): Promise<StartStreamTranscriptionResponse> {
  switch (protocol) {
    case "aws.json-1.1":
      return startStreamTranscriptionAwsJson1_1Deserialize(output, context);
    default:
      throw new Error("Unknown protocol, use aws.json-1.1");
  }
}
