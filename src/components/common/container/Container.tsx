import React, {CSSProperties} from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = (props:any) => {

    return (
        <div className='main-container' style={{
            width: props.size.width,
            height: props.size.height,
            backgroundColor: props.color,
            flexDirection: 'row',
            margin: props.alignment === 'center' ? 'auto' : 0,
        }}>
            {props.children}
        </div>
    );
};

Container.defaultProps = {
    color: '#D9D9D9',
    alignment: 'center'
}

Container.propTypes = {
    size: PropTypes.object,
    color: PropTypes.string,
    alignment: PropTypes.oneOf(['center','left','right']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
}

export default Container;