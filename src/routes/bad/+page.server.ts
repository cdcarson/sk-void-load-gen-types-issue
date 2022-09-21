import type { PageServerLoad } from './$types'
import { gateAuthenticated } from '../gate-authenticated'

export const load: PageServerLoad = (event): void => {
  // just to show why one might return void here 
  gateAuthenticated(event);
}