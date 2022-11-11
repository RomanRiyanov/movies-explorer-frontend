import React, {useEffect, useState} from 'react';

function FilterCheckbox({onShortFolmSelect}) {

const [isChecked, setIsChecked] = useState(false);

function onSwitchCheckbox() {
    setIsChecked(!isChecked);
};

useEffect(() => {
  onShortFolmSelect(isChecked);
}, [isChecked])

return (
      <section className="checkbox_custom">
        <div className="checkbox__container" onClick={onSwitchCheckbox}>
          <div className={`checkbox__switch ${isChecked ? "isChecked" : ""}`}></div>
        </div>
        <p className='checkbox__label'>Короткометражки</p>
      </section>
    )
}

export default FilterCheckbox;


    