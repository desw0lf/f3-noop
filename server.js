import { FilenPublicExpress, Logger } from "filen-public-express";
// import { ips } from "./ips.js";

const { FILEN_EMAIL, FILEN_PASSWORD } = process.env;

const credentials = {
  email: FILEN_EMAIL,
  password: FILEN_PASSWORD,
};

const server = new FilenPublicExpress({
  user: { sdkConfig: credentials },
  config: {
    expressTrustProxy: ["loopback"],
  },
  logger: { instance: Logger }
});

await server.start();
