'use strict';
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.findOne = async (req) => {
    const {id} = req.pathParameters;
    const params = {
        TableName: 'users-table',
        Key: {
            id
        }
    }
    return dynamoDb.get(params).promise()
};
