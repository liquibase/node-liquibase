import { join } from 'path';
import { LiquibaseConfig } from '../../models';

export const POSTGRESQL_DEFAULT_CONFIG: LiquibaseConfig = {
	url: 'jdbc:postgresql://<IP_OR_HOSTNAME>:5432/postgres',
	changeLogFile: '/examples/change-log-examples/postgresql/changelog.xml',
	username: 'postgres',
	password: 'yoursecurepassword',
	classpath: join(__dirname, 'drivers/postgresql-42.4.2.jar')
};
