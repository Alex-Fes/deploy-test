import axios from "axios";

export type ApiError = {
  message: string;
  status?: number;
};

export function normalizeApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const responseMessage = error.response?.data?.message;

    return {
      message: Array.isArray(responseMessage)
        ? responseMessage.join(", ")
        : responseMessage || error.message || "Request failed",
      status: error.response?.status,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "Unexpected request error" };
}
