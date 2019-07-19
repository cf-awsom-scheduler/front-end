export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  req.body.instrument = JSON.parse(req.body.instrument);
  console.log(req.body);
  res.send(req.body);
};
