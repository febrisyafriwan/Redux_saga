import React from "react";
import { connect } from "react-redux";
import Selects from "../../components/selects/Selects";
import Button from "../../components/button-mub/Button";
import ConfirmDialog from "../../components/confirm_dialog/ConfirmDialog";
import Grid from "@material-ui/core/Grid";
import {
  submitPendaftaranAAJI,
  onPendaftaranAAJIGetForm,
  onPendataranAAJIPushForm,
  onPendaftaranAAJIToDefault
} from "./ActionPendaftaranAAJI";
import { formToDisable } from "../../shared/formUtils";

import "./PendaftaranAAJI.scss";

class PendaftaranAAJI extends React.Component {
  newPendaftaranAAJI;

  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      pendaftaranAAJI: this.props.pendaftaranAAJI,
      onSubmit: false
    };

    this.closeDialog = this.closeDialog.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.newPendaftaranAAJI = this.state.pendaftaranAAJI;
  }

  componentDidMount() {
    this.props.onPendaftaranAAJIGetForm();
  }

  onSubmit = () => {
    this.setState({
      dialogOpen: true,
      onSubmit: true
    });
    // this.props.submitPendaftaranAAJI(this.state);
    this.setState({ pendaftaranAAJI: this.newPendaftaranAAJI });
    let data = {
      pendaftaranAAJI: this.state.pendaftaranAAJI
    };

    this.props.onPendataranAAJIPushForm(data);
  };

  onRestart = () => {
    this.newPendaftaranAAJI["tipeUjian"].value = "";
    this.setState({ pendaftaranAAJI: this.newPendaftaranAAJI });
  };

  closeDialog() {
    this.setState({ dialogOpen: false });
    window.location.href = "#/react/layout/kandidat_status";

    setTimeout(() => {
      this.props.onPendaftaranAAJIToDefault();
    }, 50);
  }

  onChangeSelect = (name, value, isValid, text) => {
    this.newPendaftaranAAJI[name].value = value;
    this.newPendaftaranAAJI[name].isValid = isValid;
    this.newPendaftaranAAJI[name].text = text;
    console.log("onChange");
    console.log(name);
    console.log(JSON.stringify(this.newPendaftaranAAJI));
    if (name === "waktuUjian") {
      for (let i = 0; i < this.props.listWaktuUjian.length; i++) {
        if (this.props.listWaktuUjian[i].value === value) {
          this.newPendaftaranAAJI.kuotaUjian = this.props.listWaktuUjian[
            i
          ].desc;
        }
      }
    }

    this.setState({ pendaftaranAAJI: this.newPendaftaranAAJI });
  };

  render() {
    const { pendaftaranAAJI, onSubmit } = this.state;

    const { role } = this.props;
    console.log("State");
    console.log(JSON.stringify(pendaftaranAAJI));
    return (
      <React.Fragment>
        <h2>Pendaftaran AAJI</h2>

        <div className="formFill">
          {/* <Selects name="nama_bank"    onChange={this.selectOnChange} label="Nama Bank"     required={true} value={dataRekening.nama_bank.value}            className="nama-bank-data-rekening mt-10"                  disabled={formToDisable(role, 'nama-bank-data-rekening', formFlag.nama_bank_data_rekening)}              onSubmit={this.state.onSubmit} options={bank} /> */}

          <Selects
            name="tipeUjian"
            onChange={this.onChangeSelect}
            label="TIPE UJIAN"
            required={true}
            value={pendaftaranAAJI.tipeUjian.value}
            className="pendaftaran-aaji-tipeUjian mt-25"
            disabled={formToDisable(
              role,
              "pendaftaran-aaji-tipeUjian",
              pendaftaranAAJI.tipeUjian.disabled
            )}
            onSubmit={onSubmit}
            options={this.props.tipeUjian}
          />
          <Selects
            name="kotaUjian"
            onChange={this.onChangeSelect}
            label="KOTA UJIAN"
            required={true}
            value={pendaftaranAAJI.kotaUjian.value}
            className="pendaftaran-aaji-kotaUjian mt-25"
            disabled={formToDisable(
              role,
              "pendaftaran-aaji-kotaUjian",
              pendaftaranAAJI.kotaUjian.disabled
            )}
            onSubmit={onSubmit}
            options={this.props.kotaUjian}
          />
          <Selects
            name="lokasiUjian"
            onChange={this.onChangeSelect}
            label="LOKASI UJIAN"
            required={true}
            value={pendaftaranAAJI.lokasiUjian.value}
            className="pendaftaran-aaji-lokasiUjian mt-25"
            disabled={formToDisable(
              role,
              "pendaftaran-aaji-lokasiUjian",
              pendaftaranAAJI.lokasiUjian.disabled
            )}
            onSubmit={onSubmit}
            options={this.props.listLokasiUjian}
          />
          <Selects
            name="tanggalUjian"
            onChange={this.onChangeSelect}
            label="TANGGAL UJIAN"
            required={true}
            value={pendaftaranAAJI.tanggalUjian.value}
            className="pendaftaran-aaji-tanggalUjian mt-25"
            disabled={formToDisable(
              role,
              "pendaftaran-aaji-tanggalUjian",
              pendaftaranAAJI.tanggalUjian.disabled
            )}
            onSubmit={onSubmit}
            options={this.props.listTanggalUjian}
          />
          <Selects
            name="waktuUjian"
            onChange={this.onChangeSelect}
            label="WAKTU UJIAN"
            required={true}
            value={pendaftaranAAJI.waktuUjian.value}
            disabled={formToDisable(
              role,
              "pendaftaran-aaji-waktuUjian",
              pendaftaranAAJI.waktuUjian.disabled
            )}
            onSubmit={onSubmit}
            options={this.props.listWaktuUjian}
          />

          {(role === "kandidat" || role === "notif") && (
            <div>
              <Button
                label="SUBMIT"
                size="large"
                onClick={this.onSubmit}
                className="btn-all red mt-50"
              />
              <p>* Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          )}

          <div>
            <Button
              label="Restart"
              size="large"
              onClick={this.onRestart}
              className="btn-all red mt-50"
            />
            <p>* Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="mb-20" />
        </div>

        <ConfirmDialog
          className="pendaftaran-aaji-dialog"
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
          title="Pendaftaran AAJI anda berhasil!"
          content={this.props.dialogContent}
          btnLabel="KEMBALI"
        />
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("Store");
  console.log(JSON.stringify(state.pendaftaranAAJI.pendaftaranAAJI));
  return {
    pendaftaranAAJI: state.pendaftaranAAJI.pendaftaranAAJI,
    role: "kandidat",
    tipeUjian: [
      { value: 1, question: "UL" },
      { value: 2, question: "Syariah" },
      { value: 3, question: "Combo" }
    ],
    kotaUjian: [{ value: 1, question: "Jakarta" }],
    listLokasiUjian: [{ value: 1, question: "Jakarta" }],
    listTanggalUjian: [{ value: 1, question: "Kamis, 12 Oktober 2018" }],
    listWaktuUjian: [
      { value: 1, question: "10.00 - 12.00", desc: "(Kuata tersisa: 10/100)" },
      { value: 2, question: "13.00 - 15.00", desc: "(Kuata tersisa: 20/100)" },
      { value: 3, question: "15.00 - 17.00", desc: "(Kuata tersisa: 30/100)" }
    ],
    dialogContent: (
      // <table>
      //     <tr><td>Lokasi Ujian</td><td>: Jakarta</td></tr>
      //     <tr><td>Tanggal Ujian</td><td>: 12 Oktober 2018</td></tr>
      //     <tr><td>Waktu Ujian</td><td>: 10.00 - 12.00</td></tr>
      // </table>
      <div className="success-alert-content-pendaftaran-AAJI">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            Tipe Ujian
          </Grid>
          <Grid item xs={8}>
            :{" "}
            <span>{state.pendaftaranAAJI.pendaftaranAAJI.tipeUjian.text}</span>
          </Grid>

          <Grid item xs={4}>
            Kota Ujian
          </Grid>
          <Grid item xs={8}>
            :{" "}
            <span>{state.pendaftaranAAJI.pendaftaranAAJI.kotaUjian.text}</span>
          </Grid>

          <Grid item xs={4}>
            Lokasi Ujian
          </Grid>
          <Grid item xs={8}>
            :{" "}
            <span>
              {state.pendaftaranAAJI.pendaftaranAAJI.lokasiUjian.text}
            </span>
          </Grid>

          <Grid item xs={4}>
            Tanggal Ujian
          </Grid>
          <Grid item xs={8}>
            :{" "}
            <span>
              {state.pendaftaranAAJI.pendaftaranAAJI.tanggalUjian.text}
            </span>
          </Grid>

          <Grid item xs={4}>
            Waktu Ujian
          </Grid>
          <Grid item xs={8}>
            :{" "}
            <span>{state.pendaftaranAAJI.pendaftaranAAJI.waktuUjian.text}</span>
          </Grid>

          <Grid item xs={4} />
          <Grid item xs={8} className="not-bold">
            <span>{state.pendaftaranAAJI.pendaftaranAAJI.kuotaUjian}</span>
          </Grid>
        </Grid>
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  submitPendaftaranAAJI: value => dispatch(submitPendaftaranAAJI(value)),
  onPendaftaranAAJIGetForm: value => dispatch(onPendaftaranAAJIGetForm(value)),
  onPendataranAAJIPushForm: value => dispatch(onPendataranAAJIPushForm(value)),
  onPendaftaranAAJIToDefault: value =>
    dispatch(onPendaftaranAAJIToDefault(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendaftaranAAJI);
