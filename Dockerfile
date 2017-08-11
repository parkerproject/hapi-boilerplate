# take default image of node boron i.e  node 6.x
FROM node:6.10.1

#create an app directory
RUN mkdir /app

#make /app as the working directory
WORKDIR /app

COPY package.json yarn.lock /app/

# update the package manager, install git.
# install all the prod dependency and remove the unnnecessary packages again to make the build size small.
# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --production --pure-lockfile

COPY . /app/

#expose default port of the docker to 3000
EXPOSE 3000

#runs this command when the container is created, can be overriden in the docker-compose.yml
CMD ["yarn", "start"]