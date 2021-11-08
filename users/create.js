'use strict';
const uuid = require('uuid')
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.create = async (req) => {
    const data = JSON.parse(req.body);
    const params = {
        TableName: 'users-table',
        Item: {
            id: uuid.v4(),
            name: data.name
        }
    }

    await dynamoDb
        .put(params)
        .promise()

    return {statusCode: 200}
};
