var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var foto;

http.createServer(function (req, res)
{
  if (req.url == '/fileupload')
  {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/Users/nicolalisci/desktop/FacePlus/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File caricato!');

        var image = fs.readFileSync(newpath);
        //new Buffer(image).toString('base64');
        foto=image.toString('base64');
        res.end("immagine in base64: "+foto);
        
        //console.log(foto); questo funziona
      return foto;
      });
      //return foto;
      console.log(foto);      
 });

  } else
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }

  //return foto;
})
//return foto;

.listen(2020);
