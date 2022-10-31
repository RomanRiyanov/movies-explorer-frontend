import React, {useEffect, useState, useContext} from 'react';

function FilterCheckbox() {

const [isChecked, setIsChecked] = useState(false);

function onSwitchCheckbox() {
    setIsChecked(!isChecked)
};

return (
    <div>
      <div className="checkbox_custom">
        <div className="checkbox__container" onClick={onSwitchCheckbox}>
          <div className={`checkbox__switch ${isChecked ? "isChecked" : ""}`}></div>
        </div>
        <p className='checkbox__label'>Короткометражки</p>
      </div>
    </div>
    )
}

export default FilterCheckbox;


    