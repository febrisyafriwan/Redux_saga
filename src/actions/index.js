export const PRESS_BUTTON = "PRESS_BUTTON";
export const PRESS_EQUALS = "PRESS_EQUALS";
export const PRESS_RESET = "PRESS_RESET";
export const SELECT_HISTORY = "SELECT_HISTORY";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

export const pressButton = value => ({ type: PRESS_BUTTON, value });
export const pressEquals = value => ({ type: PRESS_EQUALS });
export const pressReset = value => ({ type: PRESS_RESET });
export const selectHistory = value => ({ type: SELECT_HISTORY, value });
export const clearHistory = value => ({ type: CLEAR_HISTORY });
