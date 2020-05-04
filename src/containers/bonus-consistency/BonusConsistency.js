import React from "react";
import "./BonusConsistency.scss";
// import { AccountBalanceWallet } from "@material-ui/icons";
import { connect } from "react-redux";
import InfoIcon from "@material-ui/icons/Info";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
  getConsistencyFetch,
  setupParams
} from "../consistency-bonus/ActionConsistencyBonus";
import { injectIntl } from "react-intl";

class BonusConsistency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTab1: true,
      isTab2: false,
      isPdf: false,
      isExcel: false,
      isEmail: false,
      isDownload: false,
      isView: false
    };
  }
  onChangeTab = e => {
    console.log(e);
    let tabChoosed = e;
    if (tabChoosed === "1") {
      this.setState({
        isTab1: true,
        isTab2: false
      });
    } else {
      this.setState({
        isTab1: false,
        isTab2: true
      });
    }
  };

  onChangeIcon = e => {
    console.log(e);
    let tabChoosed = e;

    if (tabChoosed === "1" && this.state.isDownload === false) {
      this.setState({
        isDownload: true,
        isEmail: false,
        isView: true
      });
    } else if (tabChoosed === "1" && this.state.isDownload === true) {
      this.setState({
        isDownload: false,
        isEmail: false,
        isView: false
      });
    }
    if (tabChoosed === "2" && this.state.isEmail === false) {
      this.setState({
        isDownload: false,
        isEmail: true,
        isView: true
      });
    } else if (tabChoosed === "2" && this.state.isEmail === true) {
      this.setState({
        isDownload: false,
        isEmail: false,
        isView: false
      });
    }
  };
  render() {
    const { isTab1, isTab2, isDownload, isEmail, isView } = this.state;
    return (
      <div>
        <div className="flex">
          <div
            className={"tab" + (isTab1 ? " active" : "")}
            onClick={() => this.onChangeTab("1")}
          >
            BONUS KONSISTENSI
          </div>
          <div
            className={"tab" + (isTab2 ? " active" : "")}
            onClick={() => this.onChangeTab("2")}
          >
            RIWAYAT BONUS
          </div>
        </div>

        <div className="container-statement-header">
          <div className="field">
            <div className="end-period">Periode Berakhir Q1 - 2020</div>
            <div className="agency">Agency: ESTXXXXXXXXXXXXXXX [00006449]</div>
          </div>
          <div className="icon">
            <InfoIcon style={{ fontSize: "38px" }} />
          </div>
        </div>

        <div className="container-new">
          {isView ? (
            <div className="absolutes">
              <div className="item">Ringkasan (PDF)</div>
              <div className="item">Ringkasan (Excel)</div>
            </div>
          ) : (
            <div />
          )}

          <div className="container-statement-subheader">
            <div className="field">
              <div className="total-bonus">Total Bonus Konsistensi</div>
              <div className="amount">Rp 643,050.09</div>
            </div>
            <div className="icon">
              <div
                className={"first-icon" + (isDownload ? " active" : "")}
                onClick={() => this.onChangeIcon("1")}
              >
                <GetAppIcon style={{ fontSize: "38px" }} />
              </div>
              <div
                className={"second-icon" + (isEmail ? " active" : "")}
                onClick={() => this.onChangeIcon("2")}
              >
                <MailOutlineIcon style={{ fontSize: "38px" }} />
              </div>
            </div>
          </div>
          <div className="container-statement-detail">
            <div className="field">
              <div className="detail-white no-sub">Net API</div>
              <div className="detail-white sub">RP 42,068,221.69</div>
              <div className="detail-white no-sub">Net Case</div>
              <div className="detail-white sub">3.00</div>
              <div className="detail-white no-sub">Rate Konsistensi Bonus</div>
              <div className="detail-white sub">45.00%</div>
              <div className="detail-grey">
                <div className="details no-sub">
                  Total Komisi Tahun Kedua (Jan - Mar 2020)
                </div>
              </div>
              <div className="detail-grey">
                <div className="details sub">Rp 1,429,000.20</div>
              </div>
              <div className="detail-grey">
                <div className="details no-sub">
                  Total Bonus Konsistensi Q1 Sebelum Pajak
                </div>
              </div>
              <div className="detail-grey">
                <div className="details sub">Rp 643,050.09</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.reducerConsistencyBonus);
  return {
    bonusConsistency: state.reducerConsistencyBonus
  };
}
const mapDispatchToProps = dispatch => {
  return {
    setupParams: value => dispatch(setupParams(value)),
    getConsistencyFetch: value => dispatch(getConsistencyFetch(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(BonusConsistency));
