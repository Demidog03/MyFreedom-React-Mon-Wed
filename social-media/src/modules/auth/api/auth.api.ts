import { LoginBody, LoginResponse, RegisterBody, RegisterResponse } from "./auth.api.types";
import axios, { AxiosPromise } from 'axios';

export async function registerApi(body: RegisterBody): AxiosPromise<RegisterResponse> {
    return axios.post('http://localhost:3000/api/auth/register', body)
}

export async function loginApi(body: LoginBody): AxiosPromise<LoginResponse> {
    return axios.post('http://localhost:3000/api/auth/login', body)
}
