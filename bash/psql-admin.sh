#!/bin/sh
# Written by Kyle Dinh 
# https://github.com/kyledinh/toolkit/tree/master/bash

if [ -z "$1" ]; then
	echo "******* USAGE: $0 (database/user) *******"
	echo "example where dbase and user are the same   : $0 mydb"
	echo "or if dbase and user is different           : $0 mydb user"	
	echo "this script referense files in 'sql' dir"
	exit 1
fi

dbname=$1
dbuser=$1

if [ -e "$2" ]; then
	dbuser=$2
fi

echo "Current Tables:"
psql $1 -h localhost -c "\d"
echo "  "

echo "Postgres Menu for $dbname :"
echo " ct) create tables"
echo " dt) drop tables"
echo " dd) drop database"
echo " make) make database & user"
echo " drop) drop database & user"
echo " desc) describe tables"
echo " show) shows tables & users"

read choice;
 
case $choice in
ct)
	echo "creating tables"
	psql $dbname $dbuser -h localhost < sql/create_tables.sql
	;;

dt)
	echo "dropping tables"
	psql $dbname $dbuser -h localhost < sql/drop_tables.sql
	;;

make)
	echo "creating $dbuser user"
	createuser -h localhost -S -D -R -P $dbuser

	echo "creating $dbname database"
	createdb -h localhost $dbname -O $dbuser

	psql -h localhost -c "\l"
	psql -h localhost -c "\du"
	;;

drop)
	echo "dropping user and database $dbname"
	dropdb -h localhost $dbname;
	psql -h localhost -c "DROP USER $dbuser;" 

	psql -h localhost -c "\l"
	psql -h localhost -c "\du"
	;;		

dd)	
	echo "dropping $dbname database"
	psql $dbname $dbuser -h localhost -c "DROP DATABASE '$dbname';" 
	;;

desc)
	echo "describing the tables"
	psql $dbname $dbuser -h localhost -o sql/db.description -c "SELECT table_name, column_name, data_type FROM information_schema.columns WHERE table_catalog ='$dbname' AND table_schema = 'public';" 
	;;	

show)
	psql -h localhost -c "\l"
	psql -h localhost -c "\du"
	;;

*)
	echo "** INVALID CHOICE, USAGE: ct | dt | make | dd | desc **"
	;;
esac
exit 1

#####################################
# sql/create_tables.sql
#
# CREATE TABLE users (
#    id SERIAL NOT NULL,
#    user_name VARCHAR(60),
#    user_email VARCHAR(60),
#    active BOOLEAN default 't'
# );
#
#
# sql/drop_tables.sql
#
# DROP TABLE users;
#
