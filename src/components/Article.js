import React from "react"
import "../css/Article.css"
import NotFound from "./NotFound"

export default props => {
  try {
    const billboardStyle = {
      backgroundImage: `url(${props.data.posterImage})`
    }
    return (
      <div className="Article">
        <div className="billboard" style={billboardStyle} />
        <h1>{props.data.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.data.__content }}
        />
      </div>
    )
  } catch (error) {
    return <NotFound />
  }
}
