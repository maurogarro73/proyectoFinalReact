import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  console.log(idCategory);

  useEffect(() => {
    const db = getFirestore();
    let miCollection;

    if (idCategory == undefined) {
      miCollection = collection(db, 'productos');
    } else {
      miCollection = query(collection(db, 'productos'), where('idCategory', '==', idCategory));
    }

    getDocs(miCollection).then((data) => {
      const auxProducts = data.docs.map((producto) => ({ ...producto.data(), id: producto.id }));

      setProducts(auxProducts);
    });
  }, [idCategory]);

  return <ItemList products={products} />;
}
