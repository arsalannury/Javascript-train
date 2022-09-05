const _isArray = new WeakMap();

function ConverterReffrence (objectOrArray) {

   const validArrayValues = ['1','2','3','4','5','6','7','8','9','0','true','false',true,false,1,2,3,4,5,6,7,8,9,0];

    if(typeof objectOrArray !== "object" || !Array.isArray(objectOrArray)) {
        throw new Error(`type ${typeof objectOrArray} is not assignable to type Object or Array`)
    }

    if(Array.isArray(objectOrArray)) {
        let isArray = objectOrArray;
        if(isArray.length === 0) return []; 
        const r= objectOrArray.every((value) => value === 1)
        console.log(r);
        // const deleteDuplicateValues = [...new Set(objectOrArray)]; 
        // console.log(deleteDuplicateValues);
      
        // const e = objectOrArray.filter((value,index) => value.toString().includes(validArrayValues[index]));
        // console.log(e);
        
    }

}

console.log(ConverterReffrence(['1','2','r','t',2,"5","3"]));