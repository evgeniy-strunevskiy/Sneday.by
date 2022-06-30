import React, { FC, useEffect, useState } from "react";
import styles from "./Map.module.scss";
import classNames from "classnames/bind";
import { useAppSelector } from "../hooks/redux";
import { SectionsTypes } from "../types/sectionsTypes";
import { PointTypes } from "../types/pointsTypes";
import { MapSquare } from "./MapSquare";
import { Loader } from "../components/UI/loader/Loader";

const cl = classNames.bind(styles);

export const Map: FC = () => {
  const { points, isLoading, error } = useAppSelector((state) => state.points);

  const [sections, setSections] = useState<SectionsTypes>({
    rowOne: {
      one: [],
      two: [],
      three: [],
    },
    rowTwo: {
      one: [],
      two: [],
      three: [],
    },
  });

  const getSections = (points: PointTypes[]) => {
    setSections({
      rowOne: {
        one: [],
        two: [],
        three: [],
      },
      rowTwo: {
        one: [],
        two: [],
        three: [],
      },
    });
    points.map((item) => {
      if (item.id <= 6) {
        setSections((state) => ({
          ...state,
          rowOne: { ...state.rowOne, one: [...state.rowOne.one, item] },
        }));
      }
      if (item.id > 6 && item.id <= 12) {
        setSections((state) => ({
          ...state,
          rowOne: { ...state.rowOne, two: [...state.rowOne.two, item] },
        }));
      }
      if (item.id > 12 && item.id <= 18) {
        setSections((state) => ({
          ...state,
          rowOne: { ...state.rowOne, three: [...state.rowOne.three, item] },
        }));
      }
      if (item.id > 18 && item.id <= 24) {
        setSections((state) => ({
          ...state,
          rowTwo: { ...state.rowTwo, one: [...state.rowTwo.one, item] },
        }));
      }
      if (item.id > 24 && item.id <= 30) {
        setSections((state) => ({
          ...state,
          rowTwo: { ...state.rowTwo, two: [...state.rowTwo.two, item] },
        }));
      }
      if (item.id > 30 && item.id <= 36) {
        setSections((state) => ({
          ...state,
          rowTwo: { ...state.rowTwo, three: [...state.rowTwo.three, item] },
        }));
      }
      return null;
    });
  };

  useEffect(() => {
    getSections(points);
  }, [points]);

  return (
    <div className={cl("map")}>
      <div className={cl("map_container")}>
        <div className={cl("banner")}>
          <div className={cl("banner_content")}>
            <h1 className={cl("banner_title")}>Свежие овощи</h1>
            <ul className={cl("banner_list")}>
              <li className={cl("banner_item")}>
                Устал бегать по рядам, выбирай лучшую цену на карте
              </li>
              <li className={cl("banner_item")}>Делай заказы онлайн</li>
              <li className={cl("banner_item")}>Добавляй в избранное</li>
              <li className={cl("banner_item")}>Кушай, никого не слушай!</li>
            </ul>
          </div>
          <div className={cl("banner_image")}>
            <img src="./image/vegetables.png" alt="" />
          </div>
        </div>
        {error && <h1>Ошибка загрузки данных</h1>}
        {isLoading ? <Loader /> : <MapSquare sections={sections} />}
      </div>
    </div>
  );
};
