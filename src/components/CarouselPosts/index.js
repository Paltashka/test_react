import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemsCarousel from "react-items-carousel";

import PostCard from "../PostCard";

import { useAction } from "../../config/utils";

import { getDataPosts } from "../../redux/actions/dataAction";

import "./CarouselPosts.css";
import "react-multi-carousel/lib/styles.css";

function CarouselPosts() {
  const { data } = useSelector((state) => state.data);
  const getDataPostsFn = useAction(getDataPosts);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    getDataPostsFn();
  }, []);

  return (
    <div className="postsBox">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button className="btnArrow btnArrowLeft"></button>}
        rightChevron={<button className="btnArrow btnArrowRight"></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {data ? (
          data.map((item) => (
            <div className="cardItem " key={item.id}>
              <PostCard title={item.title} body={item.body} id={item.id} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ItemsCarousel>
    </div>
  );
}

export default CarouselPosts;
