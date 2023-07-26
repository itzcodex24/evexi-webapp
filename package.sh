#!/usr/bin/env bash

# Get the package version from package.json file
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

# Print out the version to the console
PACKAGE_NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "Package name: $PACKAGE_NAME"
echo "Package version: $PACKAGE_VERSION"

 if [ ! -d "build" ]; then 
   mkdir build
 fi

 rm -rf build/*

 npm run build

 cd dist

 zip -r ../build/$PACKAGE_NAME-$PACKAGE_VERSION.zip .

 rm -r ../dist



