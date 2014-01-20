
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('snake', { title: 'Express' });
};

exports.colors = function(req, res){
  res.render('tesat', { title: 'Express' });
};
