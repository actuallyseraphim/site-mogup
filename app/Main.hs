{-# LANGUAGE OverloadedStrings #-}

import Network.Wai
import Network.HTTP.Types
import Network.Wai.Handler.Warp (run)
import Network.Wai.Middleware.Static

app :: Application
app = staticPolicy (addBase "static") $ \request respond -> 
    case rawPathInfo request of
        "/" -> respond indexHtml
        _ -> respond notFound

indexHtml :: Response
indexHtml = responseFile
  status200
  [("Content-Type", "text/html; charset=utf-8")]
  "static/index.html"
  Nothing

notFound :: Response
notFound = responseLBS
  status404
  [("Content-Type", "text/plain")]
  "404 - Not Found"

main :: IO ()
main = do
    putStrLn "http://localhost:8080/"
    run 8080 app
