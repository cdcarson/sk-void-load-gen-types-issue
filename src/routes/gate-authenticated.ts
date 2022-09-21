import type { RequestEvent } from '.svelte-kit/types/src/routes/$types';
import { redirect } from '@sveltejs/kit';

export const gateAuthenticated = (event: RequestEvent) => {
	if (Math.random() > 0.5) {
		throw redirect(303, '/sign-in');
	}
};
