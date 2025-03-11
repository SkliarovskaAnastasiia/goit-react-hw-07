import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

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
