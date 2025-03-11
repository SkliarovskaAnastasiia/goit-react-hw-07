import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filterSlice';

export default function SearchBox() {
  const value = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label className={css.searchBoxLabel}>Find contacts by name</label>
      <input
        className={css.SearchBoxField}
        type="text"
        name="searchContact"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
