if (-1 || 0) alert( 'first' ); // will execute
if (-1 && 0) alert( 'second' ); // won't execute
if (null || -1 && 1) alert( 'third' ); // will execute