import React, { Component } from 'react';
import {getData} from '../Modules/Performance-Data';
import 'babel-polyfill'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.state.performanceData === null) {
      dataIndex = (
        <React.Fragment>
          <button onClick={this.getPerformanceData.bind(this)}>Show past Cooper entries</button>
        </React.Fragment>
      )
    } else {
      if (this.props.updateIndex === true) {
        this.getPerformanceData();
      }
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }
    return (
      <div>
        {dataIndex}
      </div>
    )
  }
}
export default DisplayPerformanceData