import { Command } from "@aws-sdk/smithy-client";
import { serdePlugin } from "@aws-sdk/middleware-serde";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TranscribeStreamingResolvedConfiguration } from "../TranscribeStreamingConfiguration";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  startStreamTranscriptionSerializer,
  startStreamTranscriptionDeserializer
} from "../protocol/StartStreamTranscription";
import { FinalizeHandlerArguments, MiddlewareStack } from "@aws-sdk/types";

/**
 * To remove this when move to Smithy model
 */
type StartStreamTranscriptionInput = any;
type StartStreamTranscriptionOutput = any;
type InputTypesUnion = any;
type OutputTypesUnion = any;

export class StartStreamTranscriptionCommand extends Command<
  StartStreamTranscriptionInput,
  StartStreamTranscriptionOutput
> {
  constructor(readonly input: StartStreamTranscriptionInput) {
    super();
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<InputTypesUnion, OutputTypesUnion>,
    configuration: TranscribeStreamingResolvedConfiguration,
    options?: __aws_sdk_types.HttpOptions
  ): __aws_sdk_types.Handler<
    StartStreamTranscriptionInput,
    StartStreamTranscriptionOutput
  > {
    const { httpHandler } = configuration;

    this.use(
      serdePlugin(
        configuration,
        startStreamTranscriptionSerializer,
        startStreamTranscriptionDeserializer
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        httpHandler.handle(request.request as HttpRequest, options || {}),
      handlerExecutionContext
    );
  }
}
