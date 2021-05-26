import process from '/@builtins/process.js';import faunadb from "/@npm/faunadb";

const client = new faunadb.Client({ secret: process.env.REACT_APP_DB_KEY });

const q = faunadb.query;

export { client, q };

import { createHotContext as $w_h$ } from '/_wmr.js'; $w_h$(import.meta.url);