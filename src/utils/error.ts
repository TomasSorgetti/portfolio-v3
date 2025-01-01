import { NextResponse } from "next/server";

export const createCustomError = (
  message: string,
  statusCode: number,
  data: any | null
) => {
  const error = new Error(message);
  error.response = {
    status: statusCode,
    ...(data && { data }),
  };

  return error;
};

export const handleErrorResponse = (error: any, defaultMessage: string) => {
  const message = error.message || defaultMessage;
  const status = error.response?.status || 500;

  console.error(message, error);
  return NextResponse.json({ error: message }, { status });
};
