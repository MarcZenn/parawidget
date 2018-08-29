// libs
import * as React from 'react';

// styles
import styles from './styles.css';

// types
interface Props {
    text: string
}

class MarketPrice extends React.Component<Props> {
    componentDidMount() {
        // fetch market price data - make real time
        // fetch market 
        // fetch sparkinline data
        // perhaps set to state?
    }



    render() {
        // const { text } = this.props;
        // market id or market
        // styles object - width, default width hardcoded, 
        // sparkline lib
        const { 
            marketPriceWidget, 
            listTiles, 
            marketTile, 
            tile, 
            primaryBoldText, 
            secondaryLabelText, 
            sparklineTile, 
            footer
        } = styles;


        return (
        <div className={marketPriceWidget}>
            <ul className={`${listTiles}`}>
                <li className={`${tile} ${marketTile}`}>
                    <p className={primaryBoldText}>ZRX/ETH</p>
                    <span className={secondaryLabelText}>0x/Wrapped Ether</span>
                </li>
                <li className={`${tile} market-price-tile`}>
                    <p className={primaryBoldText}>0.001453</p>
                    <span className={secondaryLabelText}>
                        -0.0021 (4.7%)
                    </span>
                </li>
                <li className={`${tile} ${sparklineTile}`}>
                    <div>sparkline</div>
                </li>
            </ul>
            <div className={footer}>
                logo and share button
            </div>
        </div>
        )
    }
}

export default MarketPrice;
