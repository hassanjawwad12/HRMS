import AXIOS_API from "./API";

export const getProjects = async () => {
    const response = await AXIOS_API.get(`/project/all`);
    return response.data;
}

// export const getProject = async (id) => {
//     const params = {
//         id: id
//     }
//     const response = await AXIOS_API.get(`${Backend}/data/project`, {
//         params: params,
//     });
//     console.log(response.data);
//     return response.data;
// }

// export const addProject = async (data) => {
//     const token = await getAccessToken();
//     console.log("The Data is : ", data);
//     const response = await axios.post(`${Backend}/project/add_project`, data, {
//         headers: {
//             authorization: `${token}`
//         }
//     });
//     console.log(response.data);
//     return response.data;
// }

// export const deleteProject = async (data) => {
//     const token = await getAccessToken();
//     const response = await axios.post(`${Backend}/project/delete_project`, {
//         id: data
//     } ,{
//         headers: {
//             authorization: `${token}`
//         }
//     });
//     console.log(response.data);
//     return response.data;
// }