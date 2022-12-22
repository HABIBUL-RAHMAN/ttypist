import * as Misc from "./modules/misc.js";
import * as Elements from "./modules/elements.js"
import * as Constants from "./modules/constants.js";

import Test from "./modules/test.js";
import Config from "./modules/config.js";

let test = new Test();
test.start();

export { test };

/**
 * 	> start designing data structures for error insertion
 * 	> after that work on stats object integration
 * 	> then make core test configuration options like deletion/inserterror/instantdeath
 * 		forgiveerror etc work together & in harmony
 **/