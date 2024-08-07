import React from "react";

interface ModuleWithDefault {
  default: React.ComponentType;
}

const context: Record<string, ModuleWithDefault> = import.meta.globEager(
  "/src/pages/**/*.tsx"
);

const pages = Object.keys(context).map((path) => {
  const value = context[path].default;
  return { path, value };
});

export default pages.map((page) => {
  return {
    path: page.path.split("/").pop()!.split(".")[0],
    component: page.value,
  };
});
