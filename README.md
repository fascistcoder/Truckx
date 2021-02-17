# Truckx

I choose to work with NodeJs (backend) with framework(ExpressJs) and MongoDb(database).

I choose nodejs because Node.js has large and active community that contribute many useful and mature modules which can be easily included and used. For example, to construct REST API such known modules as express, restify and hapi fit perfectly. They provide easy way to declare API, handle incoming parameters, errors, transformation to JSON, streaming and sending response.For example, if API code reads something from a database, the code stands at that place and waits for operation to finish. In order to handle other requests while that thread is busy, server spawns more threads using more memory and processing time.

Node.js is a perfect approach to implement such REST API Proxy and to comply with all performance requirements:

Easy to write API and interaction code
There are a lot of ready and useful modules to work with pure HTTP(s), REST API, Web Services, Sockets, etc that can be used both to construct API and to implement interaction with existing applications.

Streaming support
Using event-driven and non-blocking I/O approach of Node.js it is easy to stream results back to the client of API as they are getting from existing applications.

Monitoring possibilities
It is easy to get events on request/connection life cycle and collect metrics on API usage in Node.js.

Authentication support
Authentication strategies like OAuth, OpenID, Basic and others are available through passport.js, everyauth and other modules and can be applied easily to API.

Node.js is lightweight, fast and scalable

MongoDB -> NoSQL database provides flexibility for the schma structure and is more scalable than SQL system. It is easier to query and store data on.

ASSUMPTIONS: - LOGIN: Assume that the random secret required for generation of authetication token is stored is stored securely at the server side for verification purposes.

- ROUTING: Assume that the messages delivered to the rest API are already routed by the TCP server.
Hence, we don't listen to TCP server.

- FILENAME FOR VIDEOS: Assume that the video files delivered by the dash cams comes in small chunks of
        say 5 minutes video chunk. And when an alarm message is triggered then dashcam sends us say chunks of past 30 minutes files named automatically in format IMEI_timestampOfAlarm_1.mp4, 
        IMEI_timestampOfAlarm_2.mp4 ... . This will help to relate the filenames to the alarm incident and will be easier to query later if needed to query as per the timestamp or as per alarm.

- We assume that user data is already stored. And when the login is generated then the dashcam stores an authetication token which expires after 6 hours. For every other API call dashcam needs to send the token as the query parameter which is then verified by the isAuth middleware before giving access to the API call. 



