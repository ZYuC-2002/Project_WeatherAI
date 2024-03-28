import pymysql

db = pymysql.connect(host='127.0.0.1',
                     user='root',
                     password='1014',
                     database='now')

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Drop table if it already exist using execute() method.
cursor.execute("USE now")

# Create table as per requirement
sql = """CREATE TABLE NewTaipei(
    time CHAR(20) NOT NULL,
    temperature INT(10) NOT NULL
);"""

cursor.execute(sql)
print("Created table Successfull.")

# disconnect from server
db.close()