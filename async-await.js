var promise = new Promise(function(resolve, reject) {
    reject(Error('error from promise'));
});

promise.then(function(result) {
    console.log('promise ok');
  }, function(err) {
    console.log('promise error ' + err);
  }
);


(async ()=>{
    try {
      await Promise.resolve('error')
      console.log('promise ok')
    }
    catch(ex){
      console.log(ex);
    }
  })();