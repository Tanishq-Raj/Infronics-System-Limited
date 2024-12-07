const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

// Create database connection
const db = new sqlite3.Database(path.join(__dirname, 'users.db'), (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to SQLite database');
        // Create users table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    }
});

// User registration
const registerUser = async (username, email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return new Promise((resolve, reject) => {
            db.run(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [username, email, hashedPassword],
                function(err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ id: this.lastID });
                    }
                }
            );
        });
    } catch (error) {
        throw error;
    }
};

// User login
const loginUser = async (email, password) => {
    return new Promise((resolve, reject) => {
        db.get(
            'SELECT * FROM users WHERE email = ?',
            [email],
            async (err, user) => {
                if (err) {
                    reject(err);
                } else if (!user) {
                    reject(new Error('User not found'));
                } else {
                    const match = await bcrypt.compare(password, user.password);
                    if (match) {
                        resolve({ 
                            id: user.id, 
                            username: user.username, 
                            email: user.email 
                        });
                    } else {
                        reject(new Error('Invalid password'));
                    }
                }
            }
        );
    });
};

module.exports = {
    db,
    registerUser,
    loginUser
};
