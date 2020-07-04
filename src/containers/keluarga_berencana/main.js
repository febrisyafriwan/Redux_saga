import React from "react";
import { connect } from "react-redux";
import { getAllData, addData } from "./Action";
import Table from "./component/Table";
class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      data: []
    };
  }

  componentDidMount() {}
  simpleTable() {
    return (
      <div>
        <Table />
      </div>
    );
  }
  render() {
    return <div>this.simpleTable()</div>;
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
    getAllData: value => dispatch(getAllData(value)),
    getaddDataAllData: value => dispatch(addData(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(main);
