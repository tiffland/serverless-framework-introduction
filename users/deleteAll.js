'use strict';
const uuid = require('uuid')
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.deleteAll = async (req) => {
    const all = await dynamoDb.scan({TableName: 'users-table'}).promise()

    for (const u of all.Items) {
        const deleteParams = {
            TableName: 'users-table',
            Key: {
                id: u.id
            }
        }
        await dynamoDb.delete(deleteParams).promise()
    }
};
