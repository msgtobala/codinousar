import React, { FC } from "react";
import Card2 from "@/components/Card2/Card2";
import { SectionMagazine1Props } from "./SectionMagazine1";
import Card11 from "@/components/Card11/Card11";
import Empty from "../Empty";
import { useWindowSize } from 'react-use';

export interface SectionMagazine2Props extends SectionMagazine1Props {}

const SectionMagazine2: FC<SectionMagazine2Props> = ({ posts, className }) => {
  const { width } = useWindowSize();
  const isMobile = width < 640;
  
  return (
    <div className={`nc-SectionMagazine2 ${className}`}>
      {!posts.length ? (
        <Empty />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className={`grid gap-6 ${isMobile ? 'order-1' : ''}`}>
              {posts
                .filter((_, i) => i < 3 && i > 0)
                .map((item) => {
                  return (
                    <Card11
                      ratio="aspect-w-5 aspect-h-3"
                      key={item.databaseId}
                      post={item}
                    />
                  );
                })}
            </div>
            <div className={`lg:col-span-2 ${isMobile ? 'order-0' : ''}`}>
              {posts[0] && <Card2 size="large" post={posts[0]} />}
            </div>
            <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1 ${
                isMobile ? 'order-2' : ''
              }`}>
              {posts
                .filter((_, i) => i < 5 && i >= 3)
                .map((item) => {
                  return (
                    <Card11
                      ratio="aspect-w-5 aspect-h-3"
                      key={item.databaseId}
                      post={item}
                    />
                  );
                })}
            </div>
          </div>

          {!!posts[5] && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {posts
                .filter((_, i) => i >= 5)
                .map((item) => {
                  return (
                    <Card11
                      ratio="aspect-w-5 aspect-h-3"
                      key={item.databaseId}
                      post={item}
                    />
                  );
                })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SectionMagazine2;
