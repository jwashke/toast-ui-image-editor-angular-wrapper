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
} from '@angular/core';
import ImageEditor from 'tui-image-editor';
import tuiImageEditor from 'tui-image-editor';

import 'tui-image-editor/dist/svg/icon-a.svg';
import 'tui-image-editor/dist/svg/icon-b.svg';
import 'tui-image-editor/dist/svg/icon-c.svg';
import 'tui-image-editor/dist/svg/icon-d.svg';


enum editorEvents {
  addText = 'addText',
  mousedown = 'mousedown',
  objectActivated = 'objectActivated',
  objectMoved = 'objectMoved',
  objectScaled = 'objectScaled',
  redoStackChanged = 'redoStackChanged',
  textEditing = 'textEditing',
  undoStackChanged = 'undoStackChanged'
}
const includeUIOptions = {
  includeUI: {
    initMenu: 'filter'
  }
};
const editorDefaultOptions: tuiImageEditor.IOptions = {
  cssMaxWidth: 700,
  cssMaxHeight: 500
};

interface IImageEditor extends ImageEditor {
  off(eventName: string): void;
}

@Component({
  selector: 'tui-image-editor',
  template: `
    <div #imageEditor></div>
  `,
  styleUrls: [
    '../../../../node_modules/tui-color-picker/dist/tui-color-picker.css',
    '../../../../node_modules/tui-image-editor/dist/tui-image-editor.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ToastUiImageEditorComponent implements AfterViewInit, OnDestroy {
  @Input() includeUI = true;
  @Input() options: tuiImageEditor.IOptions;

  @Output() addText = new EventEmitter<any>();
  @Output() mousedown = new EventEmitter<any>();
  @Output() objectActivated = new EventEmitter<any>();
  @Output() objectMoved = new EventEmitter<any>();
  @Output() objectScaled = new EventEmitter<any>();
  @Output() redoStackChanged = new EventEmitter<number>();
  @Output() textEditing = new EventEmitter<void>();
  @Output() undoStackChanged = new EventEmitter<number>();

  @ViewChild('imageEditor', { static: true }) editorRef: ElementRef;

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
