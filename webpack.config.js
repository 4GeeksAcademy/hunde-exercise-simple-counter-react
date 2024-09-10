const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex for JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
        }
      },
      // Add more loaders here if you need to load other types of files like CSS or images
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Path to your index.html file
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve these extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Directory for static files
    },
    compress: true, // Compress files
    port: 3000, // Port number for the dev server
    open: true, // Open browser automatically
    hot: true // Enable hot reloading
  }
};
