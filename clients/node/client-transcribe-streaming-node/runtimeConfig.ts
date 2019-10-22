import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { Hash } from "@aws-sdk/hash-node";
<<<<<<< HEAD
import { NodeHttp2Handler } from "@aws-sdk/node-http-handler";
=======
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
>>>>>>> feat: update plugin config
import { defaultProvider as regionDefaultProvider } from "@aws-sdk/region-provider";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { streamCollector } from "@aws-sdk/stream-collector-node";
<<<<<<< HEAD
import { JsonProtocol } from "@aws-sdk/protocol-json";
=======
import { RestJsonProtocol } from "@aws-sdk/protocol-rest-json";
>>>>>>> feat: update plugin config
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { name, version } from "./package.json";
import { TranscribeStreamingRuntimeDependencies } from "./TranscribeStreamingConfiguration";

export const TranscribeStreamingRuntimeConfiguration: Required<
  TranscribeStreamingRuntimeDependencies
> = {
<<<<<<< HEAD
  protocolDefaultProvider: handler => new JsonProtocol(handler),
  signingName: "transcribestreaming",
  service: "transcribestreaming",
  httpHandler: new NodeHttp2Handler(),
=======
  protocolDefaultProvider: handler => new RestJsonProtocol(handler),
  signingName: "transcribe-streaming",
  service: "transcribe-streaming",
  httpHandler: new NodeHttpHandler(),
>>>>>>> feat: update plugin config
  sha256: Hash.bind(null, "sha256"),
  credentialDefaultProvider,
  regionDefaultProvider,
  urlParser: parseUrl,
  bodyLengthChecker: calculateBodyLength,
  streamCollector,
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
  defaultUserAgent: defaultUserAgent(name, version)
};
