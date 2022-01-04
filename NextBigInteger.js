    const nextBigInt = (n) =>  {
        // after I spend a lot of time thinking about algorithm and how it works 
        //I realized that this exercise want us to optimize the performance 
        //and avoid brute force algorithm
        //so first of all we have to find the possible peak that can be a next bigger integer
        var firstStart;
        var flag = false;
        var nArr = n.toString().split('').map(e => +e);
        if(n<=10) return -1;
        if(nArr.length === 2 && nArr[0] < nArr[1]) return +nArr.sort((a,b) => b-a).join('');
        let tmp = Math.floor(n/Math.pow(10, nArr.length-1))
//   console.log(tmp);
        for(let i = 0; i<nArr.length; ++i) {
            if(tmp === nArr[i] ) {
                if(nArr[nArr.length-1] > nArr[nArr.length-2])
            {
                firstStart = nArr[i]
                nArr.splice(i,1);
                flag = true
                break;
        }
      else {
         firstStart = nArr[i]
          nArr.splice(i,1);
          break;
      }
    } 
    tmp++
    
  }
    console.log(firstStart, nArr.sort((a, b) => a-b))
    }
    console.log(nextBigInt(12));
