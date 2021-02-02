# Backend Assignment

We would like you to build a small JavaScript/Node.js backend service with just 1 endpoint.

The service will consume the [MusicBrainz API](https://musicbrainz.org/doc/MusicBrainz_API).

You're free to use any package you want to build the service. However we would like you to build the request to MusicBrainz yourself with Fetch, Axios or other package that makes barebone request.

Spend around 60 min building your service. Absolutly not more than 120 minutes.

# API

The service will accept GET-requests to /artist/:artistId ie http://localhost:3000/artist/cc197bad-dc9c-440d-a5b5-d52ba2e14234

This artistId is for Coldplay.

This endpoint in your service will return the result to the artist info endpoint in MusicBrainz.
https://musicbrainz.org/ws/2/artist/cc197bad-dc9c-440d-a5b5-d52ba2e14234?fmt=json

## Artists
Here's some artists to get you started.

Coldplay - cc197bad-dc9c-440d-a5b5-d52ba2e14234

Snoop Dogg - f90e8b26-9e52-4669-a5c9-e28529c47894

Pink Floyd - 83d91898-7763-47d7-b03b-b92132375c47


# Result

Please make your source code available via git with instructions on how to run it.