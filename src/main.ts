/**
 * PRE-requisite function.
 *
 * check env files and set module import method.
 */
import dotenv from "dotenv";
const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Could't find .env file... ");
}

import moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);
