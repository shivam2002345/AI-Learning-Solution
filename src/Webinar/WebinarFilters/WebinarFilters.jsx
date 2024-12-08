import React, { useState } from 'react';
import './WebinarFilter'

const WebinarFilters = ({ onFilterChange }) => {
  const [selected, setSelected] = useState('Upcoming');

  const handleFilterChange = (filter) => {
    setSelected(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filters">
      <label>
        <input
          type="radio"
          value="Upcoming"
          checked={selected === 'Upcoming'}
          onChange={() => handleFilterChange('Upcoming')}
        />
        Upcoming
      </label>
      <label>
        <input
          type="radio"
          value="All"
          checked={selected === 'All'}
          onChange={() => handleFilterChange('All')}
        />
        All
      </label>
    </div>
  );
};

export default WebinarFilters;