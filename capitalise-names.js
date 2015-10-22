angular.module('mymodule').filter('capitaliseName', ['$filter', function ($filter) 
    {
        return function(items) 
        {
            if(!items)
            {
                return items;
            }

            for(i=0; i<items.length; i++)
            {
                var words = items[i].Value.split(' ');

                for(j=0; j<words.length; j++)
                {
                    words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
                }

                items[i].Value = words.join(' ');

            }
            return items;

        };
    }]);
