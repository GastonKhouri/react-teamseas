import { format } from 'date-fns';

export const formatDate = ( time?: string | number | Date ) => {

	if ( !time ) return;

	const date = new Date( time );

	return format( date, 'Pp' );

};