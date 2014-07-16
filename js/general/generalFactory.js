(function (Factory, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.factory('generalFactory', function($http)
	{
		return {
			getMainLinks: function (data)
			{
				$http.get('scripts/json/layout.json')
				.success(data);
			}
		}

	});
}( DorianDelmontez.Factory = DorianDelmontez.Factory || {} ));