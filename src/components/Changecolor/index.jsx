import React, { useState } from 'react';
import PropTypes from 'prop-types';

Changecolor.propTypes = {

};

function Changecolor(props) {
    const [color, setColor] = useState('blue');
    return (
        <div>
            {color}
            <button onClick={() => setColor('red')}>change red</button>
            <button onClick={() => setColor('yellow')}>change red</button>

        </div>
    );
}

export default Changecolor;