$('#demo').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8,9,10],
    callback: function (data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})