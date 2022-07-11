import React, { FC, useEffect, useState } from "react";
import styles from "./Map.module.scss";
import classNames from "classnames/bind";
import { useAppSelector } from "../hooks/redux";
import { SectionsTypes } from "../types/sectionsTypes";
import { PointTypes } from "../types/pointsTypes";
import { Loader } from "../components/UI/loader/Loader";
import { Error } from "../components/UI/error/Error";
import { MapSquare } from "../components/MapSquare";
import { Banner } from "../components/Banner";

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
        <Banner />
        <div className={cl("map_content")}>
          {error && <Error error={error} />}
          {isLoading ? <Loader /> : <MapSquare sections={sections} />}
          <div className={cl("sidebar")}>
            <div className={cl("stock")}>
              <h1 className={cl("stock_title")}>Акция</h1>
              <p className={cl("stock_text")}>
                Приведи друга на рынок и получи скидку{" "}
              </p>
              <div className={cl("stock_percent")}>10%</div>
            </div>
            <div className={cl("marketer")}>
              <h3 className={cl("marketer_best")}>Лучший продавец</h3>
              <div className={cl("marketer_image")}>
                <img src={"./image/marketer.png"} alt="marketer" />
              </div>
              <div className={cl("marketer_content")}>
                <h3 className={cl("marketer_name")}>Ян Галеня</h3>
                <div className={cl("marketer_text")}>
                  "Самые вкусные овощи в городе ждут покутелей"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
