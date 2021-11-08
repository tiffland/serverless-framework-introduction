'use strict';
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.findAll = async (req) => {
    const users = await dynamoDb.scan({TableName: 'users-table'}).promise()
    return users.Items
};
