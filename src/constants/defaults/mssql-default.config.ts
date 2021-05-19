import { join } from 'path';
import { LiquibaseConfig } from '../../models';

export const MSSQL_DEFAULT_CONFIG: LiquibaseConfig = {
  url: 'jdbc:sqlserver://<IP_OR_HOSTNAME>:;database=sqlserver;',
  changeLogFile: '/examples/change-log-examples/mssql/changelog.xml',
  username: 'sa',
  password: '',
  classpath: join(__dirname, '../../../drivers/mssql-jdbc-7.4.1.jre8.jar'),
};
