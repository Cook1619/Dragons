#!/bin/bash

export PGPASSWORD= 'packers';

echo "Configuring dragonstachdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb was configured"