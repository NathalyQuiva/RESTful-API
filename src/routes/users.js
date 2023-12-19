const {Router} = require('express');
const router = Router();


let fetch;
(async () => {
  const { default: fetchModule } = await import('node-fetch');
  fetch = fetchModule;
})();

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.send(users);
   
});

module.exports = router;