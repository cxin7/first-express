module.exports = {
  renderHome: function(req, res) {
    res.render('static_pages/index', {
      title: 'First Express'
    });
  },
  renderAbout: function(req, res) {
    res.render('static_pages/about', {
      title: 'I dont want to tell you'
    });
  },
  renderContact: function(req, res) {
    res.render('static_pages/contact', {
      title: 'Contact Prima'
    });
  }
};
