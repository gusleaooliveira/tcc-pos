"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectLessons() {
  const [selectLessons, setSelectLessons] = useState<string>("all");

  const MOCK_LESSONS = [
    {
      label: "Todas as aulas",
      value: "all",
    },
    {
      label: "Aulas concluídas",
      value: "completed",
    },
    {
      label: "Aulas não iniciadas",
      value: "not-started",
    },
    {
      label: "Em breve",
      value: "soon",
    },
  ];

  return (
    <Select
      value={selectLessons}
      onValueChange={(values: any) => setSelectLessons(values)}
      defaultValue={selectLessons}
    >
      <SelectTrigger className="w-full min-w-[210px] lg:max-w-[300px]">
        <SelectValue placeholder="Todas as aulas" />
      </SelectTrigger>
      <SelectContent>
        {MOCK_LESSONS.map((item, index) => {
          return (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
