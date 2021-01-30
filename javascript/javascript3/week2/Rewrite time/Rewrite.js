

const getPosition = (options) => 
 new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });

  getPosition()
    .then((position) => {
      console.log(position);
    })
    .catch((err) => {
      console.error(err.message);
    });
   
//################################## Rewrite setTimeout to promise #############################//

    /*const callbackFunc = (firstName, callback) => {
      setTimeout(() => {
        if (!firstName) return callback(new Error('ignore first name!'))
    
        const fullName = `${firstName} Masters`
    
        return callback(fullName)
      }, 3 * 1000)
    }
    
    callbackFunc('Ken', console.log)
    callbackFunc(null, console.log)*/

    const promiseFunc = firstName => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!firstName) reject(new Error('ignore first name!'))
    
          const fullName = `${firstName} Masters`  
    
          resolve(fullName)
        }, 3 * 1000)
      })
    }
    
    promiseFunc('Ken').then(console.log)
    promiseFunc().catch(console.log)

    