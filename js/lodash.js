/* eslint-disable import/extensions */

import chunk from './library/chunk.js';
import compact from './library/compact.js';
import drop from './library/drop.js';
import dropWhile from './library/dropWhile.js';
import take from './library/take.js';
import filter from './library/filter.js';
import find from './library/find.js';
import includes from './library/includes.js';
import map from './library/map.js';
import zip from './library/zip.js';

import merge from './library/merge.js';
import omit from './library/omit.js';
import omitBy from './library/omitBy.js';
import pick from './library/pick.js';
import pickBy from './library/pickBy.js';
import toPairs from './library/toPairs.js';

const _ = {};

_.chunk = chunk;
_.compact = compact;
_.drop = drop;
_.dropWhile = dropWhile;
_.take = take;
_.filter = filter;
_.find = find;
_.includes = includes;
_.map = map;
_.zip = zip;

_.merge = merge;
_.omit = omit;
_.omitBy = omitBy;
_.pick = pick;
_.pickBy = pickBy;
_.toPairs = toPairs;

export default _;
