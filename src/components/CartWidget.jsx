import React, { useContext, useEffect } from 'react';
import { cartContext } from '../CartContextComponent';

export default function CartWidget() {
  const { totalCount } = useContext(cartContext);

  return <div>🛒{totalCount}</div>;
}
