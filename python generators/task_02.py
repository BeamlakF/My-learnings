import mysql.connector

connection = mysql.connector.connect(
    host= 'localhost',
    user= 'root',
    password= 'hello17!',
    db= 'student_course_db'
)

cursor = connection.cursor (dictionary = True)

def stream_users( cursor, batch_size=2):
    cursor.execute("SELECT name, email FROM Students")
    while True:
        rows= cursor.fetchmany(batch_size)
        if not rows:
            break
        yield rows

for user_batch in stream_users(cursor):
    print(f"Processing batch with {len(user_batch)} users")
    for user in user_batch:
        print(user)

# Clean up
cursor.close()
connection.close()