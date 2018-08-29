import React, { Component } from 'react'

import widgets from 'parawidget';

export default class App extends Component {
  render () {
    const marketPrice = widgets.marketPrice.new();
    const marketChart = widgets.marketChart.new();

    return (
      <div>
        <div className="example-widget">{marketPrice.render({primaryColor: 'purple'})}</div>
        <div className="example-widget">{marketChart.render({primaryColor: 'pink'})}</div>
      </div>
    )
  }
}
