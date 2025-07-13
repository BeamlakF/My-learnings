users = [f"user_{i}" for i in range(1, 10001)]  # 10,000 users

def batch_users( userlist, batchsize):
    for i in range( 0, len(userlist), batchsize):
        yield userlist[i:i+ batchsize]

for batch in batch_users(users, 1000):
    print(f"length of processing batch {len(batch)} users")
