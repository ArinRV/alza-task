import React from "react";
import "./CategoryList.css";
import "../../commonStyles/commonStyles.css";

type CategoryListProps = {
  notebooksCategory: string[];
};

export const CategoryList = ({ notebooksCategory }: CategoryListProps) => {
  return (
    <div className="container">
      <div className="category-tiles">
        {notebooksCategory.map((category: string, i) => (
          <div key={i} className="category-tile">
            <a>
              <span className="h3Black">{category}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
