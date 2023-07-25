interface HeadersTypes {
  [key: string]: string;
}

interface APIResponse {
  statusCode: number;
  response: unknown;
  headers: HeadersTypes;
}
