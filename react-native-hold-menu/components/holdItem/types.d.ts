import type Animated from "react-native-reanimated";
import type { CONTEXT_MENU_STATE } from "../../constants";
import { MenuItemProps } from "../../types";
import { TransformOriginAnchorPosition } from "../../utils/calculations";

export interface HoldItemProps {
  id: string | number;
  items: MenuItemProps[];
  isActive: boolean;
  handleActivate: () => void;
  theme?: string;
  children: React.ReactElement | React.ReactElement[];
  menuAnchorPosition?: TransformOriginAnchorPosition;
  moveTop?: boolean;
}

export interface HoldItemWrapperProps {
  id: string | number;
  items: MenuItemProps[];
  children: React.ReactElement | React.ReactElement[];
  menuAnchorPosition?: TransformOriginAnchorPosition;
  moveTop?: boolean;
}