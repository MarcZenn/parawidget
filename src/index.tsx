// libs
import * as React from 'react';

// components
import MarketChart from './marketChart';


const widgets = {
  marketChart: {
    new: () => {
      return {
        render(props: any) {
          return <MarketChart text={props.text} />
        }
      }
    }
  }
}

export default widgets;