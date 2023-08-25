import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    const inputFilterId = nanoid();

    return (
        <>
          <label className={styles.filter}>
            {'Find contacts by name'}
            <input
              id={inputFilterId}
              className={styles.filter__input}
              type="text"
              name="filter"
              value={value}
              onChange={onChange}
            />
          </label>
        </>
      );
}

Filter.propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
  };
 
export default Filter;


