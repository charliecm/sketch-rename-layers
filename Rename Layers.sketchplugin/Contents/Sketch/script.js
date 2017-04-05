var rename = function(context, replaceFn) {
    var selection = context.selection
    var selectionCount = [selection count]
    var doc = context.document
    if (selectionCount === 0) {
        [doc showMessage: "Please select at least one layer."];
        return;
    }
    for (var i = 0; i < selectionCount; i++) {
        var layer = selection[i],
            name = replaceFn([layer name]);
        [layer setName: name];
        [doc showMessage: 'Updated ' + selectionCount + ' layer(s)'];
    }
}

var camelCase = function(context) {
    rename(context, function(name) {
        // http://stackoverflow.com/a/2970667
        return name
            .replace(/-/g, ' ')
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return '';
                return index == 0 ? match.toLowerCase() : match.toUpperCase();
            });
    });
}

var kebabCase = function(context) {
    rename(context, function(name) {
        // https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
        return name.replace(/\s+/g, '-').toLowerCase();
    });
}
