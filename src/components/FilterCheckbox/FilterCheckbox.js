import React from 'react';

function FilterCheckbox({onShortFolmSelect, value}) {

return (
      <section className="checkbox_custom">
        <div className="checkbox__container" onClick={onShortFolmSelect}>
          <div className={`checkbox__switch ${value ? "isChecked" : ""}`}></div>
        </div>
        <p className='checkbox__label'>Короткометражки</p>
      </section>
    )
}

export default FilterCheckbox;


    