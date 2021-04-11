# PostgreSQL Setup
## MacOS
1. Install [Homebrew](https://brew.sh/)
1. Install postgres using Homebrew: `brew install postgresql`
1. Start the postgres server: `pg_ctl -D /usr/local/var/postgres start`
1. Create the postgres role: `/usr/local/opt/postgres/bin/createuser -s postgres`
1. Initialize the database with init.sql: `psql postgres -f test.sql`
1. When finished running, stop the server: `pg_ctl -D /usr/local/var/postgres stop`

