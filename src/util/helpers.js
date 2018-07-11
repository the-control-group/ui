/**
 * Evaulate the client's inner width and return a breakpoint name
 */
export const getBreakpoint = () => {
	const viewportWidth = window.innerWidth,
		largeBreakpoint = 1024,
		mediumBreakpoint = 800;

	if(viewportWidth > largeBreakpoint) return 'Large';
	if(viewportWidth < largeBreakpoint && viewportWidth > mediumBreakpoint) return 'Medium';
	return 'Small';
};
