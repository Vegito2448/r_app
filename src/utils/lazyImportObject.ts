const lazyImportObject = (path: string) => ({
  async lazy() {

    const LazyLayout: {
      default: React.ComponentType;

    } = await import(/* @vite-ignore */ `../${path}`);
    return { Component: LazyLayout.default };
  }
});
export default lazyImportObject;