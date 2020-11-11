# **Node Crawler**
It is a small web crawing service which enables you to quickly crawl a webpage and extract meta information , including open graph parameters (ogp) using a simple rest api.

# **Stack information**
The project is built on nodejs using typescript compiler. It uses redis for caching and winston as a logger.

# **Steps for Installation**
* **Clone the project**
* **Type npm i**
* **Set environment variables for your use (by creating .env file)**
  * Although the application is completely functional even if you don't set any variables, still the environment variables which can be used are :
      1. APP_PORT
      2. ENABLE_CACHING (y/n)
      3. REDIS_PORT
      4. REDIS_HOST
* **npm run start**

# **Sample usage**
* use endpoint /crawl to extract meta about a url. For example,
  ```
    POST http://localhost:4200/crawl
    headers: content-type: application/json
    body: {
        "url": "https://www.facebook.com"
    }
   ```
   will extarct meta from url www.facebook.com. The response should look like :
   ```{
  "title": "Facebook - लॉग इन या साइन अप करें",
  "description": "एक खाता बनाएँ या Facebook में लॉग इन करें. अपने मित्रों, परिवार के लोगों और अन्य परिचितों से जुड़ें. फ़ोटो और वीडियो साझा करें, संदेश भेजें और अपडेट पाएँ.",
  "images": [
    {
      "url": "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
    },
    {
      "url": "https://facebook.com/security/hsts-pixel.gif?c=3.2.5",
      "width": 0,
      "height": 0
    }
  ],
  "videos": [],
  "site_name": "Facebook",
  "url": "https://www.facebook.com/",
  "image": "https://www.facebook.com/images/fb_icon_325x325.png"
  }
