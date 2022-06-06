export const SvgFacebook = (data) => {
    const {fill, stroke, width, height} = data;
    return(
        <svg width={width} height={height} viewBox="-2 -2 24 24" 
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" 
            className="jam jam-facebook-circle">
            <path d='M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z'
                fill={fill} stroke={stroke} />
            <path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'
                fill={fill} stroke={stroke} />
        </svg>
    )
}

export default SvgFacebook;