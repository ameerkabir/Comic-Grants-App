import React, { Component } from "react";

class RenderGrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isActive: false
    };
  }
  togggleClass = () => {
    this.setSteat({ isActive: !this.state.isActive });
  };
  handleCopyrightString = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    console.log(this.props);
    const { grant } = this.props;
    let grantName = grant.data.name;
    let copywrittenSummary = grant.data.copywritten_summary;
    let countryName = grant.data.country_name;
    let issue = grant.data.issue;
    let amountAward = grant.data.amount_awarded;
    return (
      <div className="container">
        <div className="container card card-title">
          <div className="row ">
            <div className="col-sm card-title">{grantName}</div>
            <div
              className={
                this.state.show
                  ? "col-sm  show-on"
                  : "col-sm copy-write show-off"
              }
              onClick={this.handleCopyrightString}
            >
              {copywrittenSummary}
            </div>
            <div className="col-sm">{countryName}</div>
            <div className="col-sm"> {issue}</div>
            <div className="col-sm">{amountAward}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default RenderGrants;
