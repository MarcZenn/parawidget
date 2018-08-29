import React, { Component } from 'react'

import widgets from 'parawidget';

export default class App extends Component {
  render () {
    const marketPrice = widgets.marketPrice.new();
    const marketChart = widgets.marketChart.new();

    return (
      <div>
        <div>{marketPrice.render({primaryColor: 'purple'})}</div>
        <div>{marketChart.render({primaryColor: 'pink'})}</div>
      </div>
    )
  }
}
