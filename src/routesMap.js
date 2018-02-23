import { redirect, NOT_FOUND } from "redux-first-router"
import { fetchData } from "./utils"

export default {
  GALLERY: "/",
  ARTICLE: {
    path: "/article/:slug",
    thunk: async (dispatch, getState) => {
      const {
        jwToken,
        location: { payload: { slug } },
        videosByCategory
      } = getState()

      if (videosByCategory[category]) return
      const videos = await fetchData(`/api/videos/${category}`, jwToken)

      if (videos.length === 0) {
        return dispatch({ type: NOT_FOUND })
      }

      dispatch({ type: "VIDEOS_FETCHED", payload: { videos, category } })
    }
  }
}
