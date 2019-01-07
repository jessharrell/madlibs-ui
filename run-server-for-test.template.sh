#!/bin/bash
SERVER_PATH=<path-to-server-repo>
E2E_SERVER_CONFIG_PATH=$(pwd)/e2e/test-server.config
PUZZLE_LOCATION=$(mktemp -d)

function createTestServerConfig {
  echo '{' > ${E2E_SERVER_CONFIG_PATH}
  echo '    "PuzzleLocation": "'${PUZZLE_LOCATION}'"' >> ${E2E_SERVER_CONFIG_PATH}
  echo '}' >> ${E2E_SERVER_CONFIG_PATH}
}

function copyPuzzlesIntoTestLocation {
  cp -r $(PWD)/e2e/test-puzzles/. ${PUZZLE_LOCATION}
}

function cleanUp {
  rm ${E2E_SERVER_CONFIG_PATH}
  exit 0
}

trap cleanUp SIGTERM

createTestServerConfig
copyPuzzlesIntoTestLocation

pushd ${SERVER_PATH}

yarn serve:e2e ${E2E_SERVER_CONFIG_PATH}
