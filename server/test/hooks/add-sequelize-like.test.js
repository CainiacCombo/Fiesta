const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const addSequelizeLike = require('../../src/hooks/add-sequelize-like');

describe('\'add-sequelize-like\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();
  });

  it('adds sequelize wheres', async () => {
    app.use('/dummy', {
      find: async (context) => {
        assert.ok(context.sequelize);
        assert.ok(context.sequelize.where);
        Object.entries(context.query).forEach(([column, query]) => {
          assert.ok(context.sequelize.where[column]);
          assert.deepEqual(context.sequelize.where[column], query);
        });
      },
    });

    app.service('dummy').hooks({
      before: addSequelizeLike(),
    });

    await app.service('dummy').find({
      query: {
        someColumn: { $like: 'something%' },
      },
    });
  });
});
