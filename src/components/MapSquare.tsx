import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./MapSquare.module.scss";
import { MapRow } from "./MapRow";
import { SectionsTypes } from "../types/sectionsTypes";
import { SearchMap } from "../components/SearchMap";

const cl = classNames.bind(styles);

interface MapSquareTypes {
  sections: SectionsTypes;
}

export const MapSquare: FC<MapSquareTypes> = ({ sections }) => {

  return (
    <div className={cl("square")}>
      <div className={cl("square_head")}>
        <h1 className={cl("square_title")}>Карта рынка</h1>
        <SearchMap />
      </div>
      <div className={cl("square_container")}>
        {Object.entries(sections).map(([key, rows]) => (
          <MapRow key={key} rows={rows} />
        ))}
      </div>
      <div className={cl('square_footer')}>
        <ul className={cl('square_explanations')}>
          <li className={cl('square_explanation')}>
            <div className={cl('square_circle', 'square_circle__gold')}/>
            <div className={cl('square_explanationText')}>Товар есть</div>
          </li>
          <li className={cl('square_explanation')}>
            <div className={cl('square_circle', 'square_circle__white')}/>
            <div className={cl('square_explanationText')}>Товар отсутствует/не выбран</div>
          </li>
          <li className={cl('square_explanation')}>
            <div className={cl('square_circle', 'square_circle__gray')}/>
            <div className={cl('square_explanationText')}>Нет продавца</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
