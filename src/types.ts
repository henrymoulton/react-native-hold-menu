import { ViewStyle } from "react-native";
import { State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { TransformOriginAnchorPosition } from "./utils/calculations";

export interface ItemToHoldProps {
  /**
   * You are going to need pass this prop to the parent of the hold items(s) container because;
   * when you use it in different views, it is needed to know parent height and scroll value
   * to calculate correct new positions of the holded item.
   */
  containerProps: {
    height: number;
    scrollY: number;
  };

  /**
   * Function that you want to call on hold the item. You are going to need pass handler to set context menu state on. Check out the examples.
   */
  onOpenMenu: any;

  /**
   * Function that you want to call on close the context menu. You are going to need pass handler to set context menu state off. Check out the examples.
   */
  onCloseMenu: any;

  /**
   * ItemToHold needs to know if context menu should open or not.
   */
  isSelected: boolean;

  /**
   * Menu props is optional but you probably need to use it to set anchor point of context menu openning from. From top-right, top-left, bottom-center etc.
   */
  menuProps: MenuProps;

  /**
   * What do you want to render inside the hold item?
   */
  children: React.ReactNode;

  /**
   * To override the container of item(s) to hold
   */
  containerStyle?: ViewStyle | ViewStyle[];

  /**
   * To override the wrapper (parent) of item to hold
   */
  wrapperStyle?: ViewStyle | ViewStyle[];

  setHoldMenuProps?: any;
}

export type MenuBackDropMethods = {
  /**
   * Snap to the minimum provided point from `snapPoints`.
   * @type () => void
   */
  collapse: () => void;
  /**
   * Close the bottom sheet.
   * @type () => void
   */
  close: () => void;
};

export interface MenuProps {
  id: string | number;
  isActive: boolean;
  items: MenuItemProps[];
  itemHeight?: number;
  itemWidth?: number;
  anchorPosition: TransformOriginAnchorPosition;
  menuStyles?: ViewStyle;
  theme?: string;
}

export interface MenuItemProps {
  title: string;
  icon?: React.ReactNode | null;
  onPress: () => void;
}

export interface MenuBackDropProps {
  /**
   * Background color of the blured backdrop. It is dark on default
   */
  tint?: "dark" | "light";

  /**
   * If toggle is true, backdrop will be rendered and animated. If false, backdrop view will be unmounted.
   * You need to pass isSelected prop value's of hold item to this.
   */
  toggle: boolean;

  /**
   * If you want to close context menu When press de outside of the holded item, you need to suply on close handler.
   */
  onCloseMenu: any;

  /**
   * You can override container view of the menu item's styles
   */
  containerStyle?: ViewStyle;
}