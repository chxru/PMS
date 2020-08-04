# Patient Tracking System

**Note:
This branch is abandoned. When I'm planning to create PMS my initial idea was to create a multi-user single database encrypted database. But later I understood that it would be a not necessary since the app is fully local-offline and will install in a single computer, a [multi-key encryption](https://crypto.stackexchange.com/questions/35616/multi-key-encryption) is a overkill and pointless. From now on, PMS is a single user application and aes encryption key will be user's password. But there are some code I did before taking this decision and here I preserve those code to remind myself mistakes I done in my past**

This application is made to store information about small-medium sized patient group.

Please note that this application is far away from full release. I'm consistently working on adding / improving features to this project.

Contributions are welcome!

### How to install

1. Install [node.js](https://nodejs.org/en/download/)
2. Clone the repo or download this [zip](https://github.com/CharukaHS/pts/archive/master.zip) file
3. Open command prompt inside folder and type `npm install`
4. For developing purpose, run `npm run start`
5. For compiled version, run `npm run make`. A setup will be created on `/out` folder

### TODO

1. Restric user signups by implement super-user / admin role
2. Generate a random, no hard coded key phase to encrypt patient database
3. Improve security
4. Add advance search options
5. Add a notification system based on patient data (notify about people who missed weekly clinic etc.)
