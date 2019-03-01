export interface IPosition {
  x: number;
  y: number;
}

export interface IAddTextEvent {
  originPosition: IPosition;
  clientPosition: IPosition;
}

export interface IMousedownEvent {
  event: Event;
  originPointer: IPosition;
}

export interface IGraphicObjectProps {
  id?: number;
  type?: string;
  text?: string;
  left?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: string;
  textAlign?: string;
  textDecoration?: string;
  opacity?: number;
  [propName: string]: number | string | boolean;
}

export interface IOptions {
  includeUI?: IIncludeUIOptions;
  cssMaxWidth?: number;
  cssMaxHeight?: number;
  usageStatistics?: boolean;
  selectionStyle?: ISelectionStyleConfig;
}

interface ISelectionStyleConfig {
  cornerStyle?: string;
  cornerSize?: number;
  cornerColor?: string;
  cornerStrokeColor?: string;
  transparentCorners?: boolean;
  lineWidth?: number;
  borderColor?: string;
  rotatingPointOffset?: number;
}

interface IIncludeUIOptions {
  loadImage?: {
    path: string;
    name: string;
  };
  theme?: IThemeConfig;
  menu?: string[];
  initMenu?: string;
  uiSize?: {
    width: string;
    height: string;
  };
  menuBarPosition?: string;
}

interface IThemeConfig {
  "common.bi.image"?: string;
  "common.bisize.width"?: string;
  "common.bisize.height"?: string;
  "common.backgroundImage"?: string;
  "common.backgroundColor"?: string;
  "common.border"?: string;
  "header.backgroundImage"?: string;
  "header.backgroundColor"?: string;
  "header.border"?: string;
  "loadButton.backgroundColor"?: string;
  "loadButton.border"?: string;
  "loadButton.color"?: string;
  "loadButton.fontFamily"?: string;
  "loadButton.fontSize"?: string;
  "downloadButton.backgroundColor"?: string;
  "downloadButton.border"?: string;
  "downloadButton.color"?: string;
  "downloadButton.fontFamily"?: string;
  "downloadButton.fontSize"?: string;
  "menu.normalIcon.path"?: string;
  "menu.normalIcon.name"?: string;
  "menu.activeIcon.path"?: string;
  "menu.activeIcon.name"?: string;
  "menu.iconSize.width"?: string;
  "menu.iconSize.height"?: string;
  "submenu.backgroundColor"?: string;
  "submenu.partition.color"?: string;
  "submenu.normalIcon.path"?: string;
  "submenu.normalIcon.name"?: string;
  "submenu.activeIcon.path"?: string;
  "submenu.activeIcon.name"?: string;
  "submenu.iconSize.width"?: string;
  "submenu.iconSize.height"?: string;
  "submenu.normalLabel.color"?: string;
  "submenu.normalLabel.fontWeight"?: string;
  "submenu.activeLabel.color"?: string;
  "submenu.activeLabel.fontWeight"?: string;
  "checkbox.border"?: string;
  "checkbox.backgroundColor"?: string;
  "range.pointer.color"?: string;
  "range.bar.color"?: string;
  "range.subbar.color"?: string;
  "range.value.color"?: string;
  "range.value.fontWeight"?: string;
  "range.value.fontSize"?: string;
  "range.value.border"?: string;
  "range.value.backgroundColor"?: string;
  "range.title.color"?: string;
  "range.title.fontWeight"?: string;
  "colorpicker.button.border"?: string;
  "colorpicker.title.color"?: string;
}
