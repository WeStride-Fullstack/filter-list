import React from "react";
import { ListGroup } from "react-bootstrap";

const FoodList = (props) => {
  const { foodList } = props;
  return (
    <ListGroup className="w-50 mt-3">
      {foodList.map((food) => {
        return <ListGroup.Item>{food.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default FoodList;
