# Angular Wrapper for TOAST UI Image Editor

An Angular Component wrapping [TOAST UI Image Editor](https://github.com/nhnent/tui.image-editor).

Based with ❤️ on [Toast UI Image Editor for Vue](https://github.com/nhnent/toast-ui.vue-image-editor).

## Installation

*With npm*
```sh
npm install --save ngx-tui-image-editor
```

> **If you install other packages**, you may lose dependency on fabric. You need to **reinstall the fabric**.  
    ```sh
    npm install --no-save --no-optional fabric@~1.6.7
    ```

## Use

### Import the module

```js
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ToastUiImageEditorModule } from "toast-ui-image-editor";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToastUiImageEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Use the component

The image editor will default to 100% height and width of its container. So define the height and width you want on the wrapping element.

```html
  <div style="height: 500px; width: 100%">
    <tui-image-editor></tui-image-editor>
  </div>
```

### Inputs

#### options - object
*Default:* 
```js 
{
  cssMaxWidth: 700,
  cssMaxHeight: 500
};
```

An options object passed directly to the Image Editor on initializaiton. For usage, reference the options parameter defined in the constructor in the [TOAST UI Image Editor docs](https://nhnent.github.io/tui.image-editor/latest/ImageEditor.html)

Per [TOAST UI Image Editor for Vue](https://github.com/nhnent/toast-ui.vue-image-editor)
> TOAST UI ImageEditor applies Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely TOAST UI ImageEditor is used throughout the world. It also serves as important index to determine the future course of projects. location.hostname (e.g. > “ui.toast.com") is to be collected and the sole purpose is nothing but to measure statistics on the usage. To disable GA, use the following `usageStatistics` option when creating the instance.

```js
const options = {
    ...
    usageStatistics: false
}
```

#### includeUI - boolean
*Default:*
```js
true
```

Use the UI provided by default.

### Outputs

Eight outputs that correspond to the events in the [TOAST UI Image Editor events docs](https://nhnent.github.io/tui.image-editor/latest/ImageEditor.html#event:addText)

### Accessing the editor directly.

The editor instance is a public variable on the component, and can be accessed directly using the Angular ViewChild property.

```js
import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ToastUiImageEditorComponent } from 'toast-ui-image-editor';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ToastUiImageEditorComponent) editorComponent: ToastUiImageEditorComponent;

  ngAfterViewInit() {
    console.log(this.editorComponent.editorInstance);
  }
}
```
