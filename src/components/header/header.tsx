import React from "react";
import "./header.css";
import { ArrowLeft, Plus } from "react-feather";
import Link from "antd/es/typography/Link";
import { Tabs, TabsProps, Typography } from "antd";

export interface HeaderProps {
  items: TabsProps['items']
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className="header">
      <div className="actions">
        <Link>
          <div className="back-button">
            <ArrowLeft />
            <Typography.Text className="text">Portfolios</Typography.Text>
          </div>
        </Link>
        <div className="page-title">
          <Typography.Title style={{ margin: 0 }} level={2}>
            Amazon GREF
          </Typography.Title>
          <button className="add-building-button">
            <Plus size={20}/>
            <span className="text">Add Building</span>
          </button>
        </div>
      </div>
      <div className="tab-bar">
        <Tabs 
          defaultActiveKey="2" items={items} />
      </div>
    </div>
  );
};

export default Header;
