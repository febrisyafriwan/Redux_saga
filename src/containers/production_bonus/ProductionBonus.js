import React from "react";
import "./ProductionBonus.scss";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CurrencyFormat from "react-currency-format";
import { format } from "date-fns";
import { injectIntl } from "react-intl";
import MessagesId from "../../public/message";
import moment from "moment";
import {
  getProductionFetch,
  getYearFetch,
  setupParams
} from "./ActionProductionBonus";
import {
  GET_PRODUCTION_DATA_SUCCESS,
  GET_PRODUCTION_DATA_FAILED,
  GET_PRODUCTION_YEAR_SUCCESS,
  GET_PRODUCTION_YEAR_FAILED
} from "./ConfigProductionBonus";
// import Offline from '../commision_calculator/component/offline/Offline'
// import MessagesId from '../../i18n/messages/MessagesId';
// import { HTTP_SERVICE } from "../../service/HttpService";
class ProductionBonus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedQuartal: Math.ceil((new Date().getMonth() + 1) / 3),
      selectedYear: "2020",
      yearList: [],
      productionData: {
        lastUpdate: new Date(),
        targetRollingPersistency: 80,
        achieveRollingPersistency: 0,
        targetApi: 90000000,
        achieveApi: 19203222,
        estimation: 520560
      },
      snapeDate: new Date(),
      params: {
        agentNumber: "00006449"
      },
      isLoading: true,

      isNotFoundAchieve: false,
      isNotFoundRolling: false,
      isNotFoundEstimation: false
    };
  }

  loadingComponentBig() {
    return (
      <div className="loading flex just-center">
        <CircularProgress color="secondary" size={50} />
      </div>
    );
  }
  loadingComponentSmall() {
    return (
      <div className="loading small flex just-center">
        <CircularProgress color="secondary" size={25} />
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
  componentDidMount() {
    const {
      intl: { formatMessage }
    } = this.props;
    // const viewData = {
    //   title: '<h2>' + formatMessage(MessagesId.CONSISTENCY_BONUS_CONSISTENCY_BONUS_ESTIMATION) + '</h2>',
    //   titleHeader: formatMessage(MessagesId.CONSISTENCY_BONUS_CONSISTENCY_BONUS_ESTIMATION),
    //   hasHeader: true,
    //   hideBackButton: false,
    //   leftBackButton: false
    // }
    // this.props.onMount({ viewData });
    let req = {
      agentNumber: this.state.params.agentNumber,
      year: this.state.selectedYear,
      isPruforce: true
    };
    this.props.getYearFetch(req);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.productionBonus.action === GET_PRODUCTION_DATA_SUCCESS) {
      return {
        productionData:
          props.productionBonus.dataEstimation.responseJSON.array[0].result,
        snapeDate:
          props.productionBonus.dataEstimation.responseJSON.array[0].result
            .lastUpdate
      };
    }

    if (props.productionBonus.action === GET_PRODUCTION_YEAR_SUCCESS) {
      return {
        isLoading: false,
        yearList: props.productionBonus.dataYear.responseJSON.array[0].result
      };
    }
    if (props.productionBonus.action === GET_PRODUCTION_YEAR_FAILED) {
      return {
        isLoading: false
      };
    }
  }

  onChangeYear = e => {
    console.log(e.target.value);
    this.setState({
      selectedYear: e.target.value
    });
    let req = {
      agentNumber: this.state.params.agentNumber,
      year: e.target.value
    };

    this.props.getProductionFetch(req);
  };

  render() {
    const {
      productionData,
      selectedYear,
      yearList,
      snapeDate,
      isLoading,
      isError,
      isNotFoundAchieve,
      isNotFoundRolling,
      isNotFoundEstimation
    } = this.state;
    const year = yearList.map((item, x) => {
      return <MenuItem value={item}>{item}</MenuItem>;
    });
    return (
      <div>
        {isLoading ? (
          this.loadingComponentBig()
        ) : this.props.productionBonus.isError ? (
          <div className="error-msg">{"ERROR"}</div>
        ) : (
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
          </div>
        )}

        {isLoading ? (
          <div />
        ) : this.props.productionBonus.isLoading ? (
          this.loadingComponentSmall()
        ) : this.props.productionBonus.isError ? (
          <div />
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

            <div className="production-wrapper ">
              <div className="production-container">
                <div className="production-item flex space-between">
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
                      {!productionData.targetApi ? (
                        <div />
                      ) : !productionData.achieveApi ? (
                        <div />
                      ) : (
                        <div className="achievement-container">
                          <div
                            className={
                              "item-achieved " +
                              (productionData.targetApi -
                                productionData.achieveApi <=
                              0
                                ? "notachieved"
                                : "fullachieved")
                            }
                          >
                            {productionData.targetApi -
                              productionData.achieveApi <=
                            0
                              ? "Tercapai"
                              : "Tidak Tercapai"}
                          </div>
                        </div>
                      )}
                    </div>

                    {!productionData.targetApi ? (
                      <div className="not-found">{"Data Not Found"}</div>
                    ) : !productionData.achieveApi ? (
                      <div className="not-found">{"Data Not Found"}</div>
                    ) : (
                      <div style={{ marginLeft: "35px" }}>
                        <div className="desc-value">
                          Rp. {this.numberFormat(productionData.achieveApi)} /
                          Rp. {this.numberFormat(productionData.targetApi)}{" "}
                          <br />
                        </div>
                        <div className="prog-custom">
                          <div className="prog-base" />
                          <div
                            className="prog-fillin"
                            style={{
                              width:
                                Math.ceil(
                                  (productionData.achieveApi /
                                    productionData.targetApi) *
                                    100
                                ) > 100
                                  ? "100%"
                                  : Math.ceil(
                                      (productionData.achieveApi /
                                        productionData.targetApi) *
                                        100
                                    ).toString() + "%"
                            }}
                          />
                          <div className="leftover-dec">
                            {productionData.achieveApi >=
                            productionData.targetApi ? (
                              <div>{"Nilai NET API Anda sudah memenuhi"}</div>
                            ) : (
                              <div>
                                {"Anda membutuhkan Rp. "}{" "}
                                {this.numberFormat(
                                  productionData.targetApi -
                                    productionData.achieveApi
                                )}{" "}
                                {"lagi untuk mencapai batas minimum."} <br />
                                <i style={{ fontStyle: "italic" }}>
                                  {"Tidak Termasuk"}{" "}
                                  <span style={{ fontWeight: "bold" }}>
                                    PRU
                                  </span>
                                  <span>Works</span>
                                </i>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="production-container">
                <div className="production-item flex space-between">
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
                        <div className="desc-q">Rolling Persistency</div>
                      </div>
                      {!productionData.targetRollingPersistency ? (
                        <div />
                      ) : !productionData.achieveRollingPersistency ? (
                        <div />
                      ) : (
                        <div className="achievement-container">
                          <div
                            className={
                              "item-achieved " +
                              (productionData.achieveRollingPersistency -
                                productionData.targetRollingPersistency >=
                              0
                                ? "notachieved"
                                : "fullachieved")
                            }
                          >
                            {productionData.achieveRollingPersistency -
                              productionData.targetRollingPersistency >=
                            0
                              ? "Tercapai"
                              : "Tidak Tercapai"}
                          </div>
                        </div>
                      )}
                    </div>

                    {!productionData.targetRollingPersistency ? (
                      <div className="not-found">{"Data Not Found"}</div>
                    ) : !productionData.achieveRollingPersistency ? (
                      <div className="not-found">{"Data Not Found"}</div>
                    ) : (
                      <div style={{ marginLeft: "35px" }}>
                        <div className="desc-value">
                          {productionData.achieveRollingPersistency} /{" "}
                          {productionData.targetRollingPersistency} (%)
                          <br />
                        </div>
                        <div className="prog-custom">
                          <div className="prog-base" />
                          <div
                            className="prog-fillin"
                            style={{
                              width:
                                Math.ceil(
                                  (productionData.achieveRollingPersistency /
                                    productionData.targetRollingPersistency) *
                                    100
                                ) > 100
                                  ? "100%"
                                  : Math.ceil(
                                      (productionData.achieveRollingPersistency /
                                        productionData.targetRollingPersistency) *
                                        100
                                    ).toString() + "%"
                            }}
                          />
                          <div className="leftover-dec">
                            {productionData.achieveRollingPersistency >=
                            productionData.targetRollingPersistency ? (
                              <div>
                                {
                                  "Nilai Rolling Persistency Anda sudah memenuhi"
                                }
                              </div>
                            ) : (
                              <div>
                                {"Anda membutuhkan"}{" "}
                                {productionData.targetRollingPersistency -
                                  productionData.achieveRollingPersistency}{" "}
                                % {"lagi untuk mencapai batas minimum."} <br />
                                {/* <i style={{ fontStyle: "italic" }}>
                                  {"Tidak Termasuk"}{" "}
                                  <span style={{ fontWeight: "bold" }}>
                                    PRU
                                  </span>
                                  <span>Works</span>
                                </i> */}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="production-container">
                <div className="production-item flex space-between">
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
                        <div className="desc-q">Estimasi</div>
                      </div>
                    </div>

                    {!productionData.estimation ? (
                      <div className="not-found">{"Data Not Found"}</div>
                    ) : (
                      <div style={{ marginLeft: "35px" }}>
                        <div className="desc-estimation">
                          Rp. {this.numberFormat(productionData.estimation)}
                          <br />
                        </div>
                        <div className="leftover-dec">
                          <div>
                            {
                              "Jumlah yang akan didapatkan jika seluruh pencapaian telah tercapai"
                            }
                          </div>
                        </div>
                      </div>
                    )}
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
  console.log(state.ReducerProductionBonus);
  return {
    productionBonus: state.ReducerProductionBonus
  };
}
const mapDispatchToProps = dispatch => {
  return {
    setupParams: value => dispatch(setupParams(value)),
    getProductionFetch: value => dispatch(getProductionFetch(value)),
    getYearFetch: value => dispatch(getYearFetch(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ProductionBonus));
