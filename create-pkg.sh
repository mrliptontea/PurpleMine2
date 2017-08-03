#!/bin/bash -e
TARGET="cloudogu.tar.gz"

# deleting existing archive
if [ -f "${TARGET}" ]; then
  rm -f "${TARGET}"
fi

# creating archive
tar cvfz "${TARGET}" --transform="s/^/Cloudogu\//" favicon/ fonts/ images/ javascripts/ stylesheets/

# copy to redmine dogu, if present
if [ -d "../ecosystem/containers/redmine/packages" ] ; then
  cp "${TARGET}" "../ecosystem/containers/redmine/packages/"
fi
