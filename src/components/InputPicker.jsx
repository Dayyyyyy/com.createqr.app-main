import { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';

function InputPicker({ id, label, customColor, handleQrCustom }) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const handleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='container input'>
      <div
        className='colorpicker'
        style={{ background: customColor }}
        onClick={handleShowPicker}
        ref={pickerRef}
      />
      <label htmlFor={id}>Customize {label}</label>

      {showPicker && (
        <SketchPicker
          presetColors={['#000000', '#FFFFFF']}
          color={customColor}
          onChange={handleQrCustom}
        />
      )}
    </div>
  );
}

export default InputPicker;
