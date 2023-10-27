import AWS, { DynamoDB } from 'aws-sdk';

AWS.config.update({
  region: import.meta.env.VITE_AWS_DEFAULT_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new DynamoDB.DocumentClient();

const TABLE_NAME = 'ToDosV1';

export const getTodos = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const toDos = await dynamoClient.scan(params).promise();
  return toDos;
};

export const addOrUpdateToDo = async (toDo) => {
  const params = {
    TableName: TABLE_NAME,
    Item: toDo,
  };
  return dynamoClient.put(params).promise();
};

export const getToDoById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  const retrievedToDo = await dynamoClient.get(params).promise();
  return retrievedToDo;
};

export const deleteToDo = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  await dynamoClient.delete(params).promise();
};
