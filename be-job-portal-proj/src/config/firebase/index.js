const admin = require("firebase-admin");
const { getDownloadURL } = require("firebase-admin/storage");

const serviceAccount = require("../secrets/firebase/service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://job-portal-53233.appspot.com",
});

const bucket = admin.storage().bucket();

module.exports = { bucket, getDownloadURL };
