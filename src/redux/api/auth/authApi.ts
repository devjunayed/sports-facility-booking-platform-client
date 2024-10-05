import { LoginFieldType } from "../../../types/login.type";
import { RegistrationFieldType } from "../../../types/registration.type";
import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData: RegistrationFieldType)=>({
                url: "/auth/signup",
                method: "POST",
                body: userData
            })
        }), 
        login: builder.mutation({
            query: (userData: LoginFieldType) => ({
                url: "/auth/login",
                method: "POST",
                body: userData
            })
        }),
    })
})

export const {useRegisterMutation, useLoginMutation} = authApi;