// libs
import * as React from 'react';

// components
import MarketPrice from './marketPriceWidget/marketPrice';


const widgets = {
  marketPrice: {
    new: () => {
      return {
        render(props: any) {
          return <MarketPrice text={props.text} />
        }
      }
    }
  }
}

export default widgets;