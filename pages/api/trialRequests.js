export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  console.log(req.body);
};
