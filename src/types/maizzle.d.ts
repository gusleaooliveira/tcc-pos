// @ts-ignore
import { compileTemplate } from 'maizzle';

// src/types/maizzle.d.ts
declare module 'maizzle' {
  export function compileTemplate(
    templateName: string,
    data: any
  ): Promise<string>;
}
