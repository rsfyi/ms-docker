# use an existing docker image as a base
FROM alpine


# download the dependencies
RUN apk add --update redis

# start command
CMD ["redis-server"]

# 6034f687e070