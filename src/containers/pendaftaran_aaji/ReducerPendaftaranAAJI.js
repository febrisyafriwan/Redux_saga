import {
  SUBMIT_PENDAFTARAN_AAJI,
  PENDAFTARAN_AAJI_GET_FORM,
  PENDAFTARAN_AAJI_PUSH_FORM,
  PENDAFTARAN_AAJI_TO_DEFAULT
} from "./ConfigPendaftaranAAJI";

const defaultPendaftaranAAJI = {
  tipeUjian: { value: "", text: "", isValid: false, disabled: false },
  kotaUjian: { value: "", text: "", isValid: false, disabled: false },
  lokasiUjian: { value: "", text: "", isValid: false, disabled: false },
  tanggalUjian: { value: "", text: "", isValid: false, disabled: false },
  waktuUjian: { value: "", text: "", isValid: false, disabled: false },
  kuotaUjian: ""
};

const initialState = {
  pendaftaranAAJI: JSON.parse(JSON.stringify(defaultPendaftaranAAJI))
};

const ReducerPendaftaranAAJI = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PENDAFTARAN_AAJI:
      console.log("===[ReducerPendaftaranAAJI] work");
      console.log("===[ReducerPendaftaranAAJI] action: ", action);
      return {};

    case PENDAFTARAN_AAJI_PUSH_FORM:
      console.log("PENDAFTARAN_AAJI_PUSH_FORM reducer");
      console.log("==action: ", action);
      console.log("==this.defaultPendaftaranAAJI: ", defaultPendaftaranAAJI);
      initialState.pendaftaranAAJI = action.value.pendaftaranAAJI;
      return {
        ...state,
        pendaftaranAAJI: initialState.pendaftaranAAJI
      };

    case PENDAFTARAN_AAJI_GET_FORM:
      console.log("PENDAFTARAN_AAJI_GET_FORM reducer");
      console.log("===initialState: ", state);
      return {
        ...state,
        pendaftaranAAJI: initialState.pendaftaranAAJI
      };

    case PENDAFTARAN_AAJI_TO_DEFAULT:
      console.log("PENDAFTARAN_AAJI_TO_DEFAULT reducer");
      console.log("==action: ", action);
      console.log("==this.defaultPendaftaranAAJI: ", defaultPendaftaranAAJI);
      console.log("===initial state: ", initialState.pendaftaranAAJI);
      initialState.pendaftaranAAJI = JSON.parse(
        JSON.stringify(defaultPendaftaranAAJI)
      );
      return {
        ...state,
        pendaftaranAAJI: initialState.pendaftaranAAJI
      };

    default:
      return state;
  }
};
export default ReducerPendaftaranAAJI;
