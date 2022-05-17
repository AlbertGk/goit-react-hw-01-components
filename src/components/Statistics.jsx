import PropTypes from 'prop-types';
import { getRandomHexColor } from '../utils/colorChanger'

import {
  StatisticsContainer,
  Tittle,
  BottomSection,
  LiElem,
  SpanLabel,
} from 'Styles/Statistics.styles';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer className="statistics">
      {title && <Tittle className={title}>Upload stats</Tittle>}

      <BottomSection className="stat-list">
        {stats.map(stat => (
          <LiElem color={getRandomHexColor()} key={stat.id} className="item">
            <SpanLabel className="label">{stat.label}</SpanLabel>
            <span className="percentage">{stat.percentage}</span>
          </LiElem>
        ))}
      </BottomSection>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};