import * as monaco from "monaco-editor-core";
// @ts-ignore
import EditorWorker from "monaco-editor-core/esm/vs/editor/editor.worker?worker";

// @ts-ignore
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
