"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOCK_MODULES } from "@/mock/product";
import { IModule } from "@/interfaces/product";

export function SelectModules() {
  const [selectModules, setSelectModules] = useState<string>("all");
  return (
    <Select
      value={selectModules}
      onValueChange={(values: any) => setSelectModules(values)}
    >
      <SelectTrigger className="w-full min-w-[240px] lg:max-w-[300px]">
        <SelectValue placeholder="Todos os módulos" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"all"}>Todos os módulos</SelectItem>
        {MOCK_MODULES.map((item: IModule, index) => {
          return (
            <SelectItem key={index} value={item.title}>
              {item.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
