<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/branding/SVG/banner-logo-solid.svg?sanitize=true"/>
<br/>
<br/>
<a href="https://github.com/jellyfin/jellyfin-web">
<img alt="GPL 2.0 License" src="https://img.shields.io/github/license/jellyfin/jellyfin-web.svg"/>
</a>
<a href="https://github.com/jellyfin/jellyfin-web/releases">
<img alt="Current Release" src="https://img.shields.io/github/release/jellyfin/jellyfin-web.svg"/>
</a>
<a href="https://translate.jellyfin.org/projects/jellyfin/jellyfin-web/?utm_source=widget">
<img src="https://translate.jellyfin.org/widgets/jellyfin/-/jellyfin-web/svg-badge.svg" alt="Translation Status"/>
</a>
<br/>
<a href="https://opencollective.com/jellyfin">
<img alt="Donate" src="https://img.shields.io/opencollective/all/jellyfin.svg?label=backers"/>
</a>
<a href="https://features.jellyfin.org">
<img alt="Feature Requests" src="https://img.shields.io/badge/fider-vote%20on%20features-success.svg"/>
</a>
<a href="https://matrix.to/#/+jellyfin:matrix.org">
<img alt="Chat on Matrix" src="https://img.shields.io/matrix/jellyfin:matrix.org.svg?logo=matrix"/>
</a>
<a href="https://www.reddit.com/r/jellyfin">
<img alt="Join our Subreddit" src="https://img.shields.io/badge/reddit-r%2Fjellyfin-%23FF5700.svg"/>
</a>
</p>
<h1 align="left">Overview</h1>
<p>
This is a solution to create a media streaming application using <i>Jellyfin</i> — a free, open-source media server software that allows you to host your own movies, TV shows, and music collections.
</p>
<p>
In this setup, the application will inherit <i>Client-Server</i> architecture. The web client is being rewritten into <i>TypeScript</i> and <i>React</i>. The server utilizes <i>Jellyfin</i> which is integrated with <i>Nginx</i> acting as a reverse proxy for enhanced security and efficient handling of incoming requests while media files are sourced from multiple cloud drives by using <i>Rclone</i>, allowing playback directly from multiple clouds.
</p>
<h1 align="left">How it works</h1>

| [Jellyfin-web](https://github.com/jellyfin/jellyfin-web.git) | [Jellyfin](https://jellyfin.org) | [Nginx](https://www.nginx.com) | [Rclone](https://rclone.org) |
| -------- | ----- | ------ | ------ |
| Serves as a web client connecting to _Jellyfin_ server.| Utilize as the core media server, managing your movie and TV show libraries.  | Serves as a reverse proxy, directing external requests to _Jellyfin_. | Mount multiple cloud drives as a _Virtual File System_. |
| _React_ as a framework offering a user-friendly interface. | _Jellyfin_ offers a robust media management capabilities. | _Nginx_ manages _SSL/TLS encryption_, load balancing, and caching, enhancing the performance and security of your media server. | _Rclone_ enables _Jellyfin_ to seamlessly access and stream media files directly from the cloud, reducing the need for local storage. |
<h1 align="left">Data Flow Diagram</h1>
<img src="https://user-images.githubusercontent.com/76725656/280446653-eb8edefd-3e84-4cf5-b611-94169ff6e430.png" alt="Data Flow Diagram" />
<h1 align="left">Translations</h1>
<p>Translations can be improved very easily from our <a href="https://translate.jellyfin.org/projects/jellyfin/jellyfin-web">Weblate</a> instance. Look through the following graphic to see if your native language could use some work!</p>
<a href="https://translate.jellyfin.org/engage/jellyfin/?utm_source=widget">
<img src="https://translate.jellyfin.org/widgets/jellyfin/-/jellyfin-web/multi-auto.svg" alt="Detailed Translation Status" />
</a>
<h1 align="left">Build Process</h1>
<h3 align="left">Dependencies</h3>

- [Node.js](https://nodejs.org/en/download)
- npm (included in Node.js)

<h3 align="left">Getting Started</h3>

1. Clone or download this repository.

   ```sh
   git clone https://github.com/nqh00/gautrang.git
   cd gautrang
   ```

2. Install build dependencies in the project directory.

   ```sh
   npm i
   ```

3. Run the web client with webpack for local development.

   ```sh
   npm start
   ```

4. Build the client with sourcemaps available.

   ```sh
   npm run build:development
   ```

   or

   ```sh
   npm run build:production
   ```
   
<h3 align="left">Directory Structure</h3>

> [!NOTE]
> We are in the process of refactoring to a [new structure](https://forum.jellyfin.org/t-proposed-update-to-the-structure-of-jellyfin-web) based on [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) architecture guidelines.
> Most new code should be organized under the appropriate app directory unless it is common/shared.

```
.
└── src
    ├── apps
    │   ├── dashboard     # Admin dashboard app layout and routes
    │   ├── experimental  # New experimental app layout and routes
    │   └── stable        # Classic (stable) app layout and routes
    ├── assets            # Static assets
    ├── components        # Higher order visual components and React components
    ├── constants         # Common constant values
    ├── controllers       # Legacy page views and controllers 🧹 ❌
    ├── elements          # Basic webcomponents and React equivalents 🧹
    ├── hooks             # Custom React hooks
    ├── lib               # Reusable libraries
    │   ├── globalize     # Custom localization library
    │   ├── legacy        # Polyfills for legacy browsers
    │   ├── navdrawer     # Navigation drawer library for classic layout
    │   └── scroller      # Content scrolling library
    ├── plugins           # Client plugins
    ├── scripts           # Random assortment of visual components and utilities 🐉 ❌
    ├── strings           # Translation files (only commit changes to en-us.json)
    ├── styles            # Common app Sass stylesheets
    ├── themes            # CSS themes
    ├── types             # Common TypeScript interfaces/types
    └── utils             # Utility functions
```

- ❌ &mdash; Deprecated, do **not** create new files here
- 🧹 &mdash; Needs cleanup
- 🐉 &mdash; Serious mess (Here be dragons)
