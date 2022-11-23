import React, {useEffect, useState} from 'react';

function FilterCheckbox({onShortFolmSelect, value}) {

// const [isChecked, setIsChecked] = useState(false);
// const isCheckedStorageClass = localStorage.getItem('localStorageShort');
// console.log(isCheckedStorageClass);
// let checkboxClassName = `${isCheckedStorageClass} ? 'checkbox__switch isChecked' : 'checkbox__switch'}`;

// function onSwitchCheckbox() {
//   localStorage.setItem('localStorageShort', !isChecked)  
//   setIsChecked(!isChecked);
//   onShortFolmSelect(!isChecked);
// };



// useEffect(() => {
//   onShortFolmSelect(isChecked);
//   // localStorage.setItem('localStorageShort', isChecked)
// }, [])

// useEffect(() => {
//     if (localStorage.getItem('localStorageShort') !== ''){
//       setIsChecked(localStorage.getItem('localStorageShort'));
//     }
//     else localStorage.setItem('localStorageShort', isChecked)
//   }, [])

return (
      <section className="checkbox_custom">
        <div className="checkbox__container" onClick={onShortFolmSelect}>
          <div className={`checkbox__switch ${value ? "isChecked" : ""}`}></div>
          {/* <div className={checkboxClassName}></div> */}
        </div>
        <p className='checkbox__label'>Короткометражки</p>
      </section>
    )
}

export default FilterCheckbox;


    