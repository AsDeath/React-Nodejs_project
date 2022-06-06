const baseUrl = "http://localhost:8080"
const apiPath = "/api";
const getPath = apiPath + "/get";
const postPath = apiPath + "/post";
const authPath = apiPath + "/auth";
const deletePath = apiPath + "/delete";
const headers = {
        'Content-Type': 'application/json',
        }

const Get = (url, addHeader={}) => {
    return fetch(baseUrl + url, {
        method: "GET",
        headers: {...headers, ...addHeader}
    });
}
const Post = (url, data, addHeader={}) => {
    return fetch(baseUrl + url, {
            method: "POST",
            headers: {...headers, ...addHeader},
            body: JSON.stringify(data)
        });
}
const Put = (url, data, addHeader = {}) => {
    return fetch(baseUrl + url, {
            method: "PUT",
            headers: {...headers, ...addHeader},
            body: JSON.stringify(data)
        });
}
const Delete = (url, addHeader={}) => {
    return fetch(baseUrl + url, {
            method: "DELETE",
            headers: {...headers, ...addHeader}
        });
}

export async function GetAllProducts() {
    return await Get(getPath + "/allproducts").then((resp) => resp.json()).then((resp) => {return resp});
}

export async function GetClients() {
    return await Get("/clients").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function PostClient(data) {
    return await Post("/clients", data).then((resp) => {return resp});
}
export async function PostSignup(data) {
    return await Post(authPath + "/signup", data).then((resp) => resp.json()).then((resp) => {return resp});
}
export async function PostSignin(data) {
    return await Post(authPath + "/signin", data).then((resp) => resp.json()).then((resp) => {return resp});
}

export async function GetMainSliderData() {
    return await Get(getPath + "/mainslider").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function GetBrandList() {
    return await Get(getPath + "/brandlist").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function GetSelphonenumList() {
    return await Get(getPath + "/selphonenum").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function GetLogo() {
    return await Get(getPath + "/logo").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function GetAddtLinks() {
    return await Get(getPath + "/addtlinks").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function GetNavbar() {
    return await Get(getPath + "/navbar").then((resp) => resp.json()).then((resp) => {return resp});
}
export async function GetFooterTitles() {
    return await Get(getPath + "/footertitle").then((resp) => resp.json()).then((resp) => {return resp});
}

export async function VerifyToken(token) {
    return await Get(apiPath + "/test/user", {'x-access-token': token}).then((resp) => resp.json()).then((resp) => {return resp});
}

export async function GetBagProducts(userId) {
    return await Get(getPath + "/bag", {'userid': userId}).then((resp) => resp.json()).then((resp) => {return resp});
}
export async function PostBagProducts(data) {
    return await Post(postPath + "/bag", data).then((resp) => resp.json()).then((resp) => {return resp});
}
export async function DeleteBagProduct(data) {
    return await Post(postPath + "/deletebagproduct", data).then((resp) => resp.json()).then((resp) => {return resp});
}
export async function DeleteSameBagProducts(data) {
    return await Post(postPath + "/deletesamebagproducts", data).then((resp) => resp.json()).then((resp) => {return resp});
}