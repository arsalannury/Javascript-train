class CustomObject {
  static pushObjectInArray = (object) => {
    if (typeof object !== "object")
      throw new Error(`type object is not assignable to type ${object}`);

    return [object];
  };

  static sliceObject = (object) => {
    const toArray = Object.entries(object);
    const convert = toArray.map((arr) => {
      return {
        [arr[0]]: arr[1],
      };
    });
    return convert;
  };
}

// console.log(CustomObject.sliceObject({ title: "testtt", name: "arsalan" }));
// console.log(CustomObject.pushObjectInArray({title:'test'}));
