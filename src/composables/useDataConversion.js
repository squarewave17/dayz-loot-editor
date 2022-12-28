import { js2xml, xml2js } from "xml-js";
export default function dataConversion() {
  const toJSON = (data) => {
    const xml = data;
    const options = {
      compact: true,
      ignoreComment: true,
      alwaysChildren: true,
    };
    const converted = xml2js(xml, options);

    return converted;
  };

  const toXML = (data) => {
    const obj = data;
    const options = {
      compact: true,
      ignoreComment: true,
      spaces: 4,
    };
    const converted = js2xml(obj, options);
    return converted;
  };

  const toLiveData = (data, index) => {
    const {
      _attributes,
      nominal,
      lifetime,
      restock,
      min,
      quantmin,
      quantmax,
      cost,
      flags: dataFlags,
      category: dataCategory,
      tag: dataTag,
      usage: dataUsage,
      value: dataValue,
    } = data;

    //Set flag booleans
    const countInCargo =
      dataFlags._attributes.count_in_cargo === "1" ? true : false;
    const countInHoarder =
      dataFlags._attributes.count_in_hoarder === "1" ? true : false;
    const countInMap =
      dataFlags._attributes.count_in_map === "1" ? true : false;
    const countInPlayer =
      dataFlags._attributes.count_in_player === "1" ? true : false;
    const crafted = dataFlags._attributes.crafted === "1" ? true : false;
    const deloot = dataFlags._attributes.deloot === "1" ? true : false;

    //construct array

    const constructArray = (data) => {
      let newArray = [];
      if (data != undefined) {
        //if data usage is an array, loop through it ans add each entry to usage
        if (Array.isArray(data)) {
          data.forEach((entry) => {
            newArray.push(entry._attributes.name);
          });
        }
        //if data usage is an object, add it to usage
        else {
          newArray.push(data._attributes.name);
        }
      }
      return newArray;
    };

    const usage = constructArray(dataUsage);
    const tag = constructArray(dataTag);
    const value = constructArray(dataValue);
    const category = constructArray(dataCategory);

    const liveEntry = {
      id: index,
      name: _attributes.name,
      nominal: nominal._text,
      lifetime: lifetime._text,
      restock: restock._text,
      min: min._text,
      quantmin: quantmin._text,
      quantmax: quantmax._text,
      cost: cost._text,
      countInCargo,
      countInHoarder,
      countInMap,
      countInPlayer,
      crafted,
      deloot,
      category,
      tag,
      usage,
      value,
    };
    return liveEntry;
  };

  return {
    toJSON,
    toXML,
    toLiveData,
  };
}
