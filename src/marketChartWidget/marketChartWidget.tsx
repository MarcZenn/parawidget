// libs
import * as React from 'react';

// styles
import styles from './styles.css';

// components 
import MarketSelector from '../components/marketSelector/marketSelector';

// types
interface Props {
    primaryColor: string
}

// TODO:: setup event listeners so that when localStorage changes refilter markets and set currentMarket in state
// TODO:: fetch sparklines everytime state updates.
class MarketChart extends React.Component<Props> {
    componentDidMount() {
        // TODO:: customization props:
        // const { color } = this.props;
    }

    render() {
        const { primaryColor } = this.props;
        const { 
            marketChartWidget,
            marketChartWidgetHeader,
            marketChartWidgetChartWrapper,
            primaryBoldText, 
            secondaryLabelText, 
            footer
        } = styles;


        return (
        <div className={marketChartWidget}>
            <header className={marketChartWidgetHeader}>
                <div>
                    <p className={primaryBoldText} style={{color: `${primaryColor}`}}>BAT/ETH</p>
                    <span className={secondaryLabelText}>Basic Attn. Token/Ether</span>
                </div>
                <div>
                    <p className={primaryBoldText} style={{color: `${primaryColor}`}}>0.001453</p>
                    <span className={secondaryLabelText}>
                        -0.0021 (4.7%)
                    </span>
                </div>
            </header>

            <div className={marketChartWidgetChartWrapper}>
                chart goes here
            </div>

            <div className={footer}>
                logo and share button
                <MarketSelector />
            </div>
        </div>
        )
    }
}

export default MarketChart;
