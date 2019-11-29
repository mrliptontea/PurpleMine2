#!/bin/bash -e
TARGET="CloudoguRedmineTheme.tar.gz"

# deleting existing archive
if [ -f "${TARGET}" ]; then
  rm -f "${TARGET}"
fi

# creating archive
tar cvfz "${TARGET}" --transform="s/^/Cloudogu\//" favicon/ fonts/ images/ javascripts/ stylesheets/

