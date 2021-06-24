import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategory(categories => [inputValue,...categories]);
        // setCategory(categories => [...categories, inputValue]);
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
};
