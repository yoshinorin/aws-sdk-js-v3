import * as _smithy from "../lib/smithy";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface Alternative {
  __type?: "com.amazon.transcribe.streaming#Alternative";
  Items?: Array<Item>;
  Transcript?: Transcript;
}

export namespace Alternative {
  export const ID = "com.amazon.transcribe.streaming#Alternative";
  export function isa(o: any): o is Alternative {
    return _smithy.isa(o, ID);
  }
}

export interface AudioEvent {
  __type?: "com.amazon.transcribe.streaming#AudioEvent";
  type: "AudioEvent";
  AudioChunk?: Uint8Array;
}

export namespace AudioEvent {
  export const ID = "com.amazon.transcribe.streaming#AudioEvent";
  export function isa(o: any): o is AudioEvent {
    return _smithy.isa(o, ID);
  }
}

export interface AudioStream {
  __type?: "com.amazon.transcribe.streaming#AudioStream";
  AudioEvent?: AsyncIterable<AudioEvent>;
}

export namespace AudioStream {
  export const ID = "com.amazon.transcribe.streaming#AudioStream";
  export function isa(o: any): o is AudioStream {
    return _smithy.isa(o, ID);
  }
}

export interface BadRequestException extends _smithy.SmithyException {
  __type: "com.amazon.transcribe.streaming#BadRequestException";
  $name: "BadRequestException";
  $fault: "client";
  message: string | undefined;
}

export namespace BadRequestException {
  export const ID = "com.amazon.transcribe.streaming#BadRequestException";
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, ID);
  }
}

export interface ConflictException extends _smithy.SmithyException {
  __type: "com.amazon.transcribe.streaming#ConflictException";
  $name: "ConflictException";
  $fault: "client";
  message: string | undefined;
}

export namespace ConflictException {
  export const ID = "com.amazon.transcribe.streaming#ConflictException";
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, ID);
  }
}

export interface InternalFailureException extends _smithy.SmithyException {
  __type: "com.amazon.transcribe.streaming#InternalFailureException";
  $name: "InternalFailureException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalFailureException {
  export const ID = "com.amazon.transcribe.streaming#InternalFailureException";
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, ID);
  }
}

export interface Item {
  __type?: "com.amazon.transcribe.streaming#Item";
  Type?: ItemType | string;
  EndTime?: number;
  StartTime?: number;
  Content?: string;
}

export namespace Item {
  export const ID = "com.amazon.transcribe.streaming#Item";
  export function isa(o: any): o is Item {
    return _smithy.isa(o, ID);
  }
}

export enum ItemType {
  PRONUNCIATION = "PRONUNCIATION",
  PUNCTUATION = "PUNCTUATION"
}

export enum LanguageCode {
  EN_US = "ENUS",
  EN_GB = "ENGB"
}

export interface LimitExceededException extends _smithy.SmithyException {
  __type: "com.amazon.transcribe.streaming#LimitExceededException";
  $name: "LimitExceededException";
  $fault: "client";
  dbConnectionId?: number;
  Message: string | undefined;
}

export namespace LimitExceededException {
  export const ID = "com.amazon.transcribe.streaming#LimitExceededException";
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, ID);
  }
}

export enum MediaEncoding {
  PCM = "PCM"
}

export interface Result {
  __type?: "com.amazon.transcribe.streaming#Result";
  Alternatives?: Array<Alternative>;
  StartTime?: number;
  IsPartial?: boolean;
  EndTime?: number;
  ResultId?: string;
}

export namespace Result {
  export const ID = "com.amazon.transcribe.streaming#Result";
  export function isa(o: any): o is Result {
    return _smithy.isa(o, ID);
  }
}

export interface StartStreamTranscriptionRequest {
  __type?: "com.amazon.transcribe.streaming#StartStreamTranscriptionRequest";
  MediaEncoding: MediaEncoding | string | undefined;
  VocabularyName?: string;
  AudioStream: AudioStream | undefined;
  SessionId?: string;
  LanguageCode: LanguageCode | string | undefined;
  MediaSampleRateHertz: number | undefined;
}

export namespace StartStreamTranscriptionRequest {
  export const ID =
    "com.amazon.transcribe.streaming#StartStreamTranscriptionRequest";
  export function isa(o: any): o is StartStreamTranscriptionRequest {
    return _smithy.isa(o, ID);
  }
}

export interface StartStreamTranscriptionResponse extends $MetadataBearer {
  __type?: "com.amazon.transcribe.streaming#StartStreamTranscriptionResponse";
  TranscriptResultStream?: TranscriptResultStream;
  LanguageCode?: LanguageCode | string;
  SessionId?: string;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MediaEncoding | string;
  RequestId?: string;
  VocabularyName?: string;
}

export namespace StartStreamTranscriptionResponse {
  export const ID =
    "com.amazon.transcribe.streaming#StartStreamTranscriptionResponse";
  export function isa(o: any): o is StartStreamTranscriptionResponse {
    return _smithy.isa(o, ID);
  }
}

export interface Transcript {
  __type?: "com.amazon.transcribe.streaming#Transcript";
  Results?: Array<Result>;
}

export namespace Transcript {
  export const ID = "com.amazon.transcribe.streaming#Transcript";
  export function isa(o: any): o is Transcript {
    return _smithy.isa(o, ID);
  }
}

export interface TranscriptEvent {
  __type?: "com.amazon.transcribe.streaming#TranscriptEvent";
  Transcript?: Transcript;
}

export namespace TranscriptEvent {
  export const ID = "com.amazon.transcribe.streaming#TranscriptEvent";
  export function isa(o: any): o is TranscriptEvent {
    return _smithy.isa(o, ID);
  }
}

export interface TranscriptResultStream {
  __type?: "com.amazon.transcribe.streaming#TranscriptResultStream";
  InternalFailureException?: InternalFailureException;
  TranscriptEvent?: TranscriptEvent;
  ConflictException?: ConflictException;
  LimitExceededException?: LimitExceededException;
  BadRequestException?: BadRequestException;
}

export namespace TranscriptResultStream {
  export const ID = "com.amazon.transcribe.streaming#TranscriptResultStream";
  export function isa(o: any): o is TranscriptResultStream {
    return _smithy.isa(o, ID);
  }
}
