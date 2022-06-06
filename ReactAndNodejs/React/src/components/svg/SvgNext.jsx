export const SvgNext = (data) => {
    const {fill = "#fff", stroke, width = '50px', height = '50px'} = data;
    return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={width} height={height} viewBox="0 0 256 256" xmlSpace="preserve">
    <defs>
    </defs>
    <g transform="translate(128 128) scale(0.72 0.72)">
    	<g  fill={fill} opacity={1} transform="translate(175.05000000000007 175.04999999999995) rotate(180) scale(3.89 3.89)" >
    	<path d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z" 
        fill={fill} opacity={1} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" 
        />
    </g>
    </g>
    </svg>
    )
}

export default SvgNext;