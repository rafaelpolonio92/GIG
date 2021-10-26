const amqp = require('amqplib/callback_api');
const rabbitMQ = require('../../src/rabbitMQ');

describe('rabbitMQ', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test('should pass', () => {
    const mChannel = {
      assertQueue: jest.fn(),
      sendToQueue: jest.fn(),
    };
    const mConnection = {
      createChannel: jest.fn().mockImplementation((callback) => {
        callback(null, mChannel);
      }),
      close: jest.fn(),
    };
    jest.spyOn(amqp, 'connect').mockImplementation((url, callback) => {
      callback(null, mConnection);
    });
    const data = {
      author: 'x',
      message: 'y',
    };
    rabbitMQ('message', data);
    jest.advanceTimersByTime(10000);
    expect(amqp.connect).toBeCalledWith(
      'amqp://rabbitmq',
      expect.any(Function)
    );
    expect(mConnection.createChannel).toBeCalledWith(expect.any(Function));
    expect(mChannel.sendToQueue).toBeCalledWith(
      'message',
      Buffer.from(JSON.stringify(data))
    );
  });
});
