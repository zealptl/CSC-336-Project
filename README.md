# PostgreSQL Setup
## MacOS
1. Install [Homebrew](https://brew.sh/)
1. Install postgres using Homebrew: `brew install postgresql`
1. Start the postgres server: `pg_ctl -D /usr/local/var/postgres start`
1. Create the postgres role: `/usr/local/opt/postgres/bin/createuser -s postgres`
1. Create the database: `createdb sira`
1. Initialize the database with init.sql: `psql sira -f init.sql`
1. When finished running, stop the server: `pg_ctl -D /usr/local/var/postgres stop`

## Windows
1. Install [PostgreSQL 13.2](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
1. Open psql and enter the credentials for user `postgres` set in the installation process
1. Initialize the database with init.sql: `\i init.sql`
1. Connect to the database to run queries: `\c sira`
1. Quit psql with: `quit`
