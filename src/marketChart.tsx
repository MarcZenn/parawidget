// libs
import * as React from 'react';

// styles
import styles from './market_chart.css';

// types
interface Props { 
    text: string
}

class MarketChart extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.test}>
        {text}
      </div>
    )
  }
}

export default MarketChart;
