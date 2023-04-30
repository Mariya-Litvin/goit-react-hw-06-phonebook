// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilterContacts } from 'redux/selectors';
import { FilterText, InputFilter, WrapperFilter } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);

  const handleFindName = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <WrapperFilter>
      <FilterText>Find Contacts by name</FilterText>
      <label>
        <InputFilter
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={handleFindName}
          value={filter}
        />
      </label>
    </WrapperFilter>
  );
};

// Filter.propTypes = {
//   onFindName: PropTypes.func.isRequired,
//   valueFilter: PropTypes.string.isRequired,
// };
