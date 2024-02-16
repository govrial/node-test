
/**
 * @param {Object} obj
 * @param {function} callback
 * @return {Object}
 */
const iterate = (obj, callback) => {
    const keys = Object.entries(obj)
    for (let key of keys) {
        const keyName = key[0];
        const keyVal = key[1]
        callback(keyName, keyVal)
    }
}

const obj = {
    key: 1,
    key2: 2,
    key3: 3,
}

const logged = (key, val) => console.dir({key, val})

iterate(obj, logged)
