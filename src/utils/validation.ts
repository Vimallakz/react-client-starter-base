/**
 * Validates the input string for email
 * @param email
 */
export const isValidEmail = (email: string) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

/**
 * Validate the input field contains value
 * @param message - error message
 */
export const isRequired = (message: string) => (value: string | undefined) => value ? undefined : message;

/**
 * To combine multiple validators for an input field
 * @param validators input field validators
 */
export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error, validator: any) => error || validator(value), undefined);