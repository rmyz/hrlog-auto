# HRLog-Auto

This tool allows you to automatically check-in and check-out on HRLog (MAC only for now, maybe linux work, didn't tested)

## Usage

?

## Setting up crontab

To make this automatic, that happens for example at 09:00, 14:00 - 15:00 (launch pause), 18:00... We need to setup `crontab`

There are a lot of guides on how to do it, [we could use this one](https://www.geekbitzone.com/posts/macos/crontab/macos-schedule-tasks-with-crontab/)

Once we have crontab working, change the `{PATH-TO-HRLOG-AUTO}` in `crontab.txt` and execute

```sh
crontab ./crontab.txt
```

To change the interval, please check [CrontabGuru](https://crontab.guru/)

## Future improvements

- Script to auto-setup everything
