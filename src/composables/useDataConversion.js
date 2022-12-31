import { js2xml, xml2js } from "xml-js";
import { useGlobalStore } from "../store/globalStore";
import * as sub from "../assets/sub/subcategories.js";

export default function dataConversion() {
  /**
   * store
   */
  const globalStore = useGlobalStore();
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

    //construct subcategory
    const subCategories = {
      ammo: sub.ammo,
      zombies: sub.zombies,
      animals: sub.animals,
      guns: sub.guns,
      vehicles: sub.vehicles,
      "gun accesories": sub.gunAccesories,
      medical: sub.medical,
    };
    const subSearch = (name) => {
      //search each property in subCategories to see if the array contains the name. return the object key if true
      for (const [key, value] of Object.entries(subCategories)) {
        if (value.includes(name)) {
          return key;
        }
      }
      return category[0];
    };

    const subCategory = subSearch(_attributes.name);

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
      subCategory,
      tag,
      usage,
      value,
    };
    return liveEntry;
  };

  const toRealData = (data) => {
    const {
      name,
      nominal,
      lifetime,
      restock,
      min,
      quantmin,
      quantmax,
      cost,
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
    } = data;

    // Rebuild flags
    const flags = {
      count_in_cargo: countInCargo === true ? "1" : "0",
      count_in_hoarder: countInHoarder === true ? "1" : "0",
      count_in_map: countInMap === true ? "1" : "0",
      count_in_player: countInPlayer === true ? "1" : "0",
      crafted: crafted === true ? "1" : "0",
      deloot: deloot === true ? "1" : "0",
    };

    // Deconstruct array
    const deconstructArray = (array) => {
      if (array.length > 1) {
        let newArray = [];
        array.forEach((entry) => {
          newArray.push({
            _attributes: {
              name: entry,
            },
          });
        });
        return newArray;
      } else if (array.length === 1) {
        return {
          _attributes: {
            name: array[0],
          },
        };
      } else {
        return false;
      }
    };

    // Parse category
    const parsedCategory = deconstructArray(category);
    // Parse category
    const parsedTag = deconstructArray(tag);
    //parse usage
    const parsedUsage = deconstructArray(usage);
    //parse value
    const parsedValue = deconstructArray(value);

    const realEntry = {
      _attributes: {
        name: name,
      },
      nominal: {
        _text: nominal,
      },
      lifetime: {
        _text: lifetime,
      },
      restock: {
        _text: restock,
      },
      min: {
        _text: min,
      },
      quantmin: {
        _text: quantmin,
      },
      quantmax: {
        _text: quantmax,
      },
      cost: {
        _text: cost,
      },
      flags: {
        _attributes: flags,
      },
      category: parsedCategory,
      tag: parsedTag,
      usage: parsedUsage,
      value: parsedValue,
    };

    // delete unneeded properties
    if (!parsedCategory) {
      delete realEntry.category;
    }
    if (!parsedTag) {
      delete realEntry.tag;
    }
    if (!parsedUsage) {
      delete realEntry.usage;
    }
    if (!parsedValue) {
      delete realEntry.value;
    }
    return realEntry;
  };

  return {
    toJSON,
    toXML,
    toLiveData,
    toRealData,
  };
}
