import React, { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function ItemListContainer() {
  useEffect(() => {
    const db = getFirestore();
    const miCollection = collection(db, 'productos');

    getDocs(miCollection).then((data) => {
      console.log(data);
    });
  }, []);

  return <div>ItemListContainer</div>;
}
