import React from "react"
import ContentLoader from "react-content-loader"

const skeleton = () => (
  <ContentLoader
    speed={2}
    width={620}
    height={300}
    viewBox="0 0 620 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="3" y="19" rx="0" ry="0" width="399" height="25" />
    <rect x="575" y="17" rx="0" ry="0" width="26" height="24" />
    <rect x="6" y="57" rx="0" ry="0" width="165" height="16" />
    <rect x="5" y="99" rx="0" ry="0" width="286" height="33" />
    <rect x="4" y="145" rx="0" ry="0" width="459" height="30" />
    <rect x="3" y="187" rx="0" ry="0" width="277" height="28" />
    <rect x="381" y="217" rx="0" ry="0" width="225" height="26" />
    <rect x="8" y="260" rx="0" ry="0" width="126" height="29" />
  </ContentLoader>
)

export default skeleton

