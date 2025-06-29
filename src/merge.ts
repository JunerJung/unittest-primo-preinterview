const INFINITY = 999_999_999
const merge = (
    coll1: number[],
    coll2: number[],
    coll3: number[]
  ) => {
    const result: number[] = [];
    let p1 = 0; 
    let p2 = 0;
    let p3 = 0;

    const sortedCol1 = coll1.reverse()
  
    while (p1 < sortedCol1.length || p2 < coll2.length || p3 < coll3.length) {
      const val1 = p1 < sortedCol1.length ? sortedCol1[p1] : INFINITY;
      const val2 = p2 < coll2.length ? coll2[p2] : INFINITY;
      const val3 = p3 < coll3.length ? coll3[p3] : INFINITY;
  
      const minVal = Math.min(val1, val2, val3);
  
      if (minVal === INFINITY) {
        break;
      }
  
      if (minVal === val1) {
        result.push(val1);
        p1++;
      } else if (minVal === val2) {
        result.push(val2);
        p2++;
      } else {
        result.push(val3);
        p3++;
      }
    }
  
    return result;
  }

  export default merge
  