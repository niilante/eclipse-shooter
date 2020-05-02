const { files } = process.env.DETA_EMULATED ? require('./mock-detalib') : require('detalib');
const fs = require('fs');

let jsFilesContent = '';
['client_main.js', 'client_helpers.js'].map(filename => {
  jsFilesContent += fs.readFileSync(filename).toString();
});
files.put('main.js', jsFilesContent);

files.put('styles.css', fs.readFileSync('styles.css'))

const homeContent = fs.readFileSync('./index.html').toString();

module.exports = {
  homeContent,
};