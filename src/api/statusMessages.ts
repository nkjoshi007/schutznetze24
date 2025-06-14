// src/api/statusMessages.ts

export const STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
  } as const;
  
  export const MESSAGES = {
    SUCCESS: 'Operation completed successfully.',
    CREATED: 'Resource created successfully.',
    UPDATED: 'Resource updated successfully.',
    DELETED: 'Resource deleted successfully.',
  
    BAD_REQUEST: 'Invalid request. Please check the data.',
    UNAUTHORIZED: 'You are not authorized. Please log in.',
    FORBIDDEN: 'Access to this resource is forbidden.',
    NOT_FOUND: 'Requested resource was not found.',
    CONFLICT: 'Conflict occurred with the current state.',
    SERVER_ERROR: 'Something went wrong. Please try again later.',
  } as const;
  
  // Optional: Map status codes to messages
  export const STATUS_MESSAGE_MAP: Record<number, string> = {
    [STATUS_CODES.OK]: MESSAGES.SUCCESS,
    [STATUS_CODES.CREATED]: MESSAGES.CREATED,
    [STATUS_CODES.BAD_REQUEST]: MESSAGES.BAD_REQUEST,
    [STATUS_CODES.UNAUTHORIZED]: MESSAGES.UNAUTHORIZED,
    [STATUS_CODES.FORBIDDEN]: MESSAGES.FORBIDDEN,
    [STATUS_CODES.NOT_FOUND]: MESSAGES.NOT_FOUND,
    [STATUS_CODES.CONFLICT]: MESSAGES.CONFLICT,
    [STATUS_CODES.INTERNAL_SERVER_ERROR]: MESSAGES.SERVER_ERROR,
  };
  