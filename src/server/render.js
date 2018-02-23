import React from "react"
import { Provider } from "react-redux"
import configureStore from "./configureStore"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req, res)
  if (!store) return // no store means redirect was already served

  const app = createApp(App, store)
  const appString = ReactDOM.renderToString(app)
  const stateJson = JSON.stringify(store.getState())

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })

  const site = req.headers.host.split(":")[0].split(".")[0]
  const context = { site }

  res.send(`
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="react-root">${appString}</div>
        ${js}
        ${cssHash}
        <link href="/css/${site}-theme-css.css" rel="stylesheet">
      </body>
    </html>
  `)
}

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
)
