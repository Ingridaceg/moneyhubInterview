type CatchError =
  | Error
  | string
  | null
  | number
  | unknown
  | never;

interface ErrorType {
  code: number;
  message: string;
}

interface ErrorTypes {
  [key: string]: ErrorType;
}
