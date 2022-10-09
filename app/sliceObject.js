class CustomObject {
  static pushObjectInArray = (...object) => {
    if (object.length === 0)
      throw new Error("this function can not return value without pass argument");

    return object;
  };

  static sliceObject = (object) => {
    if(!object) {
      throw new Error("can not return anything without pass argumant")
    }
    const toArray = Object.entries(object);
    const convert = toArray.map((arr) => {
      return {
        [arr[0]]: arr[1],
      };
    });
    return convert;
  };
}
Object.prototype.CustomObject = CustomObject;
module.exports = CustomObject