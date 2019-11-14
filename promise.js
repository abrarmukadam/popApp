// Tutorial promises 101

let _retrieveData = function() {
  let asyncFunction = function(resolve, reject) {
    console.log('called async function');
    setTimeout(function() {
      // to be output first
      console.log('this will fetch data after 2 seconds');
      resolve(10);
    }, 2000);
  };

  let promise = new Promise(asyncFunction);

  promise.then(function() {
    console.log('i also want to do something');
  });

  return promise;
};

let result = _retrieveData();

let functionToCallWhenSuccess = function(response) {
  console.log('call now');
  console.log(response);
};

let functionToCallWhenFailed = function() {
  console.log('failed function');
};

result.then(functionToCallWhenSuccess, functionToCallWhenFailed);

let x = 10;
let y = 20;

console.log('let me add');

console.log(x + y);

/// ApnaPromise

class ApnaPromise {
  constructor(asyncFunction) {
    asyncFunction(resolve, reject);
    this.hookResolvedFunctions = [];
    this.hookRejectedFunctions = [];
  }

  resolve(responseValues) {
    for (i = 0; i < this.hookResolvedFunctions.length; i++) {
      let func = this.hookResolvedFunctions[i];
      func(responseValues);
    }
  }

  reject(rejectValues) {
    // call each rejected functions
  }

  then(anyFunc) {
    this.hookResolvedFunctions.push(anyFunc);
  }
}

let asyncFunction = function(resolve, reject) {
  // line 54, line 57
  console.log('called async function');
  setTimeout(function() {
    // to be output first
    console.log('this will fetch data after 2 seconds');
    resolve(10);
  }, 2000);
};

let newPromise = new ApnaPromise(asyncFunction);

newPromise.then(function() {
  console.log('call this');
});
