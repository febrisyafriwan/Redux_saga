import {
  SUBMIT_PENDAFTARAN_AAJI,
  PENDAFTARAN_AAJI_GET_FORM,
  PENDAFTARAN_AAJI_PUSH_FORM,
  PENDAFTARAN_AAJI_TO_DEFAULT
} from "./ConfigPendaftaranAAJI";

export const submitPendaftaranAAJI = value => ({
  type: SUBMIT_PENDAFTARAN_AAJI,
  value
});
export const onPendaftaranAAJIGetForm = value => ({
  type: PENDAFTARAN_AAJI_GET_FORM,
  value
});
export const onPendataranAAJIPushForm = value => ({
  type: PENDAFTARAN_AAJI_PUSH_FORM,
  value
});
export const onPendaftaranAAJIToDefault = value => ({
  type: PENDAFTARAN_AAJI_TO_DEFAULT,
  value
});
