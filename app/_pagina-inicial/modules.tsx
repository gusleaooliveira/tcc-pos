import React from "react";
import { MOCK_MODULES } from "@/mock/product";
import App from "./swiper";
import { fetchModulesHome } from "@/services/hooks/modules";

export default async function Modules() {
  const modules = await fetchModulesHome();
  return (
    <>
      {modules.data.map((module, index) => (
        <div key={index}>
          <div className="flex mb-[-30px] mt-[20px] sm:mb-1 gap-2 ml-4">
            <div
              className="w-[25px] h-[25px] mt-[2px] mr-4 transform -skew-x-12 rounded-sm"
              style={{ backgroundColor: module.color }}
            />

            <p
              className="text-[20px]  font-light"
              style={{ color: module.color }}
            >
              {module.title}
            </p>
          </div>
          <App lessons={module.lessons} color={module.color} />
        </div>
      ))}
    </>
  );
}
