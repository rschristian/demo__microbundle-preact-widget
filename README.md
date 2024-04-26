# Potentially useful info

- In our build script, we set `--external none`, which tells Microbundle to bundle all dependencies into your final output. This is useful if you want to distribute this widget as a single, standalone file, but is sub-optimal if any of your users may already be using some of the same dependencies. Just something to think about.

- As mentioned, CJS is no good for the browser. Because your example contained `<script type="module"` (which is exclusive to ESM), I went ahead and used the Modern output (which is ESM) in the demo. Alternatively, you could use the UMD output by stripping `type="module"` from the script tag andreplacing `demo/demo-widget.js` with `dist/demo-widget.umd.js`. Either option will work just fine.
