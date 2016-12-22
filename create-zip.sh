#!/bin/bash -e

# deleting existing archive
rm -f Cloudogu.zip

# creating archive
zip -r Cloudogu.zip . -i favicon/\* fonts/\* images/\* javascripts/\* stylesheets/\*

# copy to redmine dogu, if present
if [ -d "../ecosystem/containers/redmine/resources" ] ; then
  cp Cloudogu.zip ../ecosystem/containers/redmine/resources/
fi
