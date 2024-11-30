import { Colors } from "../constans/colors";

export enum ButtonTypes {
  primary,
  deactive,
}

interface ButtonTypeProps {
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
}

export const buttonProperties: Record<ButtonTypes, ButtonTypeProps> = {
  [ButtonTypes.primary]: {
    backgroundColor: Colors.primary,
    textColor: "white",
  },
  [ButtonTypes.deactive]: {
    backgroundColor: Colors.background,
    textColor: "white",
  },
};
