# Lando + Drupal + Gatsby

Local development environment for Gatsby and Drupal using Lando.

If you are already using
[Lando](https://docs.devwithlando.io/),
then this project will give you a quick way to get a
[Drupal](https://www.drupal.org/)
site set up along with a static
[Gatsby](https://www.gatsbyjs.org/)
site that pulls data from the Drupal site.

You can explore the
[JSON API](https://jsonapi.org/)
implementation in Drupal and how to query it with
[GraphQL](https://graphql.org/).

If you are not already using Lando and
[Docker](https://www.docker.com/),
then maybe now is a good time to try them out.
See the installation instructions below.

This is updated version of the repositorie Lando Gatsby Drupal
https://gitlab.com/benjifisher/lando-gatsby-drupal

## Getting started

Warning: these instructions are subject to change.

### Install Docker and Lando

#### System requirements

- macOS 10.10+
- Windows 10 Pro+ (or equivalent) with Hyper-V running
- Linux (with kernel version 4.x or higher)


#### Installation

Head over to the
[Lando releases](https://github.com/lando/lando/releases)
on GitHub and download the latest package for your OS.


### Start Lando

```
lando start
lando info
```

The first command takes a few minutes because it triggers a lot of actions.
It will

- Start the Docker containers.
- Install PHP packages with `composer`.
- Install the Gatsby CLI tool.
- Install `yarn` (with `npm`).
- Install Drupal with the Umami demo profile.
- Install a Gatsby project pulling data from the Drupal site.
- Build the Gatsby project.
- Move the Gatsby site to `gatsbydrupal/`.
- Tell you which URLs are being served.

In particular, you should be able to visit these pages in a web browser.

- Your Drupal site: https://drupal.lndo.site/
- Your JSON API endpoint: https://drupal.lndo.site/jsonapi
- Your Gatsby site: https://gatsbydrupal.lndo.site/ a copy of build from frontend/

Your browser will give you a warning about the site's certificate.
If that bothers you, then you can use `http` instead of `https`.

The second command gives more information about the configured containers.

For sample command-line output from these two commands, see
[Start Lando](docs/lando-start-log.md).

## Other ways to explore

### Build and run your Gatsby project

There are two ways you can use `nodejs` to serve your site:

```
cd frontend
lando gatsby develop --host 0.0.0.0
```

or

```
cd frontend
lando gatsby build
lando gatsby serve --host 0.0.0.0 --port 8000
```

That is, all `lando gatsby` commands should be run from the `frontend/`
subdirectory of the project.

Either way, you should be able to view your site at any of these URLS:

- https://frontend.lndo.site/
- https://frontend.lndo.site/blog/ (a list of articles imported from Drupal)
- [https://frontend.lndo.site/\_\_\_graphql](https://frontend.lndo.site/___graphql)
  (The GraphiQL browser)

These HTTPS pages will all trigger a security warning from your browser.
On macOS, but not Linux, you can avoid the warning by using HTTP variants.

The GraphiQL browser is available only when running the Gatsby development
server.

Another feature that only works in development mode is live preview/live update.
Edit and save an Article node in Drupal (`https://drupal.lndo.site`) and the
corresponding page in Gatsby (`https://decouple.lndo.site`), or the listing
page, will update automatically. This relies on the
[Gatsby Live Preview & Incremental Builds](https://www.drupal.org/project/gatsby) module.

Use CTRL-C in your terminal window to stop the node server.

#### Note

If you want to view the updated site at https://gatsbydrupal.lndo.site
after `lando gatsby build`, then copy the build site from `frontend/public/` to
`gatsbydrupal/`. This is done automatically when you (re)start Lando.

### Create a Gatsby project

If you want to run additional Gatsby sites, then run the following commands
starting from the root of the project.
(It should still work if you start in a subdirectory, but make sure to keep
your work organized.)

```
mkdir gatsby-test
cd gatsby-test
lando gatsby new
lando gatsby develop --host 0.0.0.0
```

The first three commands create the project.
The last command starts the Gatsby development server.

If you have multiple Gatsby sites, then only one of them can run on Port 8000,
and that is what you will be able to see using these URLS:

- https://decouple.lndo.site/ (security warning from browser)
- http://decouple.lndo.site/
- http://decouple.lndo.site:8000/

You can also browse GraphiQL by adding `___graphql` to any of those URLs.

Use CTRL-C in your terminal window to stop the node server.
