# auto-upgrade-packages
apt-get wrapper for periodic package upgrades

### Prerequisities
`Ubuntu 16.04` or later

`NodeJS`

### Installing

 **download apt-auto-upgrades.js**
 
 **move apt-auto-upgrades.js to /usr/local/sbin :**
 ```code
 $ mv apt-auto-upgrades.js /usr/local/sbin/apt-auto-upgrades.js
 ```

**Permissions:**
 ```code
 $ chmod 700 apt-auto-upgrades.js
 ```
 Note: the file owner has to root or a user with sudo privilege.
 
 **adding a cron job:**
 ```code
 $ crontab -e
 ```
and then append the following line:
```code
* * * * * /usr/local/sbin/apt-auto-upgrades.js package1 package2 ... >>  /var/log/apt-auto-upgrades.log
```
This will run the script every minute

**Example:**
```code
* * * * * /usr/local/sbin/apt-auto-upgrades.js git >>  /var/log/apt-auto-upgrades.log
```

 **Starting the cron daemon:**
 ```code
 $ /etc/init.d/cron start
 ```
## Logging
Messages and errors are appended to `/var/log/apt-auto-upgrades.log`

