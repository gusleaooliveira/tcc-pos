import React, { Suspense } from "react";
import { SelectModules } from "../selectModules";
import { SelectLessons } from "../selectLessons";
import VideoSearch from "../videoSearch";
import { Search } from "../search";
import ClassModules from "@/components/ClassModules";
import { TagsData } from "@/resources/MOCK_TAGS";
import { Tags } from "@/components/Tags";

export const ModulesLessons = () => {
  return (
    <>
      <div className="flex flex-col w-full sm:flex-row py-[16px] px-6 md:px-16 justify-beetwen items-start gap-4">
        <div className="flex w-full justify-start items-center gap-[40px]">
          <SelectModules />
          <div className="hidden lg:flex lg:gap-2 xl:gap-4">
            {TagsData.map((item, index) => {
              return <Tags key={index} title={item.title} />;
            })}
          </div>
        </div>
        <div className="flex flex-row w-full lg:w-fit justify-center items-center gap-4">
          <div className="flex w-full justify-between gap-2 xl:hidden">
            <div className="flex justify-between w-full gap-4">
              <div className="flex w-full lg:hidden">
                <SelectLessons />
              </div>
              <div className="flex xl:hidden">
                <VideoSearch />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex w-fit">
            <Search />
          </div>
        </div>
      </div>
      <Suspense>
        <ClassModules />
      </Suspense>
    </>
  );
};
