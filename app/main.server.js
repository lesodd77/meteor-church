import { Meteor } from 'meteor/meteor';
import { Migrations  } from 'meteor/precolate:migrations';

/**This is the server side entry */
Meteor.startup(() => {
Migrations.migrateTo('latest')
});
