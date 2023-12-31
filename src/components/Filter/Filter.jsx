import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <label className={styles.filter}>
        {'Find contacts by name'}
        <input
          className={styles.filter__input}
          type="text"
          name="filter"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;