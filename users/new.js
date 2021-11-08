'use strict';

module.exports.new = async (event) => {
    event.Records.forEach(r => {
        console.log(r.dynamodb)
    })
};
