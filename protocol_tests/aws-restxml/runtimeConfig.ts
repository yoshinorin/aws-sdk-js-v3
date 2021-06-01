import packageInfo from "./package.json";

import { Hash } from "@aws-sdk/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@aws-sdk/middleware-retry";
import { loadConfig as loadNodeConfig } from "@aws-sdk/node-config-provider";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { ClientDefaults } from "./RestXmlProtocolClient";
import { ClientSharedValues } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "node",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  defaultUserAgentProvider: defaultUserAgent({
    serviceId: ClientSharedValues.serviceId,
    clientVersion: packageInfo.version,
  }),
  maxAttempts: loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
  requestHandler: new NodeHttpHandler(),
  retryModeProvider: loadNodeConfig(NODE_RETRY_MODE_CONFIG_OPTIONS),
  sha256: Hash.bind(null, "sha256"),
  streamCollector,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
};
