import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 0};
  }


  tabclick(e, idx) {
    this.setState({ selectedTab: idx });
  }



  render() {
    return (
      <div className="tabs">
        <ul className="tabsbar">
        {this.props.tabs.map((tab, idx) => {
          return <li onClick={(e) => this.tabclick(e, idx)} 
            className={this.state.selectedTab === idx ? "tab selected" : "tab"}>{tab.title}</li>
        })}
        </ul>
        <article className="tabscontent">
        {this.props.tabs[this.state.selectedTab].content}
        </article>
      </div>
    )
  }

}