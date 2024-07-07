import React, { useEffect, useState } from 'react';
import { pedirItemPorId } from '../../Helpers/pedirDatos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => setItem(res));
  }, [id]);

  return (
    <Container>
      {item && <ItemDetail item={item} />}
    </Container>
  );
};

export default ItemDetailContainer;
