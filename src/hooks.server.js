import { MJKN_API_URL } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import { fail, pick_headers } from './lib/utils';

const mjkn_routes = ['/auth', '/antre', '/operasi'];
const mjkn_headers = ['x-token', 'x-username', 'x-password', 'content-type'];

/** @type {import('@sveltejs/kit').Handle} */
export async function tunnel({ event, resolve }) {
	const { url, request, fetch } = event;
	if (mjkn_routes.some((r) => url.pathname.startsWith(r))) {
		// get required attr from request
		const mjkn_url = new URL(url.pathname, MJKN_API_URL);
		const headers = pick_headers(request.headers, mjkn_headers);
		const body = await request.text();

		// forward to MJKN API
		return fetch(mjkn_url, {
			method: request.method,
			headers: headers,
			body: body ? body : undefined
		});
	}

	return resolve(event);
}

/** @type {import('@sveltejs/kit').Handle} */
export async function custom_fail({ event, resolve }) {
	const response = await resolve(event);
	if (!response.ok) {
		const data = await response.text();
		return fail(`Terjadi kesalahan. Status: ${response.status} | Data: ${data}`);
	}

	return response;
}

export const handle = sequence(tunnel, custom_fail);
