import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  ViewChild,
  Output,
  ViewEncapsulation
} from "@angular/core";
import ImageEditor from "tui-image-editor";

import {
  IAddTextEvent,
  IMousedownEvent,
  IGraphicObjectProps,
  IOptions
} from "./toast-ui-image-editor.models";

import "tui-image-editor/dist/svg/icon-a.svg";
import "tui-image-editor/dist/svg/icon-b.svg";
import "tui-image-editor/dist/svg/icon-c.svg";
import "tui-image-editor/dist/svg/icon-d.svg";

enum editorEvents {
  addText = "addText",
  mousedown = "mousedown",
  objectActivated = "objectActivated",
  objectMoved = "objectMoved",
  objectScaled = "objectScaled",
  redoStackChanged = "redoStackChanged",
  textEditing = "textEditing",
  undoStackChanged = "undoStackChanged"
}
const includeUIOptions = {
  includeUI: {
    initMenu: "filter"
  }
};
const editorDefaultOptions: IOptions = {
  cssMaxWidth: 700,
  cssMaxHeight: 500
};

interface IImageEditor extends ImageEditor {
  off(eventName: string): void;
}

@Component({
  selector: "tui-image-editor",
  template: `
    <div
      #imageEditor
      id="tuiImageEditor"
      style="width: 100%;height: 100%;"
    ></div>
  `,
  styleUrls: [
    "../../../../node_modules/tui-image-editor/dist/tui-image-editor.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class ToastUiImageEditorComponent implements AfterViewInit, OnDestroy {
  @Input() includeUI = true;
  @Input() options: IOptions;

  @Output() addText = new EventEmitter<IAddTextEvent>();
  @Output() mousedown = new EventEmitter<IMousedownEvent>();
  @Output() objectActivated = new EventEmitter<IGraphicObjectProps>();
  @Output() objectMoved = new EventEmitter<IGraphicObjectProps>();
  @Output() objectScaled = new EventEmitter<IGraphicObjectProps>();
  @Output() redoStackChanged = new EventEmitter<number>();
  @Output() textEditing = new EventEmitter<void>();
  @Output() undoStackChanged = new EventEmitter<number>();

  @ViewChild("imageEditor") editorRef: ElementRef;

  editorInstance: ImageEditor;

  ngAfterViewInit() {
    let options = editorDefaultOptions;
    if (this.includeUI) {
      options = Object.assign(includeUIOptions, this.options);
    }
    this.editorInstance = new ImageEditor(
      this.editorRef.nativeElement,
      options
    );
    this.addEventListeners();
  }

  ngOnDestroy() {
    this.removeEventListeners();
    this.editorInstance.destroy();
  }

  private addEventListeners() {
    this.editorInstance.on(editorEvents.addText, event =>
      this.addText.emit(event)
    );
    this.editorInstance.on(editorEvents.mousedown, (event, originPointer) =>
      this.mousedown.emit({ event, originPointer })
    );
    this.editorInstance.on(editorEvents.objectActivated, event =>
      this.objectActivated.emit(event)
    );
    this.editorInstance.on(editorEvents.objectMoved, event =>
      this.objectMoved.emit(event)
    );
    this.editorInstance.on(editorEvents.objectScaled, event =>
      this.objectScaled.emit(event)
    );
    this.editorInstance.on(editorEvents.redoStackChanged, event =>
      this.redoStackChanged.emit(event)
    );
    this.editorInstance.on(editorEvents.textEditing, () =>
      this.textEditing.emit()
    );
    this.editorInstance.on(editorEvents.undoStackChanged, event =>
      this.undoStackChanged.emit(event)
    );
  }

  private removeEventListeners() {
    (<IImageEditor>this.editorInstance).off(editorEvents.addText);
    (<IImageEditor>this.editorInstance).off(editorEvents.mousedown);
    (<IImageEditor>this.editorInstance).off(editorEvents.objectActivated);
    (<IImageEditor>this.editorInstance).off(editorEvents.objectMoved);
    (<IImageEditor>this.editorInstance).off(editorEvents.objectScaled);
    (<IImageEditor>this.editorInstance).off(editorEvents.redoStackChanged);
    (<IImageEditor>this.editorInstance).off(editorEvents.textEditing);
    (<IImageEditor>this.editorInstance).off(editorEvents.undoStackChanged);
  }
}
