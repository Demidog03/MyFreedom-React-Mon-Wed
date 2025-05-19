import { AxiosPromise } from "axios";
import { GetProfileResponse } from "./profile.api.types";
import apiPrivate from "../../../shared/lib/api/apiPrivate";

export async function getProfileApi(): AxiosPromise<GetProfileResponse> {
    const response = await apiPrivate.get('/auth/profile')
    return response.data
}