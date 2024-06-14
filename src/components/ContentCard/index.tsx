/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from 'react';
import styles from './styles.module.scss';
import MockImage from '../../assets/icons/mock-image.svg';
import { useGetBasketState, useSetBasketState } from '../../redux/basket/basketSlice';

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity?: number;
}

const ContentCard = React.memo((item: IProduct) => {
  const { addToBasket, minusFromBasket } = useSetBasketState();
  const stateBasket = useGetBasketState();

  const quantityItem: number | undefined = useMemo(() => {
    const product = stateBasket.basketProducts.find((product: IProduct) => item.id === product.id);
    return product ? product.quantity : 0;
  }, [stateBasket.basketProducts, item.id]);

  const handleAddToBasket = useCallback(() => {
    addToBasket(item);
  }, [addToBasket, item]);

  const handleMinustFromBasket = useCallback(() => {
    minusFromBasket(item);
  }, [minusFromBasket, item]);

  return (
    <div className={styles.card}>
      <img alt="image" src={MockImage} />
      <div className={styles.flex}>
        <span className={styles.title}>{item.name}</span>
        <span className={styles.title}>{item.price}$</span>
      </div>
      <div className={styles.flex}>
        <button
          onClick={() => {
            if (quantityItem > 0 && quantityItem) {
              handleMinustFromBasket();
              console.log('click');
            }
          }}>
          -
        </button>
        <span>{quantityItem}</span>
        <button onClick={handleAddToBasket}>+</button>
      </div>
    </div>
  );
});

export default ContentCard;
