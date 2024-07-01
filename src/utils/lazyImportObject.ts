const lazyImportObject = async (path: string) => ({
  async lazy({ }) {

    const LazyLayout: {
      default: React.ComponentType;

    } = await import(/* @vite-ignore */ `../${path}`);
    console.log(`🚀 ~ lazy ~ LazyLayout:`, LazyLayout);
    return { Component: LazyLayout.default };
  }


});
export default lazyImportObject;