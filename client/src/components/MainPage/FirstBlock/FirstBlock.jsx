import React from 'react';

import './FirstBlock.scss';

const FirstBlock = ({ setRegisterModal }) => (
  <div className="first-block">
    <button onClick={() => setRegisterModal(true)} className="white-btn">
      <h4>Стать волонтером</h4>
    </button>
  </div>
);

export default FirstBlock;
