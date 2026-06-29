// Intentional command-injection for the profile-default blocking-control proof.
const { exec } = require('child_process');
function handle(req, res) {
  const name = req.query.name;        // user-controlled
  exec('ls -la ' + name, (e, out) => { res.end(out); });  // command injection
}
module.exports = { handle };
