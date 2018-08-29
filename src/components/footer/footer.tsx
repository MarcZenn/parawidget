// libs
import * as React from 'react';

// components
import MarketSelector from '../marketSelector/marketSelector';
import ShareButton from '../shareButton/shareButton';

// styles
import styles from './styles.css';

// types
interface Props {
    hasTopBorder: boolean;
}

class Footer extends React.Component<Props> {
    render() {
        const { footer, topBorder, footerButtons } = styles;
        const { hasTopBorder } = this.props;

        return (
            <div className={`${footer} ${hasTopBorder && topBorder}`}>
                logo and share button
                <div className={footerButtons}>
                    <ShareButton/>
                    <MarketSelector />
                </div>
            </div>
        )
    }
}

export default Footer;
