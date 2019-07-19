# Custom Drupal 8 theme with Storybook

Please review the information below before adding or editing theme code.

## Adding this theme to a Drupal 8 site

To enable this theme for a D8 site, do the following:

- Copy this repository into `themes/custom` and name it
- Rename theme yml files and update contents to reflect new theme name
- In Drupal, install the theme and set it as default.
- Install and enable the Components module.
- Export configuration for the theme and new module
- Add the block of code below to the `.gitattributes` file **in the root of the project repository**
- Customize variables in `tailwind.config.js`
- Customize storybook theme in `storybook/.storybook/customStorybookTheme.js`
- Delete this section of the README

```
# Add to .gitattributes. Customize the paths to asset files.

# Hide bundled files from git diff.
docroot/themes/custom/theme_name/build/index.css -diff
docroot/themes/custom/theme_name/build/index.js -diff

# To use this merge driver, add the following to `.git/config`:
# [merge "ours"]
#         name = "Keep ours merge"
#         driver = true
docroot/themes/custom/theme_name/build/index.css merge=ours
docroot/themes/custom/theme_name/build/index.js merge=ours
```

## Installation and local development

To use this theme, you must first install and enable the Components module.

From the theme directory, `cd` into `storybook` and then run `npm install` to install dependencies. **You will want to run all npm scripts from the storybook directory.**

The following npm scripts are available (see package.json for a complete list):

- `storybook`: build assets for the component library and serve it locally, watching files for changes
- `build-library`: build assets in the `build/` directory for use on the Drupal site

## Building components

Components are located in `storybook/components`. Following the principles of [atomic design](http://bradfrost.com/blog/post/atomic-web-design/), components should be split into atoms, molecules, and organisms. Consider which type of component you're building, and make sure larger components are composed of smaller ones. Page-level components are only for demonstration in storybook; there should not be a need for page-level styles.

Twig, SCSS, and JS for components should all be located in a single directory, e.g. `storybook/components/atoms/button` would hold `button.twig`, `button.scss`, and `Button.js`.

## Tailwind

This theme uses Tailwind for CSS utility classes. See `tailwind.config.js` for variables and comments describing the user of utility classes. These can be used in the markup or in the SCSS via the `@apply` keyword.

## Template files

The `templates` directory will house all Drupal template overrides. These should be organized into sensible directories like `nodes`, `fields`, `paragraphs`, etc. Important tips:

- Remember that any time you add or remove a new Drupal template override you must rebuild the cache.
- When overriding a template, copy the generic file from core/stable, then edit the file. Do not start from scratch.
- See [here](https://www.drupal.org/node/2354645) for details on template override
naming conventions.

These files will then include component template files from within storybook. To do so, use the storybook namespace that's set up in the `.info.yml` file via the Components module:

```
{% include '@storybook/organisms/layout/header/header.twig' %}
```

### Debugging Twig files

To debug Twig files:

1. Enable the devel and kint modules
2. Uncomment `$settings['cache']['bins']['render'] = 'cache.backend.null';` in
`settings.local.php`.
3. Add the following to `development.services.yml` under 'parameters':

```yml
  twig.config:
    debug: true
    auto_reload: true
    cache: false
```

4. Run `make cr` to rebuild the Drupal cache
5. Add `{{ devel_breakpoint() }}` to the template file you want to debug
6. Enable debugging in PhpStorm and your browser
7. Make the following changes to `docker-compose.yml` then restart containers:

```yml
# Set to 0
PHP_XDEBUG_REMOTE_CONNECT_BACK: 0

# Uncomment one of these
PHP_XDEBUG_REMOTE_HOST: 172.17.0.1 # Linux
PHP_XDEBUG_REMOTE_HOST: 10.254.254.254 # macOS, Docker < 18.03
```

8. Reload the site and you will be able to inspect the `context` array in the
debugging window to view available variables.

## Coding standards

Webpack will run stylelint and eslint on SCSS and JS files respectively. When you commit JS files, prettier will run and automatically correct any syntax issues before the file is committed.

You can also install the [CSS Alphabetical Rearranger](https://plugins.jetbrains.com/plugin/7489-css-alphabetical-rearranger) plugin for PhpStorm to reorder SCSS rules automatically.

## Rebasing and merge conflicts

Because we are committing compiled CSS and JS files, we've set up git to always use our version of the compiled CSS file when a merge conflict exists. To get this working, copy the following into your `.git/config` file in this repo:

```
[merge "ours"]
        name = "Keep ours merge"
        driver = true
```

Additionally, each time you rebase, the `post-rewrite` git hook will trigger webpack to build and will add compiled files to your last commit.

If you are merging in develop instead of rebasing onto it, you can basically follow these steps manually: when you run `git merge develop` and get a merge conflict with a bundled file, simply run webpack, then add the newly compiled file and run `git commit` to finish the merge.

## Preprocess functions

See [here](https://gist.github.com/oksana-c/27f9d14cf99a9ea8ddf03d103078ccb0) for an explanation of how to organize preprocess functions into separate files (note that we've removed the "process" directory but it can be added back if needed).