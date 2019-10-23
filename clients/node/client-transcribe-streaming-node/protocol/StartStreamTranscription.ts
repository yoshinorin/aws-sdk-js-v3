import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
} from "../models";
import {
  startStreamTranscriptionAwsJson1_1Serialize,
  startStreamTranscriptionAwsJson1_1Deserialize
} from "./AwsJson1_1";
import { SerializerUtils, DeserializerUtils } from "@aws-sdk/types";

export function startStreamTranscriptionSerializer(
  input: StartStreamTranscriptionRequest,
  protocol: string,
  utils: SerializerUtils
): HttpRequest {
  switch (protocol) {
    case "aws.json-1.1":
      return startStreamTranscriptionAwsJson1_1Serialize(input, utils);
    default:
      throw new Error("Unknown protocol, use aws.json-1.1");
  }
}

export async function startStreamTranscriptionDeserializer(
  output: HttpResponse,
  protocol: string,
  utils: DeserializerUtils
): Promise<StartStreamTranscriptionResponse> {
  switch (protocol) {
    case "aws.json-1.1":
      return startStreamTranscriptionAwsJson1_1Deserialize(output, utils);
    default:
      throw new Error("Unknown protocol, use aws.json-1.1");
  }
}
