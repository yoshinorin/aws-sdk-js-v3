import {
  RequestSerializer,
  ResponseDeserializer,
  Protocol,
  TransferHandler,
  HttpOptions,
  SerializerUtils,
  DeserializerUtils
} from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export class JsonProtocol extends Protocol<
  HttpRequest,
  HttpResponse,
  HttpOptions
> {
  constructor(
    handler: TransferHandler<HttpRequest, HttpResponse, HttpOptions>
  ) {
    super(handler);
  }
  serialize(
    serializer: RequestSerializer<HttpRequest>,
    input: any,
    utils?: SerializerUtils
  ) {
    return serializer(input, "aws.json-1.1");
  }
  deserialize(
    parser: ResponseDeserializer<HttpResponse>,
    output: HttpResponse,
    utils?: DeserializerUtils
  ) {
    return parser(output, "aws.json-1.1") as any;
  }
}
