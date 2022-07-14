import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent>
        <Inject services={[Toolbar, Image, Link, QuickToolbar, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
