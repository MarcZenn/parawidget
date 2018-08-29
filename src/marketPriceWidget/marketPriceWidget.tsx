// libs
import * as React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

// styles
import styles from './styles.css';

// components 
import Footer from '../components/footer/footer';

// types
interface Props {
    primaryColor: string
}

class MarketPrice extends React.Component<Props> {
    // TODO:: setup event listeners so that when localStorage changes refilter markets and set currentMarket in state
    // TODO:: fetch sparklines everytime state updates.


    componentDidMount() {
        // TODO:: customization props:
        // const { color } = this.props;
        // styles object - width, default width hardcoded, 
        // sparkline lib
    }



    render() {
        const { primaryColor } = this.props;
        const { 
            marketPriceWidget, 
            listTiles, 
            marketTile, 
            tile, 
            primaryBoldText, 
            secondaryLabelText, 
            sparklineTile, 
        } = styles;


        return (
        <div className={marketPriceWidget}>
            <ul className={`${listTiles}`}>
                <li className={`${tile} ${marketTile}`}>
                    <p className={primaryBoldText} style={{color: `${primaryColor}`}}>ZRX/ETH</p>
                    <span className={secondaryLabelText}>0x/Wrapped Ether</span>
                </li>
                <li className={`${tile} market-price-tile`}>
                    <p className={primaryBoldText} style={{color: `${primaryColor}`}}>0.001453</p>
                    <span className={secondaryLabelText}>
                        -0.0021 (4.7%)
                    </span>
                </li>
                <li className={`${tile} ${sparklineTile}`}>
                    <Sparklines data={['2', '8', '1', '15', '12']}>
                        <SparklinesLine
                            style={{ fill: 'none', stroke: primaryColor, strokeWidth: 4 }}
                        />
                    </Sparklines>
                </li>
            </ul>
            
            <Footer hasTopBorder={true} />
        </div>
        )
    }
}

export default MarketPrice;
