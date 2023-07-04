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

## Setting up crontab

To make this automatic, that happens for example at 09:00, 14:00 - 15:00 (launch pause), 18:00... We need to setup `crontab`

There are a lot of guides on how to do it, [we could use this one](https://www.geekbitzone.com/posts/macos/crontab/macos-schedule-tasks-with-crontab/)

Once we have crontab working, paste the following lines to make it work

```sh
05 9 * * 1-5 cd {PATH-TO-HRLOG-AUTO}/hrlog-auto && npm run test
00 14 * * 1-5 cd {PATH-TO-HRLOG-AUTO}/hrlog-auto && npm run test
00 15 * * 1-5 cd {PATH-TO-HRLOG-AUTO}/hrlog-auto && npm run test
05 18 * * 1-5 cd {PATH-TO-HRLOG-AUTO}/hrlog-auto && npm run test
```

To change the interval, please check [CrontabGuru](https://crontab.guru/)

## Future improvements

- Script to auto-setup everything

- Packaged app
