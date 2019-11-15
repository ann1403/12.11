let art = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "author": {
            "type": "string",
            "require": true,
        },
        "name": {
            "type": "string",
            "require": true,
        },
        "text": {
            "type": "string",
            "require": true,
        }
    }
};

module.exports = art;