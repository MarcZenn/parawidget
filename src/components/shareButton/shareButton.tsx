// libs
import * as React from 'react';

// styles
import styles from './styles.css';


class Footer extends React.Component {
    doSomething = () => {
        // TODO:: do w/e this share button is supposed to do
    }

    render() {
        const { shareButton } = styles;

        return (
            <button className={shareButton} onClick={this.doSomething}>
                <span>Share</span>
            </button>
        )
    }
}

export default Footer;
