import React, { FC, useState } from "react";
import styles from "./OwnerContent.module.scss";
import classNames from "classnames/bind";
import { useAppSelector } from "../hooks/redux";
import { useItems } from "../hooks/useItems";
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg'
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg'
import { ReactComponent as Viber } from '../assets/icons/viber.svg'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import { Cards } from "../components/Cards";
import { Filters } from "../components/Filters";
import { IFiltersTypes } from "../types/filtersTypes";

const cl = classNames.bind(styles);

interface OwnerContentProps {}

export const OwnerContent: FC<OwnerContentProps> = () => {
  const { owner, isLoading } = useAppSelector((state) => state.owner)

  const [filter, setFilter] = useState<IFiltersTypes>({
    sort: "",
    search: "",
  });
  
  const sortedAndSearchedPosts = useItems(
    owner.vegetables,
    filter.search,
    filter.sort
  );

  return ( 
    <div>
      {isLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <div className={cl("owner_content")}>
          <div className={cl("owner_info")}>
            <div className={cl("onwer_main")}>
              <div className={cl("owner_logo")}>
                <img src="./image/owner-1.jpg" alt="" />
              </div>
              <div className={cl("social")}>
                <ul className={cl("social_list")}>
                  <li className={cl("social_item")}>
                    <a href="http://localhost:3000/" className={cl("social_link")}>
                      <Telegram />
                    </a>
                  </li>
                  <li className={cl("social_item")}>
                    <a href="http://localhost:3000/" className={cl("social_link")}>
                      <Twitter />
                    </a>
                  </li>
                  <li className={cl("social_item")}>
                    <a href="http://localhost:3000/" className={cl("social_link")}>
                      <Viber />
                    </a>
                  </li>
                  <li className={cl("social_item")}>
                    <a href="http://localhost:3000/" className={cl("social_link")}>
                      <Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cl("owner_name")}>
              <h1 className={cl("owner_owner")}>{owner.owner}</h1>
              <div className={cl("owner_title")}>
                <div className={cl("owner_title-text")}>
                  владелец торговой точки номер:
                </div>
                <div className={cl("owner_id")}>{owner.id}</div>
              </div>
              <div className={cl("owner_license")}>лицензия: не нужна</div>
            </div>
          </div>
          <Filters filter={filter} setFilter={setFilter}/>
          <Cards vegetables={sortedAndSearchedPosts} />
        </div>
      )}
    </div>
  );
};
