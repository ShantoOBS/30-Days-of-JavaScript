/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
   

    return function(x) {
          var ans=x;
          functions.reverse();
          functions.forEach(ele => ans=ele(ans))
          return ans;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
