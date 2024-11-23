import React from 'react';
import './CurrentDate.css'

const CurrentDate = () => {
  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  return <div class="current-date-wrapper">{formattedDate}</div>;
};

export default CurrentDate;
