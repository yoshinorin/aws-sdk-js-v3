import {
  AwsAuthConfiguration,
  AwsAuthConfigurationInput
} from "@aws-sdk/signing-middleware";
import {
  UserAgentConfig,
  UserAgentConfigInput
} from "@aws-sdk/middleware-user-agent";
import { RetryConfig, RetryConfigInput } from "@aws-sdk/retry-middleware";
import { name, version } from "./package.json";
import {
  RegionConfiguration,
  RegionConfigurationInput,
  EndpointsConfig,
  EndpointsConfigInput,
  ProtocolConfig,
  ProtocolConfigInput,
  AWSClientRuntimeConfiguration
} from "@aws-sdk/config-resolver";

export type AWSClientRuntimeResolvedConfiguration = Required<
  AWSClientRuntimeConfiguration
>;

export const TranscribeStreamingRuntimeConfiguration: AWSClientRuntimeResolvedConfiguration = {
  protocolDefaultProvider: handler => new JsonProtocol(handler),
  signingName: "transcribe-streaming",
  service: "transcribe-streaming",
  httpHandler: new NodeHttpHandler(),
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

export type TranscribeStreamingConfiguration = AWSClientRuntimeConfiguration &
  AwsAuthConfigurationInput &
  RegionConfigurationInput &
  RetryConfigInput &
  EndpointsConfigInput &
  ProtocolConfigInput &
  UserAgentConfigInput;

export type TranscribeStreamingResolvedConfiguration = AWSClientRuntimeResolvedConfiguration &
  AwsAuthConfiguration.Resolved &
  RegionConfiguration.Resolved &
  RetryConfig.Resolved &
  EndpointsConfig.Resolved &
  ProtocolConfig.Resolved &
  UserAgentConfig.Resolved;
