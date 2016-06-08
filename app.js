var Gyazo  = require('gyazo-api');
var client = new Gyazo('f7827ffa7a5853bbd9f79db62a8987114319de253de1c24de6623537ce50b9fc');

var cameralib = require('camera-usb');
var fs = require('fs');

cameralib.capture().pipe(fs.createWriteStream('out.jpg'));

setTimeout(function(){
  client.upload('out.jpg')
  .then(function(res){
    console.log(res.data.image_id);
    console.log(res.data.permalink_url);
  })
  .catch(function(err){
    console.error(err.stack);
  });
},2000);




// var tessel = require('tessel');
// var http = require('http');
// // set up camera
// var cameralib = require('camera-usb');
// // // set up ambient sensor on port A
// // var ambient = require('ambient-attx4').use(tessel.port['A']);
// //
// // // set a sound trigger
// // ambient.setSoundTrigger(0.6);

//
//
// cameralib.find(function(camera) {
//   // stream some video when sound is sensed
//   // ambient.on('sound-trigger', function(){
//     // var req = http.request({
//     //   hostname: 'example.com',
//     //     path: '/upload',
//     //     method: 'POST'
//     //   },
//     //   function (res) {
//     //     res.pipe(process.stdout)
//     //   });
//     // camera.captureStream(2000, 'mjpg').pipe(req);
//   // });
//   client.upload(camera.captureStream(2000, 'mjpg'))
//   .then(function(res){
//     console.log(res.data.image_id);
//     console.log(res.data.permalink_url);
//   })
//   .catch(function(err){
//     console.error(err.stack);
//   });
//
// });
//
// // var Gyazo  = require('gyazo-api');
// // var client = new Gyazo('ACCESS_TOKEN');
//
// // client.upload('/path/to/file.jpg')
// // .then(function(res){
// //   console.log(res.data.image_id);
// //   console.log(res.data.permalink_url);
// // })
// // .catch(function(err){
// //   console.error(err.stack);
// // });
