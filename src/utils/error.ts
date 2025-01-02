import { NextResponse } from "next/server";

interface CustomErrorResponse {
  status?: number;
  data?: unknown;
}

export const createCustomError = (
  message: string,
<<<<<<< HEAD
  statusCode?: number,
  data?: unknown
): Error & { response?: CustomErrorResponse } => {
  const error: Error & { response?: CustomErrorResponse } = new Error(message);
=======
  statusCode: number,
  data: any | null
) => {
  const error = new Error(message);
>>>>>>> 50e26751329e18e63b5d87c62260bc5f1760d5af
  error.response = {
    status: statusCode,
    ...(data as object),
  };

  return error;
};

export const handleErrorResponse = (
  error: Error & { response?: CustomErrorResponse },
  defaultMessage: string
) => {
  const message = error.message || defaultMessage;
  const status = error.response?.status || 500;

  console.error(message, error);
  return NextResponse.json({ error: message }, { status });
};
