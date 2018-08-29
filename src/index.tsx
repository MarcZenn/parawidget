// libs
import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faCog);

// components
import MarketPrice from './marketPriceWidget/marketPriceWidget';
import MarketChart from './marketChartWidget/marketChartWidget';

// types
import { MarketPriceWidgetProps } from './types/types';


// TODO:: setup websockets
// TODO:: fetch par-api ticker feed data

// TODO:: consider storing in localStorage
// TODO:: if data already stored in localStorage do not retrieve
// TODO: access this data from components via localStorage

// TODO:: set first market as currentMarket in localStorage

// TODO:: gear icon - dropdown of all markets from which to choose from and set as current viewable market

const widgets = {
  marketPrice: {
    new: () => {
      return {
        render(props: MarketPriceWidgetProps) {
          return <MarketPrice primaryColor={props.primaryColor} />
        }
      }
    }
  },
  marketChart: {
    new: () => {
      return {
        render(props: any) {
          return <MarketChart primaryColor={props.primaryColor} />
        }
      }
    }
  }
}

export default widgets;