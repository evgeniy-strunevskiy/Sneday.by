import React, { FC, useEffect, useState } from "react";
import styles from "./Map.module.scss";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getPoints } from "../store/middleware/points";
import { SectionsTypes } from "../types/sectionsTypes";
import { PointTypes } from "../types/pointsTypes";
import { MapSquare } from "./MapSquare";

const cl = classNames.bind(styles);

export const Map: FC = () => {
  const { points, isLoading, error } = useAppSelector((state) => state.points);
  const dispatch = useAppDispatch();

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
    })
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
    dispatch(getPoints());
  }, []);

  useEffect(() => {
    getSections(points);
  }, [points]);


  return (
    <div className={cl("map")}>
      {/* <img style={{width: 50, height: 50}} src='./image/vegetmarrow.png' alt='' /> */}
      <div className={cl("map_container")}>
        {error && <h1>Ошибка загрузки данных</h1>}
        {isLoading ? <h1 className={cl('map_loading')}>Идет загрузка...</h1> :
        <MapSquare sections={sections} />
        }
      </div>
    </div>
  );
};
