import * as monaco from "monaco-editor-core";
import { Environment } from "monaco-editor-core/esm/vs/editor/editor.api";
import EditorWorker from "monaco-editor-core/esm/vs/editor/editor.worker?worker";

declare global {
  interface Window {
    /**
     * @see https://github.com/microsoft/monaco-editor/issues/2580
     */
    MonacoEnvironment: Environment;
  }
}

self.MonacoEnvironment = {
  getWorker() {
    return new EditorWorker();
  },
};

monaco.editor.defineTheme("t", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.lineHighlightBackground": "#88888840",
  },
});

monaco.editor.create(document.getElementById("app")!, {
  value: "Hi🌟!",
  fontSize: 20,
  minimap: { enabled: false },
  automaticLayout: true,
  language: "markdown",
  theme: "t",
});
