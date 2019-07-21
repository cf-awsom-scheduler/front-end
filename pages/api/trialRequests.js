export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  req.body.Availability = JSON.parse(req.body.Availability);
  console.log(req.body);
  res.send(req.body);
};
