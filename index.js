const crypto = require('crypto');
const fs = require('fs');

// Define file names
const env = "live"; // Change to 'dev' or 'prod' as needed
const keyPrefix = `${env}-REDVision`;
const privateKeyName = `${keyPrefix}-privatekey.pem`;
const publicKeyName = `${keyPrefix}-publickey.pem`;

// Generate RSA Key Pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 3072, // Key size in bits
    publicKeyEncoding: {
        type: 'spki',      // Public key format
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',     // Private key format
        format: 'pem'
    }
});

// Write keys to files
fs.writeFileSync(privateKeyName, privateKey);
fs.writeFileSync(publicKeyName, publicKey);

console.log(`Keys generated and saved as:
- Private Key: ${privateKeyName}
- Public Key: ${publicKeyName}`);
