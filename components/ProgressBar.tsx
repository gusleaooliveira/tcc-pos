import Image from "next/image";
import React from "react";

import barraPorcentagem from "@/public/barraPorcentagem.svg";
import selo from "@/public/selo.svg";
import { MOCK_MODULES } from "@/mock/product";

const ProgressBar = () => {
  return (
    <div>
      <div className="w-full h-[92px] p-[16px] flex justify-between items-center bg-[#171717] rounded-md">
        <div className="flex flex-col w-full">
          <div>{MOCK_MODULES[0].percent}%</div>
          <div className="mt-[12px] w-full">
            <figure className="w-full">
              <Image
                src={barraPorcentagem}
                height={9}
                width={384}
                priority={true}
                alt="icon"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </figure>
          </div>
        </div>

        <div>
          <figure className="ml-[32px]">
            <Image
              src={selo}
              height={60}
              width={60}
              priority={true}
              alt="icon"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
