# Wordpress

## Backup and Restore
* tar the /var/www directory; which includes the "upload, themes, plugins" dirs
* backup the database; look in `wp_config.php` to see the database name, user and password
* use `<siteurl>/wp_admin` to login; store admin credentials
* `siteurl` is important; add to `/etc/hosts` while under development
* Use a DigitalOcean instance
	* root password
	* mysql admin password
	* dev instance IP; put in `/etc/hosts`
* Keep `/var/www` in GitHub repo under branch of sitename
* Keep `backup.sql` in GitHub repo
 
