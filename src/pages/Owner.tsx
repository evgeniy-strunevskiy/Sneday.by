import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Owner.module.scss";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getOwner } from "../store/middleware/owner";
import { OwnerContent } from "./OwnerContent";
import { Loader } from "../components/UI/loader/Loader";

const cl = classNames.bind(styles);

export const Owner: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isLoading } = useAppSelector((state) => state.owner);

  useEffect(() => {
    dispatch(getOwner(id));
  }, []);

  return (
    <div className={cl("owner")}>
      <div className={cl("owner_container")}>
        {isLoading ? <Loader /> : <OwnerContent />}
      </div>
    </div>
  );
};
