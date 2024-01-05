// eslint-disable-next-line
import { DynamoDB } from '@aws-sdk/client-dynamodb';
// eslint-disable-next-line
import { ScanCommand, PutCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
// eslint-disable-next-line
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

const client = new DynamoDB({
  region: 'us-west-2',
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: 'us-west-2' },
    identityPoolId: 'us-west-2:5002ba4d-7e14-4c45-9eee-2ae37ec3dc76',
  }),
});

const TABLE_NAME = 'ToDos';

// need to update getTodos, addOrUpdaterTodo, getTodoById deleteTodo,

export const getTodos = async () => {
  const command = new ScanCommand({
    TableName: TABLE_NAME,
  });
  const response = await client.send(command);
  return response;
};

export const addOrUpdateToDo = async (toDo) => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: toDo,
  });
  return client.send(command);
};

export const getToDoById = async () => { // param was id
  // const params = {
  //   TableName: TABLE_NAME,
  //   Key: {
  //     id,
  //   },
  // };
  // const retrievedToDo = await dynamoClient.get(params).promise();
  // return retrievedToDo;
};

export const deleteToDo = async (id) => {
  const command = new DeleteCommand({
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  });
  return client.send(command);
};
