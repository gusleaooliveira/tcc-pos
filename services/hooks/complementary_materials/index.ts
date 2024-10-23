import { api } from "@/lib/axios";

interface IDownloadFile {
    id?: string;
    access_token?: string;
}

export async function donloadFile({
    id,
    access_token
}: IDownloadFile){
    const response = await api.get(`/document/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,  
        },
        responseType: 'blob' 
    })

    console.log(response);
    
    return response.data
}