import React, { Component } from "react";
import { connect } from "react-redux";

class NewsItem extends Component {
  render() {
    const { article } = this.props;
    return (
      <React.Fragment>
        <div>
          <h4>{article}</h4>
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("article");
  console.log(JSON.stringify(state.news));
  return {
    article: state.news
  };
}

export default connect(mapStateToProps)(NewsItem);
