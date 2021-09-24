import { UserProfileType } from './../redux/profileReducer';
import axios from "axios";
import { UserAuthDataType } from "../redux/authReducer";
import { UserType } from "../redux/usersReducer";


const axiosInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'e7555453-e0c0-4326-99ca-77f39255724e'
    }
})

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers: (pageSize: number, currentPage: number) => {
        return axiosInstance.get<UsersResponseDataType>(`users?count=${pageSize}&page=${currentPage}`)
    }
}

export type AuthResponceDataType = {
    data: UserAuthDataType
    resultCode: 1 | 0
    message: string[]
  }

export const authAPI = {
    authMe: () => {
        return axiosInstance.get<AuthResponceDataType>(`/auth/me`)
    }
}



export const profileAPI = {
    getProfile: (userId: number) => {
        return axiosInstance.get<UserProfileType>(`profile/${userId}`)
    }
}

export const followAPI = {
    unfollow: (userId: number) => {
        return axiosInstance.delete(`follow/${userId}`)
    },
    follow: (userId: number) => {
        return axiosInstance.post(`follow/${userId}`, {})
    }
}



