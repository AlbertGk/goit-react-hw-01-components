import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  Tittle,
  BottomSection,
  LiElem,
  SpanLabel,
} from 'Styles/Statistics.styles';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer class="statistics">
      {title && <Tittle class={title}>Upload stats</Tittle>}

      <BottomSection class="stat-list">
        {stats.map(stat => (
          <LiElem key={stat.id} class="item">
            <SpanLabel class="label">{stat.label}</SpanLabel>
            <span class="percentage">{stat.percentage}</span>
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