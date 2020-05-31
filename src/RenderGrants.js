import React, { Component } from "react";

class RenderGrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isActive: false
    };
  };
  //The function handles the written summary test.
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show } = this.state;
    const { grant } = this.props;
    const grantName = grant.data.name;
    const copywrittenSummary = grant.data.copywritten_summary;
    const countryName = grant.data.country_name;
    const issue = grant.data.issue;
    const amountAward = grant.data.amount_awarded;
    const MAX_CHAR = show === true ? copywrittenSummary.length : 70;
    const summary = copywrittenSummary.substring(0, MAX_CHAR);
    return (
      <tbody>
        <tr>
          <td>{grantName}</td>
          <td>{countryName}</td>
          <td>{amountAward}</td>
          <td>{issue}</td>
          <td onClick={this.toggleShow}>{summary}</td>
        </tr>
      </tbody>
    );
  };
};
export default RenderGrants;
