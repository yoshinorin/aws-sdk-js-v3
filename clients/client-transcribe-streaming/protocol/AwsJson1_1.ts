import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse,
  AudioEvent,
  TranscriptEvent
} from "../models";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, HeaderBag, ResponseMetadata } from "@aws-sdk/types";
// TODO move to SerdeContext
import { EventStreamMarshaller } from "@aws-sdk/util-eventstream-node";
//TODO move to @aws-sdk/types
import { Message } from "@aws-sdk/eventstream-marshaller";

export function startStreamTranscriptionAwsJson1_1Serialize(
  input: StartStreamTranscriptionRequest,
  context: SerdeContext
): HttpRequest {
  const eventBuilder = new EventStreamMarshaller(
    context.utf8Encoder,
    context.utf8Decoder
  );

  let headers: HeaderBag = {
    "Content-Type": "application/json"
  };

  if (input.MediaEncoding !== undefined) {
    headers["x-amzn-transcribe-media-encoding"] = input.MediaEncoding;
  }

  if (input.VocabularyName !== undefined) {
    headers["x-amzn-transcribe-vocabulary-name"] = input.VocabularyName;
  }

  if (input.SessionId !== undefined) {
    headers["x-amzn-transcribe-session-id"] = input.SessionId;
  }

  if (input.LanguageCode !== undefined) {
    headers["x-amzn-transcribe-language-code"] = input.LanguageCode;
  }

  if (input.MediaSampleRateHertz !== undefined) {
    headers[
      "x-amzn-transcribe-sample-rate"
    ] = input.MediaSampleRateHertz.toString();
  }

  return new HttpRequest({
    ...context.endpoint,
    body: input.AudioStream,
    path: "/stream-transcription",
    method: "POST",
    protocol: "https:",
    headers: headers
  });
}

export async function TranscriptEventAwsJson1_1Deserialize(
  output: Message
): Promise<TranscriptEvent> {
  return Promise.resolve({
    type: "TranscriptEvent"
    //fake deserializing
  });
}

export async function startStreamTranscriptionAwsJson1_1Deserialize(
  output: HttpResponse,
  context: SerdeContext
): Promise<StartStreamTranscriptionResponse> {
  if (output.statusCode !== 200) {
    return startStreamTranscriptionAwsJson1_1DeserializeError(output);
  }
  return Promise.resolve({
    $metadata: deserializeMetadata(output),
    __type: "com.amazon.transcribe.streaming#StartStreamTranscriptionResponse",
    TranscriptResultStream: transcriptResultStreamAwsJson1_1Deserialize(
      output.body,
      context
    ),
    LanguageCode: output.headers["x-amzn-transcribe-language-code"],
    SessionId: output.headers["x-amzn-transcribe-session-id"],
    MediaSampleRateHertz: parseInt(
      output.headers["x-amzn-transcribe-sample-rate"]
    ),
    MediaEncoding: output.headers["x-amzn-transcribe-media-encoding"],
    RequestId: output.headers["x-amzn-request-id"],
    VocabularyName: output.headers["x-amzn-transcribe-vocabulary-name"]
  });
}

async function startStreamTranscriptionAwsJson1_1DeserializeError(
  output: HttpResponse
): Promise<StartStreamTranscriptionResponse> {
  return Promise.reject({
    __type: "com.amazon.transcribe.streaming#UnknownException",
    $name: "UnknownException",
    $fault: "server"
  });
}

function transcriptResultStreamAwsJson1_1Deserialize(
  output: any,
  context: SerdeContext
) {
  const eventBuilder = new EventStreamMarshaller(
    context.utf8Encoder,
    context.utf8Decoder
  );
  //TODO: replace event deserializer back to visitor when it's ready
  return eventBuilder.deserialize<TranscriptEvent>(output, {
    TranscriptEvent: TranscriptEventAwsJson1_1Deserialize
    // BadRequestException: BadRequestExceptionAwsJson1_1Deserialize,
    // LimitExceededException: LimitExceededExceptionAwsJson1_1Deserialize,
    // InternalFailureException: InternalFailureExceptionAwsJson1_1Deserialize,
    // ConflictException: ConflictExceptionAwsJson1_1Deserialize
  });
}

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});
