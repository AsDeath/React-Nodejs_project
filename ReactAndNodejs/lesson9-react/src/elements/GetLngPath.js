
export const GetLngPath = (pathname) => {
    let splitLink = pathname.split("/").filter((e) => {return e !== ""});
    if(splitLink[0] === "en" || splitLink[0] === "ro" || splitLink[0] === "ru"){
        return "/" + splitLink[0];
    }else{
        return "/en";
    }
}

export default GetLngPath;