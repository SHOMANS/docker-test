## This repo is a docker test I created just for trying creating images and container using docker

to build the image

```
docker build -t <tagName> .
docker build -t <tagName>:<version> .
```

to display all images

```
docker images
```

to run the container

```
docker run <imageName>
docker run --name <containerName> -p <exposedPort>:<mappedPort> -d <imageName>
docker run --name <containerName> -p <exposedPort>:<mappedPort> --rm <imageName>:<version>
docker run --name <containerName> -p <exposedPort>:<mappedPort> --rm -v <path>:<appPath> -v <node_modules for ex.> <imageName>:<version>
```

--name to name the container
-p to map the exposed port to a local port
-d to run the process in background
--rm to remove the container after it's stopped
-v to mount a volume

to stop the container

```
docker stop <containerName>
```

to list all exist containers

```
docker ps
docker ps -a
```

-a to show all containers

to re run exist container

```
docker start <name>
```

to delete an exist image

```
docker image rm <imageName>
docker image rm <imageName> -f
```

-f to force delete image even if it's in use

do delete an exist container

```
docker container rm <containerName>
```

to remove all container and images at same time

```
docker system prune -a
```

to start compose

```
docker-compose up
```

to stop compose

```
docker-compose down
docker-compose down --rmi all -v
```
