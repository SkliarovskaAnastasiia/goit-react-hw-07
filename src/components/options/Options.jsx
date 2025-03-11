import { CiSearch } from 'react-icons/ci';
import { PiUserPlusThin } from 'react-icons/pi';

import css from './Options.module.css';

export default function Options({ onForm, onSearchBoxbox }) {
  return (
    <ul className={css.optionsList}>
      <li>
        <button className={css.optionsBtn} type="button" onClick={onForm}>
          <PiUserPlusThin size={24} />
        </button>
      </li>
      <li>
        <button
          className={css.optionsBtn}
          type="button"
          onClick={onSearchBoxbox}
        >
          <CiSearch size={24} />
        </button>
      </li>
    </ul>
  );
}
