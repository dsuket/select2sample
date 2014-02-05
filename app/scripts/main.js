$(function(){

    var config1 = {
        tags: true,
        tokenSeparators: [",", " "],
        initSelection: function(element, callback) {
            var data = [];
            $(element.val().split(",")).each(function () {
                var val = this.split(':');
                data.push({id: val[0], text: val[1]});
            });
            callback(data);
        },
        createSearchChoice: function(term, data) {
            if ($(data).filter(function() {
              return this.text.localeCompare(term) === 0;
            }).length === 0) {
              return {
                id: term,
                text: term
              };
            }
        },
        multiple: true,
        ajax: {
            url: 'results.json',
            dataType: "json",
            data: function(term, page) {
                return {
                    q: term
                };
            },
            results: function(data, page) {
                return {
                    results: data,
                };
            }
        }
    };

    var config2 = {
        tags: true,
        tokenSeparators: [",", " "],
        initSelection: function(element, callback) {
            var data = [];
            $(element.val().split(",")).each(function () {
                var val = this.split(':');
                data.push({id: val[0], text: val[1]});
            });
            callback(data);
        },
        createSearchChoice: function(term, data) {
            if ($(data).filter(function() {
              return this.text.localeCompare(term) === 0;
            }).length === 0) {
              return {
                id: term,
                text: term
              };
            }
        },
        multiple: true,
        ajax: {
            url: 'results2.json',
            dataType: "json",
            data: function(term, page) {
                return {
                    q: term,
                    page_limit: 10, // page size
                    page: page
                };
            },
            results: function(data, page) {
                var more = (page * 10) < data.total
                return {
                    results: data.data,
                    more: more
                };
            }
        }
    };


    $("#select2-1").select2(config1);
    $("#select2-2").select2(config2);

});
