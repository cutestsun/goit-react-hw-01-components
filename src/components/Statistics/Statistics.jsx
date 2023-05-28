import PropTypes from 'prop-types';
import { StatItem } from 'components/StatisticsItem/StatItem';
import { StatWrap, Title, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrap>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </StatWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
