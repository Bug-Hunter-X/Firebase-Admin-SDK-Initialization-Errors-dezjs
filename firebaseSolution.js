The solution involves ensuring correct credential configuration and specifying the database URL and other necessary details within the `firebaseConfig` object.  Using environment variables can enhance security.  Here's an example using a service account key file:

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Path to your service account key file

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "YOUR_DATABASE_URL", // Replace with your database URL
  storageBucket: "YOUR_STORAGE_BUCKET", // Optional, add other config options as needed
};

admin.initializeApp(firebaseConfig);

// ... rest of your Firebase Admin SDK code
```
**Alternative using environment variables:**

```javascript
const admin = require('firebase-admin');

const firebaseConfig = {
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Retrieve URL from environment variables
};

admin.initializeApp(firebaseConfig);
```
Remember to replace placeholders like `YOUR_DATABASE_URL` and  `./path/to/serviceAccountKey.json` with your actual values.