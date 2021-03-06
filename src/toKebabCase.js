import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into kebab-case.
 *
 * @func
 * @category String
 *
 * @example
 *
 * 		R_.toKebabCase('hello-world') // 'hello-world'
 * 		R_.toKebabCase('hello- world') // 'hello-world'
 * 		R_.toKebabCase('  hello-/ world/ ') // 'hello-world'
 *
 * @sig String -> String
 */
const toKebabCase = o(
	join('-'),
	o(map(toLower), splitByNonAlphaNumeric)
);

export default toKebabCase;
