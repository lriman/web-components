import React, { useState } from 'react';
import Pagination from '../Pagination';

export default function PaginationExample(props) {
  const [active, setActive] = useState(0);

  const onChange = value => {
    setActive(value);
  };

  return <Pagination {...props} total={102} active={active} limit={8} onChange={onChange} />;
}
