#!/bin/bash

# Remove the Gatsby cache.
rm -rf frontend/.cache

cd drupal
drush --yes site:install standard --db-url=mysql://drupal8:drupal8@database:3306/drupal8 --account-pass=admin --site-name='Drupal-Gatsby'
drush --yes pm:enable jsonapi gatsby graphql
