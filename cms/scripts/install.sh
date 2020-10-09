#!/bin/bash

# Remove the Gatsby cache.
rm -rf gatsby/.cache

cd cms
drush --yes site:install demo --db-url=mysql://drupal8:drupal8@database:3306/drupal8 --account-pass=admin --site-name='Drupal-Gatsby'
drush --yes pm:enable jsonapi gatsby
drush --yes pm:uninstall contact
