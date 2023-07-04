# HRLog-Auto

This tool allows you to automatically check-in and check-out on HRLog

## Prerequisites

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)

## Usage

First of all, we will need to clone the repo

```sh
git clone https://github.com/rmyz/hrlog-auto.git
```

Then, install all the deps needed

```sh
npm i
```

Once you have everything installed, rename `credentials.example.json` to `credentials.json` and change the credentials you use to log in

```json
{
  "username": "TEST_USERNAME@TEST.EMAIL",
  "password": "TEST_PASSWORD"
}
```

Finally, run the script to check-in/check-out

```sh
npm run test
```

## Future improvements

- Cronjob

- Packaged app

- Script to autosetup
