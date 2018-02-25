# BriteCore UI Design Project Notes

I approached each piece of this project (HTML, SCSS, and JavaScript) individually in this project. I'll lay out my thoughts while I was coding out each piece here and then I'll talk about how I can improve the current design, or why I made the designs that I did while creating the project.

## How To Preview

Launch `app.html` for the app, and `design.html` for just the static design.

## HTML

The first thing that I did was started laying out the structure of the markup in a separate file called `design.html`. This is a static version of the page where the only goal was to recreate the design.

The recreation of the design isn't pixel-perfect by any means, but the gist is definitely there.

I didn't attempt to recreate the icons or any super small details because the goal of the project was to showcase how the code would be organized.

## SCSS

The SCSS in this demo is inside of one file `styles.css` and then compiled manually into `styles.compiled.css`

The sections are **Variables**, **Resets**, **SCSS Extensions**, **Layout Classes**, **Layout Helper Classes**, **Typography Classes**, and finally **Component Classes**.

In the most ideal case the way that these files would be organized would be like the following.

- styles
  - variables.scss
  - normalize.css
  - reset.scss
  - extensions.scss
  - layout.scss
  - typography.scss

**And then each component's scss would be inside of its own individual .vue file.**

## JavaScript

In this demo there's `app.html` which takes care of the initialization of the app. Inside of this file you can see the templates for each individual component.

This was only done so that previewing of the app would be done quickly. **In an ideal production environment Webpack would be set up and each component would have its own .vue file.**

It would look something like the following:

- components
  - britecore-header.vue
  - britecore-input.vue
  - field-group.vue
  - fieldtypes-filterable.vue
  - tag-selector.vue

And then there's `app.js` which is using a Vue.js Router to link out to `/app.html#/questions/new` and show a component called `NewQuestion`. It's also using Vuex to take care of the intitial state and then passing it down to its children. Most components beside this *NewQuestion* one are functional and explicitly take their props.

Ideally in a production environment this would be organized something like the following:

- routes
  - new-question.vue
