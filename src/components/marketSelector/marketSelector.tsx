// libs
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styles
import styles from './styles.css';

// TODO:: get all markets from localStorage and set to state on mount
// TODO:: loop through all markets from state and render list

interface State {
    showMarketList: boolean;
}

class MarketSelector extends React.Component<{}, State> {
    state = {
        showMarketList: false
    }

    toggleMarketList = () => {
        this.setState({ showMarketList: !this.state.showMarketList });
    }

    render() {
        const { marketSelector, marketSelectorIcon, marketSelectorListContainer, marketSelectorList } = styles;
        const { showMarketList } = this.state;

        return (
            <div className={marketSelector}>
                <button className={marketSelectorIcon} onClick={this.toggleMarketList}>
                    <FontAwesomeIcon icon="cog" />
                </button>

                {showMarketList && 
                    <div className={marketSelectorListContainer}>
                        <ul className={marketSelectorList}>
                            <li>
                                first market pair 
                            </li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default MarketSelector;
