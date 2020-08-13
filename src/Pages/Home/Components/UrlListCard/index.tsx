import React, { Fragment } from "react";
import "./style.scss";

export interface IQuote {
  addedBy: string;
  author: string;
  en: string;
  id: string;
  numberOfVotes: number;
  rating: number;
  source: any;
  sr: string;
  _id: string;
}

interface IUrlListCardProps {
  data: IQuote[];
}

const UrlListCard: React.FC<IUrlListCardProps> = ({ data }) => {
  return (
    <Fragment>
      {data.map((v) => {
        return (
          <div className="url-item" key={v.id}>
            <span className="url-item-label">{v.author}:</span>
            <span className="url-item-value">{v.en}</span>
          </div>
        );
      })}
    </Fragment>
  );
};

export default UrlListCard;
