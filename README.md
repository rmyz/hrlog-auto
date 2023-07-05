# HRLog-Auto

This tool allows you to automatically check-in and check-out on HRLog (MAC only for now, linux should work, didn't tested)

## Usage

1. Download the exec according to your platform(ex. hrlog-auto-macos) and `crontab.txt` on [this link](https://github.com/rmyz/hrlog-auto/releases)

2. Create a scripts folder under `~/.scripts`

3. Place the `hrlog-auto-...` script under `~/.scripts`

The script accepts 3 params in the following order: email, password, showWindow (this last is for debug purposes only)

5. Modify the `crontab.txt` call to the script to include your credentials by replacing "YOUR_EMAIL" and "YOUR_PASSWORD"

6. [Give crontab Full Disk Access](https://www.geekbitzone.com/posts/macos/crontab/macos-schedule-tasks-with-crontab/#giving-cron-full-disk-access) and execute the following command (this doesn't need to be under the `~/.scripts` folder)

```sh
crontab ./crontab.txt
```

To see if this worked you should run

```sh
crontab -l
```

## Configuration

To change the interval, by default 9:05 start, 18:05 finish, please check [CrontabGuru](https://crontab.guru/), then modify `crontab.txt` and run again

```sh
crontab ./crontab.txt
```
