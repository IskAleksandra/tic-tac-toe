import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ message }) => {
	return <div className={styles.inform}>{message}</div>;
};
InformationLayout.propTypes = {
	message: PropTypes.string,
};
