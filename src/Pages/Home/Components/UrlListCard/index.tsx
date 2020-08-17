import React, { Fragment } from "react";
import "./style.scss";
import Card from "../../../../Components/Card";

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
          <Card
            className="url-item"
            key={v.id}
            title={v.author}
            bordered
            extra={v.en}
            style={{ marginTop: 8 }}
          >
            <span className="url-item-label">{v.author}:</span>
            <span className="url-item-value">{v.en}</span>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default UrlListCard;
