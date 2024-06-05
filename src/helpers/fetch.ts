import { ApiRequest, FetchResponse } from "@/interfaces";
import { getLocalStorage } from "./localStorageUtils";

export const fetchSinToken = async <T>({
  endpoint,
  method,
  data,
}: ApiRequest): Promise<FetchResponse<T>> => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;

  const options: RequestInit = {
    method,
    headers:
      method === "GET"
        ? undefined
        : {
            "Content-type": "application/json",
          },
  };

  if (method !== "GET") {
    options.body = JSON.stringify(data);
  }

  const resp = await fetch(url, options);

  if (!resp.ok) {
    const data = await resp.json();
    const error = {
      data: null,
      errorMessage: data.error,
      status: data.status,
    };

    return error;
  }

  const respData: T = await resp.json();

  return {
    data: respData,
    status: resp.status,
  };
};

export const fetchConToken = async <T>({
  endpoint,
  method,
  data,
}: ApiRequest): Promise<FetchResponse<T>> => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;
  const token = getLocalStorage<string>("token");

  const options: RequestInit = {
    method,
    headers:
      method === "GET"
        ? undefined
        : {
            "Content-type": "application/json",
          },
  };

  if (method !== "GET") {
    options.body = JSON.stringify(data);
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  }

  const resp = await fetch(url, options);

  if (!resp.ok) {
    const data = await resp.json();
    const error = {
      data: null,
      errorMessage: data.error,
      status: data.status,
    };

    return error;
  }

  const respData: T = await resp.json();

  return {
    data: respData,
    status: resp.status,
  };
};


