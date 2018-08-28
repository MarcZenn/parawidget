import React, { Component } from 'react'

import widgets from 'parawidget';

export default class App extends Component {
  render () {
    const marketChart = widgets.marketChart.new();

    return (
      <div>
        {marketChart.render({text: 'ass'})}
      </div>
    )
  }
}
