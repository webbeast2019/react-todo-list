import React, {SyntheticEvent, useState} from 'react';

interface IProps {
  onAdd: Function
}

const Header: React.FC<IProps> = ({onAdd}) => {
  const [value, setValue] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(false);
  
  const handleChange = (event: SyntheticEvent) => {
    const newValue = (event.target as HTMLInputElement).value;
    setValue(newValue);
    setButtonEnabled(newValue.length > 0);
  };
  
  const handleClick = () => {
    if (buttonEnabled) {
      onAdd(value);
    }
  };
  
  return (
    <header>
      <h1>My Todo list</h1>
      <input value={value} onChange={handleChange}/>
      <button onClick={handleClick}
              disabled={!buttonEnabled}>Add
      </button>
    </header>
  )
};

export default Header;