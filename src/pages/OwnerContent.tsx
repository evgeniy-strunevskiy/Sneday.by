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

const cl = classNames.bind(styles);

interface Filters {
  sort: string;
  search: string;
}

interface OwnerContentProps {}

export const OwnerContent: FC<OwnerContentProps> = () => {
  const { owner, isLoading } = useAppSelector((state) => state.owner);
  const [filter, setFilter] = useState<Filters>({
    sort: "",
    search: "",
  });
  const sortedAndSearchedPosts = useItems(
    owner.vegetables,
    filter.search,
    filter.sort
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: e.target.value });
  };

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
          <div className={cl("owner_filters")}>
            <div className={cl("owner_sort")}>
              <select
                className={cl("owner_select")}
                value={filter.sort}
                onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
              >
                <option value="" disabled>
                  {"Cортировка"}
                </option>
                {[
                  { name: "По названию", value: "title" },
                  { name: "По цене ↑", value: "maxPrice" },
                  { name: "По цене ↓", value: "minPrice" },
                ].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={cl("owner_search")}>
              <input
                type="text"
                className={cl("owner_input")}
                placeholder={"Поиск..."}
                value={filter.search}
                onChange={handleSearch}
              />
            </div>
          </div>
          <Cards vegetables={sortedAndSearchedPosts} />
        </div>
      )}
    </div>
  );
};
