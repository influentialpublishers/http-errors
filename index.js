/**
 * A collection of useful error objects. (maybe)
 */
function ErrorFactory(name, default_status) {
 	var HttpError = function (options) {
 		if (!(this instanceof HttpError)) {
 			return new HttpError(options);
 		}
 		options 				= options || {}
 		var parent_args	= [ options.message || name ];
 		Error.apply(this, parent_args);
 		
 		this.status 			= options.status 	|| 500;
 		this.method 			= options.method 	|| "UNKNOWN";
 		this.code					= options.code		|| "UNKNOWN";
 		this.validation 	= options.validation || {};
 		
 		if (options.obj_id) {
 			this.message += ": (" + options.obj_id + ") ";
 		}
 		if (options.obj_name) {
 			this.message += options.obj_name;
 		}
 	}
 	HttpError.name 				= name;
 	HttpError.prototype 	= Error.prototype;
 	HttpError.constructor = HttpError;
 	return HttpError;	
}
 
module.exports 	= {
	"ServerError": ErrorFactory("ServerError", 500),
	"NotFound": ErrorFactory("NotFound", 404),
	"NotAuthenticated": ErrorFactory("NotAuthenticated", 401),
	"NotAuthorized": ErrorFactory("NotAuthorized", 403)
};