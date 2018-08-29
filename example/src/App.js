import React, { Component } from 'react'

import widgets from 'parawidget';

export default class App extends Component {
  render () {
    const marketPrice = widgets.marketPrice.new();

    return (
      <div>
        {marketPrice.render({primaryColor: 'grey'})}
      </div>
    )
  }
}
