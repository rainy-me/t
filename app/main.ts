import * as monaco from "monaco-editor-core";
// @ts-ignore
import EditorWorker from "monaco-editor-core/esm/vs/editor/editor.worker?worker";

monaco.editor.defineTheme("sqx", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.lineHighlightBackground": "#88888840",
  },
});

monaco.editor.create(document.getElementById("app"), {
  value: "Hi🌟!",
  fontSize: 20,
  minimap: { enabled: false },
  automaticLayout: true,
  language: "markdown",
  theme: "sqx",
});

// @ts-ignore
self.MonacoEnvironment = {
  getWorker() {
    return new EditorWorker();
  },
};
