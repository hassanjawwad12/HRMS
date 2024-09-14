import AXIOS_API from "./API";

export const getMembers = async () => {
    const response = await AXIOS_API.get(`/member/all`);
    console.log(response.data);
    return response.data;
}

export const getSingleMember = async (id) => {
    const params = {
        id: id
    }
    const response = await AXIOS_API.get(`/member/fetch`, {
        params: params,
    });
    console.log(response.data);
    return response.data;
}