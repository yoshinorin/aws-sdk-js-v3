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
  AudioChunk?: Uint8Array;
}

export namespace AudioEvent {
  export const ID = "com.amazon.transcribe.streaming#AudioEvent";
  export function isa(o: any): o is AudioEvent {
    return _smithy.isa(o, ID);
  }
}

export type AudioStream =
  | AudioStream.AudioEventMember
  | AudioStream.$UnknownMember

export namespace AudioStream {
  export const ID = "com.amazon.transcribe.streaming#AudioStream"
  interface $Base {
    __type?: "com.amazon.transcribe.streaming#AudioStream";
  }
  export interface AudioEventMember extends $Base {
    AudioEvent: AudioEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    AudioEvent?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(
    value: AudioStream,
    visitor: Visitor<T>
  ): T {
    if (value.AudioEvent !== undefined) return visitor.AudioEvent(value.AudioEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
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
  PUNCTUATION = "PUNCTUATION",
};

export enum LanguageCode {
  EN_US = "ENUS",
  EN_GB = "ENGB",
  EN_AU = "ENAU",
  ES_US = "ESUS",
  FR_CA = "FRCA",
  FR_FR = "FRFR",
};

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
  PCM = "PCM",
};

export interface Result {
  __type?: "com.amazon.transcribe.streaming#Result";
  StartTime?: number;
  IsPartial?: boolean;
  EndTime?: number;
  Alternatives?: Array<Alternative>;
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
  VocabularyName?: string;
  AudioStream?: AudioStream;
  MediaSampleRateHertz: number | undefined;
  MediaEncoding: MediaEncoding | string | undefined;
  SessionId?: string;
  LanguageCode: LanguageCode | string | undefined;
}

export namespace StartStreamTranscriptionRequest {
  export const ID = "com.amazon.transcribe.streaming#StartStreamTranscriptionRequest";
  export function isa(o: any): o is StartStreamTranscriptionRequest {
    return _smithy.isa(o, ID);
  }
}

export interface StartStreamTranscriptionResponse extends $MetadataBearer {
  __type?: "com.amazon.transcribe.streaming#StartStreamTranscriptionResponse";
  TranscriptResultStream?: TranscriptResultStream;
  MediaSampleRateHertz?: number;
  VocabularyName?: string;
  LanguageCode?: LanguageCode | string;
  SessionId?: string;
  MediaEncoding?: MediaEncoding | string;
  RequestId?: string;
}

export namespace StartStreamTranscriptionResponse {
  export const ID = "com.amazon.transcribe.streaming#StartStreamTranscriptionResponse";
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

export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember

export namespace TranscriptResultStream {
  export const ID = "com.amazon.transcribe.streaming#TranscriptResultStream"
  interface $Base {
    __type?: "com.amazon.transcribe.streaming#TranscriptResultStream";
  }
  export interface InternalFailureExceptionMember extends $Base {
    InternalFailureException: InternalFailureException;
    TranscriptEvent?: never;
    ConflictException?: never;
    LimitExceededException?: never;
    BadRequestException?: never;
    $unknown?: never;
  }
  export interface TranscriptEventMember extends $Base {
    InternalFailureException?: never;
    TranscriptEvent: TranscriptEvent;
    ConflictException?: never;
    LimitExceededException?: never;
    BadRequestException?: never;
    $unknown?: never;
  }
  export interface ConflictExceptionMember extends $Base {
    InternalFailureException?: never;
    TranscriptEvent?: never;
    ConflictException: ConflictException;
    LimitExceededException?: never;
    BadRequestException?: never;
    $unknown?: never;
  }
  export interface LimitExceededExceptionMember extends $Base {
    InternalFailureException?: never;
    TranscriptEvent?: never;
    ConflictException?: never;
    LimitExceededException: LimitExceededException;
    BadRequestException?: never;
    $unknown?: never;
  }
  export interface BadRequestExceptionMember extends $Base {
    InternalFailureException?: never;
    TranscriptEvent?: never;
    ConflictException?: never;
    LimitExceededException?: never;
    BadRequestException: BadRequestException;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    InternalFailureException?: never;
    TranscriptEvent?: never;
    ConflictException?: never;
    LimitExceededException?: never;
    BadRequestException?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    InternalFailureException: (value: InternalFailureException) => T;
    TranscriptEvent: (value: TranscriptEvent) => T;
    ConflictException: (value: ConflictException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    BadRequestException: (value: BadRequestException) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(
    value: TranscriptResultStream,
    visitor: Visitor<T>
  ): T {
    if (value.InternalFailureException !== undefined) return visitor.InternalFailureException(value.InternalFailureException);
    if (value.TranscriptEvent !== undefined) return visitor.TranscriptEvent(value.TranscriptEvent);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.LimitExceededException !== undefined) return visitor.LimitExceededException(value.LimitExceededException);
    if (value.BadRequestException !== undefined) return visitor.BadRequestException(value.BadRequestException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}
