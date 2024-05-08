import { createContext } from "react";
import { SB_COLOR } from "../three/colors";

export type FragmentShaderColorType = {
  x: string;
  y: string;
  z: string;
};

export const ColorContext = createContext<{
  activeColor: FragmentShaderColorType;
  setColor: (color: FragmentShaderColorType) => void;
}>({
  activeColor: SB_COLOR,
  setColor: () => console.error("NOT IMPLEMENTED"),
});
