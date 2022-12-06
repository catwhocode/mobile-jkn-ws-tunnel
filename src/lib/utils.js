import { json } from '@sveltejs/kit';

/**
 * @param {Headers} headers
 * @param  {string[]} keys
 * @returns {HeadersInit}
 */
export function pick_headers(headers, keys) {
	/** @type {HeadersInit} */
	const result = {};
	for (const key of keys) {
		const value = headers.get(key);
		if (value) {
			result[key] = value;
		}
	}
	return result;
}

/**
 * @param {string} message
 */
export function fail(message) {
	// custom response following BPJS docs
	return json(
		{
			metadata: { code: 201, message },
			response: null
		},
		{ status: 200 }
	);
}
