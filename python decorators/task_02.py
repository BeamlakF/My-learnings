# Simulate users
user1 = {'username': 'beam', 'logged_in': True}
user2 = {'username': 'guest', 'logged_in': False}

# Decorator
def require_login(func):
    def wrapper(user, *args, **kwargs):
        if not user.get('logged_in'):
            print(f"Access denied for {user.get('username')}. Please log in.")
            return None
        return func(user, *args, **kwargs)
    return wrapper

# Protected function
@require_login
def view_dashboard(user):
    print(f"Welcome to {user['username']}'s dashboard!")

# Test
view_dashboard(user1)  # ✅
view_dashboard(user2)  # ❌
