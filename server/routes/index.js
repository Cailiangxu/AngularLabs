module.exports = (app) => {
  // GET /api
  app.get('/api', (req, res) => {
    res.sendStatus(200);
  });
};
