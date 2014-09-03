/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	'new': function (req, res) {
		res.view();	
	},

	create: function (req, res, next) {
		
		User.create(req.params.all(), function createdUser (err, user) {
			if(err) {
				console.log(err);
				req.session.flash = {
					err: err	
				}
				return res.redirect('/user/new');
			}
			res.json[user];
		});
	},

	show: function (req, res, next) {
		
		User.findOne(req.param('id'), function foundUser (err, user) {
			
			if (err) return next(err);
			if (!user) return next();
			res.view({
				users: users	
			});
		});
	},
	
	index: function (req, res, next) {
		User.find(function foundUsers (err, users) {
			if (err) return next(err);
			if (!user) return next();
			res.view({
				user: user	
			});
		});
	},

	update: function (req, res, next) {
	
		User.update(req.param('id'), req.param.all(), function updatedUser (err) {
			if (err) {
				return res.redirect('/user/edit'+req.param('id'));
			}	
			res.redirect('/user/show/'+req.param('id'));
		});
	},

	destroy: function (req, res, next) {
	
		User.findOne(req.param('id'), function foundUser (err, user) {
		
			if (err) return next(err);
			if (!user) return next('User doesn\'t exist.');
			User.destroy(req.param('id'), function userDestroyed(err) {
				if (err) return next(err);	
			});
			res.redirect('/user');
		});
	}

};

