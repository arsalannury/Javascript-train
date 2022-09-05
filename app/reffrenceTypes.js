
function ConverterReffrence (objectOrArray) {

   const validArrayValues = ['1','2','3','4','5','6','7','8','9','0','true','false',true,false,1,2,3,4,5,6,7,8,9,0];

    if(typeof objectOrArray !== "object" || !Array.isArray(objectOrArray)) {
        throw new Error(`type ${typeof objectOrArray} is not assignable to type Object or Array`);
    }
    if(objectOrArray.length === 0) return []; 

    // if(Array.isArray(objectOrArray)) {
        // let isArray = objectOrArray;
        // validArrayValues.forEach((num,index) => {
        //    const resultFilteringValues = objectOrArray.filter(value => value === num);
        // })   
        for(let iterate = 0 ; iterate <= validArrayValues.length ; iterate++) {
            const resultFilteringValues = objectOrArray.filter(value => value === validArrayValues[iterate]);
            if(iterate === validArrayValues.length) {
                console.log(resultFilteringValues) 
            }
        }     
    // }

}

console.log(ConverterReffrence(['1','2','r','t',2,"5","3"]));