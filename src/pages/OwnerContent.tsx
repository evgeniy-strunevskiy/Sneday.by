import React, { FC, useState } from "react";
import styles from './OwnerContent.module.scss'
import classNames from "classnames/bind";
import { useAppSelector } from "../hooks/redux";
import { Card } from "../components/UI/card/Card";
import { useItems } from "../hooks/useItems";
const cl = classNames.bind(styles);
interface OwnerContentProps {}

export const OwnerContent: FC<OwnerContentProps> = () => {
  const { owner, isLoading } = useAppSelector((state) => state.owner);
  const [vegetable, setVegetable] = useState<string>('')
  const sortedAndSearchedPosts = useItems(owner.vegetables, vegetable, 'title')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVegetable(e.target.value)
  }
  
  return (
    <div>
      {isLoading ? <h1>Идет загрузка...</h1>: (
        <div className={cl("owner_content")}>
          <div className={cl("owner_info")}>
            <div className={cl("owner_name")}>
              <div className={cl("owner_title")}>
                Владелец торговой точки № {owner.id}:
              </div>
              <div className={cl("owner_owner")}>{owner.owner}</div>
              <div className={cl("owner_license")}>Лицензия: 3542343240235</div>
              <div className={cl("owner_social")}>Добавить соцсети</div>
            </div>
            <div className={cl("owner_logo")}>
              <img src="./image/company-logo.jpg" alt="" />
            </div>
          </div>
          <div className={cl("owner_search")}>
            <input type="text" className={cl("owner_input")} value={vegetable} onChange={handleSearch} />
          
          </div>
          <ul className={cl("owner_cards")}>
            {sortedAndSearchedPosts.map((vegetable) => (
                <Card key={vegetable.id} vegetable={vegetable} />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
