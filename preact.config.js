export default function(config) {
  config.module.rules.push({
    test: /\.mp3$/,
    loader: 'file-loader',
  });
  config.resolve.extensions.push('.slim');
  config.output.publicPath = '';
}