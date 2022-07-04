import React, { FC, useEffect, useState } from "react";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { VegetablesTypes } from "../../../types/pointsTypes";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addFavorite } from "../../../store/middleware/addingFavorites";
import { removeFavorite } from "../../../store/middleware/removingFavorites";
import { addToCart } from "../../../store/middleware/addingToCart";
import { removeFromCart } from "../../../store/middleware/removingFromCart";
import { Input } from "../input/Input";
import { Range } from "../../Range";

const cl = classNames.bind(styles);

interface CardProps {
  vegetable: VegetablesTypes;
}
export const Card: FC<CardProps> = ({ vegetable }) => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<number>(100);
  const [weight, setWeight] = useState<number>(0);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const { favorites } = useAppSelector((state) => state.favorites);
  const { cart } = useAppSelector((state) => state.cart);
  const [isItemCart, setIsItemCart] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function handleRange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsDisable(false);
    const value = Number(e.target.value);
    setStep((state) => (state = value));
    setWeight((state) => (state = value / 1000));
  }

  const handleFavorites = () => {
    const favorite = {
      id: vegetable.id,
    };
    if (favorites.find((favorite) => favorite.id === vegetable.id)) {
      dispatch(removeFavorite(favorite.id));
    } else {
      dispatch(addFavorite(favorite));
    }
  };

  const onAddToCart = async () => {
    const price = weight * vegetable.price;
    console.log(price.toFixed(1));
    const cartItem = {
      id: vegetable.id,
      weight: weight,
      price: Number(price.toFixed(1)),
      vegetable: vegetable.vegetable,
      imgUrl: vegetable.imgUrl,
      title: vegetable.title,
      name: vegetable.name,
    };
    if (cart.find((cartItem) => cartItem.id === vegetable.id)) {
      console.log("removeCartItem");
      dispatch(removeFromCart(cartItem.id));
      setStep(0);
      setWeight(0);
      setIsItemCart(false);
      setIsDisable(true);
    } else {
      dispatch(addToCart(cartItem));
    }
  };

  useEffect(() => {
    cart.find((i) => i.id === vegetable.id)
      ? setIsItemCart(true)
      : setIsItemCart(false);
    favorites.find((i) => i.id === vegetable.id)
      ? setIsFavorite(true)
      : setIsFavorite(false);

    cart.map((cartItem) => {
      if (cartItem.id === vegetable.id) {
        setWeight(cartItem.weight);
        setStep(cartItem.weight * 1000);
      }
      return null;
    });
  }, [cart, favorites]);

  return (
    <li className={cl("card")}>
      <button onClick={handleFavorites} className={cl("card_favorite")}>
        <Heart
          className={cl("card_favoriteIcon", {
            card_favoriteIcon__active: isFavorite,
          })}
        />
      </button>
      <div className={cl("card_image")}>
        <img src={vegetable.imgUrl} alt="vegetable" />
      </div>
      <h3 className={cl("card_vegetable")}>
        {vegetable.title}{" "}
        <span className={cl("card_name")}>"{vegetable.name}"</span>
      </h3>
      <Range
        step={step}
        weight={weight}
        handleRange={handleRange}
        isItemCart={isItemCart}
      />
      <div className={cl("card_buy")}>
        <div className={cl("card_price")}>
          <div className={cl("card_price-text")}>Цена: </div>
          <div className={cl("card_sum")}>{vegetable.price}&euro; кг.</div>
        </div>
        <button
          className={cl("card_add", { card_add__true: isItemCart })}
          disabled={isItemCart === true ? false : isDisable}
          onClick={onAddToCart}
        />
      </div>
    </li>
  );
};
