import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import {
  IForgotPasswordRequestPayload,
  IForgotPasswordResponsePayload,
  IResetPasswordRequestPayload,
  IResetPasswordResponsePayload,
  ISignInRequestPayload,
  ISignInResponsePayload,
  ISignUpRequestPayload,
  ISignUpResponsePayload,
  IUserCompleteProfilePayload,
  IUserCompleteProfileResponsePayload,
  IUserChangePasswordRequestPayload,
  IUserChangePasswordResponsePayload,
} from 'shared/interfaces/IUser';
import { authToken } from 'shared/utils/authToken';

const { GET, POST, DELETE, PATCH, PUT } = useAxios();

export const authDao = () => {
  const { getAuthToken } = authToken();
  const login = async (payload: ISignInRequestPayload) => {
    const response = await POST<ISignInResponsePayload>({
      url: `${ENDPOINTS.USERS}/sign_in`,
      data: payload,
    });

    return {
      data: response?.data,
    };
  };

  const signup = async (payload: ISignUpRequestPayload) => {
    const response = await POST<ISignUpResponsePayload>({
      url: `${ENDPOINTS.USERS}`,
      data: payload,
    });

    return {
      data: response?.data,
    };
  };

  const sendEmail = async (payload: IForgotPasswordRequestPayload) => {
    const response = await POST<IForgotPasswordResponsePayload>({
      url: `${ENDPOINTS.RESET_PASSWORD}`,
      data: payload,
    });

    return {
      data: response?.data,
    };
  };

  const resetPassword = async (payload: IResetPasswordRequestPayload) => {
    const response = await PUT<IResetPasswordResponsePayload>({
      url: `${ENDPOINTS.RESET_PASSWORD}`,
      data: payload,
    });

    return {
      data: response?.data,
    };
  };

  const setCompleteProfile = async (payload: IUserCompleteProfilePayload) => {
    const response = await PATCH<IUserCompleteProfilePayload>({
      url: `${ENDPOINTS.PROVIDER_AUTHENTICATION}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  };

  const loginWithGoogle = async (token: string) => {
    const response = await POST<ISignInResponsePayload>({
      url: `${ENDPOINTS.USERS}/google/sign_in?token=${token}`,
    });
    return {
      data: response?.data,
    };
  };

  const loginWithFacebook = async (token: string) => {
    const response = await POST<ISignInResponsePayload>({
      url: `${ENDPOINTS.USERS}/facebook/sign_in?token=${token}`,
    });

    return {
      data: response?.data,
    };
  };

  const getUserProfile = async () => {
    const response = await GET<ISignInResponsePayload>({
      url: `${ENDPOINTS.ME}`,
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return {
      data: response?.data,
    };
  };

  const changePassword = async (payload: IUserChangePasswordRequestPayload) => {
    const response = await PATCH<IUserChangePasswordResponsePayload>({
      url: `${ENDPOINTS.CHANGE_PASSWORD}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  };

  const logout = async () => {
    const response = await DELETE({
      url: `${ENDPOINTS.USERS}/sign_out`,
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return {
      data: response,
    };
  };

  return {
    login,
    signup,
    sendEmail,
    resetPassword,
    loginWithGoogle,
    loginWithFacebook,
    getUserProfile,
    setCompleteProfile,
    changePassword,
    logout,
  };
};
