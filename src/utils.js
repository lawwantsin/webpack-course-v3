import routesMap from "./routesMap"

export const isServer = typeof window === "undefined"

export const fetchData = async (path, jwToken) =>
  fetch(`http://localhost:3000${path}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${jwToken || ""}`
    }
  }).then(data => data.json())
