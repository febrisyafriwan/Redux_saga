import React from "react";
import "./ConsistencyBonus.scss";
// import { AccountBalanceWallet } from "@material-ui/icons";
import { connect } from "react-redux";
import { getConsistencyFetch, setupParams } from "./ActionConsistencyBonus";
// import { CircularProgress } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import { injectIntl } from "react-intl";
import moment from "moment";
import {
  GET_CONSISTENCY_DATA_SUCCESS,
  GET_CONSISTENCY_DATA_FAILED
} from "./ConfigConsistencyBonus";
import img from "../../loading_spinner.gif";
class ConsistencyBonus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedQuartal: Math.ceil((new Date().getMonth() + 1) / 3),
      selectedYear: new Date().getFullYear(),
      quaterList: [],
      yearList: [2019, 2020, 2021],
      consistencyData: [
        {
          achieve_api: 0,
          target_api: 0,
          achieve_case: 0,
          target_case: 0,
          estimated_consistency: 0,
          estimation_consistency: 0,
          is_achieved: 0,
          snape_date: new Date()
        }
      ],
      snapeDate: new Date(),
      params: {
        agentNumber: "00006449"
      },
      isError: false,
      isLoading: true
    };
  }
  loadingComponent() {
    return (
      <div class="loading">
        <img src={img} alt="loading" />
      </div>
    );
  }

  numberFormat = param => {
    return (
      <CurrencyFormat
        value={param}
        displayType={"text"}
        thousandSeparator={true}
      />
    );
  };

  onChangeQuartal = e => {
    // var quartal = this.getQuartal(e)
    console.log(e);
    var quartal = e;
    this.setState({
      selectedQuartal: e,
      isLoading: false
    });
    var req = {
      agent_number: "00006449",
      quarter: "Q" + quartal,
      year: this.state.selectedYear
    };
    this.props.getConsistencyFetch(req);
  };
  onChangeYear = e => {
    console.log(e.target.value);
    this.setState({
      selectedYear: e.target.value,
      isLoading: false
    });

    var req = {
      agent_number: "00006449",
      quarter: "Q" + this.state.selectedQuartal,
      year: e.target.value
    };
    this.props.getConsistencyFetch(req);
  };
  componentDidMount() {
    // this.getData()
    let req = {
      agent_number: "00006449",
      quarter: "Q" + this.state.selectedQuartal,
      year: "1994"
    };
    this.props.getConsistencyFetch(req);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.consistencyBonus.action === GET_CONSISTENCY_DATA_SUCCESS) {
      return {
        consistencyData: props.consistencyBonus.consistencyData[0],
        yearList: state.yearList,
        isError: false
      };
    }

    if (props.consistencyBonus.action === GET_CONSISTENCY_DATA_FAILED) {
      return {
        isError: true
      };
    }
    return null;
  }

  render() {
    const {
      consistencyData,
      selectedQuartal,
      selectedYear,
      yearList,
      snapeDate,
      isError,
      isLoading
    } = this.state;
    const year = yearList.map((item, x) => {
      return <MenuItem value={item}>{item}</MenuItem>;
    });
    return (
      <div>
        <div
          className="flex space-between"
          style={{ alignItems: "center", marginBottom: "10px" }}
        >
          <div className="label">Pencapaian</div>
          <FormControl>
            <Select
              className="cust-select"
              value={selectedYear}
              onChange={e => this.onChangeYear(e)}
            >
              {year}
            </Select>
          </FormControl>
        </div>
        <div className="flex">
          <div
            onClick={() => this.onChangeQuartal("1")}
            className={
              "qpill-item " + ("1" === selectedQuartal ? "active" : "")
            }
          >
            Q1
          </div>
          <div
            onClick={() => this.onChangeQuartal("2")}
            className={
              "qpill-item " + ("2" === selectedQuartal ? "active" : "")
            }
          >
            Q2
          </div>
          <div
            onClick={() => this.onChangeQuartal("3")}
            className={
              "qpill-item " + ("3" === selectedQuartal ? "active" : "")
            }
          >
            Q3
          </div>
          <div
            onClick={() => this.onChangeQuartal("4")}
            className={
              "qpill-item " + ("4" === selectedQuartal ? "active" : "")
            }
          >
            Q4
          </div>
        </div>
        {this.props.consistencyBonus.isLoading ? (
          this.loadingComponent()
        ) : consistencyData.length === 0 ? (
          <div className="error-msg">{"Data Not Found"}</div>
        ) : (
          <div>
            <div className="update-date">
              <i>
                {"Data diperbarui " +
                  moment(snapeDate)
                    .locale("id")
                    .format("dddd, DD MMMM YYYY")}
              </i>
            </div>

            <div className="consistensy-wrapper ">
              <div className="consistensy-container">
                <div className="consistensy-item flex space-between">
                  <div className="item-desc">
                    <div className="flex space-between">
                      <div className="flex align-center">
                        <div className="item-icon">
                          <i>
                            <img
                              src={require("../../public/icon/icon-calendar.png")}
                              alt=""
                            />
                          </i>
                        </div>
                        <div className="desc-q">Net API</div>
                      </div>
                      <div className="achievement-container">
                        <div
                          className={
                            "item-achieved " +
                            (consistencyData.is_achieved === 0
                              ? "notachieved"
                              : "fullachieved")
                          }
                        >
                          {consistencyData.is_achieved === 0
                            ? "Tercapai"
                            : "Tidak Tercapai"}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginLeft: "35px" }}>
                      <div className="desc-value">
                        Rp. {this.numberFormat(consistencyData.achieve_api)} /
                        Rp. {this.numberFormat(consistencyData.target_api)}{" "}
                        <br />
                      </div>
                      <div className="prog-custom">
                        <div className="prog-base" />
                        <div
                          className="prog-fillin"
                          style={{
                            width:
                              Math.ceil(
                                (consistencyData.achieve_api /
                                  consistencyData.target_api) *
                                  100
                              ) > 100
                                ? "100%"
                                : Math.ceil(
                                    (consistencyData.achieve_api /
                                      consistencyData.target_api) *
                                      100
                                  ).toString() + "%"
                          }}
                        />
                        <div className="leftover-dec">
                          {consistencyData.achieve_api >=
                          consistencyData.target_api ? (
                            <div>{"Nilai NET API Anda sudah memenuhi"}</div>
                          ) : (
                            <div>
                              {"Anda membutuhkan Rp. "}{" "}
                              {this.numberFormat(
                                consistencyData.target_api -
                                  consistencyData.achieve_api
                              )}{" "}
                              {"lagi untuk mencapai batas minimum."} <br />
                              <i style={{ fontStyle: "italic" }}>
                                {"Tidak Termasuk"}{" "}
                                <span style={{ fontWeight: "bold" }}>PRU</span>
                                <span>Works</span>
                              </i>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="consistensy-container">
                <div className="consistensy-item flex space-between">
                  <div className="item-desc">
                    <div className="flex space-between">
                      <div className="flex align-center">
                        <div className="item-icon small">
                          <i>
                            <img
                              style={{ width: "25px" }}
                              src={require("../../public/icon/icon-estimasi.png")}
                              alt=""
                            />
                          </i>
                        </div>
                        <div className="desc-q">Net Case</div>
                      </div>
                    </div>
                    <div style={{ marginLeft: "35px" }}>
                      <div className="desc-value">
                        {consistencyData.achieve_case} /
                        {consistencyData.target_case}
                      </div>
                      <div className="prog-custom">
                        <div className="prog-base" />
                        <div
                          className="prog-fillin"
                          style={{
                            width:
                              Math.ceil(
                                (consistencyData.achieve_case /
                                  consistencyData.target_case) *
                                  100
                              ) > 100
                                ? "100%"
                                : Math.ceil(
                                    (consistencyData.achieve_case /
                                      consistencyData.target_case) *
                                      100
                                  ).toString() + "%"
                          }}
                        />
                        <div className="leftover-dec">
                          {// consistencyData[0].achieve_case >= consistencyData[0].target_case ? <Fragment>{formatMessage(MessagesId.CONSISTENCY_BONUS_NET_CASE_DESC_ACHIEVED)}</Fragment> :
                          consistencyData.achieve_case >=
                          consistencyData.target_case ? (
                            <div>{"Jumlah NET CASE Anda sudah memenuhi"}</div>
                          ) : (
                            <div>
                              {"Anda membutuhkan"}{" "}
                              {consistencyData.target_case -
                                consistencyData.achieve_case}{" "}
                              {"NET CASE lagi untuk mencapai batas minimum."}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="see-detail"
                      // onClick={() =>
                      //   this.goToDetail(selectedQuartal, selectedYear, snapeDate)
                      // }
                    >
                      Lihat Rincian
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.reducerConsistencyBonus);
  return {
    consistencyBonus: state.reducerConsistencyBonus
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
)(injectIntl(ConsistencyBonus));
