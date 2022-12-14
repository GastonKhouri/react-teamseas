import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface Props {
	from?: number;
	to?: number;
}

export const Counter = ( { from = 0, to = 0 }: Props ) => {

	const nodeRef = useRef<HTMLDivElement>( null );

	useEffect( () => {

		const node = nodeRef.current;

		if ( !node ) return;

		const controls = animate( from, to, {
			duration: 1,
			onUpdate( value ) {
				node.textContent = parseInt( value.toFixed( 0 ) ).toLocaleString();
			}
		} );

		return () => controls.stop();

	}, [ from, to ] );

	return <div ref={ nodeRef } />;

};