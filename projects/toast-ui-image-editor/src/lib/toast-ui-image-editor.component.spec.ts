import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToastUiImageEditorComponent } from "./toast-ui-image-editor.component";

describe("ToastUiImageEditorComponent", () => {
  let component: ToastUiImageEditorComponent;
  let fixture: ComponentFixture<ToastUiImageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToastUiImageEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastUiImageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
