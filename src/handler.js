// Clean version: no command injection (uses a fixed safe listing, no shell).
const fs = require('fs');
function handle(req, res) {
  fs.readdir('.', (e, files) => { res.end(JSON.stringify(files || [])); });
}
module.exports = { handle };
