export const getAllData = () => ({
  type: "getAllAccount"
});
export const getAllDataSuccess = value => ({
  type: "getAllAccountSuccess",
  payload: value
});
export const getAllDataFailed = value => ({
  type: "getAllAccountFailed",
  payload: value
});

export const addData = value => ({
  type: "addAccount",
  payload: value
});
export const addDataSuccess = value => ({
  type: "addAccountSuccess",
  payload: value
});
export const addDataFailed = value => ({
  type: "addAccountFailed",
  payload: value
});
