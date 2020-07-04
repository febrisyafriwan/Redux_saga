export const getAllData = () => ({
  type: "getAllData"
});
export const getAllDataSuccess = value => ({
  type: "getAllDataSuccess",
  payload: value
});
export const getAllDataFailed = value => ({
  type: "getAllDataFailed",
  payload: value
});

export const addData = value => ({
  type: "addData",
  payload: value
});
export const addDataSuccess = value => ({
  type: "addDataSuccess",
  payload: value
});
export const addDataFailed = value => ({
  type: "addDataFailed",
  payload: value
});
