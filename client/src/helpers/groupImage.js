const importAll = (resource) => {
  const assets = {};
  resource.keys().forEach((item, index) => {
    assets[item.replace('./', '')] = resource(item);
  });
  return assets;
};
export const images = importAll(
  require.context('assets/images', false, /\.(png|jpe?g|svg|pdf|gif)$/),
);
