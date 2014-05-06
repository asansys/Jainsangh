var AppData = function() {
	var _endpoints,
    	_initialCards,
    	_announcements,
        _sutras,
        _private;

	_endpoints = {
		starbucksLocs: {path:"http://www.starbucks.com/api/location.ashx?&features=&lat={LAT}&long={LONG}&limit={MAX}", verb:"GET"},
		starbucksTest: {path:"scripts/testData/starbucksTest.json", verb:"GET"}
	};
    
	_initialCards = [
		
	];
    
	_announcements = [
		{ title: "Pooja Schedule", description: "Schedule for derasar pooja function.", url: "images/mahavir.jpg", pageurl: "views/pooja1.html" },
		{ title: "Sutra", description: "Easy access to all available sutra.", url: "images/jainsymbol1.jpg", pageurl: "views/sutra.html" },
		//{ title: "Lectures", description: "Click here for lectures.", url: "images/jainsangh.png",  pageurl: "views/rewardsView.html" },
		{ title: "Donations", description: "Please donate generously.", url: "images/donate.png" , pageurl: "views/donations.html" },
		
	];
        
        _sutras = [
		{  description: "Introduction",  pageurl: "http://media.jainsangh.org/sootra/01%20-%20Various%20-%20Introduction.mp3" },
{  description: "Khamaasamana Sutra",  pageurl: "http://media.jainsangh.org/sootra/02%20-%20Various%20-%20Khamaasamana%20Sutra.mp3" },
{  description: "Iriyaavahiyam Sutra",  pageurl: "http://media.jainsangh.org/sootra/03%20-%20Various%20-%20Iriyaavahiyam%20Sutra.mp3" },
{  description: "Tassa Uttari Sutra",  pageurl: "http://media.jainsangh.org/sootra/04%20-%20Various%20-%20Tassa%20Uttari%20Sutra.mp3" },
{  description: "Annatha Sutra",  pageurl: "http://media.jainsangh.org/sootra/05%20-%20Various%20-%20Annatha%20Sutra.mp3" },
{  description: "Navkar Mantra",  pageurl: "http://media.jainsangh.org/sootra/06%20-%20Various%20-%20Navkar%20Mantra.mp3" },
{  description: "Logassa Sutra",  pageurl: "http://media.jainsangh.org/sootra/07%20-%20Various%20-%20Logassa%20Sutra.mp3" },
{  description: "Khamaasamana Sutra",  pageurl: "http://media.jainsangh.org/sootra/08%20-%20Various%20-%20Khamaasamana%20Sutra.mp3" },
{  description: "Permission to Start Chaityavandan",  pageurl: "http://media.jainsangh.org/sootra/09%20-%20Various%20-%20Permission%20to%20Start%20Chaityavandan.mp3" },
{  description: "Sakalakushalavalli Sutra",  pageurl: "http://media.jainsangh.org/sootra/10%20-%20Various%20-%20Sakalakushalavalli%20Sutra.mp3" },
{  description: "Shree Mahavir Swami Chaityavandan",  pageurl: "http://media.jainsangh.org/sootra/11%20-%20Various%20-%20Shree%20Mahavir%20Swami%20Chaityavandan.mp3" },
{  description: "Jankinchi Sutra",  pageurl: "http://media.jainsangh.org/sootra/12%20-%20Various%20-%20Jankinchi%20Sutra.mp3" },
{  description: "Nammuthunam Sutra",  pageurl: "http://media.jainsangh.org/sootra/13%20-%20Various%20-%20Nammuthunam%20Sutra.mp3" },
{  description: "Jaavanti Cheiyaim Sutra",  pageurl: "http://media.jainsangh.org/sootra/14%20-%20Various%20-%20Jaavanti%20Cheiyaim%20Sutra.mp3" },
{  description: "Khamaasamana Sutra",  pageurl: "http://media.jainsangh.org/sootra/15%20-%20Various%20-%20Khamaasamana%20Sutra.mp3" },
{  description: "Jaavanta Kevi Sahu Sutra",  pageurl: "http://media.jainsangh.org/sootra/16%20-%20Various%20-%20Jaavanta%20Kevi%20Sahu%20Sutra.mp3" },
{  description: "Namorhat Sutra",  pageurl: "http://media.jainsangh.org/sootra/17%20-%20Various%20-%20Namorhat%20Sutra.mp3" },
{  description: "Shri Mahaveer Swami Stavan",  pageurl: "http://media.jainsangh.org/sootra/18%20-%20Various%20-%20Shri%20Mahaveer%20Swami%20Stavan.mp3" },
{  description: "Oovasagaharam Sutra",  pageurl: "http://media.jainsangh.org/sootra/19%20-%20Various%20-%20Oovasagaharam%20Sutra.mp3" },
{  description: "Jayaviyaraya Sutra",  pageurl: "http://media.jainsangh.org/sootra/20%20-%20Various%20-%20Jayaviyaraya%20Sutra.mp3" },
{  description: "Arihanta Cheiyanam",  pageurl: "http://media.jainsangh.org/sootra/21%20-%20Various%20-%20Arihanta%20Cheiyanam.mp3" },
{  description: "Annatha Sutra",  pageurl: "http://media.jainsangh.org/sootra/22%20-%20Various%20-%20Annatha%20Sutra.mp3" },
{  description: "Navkar Mantra",  pageurl: "http://media.jainsangh.org/sootra/23%20-%20Various%20-%20Navkar%20Mantra.mp3" },
{  description: "Namorhat Sutra",  pageurl: "http://media.jainsangh.org/sootra/24%20-%20Various%20-%20Namorhat%20Sutra.mp3" },
{  description: "Shree Mahavir Swami Stuti",  pageurl: "http://media.jainsangh.org/sootra/25%20-%20Various%20-%20Shree%20Mahavir%20Swami%20Stuti.mp3" },
{  description: "Khamaasamana Sutra",  pageurl: "http://media.jainsangh.org/sootra/26%20-%20Various%20-%20Khamaasamana%20Sutra.mp3" },
{  description: "Chattaari Mangalam",  pageurl: "http://media.jainsangh.org/sootra/27%20-%20Various%20-%20Chattaari%20Mangalam.mp3" },
{  description: "Arhanto Stuti",  pageurl: "http://media.jainsangh.org/sootra/28%20-%20Various%20-%20Arhanto%20Stuti.mp3" },
{  description: "Darshanam Stuti",  pageurl: "http://media.jainsangh.org/sootra/29%20-%20Various%20-%20Darshanam%20Stuti.mp3" },
{  description: "Mangalam Bhagwan Veero",  pageurl: "http://media.jainsangh.org/sootra/30%20-%20Various%20-%20Mangalam%20Bhagwan%20Veero.mp3" },
{  description: "Veer Sarva Sura Surendra Stuti",  pageurl: "http://media.jainsangh.org/sootra/31%20-%20Various%20-%20Veer%20Sarva%20Sura%20Surendra%20Stuti.mp3" },
{  description: "Tubhyam Namastri Stuti",  pageurl: "http://media.jainsangh.org/sootra/32%20-%20Various%20-%20Tubhyam%20Namastri%20Stuti.mp3" },
{  description: "Shri Shramana Sanghasya Shantir Bhavatu",  pageurl: "http://media.jainsangh.org/sootra/33%20-%20Various%20-%20Shri%20Shramana%20Sanghasya%20Shantir%20Bhavatu.mp3" },
{  description: "Shivamastu Stuti",  pageurl: "http://media.jainsangh.org/sootra/34%20-%20Various%20-%20Shivamastu%20Stuti.mp3" },
{  description: "Upsargah Stuti",  pageurl: "http://media.jainsangh.org/sootra/35%20-%20Various%20-%20Upsargah%20Stuti.mp3" },
{  description: "Sarvamangala Stuti",  pageurl: "http://media.jainsangh.org/sootra/36%20-%20Various%20-%20Sarvamangala%20Stuti.mp3" },
{  description: "Aavyo Sharane Stuti",  pageurl: "http://media.jainsangh.org/sootra/37%20-%20Various%20-%20Aavyo%20Sharane%20Stuti.mp3" },
{  description: "Khamemi Savva Jive",  pageurl: "http://media.jainsangh.org/sootra/38%20-%20Various%20-%20Khamemi%20Savva%20Jive.mp3" },
{  description: "Pradakshina Na Duha",  pageurl: "http://media.jainsangh.org/sootra/39%20-%20Various%20-%20Pradakshina%20Na%20Duha.mp3" },
{  description: "Jal Puja Duho",  pageurl: "http://media.jainsangh.org/sootra/40%20-%20Various%20-%20Jal%20Puja%20Duho.mp3" },
{  description: "Chandan Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/41%20-%20Various%20-%20Chandan%20Puja%20Duha.mp3" },
{  description: "Pushpa Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/42%20-%20Various%20-%20Pushpa%20Puja%20Duha.mp3" },
{  description: "Dhoop Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/43%20-%20Various%20-%20Dhoop%20Puja%20Duha.mp3" },
{  description: "Deep Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/44%20-%20Various%20-%20Deep%20Puja%20Duha.mp3" },
{  description: "Akshat Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/45%20-%20Various%20-%20Akshat%20Puja%20Duha.mp3" },
{  description: "Naivedya Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/46%20-%20Various%20-%20Naivedya%20Puja%20Duha.mp3" },
{  description: "Fal Puja Duha",  pageurl: "http://media.jainsangh.org/sootra/47%20-%20Various%20-%20Fal%20Puja%20Duha.mp3" },
{  description: "Aarti",  pageurl: "http://media.jainsangh.org/sootra/48%20-%20Various%20-%20Aarti.mp3" },
{  description: "Mangal Deevo",  pageurl: "http://media.jainsangh.org/sootra/49%20-%20Various%20-%20Mangal%20Deevo.mp3" },

     
		
	];
    
	_private = {
		load: function(route, options) {
			var path = route.path,
    			verb = route.verb,
    			dfd = new $.Deferred();

			console.log("GETTING", path, verb, options);

			//Return cached data if available (and fresh)
			if (verb === "GET" && _private.checkCache(path) === true) {
				//Return cached data
				dfd.resolve(_private.getCache(path));
			}
			else {
				//Get fresh data
				$.ajax({
					type: verb,
					url: path,
					data: options,
					dataType: "json"
				}).success(function (data, code, xhr) {
					_private.setCache(path, {
						data: data,
						expires: new Date(new Date().getTime() + (15 * 60000)) //+15min
					});
					dfd.resolve(data, code, xhr);
				}).error(function (e, r, m) {
					console.log("ERROR", e, r, m);
					dfd.reject(m);
				});
			}

			return dfd.promise();
		},
        
		checkCache: function(path) {
			var data,
			path = JSON.stringify(path);

			try {
				data = JSON.parse(localStorage.getItem(path));
                
				if (data === null || data.expires <= new Date().getTime()) {
					console.log("CACHE EMPTY", path);
					return false;
				}
			}
			catch (err) {
				console.log("CACHE CHECK ERROR", err);
				return false;
			}

			console.log("CACHE CHECK", true, path);
			return true;
		},
        
		setCache: function(path, data, expires) {
			var cache = {
				data: data,
				expires: expires
			},
			path = JSON.stringify(path);

			//TODO: Serialize JSON object to string
			localStorage.setItem(path, JSON.stringify(cache));

			console.log("CACHE SET", cache, new Date(expires), path);
		},
        
		getCache: function(path) {
			var path = JSON.stringify(path),
			cache = JSON.parse(localStorage.getItem(path));

			console.log("LOADING FROM CACHE", cache, path);

			//TODO: Deserialize JSON string
			return cache.data.data;
		}
	};

	return {
		getStarbucksLocations: function(lat, lng, max) {
			var route = $.extend({}, _endpoints.starbucksLocs);

			route.path = route.path.replace(/{LAT}/g, lat);
			route.path = route.path.replace(/{LONG}/g, lng);
			route.path = route.path.replace(/{MAX}/g, max || 10);

			if (document.location.hostname === "coffee") {
				//Test environment (localhost) - fake response
				route = $.extend({}, _endpoints.starbucksTest);
			}

			return _private.load(route, {});
		},
        
		getInitialCards: function() {
			return JSON.stringify(_initialCards);
		},
        
		getAnnouncements: function() {
			return _announcements;
		},
        getSutras: function() {
			return _sutras;
		}
	};
}