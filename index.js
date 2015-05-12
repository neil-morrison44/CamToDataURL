var imagesnapjs = require('imagesnapjs'),
  fs = require('fs'),
  Datauri = require('datauri'),
  dUri = new Datauri(),
  filename = "./capture.jpg",
  argv = require('minimist')(process.argv.slice(2));


var imagesnapjs = require('imagesnapjs');

fs.unlink(filename, function(){
  imagesnapjs.capture(filename, { cliflags: '-w 1'}, function(err) {

    if (argv.r !== undefined)
    {
      // raw output mode
      fs.createReadStream(filename).pipe(process.stdout);
    }
    else
    {
      // data URI outout mode
      dUri = new Datauri(filename);
      console.log(dUri.content);
  }
  });
});