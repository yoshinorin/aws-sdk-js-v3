import { Command } from "@aws-sdk/smithy-client";
import { serdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpOptions,
  Handler,
  HandlerExecutionContext,
  FinalizeHandlerArguments,
  MiddlewareStack
} from "@aws-sdk/types";
import { TranscribeStreamingResolvedConfiguration } from "../TranscribeStreamingConfiguration";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  startStreamTranscriptionSerializer,
  startStreamTranscriptionDeserializer
} from "../protocol/StartStreamTranscription";
import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
} from "../models";

type InputTypesUnion = any;
type OutputTypesUnion = any;

export class StartStreamTranscriptionCommand extends Command<
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse
> {
  constructor(readonly input: StartStreamTranscriptionRequest) {
    super();
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<InputTypesUnion, OutputTypesUnion>,
    configuration: TranscribeStreamingResolvedConfiguration,
    options?: HttpOptions
  ): Handler<
    StartStreamTranscriptionRequest,
    StartStreamTranscriptionResponse
  > {
    const {
      protocol: { handler }
    } = configuration;

    this.use(
      serdePlugin(
        configuration,
        startStreamTranscriptionSerializer,
        startStreamTranscriptionDeserializer
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };

    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        handler.handle(request.request as HttpRequest, options || {}),
      handlerExecutionContext
    );
  }
}
